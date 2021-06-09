<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require_once '../../vendor/autoload.php';

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';


$name = $_POST['first_name']; 
$to = $_POST['email']; 
$phone = $_POST["tel"]; 


try {
    //Server settings
  
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'secret.baner@gmail.com';                     //SMTP username
    $mail->Password   = 'Sergeyb2e8r11';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    //To load the French version
  

    //Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress($to, $name);     //Add a recipient
   


    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Здравствуйте '.$name;
    $mail->Body    = 'Спасибо за интерес к нашей компании, наш консультатн свяжится с вами по указаному вами номеру'.$phone;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    return false; 
} catch (Exception $e) {
   return true; 
}