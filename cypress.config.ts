import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:8888',
    supportFile: 'test/cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'test/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
  screenshotsFolder: 'test/cypress/screenshots',
  videosFolder: 'test/cypress/videos',
})
