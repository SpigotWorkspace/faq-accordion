describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit("http://localhost:5173/")
  });

  [2,3,4,5].forEach((question) => {
    it(`should open question ${question - 1}`, () => {
      cy.get(`:nth-child(${question}) > #answer-box > .answer`).should('not.be.visible');
      cy.get(`:nth-child(${question}) > #question-box > img`).click();
      cy.get(`:nth-child(${question}) > #answer-box > .answer`).should('be.visible');

    });
  })
})