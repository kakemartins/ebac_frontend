const alunos = [
    {nome: 'Jackson', nota: 9},
    {nome: 'Thaina', nota: 6},
    {nome: 'Davi', nota: 5},
    {nome: 'Isaac', nota: 4},
    {nome: 'Greice', nota: 5},
    {nome: 'Luis', nota: 8},
    {nome: 'Gabriel', nota: 7},
    {nome: 'Miguel', nota: 6},
    {nome: 'Priscila', nota: 4},
]

const AlunosAprovados = alunos => alunos.filter(alunos => alunos.nota >= 6)
console.log(AlunosAprovados(alunos))