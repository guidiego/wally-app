module.exports = {
    webpack: (cfg, { dev }) => {
        cfg.module = {
            extensions: ['', '.js'],
            root: path.resolve(path.join(__dirname, 'src'))
        }

        return cfg
    }
}
