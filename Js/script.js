
const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value.replace(",",".");
  const peso = document.getElementById('peso').value.replace(",",".");
  const resultado = document.getElementById('resultado');

  if(nome !== '' && altura !== '' && peso !== ''){
    
    const valorImc = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';

    if (valorImc < 18.5){
      classificacao = 'abaixo do peso.'
    }else if(valorImc < 25){
      classificacao = 'com peso ideal. Parabéns!!!'
    }else if(valorImc < 30){
      classificacao = 'levemente acima do peso.'
    }else if(valorImc < 35){
      classificacao = 'com obesidade grau 1.'
    }else if(valorImc < 40){
      classificacao = 'com obesidade grau 2.'
    }else{
      classificacao = 'com obesidade grau 3. Tome Cuidado!!!'
    }

    resultado.textContent = `${nome}, seu IMC é ${valorImc}, e você está ${classificacao}`;

  }else{
    alert('Preencha todos os campos!!!')
  }
}

calcular.addEventListener('click', imc)
