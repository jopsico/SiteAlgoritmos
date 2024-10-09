document.getElementById("javaBtn").addEventListener("click", function () {
  window.open("https://replit.com/@joopaulopenha/Entregavel1Java", "_blank"); 
});

document.getElementById("javascriptBtn").addEventListener("click", function () {
  document.getElementById("algorithms").classList.remove("hidden");
});

document.querySelectorAll(".algorithmBtn").forEach((button) => {
  button.addEventListener("click", function () {
    const algorithm = this.dataset.algorithm;
    let result;

    switch (algorithm) {
      case "primo":
        const numPrimo = parseInt(
          prompt("Digite um número para verificar se é primo:")
        );
        result = verificarPrimo(numPrimo);
        break;
      case "somatorio":
        const qtdSomatorio = parseInt(
          prompt("Quantos números você deseja somar?")
        );
        let soma = 0;
        for (let i = 0; i < qtdSomatorio; i++) {
          const num = parseFloat(prompt(`Digite o número ${i + 1}:`));
          soma += num;
        }
        result = `A soma é: ${soma}`;
        break;
      case "fibonacci":
        const numFibonacci = parseInt(
          prompt("Digite quantos termos da sequência de Fibonacci deseja:")
        );
        result = fibonacci(numFibonacci);
        break;
      case "mdc":
        const numA = parseInt(prompt("Digite o primeiro número:"));
        const numB = parseInt(prompt("Digite o segundo número:"));
        result = mdc(numA, numB);
        break;
      case "ordenacao":
        const lista = prompt(
          "Digite os números para ordenar (separados por vírgula):"
        );
        const arrOrdenacao = lista.split(",").map(Number);
        result = ordenar(arrOrdenacao);
        break;
      case "contagem":
        const listaContagem = prompt(
          "Digite as notas para contagem (separados por vírgula) - Notas iguais ou acima de 50 terão aprovação:"
        );
        const arrContagem = listaContagem.split(",").map(Number);
        result = contar(arrContagem);
        break;
    }

    document.getElementById("output").textContent = result;
    document.getElementById("output").classList.remove("hidden");
  });
});


function verificarPrimo(num) {
  if (num < 2) return `${num} não é primo.`;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return `${num} não é primo.`;
  }
  return `${num} é primo.`;
}

function somatorio(n) {
  return (n * (n + 1)) / 2;
}

function fibonacci(n) {
  let a = 0,
    b = 1,
    temp;
  let fiboSeries = [];
  for (let i = 0; i < n; i++) {
    fiboSeries.push(a);
    temp = a + b;
    a = b;
    b = temp;
  }
  return `Série de Fibonacci: ${fiboSeries.join(", ")}`;
}

function mdc(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return `MDC: ${a}`;
}

function ordenar(arr) {
  return `Lista ordenada: ${arr.sort((a, b) => a - b).join(", ")}`;
}

function contar(arr) {
    let contador = 0;

    arr.forEach((nota,k)=>{
        if (nota >= 50) {
            contador = contador + 1;
        }
    })

    
return `Alunos que passaram: ${contador}`;
}
