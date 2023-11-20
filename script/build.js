'use strict';

const builder = require('electron-builder');
const Platform = builder.Platform;
const path = require('node:path');

// Promise is returned
builder
  .build({
    //   targets: Platform.MAC.createTarget(),
    //   config: {
    //    "//": "build options, see https://goo.gl/QQXmcV"
    //   },

    config: {
      directories: {
        output: path.join(process.cwd(), 'dist'),
        app: path.join(process.cwd(), 'src/main'),
      },
      files: ['src/**'],
      extends: null,
      productName: '测试包',
      appId: 'test-xnz',
      asar: true,
      asarUnpack: '**\\*.{node,dll}',
      // extraResources: require('../common/extraResources.js'),
      // mac: macConfigOptions(userEnv),
      linux: {
        icon: `resource/unrelease/icons/${THEME_CSS_TYPE}`,
        executableArgs: ['--no-sandbox'],
        maintainer: 'xnz',
        description: 'test-description',
        category: 'office',
        desktop: {
          // Icon: `/usr/share/icons/hicolor/512x512/apps/${NAME}.png`, //* 这里决定任务栏图标（resource/unrelease/icons必须有512先12的图片 图片名为包名）
          Icon: 'xnz',
        },
        target: {
          target: 'deb',
          arch: ['arm64'],
        },
      }, // linux配置
      // win: winConfigOptions(userEnv),
      // nsis: nsisConfigOptions(userEnv), // windows安装执行脚本
      deb: {}, // linux安装deb执行脚本
      publish: [{ provider: 'generic', url: '' }],
      // dmg: dmgOptions(userEnv),
    },
    project: process.cwd(),
  })
  .then(() => {
    // handle result
  })
  .catch((error) => {
    // handle error
  });
