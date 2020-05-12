function init(){
  // controllo tipo di accesso
  //
  // se è clevel{
  //
  // }

    printLineChartGuest();
    printLineChartEmployee();
    printLineChartCLevel()
}



function printLineChartGuest(){
  $.ajax({
    url: 'fatturato.php',
    method: 'GET',
    success: function(dataServer) {
      //dati del grafico
      var ctx = $('#grafico1');
      var myChart = new Chart(ctx, {
         type: dataServer.type,
         data: {
             labels: dataServer.labels,
             datasets: [{
                 label: 'Vendite',
                 data: dataServer.data,
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
  })
}
function printLineChartEmployee(){
  $.ajax({
    url: 'fatturato_by_agent.php',
    method: 'GET',
    success: function(dataServer) {
      //dati del grafico
      var ctx = $('#grafico2');
      var myChart = new Chart(ctx, {
         type: dataServer.type,
         data: {
             labels: dataServer.labels,
             datasets: [{
                 label: 'Vendite',
                 data: dataServer.data,
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
    url: 'team_efficiency.php',
    method: 'GET',
    success: function(dataServer) {
      //dati del grafico
      console.log(dataServer.labels);
      var ctx = $('#grafico3');
      var myChart = new Chart(ctx, {
         type: dataServer.type,
         data: {
             labels: dataServer.labels,
             datasets: [{
               label: 'Team1',
               data: dataServer.data[0],
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
               data: dataServer.data[1],
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
               data: dataServer.data[2],
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




// function printChart(){
//   $.ajax({
//     url: "serverData.php",
//     method: 'GET',
//     success: function(dataServer) {
//       console.log(dataServer);
//       var myChart = new Chart($('#graficoprova'), {
//          type: dataServer[2].team_efficiency.type,
//          data: {
//              labels: dataServer[2].team_efficiency.labels,
//              datasets:
//              [{
//                  label: 'Team1',
//                  data: dataServer[2].team_efficiency.data[0]
//                },{
//                  label: 'Team2',
//                  data: dataServer[2].team_efficiency.data[1]
//                },{
//                  label: 'Team3',
//                  data: dataServer[2].team_efficiency.data[2]
//                }]
//
//
//          },
//          options: {
//              scales: {
//                  yAxes: [{
//                      ticks: {
//                          beginAtZero: true
//                      }
//                  }]
//              }
//          }
//        });
//     },
//     error: function(err){
//       console.error("Errore nel grafico del fatturato: ",err);
//     }
//   })
// }
