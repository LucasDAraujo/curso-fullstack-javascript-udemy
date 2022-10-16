// const cincoHoras = 60 * 60 * 5 * 1000;
// const umDia = 60*60*24*1000;
// const data = new Date(cincoHoras + umDia); //01/01/1970 Timestamp Unix ou época Unix
// const data = new Date(2019, 3, 20, 14, 27, 500); //a, m d, h, M, s, ms
// const data = new Date('2019-04-20 20:20:59');
const data = new Date(1614342304137);
console.log(
    "🚀 ~ file: aula-46-objetoDate.js ~ line 4 ~ data",
    data.toString()
);
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth() + 1);
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Minuto", data.getMinutes());
console.log("Segundo", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log("Dia semana", data.getDay() + 1);
console.log(Date.now());

const zeroAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`;
};


const formataData = (data) => {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}-${mes}-${ano} ${hora}:${min}:${sec}`;
};
const dataBrasil = formataData(data);
console.log(dataBrasil);
