//alert("Ты питух");
//var data = confirm("Сосал?");
//if (data) {
//    alert("Хорош");
//} else {
//    confirm("Точно?");
//}
//
//prompt("Ну ты точно сосал же?", "да");
var counter = "Ты гей!";
var k = 2;
function onClickButton(el) {
    if (k %2 == 0) {el.style.backgroundColor = "black";
        el.style.color = "white";
        counter = "Ты гей!"
        el.innerHTML = counter;}

    if (k %2 ==1){el.style.backgroundColor = "white";
        el.style.color = "black";
        counter = "Ты чмо!"
        el.innerHTML = counter;}
    k++;

}

function onInput(el) {
    if (el.value === "Ильхан" || el.value === "ильхан") {
        console.log("Ассаламуалейкум", el.value);
    }

}

