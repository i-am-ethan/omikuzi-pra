//get omikuzi-btn
const omikuziBtn = document.getElementById("omikuzibtn");

//get p-tag
const h3Tag = document.getElementById("h3-tag");
//get span-tag
let spanTagVal = document.getElementById("span-tag").nodeValue;
spanTagVal = "blue";
console.log(spanTagVal);

//get background color
const bodyEl = document.querySelector("body");

const addTextNode = (text) => {
  let newText = document.createTextNode(text),
    spanTag = document.getElementById("span-tag");
  spanTag.appendChild(newText);
};

const pushOmikuziBtn = omikuziBtn.addEventListener("click", () => {
  let rnd = Math.floor(Math.random() * 2);
  console.log(typeof rnd);
  //define confirm
  let confirmText = confirm("Do you want to get Omikuzi?");
  switch (rnd) {
    case 0:
      console.log("大吉");
      confirm("大吉:great");
      if (confirmText) {
        addTextNode(" ");
      } else {
        addTextNode(" ");
      }
      //   alert("大吉:great");
      spanTagVal = "blue";
      //   console.log(spanTagVal);
      addTextNode(" " + "blue");
      bodyEl.style.backgroundColor = "blue";

      break;
    case 1:
      console.log("吉");
      confirm("吉:nice");
      //   alert("吉:nice");
      if (confirmText) {
        addTextNode(" ");
      } else {
        addTextNode(" ");
      }
      spanTagVal = "red";
      //   console.log(spanTagVal);
      addTextNode(" " + "red");
      bodyEl.style.backgroundColor = "red";

      break;
    case 2:
      console.log("凶");
      confirm("凶:bad");
      if (confirmText) {
        addTextNode(" ");
      } else {
        addTextNode(" ");
      }
      //   alert("凶:bad");
      spanTagVal = "yellow";
      //   console.log(spanTagVal);
      addTextNode(" " + "yellow");
      bodyEl.style.backgroundColor = "yellow";

      break;
  }
});
