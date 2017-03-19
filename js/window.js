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
