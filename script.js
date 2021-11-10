let total = 0;
let totalSelected = 0;
let previousDishPrice = 0;
let previousDrinkPrice = 0;
let previousDesertPrice = 0;

let selectedDish = "";
let selectedDrink = "";
let selectedDesert = "";

function calcPrice(clickedElement) {
    innerString = clickedElement.children[3].innerText;
    splitPrice = innerString.split(" ");
    price = parseFloat(splitPrice[1].replace(",", "."));

    return price;
}

function selectDish(clickedElement) {
    currentPrice = calcPrice(clickedElement);
    if (document.querySelector(".dishes .selected") !== null) {

        if (clickedElement == document.querySelector(".dishes .selected")) {
            clickedElement.classList.toggle("selected");
            clickedElement.querySelector("ion-icon").classList.toggle("display-none");
        }
        else {
            document.querySelector(".dishes .selected ion-icon").classList.toggle("display-none");
            document.querySelector(".dishes .selected").classList.toggle("selected");

            clickedElement.classList.toggle("selected");
            clickedElement.querySelector("ion-icon").classList.toggle("display-none");

            total += currentPrice;
            totalSelected++;
        }
        total -= previousDishPrice;
        totalSelected--;
    }
    else {
        clickedElement.classList.toggle("selected");
        clickedElement.querySelector("ion-icon").classList.toggle("display-none");

        total += currentPrice;
        totalSelected++;
    }

    previousDishPrice = currentPrice;
    total = Math.round(total * 100) / 100;

    selectedDish = clickedElement.children[1].innerText;
    document.getElementById("selected-dish").innerHTML = clickedElement.children[1].innerHTML;
    document.getElementById("selected-dish-price").innerHTML = "R$ " + price.toFixed(2).replace(".", ",");

    finishedOrderCheck();
}

function selectDrink(clickedElement) {
    currentPrice = calcPrice(clickedElement);
    if (document.querySelector(".drinks .selected") !== null) {

        if (clickedElement == document.querySelector(".drinks .selected")) {
            clickedElement.classList.toggle("selected");
            clickedElement.querySelector("ion-icon").classList.toggle("display-none");
        }
        else {
            document.querySelector(".drinks .selected ion-icon").classList.toggle("display-none");
            document.querySelector(".drinks .selected").classList.toggle("selected");

            clickedElement.classList.toggle("selected");
            clickedElement.querySelector("ion-icon").classList.toggle("display-none");

            total += currentPrice;
            totalSelected++;
        }
        total -= previousDrinkPrice;
        totalSelected--;
    }
    else {
        clickedElement.classList.toggle("selected");
        clickedElement.querySelector("ion-icon").classList.toggle("display-none");

        total += currentPrice;
        totalSelected++;
    }

    previousDrinkPrice = currentPrice;
    total = Math.round(total * 100) / 100;

    selectedDrink = clickedElement.children[1].innerText;

    document.getElementById("selected-drink").innerHTML = clickedElement.children[1].innerHTML;
    document.getElementById("selected-drink-price").innerHTML = "R$ " + price.toFixed(2).replace(".", ",");

    finishedOrderCheck();
}

function selectDesert(clickedElement) {
    currentPrice = calcPrice(clickedElement);
    if (document.querySelector(".deserts .selected") !== null) {

        if (clickedElement == document.querySelector(".deserts .selected")) {
            clickedElement.classList.toggle("selected");
            clickedElement.querySelector("ion-icon").classList.toggle("display-none");
        }
        else {
            document.querySelector(".deserts .selected ion-icon").classList.toggle("display-none");
            document.querySelector(".deserts .selected").classList.toggle("selected");

            clickedElement.classList.toggle("selected");
            clickedElement.querySelector("ion-icon").classList.toggle("display-none");

            total += currentPrice;
            totalSelected++;
        }
        total -= previousDesertPrice;
        totalSelected--;
    }
    else {
        clickedElement.classList.toggle("selected");
        clickedElement.querySelector("ion-icon").classList.toggle("display-none");

        total += currentPrice;
        totalSelected++;
    }

    previousDesertPrice = currentPrice;
    total = Math.round(total * 100) / 100;
    selectedDesert = clickedElement.children[1].innerText;

    document.getElementById("selected-desert").innerHTML = clickedElement.children[1].innerHTML;
    document.getElementById("selected-desert-price").innerHTML = "R$ " + price.toFixed(2).replace(".", ",");

    finishedOrderCheck();
}

function finishedOrderCheck() {

    if (totalSelected == 3) {
        document.querySelector(".finish-order div span").innerText = "Fechar pedido";
        document.querySelector(".finish-order div").style.backgroundColor = "#32B72F";
        document.querySelector(".finish-order div").classList.toggle("cursor-pointer");
    }
    else {
        document.querySelector(".finish-order div span").innerText = "Selecione os 3 itens para fechar o pedido";
        document.querySelector(".finish-order div").style.backgroundColor = "#CBCBCB";
    }
    document.getElementById("total-price").innerHTML = "R$ " + total.toFixed(2).replace(".", ",");
}

function finish() {

    if (totalSelected == 3) {
        document.getElementById("confirm-order").classList.toggle("display-none");
    }
}

function cancel() {
    document.getElementById("confirm-order").classList.toggle("display-none");
}

function whatsappMessage() {
    let name = prompt("Qual o seu nome?");
    let address = prompt("Qual o seu endereço?");

    let message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
   - Prato: ${selectedDish}
   - Bebida: ${selectedDrink}
   - Sobremesa: ${selectedDesert}
   Total: R$ ${total.toFixed(2).replace(".", ",")}
   
   Nome: ${name}
   Endereço: ${address}`);

    window.open(`https://wa.me/5512991423733?text=${message}`);
}
