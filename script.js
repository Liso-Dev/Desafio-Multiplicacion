document.getElementById('calcularBtn').addEventListener('click', () => {
    const numeroInput = document.getElementById('numeroInput').value;
    const numero = parseInt(numeroInput);
    const resultadoP = document.getElementById('resultado');

    if (isNaN(numero) || numero < 1 || numero > 20) {
        resultadoP.textContent = 'Número fuera del rango';
        console.log('Número fuera del rango');
    } else {
        let factorial = 1;
        console.clear();

        for (let i = 1; i <= numero; i++) {
            factorial *= i;
            console.log(`${i} x ${numero} = ${i * numero}`);
        }

        resultadoP.textContent = `El factorial de ${numero} es ${factorial}`;
        console.log(`Factorial de ${numero} es: ${factorial}`);

        for (let i = 1; i <= numero; i++) {
            let fact = 1;
            for (let j = 1; j <= i; j++) {
                fact *= j;
            }
            console.log(`Factorial de ${i} es: ${fact}`);
        }
    }
});
