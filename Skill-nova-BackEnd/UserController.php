<?php

require_once 'controller.php';

class UserController extends Controller {
    public function handleRequest() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = json_decode(file_get_contents('php://input'), true);
            // echo $data;

            $user = new Controller();
            if (isset($data['action'])) {
                if ($data['action'] === 'login' && isset($data['userName']) && isset($data['password'])) {
                    $user->login($data['userName'], $data['password']);
                } else if ($data['action'] === 'register' && isset($data['userName']) && isset($data['fullName']) &&
                    isset($data['password']) && isset($data['email'] )) {
                    $user->register($data['userName'], $data['fullName'], $data['password'], $data['email']);
                } else if ($data['action'] === 'changeProfile' && isset($data['userName']) && isset($data['fullName']) &&
                    isset($data['password']) && isset($data['email']) && isset($data['userID'])) {
                    $user->changeProfile($data['userName'], $data['fullName'], $data['password'], $data['email'], $data['userID']);
                } else if ($data['action'] === 'deleteProfile' && isset($data['userID'])) {
                    $user->deleteAccount($data['userID']);
                } else if ($data['action'] === 'enrollStudent' && isset($data['courseID']) && isset($data['userID'])) {
                    $user->enrollStudent($data['userID'], $data['courseID']);
                } else if ($data['action'] === 'addCourse' && isset($data['image']) && isset($data['title']) &&
                    isset($data['description']) && isset($data['duration']) && isset($data['details'])) {
                    $user->addCourse($data['image'], $data['title'], $data['description'], $data['duration'], $data['details']);
                } else if ($data['action'] === 'deleteCourse' && isset($data['courseID'])) {
                    $user->deleteCourse($data['courseID']);
                } else if ($data['action'] === 'deleteRoom' && isset($data['roomID'])) {
                    $user->deleteRoom($data['roomID']);
                } else if ($data['action'] === 'addRoom' && isset($data['courseID']) && isset($data['roomTitle']) && isset($data['roomDescription'])) {
                    $user->addRoom($data['courseID'], $data['roomTitle'], $data['roomDescription']);
                } else if ($data['action'] === 'AskQuestion' && isset($data['question']) && isset($data['userID']) && isset($data['roomID'])) {
                    $questionID = $user->question($data['question'], $data['userID'], $data['roomID']);
                    return $questionID;
                } else if ($data['action'] === 'setAnswer' && isset($data['answer']) && isset($data['questionID'])
                && isset($data['userID'])) {
                    $questionID = $data['questionID'];
                    $answer = $data['answer'];
                    $userID = $data['userID'];
                    $user->answer($questionID, $userID, $answer);
                }
                else {
                    echo json_encode(["success" => false, "message" => "Invalid request: Missing action or fields"]);
                }
            }
        }
    }
    
}

?>