/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(function () {
    cy.visit("./src/index.html");
    cy.wait(1000);
  });

  it("Valida o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("Preenche campos obrigatórios e envia o formulário com sucesso", function () {
    const longText =
      "Agradeço pelo ótimo atendimento! A equipe foi muito prestativa e demonstrou grande conhecimento ao me ajudar com minha dúvida. O atendimento foi rápido, eficiente e muito atencioso, o que tornou a experiência excelente. Fico grato pela atenção e profissionalismo. Continuem com o excelente trabalho!";
    cy.get("#firstName").type("Matheus");
    cy.get("#lastName").type("Silva");
    cy.get("#email").type("mths.test-qa@gmail.com");
    cy.get("#phone").type("061 99999999");
    cy.get("#open-text-area").type(longText, { delay: 0 });
    cy.get('button[type="submit"]').click();

    cy.get(".success").should("be.visible");
  });

  it("Exibe mensagem de erro ao enviar email com formatação inválida", function () {
    cy.get("#firstName").type("Matheus");
    cy.get("#lastName").type("Silva");
    cy.get("#email").type("mths.test-qa@gmail,com");
    cy.get("#phone").type("061 99999999");
    cy.get("#open-text-area").type("Texto", { delay: 0 });
    cy.get('button[type="submit"]').click();

    cy.get(".error").should("be.visible");
  });

  it("Campo telefone permanece vazio ao tentar preencher com texto", function () {
    cy.get("#phone").type("abcdef").should("have.value", "");
  });

  it("Exibe mensagem de erro ao enviar formulário sem preencher telefone obrigatório", function () {
    cy.get("#firstName").type("Matheus");
    cy.get("#lastName").type("Silva");
    cy.get("#email").type("mths.test-qa@gmail.com");
    cy.get("#phone-checkbox").check();
    cy.get("#open-text-area").type("Texto", { delay: 0 });
    cy.get('button[type="submit"]').click();

    cy.get(".error").should("be.visible");
  });

  it("Preenche e limpa os campos de texto do formulário", function () {
    cy.get("#firstName")
      .type("Matheus")
      .should("have.value", "Matheus")
      .clear()
      .should("have.value", "");

    cy.get("#lastName")
      .type("Silva")
      .should("have.value", "Silva")
      .clear()
      .should("have.value", "");

    cy.get("#email")
      .type("mths.test-qa@gmail.com")
      .should("have.value", "mths.test-qa@gmail.com")
      .clear()
      .should("have.value", "");

    cy.get("#phone")
      .type("06199999999")
      .should("have.value", "06199999999")
      .clear()
      .should("have.value", "");

    cy.get("#open-text-area")
      .type("Teste")
      .should("have.value", "Teste")
      .clear()
      .should("have.value", "");
  });
  it("Exibe mensagem de Erro ao submeter o formulário sem preencher os campos obrigatórios", function () {
    cy.get('button[type="submit"]').click();
    cy.get(".error").should("be.visible");
  });

  it("Envia formulário com sucesso usando comando customizado", function () {
    cy.fillMandatoryFieldsAndSubmit();
    cy.get(".success").should("be.visible");
  });
  it('Seleciona "Cursos" no menu de produtos', function () {
    cy.get("#product")
      .select("Cursos")
      .select("Cursos")
      .should("have.value", "cursos");
  });

  it('Marca o tipo de atendimento como "Feedback', function () {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should("have.value", "feedback");
  });

  it("Marca e valida todos os tipos de atendimento", function () {
    cy.get('input[type="radio"]')
      .should("have.length", 3)
      .each(function ($radio) {
        cy.wrap($radio).check();
        cy.wrap($radio).should("be.checked");
      });
  });

  it("Marca os dois checkboxes e desmarca o último", function () {
    cy.get('input[type="checkbox"]')
      .check()
      .should("be.checked")
      .last()
      .uncheck()
      .should("not.be.checked");
  });

  it("Seleciona um arquivo da pasta fixtures", function () {
    cy.get("#file-upload")
      .should("not.have.value")
      .selectFile("./cypress/fixtures/example.json")
      .should(function ($input) {
        console.log($input);
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });

  it("Seleciona arquivo simulando um drag-and-drop", function () {
    cy.get("#file-upload")
      .should("not.have.value")
      .selectFile("./cypress/fixtures/example.json", { action: "drag-drop" })
      .should(function ($input) {
        console.log($input);
        expect($input[0].files[0].name).to.equal("example.json");
      });

    it("Carrega arquivo usando um alias da fixture", function () {
      cy.fixture("example.json").as("sampleFile");
      cy.get('input[type="file"]')
        .selectFile("@sampleFile")
        .should(function ($input) {
          console.log($input);
          expect($input[0].files[0].name).to.equal("example.json");
        });
    });
  });

  it("Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", function () {
    cy.get("#privacy a").should("have.attr", "target", "_blank");
  });

  it.only("Acessa a página da política de privacidade removendo o target e então clicando no link", function () {
    cy.get("#privacy a").invoke("removeAttr", "target").click();

    cy.contains("Talking About Testing").should("be.visible");
  });
});
