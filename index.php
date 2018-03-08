<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
<link rel="stylesheet" type="text/css" href="./build/css/style.css">
<script src="https://code.jquery.com/jquery-3.2.0.js"></script>
  </head>
    <title>KUMAKURA NAOKI.com</title>
  </head>
<body>
  <div id="Wrap">
    <header>
      <h1>Kumakura Naoki.com</h1>
      <div>
        
      </div>
    </header>
    <div class="close">Close</div>
    <div class="container clear">
      <?php
        $title = [
          "It's Me",
          "Works",
          "Skill",
          "Sharing knowledge",
          "Affiliation",
          "Contact",
          "Codepen",
          "Steam",
          "Play Station.net",
          "Discord",
          "fashion",
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
    $(".box").not($(this)).fadeOut();
    $(".text").css({
      "transform":"rotate(0deg)",
    })
  });
  $(".close").on("click",function(){
    $(".close").hide();
    $(".box").removeClass("view-mode");
    $(".container").removeClass("view-mode-container");
    $(".box").not($(this)).fadeIn();
    $(".text").css({
      "transform":"rotate(-45deg)",
    })
  });
</script>
</html>