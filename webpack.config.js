const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const webpackConfigGenerator = (serverSide = false) => {
    const fileName = `elite-content-sdk${serverSide === false ? '-client' : ''}.js`;
    let config = {
        cache: true,
        entry: [path.resolve(__dirname, 'src/') + '/Index.ts'],
        module: {
            rules: [
                {
                    test: /\.ts?/,
                    exclude: /node_modules/,
                    use: 'awesome-typescript-loader'
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.ts']
        },
        output: {
            path: path.resolve(__dirname, 'build/'),
            filename: fileName,
            library: 'EliteContentSDK',
            libraryTarget: 'umd'
        },
        plugins: [
            new BrowserSyncPlugin({
                server: {
                    baseDir: './build/',
                    index: ['index.html']
                },
                files: [
                    'build/index.html',
                    'build/elite-content-sdk.js'
                ],
                https: true,
                browser: 'google chrome',
                // browser: 'chrome.exe', // Windows user
                ghostMode: false
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            })
        ]
    };

    if (serverSide === true) {
        config = {
            ...config,
            target: 'node',
            node: { process: false }
        }
    }

    return config;
};

// const webpackFinalConfig = () => (
//     [webpackConfigGenerator()].concat(process.env.NODE_ENV === 'production' ? webpackConfigGenerator(true) : [])
// )

module.exports = webpackConfigGenerator(true);
