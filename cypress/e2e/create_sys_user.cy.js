
describe('Create a System User', () =>{
    // before(() => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //     cy.get('input[name="username"').type('Admin')
    //     cy.get('input[name="password"]').type('admin123')
    //     cy.get('.orangehrm-login-button').click()
    // })




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

        //Going 'save system' user page
        //cy.get('.orangehrm-header-container button.oxd-button--medium.oxd-button--secondary').contains('Agregar').click();
        cy.get('.orangehrm-header-container button.oxd-button--medium.oxd-button--secondary').click();
        cy.url().should('include', '/web/index.php/admin/saveSystemUser');

        cy.get('h6.orangehrm-main-title').should('be.visible')

        // cy.get('oxd-select-text-input').click()
        // cy.contains('.oxd-select-option', 'Admin').click();

        //Selecting Admin in user role
        cy.get('.oxd-grid-2.orangehrm-full-width-grid .oxd-grid-item:nth-child(1) .oxd-select-text-input').click();
        cy.contains('.oxd-select-wrapper', 'Admin').click();

        // Putting status enable
        cy.get('.oxd-grid-2.orangehrm-full-width-grid .oxd-grid-item:nth-child(3) .oxd-select-text-input').click();
        cy.contains('.oxd-select-wrapper', 'Enabled').click();

        // Filling the fields name and username
        cy.get('.oxd-input-group:contains("Employee Name") input').type('Joy Smith');
        //cy.get('.oxd-autocomplete-dropdown').should('exist');

        //cy.get('div[role="listbox"].oxd-autocomplete-dropdown.--position-bottom').should('be.visible');
        //cy.contains('.oxd-autocomplete-dropdown .--position-bottom').should('be.visible');
        //cy.contains('.oxd-autocomplete-dropdown.--position-bottom [role="option"]', 'Joy Smith').click();




        cy.get('.oxd-input-group:contains("Username") input').type('elfat-py');

        //Filling the fields password and confirm password
        cy.get('.oxd-grid-2.orangehrm-full-width-grid .user-password-cell input[type="password"]').type('testTest1212');
        cy.get('.oxd-grid-2.orangehrm-full-width-grid .oxd-grid-item:nth-child(2) input[type="password"]').type('testTest1212');

        //SAVING THE NEW USER
        cy.get('button.oxd-button--secondary').contains('Save').click()


        /*
        TO DO
        find the username we just created on the html table and once found modify it
         */






    });
    it('should find the username "elfat"', () => {
    // Visit the page with the table

    // Find the row where the employee name is "Cynthia Jack"
    cy.get('.oxd-table-row').contains('Cynthia Jack').parent('.oxd-table-row')
      .within(() => {
        // Assert that the username in the adjacent column is "elfat"
        cy.contains('.header', 'Username').siblings('.data').should('contain', 'elfat')
      })
    })


    it('should type username', () => {
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
        // cy.url().should('include', '/web/index.php/admin/viewSystemUsers');
        // cy.get('input.oxd-input .oxd-input--active').type('test')
    });


    // it('should should navigate to Admin && click on the add button', () => {
    //
    //     cy.url().should('include', '/web/index.php/admin/viewSystemUsers');
    //     cy.get('button.add-button').should('be.visible');
    //
    //
    // })

})


