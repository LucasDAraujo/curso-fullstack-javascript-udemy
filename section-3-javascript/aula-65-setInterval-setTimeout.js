const mostraHora = () => {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
    });
};

const timer = setInterval(() => {
    console.log("🚀 ~ mostraHora()", mostraHora());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 3000);

setTimeout(() => {
    console.log("Parou!");
}, 5000);
