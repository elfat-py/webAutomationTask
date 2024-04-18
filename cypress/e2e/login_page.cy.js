/*
To check log-in proccess we would need:
-Verify that ['username', 'password'] && login button exists in the page
-Fill the form with our credentials
-Use '.click()' method to log in the page
 */

describe('Login page', () =>{

    it('should display login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        cy.get('input[name="username"').should('be.visible')
        cy.get('input[name="password"').should('be.visible')
        cy.get('.orangehrm-login-button').should('be.visible')

        cy.get('input[name="username"').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('.orangehrm-login-button').click()
    });
})