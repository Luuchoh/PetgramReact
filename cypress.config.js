const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 500,
  viewportHeight: 800,
  e2e: {
    baseUrl: 'https://petgram-cliente-luuchoh.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
