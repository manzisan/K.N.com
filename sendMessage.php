<?php

  mb_language("japanese");
  mb_internal_encoding("UTF-8");
  $to = "manzisann@gmail.com";
  $subject = $_POST["name"];
  $body = $_POST["message"];
  mb_send_mail($to,$subject,$body);