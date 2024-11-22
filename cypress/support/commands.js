Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Matheus');
    cy.get('#lastName').type('Silva');
    cy.get('#email').type('mths.test-qa@gmail.com');
    cy.get('#open-text-area').type('Teste');
    cy.get('button[type="submit"]').click();
});
