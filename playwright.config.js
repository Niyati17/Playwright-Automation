// @ts-check
import { defineConfig, devices } from '@playwright/test';



const config = {
  testDir: './tests',
  
    
      use: { browserName: 'chromium',
        headless: false
       },
    };

    module.exports = config;

    
    