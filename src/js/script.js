// Selecionando elemento ul do HTML
const ul = document.querySelector('.containerListaProdutos ul');

function montarListaProdutos(listaProdutos) {

    

    listaProdutos.forEach((produto) => {

        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');

        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        ul.appendChild(li);
        
    });

    let soma = listaProdutos.reduce((acc, produto)=> acc + produto.preco, 0)

    const telaMostrarSoma = document.querySelector('.containerPrecoTotal p span')
    telaMostrarSoma.innerHTML = soma
    
}

montarListaProdutos(produtos)



function mostrarTodos() {

    const listaTodos = produtos.filter((produto) => {
        return produto
    });
    
    ul.innerHTML = ''
    montarListaProdutos(listaTodos);
    
}
const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
botaoMostrarTodos.addEventListener('click', mostrarTodos);


function filtrarPorHortifruti() {

    ul.innerHTML = ''
    
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });
    
    montarListaProdutos(listaHortifruti);   

}
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);


const botaoBuscar = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
botaoBuscar.addEventListener('click', ()=>{

    let inputButton = document.querySelector('.campoBuscaPorNome')
    let produt = produtos.filter((produto) => { 
       return produto.nome.toLowerCase() === inputButton.value.toLowerCase()
    })
    ul.innerHTML = ''
    montarListaProdutos(produt)
});




