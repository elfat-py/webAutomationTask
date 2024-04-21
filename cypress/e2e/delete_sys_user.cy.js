describe('Delete SysUser User', () => {
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



        // (This is overdone) we are checking for every table row if the role is ESS and if so we will delete him/her/them lol
        cy.get('.oxd-table-body .oxd-table-row').then(rows => {
            const rowCount = rows.length;
            for (let i = 0; i < rowCount; i++) {
                // Check the user role in the current row
                cy.get('.oxd-table-body .oxd-table-row').eq(i).within(() => {
                    cy.get('.oxd-padding-cell').eq(2).then($role => {
                    const roleText = $role.text().trim();
                    if (roleText === 'ESS') {
                        cy.get('button.oxd-icon-button.oxd-table-cell-action-space').eq(0).click()

                        //Confirm tab for the deletion of system user, cypress doesn't seem to be able to find them as it is a 'single window control focused framework'
                        //cy.contains('p.oxd-text.oxd-text--p.oxd-text--card-title', 'Are you Sure?').should('be.visible')
                        //cy.get('i.oxd-icon.bi-trash.oxd-button-icon').should('be.visible').click()
                        //cy.contains('p.oxd-text.oxd-text--p.oxd-text--card-title', 'Are you Sure?')
                        //cy.get('button.oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin').should('be.visible').click()

                    }
                });
            });
            }
        });
    })
})