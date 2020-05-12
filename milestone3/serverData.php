<?php
  header ('Content-Type: application/json');
  include 'database.php';

  //creazione dati primo grafico
  $graphGuest = $graphs['fatturato'];
  $graphGuest += ['nameGraph' => 'fatturato'];
  $graphGuest += ['labels' => ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
  ];


  //crezione dati secondo grafico
  $nameAgents = [];
  $venditeAgents = [];
  foreach ($graphs['fatturato_by_agent']['data'] as $agenti => $vendite) {
    $nameAgents[] = $agenti;
    $venditeAgents[] = $vendite;
  };
  $graphByAgent = ['labels' => $nameAgents,
                  'data' => $venditeAgents,
                  'type' => $graphs['fatturato_by_agent']['type'],
                  'access' => $graphs['fatturato_by_agent']['access'],
                  'nameGraph' => 'fatturato_by_agent'];


  //creazione dati terzo grafico
  $nameTeam = [];
  $venditeTeam = [];
  foreach ($graphs['team_efficiency']['data'] as $agenti => $vendite) {
    $nameTeam[] = $agenti;
    $venditeTeam[] = $vendite;
  };
  $team_efficiency = ['labels' => $nameTeam,
                  'data' => $venditeTeam,
                  'type' => $graphs['team_efficiency']['type'],
                  'access' => $graphs['team_efficiency']['access'],
                  'nameGraph' => 'team_efficiency'
                  ];

  //creo array finale
$array = [];
  $array = [$graphGuest,$graphByAgent,$team_efficiency],
  ;



  echo json_encode($array);
 ?>
