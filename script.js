window.onload = function () {
    document.getElementById('calcular').addEventListener('click', function () { // Aqui chamamos a função calcular_imc
        calcular_imc();
    });
    document.getElementById('apagar').addEventListener('click', function () { // Aqui chamamos a função limpar
        limpar();
    });
}

function calcular_imc() { // A função calcular_imc fará o cálculo do IMC, pegando os valores e verificando se eles se enquadram nos critérios para depois validar.
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    if (isNaN(peso) || isNaN(altura)) { // Verifica se os valores são numéricos válidos
        alert('Por favor, insira valores numéricos válidos para peso e altura.');
        document.getElementById('resultado').value = '';
        return;
    }

    if (altura > 2.5) { // Verifica se a altura é maior que 2.5 metros
        alert('Altura inválida. Deve ser menor ou igual a 2.5 metros.');
        document.getElementById('resultado').value = '';
        return;
    }

    var imc = peso / (altura ** 2);
    var classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    document.getElementById('resultado').value = imc.toFixed(2) + ' - ' + classificacao; // Exibe o resultado com duas casas decimais e a classificação
}

function limpar() { // Essa função faz a limpeza dos inputs para que sejam preenchidos novamente após o clique no item 'peso'
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').value = '';
}
