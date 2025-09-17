let optionsButtons = document.querySelectorAll(".option-button");
let advanceOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButton = document.querySelectorAll(".format");
let scriptButton = document.querySelectorAll('.script');

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Cardamon",
    "Georgia",
    "Courier New",
    "Cursive",
];

const intializer = () => {
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButton, false);
    highlighter(scriptButton, true);

    fontList.map((value) => {
        let option = document.createElement("option");
        option.value= value;
        option.innerHTML = value;
        fontSizeRef.appendChild(option);
    });

    for (let i = 1; i <= 7; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3;
};

const modifyText = (command,defaultUi,value) => {
    document.execCommand(command,defaultUi,value);
};
optionsButtons.forEach((button)=>{
    button.addEventListener("click", () =>{
        modifyText(button.id,false,null);
    });
});

advanceOptionButton.forEach((button) => {
    button.addEventListener("change",() => {
        modifyText(button.id,false,button.value);
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("enter a URL");
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id , false,userLink);
    }else{
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});





window.onload = intializer();
