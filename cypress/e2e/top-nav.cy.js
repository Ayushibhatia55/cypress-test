describe('OpenWeather Top Navigation Test', () => {
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
    })
  
    

    it('Navigates to a specific navigation item', () => {
        // Define the navigation item to navigate to
        let navItem = 'Maps';
        let url = '/weathermap' ;
    
        // Click on the navigation item
        cy.contains(navItem).click()
    
        // Assert that the URL contains the expected path
        cy.url().should('include', url)
      })
    })