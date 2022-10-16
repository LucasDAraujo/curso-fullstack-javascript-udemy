let botaoCalcular = document.getElementById("botaoCalcular");
botaoCalcular.addEventListener("click", (event) => {
    event.preventDefault();

    const imcApresenta = document.getElementById("imcApresenta");
    const altura = document.getElementById("altura");
    const peso = document.getElementById("peso");

    //Loop para pegar a escolha de sexo nos botões Radio
    const botoesRadio = document.querySelectorAll('input[name="sexo"]');
    let sexo;
    botoesRadio.forEach((opcao) => {
        if (opcao.checked) {
            sexo = opcao.value;
        }
    });

    let imcUsuario = peso.value / altura.value ** 2;
    let mensagem;

    if (sexo === "masculino") {
        if (imcUsuario < 20.7) {
            mensagem = "Abaixo do peso";
        } else if (imcUsuario >= 20.7 && imcUsuario <= 26.4) {
            mensagem = "Peso ideal";
        } else if (imcUsuario >= 26.5 && imcUsuario <= 27.8) {
            mensagem = "Pouco acima do peso";
        } else if (imcUsuario >= 27.9 && imcUsuario <= 31.1) {
            mensagem = "Acima do peso";
        } else if (imcUsuario >= 31.2) {
            mensagem = "Obesidade";
        }
    } else {
        if (imcUsuario < 19.1) {
            mensagem = "Abaixo do peso";
        } else if (imcUsuario >= 19.1 && imcUsuario <= 25.8) {
            mensagem = "Peso ideal";
        } else if (imcUsuario >= 25.9 && imcUsuario <= 27.3) {
            mensagem = "Pouco acima do peso";
        } else if (imcUsuario >= 27.4 && imcUsuario <= 32.3) {
            mensagem = "Acima do peso";
        } else if (imcUsuario >= 32.4) {
            mensagem = "Obesidade";
        }
    }
    if (imcUsuario && sexo) {
        imcApresenta.innerText = `Seu IMC é: ${imcUsuario.toFixed(
            2
        )},  ${mensagem}.`;
    }
});
