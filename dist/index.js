"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assalariado_1 = require("./model/Assalariado");
const a1 = new Assalariado_1.Assalariado('gael', '111113333', 556);
a1.setNome(`Sandra`);
a1.setCpf(`707070`);
a1.setSalario(2500);
console.log(`Nome: ${a1.getNome()}, Cpf: ${a1.getCpf()}`);
console.log(`Salario: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);
//# sourceMappingURL=index.js.map