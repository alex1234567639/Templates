module.exports = {
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: false,
    productionSourceMap: false,
    devServer: {
        // 啟動時打開瀏覽器
        open: true,
        // 打開瀏覽器的路徑
        openPage: '',
        port: 9091,
        // 設置代理
        proxy: null,
        // 此處開啟 https
        https: true
    },
};
