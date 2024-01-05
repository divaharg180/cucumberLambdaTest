import { config as sharedConfig } from './wdio.conf.js'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        services: [
            ['lambdatest', {
                testObservability: false,
            }]
        ],

        capabilities: [
            {
                browserName: 'Chrome',
                specs: [
                    './features/**/*.feature'


                ],
                'bstack:options': {
                    os: 'Windows',
                    osVersion: '11',
                    browserVersion: 'latest',
                    geoLocation: 'US',
                    resolution: '1920x1080',
                    buildName: 'Sprint_28_TEST',
                    buildTag: 'regression',
                    projectName: 'USHJA',
                }
            },
            {
                browserName: 'chrome',
                specs: [
                    
                ],
                'bstack:options': {
                    deviceName: 'Google Pixel 6',
                  //  platformVersion: '12.0',
                    platformName: 'android',
                    buildName: 'Sprint_28_TEST',
                    buildTag: 'regression',
                    projectName: 'USHJA',
                    geoLocation: 'US',
                },
            },

            {
                browserName: 'Safari',
                specs: [
                ],
                'bstack:options': {
                    os: 'OS X',
                    osVersion: 'Big Sur',
                    browserVersion: 'latest',
                    buildName: 'Sprint_28_TEST',
                    buildTag: 'regression',
                    projectName: 'USHJA',
                    geoLocation: 'US',
                    resolution: '2560x1600',
                }
            },

            {
                browserName: 'Safari',
                specs: [
                   
                ],
                'bstack:options': {
                    deviceName: 'iPhone 14',
                    buildName: 'Sprint_28_TEST',
                    buildTag: 'regression',
                    projectName: 'USHJA',
                    geoLocation: 'US',
                },
            },
        ],

        // Options to be passed to Jasmine.
        jasmineOpts: {
            // Jasmine default timeout
            defaultTimeoutInterval: 3000000,
        },
    }
}