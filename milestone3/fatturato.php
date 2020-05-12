<?php
  header ('Content-Type: application/json');
  include 'database.php';

  //creazione dati primo grafico
  $graphGuest = $graphs['fatturato'];
  $graphGuest += ['nameGraph' => 'fatturato'];
  $graphGuest += ['labels' => ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre']];

  echo json_encode($graphGuest);
 ?>
