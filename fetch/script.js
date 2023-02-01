const cep = fetch("https://viacep.com.br/ws/01001000/json/")


// doc.then(resolve => resolve.text())

cep.then((resolve) => resolve.json())
  .then((body) => {
    console.log(body.logradouro)
    const conteudo = document.querySelector('.conteudo')
    conteudo.innerText = body.logradouro
    
  })