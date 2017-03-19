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