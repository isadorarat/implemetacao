import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissionado";
import { Horista } from "./model/Horista";

const a1 = new Assalariado('gael', '111113333', 556);

a1.setNome(`Sandra`);
a1.setCpf(`707070`);
a1.setSalario(2500);
console.log(`Nome: ${a1.getNome()}, Cpf: ${a1.getCpf()}`);
console.log(`Salario: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);


const c1 = new Comissionado('Slipknot', '111113333', 4000, 1.10);

c1.setNome(`extratovarios`);
c1.setCpf(`7070704444`);
c1.setTotalVendas(2500);
c1.setTaxaComissao(0.09);
console.log(`Nome: ${c1.getNome()}, Cpf: ${a1.getCpf()}`);
console.log(`Salario: ${c1.getTaxaComissao()} Total Vendas: ${c1.getTotalVendas}`);
console.log(`Vencimento: ${c1.vencimento()}`);


const h1 = new Horista('doctor', '666666', 6000, 0.1);

h1.setNome(`sandman`);
h1.setCpf(`7070704444`);
h1.setValorHora(2500);
h1.setHorasTrabalhadas(11.0);
console.log(`Nome: ${h1.getNome()}, Cpf: ${h1.getCpf()}`);
console.log(`Valor Hora ${h1.getValorHora()} Horas trabalhadas: ${h1.getHorasTrabalhadas()}`);
console.log(`Vencimento: ${h1.vencimento()}`);