import React, { useState } from "react";
import { FileExplorer } from '@hexhive/ui'
import { Box, Text, List, Grommet, Spinner } from "grommet";
import { BaseStyle } from "@hexhive/styles";
import { BaseHeader } from "./components/header";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client'
import { Explorer } from "./views/explorer";
import {App} from "./App";
import { AuthProvider, Loader } from '@hexhive/auth-ui'

const uploadLink = createUploadLink({
  uri: process.env.REACT_APP_API ?  `${process.env.REACT_APP_API}/graphql?appliance=HiveFiles` : 'http://localhost:7000/graphql?appliance=HiveFiles',
  headers: {
    "keep-alive": "true"
  },
  credentials: 'include'
  
})

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
  credentials: 'include'
})

export default function Root(props) {


  return (
    <AuthProvider
      authorizationServer={process.env.NODE_ENV == 'production' ? (process.env.REACT_APP_API || "https://staging-api.hexhive.io") : 'http://localhost:7000'}
      >
        {(user) => user ? (
          <Grommet   
                
            style={{display: 'flex', height: '100%', width: '100%'}}
            themeMode="dark"
            plain 
            theme={BaseStyle}>  
            <ApolloProvider client={client}>
            <Router basename={process.env.PUBLIC_URL || '/dashboard/files'}>
              <App />
            
            </Router>
            </ApolloProvider>
            </Grommet>
        ) : <Loader />}
   
  </AuthProvider>);
}
