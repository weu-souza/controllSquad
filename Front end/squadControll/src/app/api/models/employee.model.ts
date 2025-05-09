export interface Employee {
    id: string;
    dadosPessoais: DadosPessoais;
    empresa: Empresa;
    cliente: Cliente;
    ausencias: AusenciaFerias;
}

export class Employee {
    constructor(
        public dadosPessoais: DadosPessoais,
        public empresa: Empresa,
        public cliente: Cliente,
        public ausencias: AusenciaFerias
    ) {}
}

export interface Falta {
    dataInicio: Date;
    dataTermino: Date;
    justificativa: string;
}

export interface AusenciaFerias {
    ausencia: Falta[];
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
