<?php

require_once 'model.php';

class Controller extends Model {
    public function register($userName, $fullName, $password, $email) {
        $model = new Model();
        $model->register($userName, $fullName, $password, $email);
    }
    public function changeProfile($userName, $fullName, $password, $email, $userID) {
        $model = new Model();
        $model->updateProfile($userName, $fullName, $password, $email, $userID);
    }
    public function deleteAccount($userID) {
        $model = new Model();
        $model->deleteProfile($userID);
    }
    public function registerStudent($userID) {
        $model = new Model();
        $model->insertStudent($userID);
    }
    public function enrollStudent($userID, $courseID) {
        $model = new Model();
        $model->setStudent($userID, $courseID);
    }

    public function login($userName, $password) {
        $model = new Model();
        $userData = $model->getuser($userName);
        $user = $userData['result'];
        $stmt = $userData['stmt'];
        

        if ($row = $user->fetch_assoc()) {
            $storedPassword = $row['password'];
            $pwdCheck = password_verify($password, $storedPassword);
            if ($pwdCheck) {
                $userID = $row['userId'];
                $userName = $row['userName'];
                $stmt->close();
                $model->closeConnection();
                echo json_encode(["success" => true, "userName" => $userName, "userID" => $userID]);
                return;
            }
        }
        

        $stmt->close();
        $this->closeConnection();
        echo json_encode(["success" => false, "message" => "Invalid username or password"]);
        return;
    }
    public function adminLogin($userName, $password) {
        $model = new Model();
        $userData = $model->getAdmin($userName);
        $user = $userData['result'];
        $stmt = $userData['stmt'];
        

        if ($row = $user->fetch_assoc()) {
            $storedPassword = $row['password'];
            $pwdCheck = $storedPassword == $password;
            if ($pwdCheck) {
                $userName = $row['userName'];
                $stmt->close();
                $model->closeConnection();
                echo json_encode(["success" => true, "userName" => $userName]);
                return;
            }
        }
        

        $stmt->close();
        $this->closeConnection();
        echo json_encode(["success" => false, "message" => "Invalid username or password"]);
        return;
    }
    public function fetchUser($userID){
        $model = new Model();
        $result = $model->getUserProfile($userID);
    
        if ($result) {
            $user = $result->fetch_assoc();
            $this->closeConnection();
            return $user;
        }
    
        $this->closeConnection();
        return null;
    }
    public function addCourse($image, $title, $description, $duration, $details) {
        $model = new Model();
        $model->insertCourse($image, $title, $description, $duration, $details);
    }
    public function deleteCourse($courseID) {
        $model = new Model();
        $model->deleteCourseID($courseID);
    }
    public function deleteRoom($roomID) {
        $model = new Model();
        $model->deleteRoomID($roomID);
    }
    public function addRoom($courseID, $roomTitle, $roomDescription) {
        $model = new Model();
        $model->insertRoom($courseID, $roomTitle, $roomDescription);
    }
    public function question($question, $userID, $roomID) {
        $model = new Model();
        $questionID = $model->askQuestion($question, $userID, $roomID);
        return $questionID;
    }
    public function answer($questionID, $userID, $answer) {
        $model = new Model();
        $model->adminAnswer($questionID, $userID, $answer);
    }
    public function courses(){
        $model = new Model();
        $result = $model->getCourses();
        $course = [];

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $course[] = $row;
            }
        }

        $this->closeConnection();
        return $course;
    }
    public function getStudents(){
        $model = new Model();
        $result = $model->fetchStudents();
        $students = [];

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $students[] = $row;
            }
        }

        $this->closeConnection();
        return $students;
    }
    public function getQuestions($roomID){
        $model = new Model();
        $result = $model->fetchQuestion($roomID);
        $question = [];

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $question[] = $row;
            }
        }

        $this->closeConnection();
        return $question;
    }
    public function getAnswers($questionID){
        $model = new Model();
        $result = $model->fetchQuestionsAnswers($questionID);
        $data = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }
        $this->closeConnection();
        return $data;
    }
    public function getAllQuestionsAnswers($roomID) {
        $model = new Model();
        $result = $model->fetchAllQuestionsAnswers($roomID);

        $questionsAnswers = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $questionsAnswers[] = $row;
            }
        }
    
        $this->closeConnection();
        return $questionsAnswers;
    }

    public function getRooms() {
        $model = new Model();
        $result = $model->fetchRooms();
        $rooms = [];

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $rooms[] = $row;
            }
        }

        $this->closeConnection();
        return $rooms;
    }
    
}

?>