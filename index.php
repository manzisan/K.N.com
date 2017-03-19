<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
<link rel="stylesheet" type="text/css" href="css/style.css">
<script src="https://code.jquery.com/jquery-3.2.0.js" integrity="sha256-wPFJNIFlVY49B+CuAIrDr932XSb6Jk3J1M22M3E2ylQ=" crossorigin="anonymous"></script>
<script type="text/javascript" src="js/script.js"></script>
<title>KUMAKURA NAOKI.com</title>
</head>
<body>
  <main>
    <div class="content_box">
      <div class="colomn_content">
      <h1>HOME</h1>
      <div class="colomn_main">
      <div id="home">
      <div id="inName"></div>
      <table class="update">
       <tr>
          <td class="flow">2016,12,15</td>
          <td class="flow">adjustment mail form.</td>
        </tr>
        <tr>
          <td>2016,11,23</td>
          <td>change top animation.</td>
        </tr>
        <tr>
          <td>2016,11,11</td>
          <td>Update Skill List.</td>
        </tr>
      </table>
      </div><!--home-->
      </div><!-- colomn_main -->
      </div><!-- colomn_content -->
    </div><!-- content_box -->

    <div class="content_box">
      <div class="colomn_content">
      <h1>PROFILE</h1>
        <div class="colomn_main">
          <div id="profile">
            <p>Hi !</p>
            <p>You want to My details?</p>

          </div><!-- profile-->
        </div><!-- colomn_main -->
      </div><!-- colomn_content -->
    </div><!-- content_box -->

    <div class="content_box">
      <div class="colomn_content">
      <h1>SKILL</h1>
        <div class="colomn_main">
          <div id="skill">

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
              <p>ETC</p>
                <svg class="backsvg"></svg>
                <svg class="chartsvg"></svg>
                <div class="percent"></div>
            </div>

          </div><!-- skill -->
        </div><!-- colomn_main -->
      </div><!-- colomn_content -->
    </div><!-- content_box -->

    <div class="content_box">
      <div class="colomn_content">
        <h1>WORKS</h1>
      	<div class="colomn_main">
          <div id="works">
          </div><!--works -->
      	</div><!-- colomn_main -->
      </div><!-- colomn_content -->
    </div><!-- content_box -->

    <div class="content_box">
      <div class="colomn_content">
      <h1>CONTACT</h1>
        <div class="colomn_main">
          <div id="contact">
            <form action="sendMessage.php" method="post">
            <div class="text">
            Name<input type="text" name="name">
            </div>
            <label>Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="send" id="sendmail">
            </form> 
            <div class="error">
              <p class="hidden_text">plz enter your name</p>
              <p class="hidden_text">plz enter message</p>
              <p class="hidden_text">Thanx.</p>
            </div>
          </div><!-- contact -->
        </div><!-- colomn_main -->
      </div><!-- colomn_content -->
    </div><!-- content_box -->
  </main>
</body>
</html>