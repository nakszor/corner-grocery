const carrinho = document.querySelector(".cart-itens")
let  arraycarrinho = [];
const ulcarrinho = document.createElement("ul")
const cart = document.querySelector(".cart")
let result = 0;


// FUNÇAO QUE CRIA OS DETALHES DO CARRINHO VAZIO

function DOMCarrinho() {
const imgCarrinho = document.createElement("img")
const divImgCarrinho = document.createElement("div")
const textoCarrinho = document.createElement("p")
const divTexto = document.createElement("div")
const divInsideCart = document.querySelector(".inside-cart")

imgCarrinho.src = "./src/img/cart.png"
imgCarrinho.alt = "png sacola vazia carrinho"
imgCarrinho.classList.add("img-bag")
divTexto.classList.add("texto")
divImgCarrinho.classList.add("img")
textoCarrinho.innerText = "Por enquanto não temos produtos no carrinho"

divImgCarrinho.appendChild(imgCarrinho)
divTexto.appendChild(textoCarrinho)
divInsideCart.append(divImgCarrinho, divTexto)
}       
DOMCarrinho()

// FUNÇÃO QUE CRIA OS MINI CARDS QUE VAO PARA O CARRINHO


function CardsCarrinho(array) { 

    const carrinho = document.querySelector(".inside-cart")
    const imgcard = document.createElement("img")
    const divimgcard = document.createElement("div")
    const nomeproduto = document.createElement("h3")
    const categoria = document.createElement("p")
    const preco = document.createElement("p")
    const divdescricao = document.createElement("div")
    const imgremover = document.createElement("img") 
    const divremover = document.createElement("div");
    const divminicard = document.createElement("div");
    const licarrinho = document.createElement("li")

    licarrinho.id = array[0].id
    imgcard.src = array[0].img
    nomeproduto.innerHTML = array[0].nome;
    categoria.innerHTML = array[0].secao;
    preco.innerHTML = array[0].preco;
    imgremover.src = "./src/img/trash.png"
    imgremover.id = "trash"
    divimgcard.classList.add("imgminicard")
    divdescricao.classList.add("rotulos")
    categoria.classList.add("categoria")
    divremover.classList.add("imgtrash")
    divminicard.classList.add("minicard")
  
  divremover.addEventListener('click', () => {
    const produto = divremover.closest("li")
    const idproduto = produto.id 
    arraycarrinho.forEach((element, index) => {
      if (element[0].id === idproduto) {
        arraycarrinho.splice(index,1)
        CardsCarrinho(arraycarrinho)
      }
    })
   
  })

    divimgcard.append(imgcard)
    divdescricao.append(nomeproduto,categoria,preco)
    divremover.append(imgremover)
    divminicard.append(divimgcard,divdescricao,divremover)
    licarrinho.append(divminicard)
    ulcarrinho.append(licarrinho)
    carrinho.append(ulcarrinho)
    
  }


ulCard.addEventListener("click", function(e) {
    const botaoAdd = e.target
    const texto = document.querySelector(".texto")
    const img = document.querySelector(".img")
    img.style.display = "none"
    texto.style.display = "none"
    carrinho.style.display = "block"

    if(botaoAdd.tagName == "BUTTON"){
      ulcarrinho.innerHTML=""
      const produto = botaoAdd.closest("li")
      const arrfilter = produtos.filter((element)=>{
        return element.nome === produto.children[1].outerText
      })
      arraycarrinho.push(arrfilter)
      const totalcarrinho = document.querySelector(".totalcarrinho")
      result = 0
      arraycarrinho.forEach((elemento) =>{
        result += parseInt(elemento[0].preco)
        totalcarrinho.innerHTML = "R$" + result + ",00"
      })
      arraycarrinho.forEach((elemento)=>{
        CardsCarrinho(elemento) 
      })
    }

})
/**
 * 
 * botao todos produtos quebra de linha
 * função adicionar esta adicionando mais de um item no array
 * função remover do carrinho 
 * função soma
 * adicionar img sacola vazia quando carrinho estiver vazio
 * 
 */

/*
const carrinho = document.querySelector(".card-itens")
ulCard.addEventListener("click", adicionarAoCarrinho) 

let  arraycarrinho = [];
const ulcarrinho = document.createElement("ul");
function adicionarAoCarrinho(event) {
    let botaoAdd = event.target

    if(botaoAdd.tagName == "BUTTON"){
      ulcarrinho.innerHTML="";
        let produto = botaoAdd.closest("li")
        let arrfilter = produtos.filter((element)=>{
        return element.nome === produto.children[1].outerText
       }) 
       arraycarrinho.push(arrfilter)
       arraycarrinho.forEach((elemento)=>{
        CardsCarrinho(elemento)
       })

    } */