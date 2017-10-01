<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
<link rel="stylesheet" type="text/css" href="./build/css/style.css">
<script src="https://code.jquery.com/jquery-3.2.0.js"></script>
<!-- <script type="text/javascript" src="js/script.js"></script> -->
  </head>
    <title>KUMAKURA NAOKI.com</title>
  </head>
  <style>
    #inName {
      transition: 0.5s;
      font-size: 500px;
      font-weight: bold;
    }
  </style>
<body>
    
  <div id="inName"></div>

</body>
<script type="text/javascript" src="js/randomtext.js"></script>
<script>
  var pxNum = 500;
  var pxCount = 5;
  function changePx() {
    pxCount+=1;
    pxNum-=pxCount;
    $('#inName').css({'font-size':pxNum+'px'});
  }
  setInterval(function(){
    changePx();
  },100);

</script>
</html>