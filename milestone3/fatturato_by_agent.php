<?php
  header ('Content-Type: application/json');
  include 'database.php';

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
                  'nameGraph' => 'fatturato_by_agent'
                  ];

  echo json_encode($graphByAgent);
 ?>
