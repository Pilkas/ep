<?php
if (isset($_REQUEST['submitted'])) {
// Initialize error array.
  $errors = array();
  // Check for a proper First name
  if (!empty($_REQUEST['firstname'])) {
  $firstname = $_REQUEST['firstname'];
  $pattern = "/^[a-zA-Z0-9\_]{2,20}/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$firstname)){ $firstname = $_REQUEST['firstname'];}
  else{ $errors[] = 'Your Name can only contain _, 1-9, A-Z or a-z 2-20 long.';}
  } else {$errors[] = 'You forgot to enter your First Name.';}

  // Check for a proper Last name
  if (!empty($_REQUEST['lastname'])) {
  $lastname = $_REQUEST['lastname'];
  $pattern = "/^[a-zA-Z0-9\_]{2,20}/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$lastname)){ $lastname = $_REQUEST['lastname'];}
  else{ $errors[] = 'Your Name can only contain _, 1-9, A-Z or a-z 2-20 long.';}
  } else {$errors[] = 'You forgot to enter your Last Name.';}

  //Check for a valid phone number
  if (!empty($_REQUEST['phone'])) {
  $phone = $_REQUEST['phone'];
  $pattern = "/^[0-9\_]{7,20}/";
  if (preg_match($pattern,$phone)){ $phone = $_REQUEST['phone'];}
  else{ $errors[] = 'Your Phone number can only be numbers.';}
  } else {$errors[] = 'You forgot to enter your Phone number.';}

  if (!empty($_REQUEST['redmapleacer']) || !empty($_REQUEST['chinesepistache']) || !empty($_REQUEST['raywoodash'])) {
  $check1 = $_REQUEST['redmapleacer'];
  if (empty($check1)){$check1 = 'Unchecked';}else{$check1 = 'Checked';}
  $check2 = $_REQUEST['chinesepistache'];
  if (empty($check2)){$check2 = 'Unchecked';}else{$check2 = 'Checked';}
  $check3 = $_REQUEST['raywoodash'];
  if (empty($check3)){$check3 = 'Unchecked';}else{$check3 = 'Checked';}
  } else {$errors[] = 'You forgot to enter your Phone number.';}
  }
  //End of validation
  
  if (isset($_REQUEST['submitted'])) {
  if (empty($errors)) {
  $from = "From: Our Site!"; //Site name
  // Change this to your email address you want to form sent to
  $to = "your@email.com";
  $subject = "Admin - Our Site! Comment from " . $name . "";

  $message = "Message from " . $firstname . " " . $lastname . "
  Phone: " . $phone . "
  Red Maple Acer: " . $check1 ."
  Chinese Pistache: " . $check2 ."
  Raywood Ash: " . $check3 ."";
  mail($to,$subject,$message,$from);
  }
}
?>
