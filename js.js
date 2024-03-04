function rock(){
    newImg = document.createElement("img");
    newImg.src = "https://sberbusiness.live/bcp-laika-public/04d02ab7-28ba-4ece-9b53-bda03e6cbe54/original"
    newImg.style.width = "200px";
    newImg.style.height = "200px";
    var oldTime = document.getElementById("player-zone").firstChild;
    document.getElementById("player-zone").replaceChild(newImg, oldTime);
    
    computerChoice("камень")
}

function cut(){
    newImg = document.createElement("img");
    newImg.src = "https://papus666.narod.ru/clipart/n/nogn/nogn13.png"
    newImg.style.width = "200px";
    newImg.style.height = "200px";
    var oldTime = document.getElementById("player-zone").firstChild;
    document.getElementById("player-zone").replaceChild(newImg, oldTime);

    computerChoice("ножницы")
}

function paper(){
    newImg = document.createElement("img");
    newImg.src = "https://static.vecteezy.com/system/resources/thumbnails/018/795/027/small/white-notebook-paper-with-all-edges-ripped-png.png"
    newImg.style.width = "200px";
    newImg.style.height = "200px";
    var oldTime = document.getElementById("player-zone").firstChild;
    document.getElementById("player-zone").replaceChild(newImg, oldTime);

    computerChoice("бумага");
}

// варианты для компьютера
const choices = ['камень', 'ножницы', 'бумага'];


// функция выбора компьютера
function computerChoice(userChoice){
    // определение рандомного числа 
    const randomIndex = Math.floor(Math.random() * 3);

    // создание тега 
    newImg = document.createElement("img");

    choiceImg = ["https://sberbusiness.live/bcp-laika-public/04d02ab7-28ba-4ece-9b53-bda03e6cbe54/original",
    "https://papus666.narod.ru/clipart/n/nogn/nogn13.png",
    "https://static.vecteezy.com/system/resources/thumbnails/018/795/027/small/white-notebook-paper-with-all-edges-ripped-png.png"]

    // добавление случайного значения в область компьютера
    newImg.src = choiceImg[randomIndex];
    newImg.style.height = "200px";
    newImg.style.width = "200px";

    // замена старого на новое
    var oldComp = document.getElementById("comp-zone").firstChild;
    document.getElementById("comp-zone").replaceChild(newImg, oldComp);

    //Определение последнего значения компьютера
    compChoice =  choices[randomIndex];

    // Вызов функции
    Game(userChoice, compChoice)

}


// Функция выигрыша
function Game(userChoice, compChoice){
    result = document.createElement("h1");
    // Условия игры
    if (userChoice === compChoice) {       
        result.innerText = "Ничья"
    }
    else{
        if ((userChoice === 'камень' && compChoice === 'ножницы') ||
            (userChoice === 'ножницы' && compChoice === 'бумага') ||
            (userChoice === 'бумага' && compChoice === 'камень')) {
            result.innerText = "Победа"
            
        }
        else{
            result.innerText = "Поражение"
        
        }
    }

    var oldResult = document.getElementById("result").firstChild;
    document.getElementById("result").replaceChild(result, oldResult);

}


