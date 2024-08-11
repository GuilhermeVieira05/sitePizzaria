# Pizzaria Forno D'Oro

Este é o repositório do site de uma pizzaria, desenvolvido utilizando HTML, CSS, JavaScript e PostgreSQL. O projeto está em fase de desenvolvimento e tem como objetivo fornecer uma plataforma online para que clientes possam visualizar o cardápio, fazer pedidos e obter informações sobre a pizzaria.

## Visão Geral

O site da Pizzaria visa melhorar a experiência do cliente ao oferecer uma interface intuitiva para navegação e pedidos online. O backend será gerido com PostgreSQL para garantir que as operações de banco de dados sejam rápidas e seguras.

## Funcionalidades Planejadas

- **Página Inicial:** Introdução à pizzaria, com informações sobre o negócio, promoções e novidades.
- **Cardápio:** Exibição dos itens disponíveis no cardápio, incluindo descrições, preços e imagens.
- **Pedidos Online:** Funcionalidade para os clientes montarem e realizarem seus pedidos diretamente pelo site.
- **Conta:** Página de gerenciamento da conta do usuário, incluindo histórico de pedidos e informações pessoais.
- **Carrinho:** Interface para os clientes revisarem e finalizarem seus pedidos antes de completar a compra.
- **Contato:** Formulário de contato e informações de localização, telefone e e-mail da pizzaria.

## Tecnologias Utilizadas

- **HTML5:** Estrutura das páginas.
- **CSS3:** Estilização e layout das páginas.
- **JavaScript:** Interatividade e funcionalidades dinâmicas.
- **Node.js:** Ambiente de execução para o JavaScript no backend.
- **PostgreSQL:** Banco de dados relacional para armazenar informações sobre o cardápio, pedidos e usuários.

## Estrutura do Projeto

```plaintext
pizzaria-website/
├── assets/            # Arquivos estáticos
│   ├── imgs/          # Imagens usadas no site
│   ├── js/            # Scripts JavaScript
│   └── styles/        # Arquivos CSS
├── node_modules/      # Módulos Node.js instalados
├── utils/             # Utilitários do projeto
├── views/             # Páginas HTML ou templates do projeto
│   ├── carrinho.html  # Página do carrinho de compras
│   ├── conta.html     # Página da conta do usuário
│   ├── index.html     # Página inicial
│   └── order.html     # Página de pedidos
├── .env               # Arquivo de variáveis de ambiente
├── package-lock.json  # Arquivo de bloqueio de dependências do Node.js
├── package.json       # Arquivo de configuração do Node.js com dependências e scripts
└── README.md          # Documentação do projeto (adicionar ou atualizar)


