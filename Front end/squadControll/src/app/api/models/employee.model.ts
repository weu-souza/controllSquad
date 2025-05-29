export interface Employee {
    id: string;
    dadosPessoais: DadosPessoais;
    empresa: Empresa;
    cliente: Cliente;
}

export interface ICalendarEvent {
    title: string;
    start: string;
    end: string;
}

export interface IcalendarForm {
    cpf: string;
    start: Date;
    end: Date;
}

export class Employee {
    constructor(
        public dadosPessoais: DadosPessoais,
        public empresa: Empresa,
        public cliente: Cliente
    ) {}
}

interface Cliente {
    racf?: string;
    funcional?: string;
    squad?: string;
    email?: string;
}

interface Empresa {
    celular?: string;
    dataAdmissao?: Date;
    tarifa?: number;
    nomeGestor?: string;
    unidadeNegocio?: string;
    numeroSap?: string;
    email?: string;
    emailCurto?: string;
}

interface DadosPessoais {
    nome?: string;
    dataAniversario?: Date;
    telefone?: string;
    celular?: string;
    estado?: string;
    cidade?: string;
    cpf?: string;
    rg?: string;
    orgaoEmissor?: string;
    cep?: string;
    logradouro?: string;
    complemento?: string;
    numero?: number;
}
