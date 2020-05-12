function init(){

    printLineChartGuest();
    printLineChartEmployee();
    printLineChartCLevel()
}



function printLineChartGuest(){
  $.ajax({
    url: 'serverData.php'+ window.location.search,
    method: 'GET',
    success: function(dataServer) {

      // dati del grafico

      var ctx = $('#grafico1');
      var myChart = new Chart(ctx, {
         type: dataServer[0].type,
         data: {
             labels: moment.months(),
             datasets: [{
                 label: 'Vendite',
                 data: dataServer[0].data,
                 backgroundColor: [
                   'rgba(150, 33, 146, 0.2)',
                 ],
                 borderColor: [
                   'rgba(150, 33, 146, 1)',
                   'rgba(150, 33, 146, 1)',
                   'rgba(150, 33, 146, 1)',
                   'rgba(150, 33, 146, 1)',
                   'rgba(150, 33, 146, 1)',
                   'rgba(150, 33, 146, 1)',
                   'rgba(150, 33, 146, 1)',
                   'rgba(150, 33, 146, 1)',
                   'rgba(150, 33, 146, 1)',
                   'rgba(150, 33, 146, 1)',
                   'rgba(150, 33, 146, 1)',
                   'rgba(150, 33, 146, 1)',
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
  }
)
}
function printLineChartEmployee(){
  $.ajax({
    url: 'serverData.php'+ window.location.search,
    method: 'GET',
    success: function(dataServer) {
      //dati del grafico
      var ctx = $('#grafico2');
      var myChart = new Chart(ctx, {
         type:  dataServer[0].type,
         data: {
             labels:  dataServer[0].agents,
             datasets: [{
                 label: 'Vendite',
                 data:  dataServer[0].sales,
                 backgroundColor: [
                   'rgba(150, 33, 146, 0.2)',
                   'rgba(82, 40, 204, 0.2)',
                   'rgba(4, 51, 255, 0.2)',
                   'rgba(0, 146, 146, 0.2)',
                 ],
                 borderColor: [
                   'rgba(150, 33, 146, 1)',
                   'rgba(82, 40, 204, 1)',
                   'rgba(4, 51, 255, 1)',
                   'rgba(0, 146, 146, 1)',

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
function printLineChartCLevel(){
  $.ajax({
    url: 'serverData.php'+ window.location.search,
    method: 'GET',
    success: function(dataServer) {
      //dati del grafico
      console.log(dataServer);
      var ctx = $('#grafico3');
      var myChart = new Chart(ctx, {
         type:  dataServer[0].type,
         data: {
             labels: moment.months(),
             datasets: [{
               label: 'Team1',
               data:  dataServer[0].teamsSales[0],
               backgroundColor: [
                'rgba(255, 38, 0, 0.2)',
               ],
               borderColor: [
                 'rgba(255, 147, 0, 1)',
                 'rgba(255, 147, 0, 1)',
                 'rgba(255, 147, 0, 1)',
                 'rgba(255, 147, 0, 1)',
                 'rgba(255, 147, 0, 1)',
                 'rgba(255, 147, 0, 1)',
                 'rgba(255, 147, 0, 1)',
                 'rgba(255, 147, 0, 1)',
                 'rgba(255, 147, 0, 1)',
                 'rgba(255, 147, 0, 1)',
                 'rgba(255, 147, 0, 1)',
                 'rgba(255, 147, 0, 1)',
               ],
                 borderWidth: 1
             },{
               label: 'Team2',
               data: dataServer[0].teamsSales[1],
               backgroundColor: [
                 'rgba(255, 38, 0, 0.2)',
               ],
               borderColor: [
                 'rgba(255, 80, 0, 1)',
                 'rgba(255, 80, 0, 1)',
                 'rgba(255, 80, 0, 1)',
                 'rgba(255, 80, 0, 1)',
                 'rgba(255, 80, 0, 1)',
                 'rgba(255, 80, 0, 1)',
                 'rgba(255, 80, 0, 1)',
                 'rgba(255, 80, 0, 1)',
                 'rgba(255, 80, 0, 1)',
                 'rgba(255, 80, 0, 1)',
                 'rgba(255, 80, 0, 1)',
                 'rgba(255, 80, 0, 1)',
               ],
                 borderWidth: 1
             },{
               label: 'Team3',
               data: dataServer[0].teamsSales[2],
               backgroundColor: [
                 'rgba(255, 38, 0, 0.2)',
               ],
               borderColor: [
                 'rgba(216, 34, 83, 1)',
                 'rgba(216, 34, 83, 1)',
                 'rgba(216, 34, 83, 1)',
                 'rgba(216, 34, 83, 1)',
                 'rgba(216, 34, 83, 1)',
                 'rgba(216, 34, 83, 1)',
                 'rgba(216, 34, 83, 1)',
                 'rgba(216, 34, 83, 1)',
                 'rgba(216, 34, 83, 1)',
                 'rgba(216, 34, 83, 1)',
                 'rgba(216, 34, 83, 1)',
                 'rgba(216, 34, 83, 1)',
               ],
                 borderWidth: 1
             }
           ]
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


$(document).ready(function(){
  init();
});
