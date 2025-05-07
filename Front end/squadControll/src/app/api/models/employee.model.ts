export interface Employee
{
    dadosPessoais: DadosPessoais,
    tecnologias: any[],
    empresa: Empresa,
    cliente: Cliente,
    ausencias: AusenciaFerias
}

export class Employee
{
    constructor({}: Employee)
    {
        this.tecnologias = []
    }
}

export interface Falta
{
    dataInicio: Date;
    dataTermino: Date;
    justificativa: string;
}

export interface AusenciaFerias
{
    ausencia: Falta[]
}

interface Cliente
{
    racf?: string;
    funcional?: string;
    squad?: string;
    email?: string;
}

interface Empresa
{
    celular?: string;
    dataAdmissao?: Date;
    tarifa?: number;
    gestor?: string;
    unidadeNegocio?: string;
    numeroSap?: number;
    email?: string;
    emailCurto?: string;
}

interface DadosPessoais
{
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