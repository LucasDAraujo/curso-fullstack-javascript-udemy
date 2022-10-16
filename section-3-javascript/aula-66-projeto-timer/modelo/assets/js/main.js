const tempoSpan = document.getElementById("tempoSpan");
let paused = false;

//Pega uma data nova e seta para 00:00:00
const data = new Date();
data.setHours(0);
data.setMinutes(0);
data.setSeconds(0);

// Botões responsáveis pelo timer
[botaoIniciar, botaoPausar, botaoZerar] = document.querySelectorAll("button");

// Recebe o tempo e adiciona um 0 na frente dele para formatar melhor
const zeroAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`;
};

//Quando clicado, a cada 1 segundo adiciona o mesmo na data e escreve no innerText do <span></span> na index.html
botaoIniciar.addEventListener("click", (event) => {
    event.preventDefault();
    setInterval(() => {
        if (!paused) {
            //Checa se o botão de pause foi apertado ou não
            data.setSeconds(data.getSeconds() + 1);
            tempoSpan.innerText = `${zeroAEsquerda(
                data.getHours()
            )}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(
                data.getSeconds()
            )}`;
        }
    }, 1000);
});

//Faz um liga e desliga do paused
botaoPausar.addEventListener("click", (event) => {
    event.preventDefault();
    paused = !paused;
});

botaoZerar.addEventListener("click", () => {
    tempoSpan.innerText = "00:00:00";
    data.setHours(0);
    data.setMinutes(0);
    data.setSeconds(0);
});
