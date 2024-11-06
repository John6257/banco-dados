-- Cria a tabela usuario
create table usuario (
    -- Campo        -- Tipo               -- restrições             
    id_usuario          int                  not null         auto_increment,
    nome               varchar(30)           not null,
    email              varchar(100)          not null         unique,
    senha              varchar(100)          not null,
    fone1              varchar(20)           not null,
    fone2              varchar(20)           null,
    foto               varchar(255)          null,
    primary key (id_usuario)
    );



-- Cria a tabela usuario
create table produto (
    -- Campo        -- Tipo               -- restrições             
    id_produto          int                  not null         auto_increment,
    produto             varchar(30)          not null,
    descricao           text                 not null         unique,
    valor               decimal(10,2)        not null,
    estoque             int(6)               not null,
    foto               varchar(255)          null,
    primary key (id_produto)
    );



-- Cria a tabela usuario
create table venda (
    -- Campo            -- Tipo               -- restrições             
    id_venda            int                not null         auto_increment,
    total               decimal(10,2)      not null,
    quantidade          int(6)             not null,
    forma_pagto         varchar(50)        not null         unique,
    data_venda          date               not null,
    endereco_entrega    varchar(255)       not null,
    
    id_usuario            int              not null,
    primary key (id_venda)
    );


-- Cria a tabela pedido (TABELA JOIN)
-- Junção das tabelas Venda e Produto (prod_venda)
CREATE TABLE pedido (
    -- campo        -- tipo         -- restrições 
    id_pedido       int             NOT NULL    AUTO_INCREMENT,
    
    -- CHAVE ESTRANGEIRA (FK)
    id_venda      int               NOT NULL,
    id_produto    int               NOT NULL,
    PRIMARY KEY (id_pedido)
);

