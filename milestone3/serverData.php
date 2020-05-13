<?php
  header ('Content-Type: application/json');
  include 'database.php';

  //  PRIMO GRAFICO
  // salvo in array una copia dell'elemento 'fatturato' del database
  $graphGuest = $graphs['fatturato'];

//  SECONDO GRAFICO
// salvo in array una copia dell'elemento 'fatturato_by_agent' del database
  $graphByAgent = $graphs['fatturato_by_agent'];

  $nameAgents = []; //preparo array
  $venditeAgents = []; //preparo array
  //scorro ogni elemento data per raccogliere chiavi e valori nei rispettivi array
  foreach ($graphByAgent['data'] as $agenti => $vendite) {
    $nameAgents[] = $agenti;
    $venditeAgents[] = $vendite;
  };
  // aggiungo i nuovi array nell'array del grafico
  $graphByAgent['labels'] = $nameAgents;
  $graphByAgent['data'] = $venditeAgents;

//  TERZO GRAFICO
// salvo in array una copia dell'elemento 'team_efficiency' del database
  $team_efficiency = $graphs['team_efficiency'];

  $nameTeam = []; //preparo array
  $venditeTeam = []; //preparo array
  //scorro ogni elemento data per raccogliere chiavi e valori nei rispettivi array
  foreach ($team_efficiency['data'] as $agenti => $vendite) {
    $nameTeam[] = $agenti;
    $venditeTeam[] = $vendite;
  };
  // aggiungo i nuovi array nell'array del grafico
  $team_efficiency['labels'] = $nameTeam;
  $team_efficiency['data'] = $venditeTeam;

  //creo array finale unendo quelli creati
  $array = [];
  $array = [
    'grafico1' => $graphGuest,
    'grafico2' => $graphByAgent,
    'grafico3' => $team_efficiency];

  // dichiaro array che sarà quello di uscita
  $arrayOutput = [];

  // mi ricavo il dato inserito dall'utente con il tipo di accesso
  $inputInserito = $_GET['access'];

  //controllo il tipo di accesso e condiziono l'output
  if($inputInserito == 'clevel'){
    $arrayOutput[] = $array['grafico1'];
    $arrayOutput[] = $array['grafico2'];
    $arrayOutput[] = $array['grafico3'];
  }
  if($inputInserito == 'employee'){
    $arrayOutput[] = $array['grafico1'];
    $arrayOutput[] = $array['grafico2'];
  }
  if($inputInserito == 'guest' ){
    $arrayOutput[] = $array['grafico1'];
  }
  
  echo json_encode($arrayOutput);
 ?>
