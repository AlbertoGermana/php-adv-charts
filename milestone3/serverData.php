<?php
  header ('Content-Type: application/json');
  include 'database.php';

  //creazione dati primo grafico
  $graphGuest = $graphs['fatturato'];
  $graphGuest += ['livello' => 1];

  //crezione dati secondo grafico
  $graphByAgent = $graphs['fatturato_by_agent'];

  $nameAgents = [];
  $venditeAgents = [];
  foreach ($graphByAgent['data'] as $agenti => $vendite) {
    $nameAgents[] = $agenti;
    $venditeAgents[] = $vendite;
  };
  $graphByAgent['labels'] = $nameAgents;
  $graphByAgent['data'] = $venditeAgents;
  $graphByAgent += ['livello' => 2];

  //creazione dati terzo grafico
  $team_efficiency = $graphs['team_efficiency'];
  $nameTeam = [];
  $venditeTeam = [];
  foreach ($team_efficiency['data'] as $agenti => $vendite) {
    $nameTeam[] = $agenti;
    $venditeTeam[] = $vendite;
  };
  $team_efficiency['labels'] = $nameTeam;
  $team_efficiency['data'] = $venditeTeam;
  $team_efficiency += ['livello' => 3];
  //creo array finale
  $array = [];
  $array = [
    'grafico1' => $graphGuest,
    'grafico2' => $graphByAgent,
    'grafico3' => $team_efficiency];

  $arrayFinito = [];

  $inputInserito = $_GET['access'];

  if($inputInserito == 'clevel'){
    $arrayFinito[] = $array['grafico1'];
    $arrayFinito[] = $array['grafico2'];
    $arrayFinito[] = $array['grafico3'];
  }
  if($inputInserito == 'employee'){
    $arrayFinito[] = $array['grafico1'];
    $arrayFinito[] = $array['grafico2'];
  }
  if($inputInserito == 'guest' ){
    $arrayFinito[] = $array['grafico1'];
  }

  echo json_encode($arrayFinito);
 ?>
