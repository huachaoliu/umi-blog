import os from 'os';
import path from 'path';
// import pageRoutes from './route.config';
// import webpackPlugin from './plugin.config';
import defaultSetting from './default';

export default {
  // add for transfer to umi
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        targets: {
          ie: 11,
        },
        local: {
          enable: true, //default false
          default: 'zh-CN',
          baseNavigator: true
        },
        dynamicImport: {
          loadingComponent: './components/loading/index'
        },
        
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//,
          ],
        },
      }
    ]
  ],
  // history: 'hash',
  // routes: pageRoutes,
  chainWebpack: (config) => {
    config.resolve.alias.set('@assets', path.resolve(__dirname, 'src/assets'));
    config.resolve.alias.set('@components', path.resolve(__dirname, 'src/components'));
    config.resolve.alias.set('@models', path.resolve(__dirname, 'src/models'));
    config.resolve.alias.set('@services', path.resolve(__dirname, 'src/services'));
    config.resolve.alias.set('@utils', path.resolve(__dirname, 'src/utils'));
  },
}