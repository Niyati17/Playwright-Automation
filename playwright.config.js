// @ts-check
import { defineConfig, devices } from '@playwright/test';



const config = {
  testDir: './tests',
  
    timeout: 30* 1000,
    expect: {
    timeout: 12000
  },
      use: { browserName: 'chromium',
        headless: false
       },
    };

    module.exports = config;

    
    