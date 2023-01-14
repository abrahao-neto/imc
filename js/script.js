  //alert('Olá Mundo - Site de calculo do IMC')

//   var peso = document.getElementById('peso');

//     peso.addEventListener('keyup',function(e){
            
//         //console.log(e.key);
//         if(e.key == 'Enter'){
//             calcularImc();
//         }

//     })

  function calcularImc() {
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    if (altura != '' && peso != '') {
        var imc = peso / (altura * altura);
        console.log(imc);

        
        var resultado = document.getElementById('resultado');
        var valorImc = document.getElementById('valorImc');
        var ajuda = document.getElementById('ajuda');

        resultado.style.visibility = 'visible'; // Exibi a div
        valorImc.innerHTML = imc.toFixed(1); // Inserindo um conteúdo no html

        if (imc < 18.5 || imc >= 30) {
            resultado.style.backgroundColor = 'red';
            ajuda.style.visibility = 'visible';
        }
        else if (imc >= 18.5 && imc <= 24.99) {
            resultado.style.backgroundColor = 'green';
            ajuda.style.visibility = 'hidden';
        }
        else if (imc >= 25.0 && imc <= 29.99) {
            resultado.style.backgroundColor = 'orange';
        }


    } else {
        alert('Preencha os campos');
    }

}
