// const numeros = [100, 200, 300, 400, 500];
// const [primeiroNumero, segundoNumero,...resto] = numeros;
// const [primeiroNumero, , segundoNumero, ...resto] = numeros;//Pode colocar valores vazios para pular.

const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

[lista1, lista2, lista3] = numeros;

console.log("🚀 ~ lista3", lista3[2]);
