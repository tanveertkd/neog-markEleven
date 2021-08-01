const inputBirthday = document.querySelector("#input-birthday");
const inputLuckyNumber = document.querySelector("#input-lucky-number");
const inputBtn = document.querySelector("#input-btn");
const secondaryOutput = document.querySelector(".secondary-output");
const cookiePopup = document.querySelector(".cookie-popup");
const cookieCloseBtn = document.querySelector("#cookie-close-btn");

inputBtn.addEventListener("click", () => {
    
    const verified = verifyInput(inputBirthday, inputLuckyNumber);

    if(verified){
        const luck = checkIfLucky(inputBirthday, inputLuckyNumber);
        if(luck){
            secondaryOutput.innerText = "Yes! Your birthday is lucky!";
        }else{
            secondaryOutput.innerText = "Sorry! It doesn't seem to be lucky.";
        }
    }else{
        secondaryOutput.innerText = "Please check your inputs."
    }
});

const verifyInput = ((birthday, luckyNumber) => {
    if(birthday.value === "" || luckyNumber.value === ""){
        return false;
    }else{
        return true;
    }
});

const checkIfLucky = ((date, number) => {
    let sum = 0;
    const datePassed = date.value.split("-");
    let dateParsed = parseInt(datePassed.join(""));
    const numberPassed = number.value;

    while(dateParsed){
        sum = sum+(dateParsed%10);
        let dateD = dateParsed/10;
        dateParsed = Math.floor(dateD);
    }

    if((sum%numberPassed)===0){
        return true;
    }else{
        return false;
    }
});

cookieCloseBtn.addEventListener("click", ()=>{
    cookiePopup.style.display = "none";
});