const {override, fixBabelImports, addLessLoader, addDecoratorsLegacy, disableEsLint} = require('customize-cra')

module.exports = override(
    addLessLoader({
        javascriptEnabled: true,
        localIdentName: '[name]__[local]-[hash:base64:5]'
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    disableEsLint(),
    addDecoratorsLegacy(),
)