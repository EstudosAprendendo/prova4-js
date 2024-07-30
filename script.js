function calcularFatorial(numero) {
    if (numero < 0) return 'Número deve ser positivo';
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// Função para calcular a sequência de Fibonacci até um número
function calcularFibonacci(ateNumero) {
    if (ateNumero < 0) return 'Número deve ser positivo';
    let fibonacci = [];
    let a = 0, b = 1, temp;

    while (a <= ateNumero) {
        fibonacci.push(a);
        temp = a;
        a = b;
        b = temp + b;
    }

    return fibonacci;
}

// Função principal que executa o prompt e calcula os resultados
function executarCalculos() {
    // Solicita ao usuário um número inteiro positivo
    let numero = parseInt(prompt('Digite um número inteiro positivo:'));

    // Verifica se a entrada é válida
    if (isNaN(numero) || numero < 0) {
        document.write('<p>Por favor, insira um número inteiro positivo.</p>');
        return;
    }

    // Calcula e exibe o fatorial e a sequência de Fibonacci
    document.write('<p>Fatorial de ' + numero + ': ' + calcularFatorial(numero) + '</p>');
    document.write('<p>Sequência de Fibonacci até ' + numero + ': ' + calcularFibonacci(numero).join(', ') + '</p>');
}

// Executa a função principal quando a página é carregada
window.onload = executarCalculos;