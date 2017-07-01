window.onload=function(){

//**********************************************
// change window width
//**********************************************

  var c_box = document.getElementsByClassName('content-box');
  var c_main=document.getElementsByClassName('colomn-main');
  var c_content=document.getElementsByClassName('colomn-content');
  var c_img = document.getElementsByClassName('colomn-img');

  var countnum = 5;

  function setWindow() {
    for (var i = 0; i < c_box.length; i++){
      c_box[i].addEventListener('click',function(num){
        countnum++;
        $(".content-box").not(":nth-child("+countnum+")").css("width","10%");
        this.style.width="60%";
        if (c_box[1].style.width != "60%") {
          flowCount = 0;
          flowNum = 0;
          FlowText();
        }
      });
    }
  }

  //**********************************************
  // flow text
  //**********************************************

  var flow = document.getElementsByClassName('flow');
  var flowNum = 0;  // text array number
  var flowCount = 0;  // inner text length count
  var flowTime = 75
  var text = new Array;

  for(var i = 0; i < flow.length; i++) {
    text[i] = flow[i].innerHTML;
    flow[i].innerHTML = "";
  }

  function FlowText(){
    flow[flowNum].style.display="block";

    // if dont look
    if (c_box[1].style.width != "60%") {
      flowNum = 0;
      for (var i = 0; i < flow.length; i++) {
        flow[i].style.display="none";
        flow[i].innerHTML = "";
      }
    }
    console.log("flowCount:"+flowCount);
    console.log("flownum:"+flowNum);
    // console.log()
    // for (var i = 0; i < flow.length; i++) {
    //   if (flow[i] == text[flownum].length) {}
    // }
    try{
      flow[flowNum].innerHTML += text[flowNum].charAt(flowCount);
      flowCount++;
      if(flowCount == text[flowNum].length){
        flowNum++;
        flowCount = 0;
      }
      setTimeout(FlowText,flowTime);
    }catch(e){
      // none
    }
  }

  //**********************************************
  // chart percent
  //**********************************************

  var cnt = 0;
  var percent = document.getElementsByClassName('percent');
  function count() {
    cnt++;
      if (cnt <= 75){
        percent[0].innerHTML = cnt;
      }
      if (cnt <= 75){
        percent[1].innerHTML = cnt;
      }
      if (cnt <= 75){
        percent[2].innerHTML = cnt;
      }
      if (cnt <= 50){
        percent[3].innerHTML = cnt;
      }
      if (cnt <= 25){
        percent[4].innerHTML = cnt;
      }
    }

  var chartsvg = document.getElementsByClassName('chartsvg');
  var backsvg = document.getElementsByClassName('backsvg');

  var chartcolor = new Array("#F7464A","#1ba3f2","#23d340","#31c5f0","#ff781a");

 

    c_box[2].addEventListener('click',function(){
      if (c_box[2].style.width != "60%") {
        cnt = 0;
        setInterval(count,10);
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
      }
    });

  // detail chart color //

  var chart_box = document.getElementsByClassName('chartbox');
  var s_detail = document.getElementsByClassName('skill-detail');

  for (var i = 0; i < chart_box.length; i++) {
    backsvg[i].addEventListener('click',function(){
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

  sendmail.addEventListener('click',function(e){

    e.preventDefault();
    // $.ajax({
    //         url:"sendMessage.php",
    //         type:"post",
    //         data:{
    //           "name":input[0].value,
    //           "message":textarea[0].value
    //         }
    //       })
    //         .done(function(data){
    //             // ty[0].style.opacity="1";
    //             // from[0].value="";
    //             // textarea[0].value="";
    //             // setTimeout(function(){ty[0].style.opacity="0";},4000);
    //       });

    if (input[0].value === ""){
      hiddentext[0].style.opacity="1";
    }

    if (textarea[0].value === ""){
      hiddentext[1].style.opacity="1";
    }

    if (input[0].value != "" && textarea[0].value != ""){
      hiddentext[2].style.opacity="1";
      setTimeout(function(){
        input[0].value="";
        textarea[0].value="";
      },3000);
    }

    setTimeout(function(){
      for (var i = 0; i < hiddentext.length; i++) {
        hiddentext[i].style.opacity="0";
      }
    },10000); 
  });

  //**********************************************
  // randome text
  //**********************************************

  var abc = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  var myName = new Array("K","U","M","A","K","U","R","A","N","A","O","K","I",".","c","o","m");

  // var flag = true;
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
          // for no alert
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
            // console.log(c_box[slidenum-1]);
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
        }// if length
    setTimeout(setName,100);
  }
  // setTimeout(start,2000);
  start();
}
