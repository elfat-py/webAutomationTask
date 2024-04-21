describe('Delete SysUser User', () => {
    it('should display login page', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        cy.get('input[name="username"').should('be.visible')
        cy.get('input[name="password"').should('be.visible')
        cy.get('.orangehrm-login-button').should('be.visible')

        cy.get('input[name="username"').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('.orangehrm-login-button').click()

        //opening the sandwich li and choosing the one with 'Logout' text on it
        cy.get('i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').should('be.visible').click()
        cy.contains('a.oxd-userdropdown-link', 'Logout').click()

    })
})
