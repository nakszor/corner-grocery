const ulCard = document.querySelector (".listaProdutos");
const sum = document.getElementById("soma");
let arrayVitrine = [];

// FUNÇÃO PRA MOSTRAR OS CARDS NA VITRINE

function ListProducts(arr) {
  ulCard.innerHTML = ""
  let productCard = ""
  for (let index = 0; index < arr.length; index++) {
    let listProduct = arr[index]
    productCard = CreateProductCard(listProduct)
    ulCard.appendChild(productCard)
    arrayVitrine.push(productCard)
  }
}
ListProducts(produtos)

//FUNÇÃO QUE CRIA OS CARDS DA VITRINE

function CreateProductCard(array) {
   
    const cardImage        = document.createElement("img");
    const cardName         = document.createElement("h3");
    const cardSection      = document.createElement("span");
    const cardPrice        = document.createElement("p");
    const lista            = createLi(array.componentes);
    const cardDiv          = document.createElement("div");
    const cardButton       = document.createElement("button"); 
    const cardLi           = document.createElement("li");

    cardImage.src            = array.img;
    cardName.innerHTML       = array.nome;
    cardSection.innerHTML    = array.secao;
    cardPrice.innerHTML      = `R$${array.preco}`;
    cardButton.innerText     = "Comprar";
   
    arrayVitrine.push(array);

    cardDiv.append(cardPrice, cardButton);
    cardLi.append(cardImage,cardName,cardSection,lista,cardDiv);
     return cardLi;
}

// FUNÇÃO QUE GERA A <LI> DE CADA CARD 

function createLi(arr){
  let cardOl = document.createElement("ol");
  arr.forEach((elem)=>{
    const cardTagLi   = document.createElement("li");
     cardTagLi.innerText = elem
     cardOl.append(cardTagLi)
  })
  return cardOl
} 
    

