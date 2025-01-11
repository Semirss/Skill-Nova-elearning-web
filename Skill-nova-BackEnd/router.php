<?php

class Router {
    private $routes = [];

    public function get($path, $action) {
        $this->addRoute('GET', $path, $action);
    }

    public function post($path, $action) {
        $this->addRoute('POST', $path, $action);
    }

    private function addRoute($method, $path, $action) {
        $this->routes[] = ['method' => $method, 'path' => $path, 'action' => $action];
    }

    public function dispatch($requestUri) { 
        $requestMethod = $_SERVER['REQUEST_METHOD'];
        
        foreach ($this->routes as $route) {
            if ($route['method'] === $requestMethod && $route['path'] === trim($requestUri, '/')) { 
                list($controller, $method) = explode('@', $route['action']); 
                $controller = new $controller(); 
                $controller->$method();
                return; 
            } 
        }
    }
}
?>