# **Projeto de Automação Cypress CAC-TAT (Talking About Testing)**  

Este repositório contém a suíte de testes automatizados desenvolvida para validar a aplicação CAC TAT (Central de Atendimento ao Cliente Treinamento), que simula o envio de mensagens a uma central de atendimento.  

---

## 🎯 **Objetivo**  
O objetivo do projeto é automatizar o processo de validação do formulário de atendimento, garantindo que todos os campos e fluxos de interação funcionem conforme o esperado, proporcionando uma experiência de usuário confiável e livre de falhas.  

---

## 🏗️ **Arquitetura**  
Os testes foram desenvolvidos utilizando **Cypress**, uma das ferramentas mais populares para automação de testes E2E. A estrutura do projeto foi projetada para facilitar a organização e manutenção do código, utilizando boas práticas de automação de testes.  


    cypress-teste-e2e-antigo  
    ├── cypress/  
    │   ├── fixtures/       # Dados estáticos usados nos testes  
    │   ├── integration/    # Especificações dos testes E2E  
    │   ├── plugins/        # Configurações de plugins  
    │   └── support/        # Comandos customizados e configurações globais  
    ├── node_modules/       # Dependências instaladas pelo npm  
    ├── cypress.config.js   # Configuração principal do Cypress  
    └── package.json        # Gerenciamento de dependências do projeto  

---

## 💻 **Tecnologias Utilizadas**  
- **Cypress**  
- **JavaScript**  
- **Node.js**  

---

## ✅ **Testes Implementados**  
Os cenários automatizados incluem:  
- **Validação de Campos Obrigatórios**  
  - Nome  
  - Sobrenome  
  - E-mail (com validação de formato)  
  - Campo "Como podemos te ajudar?"  
- **Interações com Campos Opcionais**  
  - Inclusão do telefone como contato preferencial.  
  - Seleção de produtos (Blog, Cursos, Mentoria, YouTube).  
  - Escolha do tipo de atendimento (Ajuda, Elogio, Feedback).  
  - Upload de arquivos como anexos.  
- **Validação de Mensagens de Erro**  
  - Testes de mensagens de erro ao omitir campos obrigatórios.  
- **Fluxos Personalizados de Envio**  
  - Cenários simulando envio de formulários com diferentes combinações de dados.  

---

## 📋 **Pré-requisitos**  
Certifique-se de ter as seguintes dependências instaladas antes de executar os testes:  
- **Node.js** (versão LTS recomendada)  
- **Cypress** (instalado via `npm`)  

---

## ⚙️ **Configurações**  

1. Clone este repositório:  
   ```bash
   git clone 
   npm install  
   npx cypress open  
   npx cypress run
 

🌟 Contribua com o Projeto
Se você achou este projeto útil, deixe uma ⭐ e sinta-se à vontade para contribuir enviando pull requests.

Desenvolvido por Matheus Silva  
Com aprendizado contínuo em automação de testes no curso da Escola TAT (Talking About Testing)
