const boxSelect = document.querySelectorAll(".row");
const displayElement = document.querySelector(".display");
const checkButton = document.getElementById("check");
const refresh = document.getElementById("refresh");
let count = 0;
let arr = [];
let isValid = false;

for (let i = 0; i < boxSelect.length; i++) {
  let boxSelected = boxSelect[i];
  boxSelected.addEventListener("click", () => {
    let id = boxSelected.getAttribute("id");
    if (count >= 2) {
      displayElement.innerHTML = "You can only make Two moves!";
      displayElement.style.color = "red";
    } else if (count == 0) {
      boxSelected.classList.add("active-count1");
      count++;
      arr.push(id);
    } else {
      boxSelected.classList.add("active-count2");
      count++;
      arr.push(id);
    }
  });
}

const attackCheck = () => {
  if (arr.length !== 2) {
    displayElement.innerHTML = "You have to make Two moves!";
  } else {
    displayElement.innerHTML = " ";

    let firstPosition = arr[0];
    let secondPosition = arr[1];

    let entryFP1 = firstPosition.split("")[0];
    let entryFP2 = firstPosition.split("")[1];

    let entrySP1 = secondPosition.split("")[0];
    let entrySP2 = secondPosition.split("")[1];

    if (entryFP2 === entrySP2 || entryFP1 === entrySP1) {
      isValid = true;
    } else if (entryFP1 - entryFP2 === entrySP2 - entrySP1) {
      isValid = true;
    } else if (Math.abs(secondPosition - firstPosition) % 9 == 0) {
      isValid = true;
    }
    if (isValid == true) {
      displayElement.innerHTML = "A Queen Has Been Attacked!";
    } else {
      displayElement.innerHTML = "A Queen Has not Been Attacked";
    }
  }
};
checkButton.addEventListener("click", attackCheck);

refresh.addEventListener("click", () => {
  location.reload();
});
