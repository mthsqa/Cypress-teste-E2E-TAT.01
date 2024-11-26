# **Projeto de Automação Cypress TAT**  

Este repositório contém a suíte de testes automatizados desenvolvida para validar a aplicação CAC TAT (Central de Atendimento ao Cliente Treinamento), que simula o envio de mensagens a uma central de atendimento.  

---

## 🎯 **Objetivo**  
O objetivo do projeto é automatizar o processo de validação do formulário de atendimento, garantindo que todos os campos e fluxos de interação funcionem conforme o esperado, proporcionando uma experiência de usuário confiável e livre de falhas.  

---

## 🏗️ **Arquitetura**  
Os testes foram desenvolvidos utilizando **Cypress**, uma das ferramentas mais populares para automação de testes E2E. A estrutura do projeto foi projetada para facilitar a organização e manutenção do código, utilizando boas práticas de automação de testes.  

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

Instale as dependências do projeto:
bash
Copiar código
npm install  
Configure o arquivo cypress.config.js para ajustar a URL base do ambiente de teste, caso necessário.
🚀 Executando os Testes
Para executar todos os testes em modo interativo:
bash
Copiar código
npx cypress open  
Para executar os testes em modo headless (linha de comando):
bash
Copiar código
npx cypress run  
📂 Organização do Código
Testes: Os cenários foram escritos utilizando o Cypress e organizados em diretórios conforme sua funcionalidade.
Fixtures: Dados de entrada para os testes foram armazenados em arquivos .json para facilitar a parametrização.
Relatórios: Resultados dos testes podem ser gerados com suporte a ferramentas como Mochawesome.
🌟 Contribua com o Projeto
Se você achou este projeto útil, deixe uma ⭐ e sinta-se à vontade para contribuir enviando pull requests.

Desenvolvido por Matheus Silva
Com aprendizado contínuo em automação de testes.
