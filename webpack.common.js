const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const clientConfig = {
    entry: {
        'public/js/components/ActivityContainer-bundle.js': './client/js/containers/ActivityContainer-client.js',
        'public/js/components/ShoppingCartContainer-bundle.js': './client/js/containers/ShoppingCartContainer-client.js',
        'public/js/components/PaymentContainer-bundle.js': './client/js/containers/PaymentContainer-client.js',
        'public/js/components/LoginFormContainer-bundle.js': './client/js/containers/LoginFormContainer-client.js',
        'public/js/components/RegisterFormContainer-bundle.js': './client/js/containers/RegisterFormContainer-client.js',
        'public/js/components/SearchContainer-bundle.js': './client/js/containers/SearchContainer-client.js',
        'public/js/components/ForgotPasswordContainer-bundle.js': './client/js/containers/ForgotPasswordContainer-client.js',
        'public/js/components/ResetPasswordContainer-bundle.js': './client/js/containers/ResetPasswordContainer-client.js',
        'public/js/components/AccountContainer-bundle.js': './client/js/containers/AccountContainer-client.js',
        'public/js/components/SearchBoxContainer-bundle.js': './client/js/containers/searchBox/SearchBoxContainer-client.js',
        'public/js/components/HomeContainer-bundle.js': './client/js/containers/HomeContainer-client.js',
        'public/js/components/ContactUsContainer-bundle.js': './client/js/containers/ContactUsContainer-client.js',
        'public/js/components/F1FormContainer-bundle.js': './client/js/containers/F1FormContainer-client.js',
        'public/js/components/PartnerContainer-bundle.js': './client/js/containers/PartnerContainer-client.js',
        'public/js/components/TravelPlanningContainer-bundle.js': './client/js/containers/TravelPlanningContainer-client.js',
        'public/js/components/EmailSubscribeContainer-bundle.js': './client/js/containers/footer/EmailSubscribeContainer-client.js',
        'public/js/components/ShoppingCartPreviewContainer-bundle.js': './client/js/containers/ShoppingCartPreviewContainer-client.js',
        'public/js/components/ShoppingCartMobileContainer-bundle.js': './client/js/containers/ShoppingCartMobileContainer-client.js',
        'public/css/vendor-bundle.css': [
            './public/css/lib/bootstrap/bootstrap.min.css',
            './public/css/lib/bootstrap/bootstrap-select.css',
            './public/css/lib/bootstrap/bootstrap-slider.css',
            './public/css/lib/fontawesome/css/all.min.css',
            './public/css/lib/mmenu/jquery.mmenu.all.css',
            './public/css/lib/colorbox/colorbox.css',
            './public/css/lib/slick/slick.css',
            './public/css/lib/slick/slick-lightbox.css',
            './public/css/lib/select/react-select.css',
            './public/css/lib/froala_editor/froala_style.min.css',
            './public/css/lib/aos/aos.css'
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),

        new CopyWebpackPlugin([
            {
                context: './public/',
                from: '**/*',
                to: './public'
            }
        ], { /* options */ }),

        new ExtractTextPlugin("public/css/vendor-bundle.css"),

        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'vendor-jquery-bundle.js',
            filesToConcat: [
                './public/js/lib/jquery.min.js',
                './public/js/lib/bootstrap/bootstrap.min.js',
                './public/js/lib/bootstrap/bootstrap-select.js',
                './public/js/lib/bootstrap/bootstrap-slider.js',
                './public/js/lib/mmenu/jquery.mmenu.min.all.js',
                './public/js/lib/colorbox/jquery.colorbox.js',
                './public/js/lib/slick.min.js',
                './public/js/lib/slick-lightbox.js',
                './public/js/lib/jquery.lazy.min.js'
            ]
        }),

        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'fayfay-bundle.js',
            filesToConcat: [
                './public/js/fayfay.js',
                './public/js/lib/formatDate.js'
            ]
        }),

        //Campaign Double 11
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'double11-bundle.js',
            filesToConcat: [
                './public/js/campaign/double11.js',
            ]
        }),

        //Campaign VN Show
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'vnshow-bundle.js',
            filesToConcat: [
                './public/js/campaign/vnshow.js'
            ]
        }),

        //Campaign Black Friday
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'blackfriday-bundle.js',
            filesToConcat: [
                './public/js/campaign/blackfriday.js'
            ]
        }),

        //Campaign Christmas
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'christmas-bundle.js',
            filesToConcat: [
                './public/js/campaign/christmas.js',
                './public/js/lib/snow-it.min.js',
                './public/js/lib/clipboard.min.js'
            ]
        }),

        //General Keepsakes Page
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'keepsakes-bundle.js',
            filesToConcat: [
                './public/js/campaign/keepsakes.js'
            ]
        }),

        //General Travel Must Have Page
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'musthaves-bundle.js',
            filesToConcat: [
                './public/js/campaign/musthaves.js'
            ]
        }),

        //Campaign Authentic Experiences
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'authenticexp-bundle.js',
            filesToConcat: [
                './public/js/campaign/authenticexp.js',
                './public/js/lib/clipboard.min.js'
            ]
        }),

        //Campaign FathersDay
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'fathersday-bundle.js',
            filesToConcat: [
                './public/js/campaign/fathersday.js',
                './public/js/lib/clipboard.min.js'
            ]
        }),

        //General Keepsakes Page
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'dynamic-keepsakes-bundle.js',
            filesToConcat: [
                './public/js/campaign/dynamic-keepsakes.js'
            ]
        }),

        //General Travel Must Have Page
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'dynamic-musthaves-bundle.js',
            filesToConcat: [
                './public/js/campaign/dynamic-musthaves.js'
            ]
        }),

        //General Coffee House Page
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'coffeehouse-bundle.js',
            filesToConcat: [
                './public/js/campaign/coffeehouse.js',
                './public/js/lib/aos/aos.js'
            ]
        }),

        //General One Year Anniversary Page
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'one-year-anniversary-bundle.js',
            filesToConcat: [
                './public/js/campaign/one-year-anniversary.js',
                './public/js/lib/aos/aos.js',
                './public/js/lib/clipboard.min.js'
            ]
        }),

        //General Property Tour Page
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'property-tour-bundle.js',
            filesToConcat: [
                './public/js/campaign/property-tour.js',
                './public/js/lib/aos/aos.js',
            ]
        }),

        //Campaign Bubbles
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'bubbles-bundle.js',
            filesToConcat: [
                './public/js/campaign/bubbles.js'
            ]
        }),

        //Campaign CNY
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'cny-bundle.js',
            filesToConcat: [
                './public/js/campaign/cny.js',
                './public/js/lib/clipboard.min.js'
            ]
        }),

        //Campaign Easter
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'easter-bundle.js',
            filesToConcat: [
                './public/js/campaign/easter.js',
                './public/js/lib/clipboard.min.js'
            ]
        }),

        //Campaign Central Vietnam Travel
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'central-vietnam-travel-bundle.js',
            filesToConcat: [
                './public/js/campaign/central-vietnam-travel.js'
            ]
        }),

        //FaySim
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'faysim-bundle.js',
            filesToConcat: [
                './public/js/faysim.js'
            ]
        }),

        //Visa
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'visa-bundle.js',
            filesToConcat: [
                './public/js/visa.js'
            ]
        }),

        //FaySim
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'f1-bundle.js',
            filesToConcat: [
                './public/js/f1.js',
                './public/js/lib/jquery.countdown.min.js'
            ]
        }),

        //Campaign Christmas 2019
        new ConcatPlugin({
            uglify: isProduction,
            sourceMap: isProduction,
            outputPath: './public/js/',
            fileName: 'christmas2019-bundle.js',
            filesToConcat: [
                './public/js/campaign/christmas2019.js',
                './public/js/lib/snow-it.min.js',
                './public/js/lib/clipboard.min.js'
            ]
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/js/components/vendor-bundle.js',
            chunks: [
                'public/js/components/ActivityContainer-bundle.js',
                'public/js/components/ShoppingCartContainer-bundle.js',
                'public/js/components/PaymentContainer-bundle.js',
                'public/js/components/LoginFormContainer-bundle.js',
                'public/js/components/RegisterFormContainer-bundle.js',
                'public/js/components/SearchContainer-bundle.js',
                'public/js/components/ForgotPasswordContainer-bundle.js',
                'public/js/components/ResetPasswordContainer-bundle.js',
                'public/js/components/AccountContainer-bundle.js',
                'public/js/components/SearchBoxContainer-bundle.js',
                'public/js/components/HomeContainer-bundle.js',
                'public/js/components/ContactUsContainer-bundle.js',
                'public/js/components/F1FormContainer-bundle.js',
                'public/js/components/PartnerContainer-bundle.js',
                'public/js/components/TravelPlanningContainer-bundle.js',
                'public/js/components/EarlyAccessContainer-bundle.js',
                'public/js/components/EmailSubscribeContainer-bundle.js',
                'public/js/components/ShoppingCartPreviewContainer-bundle.js',
                'public/js/components/ShoppingCartMobileContainer-bundle.js'
            ]
        })
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]'
    },

    resolve: {
        alias: {
            fayfayConstants$: path.resolve(__dirname, 'client', 'js', 'constants', isProduction ? 'production.js' : 'development.js')
        }
    },

    module: {
        rules: [
            {
                test: require.resolve('moment'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: 'moment'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['env', 'stage-2', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/css/[name].css'
                        }
                    },
                    {
                        loader: 'extract-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // If you are having trouble with urls not resolving add this setting.
                            // See https://github.com/webpack-contrib/css-loader#url
                            // url: false,
                            minimize: isProduction,
                            // sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isProduction
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'public/images/',
                            useRelativePath: true
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './public/css/fonts',
                            publicPath: './fonts'
                        }
                    }
                ]
            }
        ]
    }
};

