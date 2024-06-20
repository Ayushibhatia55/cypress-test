describe('OpenWeather Site Test Interaction', () => {

  it('[Success]Visits the OpenWeather site and asserts the URL', () => {
    // Visit the OpenWeather website
    cy.visit('https://openweathermap.org')

    // Assert the URL
    cy.url().should('eq', 'https://openweathermap.org/')
  })
 
  it('[Success]Visits the OpenWeather site and checks for the banner', () => {
    // Visit the OpenWeather website
    cy.visit('https://openweathermap.org')

    // Check if the page contains 'Weather in your city' text
    cy.contains('Weather forecasts, nowcasts and history in a fast and elegant way').should('be.visible');

  })

  it('[Success]Visits the OpenWeather site, accepts cookies, and asserts the URL', () => {
    // Visit the OpenWeather website
    cy.visit('https://openweathermap.org')

    // Check if the cookie consent popup is visible and click to accept
    cy.get('body').then($body => {
      if ($body.find('.stick-footer-panel__link').length > 0) {
        cy.get('.stick-footer-panel__link').click()
      }
    })

    // Assert the URL
    cy.url().should('eq', 'https://openweathermap.org/')
  })
 
});