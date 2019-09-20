const path = require('path')
const { styles, theme } = require('./styleguide.styles')
module.exports = {
  title: 'UNICEF Material UI',
  styles,
  theme,
  showUsage: true,
  getComponentPathLine: componentPath => {
    const dirname = path.dirname(componentPath, '.js')
    const name = dirname.split('/').slice(-1)[0]

    return `import { ${name} } from '@unicef/material-ui'`
  },
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
  sections: [
    {
      name: 'Introduction',
      sections: [
        {
          name: '',
          content: 'src/docs/Introduction.md',
        },
        {
          name: 'Installation',
          content: 'src/docs/Installation.md',
        },
        {
          name: 'Example',
          external: true,
          href: 'https://unicef.github.io/unicef-material-ui/example',
        },
      ]
    },
    {
      name: 'Components',
      components: () => ([
        path.resolve(__dirname, 'src/components/UButton', 'UButton.js'),
        path.resolve(__dirname, 'src/components/USelect', 'USelect.js'),
      ]),
      usageMode: 'expand',
    },
    {
      name: 'Layout',
      components: () => ([
        path.resolve(__dirname, 'src/components/ULayout', 'ULayout.js'),
        path.resolve(__dirname, 'src/components/USideBar', 'USideBar.js'),
        path.resolve(__dirname, 'src/components/UContent', 'UContent.js'),
      ]),
      usageMode: 'expand',
    },
    {
      name: 'Header',
      components: () => ([
        path.resolve(__dirname, 'src/components/UHeader', 'UHeader.js'),
        path.resolve(__dirname, 'src/components/UHeaderRightButtons', 'UHeaderRightButtons.js'),
        path.resolve(__dirname, 'src/components/UHeaderMainMenu', 'UHeaderMainMenu.js'),
        path.resolve(__dirname, 'src/components/UHeaderLeftMenu', 'UHeaderLeftMenu.js'),
      ]),
      usageMode: 'expand',
    },
    {
      name: 'Form Validation',
      components: () => ([
        path.resolve(__dirname, 'src/components/UValidatorForm', 'UValidatorForm.js'),
        path.resolve(__dirname, 'src/components/UTextField', 'UTextField.js'),
        path.resolve(__dirname, 'src/components/UValidatorComponent', 'UValidatorComponent.js'),
      ]),
      // sections: [
      //   {
      //     name: 'ValidatorForm',
      //     content: 'src/readme.md',
      //   }
      // ],
      usageMode: 'expand',
    },
    // For future refence to use in sections
    // {
    //   name: 'UI Components',
    //   // content: 'src/components/USelect/USelect.md',
    //   components: 'src/components/USelect/USelect.js',
    //   // exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
    //   usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    // },
  ],
}
