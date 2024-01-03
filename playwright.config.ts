import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    use: {
        headless: false,
        video: 'on',
        screenshot: 'on'
    },
}

export default config;