import React from "react";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { StylesProvider, createGenerateClassName, jssPreset } from '@material-ui/styles'
import { create } from 'jss'
import { theme, UNICEFStyleProvider, Header } from "unicef-material-ui"
import { NavLinks, MainContent } from '../components'

// const generateClassName = createGenerateClassName({
// 	productionPrefix: 'o',
// });

// const jss = create({
//  ...jssPreset(), 
//  insertionPoint: `jss-insertion-point`
// });


export default function App() {

  return (
    <UNICEFStyleProvider>
      <MuiThemeProvider theme={theme}>
            <Header
              applicationName="Material UI"
              navLinks={<NavLinks />}
            //   tabs={<NavTabs tabs={tabs} />}
            //   // hideLogo={false}
            //   // logoBorderLine={false}
            //   // logo={<img alt="user" src={avatar} />}
            //   menuItems={<MenuItems />}
            //   menuTabs={<MenuTabs />}
              menuButton={true}
            />
            <MainContent />
      </MuiThemeProvider >
    </UNICEFStyleProvider>
  )
}
