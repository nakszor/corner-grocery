// FILTROS DE SEÇÕES ->

const navegation = document.querySelector(".botoesContainer")

navegation.addEventListener("click", (event)=>{
  const clickEvent = event.target.innerText

  if(clickEvent === "Todos Produtos"){
    ListProducts(produtos)
  }

  if(clickEvent === "Hortifruti"){
    const hortifruti = produtos.filter(elemento => elemento.secao === clickEvent)
    ListProducts(hortifruti)
  }

  if (clickEvent === "Panificadora") {
    const panificadora = produtos.filter(elemento => elemento.secao === clickEvent)
   ListProducts(panificadora)
  }

  if (clickEvent === "Laticínios") {
    const laticinios = produtos.filter(elemento => elemento.secao === 'Laticínio')
    ListProducts(laticinios)
  }

})

// BARRA DE PESQUISA ->

 const inputSearch  = document.querySelector(".campoBuscaPorNome")
 const buttonSearch = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")
 
// PESQUISA POR CLIQUE NO BOTÃO

 buttonSearch.addEventListener("click", (event) => {
  event.preventDefault()
  const secao = []
  produtos.forEach(elem => {
    if(elem.secao.toLowerCase() === inputSearch.value.toLowerCase()){
      secao.push(elem)
      ListProducts(secao)
    }
    else if (elem.categoria.toLowerCase() === inputSearch.value.toLowerCase()){
      secao.push(elem)
      ListProducts(secao)
    }
    else if(elem.nome.toLowerCase() === inputSearch.value.toLowerCase()){
      secao.push(elem)
      ListProducts(secao)
    }
  })
 })

 // PESQUISA AO PRESSIONAR TECLA ENTER

 inputSearch.addEventListener("keypress", (event) => {
  
  if (event.key === 'Enter'){
  const secao = []
  produtos.forEach(elem => {
    if(elem.secao.toLowerCase() === inputSearch.value.toLowerCase()){
      secao.push(elem)
      ListProducts(secao)
    }
    else if (elem.categoria.toLowerCase() === inputSearch.value.toLowerCase()){
      secao.push(elem)
      ListProducts(secao)
    }
    else if(elem.nome.toLowerCase() === inputSearch.value.toLowerCase()){
      secao.push(elem)
      ListProducts(secao)
    }
  })
  }
})
