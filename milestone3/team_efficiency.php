<?php
  header ('Content-Type: application/json');
  include 'database.php';

  $nameTeam = [];
  $venditeTeam = [];
  foreach ($graphs['team_efficiency']['data'] as $agenti => $vendite) {
    $nameTeam[] = $agenti;
    $venditeTeam[] = $vendite;
  };
  $team_efficiency = ['labels' => ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
                  'data' => $venditeTeam,
                  'type' => $graphs['team_efficiency']['type'],
                  'access' => $graphs['team_efficiency']['access'],
                  'nameGraph' => 'team_efficiency'
                  ];


  echo json_encode($team_efficiency);
 ?>
