<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    // $activity = $_POST['activity'];
    // $checkbox = $_POST['checkbox'];

    //реализация переменных для ф-ции mail
    $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?="; //кодируем сообщение
    $headers = "From: $email\r\nReplay-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("yaekaval@gmail.com", $subject, $message, $headers);   // отправка может быть корректной и не корректной
    echo $success;
?>
