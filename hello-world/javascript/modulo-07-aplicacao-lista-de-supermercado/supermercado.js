var items = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]').value;
    var valorProduto = document.querySelector('input[name=valor_produto]').value;

    items.push({
        nome: nomeProduto,
        valor: valorProduto
    });

    alert(items[0].nome);
})