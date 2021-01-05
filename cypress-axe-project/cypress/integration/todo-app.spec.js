/// <reference types="cypress"/>

describe('Todo application', () => {
    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/react');
        cy.injectAxe();
    });

    it('should log any accessibility failures', () => {
        // cy.visit('http://todomvc.com/examples/react');

        // Injects the axe-core runtime
        // cy.injectAxe();

        // Scans a page for any accessibility failures
        cy.checkA11y();
    });

    it('should exclude specific elements on the page', () => {
        cy.checkA11y({ exclude: ['.learn'] });
    });
    
    it('should only test specific element on the page', () => {
        cy.checkA11y('.learn');
    });
    
    it("Should only include rules with serious and critical inpacts", () => {
        cy.checkA11y(null, {
            includedInpacts: ['critical', 'serious']
        });
    });

    it("should exclude specific accessibility rules", () => {
        cy.checkA11y(null, {
            rules: {
                "color-contrast": { enabled: false },
            }
        });
    });

});
