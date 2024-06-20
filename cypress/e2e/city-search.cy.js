describe('OpenWeather City Search Test', () => {
    it('Searches for a city and checks the weather information', () => {
      // Visit the OpenWeather website
      cy.visit('https://openweathermap.org')

  
      // Search for the city "Delhi"
      cy.get('.search-container').type('Delhi')
      cy.contains('Search').click()
      cy.contains('Delhi, IN').click()
  
      // Verify that the search results contain weather information for London
      cy.get('.current-container.mobile-padding')
        .should('be.visible')
        .and('contain.text', 'Delhi, IN')
  
      
    })
  })