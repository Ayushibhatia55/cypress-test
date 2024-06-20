describe('OpenWeather Subscription Test', () => {
    beforeEach(() => {
      // Visit the OpenWeather website
      cy.visit('https://openweathermap.org')
  
      // Accept cookies if the popup is visible
      cy.get('body').then($body => {
        cy.viewport(1500, 700);
        if ($body.find('.stick-footer-panel__link').length > 0) {
          cy.get('.stick-footer-panel__link').click()
        }
      })
  
      // Navigate to the Pricing page
      cy.contains('Pricing').click()
    })
  
    it('Verifies subscription plans and pricing information', () => {
      // Assert that the URL contains '/price'
      cy.url().should('include', '/price')
  
      // Verify that subscription plans information is visible
      cy.contains('Current weather and forecasts collection').scrollIntoView().should('be.visible')
  
      // Check for the availability of different subscription plans
      cy.contains('Free').should('be.visible')
      cy.contains('Starter').should('be.visible')
      cy.contains('Developer').should('be.visible')
      cy.contains('Professional').should('be.visible')
      cy.contains('Enterprise').should('be.visible')

    })
  })
  