const serverConfig = {
    target: 'node',
    node: {
        __dirname: false,  // The regular Node.js __dirname behavior. The dirname of the output file when run in a Node.js environment.
        __filename: false,  // The regular Node.js __filename behavior. The filename of the output file when run in a Node.js environment.
    },
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    entry: {
        app: './app.js',
        'temp/styles': './server/sass/sassLoader.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),  // done by clientConfig already
        new ExtractTextPlugin({
            filename: 'public/css/[name].css',
        }),
        new CopyWebpackPlugin([
            {
                context: './server/',
                from: '**/*',
                to: './server',
                ignore: ['controllers/**', 'sass/**']
            },
            {
                context: './locales/',
                from: '**/*',
                to: './locales'
            },
            {
                context: './public',
                from: '**/*.txt',
                to: './public'
            }
        ], { /* options */ }),
    ],

    resolve: {
        alias: {
            fayfayConstants$: path.resolve(__dirname, 'client', 'js', 'constants', isProduction ? 'production.js' : 'development.js')
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['env', 'stage-2', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/css/[name].css'
                        }
                    },
                    {
                        loader: 'extract-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // If you are having trouble with urls not resolving add this setting.
                            // See https://github.com/webpack-contrib/css-loader#url
                            // url: false,
                            minimize: isProduction,
                            // sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                // cannot use style-loader which inserts <style></style> tags to DOM which doesn't work on server-side
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // If you are having trouble with urls not resolving add this setting.
                                // See https://github.com/webpack-contrib/css-loader#url
                                // url: false,
                                minimize: isProduction,
                                // sourceMap: true
                            }
                        },
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            useRelativePath: true,
                            emitFile: false
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = {
    clientConfig: clientConfig,
    serverConfig: serverConfig
};
