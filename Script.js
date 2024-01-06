let entryIP = ""
let entryValue = ""
let inputNumber = "clear"
let vmixValue = ""
let vmixFunc = ""
let placeholder = ""
let placeholderValue = ""

function saveEntryIP() {
    let userInput = document.getElementById('IP')
    localStorage.setItem("IPAddress", userInput.value)
    window.location.href="./Main.html";
  }

function httpGet(link) {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", link, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

function saveEntryValue() {
  let userInput = document.getElementById('value')
  localStorage.setItem("vmixValue", userInput.value)
}

function httpGet(link) {
let xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", link, false); // false for synchronous request
xmlHttp.send(null);
return xmlHttp.responseText;
}

function chngImage(objImage, newSrc) {
  const originalSrc = objImage.getAttribute('src');
  const originalSrcBase = objImage.getAttribute('data-original-src');
  
  if (!originalSrcBase) {
    objImage.setAttribute('data-original-src', originalSrc)
  }
  
  objImage.setAttribute('src', newSrc);

  setTimeout(() => {
    objImage.setAttribute('src', originalSrc);
  }, 300);

};

function btnPress(objImage, newSrc) {
  
  chngImage(objImage, newSrc)
  entryIP = `${localStorage.getItem('IPAddress')}`
  

  if (entryIP) {
    if (vmixFunc) {
      httpGet(`http://${entryIP}:8088/api/?function=${vmixFunc}`);
      } else {
      alert("Invalid Vmix Function!")
      }
    } else {
    alert("Invalid IP Address!")
  }
  };

function btnPressInput(objImage, newSrc) {

  chngImage(objImage, newSrc)
  entryIP = `${localStorage.getItem('IPAddress')}`
  

  if (entryIP) {
    if (vmixFunc) {
      if(inputNumber === "1" || inputNumber === "2" || inputNumber === "3" || inputNumber === "4"){
        httpGet(`http://${entryIP}:8088/api/?function=${vmixFunc}&Input=${inputNumber}`);
      } else if (inputNumber === "clear") {
        httpGet(`http://${entryIP}:8088/api/?function=${vmixFunc}&Input=${placeholder}`);
      } else {
        alert("Invalid Input")
      }
    } else {
      alert("Invalid Vmix Function!")
    }
  } else {
    alert("Invalid IP Address!")
  }
  };

  function btnPressValue(objImage, newSrc) {

    chngImage(objImage, newSrc)
    entryIP = `${localStorage.getItem('IPAddress')}`
    entryValue = `${localStorage.getItem('vmixValue')}`
  
    if (entryIP) {
      if (vmixFunc) {
        if (entryValue === "Input") {
          if(inputNumber === "1" || inputNumber === "2" || inputNumber === "3" || inputNumber === "4"){
            httpGet(`http://${entryIP}:8088/api/?function=${vmixFunc}&Value=Input&Input=${inputNumber}`);
    
          } else if (inputNumber === "clear") {
            httpGet(`http://${entryIP}:8088/api/?function=${vmixFunc}&Value=Input&Input=${placeholder}`);
          } else {
            alert("Invalid input, valid value")
        }
        } else if (entryValue) {
          httpGet(`http://${entryIP}:8088/api/?function=${vmixFunc}&Value=${vmixValue}`);
        } else {
          httpGet(`http://${entryIP}:8088/api/?function=${vmixFunc}&Value=${placeholderValue}`);
        }
      } else {
        alert("Invalid Vmix Function!")
      }
    } else {
      alert("Invalid IP Address!")
    }
    };

function clearInput() {
  inputNumber = ""
  setTimeout(() => {
    inputNumber = "clear";
  }, 5000);
}

function clearValue() {
  vmixValue = ""
};

topLeft = document.getElementById("title");
if (topLeft) {
  topLeft.addEventListener("dblclick", clearInputs);
}


function setInputOne() {
  inputNumber = "1"
}

function setInputTwo() {
  inputNumber = "2"
}

function setInputThree() {
  inputNumber = "3"
}

function setInputFour() {
  inputNumber = "4"
}

function vMix(functionality) {
  vmixFunc = functionality
};

function vmixInputGet(functionality, inputHolder) {
  vmixFunc = functionality
  if (inputHolder) {
    placeholder = inputHolder
  }
};

function vmixValueGet(functionality, valueHolder, inputHolder) {
  vmixFunc = functionality
  if (valueHolder) {
    if (inputHolder) {
      placeholder = inputHolder
    }
    placeholderValue = valueHolder
  }
};
