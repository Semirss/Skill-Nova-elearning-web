<?php

spl_autoload_register('load');

function load($class){
    $path = 'Skill-nova-BackEnd/';
    $extension = '.php';

    $file = $path.$class.$extension;

    if(!file_exists($file)){
        return false;
    }

    include_once $file;
    
}

?>