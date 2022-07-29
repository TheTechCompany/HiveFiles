import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client'
import { Explorer } from "./views/explorer";
import {App} from "./App";
import { AuthProvider, Loader } from '@hexhive/auth-ui'
import { buildAxiosFetch } from '@lifeomic/axios-fetch'
import axios from 'axios';

const API_URL = localStorage.getItem('HEXHIVE_API');

const uploadLink = createUploadLink({
  uri: process.env.NODE_ENV == 'production'
  ? `${API_URL || process.env.REACT_APP_API}/graphql`
  : "http://localhost:7000/graphql",

  headers: {
    "keep-alive": "true"
  },
  credentials: 'include',
  fetch: buildAxiosFetch(axios, (config, input, init) => ({
    ...config,
    withCredentials: true,
    onUploadProgress: (init as any)?.onUploadProgress
  }))
})



const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
  credentials: 'include'
})

export default function Root(props: any) {


  return (
    <AuthProvider
      authorizationServer={process.env.NODE_ENV == 'production' ? (process.env.REACT_APP_API || "https://staging-api.hexhive.io") : 'http://localhost:7000'}
      >
    
            <ApolloProvider client={client}>
            <Router basename={process.env.PUBLIC_URL || '/dashboard/files'}>
              <App />
            
            </Router>
            </ApolloProvider>
       
   
  </AuthProvider>);
}
