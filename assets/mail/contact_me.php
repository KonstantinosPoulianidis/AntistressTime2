<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = "konstantinospoulianidis@antistresstime.com"; // Εδώ τοποθέτητα το domain εμαιλ μου στο οποίο θα παραλαμβάνω τα μηνύματα που μου στέλνουν οι χρήστες.
$email_subject = "Antistress Time φόρμα επικοινωνίας:  $name";
$email_body = "Νέο μήνυμα από την φόρμα επικοινωνίας της ιστοσελίδα σας Antistress Time.\n\n"."Παρακάτω θα βρείτε λεπτομέριες:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@konstantinospoulianidis@antistresstime.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>