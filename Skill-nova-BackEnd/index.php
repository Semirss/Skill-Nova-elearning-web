<?php

require_once 'UserController.php';
// Allows requests from any origin
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// Allows specific HTTP methods
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Allows specific headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Parse the full URL from the request
// $fullUrl = $_SERVER['REQUEST_URI'];
// $url = isset($_GET['url']) ? trim($_GET['url'], '/') : '';



// Find the position of "index.php" in the URL
// $indexPos = strpos($fullUrl, 'index.php');

// If "index.php" is found, extract the path after it
// if ($indexPos !== false) {
//     $url = substr($fullUrl, $indexPos + strlen('index.php'));
//     $url = ltrim($url, '/');
// } else {
//     $url = '';
// }

// Remove query string if present
// if (strpos($url, '?') !== false) {
//     $url = strstr($url, '?', true);
// 
// }

// Initialize the Router
// $router = new Router();
// $router->get('users', 'userController@handlePostRequest');
// $router->post('users', 'UserController@handlePostRequest');
// $router->get('projects', 'ProjectController@getProjects');

// Dispatch the request to the appropriate route
// $router->dispatch($url);

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
    // $data = $controller->getAnswers();
    // if ($data) {
    //     echo json_encode($data);
    // } else {
    //     echo json_encode(["success" => false]);
    // }
}
else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userController->handleRequest();
}


?>