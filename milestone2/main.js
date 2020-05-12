function init(){
    printLineChartFatturato();
    printLineChartFatturatoByAgent();
}
//funzione per il grafico a linee
function printLineChartFatturato(){
  $.ajax({
    url: 'server.php',
    method: 'GET',
    success: function(dataServer) {
      //dati del grafico
      var ctx = $('#line');
      var myChart = new Chart(ctx, {
         type: dataServer.fatturato.type,
         data: {
             labels: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
             datasets: [{
                 label: 'Vendite',
                 data: dataServer.fatturato.data,
                 backgroundColor: [
                   'rgba(150, 33, 146, 0.2)',
                   'rgba(82, 40, 204, 0.2)',
                   'rgba(4, 51, 255, 0.2)',
                   'rgba(0, 146, 146, 0.2)',
                   'rgba(0, 249, 0, 0.2)',
                   'rgba(202, 250, 0, 0.2)',
                   'rgba(255, 251, 0, 0.2)',
                   'rgba(255, 199, 0, 0.2)',
                   'rgba(255, 147, 0, 0.2)',
                   'rgba(255, 80, 0, 0.2)',
                   'rgba(255, 38, 0, 0.2)',
                   'rgba(216, 34, 83, 0.2)'
                 ],
                 borderColor: [
                   'rgba(150, 33, 146, 1)',
                   'rgba(82, 40, 204, 1)',
                   'rgba(4, 51, 255, 1)',
                   'rgba(0, 146, 146, 1)',
                   'rgba(0, 249, 0, 1)',
                   'rgba(202, 250, 0, 1)',
                   'rgba(255, 251, 0, 1)',
                   'rgba(255, 199, 0, 1)',
                   'rgba(255, 147, 0, 1)',
                   'rgba(255, 80, 0, 1)',
                   'rgba(255, 38, 0, 1)',
                   'rgba(216, 34, 83, 1)'
                 ],
                 borderWidth: 1
             }]
         },
         options: {
             scales: {
                 yAxes: [{
                     ticks: {
                         beginAtZero: true
                     }
                 }]
             }
         }
       });
    },
    error: function(err){
      console.log("Errore nel grafico del fatturato: ",err);
    }
  })
}

//funzione per il grafico a torta
function printLineChartFatturatoByAgent(){
  $.ajax({
    url: 'server.php',
    method: 'GET',
    success: function(dataServer) {
      var agents = []; //qui salvo i nomi degli agenti
      var agentsFatt = []; // gli salvo i fatturati degli agenti
      var shortcutAgents = dataServer.fatturato_by_agent.data;
      //popolo gli array dei nomi e dei fatturati degli agenti
      for (var nomi in shortcutAgents) {
        agents.push(nomi);
        agentsFatt.push(shortcutAgents[nomi]);
      };
      //dati del grafico
      var ctx = $('#pie');
      var myChart = new Chart(ctx, {
         type: dataServer.fatturato_by_agent.type,
         data: {
             labels: agents,
             datasets: [{
                 label: 'Vendite',
                 data: agentsFatt,
                 backgroundColor: [
                   'rgba(82, 40, 204, 0.2)',
                   'rgba(0, 146, 146, 0.2)',
                   'rgba(255, 199, 0, 0.2)',
                   'rgba(216, 34, 83, 0.2)'
                 ],
                 borderColor: [
                   'rgba(82, 40, 204, 1)',
                   'rgba(0, 146, 146, 1)',
                   'rgba(255, 199, 0, 1)',
                   'rgba(216, 34, 83, 1)'
                 ],
                 borderWidth: 1
             }]
         },
         options: {
             scales: {
                 yAxes: [{
                     ticks: {
                         beginAtZero: true
                     }
                 }]
             }
         }
       });
    },
    error: function(err){
      console.log("Errore nel grafico del fatturato degli agenti: ",err);
    }
  })
}


$(document).ready(function(){
  init();
});
