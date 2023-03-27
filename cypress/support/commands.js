// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Prdlogin', () => {

        
    cy. clearCookies() 
    cy. clearLocalStorage()
    cy.setCookie('panda-user-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MjAzYzdlMS1mOWNhLTRhZjEtYTdkMC1kMGMwZDZjYWIxMDYiLCJhY2NvdW50UmVmZXJlbmNlIjoidGVsdXMiLCJ1c2VyVXVpZCI6IjI0ZmFiNGYyLTA0OTgtNDI4ZC04OTVjLTczZjUwYmNiOWNiYyIsImFjY291bnRVdWlkIjoiNzA3NjE3NDItMWJjZS00M2NlLWIwMjMtYjk5YmEwYTg0ZjY2IiwidXNlckVtYWlsIjoicm9zaGFuLm5haXJAdGVsdXMuY29tIiwic2NvcGVzIjpbInlhcmE6YWRtaW4iXSwiaWF0IjoxNjc5NzU3NzUwLCJleHAiOjE2ODAzNTc3NTB9.MwMDv2NviXqwm2h_STN-kRhkdg5Qzaxu_hOTTN5HAFo')
    cy.setCookie('yara-user-calendar', 'GoogleCloud')
    cy.setCookie('yara-account-slug','TELUS')
    cy.setCookie('__Host-next-auth.csrf-token', '26d5bac015851a5ab953e4ac7757e7ac4f18c90d7b8ba4d9491d2e2fd2c398e1%7Ce87badaa8617a58313e7ec60fa05ba9c7fd24225891938f58fc56e22d3173951', {
        secure: true
    })
    cy.setCookie('panda-account-uuid', '70761742-1bce-43ce-b023-b99ba0a84f66')
    cy.setCookie('panda-user-auth-apps', '%5B%22admin%22%2C%22app%22%5D')
    
    
    })
