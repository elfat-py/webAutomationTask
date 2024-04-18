
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

    it('should should navigate to Admin && click on the add button', () => {

        cy.url().should('include', '/web/index.php/admin/viewSystemUsers');
        cy.get('button.add-button').should('be.visible');

        //cy.get('button.oxd-button--secondary').should('be.visible').click()
        // cy.get('button.oxd-button.oxd-button--medium.oxd-button--secondary').should('be.visible').click()
        // cy.url().should('include', '/admin/saveSystemUser');
        //
        // // Now you can continue with further actions on the "Add User" page
        // cy.contains('.orangehrm-main-title', 'Add User').should('be.visible');
        //cy.get('div.oxd-layout-container').should('be.visible');
        //cy.get("div.oxd-input.oxd-input--active").type('elfat test ')
        //cy.contains('button.oxd-button--secondary', 'Add').click()


        //cy.url().should('include', '/admin/saveSystemUser')
        //cy.contains('button.oxd-button--secondary', 'Agregar').click()
    })
    // it('create a new user of as role: Admin && status: Enabled', () => {
    //     cy.get('.oxd-select-wrapper .oxd-select-text', { timeout: 10000 }).should('be.visible').click();
    //     //cy.get('.oxd-select-wrapper .oxd-select-text').click();
    //
    // })
    // it('should be in the add page', () => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
    //     cy.contains('.orangehrm-main-title', 'Add User').should('be.visible');
    //
    //     cy.get('div.oxd-layout-container').should('be.visible')
    // })
    // it('should show the layout container ', () => {
    //     cy.get('div.oxd-layout-container').should('be.visible')
    // });
    // it('should complete the username field', () => {
    //     cy.get('form.oxd-form').should('be.visible')
    //     //cy.get('div.oxd-input').type('YourUsername');
    //     //cy.get('div.xd-autocomplete-text-input--before').should('be.visible').click()
    // })
    // it('should fill the form', () => {
    //     cy.get('div.oxd-input').type('elfat_py');
    // })
})


//emplyee name : Luis  Please