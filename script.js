let total = 0;
let totalSelected = 0;
let previousDishPrice = 0;
let previousDrinkPrice = 0;
let previousDesertPrice = 0;

let selectedDish = "";
let selectedDrink = "";
let selectedDesert = "";

function calcprice(clicked) {
    a = clicked.children[3].innerText;
    arr = a.split(" ");
    price = parseFloat(arr[1].replace(",", "."));

    return price;
}

function selectDish(clicked) {
    currentPrice = calcprice(clicked);
    console.log("preço: " + currentPrice);
    console.log("previousDishPrice: " + previousDishPrice);
    if (document.querySelector(".dishes .selected") !== null) {
        // tem alguém já clicado

        if (clicked == document.querySelector(".dishes .selected")) {
            // é o mesmo elemento   subtrair o valor anterior
            clicked.classList.toggle("selected");
            clicked.querySelector("ion-icon").classList.toggle("display-none");
        } else {
            // elemento diferente   subtrair o valor anterior
            document
                .querySelector(".dishes .selected ion-icon")
                .classList.toggle("display-none");
            document.querySelector(".dishes .selected").classList.toggle("selected");

            clicked.classList.toggle("selected");
            clicked.querySelector("ion-icon").classList.toggle("display-none");

            total += currentPrice;
            totalSelected++;
        }
        total -= previousDishPrice;
        totalSelected--;
    } else {
        // não tem ninguém clicado
        clicked.classList.toggle("selected");
        clicked.querySelector("ion-icon").classList.toggle("display-none");

        total += currentPrice;
        totalSelected++;
    }

    previousDishPrice = currentPrice;
    total = Math.round(total * 100) / 100;
    console.log(`total: ${total}`);
    console.log(`totalSelected: ${totalSelected}`);

    selectedDish = clicked.children[1].innerText;
    document.getElementById("selected-dish").innerHTML =
        clicked.children[1].innerHTML;
    document.getElementById("selected-dish-price").innerHTML =
        "R$ " + price.toFixed(2).replace(".", ",");

    isItFinished();
}

function selectDrink(clicked) {
    currentPrice = calcprice(clicked);
    console.log("preço: " + currentPrice);
    console.log("previousDrinkPrice: " + previousDrinkPrice);
    if (document.querySelector(".drinks .selected") !== null) {
        // tem alguém já clicado

        if (clicked == document.querySelector(".drinks .selected")) {
            // é o mesmo elemento   subtrair o valor anterior
            clicked.classList.toggle("selected");
            clicked.querySelector("ion-icon").classList.toggle("display-none");
        } else {
            // elemento diferente   subtrair o valor anterior
            document
                .querySelector(".drinks .selected ion-icon")
                .classList.toggle("display-none");
            document.querySelector(".drinks .selected").classList.toggle("selected");

            clicked.classList.toggle("selected");
            clicked.querySelector("ion-icon").classList.toggle("display-none");

            total += currentPrice;
            totalSelected++;
        }
        total -= previousDrinkPrice;
        totalSelected--;
    } else {
        // não tem ninguém clicado
        clicked.classList.toggle("selected");
        clicked.querySelector("ion-icon").classList.toggle("display-none");

        total += currentPrice;
        totalSelected++;
    }

    previousDrinkPrice = currentPrice;
    total = Math.round(total * 100) / 100;
    console.log(`total: ${total}`);
    console.log(`totalSelected: ${totalSelected}`);
    selectedDrink = clicked.children[1].innerText;
    document.getElementById("selected-drink").innerHTML =
        clicked.children[1].innerHTML;
    document.getElementById("selected-drink-price").innerHTML =
        "R$ " + price.toFixed(2).replace(".", ",");

    isItFinished();
}

function selectDesert(clicked) {
    currentPrice = calcprice(clicked);
    console.log("preço: " + currentPrice);
    console.log("previousDesertPrice: " + previousDesertPrice);
    if (document.querySelector(".deserts .selected") !== null) {
        // tem alguém já clicado

        if (clicked == document.querySelector(".deserts .selected")) {
            // é o mesmo elemento   subtrair o valor anterior
            clicked.classList.toggle("selected");
            clicked.querySelector("ion-icon").classList.toggle("display-none");
        } else {
            // elemento diferente   subtrair o valor anterior
            document
                .querySelector(".deserts .selected ion-icon")
                .classList.toggle("display-none");
            document.querySelector(".deserts .selected").classList.toggle("selected");

            clicked.classList.toggle("selected");
            clicked.querySelector("ion-icon").classList.toggle("display-none");

            total += currentPrice;
            totalSelected++;
        }
        total -= previousDesertPrice;
        totalSelected--;
    } else {
        // não tem ninguém clicado
        clicked.classList.toggle("selected");
        clicked.querySelector("ion-icon").classList.toggle("display-none");

        total += currentPrice;
        totalSelected++;
    }

    previousDesertPrice = currentPrice;
    total = Math.round(total * 100) / 100;
    console.log(`total: ${total}`);
    console.log(`totalSelected: ${totalSelected}`);
    selectedDesert = clicked.children[1].innerText;

    document.getElementById("selected-desert").innerHTML =
        clicked.children[1].innerHTML;
    document.getElementById("selected-desert-price").innerHTML =
        "R$ " + price.toFixed(2).replace(".", ",");

    isItFinished();
}

function isItFinished() {
    if (totalSelected == 3) {
        document.querySelector(".finish-order div span").innerText =
            "Fechar pedido";
        document.querySelector(".finish-order div").style.backgroundColor =
            "#32B72F";
        document
            .querySelector(".finish-order div")
            .classList.toggle("cursor-pointer");
        // tentei evitar inline styling mas quando usei classList.toggle(".finished") o html deu preferência para o style .finish-order div   OBS: Deixei comentado o estilo .finished no final do .css
    } else {
        // se não, remover os estilos adicionados
        document.querySelector(".finish-order div span").innerText =
            "Selecione os 3 itens para fechar o pedido";
        document.querySelector(".finish-order div").style.backgroundColor =
            "#CBCBCB";
    }
    document.getElementById("total-price").innerHTML =
        "R$ " + total.toFixed(2).replace(".", ",");
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
