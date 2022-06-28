import React, { useState } from "react";
import { FileExplorer, SidebarView } from '@hexhive/ui'
import { Box, Text, List, Grommet } from "grommet";
import { BaseStyle } from "@hexhive/styles";
import { Header } from "./components/header";
import { Folder, Share } from 'grommet-icons';
import { useEffect } from "react";
import { BrowserRouter as Router, matchPath, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Explorer } from "./views/explorer";
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: '#72738b'
    },
    secondary: {
      // light: '#a3b579',
      main: "#87927e"
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          overflow: "hidden"
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: 'green'
        }
      }
    }
  }
  // palette: {
  //   // primary: {
  //   //   main: '',
  //   // },
  //   // secondary: {
  //   //   main: ''
  //   // }
  // }
});

export const App = (props: any)  => {

  return (
   <ThemeProvider theme={theme}>
    <Box background="neutral-2" flex direction="column">
      <SidebarView  
        views={[
          {label: 'Files', icon: <Folder />, path: '/', component: <Explorer />},
          {label: 'Shared', icon: <Share />, path: '/shared', component: <Box>Shared</Box>}
        ]} />

    </Box>
  </ThemeProvider>
  );
}
