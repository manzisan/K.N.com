window.onload=function(){

//change width
var c_box = document.getElementsByClassName('content_box');
var c_main = document.getElementsByClassName('colomn_main');
var c_content = document.getElementsByClassName('colomn_content');
var c_img = document.getElementsByClassName('colomn_img');
var windowNum = 5;

function setWindow(){
  for (var i = 0; i < c_box.length; i++){
    c_box[i].addEventListener('click',function(num){
      windowNum++;
      $(".content_box").not(":nth-child("+windowNum+")").css("width","10%");
      this.style.width="60%";
    });
  }
}

// chart
var chartCount = 0;
var percent = document.getElementsByClassName('percent');

function count(){
  chartCount++;
  if (chartCount <= 75){
    percent[0].innerHTML = chartCount;
  }
  if (chartCount <= 75){
    percent[1].innerHTML = chartCount;
  }
  if (chartCount <= 80){
    percent[2].innerHTML = chartCount;
  }
  if (chartCount <= 25){
    percent[3].innerHTML = chartCount;
  }
  if (chartCount <= 60){
    percent[4].innerHTML = chartCount;
  }
}

var chartsvg = document.getElementsByClassName('chartsvg');
var backsvg = document.getElementsByClassName('backsvg');
var chartcolor = new Array("#F7464A","#1ba3f2","#23d340","#31c5f0","#ff781a","afc346");

c_box[2].addEventListener('click',function(){
  setInterval(count,10);
  chartCount = 0;
  for (var i = 0; i < chartsvg.length; i++){
    chartsvg[i].innerHTML="<circle cx='60' cy='60' r='40' class='chartcircle'/>";
  }
  for (var i = 0; i < backsvg.length; i++){
    backsvg[i].innerHTML="<circle cx='60' cy='60' r='40' class='backcircle'/>";
  }
  var chartcircle = document.getElementsByClassName('chartcircle');
  for (var i = 0; i < chartcircle.length; i++){
    chartcircle[i].style.animationName="circle"+i;
    chartcircle[i].style.stroke=chartcolor[i];
  }
});

// random text
var abc = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
var myName = new Array("K","U","M","A","K","U","R","A","N","A","O","K","I",".","c","o","m");

var flag = true;
var num = 0;
var inName = document.getElementById('inName');
var nameBox = document.getElementsByClassName('namebox');
var length = myName.length;
var interval = setInterval(randomChange,50);

  for (var i = 0; i < myName.length; i++){
    inName.innerHTML += "<span class='namebox'></span>";
  }

  function start(){
    flag = false;
    setName();
  }

  function randomChange(){
    for (var i = 0; i < myName.length; i++) {
      var random = Math.floor( Math.random() * 22 );
      if(flag === true){
        nameBox[i].innerHTML = abc[random];
      }
      if(flag === false){
        try{
          nameBox[num+i].innerHTML = abc[random];
        }catch(e){
          // no alert log
        }
      }
    }
  }

var h1 = document.getElementsByTagName('h1');
var update = document.getElementsByClassName('update');
var slidenum = 0;

  function setName(){
  var random = Math.floor( Math.random() * 18 );
    nameBox[num].innerHTML = myName[num];
      num++;
        if (num == length){
        var slide = setInterval(function(){
          if (slidenum > 1){
            c_box[slidenum-1].style.width="10%";
          }
          if (c_box.length == slidenum) {
            clearInterval(slide);
          }
          c_box[slidenum].style.width="60%";
          c_box[slidenum].style.display="block";
          c_box[slidenum].style.opacity="1";
          slidenum++;
        },150);// setInterval
        flag = "";
        setWindow();
        clearInterval(interval);
        for (var i = 0; i < h1.length; i++) {
          h1[i].style.opacity="1";
        }
        update[0].style.opacity="1";
        return;
        }//length
    setTimeout(setName,100);
  }
  start();
}