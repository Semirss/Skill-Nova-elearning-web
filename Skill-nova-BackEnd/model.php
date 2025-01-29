<?php

require_once 'db.php';

class Model extends DB {
    public function register($userName, $fullName, $password, $email) {
        $this->connect();

        $sql = "SELECT * FROM user WHERE userName = ?";
        $stmt = $this->conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["success" => false, "message" => "Prepare failed: " . $this->conn->error]);
            return;
        }
        $stmt->bind_param("s", $userName);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $stmt->close();
            $this->closeConnection();
            echo json_encode(["success" => false, "message" => "User already exists"]);
            return;
        }

        $hashedPwd = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO user (userName, fullName, password, email) VALUES (?, ?, ?, ?)";
        $stmt = $this->conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["success" => false, "message" => "Prepare failed: " . $this->conn->error]);
            return;
        }
        $stmt->bind_param("ssss", $userName, $fullName, $hashedPwd, $email);

        if ($stmt->execute()) {
            $userID = $stmt->insert_id;
            $stmt->close();
            $this->closeConnection();
            $response = ["success" => true, "message" => "Registration successful", "userID" => $userID];
            $json_response = json_encode($response);
            if ($json_response === false) {
                echo json_encode(["success" => false, "message" => json_last_error_msg()]);
            } else {
                echo $json_response;
            }
            return;
        } else {
            $error = "Error: " . $stmt->error;
            $stmt->close();
            $this->closeConnection();
            echo json_encode(["success" => false, "message" => $error]);
            return;
        }
    }

    public function updateProfile($userName, $fullName, $password, $email, $userID) {
        $this->connect();

        $hashedPwd = password_hash($password, PASSWORD_DEFAULT);
        $sql = "UPDATE user SET userName = ?, fullName = ?, password = ?, email = ? WHERE userID = ?";
        $stmt = $this->conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["success" => false, "message" => "Prepare failed: " . $this->conn->error]);
            return;
        }
        $stmt->bind_param("ssssi", $userName, $fullName, $hashedPwd, $email, $userID);

        if ($stmt->execute()) {
            $userID = $stmt->insert_id;
            $stmt->close();
            $this->closeConnection();
            $response = ["success" => true, "message" => "Updated successfully"];
            $json_response = json_encode($response);
            if ($json_response === false) {
                echo json_encode(["success" => false, "message" => json_last_error_msg()]);
            } else {
                echo $json_response;
            }
            return;
        } else {
            $error = "Error: " . $stmt->error;
            $stmt->close();
            $this->closeConnection();
            echo json_encode(["success" => false, "message" => $error]);
            return;
        }
    }

    public function deleteProfile($userID) {
        $this->connect();

        $sql = "DELETE FROM user WHERE userID = ?";
        $stmt = $this->conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["success" => false, "message" => "Prepare failed: " . $this->conn->error]);
            return;
        }
        $stmt->bind_param("i", $userID);

        if ($stmt->execute()) {
            $stmt->close();
            $this->closeConnection();
            $response = ["success" => true, "message" => "Deleted successfully"];
            $json_response = json_encode($response);
            if ($json_response === false) {
                echo json_encode(["success" => false, "message" => json_last_error_msg()]);
            } else {
                echo $json_response;
            }
            return;
        } else {
            $error = "Error: " . $stmt->error;
            $stmt->close();
            $this->closeConnection();
            echo json_encode(["success" => false, "message" => $error]);
            return;
        }
    }

    public function deleteCourseID($courseID) {
        $this->connect();

        $sql = "DELETE FROM course WHERE courseID = ?";
        $stmt = $this->conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["success" => false, "message" => "Prepare failed: " . $this->conn->error]);
            return;
        }
        $stmt->bind_param("i", $courseID);

        if ($stmt->execute()) {
            $stmt->close();
            $this->closeConnection();
            $response = ["success" => true, "message" => "Deleted successfully"];
            $json_response = json_encode($response);
            if ($json_response === false) {
                echo json_encode(["success" => false, "message" => json_last_error_msg()]);
            } else {
                echo $json_response;
            }
            return;
        } else {
            $error = "Error: " . $stmt->error;
            $stmt->close();
            $this->closeConnection();
            echo json_encode(["success" => false, "message" => $error]);
            return;
        }
    }

    public function deleteRoomID($roomID) {
        $this->connect();

        $sql = "DELETE FROM room WHERE roomID = ?";
        $stmt = $this->conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["success" => false, "message" => "Prepare failed: " . $this->conn->error]);
            return;
        }
        $stmt->bind_param("i", $roomID);

        if ($stmt->execute()) {
            $stmt->close();
            $this->closeConnection();
            $response = ["success" => true, "message" => "Deleted successfully"];
            $json_response = json_encode($response);
            if ($json_response === false) {
                echo json_encode(["success" => false, "message" => json_last_error_msg()]);
            } else {
                echo $json_response;
            }
            return;
        } else {
            $error = "Error: " . $stmt->error;
            $stmt->close();
            $this->closeConnection();
            echo json_encode(["success" => false, "message" => $error]);
            return;
        }
    }
    
    public function insertStudent($userID) {
        $this->connect();

        $sql = "INSERT INTO student (userid) VALUES (?)";
        $stmt = $this->conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["success" => false, "message" => "Prepare failed: " . $this->conn->error]);
            return;
        }
        $stmt->bind_param("i", $userID);

        if ($stmt->execute()) {
            $stmt->close();
            $this->closeConnection();
            $response = ["success" => true, "message" => "Enrolled successfully"];
            $json_response = json_encode($response);
            if ($json_response === false) {
                echo json_encode(["success" => false, "message" => json_last_error_msg()]);
            } else {
                echo $json_response;
            }
            return;
        } else {
            $error = "Error: " . $stmt->error;
            $stmt->close();
            $this->closeConnection();
            echo json_encode(["success" => false, "message" => $error]);
            return;
        }
    }
    public function setStudent($userID, $courseID) {
        $this->connect();

        $sql = "SELECT * FROM student WHERE userID = ? AND courseID = ?";
        $stmt = $this->conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["success" => false, "message" => "Prepare failed: " . $this->conn->error]);
            return;
        }
        $stmt->bind_param("ii", $userID, $courseID);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $stmt->close();
            $this->closeConnection();
            echo json_encode(["success" => false, "message" => "Already enrolled"]);
            return;
        }
        else {

            $sql = "INSERT INTO student (userID, courseID) VALUES (?, ?)";
            $stmt = $this->conn->prepare($sql);
            if (!$stmt) {
                echo json_encode(["success" => false, "message" => "Prepare failed: " . $this->conn->error]);
                return;
            }
            $stmt->bind_param("ii", $userID, $courseID);

            if ($stmt->execute()) {
                $studID = $stmt->insert_id;
                $stmt->close();
                $this->closeConnection();
                $response = ["success" => true, "message" => "Enrolled successfully", "studentID" => $studID];
                $json_response = json_encode($response);
                if ($json_response === false) {
                    echo json_encode(["success" => false, "message" => json_last_error_msg()]);
                } else {
                    echo $json_response;
                }
                return;
            } else {
                $error = "Error: " . $stmt->error;
                $stmt->close();
                $this->closeConnection();
                echo json_encode(["success" => false, "message" => $error]);
                return;
            }
        }
    }
    public function getuser($userName) {
        $this->connect();
    
        $sql = "SELECT * FROM user WHERE userName = ?";
        $stmt = $this->conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["success" => false, "message" => "Prepare failed: " . $this->conn->error]);
            return;
        }
        $stmt->bind_param("s", $userName);
        $stmt->execute();
        $result = $stmt->get_result();

        return ["result" => $result, "stmt" => $stmt];
    }

    public function getAdmin($userName) {
        $this->connect();
    
        $sql = "SELECT * FROM admin WHERE userName = ?";
        $stmt = $this->conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["success" => false, "message" => "Prepare failed: " . $this->conn->error]);
            return;
        }
        $stmt->bind_param("s", $userName);
        $stmt->execute();
        $result = $stmt->get_result();

        return ["result" => $result, "stmt" => $stmt];
    }
    
    public function getUserProfile($userID){
        $this->connect();
    
        $sql = "SELECT * FROM user WHERE userID = ?";
        $stmt = $this->conn->prepare($sql);
    
        $stmt->bind_param("i", $userID);
        $stmt->execute();
        $result = $stmt->get_result();
        
        $stmt->close();
        return $result;
    }
    public function insertCourse($image, $title, $description, $duration, $details) {
        $this->connect();

        $sql = "INSERT INTO course (image, title, description, duration, details) VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["success" => false, "message" => "Prepare failed: " . $this->conn->error]);
            return;
        }
        $stmt->bind_param("sssss", $image, $title, $description, $duration, $details);

        if ($stmt->execute()) {
            $stmt->close();
            $this->closeConnection();
            $response = ["success" => true, "message" => "Registration successful"];
            $json_response = json_encode($response);
            if ($json_response === false) {
                echo json_encode(["success" => false, "message" => json_last_error_msg()]);
            } else {
                echo $json_response;
            }
            return;
        } else {
            $error = "Error: " . $stmt->error;
            $stmt->close();
            $this->closeConnection();
            echo json_encode(["success" => false, "message" => $error]);
            return;
        }
    }
    public function insertRoom($courseID, $courseTitle, $courseDescription) {
        $this->connect();

        $sql = "INSERT INTO room (courseID, title, description) VALUES (?, ?, ?)";
        $stmt = $this->conn->prepare($sql);
        if (!$stmt) {
            echo json_encode(["success" => false, "message" => "Prepare failed: " . $this->conn->error]);
            return;
        }
        $stmt->bind_param("iss", $courseID, $courseTitle, $courseDescription);

        if ($stmt->execute()) {
            $stmt->close();
            $this->closeConnection();
            $response = ["success" => true, "message" => "Inserted successfully"];
            $json_response = json_encode($response);
            if ($json_response === false) {
                echo json_encode(["success" => false, "message" => json_last_error_msg()]);
            } else {
                echo $json_response;
            }
            return;
        } else {
            $error = "Error: " . $stmt->error;
            $stmt->close();
            $this->closeConnection();
            echo json_encode(["success" => false, "message" => $error]);
            return;
        }
    }
    public function getCourses(){
        $this->connect();

        $sql = "SELECT * FROM course";
        $result = $this->conn->query($sql);
        return $result;
    }
    public function fetchStudents(){
        $this->connect();

        $sql = "SELECT * FROM user";
        $result = $this->conn->query($sql);
        return $result;
    }
    public function askQuestion($question, $userID, $roomID){
        $this->connect();
        $sql = "INSERT INTO room_question (question, userid, roomID) VALUES (?, ?, ?)";
        $stmt = $this->conn->prepare($sql);

        if (!$stmt) {
            echo json_encode(["success" => false . $this->conn->error]);
            return;
        }
        $stmt->bind_param("sii", $question, $userID, $roomID);

        if ($stmt->execute()) {
            // Get the inserted question ID
            $questionID = $stmt->insert_id;
            $stmt->close();
            $this->closeConnection();
            $response = ["success" => true, "questionID" => $questionID];
            $json_response = json_encode($response);
            if ($json_response === false) {
                echo json_encode(["success" => false]);
            } else {
                echo $json_response;
            }
            return $questionID;
        } else {
            // $error = "Error: " . $stmt->error;
            $stmt->close();
            $this->closeConnection();
            echo json_encode(["success" => false]);
            return;
        }
    }
    public function adminAnswer($questionID, $userID, $answer){
        $this->connect();
        // $sql = "INSERT INTO room_answer (answer) VALUES (?)";
        $sql = "INSERT INTO room_answer (questionID, userid, answer) VALUES (?, ?, ?)";
        $stmt = $this->conn->prepare($sql);

        if (!$stmt) {
            echo json_encode(["success" => false . $this->conn->error]);
            return;
        }
        $stmt->bind_param("iis", $questionID, $userID, $answer);

        if ($stmt->execute()) {
            // Get the inserted answer ID
            // $answerID = $stmt->insert_id;
            $stmt->close();
            // $this->updateRoomWithAnswer($answerID);
            $this->closeConnection();
            $response = ["success" => true];
            $json_response = json_encode($response);
            if ($json_response === false) {
                echo json_encode(["success" => false]);
            } else {
                echo $json_response;
            }
            return;
        } else {
            // $error = "Error: " . $stmt->error;
            $stmt->close();
            $this->closeConnection();
            echo json_encode(["success" => false]);
            return;
        }
    }
    // public function updateRoomWithQuestion($questionID) {
    //     $this->connect();
    //     $sql = "INSERT INTO room (questionID) VALUES (?)";
    //     $stmt = $this->conn->prepare($sql);
    //     $stmt->bind_param("i", $questionID);
    //     $stmt->execute();
    //     $stmt->close();
    //     $this->closeConnection();
    // }
    
    public function updateRoomWithAnswer($questionID, $answerID) {
        $this->connect();
        $sql = "UPDATE room SET answerID = ? WHERE answerID IS NULL";
        // $sql = "INSERT INTO room (questionID, answerID) VALUES (?, ?)";
        $stmt = $this->conn->prepare($sql);
        // $stmt->bind_param("i", $answerID);
        $stmt->bind_param("ii", $questionID, $answerID);
        $stmt->execute();
        $stmt->close();
        $this->closeConnection();
    }
    
    // public function fetchAnswers(){
    //     $this->connect();

    //     $sql = "SELECT room_question.question, room_answer.answer
    //     FROM room
    //     JOIN room_question
    //     ON room.questionID = room_question.questionID
    //     JOIN room_answer
    //     ON room.answerID = room_answer.answerID";
    //     $result = $this->conn->query($sql);
    //     return $result;
    // }

    public function fetchQuestion($roomID){
        $this->connect();

        $sql = "SELECT * FROM room_question WHERE roomid=?";
        // $result = $this->conn->query($sql);
        // return $result;
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $roomID);
    
        if (!$stmt->execute()) {
            echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
        }
    
        $result = $stmt->get_result();
        return $result;
    }
    public function fetchQuestionsAnswers($questionID) {
        $this->connect();
    
        $sql = "SELECT rq.question, ra.answer
                FROM room_question rq
                LEFT JOIN room_answer ra
                ON rq.questionID = ra.questionID
                WHERE rq.questionID = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $questionID);
    
        if (!$stmt->execute()) {
            echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
        }
    
        $result = $stmt->get_result();
        return $result;
    }

    public function fetchAllQuestionsAnswers($roomID) {
        $this->connect();
    
        $sql = "SELECT rq.question, ra.answer
                FROM room_question rq
                LEFT JOIN room_answer ra 
                ON rq.questionID = ra.questionID
                WHERE rq.roomID = ?";
        // $result = $this->conn->query($sql);
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $roomID);
    
        if (!$stmt->execute()) {
            echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
        }
    
        $result = $stmt->get_result();
        return $result;
    
        // $questionsAnswers = [];
        // if ($result->num_rows > 0) {
        //     while($row = $result->fetch_assoc()) {
        //         $questionsAnswers[] = $row;
        //     }
        // }
    
        // $this->closeConnection();
        // return $questionsAnswers;
    }
    public function fetchRooms(){
        $this->connect();

        $sql = "SELECT * FROM room";
        $result = $this->conn->query($sql);
        return $result;
    }
    // public function fetchUserID() {
    //     $this->connect();
    
    //     $sql = "SELECT userid FROM user";
    //     $result = $this->conn->query($sql);
    
    //     $questionsAnswers = [];
    //     if ($result->num_rows > 0) {
    //         while($row = $result->fetch_assoc()) {
    //             $questionsAnswers[] = $row;
    //         }
    //     }
    
    //     $this->closeConnection();
    //     return $questionsAnswers;
    // }
}

?>