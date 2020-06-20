module.exports = {
    devServer: {
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:8021",
                ws: true,
                changeOrigin: true
            }
        }
    }
};
