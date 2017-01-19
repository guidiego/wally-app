const webpack = require('webpack')

module.exports = {
    webpack: function (cfg)  {
        cfg.plugins.push(new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }))

        return cfg
    }
}
