function cadastraProduto(event) {
    event.preventDefault();
    let código = document.getElementById("código").value
    let nome = document.getElementById("nome").value
    let descrição = document.getElementById("descrição").value
    let quantidade = document.getElementById("quantidade").value
    let preço = document.getElementById("preço").value

    let produto = {
        "código": código,
        "nome": nome,
        "descrição": descrição,
        "quantidade": quantidade,
        "preço": preço,
    }
    localStorage.setItem(código,JSON.stringify(produto))
    alert("Produto cadastrado com sucesso!");
}