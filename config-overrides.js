const path = require('path');
const { configPaths, aliasJest } = require('react-app-rewire-alias');
const { addWebpackAlias, override, fixBabelImports } = require('customize-cra');

// Add just the necessary icons to decrease bundle size
function overrides(config, env) {
  config.resolve.alias['@ant-design/icons/lib/dist$'] = path.join(__dirname, 'src/icons.js');

  return config;
}
const aliasMap = configPaths('./tsconfig.paths.json'); // or jsconfig.paths.json

module.exports = override(
  overrides,
  addWebpackAlias({
    '@assets': path.join(__dirname, 'src/assets'),
    '@constants': path.join(__dirname, 'src/constants'),
    '@components': path.join(__dirname, 'src/shared/components'),
    '@atom': path.join(__dirname, 'src/shared/atom'),
    '@molecules': path.join(__dirname, 'src/shared/molecules'),
    '@organism': path.join(__dirname, 'src/shared/organisms'),
    '@constant': path.join(__dirname, 'src/shared/constant'),

    '@icons': path.join(__dirname, 'src/shared/icons'),
    '@layout': path.join(__dirname, 'src/layout'),
    '@Layout': path.join(__dirname, 'src/shared/Layout'),
    '@redux': path.join(__dirname, 'src/redux'),
    '@utils': path.join(__dirname, 'src/utils'),
    '@pages': path.join(__dirname, 'src/pages'),
    '@services': path.join(__dirname, 'src/services'),
    '@store': path.join(__dirname, 'src/store'),
    '@hooks': path.join(__dirname, 'src/hooks'),
    '@ability': path.join(__dirname, 'src/ability')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  })
);
module.exports.jest = aliasJest(aliasMap);
