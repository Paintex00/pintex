<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Send the email
    $to = 'ralph.younan123@gmail.com';
    $subject = 'New message from your website';
    $body = "Name: $name\n\nEmail: $email\n\nMessage: $message";
    $headers = "From: $email";
    
    if(mail($to, $subject, $body, $headers)) {
        echo 'Thank you for your message!';
    } else {
        echo 'There was a problem sending your message. Please try again later.';
    }
}
?>
