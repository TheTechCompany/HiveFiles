import React, { useState } from "react";
import { FileExplorer, Sidebar, SidebarView } from '@hexhive/ui'
import { Box } from '@mui/material'
import { HexHiveTheme } from "@hexhive/styles";
import { DynamicForm, Folder, Share } from '@mui/icons-material'
import { useEffect } from "react";
import { BrowserRouter as Router, matchPath, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Explorer } from "./views/explorer";
import { createTheme, ThemeProvider } from "@mui/material"
import { FormList } from "./views/form-list";
import { FormSingle } from "./views/form-single";

export const App = (props: any) => {

  const navigate = useNavigate();

  const pages = [
    { label: 'Files', icon: <Folder />, path: '/', component: <Explorer /> },
    {
      label: 'Forms', icon: <DynamicForm />, path: '/forms', component: <Outlet />, children: [
        { path: '', component: <FormList /> },
        { path: ':id', component: <FormSingle /> }
      ]
    },
    // { label: 'Shared', icon: <Share />, path: '/shared', component: <Box>Shared</Box> }
  ];

  return (
    <ThemeProvider theme={HexHiveTheme}>
      <Box sx={{ flex: 1, display: 'flex', height: '100%', color: 'white', bgcolor: 'primary.dark' }}>
        <Sidebar
          onSelect={(item) => {
            navigate(item.path)
          }}
          menu={pages} />
        <Box sx={{flex: 1, display: 'flex', padding: '6px'}}>

          <Routes>
            {pages.map((x, ix) => (
              <Route path={`${x.path}`} element={x.component}>
                {x.children && x.children.map((y, iy) => (
                  <Route path={`${y.path}`} element={y.component} />
                ))}
              </Route>
            ))}
          </Routes>
        </Box>

      </Box>
    </ThemeProvider>
  );
}
