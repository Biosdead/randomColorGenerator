function gerarCor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    AlterarFundo(randomColor);
}

function AlterarFundo(cor){
    document.body.style.backgroundColor = cor;
    document.getElementById("cor").innerHTML = "#"+cor;
}