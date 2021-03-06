<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
<link rel="stylesheet" type="text/css" href="./build/css/style.css">
<script src="https://code.jquery.com/jquery-3.2.0.js"></script>
<script type="text/javascript" src="js/script.js"></script>
  </head>
    <title>KUMAKURA NAOKI.com</title>
  </head>
<body>
  <main>

    <!-- home -->
    <div class="content-box">
      <div class="colomn-content">
        <!-- <div class="colomn-img">
          <img src="img/home.png">
          <div>home</div>
        </div> -->
      <h1>HOME</h1>
      <div class="colomn-main">
        <div id="home">
        <div id="inName"></div>

        <table class="update">
          <tr>
            <td>2017,06,18</td>
            <td>change this project framework.</td>
          </tr>
          <tr>
            <td>2016,12,15</td>
            <td>adjustment mail form.</td>
          </tr>
          <tr>
            <td>2016,11,23</td>
            <td>change top page animation.</td>
          </tr>
          <tr>
            <td>2016,11,11</td>
            <td>Update my skill List.</td>
          </tr>
        </table>
        </div><!--home-->
      </div>      
      </div><!-- colomn-content -->
    </div><!-- content-box -->
    
    <!-- my infomation -->
    <div class="content-box">
      <div class="colomn-content">
        <!-- <div class="colomn-img">
        <div>profile</div>
        </div> -->
        <h1>PROFILE</h1>
        <div class="colomn-main">
          <div id="profile">
            <p class="flow">Hi !</p>
            <p class="flow">You want to My details?</p>
          </div>
        </div>
      </div><!-- colomn-content -->    
    </div><!-- content-box -->

    <!-- skills -->
    <div class="content-box">
      <div class="colomn-content">
        <!-- <div class="colomn-img">
          <div>skill</div>
        </div> -->
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

          </div>
        </div><!-- skill -->
        
      </div>     
      </div><!-- colomn-content -->
    </div><!-- content-box -->
    
    <!-- works -->
    <div class="content-box">
      <div class="colomn-content">
        <!-- <div class="colomn-img">
          <img src="img/work.png">
          <div>works</div>
        </div> -->
          <h1>WORKS</h1>
          <div class="colomn-main">
            <div id="works">
              <div class="work-design">
                  <div class="project">
                  <img src="img/pura.png" alt=""/><!-- </a> -->
                  </div>
                  
                  <div class="project">
                  <img src="img/ryokan.png" alt=""/>
                  </div>

                  <div class="project">
                  <img src="img/suizokukan.png" alt=""/>
                  </div>

                  <div class="project">
                  <img src="img/ankor.png" alt=""/>
                  </div>
              </div>
            </div><!--works -->
          </div><!-- colomn-main -->
      </div><!-- colomn-content -->
    </div><!-- content-box -->

    <!-- contact -->
    <div class="content-box">
      <div class="colomn-content">
        <!-- <div class="colomn-img">
        <img src="img/mail.png">
        <div>CONTACT</div>
        </div> -->
        <h1>CONTACT</h1>
        <div class="colomn-main">
          <div id="contact">
            <form action="sendMessage.php" method="post">
              <div class="text">Name<input type="text" name="name"></div>
              <label>Message</label>
              <textarea name="message"></textarea>
              <input type="submit" value="send" id="sendmail">
            </form> 
            <div class="error">
              <p class="hidden-text">plz enter your name</p>
              <p class="hidden-text">plz enter message</p>
            </div>
            <p class="hidden-text">Thanx.</p>
          </div><!-- contact -->
        </div><!-- colomn-main -->
      </div><!-- colomn-content -->
    </div><!-- content-box -->

  </main>
</body>
<script>
   var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $(document).on(scroll_event,function(e){e.preventDefault();});
</script>
</html>