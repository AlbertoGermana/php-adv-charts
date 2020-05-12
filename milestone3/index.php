<!DOCTYPE HTML>
<html>
<head>
  <title>colour_orange</title>
  <meta name="description" content="website description" />
  <meta name="keywords" content="website keywords, website keywords" />
  <meta http-equiv="content-type" content="text/html; charset=windows-1252" />
  <link rel="stylesheet" type="text/css" href="style/style.css" title="style" />
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2/dist/Chart.min.js"></script>
  <script src="moment.min.js"></script>
  <script src="main.js"></script>

</head>

<body>
  <div id="main">
    <header id="header">
      <div id="logo">
        <div id="logo_text">
          <!-- class="logo_colour", allows you to change the colour of the text -->
          <h1><a href="index.html">Gra<span class="logo_colour">fico</span></a></h1>
          <h2>Un bell'esempio di grafico</h2>
        </div>
      </div>
      <div id="menubar">
        <ul id="menu">
          <!-- put class="selected" in the li tag for the selected page - to highlight which page you're on -->
          <li class="selected"><a href="index.html">Home</a></li>
          <li><a href="#">Esempi</a></li>
          <li><a href="#">Pagina</a></li>
          <li><a href="#">Un'altra pagina</a></li>
          <li><a href="#">Contatti</a></li>
        </ul>
      </div>
    </header>
    <main id="site_content">
      <div class="sidebar">
        <h3>Ultime News</h3>
        <h4>E' successo questo</h4>
        <h5>01 Gennaio 2019</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><a href="#">Approfondisci</a></p>
        <br>
        <h4>E' successo questo</h4>
        <h5>21 Dicembre 2018</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><a href="#">Approfondisci</a></p>
        <br>
        <h3>Link interessanti</h3>
        <ul>
          <li><a href="#">link 1</a></li>
          <li><a href="#">link 2</a></li>
          <li><a href="#">link 3</a></li>
          <li><a href="#">link 4</a></li>
        </ul>
        <h3>Search</h3>
        <form method="post" action="#" id="search_form">
          <p>
            <input class="search" type="text" name="search_field" value="Enter keywords....." />
          </p>
        </form>
      </div>
      <div>
        <input type="hidden" name="" value="<?php echo $inputUtente = $_GET['access']; ?>">
        <!-- insert the page content here -->
        <h1>Statistiche dell'anno 2019</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div id="content">
          <div class="grafico1">
            <h2>Grafico</h2>
            <p>Info Grafico</p>
            <canvas id="grafico1"></canvas>
          </div>
          <div class="grafico2">
            <h2>Grafico</h2>
            <p>Info Grafico</p>
            <canvas id="grafico2"></canvas>
          </div>
          <div class="grafico3">
            <h2>Grafico</h2>
            <p>Info Grafico</p>
            <canvas id="grafico3"></canvas>
          </div>

        </div>
      </div>
    </main>
    <div id="content_footer"></div>
    <footer id="footer">
      Copyright &copy; colour_orange | <a href="http://validator.w3.org/check?uri=referer">HTML5</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a> | <a href="http://www.html5webtemplates.co.uk">Simple web templates by HTML5</a>
    </footer>
  </div>
  <script id="graphs-template" type="text/x-handlebars-template">
    <h2>{{titoloGrafico}}</h2>
    <p>{{infoGrafico}}</p>
    <canvas id="{{tipoGrafico}}"></canvas>
    <br>
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/moment.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/locale/it.min.js"> </script>
</body>
</html>
