
describe('Modify user', () =>{

    it('should display login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        cy.get('input[name="username"').should('be.visible')
        cy.get('input[name="password"').should('be.visible')
        cy.get('.orangehrm-login-button').should('be.visible')

        cy.get('input[name="username"').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('.orangehrm-login-button').click()


        //Going admin page
        cy.contains('.oxd-main-menu-item', 'Admin').should('be.visible').click();
        cy.url().should('include', '/web/index.php/admin/viewSystemUsers');
        cy.get('h5.oxd-text.oxd-text--h5.oxd-table-filter-title').should('be.visible')


        cy.get('button[data-v-f5c763eb][data-v-c423d1fa]').eq(1).click();
        cy.url().should('include', '/web/index.php/admin/saveSystemUser/');
        cy.contains('h6.oxd-text.oxd-text--h6.orangehrm-main-title', 'Edit User').should('be.visible')

        cy.get('.oxd-input-group:contains("Username") input').type('JohnWick');

        cy.get('button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').should('be.visible').click()
    })
})