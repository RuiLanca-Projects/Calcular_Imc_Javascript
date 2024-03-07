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

    const resultado = document.querySelector('#resultado');

    

    resultado.style.display="block";
    

    if (isNaN(peso) || peso < 0 || peso > 200){
        resultado.innerHTML='Peso inválido';
        resultado.classList.add('bg-color-red');
    }
    if (isNaN(altura) || altura < 0 || altura > 2.5){
        resultado.innerHTML='Altura inválida';
        resultado.classList.add('bg-color-red');
    }

       

});


function setResultado(peso, altura){
    const resultado = document.querySelector('#resultado');
    const imc = peso / (altura*altura);    
    resultado.innerHTML= 'O seu Imc é de '+imc.toFixed(2);

    resultado.classList.remove('bg-color-red', 'bg-color-brown', 'bg-color-yellow', 'bg-color-green', 'bg-color-blue');

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
    x.classList.remove('bg-color');
    x.innerHTML='';
    x.style.display="none";
    x.classList = "";
}


