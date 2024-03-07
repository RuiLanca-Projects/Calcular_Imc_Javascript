const form = document.querySelector("#formulario");

form.addEventListener('submit', function(event){
    event.preventDefault();    
    const inputPeso = event.target.querySelector('#peso').value;
    const inputAltura = event.target.querySelector('#altura').value;

    const peso = Number(inputPeso);
    const altura = Number(inputAltura);
    setResultado(peso, altura);
    event.target.querySelector('#peso').value='';
    event.target.querySelector('#altura').value='';
    

});


function setResultado(peso, altura){
    const resultado = document.querySelector('#resultado');
    const imc = peso / (altura*altura);    
    resultado.innerHTML= 'O seu Imc é de '+imc.toFixed(2);
    if(imc > 35){
        resultado.classList.add('bg-color-red');
        resultado.innerHTML += "<br>-Obesidade Extrema-";
    }
    else if(imc < 35 && imc > 30){
        resultado.classList.add('bg-color-brown');
        resultado.innerHTML += "<br>-Obesidade-";
    }
    else if(imc > 25 && imc < 29.9){
        resultado.classList.add('bg-color-yellow');
        resultado.innerHTML += "<br>-Excesso de peso-";
    }
    else if(imc > 18.5 && imc <24.9){
        resultado.classList.add('bg-color-green');
        resultado.innerHTML += "<br>-Peso normal-";
    }
    else if(imc < 18.5){
        resultado.classList.add('bg-color-blue');
        resultado.innerHTML += "<br>-Baixo peso-";
    }
    else{
        console.log('erro!!!')
    }

}

function limpar(){
    const x = document.getElementById('resultado');    
    x.innerHTML='';
    x.classList.remove('bg-color');
    

    
}

