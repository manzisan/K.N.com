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