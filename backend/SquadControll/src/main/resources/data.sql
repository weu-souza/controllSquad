INSERT INTO tb_User (ID, NAME, EMAIL, PASSWORD)
VALUES (10, 'weuller souza', 'weu12@email.com', '123456');

INSERT INTO SQUAD  (
    id,
    celular,
    email,
    inicio_contrato,
    nome_gestor,
    squad,
    termino_contrato,
    ext
) VALUES (
             10,
             '11999998888',
             'usuario@email.com',
             '2025-05-09',
             'João Gestor',
             'Squad Alpha',
             '2025-12-31',
             'EXT123'
         );

INSERT INTO TB_USER_DATA (
    id,
    nome,
    aniversario,
    telefone,
    celular,
    estado,
    cidade,
    cpf,
    rg,
    orgao_emissor,
    cep,
    logradouro,
    complemento,
    numero
) VALUES (
                10,
             'João da Silva',
             '1990-05-28',
             '1123456789',
             '11987654321',
             'SP',
             'São Paulo',
             '00000000000',
             '123456789',
             'SSP-SP',
             '01000-000',
             'Rua Exemplo',
             'Apto 101',
             '123'
         );

INSERT INTO CLIENT (
    id,
    funcional,
    racf,
    squad,
    email
) VALUES (
          10,
             'F123456',
             'racfuser',
             'Squad Alpha',
             'usuario@example.com'
         );


INSERT INTO EMPRESA (
    id,
    celular,
    data_admissao,
    email,
    email_curto,
    nome_gestor,
    numero_sap,
    tarifa,
    unidade_de_negocio
) VALUES (
          10,
             '11999998888',
             '2022-03-01',
             'joao.silva@empresa.com.br',
             'joao.silva',
             'Maria Oliveira',
             'SAP12345',
             150.75,
             'Unidade São Paulo'
         );


INSERT INTO EMPLOYERS (
    id,
    dados_pessoais_id,
    empresa_id,
    cliente_id
) VALUES (
             10,
             10, -- Supondo que o UserData com ID 10 já exista
             10,  -- Substitua pelo ID válido de uma empresa existente
             10   -- Substitua pelo ID válido de um cliente existente
         );