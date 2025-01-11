<?php

require_once 'UserController.php';
// Allows requests from any origin
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// Allows specific HTTP methods
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Allows specific headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$controller = new Controller();
$userController = new UserController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['action']) && $_GET['action'] === 'fetchData') { 
        $data = $controller->courses();
        echo json_encode($data);
        exit();
    } else if (isset($_GET['userID'])) {
        $userID = intval($_GET['userID']);
        $data = $controller->fetchUser($userID);
        echo json_encode($data);
        exit();
    } else if (isset($_GET['roomID'])) {
        $roomID = intval($_GET['roomID']);
        $data = $controller->getQuestions($roomID);
        echo json_encode($data);
        exit();
    } else if (isset($_GET['questionID'])) {
        $questionID = intval($_GET['questionID']);
        $data = $controller->getAnswers($questionID);
        echo json_encode($data);
        exit();
    } elseif(isset($_GET['answerRoomID'])) {
        $roomID = intval($_GET['answerRoomID']);
        $data = $controller->getAllQuestionsAnswers($roomID);
        echo json_encode($data);
        exit();
    } 
    elseif(isset($_GET['action']) && $_GET['action'] === "Allrooms") {
        $data = $controller->getRooms();
        echo json_encode($data);
        exit();   
    }
    else {
        echo json_encode(["success" => false]);
    }
}
else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userController->handleRequest();
}


?>