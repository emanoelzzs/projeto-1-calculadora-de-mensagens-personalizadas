let nome = "Dexter Morgan"
let idade = 54 
let anoAtual = 2025
let moradia = "Miami"
let profissao = "analista forense"
let salario = 5000
let bonus = 1500 
let totalMes = salario + bonus 
let totalAno = totalMes * 12 
let dobroAno = totalAno * 2 
const anoNascimento = anoAtual - idade

alert (`
========= RELATÓRIO DO USUÁRIO =========   
 Nome: ${nome}
 Idade: ${idade}
 Ano de nascimento: ${anoNascimento}
 Cidade: ${moradia}
 Profissão: ${profissao}
 Salário base: U$${salario}     
 Bônus: U$${bonus}
 Total mensal: U$${totalMes}
 Total anual: U$${totalAno}
 Total anual (salário dobrado): U$${dobroAno}
========================================= 
    `)


