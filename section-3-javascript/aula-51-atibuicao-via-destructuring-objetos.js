const pessoa = {
    nome: "Luiz",
    sobrenome: "Miranda",
    nome: "Luiz",
    idade: 30,
    endereco: {
        // rua: "Rua Junho Antunes",
        numero: "320",
    },
};
//Atribuição via desestruturação
const {
    nome: teste = "",
    endereco: { rua: r = "Rua não preenchida", numero },
    ...resto
} = pessoa;

console.log("🚀 ~ numero", numero);

console.log("🚀 ~ rua", r);

console.log("🚀 ~ teste", teste);

console.log("🚀 ~ pessoa", resto);
