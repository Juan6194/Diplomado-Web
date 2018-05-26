<?php
  $myName="Juan";
  $myLastName="Torres";
  $myAge="23";

  $mydata = "Mi nombre completo es: "
        . $myName
        . " "
        . $myLastName
        .", y tengo "
        . $myAge
        ." años.";

  $name= $_POST["name"];
  $lastName= $_POST["lastName"];
  $tel= $_POST["tel"];
  $email= $_POST["email"];
  $gender= $_POST["gender"];
  $read= $_POST["read"];
  $dance= $_POST["dance"];
  $run= $_POST["run"];
  $play= $_POST["play"];
  $nationality= $_POST["nationality"];
  $message= $_POST["message"];

  $isReadSelected = $read ? "Si" : "No";
  $isDanceSelected = $dance ? "Si" : "No";
  $isRunSelected = $run ? "Si" : "No";
  $isPlaySelected = $play ? "Si" : "No";
 
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Mis datos</title>
</head>
<body>
    <div class="container">
      <header class="page-header">
        <h1> Mis datos </h1>
        </header>
        <main class="page-main">
        <section class="page-section">
          <ul>
            <li>Nombre: <strong><?php echo $name; ?></strong></li>
            <li>Apellido: <strong><?php echo $lastName; ?></strong></li>
            <li>Teléfono: <strong><?php echo $tel;  ?></strong></li>
            <li>Correo electrónico: <strong><?php echo $email; ?></strong> </li>
            <li>Sexo: <strong><?php echo $gender; ?></strong></li>
            <li>Leer: <strong><?php echo $isReadSelected; ?></strong></li>
            <li>Bailar: <strong><?php echo $isDanceSelected; ?></strong></li>
            <li>Correr: <strong><?php echo $isRunSelected; ?></strong></li>
            <li>Jugar: <strong><?php echo $isPlaySelected; ?></strong></li>
            <li>Nacionalidad: <strong><?php echo $nationality; ?></strong></li>
            <li>Mensaje: <strong><?php echo $message; ?></strong></li>
          </ul>
        </section>
        </main>
    </div>
</body>
</html>