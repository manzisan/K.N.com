window.onload = function() {

  var abc = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  var myName = new Array("K","U","M","A","K","U","R","A","N","A","O","K","I",".","c","o","m");

  var flag = true;
  var num = 0;
  var inName = document.getElementById('inName');
  var nameBox = document.getElementsByClassName('namebox');

  for (var i = 0; i < myName.length; i++) {
    inName.innerHTML += "<span class='namebox'></span>";
  }

  function randomChange() {
    for (var i = 0; i < myName.length; i++) {
      var random = Math.floor( Math.random() * 22 );
      if(flag) {
        nameBox[i].innerHTML = abc[random];
      }
      if(!flag) {
        try {
          nameBox[num + i].innerHTML = abc[random];
        } catch(e) {
          // for no alert
        }
      }
    }
  }

  function setName() {
    var random = Math.floor( Math.random() * myName.length );
    nameBox[num].innerHTML = myName[num];
    num++;
    // if end of random change logic
    if (num == myName.length) {
      flag = "";
      return;
    }
    setTimeout(setName,100);
  }

  flag = false;
  setInterval(randomChange,50);
  setName();

}