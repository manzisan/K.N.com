<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width" >
<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
<link rel="stylesheet" type="text/css" href="./build/css/style.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://code.jquery.com/jquery-3.2.0.js"></script>
<script type="text/javascript" src="js/script.js"></script>
  </head>
    <title>KUMAKURA NAOKI.com</title>
  </head>
<body>
  <header>
    <h1>KUMAKURA<br>NAOKI.com</h1>
    <nav>
      <ul>
        <li><a href="#home" class="nav-link"><i class="fa fa-home" aria-hidden="true"></i></a></li>
        <li><a href="#profile" class="nav-link"><i class="fa fa-user" aria-hidden="true"></i></a></li>
        <li><a href="#skill" class="nav-link chart-link"><i class="fa fa-pie-chart" aria-hidden="true"></i></a></li>
        <li><a href="#works" class="nav-link"><i class="fa fa-html5" aria-hidden="true"></i></a></li>
        <li><a href="#contact" class="nav-link"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
      </ul>
    </nav>
    <ul class="icon">
      <li><a href="https://github.com/manzisan" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
      <li><a href="" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li><a href="" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
      <li><a href="http://steamcommunity.com/id/manzisan" target="_blank"><i class="fa fa-steam" aria-hidden="true"></i></a></li>
    </ul>
  </header>
  <main>

    <!-- home -->
    <div class="content-box">
      <div class="colomn-content">
      <h1>HOME</h1>
      <div class="colomn-main">
        <div id="home">

          <div id="inName"></div>

          <i class="fa fa-angle-down" aria-hidden="true"></i>

        </div><!--home-->
      </div>      
      </div><!-- colomn-content -->
    </div><!-- content-box -->
    
    <!-- my infomation -->
    <div class="content-box">
      <div class="colomn-content">
        <h1>PROFILE</h1>
        <div class="colomn-main">
          <div id="profile">

            <?php $button_icon = array("steam","twitter",""); ?>
            <div id="switch">
              <ul class="profile-tab">
                <li><a href="">menu01</a></li>
                <li><a href="">menu02</a></li>
                <li><a href="">menu03</a></li>
                <li><a href="">menu04</a></li>
                <li><a href="">menu05</a></li>
                <!-- <li><a href="">menu06</a></li>
                <li><a href="">menu07</a></li>
                <li><a href="">menu08</a></li> -->
              </ul>
              <div id="content">
                <div>
                  
                </div>
                <div>content02</div>
                <div>content03</div>
                <div>content04</div>
                <div>content05</div>
                <!-- <div>content06</div>
                <div>content07</div>
                <div>content08</div> -->
              </div>
            </div>
          </div>
        </div>
      </div><!-- colomn-content -->
    </div><!-- content-box -->

    <!-- skills -->
    <div class="content-box">
      <div class="colomn-content">
      <h1>SKILL</h1>
      <div class="colomn-main">
        <div id="skill">
          <p class="skill-title">WEB</p>
          
          <div class="chartbox">
            <p>HTML</p>
            <svg class="backsvg"></svg>
            <svg class="chartsvg"></svg>
            <div class="percent"></div>
          </div>

          <div class="chartbox">
            <p>CSS</p>
            <svg class="backsvg"></svg>
            <svg class="chartsvg"></svg>
            <div class="percent"></div>
          </div>

          <div class="chartbox">
            <p>JAVA SCRIPT</p>
            <svg class="backsvg"></svg>
            <svg class="chartsvg"></svg>
            <div class="percent"></div>
          </div>

          <div class="chartbox">
            <p>PHP</p>
            <svg class="backsvg"></svg>
            <svg class="chartsvg"></svg>
            <div class="percent"></div>
          </div>

          <div class="chartbox">
            <p>RUBY</p>
            <svg class="backsvg"></svg>
            <svg class="chartsvg"></svg>
            <div class="percent"></div>
          </div>

          <div class="skill-detail">

            <div class="skill-detail">
              <p class="skill-title">html detail</p>

              <div class="chartbox">
                <p>HTML 5</p>
                <svg class="backsvg"></svg>
                <svg class="chartsvg"></svg>
                <div class="percent"></div>
              </div>
              <div class="chartbox">
                <p>XML</p>
                <svg class="backsvg"></svg>
                <svg class="chartsvg"></svg>
                <div class="percent"></div>
              </div>
              <div class="chartbox">
                <p>XSL</p>
                <svg class="backsvg"></svg>
                <svg class="chartsvg"></svg>
                <div class="percent"></div>
              </div>
            </div>

            <div class="skill-detail">
              <p class="skill-title">css detail</p>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>

            <div class="skill-detail">
              <h2>js-detail</h2>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>

            <div class="skill-detail">
              <h2>php-detail</h2>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>

            <div class="skill-detail">
              <h2>ruby-detail</h2>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>

          </div >
        </div><!-- skill -->
        
      </div>     
      </div><!-- colomn-content -->
    </div><!-- content-box -->
    
    <!-- works -->
    <div class="content-box">
      <div class="colomn-content">
          <h1>WORKS</h1>
          <div class="colomn-main">
            <div id="works">
              <?php for ($i=0; $i < 9; $i++): ?>
                <div class="card"></div>
              <?php endfor ?>
            </div><!--works -->
          </div><!-- colomn-main -->
      </div><!-- colomn-content -->
    </div><!-- content-box -->

    <!-- contact -->
    <div class="content-box">
      <div class="colomn-content">
        <h1>CONTACT</h1>
        <div class="colomn-main">
          <div id="contact">
            <form action="sendMessage.php" method="post">

              <div class="input-column">
                <label for="name">Name</label>
                <input type="text" name="name" id="name">
              </div>

              <div class="input-column">
                <label for="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>

              <input type="submit" value="send" id="sendmail">

            </form> 
            <div class="error">
              <p class="hidden-text">plz enter your name!</p>
              <p class="hidden-text">plz enter message!</p>
              <p class="hidden-text">Thanx! :D</p>
            </div>
          </div><!-- contact -->
        </div><!-- colomn-main -->
      </div><!-- colomn-content -->
    </div><!-- content-box -->
  </main>
</body>
<script>
  $(function(){
    
    var menuNmber = 0;
    var menuNmbrPre = 0;
    var bbox = 0;
    var ew = $('#content').width() + 'px';
    var slideSpeed = 500;

      $('.profile-tab li').eq(0).addClass('on');
      $('#content div').eq(0).show().css('left', ew).animate( {left: '0px'}, slideSpeed);
       
      $(".profile-tab li a").click(function(e){
        e.preventDefault();
        menuNmbr = $(".profile-tab li a").index(this);
        $('.profile-tab li').eq(menuNmbr).addClass('on');
        $('#content div').eq(menuNmbr).show().css('left', ew).animate( {left: '0px'}, slideSpeed);
 
        if (menuNmbr != bbox) {
          menuNmbrPre = bbox;
          bbox = menuNmbr;
          $('.profile-tab li').eq(menuNmbrPre).removeClass('on');
          $('#content div').eq(menuNmbrPre).animate( {left: '-' + ew}, slideSpeed);
        }
    });
  });
</script>
</html>