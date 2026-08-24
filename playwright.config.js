// @ts-check
import { defineConfig, devices } from '@playwright/test';



const config = {
  testDir: './tests',
  
    timeout: 30* 1000,
    expect: {
    timeout: 12000
  },

  reporter: 'html',
      use: { 
        browserName: 'chromium',
        headless: false,
        // @ts-ignore
        screenshot: 'only-on-failure',
        trace: 'only on-failure',
       },
    };

    module.exports = config;

    
    