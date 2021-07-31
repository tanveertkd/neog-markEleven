const inputBirthday = document.querySelector("#input-birthday");
const inputLuckyNumber = document.querySelector("#input-lucky-number");
const inputBtn = document.querySelector("#input-btn");


inputBtn.addEventListener("click", () => {
    let date = inputBirthday.value.split("-");
    console.log(parseInt(date.join("")));
})
