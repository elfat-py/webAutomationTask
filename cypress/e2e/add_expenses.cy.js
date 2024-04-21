describe('Adding and reading some expenses', () =>
{

    beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })

    it('should display login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"').should('be.visible')
        cy.get('input[name="password"').should('be.visible')
        cy.get('.orangehrm-login-button').should('be.visible')

        cy.get('input[name="username"').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('.orangehrm-login-button').click()


        cy.contains('.oxd-main-menu-item', 'Claim').should('be.visible').click();
        cy.url().should('include', '/web/index.php/claim/viewAssignClaim');
        cy.get('button[data-v-10d463b7]').should('be.visible').eq(2).click();

        //we are now at event claim page
        cy.get('i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').eq(0).click()
        //cy.get('div.oxd-select-dropdown.--position-bottom').click()
        //cy.get('data[data-v-40acfd38][data-v-67daedf]').click()
        cy.get('[role=listbox]').click()

    });
})