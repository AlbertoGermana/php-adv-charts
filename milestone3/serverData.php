<?php
  header ('Content-Type: application/json');
  include 'database.php';

  //creazione dati primo grafico
  $graphGuest = $graphs['fatturato'];

  //crezione dati secondo grafico
  $graphByAgent = $graphs['fatturato_by_agent'];

  $nameAgents = [];
  $venditeAgents = [];
  foreach ($graphByAgent['data'] as $agenti => $vendite) {
    $nameAgents[] = $agenti;
    $venditeAgents[] = $vendite;
  };
  $graphByAgent['agents'] = $nameAgents;
  $graphByAgent['sales'] = $venditeAgents;


  //creazione dati terzo grafico
$team_efficiency = $graphs['team_efficiency'];
  $nameTeam = [];
  $venditeTeam = [];
  foreach ($team_efficiency['data'] as $agenti => $vendite) {
    $nameTeam[] = $agenti;
    $venditeTeam[] = $vendite;
  };
  $team_efficiency['teams'] = $nameTeam;
  $team_efficiency['teamsSales'] = $venditeTeam;

  //creo array finale
$array = [];
  $array = [
    'grafico1' => $graphGuest,
    'grafico2' => $graphByAgent,
    'grafico3' => $team_efficiency];

$arrayFinito = [];

$inputInserito = $_GET['access'];

foreach ($array as $grafici => $value) {
  if($inputInserito == $value['access']){
    $arrayFinito[] = $value;
  }
// if($_GET['access'] == 'guest'){
//   $arrayFinito[] = $graphGuest;
// }

}
  echo json_encode($arrayFinito);
 ?>
