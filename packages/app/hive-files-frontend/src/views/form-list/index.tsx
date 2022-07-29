import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client'
import { Box, IconButton, List, ListItem, Paper } from '@mui/material'
import { Add } from '@mui/icons-material'
import React, { useState } from 'react'
import { FormModal } from '../../components/modals/form'
import { useNavigate } from 'react-router-dom'

export const FormList = () => {

    const navigate = useNavigate();
    
    const [ modalOpen, openModal ] = useState(false);
    
    const client = useApolloClient();
    
    const { data } = useQuery(gql`
        query GetForms {
            forms {
                id
                name
            }
        }
    `)

    const [ createForm ] = useMutation(gql`
        mutation CreateForm ($name: String!) {
            createForm(input: {name: $name}){
                id
            }
        }
    `)

    const refetch = () => {
        client.refetchQueries({include: ['GetForms']})
    }

    return (
        <Paper sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
            <FormModal
                open={modalOpen}
                onSubmit={(name) => {
                    createForm({variables: {name}}).then(() => {
                        refetch()
                        openModal(false)
                    })
                }}
                onClose={() => openModal(false)}
                    />
            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <IconButton onClick={() => openModal(true)}>
                    <Add />
                </IconButton>
            </Box>
            <List>
                {data?.forms?.map((form: any) => (
                    <ListItem button onClick={() => navigate(form.id)}>{form.name}</ListItem>  
                ))}
            </List>
        </Paper>
    )
}