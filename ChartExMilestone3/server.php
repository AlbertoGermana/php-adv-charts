<?php
header("Content-Type: application/json");
require_once "data.php";
$permiss=$_GET["permiss"];
$data=[];
function setData($dati){
  $labels = [];
  $efficiency = [];
  foreach ($dati["data"] as $name => $value) {
    $labels[] = $name;
    $efficiency[] = $value;
  };
  if (is_array($dati["data"]["Team1"]) == true) {
    $labels = ["gen","feb","mar","apr","mag","giu","lugl","ago","sett","ott","nov","dic"];
  };
  $oggetto=[
    "type" => $dati["type"],
    "labels"=> $labels,
    "data" => $efficiency,
    "access" => $dati["access"]
  ];
  return $oggetto;
};
$grapGuest=[
  "type" => $graphs["fatturato"]["type"],
  "labels"=> ["gen","feb","mar","apr","mag","giu","lugl","ago","sett","ott","nov","dic"],
  "data" => $graphs["fatturato"]["data"],
  "access" => $graphs["fatturato"]["access"]
];
$newGraphs=[$grapGuest, setData($graphs["fatturato_by_agent"]), setData($graphs["team_efficiency"])];
$boolean=true;

foreach ($newGraphs as $key => $graph) {
  if ($boolean) {
    $data[]= $graph;
  };
  if ($permiss == $graph["access"]) {
    $boolean = false;
  };
};

echo json_encode($data);