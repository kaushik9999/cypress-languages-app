import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    "chromeWebSecurity": false,
    baseUrl: 'http://localhost:3000',
    testIsolation: false,
    env:{
        username:"test@guildhawk.com",
        password:"password"
    },
    setupNodeEvents(on, config) {
      
    },    
  },
});
