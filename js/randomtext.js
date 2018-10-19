function randomText(ignore) {
  let replaceCount = 0;
  const inName = document.getElementById('inName');
  const nameBox = document.getElementsByClassName('namebox');
  const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const myName = inName.innerHTML.split("");

  inName.innerHTML = '';

  myName.map(() => inName.innerHTML += "<span class='namebox'></span>");

  function randomChange() {
    myName.map((name, i) => {
      let random = Math.floor(Math.random() * abc.length);
      if (nameBox[replaceCount + i]) nameBox[replaceCount + i].innerHTML = abc[random];
    });
  }

  function setName() {
    let random = Math.floor(Math.random() * myName.length);
    if (nameBox[replaceCount]) {
      nameBox[replaceCount].innerHTML = myName[replaceCount];
    } else {
      return true;
    }
    replaceCount++;
  }

  setInterval(randomChange, 50);
  localStorage.setItem('isDoneSetReplace', false);
  setInterval(()=> {
    if (setName() && localStorage.getItem('isDoneSetReplace') == 'false') {
      localStorage.setItem('isDoneSetReplace', true);
      $('header').animate({
        height: '48px',
        lineHeight: '24px',
      }, 1500);
    }
  }, 200);
}