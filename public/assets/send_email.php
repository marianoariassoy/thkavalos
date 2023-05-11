<?php
$to = $_POST['to'];
$subject = $_POST['subject'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$body = "Nombre: $name\nCorreo: $email\nTeléfono: $phone\nMensaje: $message";

$headers = 'From: remitente@correo.com' . "\r\n" .
  'Reply-To: remitente@correo.com' . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $body, $headers)) {
  echo 'Correo enviado exitosamente.';
} else {
  echo 'Error al enviar el correo.';
}
