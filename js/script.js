window.onload = ()=> {

  //**********************************************
  // chart percent
  //**********************************************

  const chartcolor = new Array("#F7464A","#1ba3f2","#23d340","#31c5f0","#A30C01");
  const skillwidth = new Array("60%","60%","70%","50%","30%");
  $(".skill-bar").each(function(i){
    $(this).animate({width:skillwidth[i],backgroundColor:chartcolor[i]}, 500);
  });

  //**********************************************
  // send mail
  //**********************************************

  var sendmail = document.getElementById('sendmail');
  var input = document.getElementsByTagName('input');
  var hiddentext = document.getElementsByClassName('hidden_text');
  var from = document.getElementsByClassName('from');
  var textarea = document.getElementsByTagName('textarea');

  sendmail.addEventListener('click',function(e) {

    e.preventDefault();
    $.ajax({
      url:"sendMessage.php",
      type:"post",
      data:{
        "name":input[0].value,
        "message":textarea[0].value
      }
    })
    .done(function(data) {
      ty[0].style.opacity = "1";
      from[0].value = "";
      textarea[0].value = "";
      setTimeout(function() { ty[0].style.opacity = "0"; },4000);
    });

    if (input[0].value === "") {
      hiddentext[0].style.opacity = "1";
    }

    if (textarea[0].value === "") {
      hiddentext[1].style.opacity = "1";
    }

    if (input[0].value != "" && textarea[0].value != "") {
      hiddentext[2].style.opacity = "1";
      setTimeout(function() {
        input[0].value = "";
        textarea[0].value = "";
      },3000);
    }

    setTimeout(function() {
      for (var i = 0; i < hiddentext.length; i++) {
        hiddentext[i].style.opacity = "0";
      }
    },10000);
  });

  //**********************************************
  // header nav
  //**********************************************

  $("a[href^='#']").click(function() {
    $("html,body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 500 ,"swing");
    return false;
  });

  $(window).scroll(function() {

    var sc = $(this).scrollTop();
    var page_height = window.innerHeight;
    var chartTrigger = page_height*2;
    // if (sc == chartTrigger) {
      // count();
      // chart();
    // }

    for (var i = 1; i < $('.nav-link').length+1; i++) {
      if (sc <= page_height*i-0.1) {
        $("header nav ul li:nth-child("+i+") .nav-link").css({
          "background-color":"#333",
          "color":"#fff"
        });
        $("header nav ul li .nav-link").not($("header nav ul li:nth-child("+i+") .nav-link")).css({
          "background-color":"#ddd",
          "color":"#333"
        });
        return i;
      }
    }
  });

  //**********************************************
  // detail button
  //**********************************************

  $(".detail-button").on('click',function(){
    console.log($(this).next());
    $(this).children().toggleClass("active");
  });

  //**********************************************
  // change profile contents
  //**********************************************

  var menuNmber = 0;
  var menuNmbrPre = 0;
  var bbox = 0;
  var ew = $('#content').width() + 'px';
  var slideSpeed = 500;

  $('.profile-tab li').eq(0).addClass('on');
  $('#content div').eq(0).show().css('left', ew).animate( {left: '0px'}, slideSpeed);
     
  $(".profile-tab li a").click(function(e){
    e.preventDefault();
    if ($(this).parent().hasClass('on')) {
      return;
    }
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

  // API end pont
  const steamEndpoint = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=96733F3E4A9AD145842869253380B7AB&steamid=76561198078555010&format=json";
  // subcsription key
  const steamKey = "96733F3E4A9AD145842869253380B7AB";
  // steam ID
  const steamID = "76561198078555010";

  console.log(steamID);

  $.ajax({
    url:"sendMessage.php",
    type:"post",
    data:{
      "name":input[0].value,
      "message":textarea[0].value
    }
  })

} //window onload
