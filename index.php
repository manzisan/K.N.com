<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
<link rel="stylesheet" type="text/css" href="./build/css/style.css">
<!-- <link rel="stylesheet" href="http://manz1.jellybean.jp/css/style.css"> -->
<link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.2.0.js"></script>
  </head>
    <title>KUMAKURA NAOKI.com</title>
  </head>
<body>
  <div id="Wrap">
    <header>
      <h1>Kumakura Naoki.com</h1>
      <div class="icon">
        
      </div>
    </header>
    <div class="close">
      <span>Close</span>
    </div>
    <div class="container clear">
      <?php
        $title = [
          "It's Me <i class='fa fa-user'></i>",
          "Works <i class='fa fa-code'></i>",
          "Skill <i class='fa fa-chart-pie'></i>",
          "Github <i class='fab fa-github'></i>",
          "Sharing knowledge <i class='fa fa-share-alt'></i>",
          "Contact <i class='fa fa-envelope'></i>",
          "Codepen <i class='fab fa-codepen'></i>",
          "Company <i class='fa fa-building'></i>",
          "Steam <i class='fab fa-steam'></i>",
          "Play Station.net <i class='fab fa-playstation'></i>",
          "Discord <i class='fab fa-discord'></i>",
        ];
        for ($i=0; $i < 11; $i++) :
      ?>
        <div class="box">
          <div class="text">
            <?= $title[$i] ?>
          </div>
        </div>
      <?php endfor; ?>
    </div>
    <footer>
      <small>Copyright 2018 naoki kumakura as manzisan</small>
    </footer>
  </div>
</body>
<script>
  $(".box").on("click",function(){
    $(".close").show();
    $(this).addClass("view-mode");
    $(".container").addClass("view-mode-container");
    $(".box").not($(this)).hide();
    $(".text").css({
      "transform":"rotate(0deg)",
    })
  });
  $(".close span").on("click",function(){
    $(".close").hide();
    $(".box").removeClass("view-mode");
    $(".container").removeClass("view-mode-container");
    $(".box").not($(this)).show();
    $(".text").css({
      "transform":"rotate(-45deg)",
    })
  });
</script>
</html>