function testes(){
    return new Promise(function(resolve,reject){

        const erro = false;
        if(erro){
            reject('Erro...');
        }else{
            resolve('A promise foi resolvido com sucesso!')
        }
    },5000)
}

// promise
/*testes().then(function(res){
    alert(res);
}).catch(function(err){
    alert(err);
})*/

// funcoes asincronos e await
async function teste2(){
    await testes().then(function(res){
        alert(res);
    });
    alert('Olá');
}

teste2();