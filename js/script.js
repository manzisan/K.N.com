window.onload = function() {

  //**********************************************
  // chart percent
  //**********************************************

  var cnt = 0;
  var percent = document.getElementsByClassName('percent');

  function count() {
    cnt++;
    if (cnt <= 75) {
      percent[0].innerHTML = cnt;
    }
    if (cnt <= 75) {
      percent[1].innerHTML = cnt;
    }
    if (cnt <= 75) {
      percent[2].innerHTML = cnt;
    }
    if (cnt <= 50) {
      percent[3].innerHTML = cnt;
    }
    if (cnt <= 25) {
      percent[4].innerHTML = cnt;
    }
  }

  var chartsvg = document.getElementsByClassName('chartsvg');
  var backsvg = document.getElementsByClassName('backsvg');

  var chartcolor = new Array("#F7464A","#1ba3f2","#23d340","#31c5f0","#A30C01");

  function chart() {
    cnt = 0;
    setInterval(count,10);
    for (var i = 0; i < chartsvg.length; i++) {
      chartsvg[i].innerHTML = "<circle cx='60' cy='60' r='40' class='chartcircle'/>";
      backsvg[i].innerHTML = "<circle cx='60' cy='60' r='40' class='backcircle'/>";
    }
    chartcircle = document.getElementsByClassName('chartcircle');
    for (var i = 0; i < chartcircle.length; i++) {
      chartcircle[i].style.animationName = "circle"+i;
      chartcircle[i].style.stroke=chartcolor[i];
    }
  }

  $('header .chart-link').on('click',function(){
    chart();
    count();
  });

  // detail chart color
  var chart_box = document.getElementsByClassName('chartbox');
  var s_detail = document.getElementsByClassName('skill-detail');

  for (var i = 0; i < chart_box.length; i++) {
    backsvg[i].addEventListener('click',function() {
      this.style.backGroundColor = "red";
    });
  }

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
  // randome text
  //**********************************************

  var abc = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  var myName = new Array("K","U","M","A","K","U","R","A","N","A","O","K","I",".","c","o","m");

  var num = 0;
  var flag = true;
  var inName = document.getElementById('inName');
  var nameBox = document.getElementsByClassName('namebox');
  var length = myName.length;
  var change_function = setInterval(randomChange,50);

  for (var i = 0; i < myName.length; i++) {
    inName.innerHTML += "<span class='namebox'></span>";
  }

  function start() {
    flag = false;
    setName();
  }

  function randomChange() {
    for (var i = 0; i < myName.length; i++) {
      var random = Math.floor( Math.random() * 22 );
      if(flag === true) {
        nameBox[i].innerHTML = abc[random];
      } else if(flag === false) {
        try {
          nameBox[num + i].innerHTML = abc[random];
        } catch(e) {
          // for no alert
        }
      }
    }
  }

  function setName() {
    var random = Math.floor( Math.random() * 18 );
    nameBox[num].innerHTML = myName[num];
    num++;
    if (num == length) {
      clearInterval(change_function);
      return;
    }
    setTimeout(setName,100);
  }

  start();

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
    if (sc == chartTrigger) {
      count();
      chart();
    }

    for (var i = 1; i < $('.nav-link').length+1; i++) {
      if (sc <= page_height*i-1) {
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

} //window onload



