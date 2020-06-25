module.exports = {
    devServer: {
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:9011",
                ws: true,
                changeOrigin: true
            }
        }
    }
};
