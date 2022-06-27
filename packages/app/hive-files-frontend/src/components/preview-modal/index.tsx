import { gql, useQuery } from '@apollo/client';
import { BaseStyle } from '@hexhive/styles';
import { BaseModal, FileDialog, FileViewer } from '@hexhive/ui';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import download from 'downloadjs';
import { Text } from 'grommet';
import moment from 'moment';
import React from 'react';

export interface PreviewModalProps {
    open: boolean;
    onClose?: () => void;

    selected?: any;
}

export const PreviewModal : React.FC<PreviewModalProps> = (props) => {

    const { data } = useQuery(gql`
        query($id: ID){
            filesById(ids: [$id]){
                name
                url
                mimeType

                createdAt

                uploadedBy {
                    name
                }

                organisation {
                    name
                }
            }
        }
    `, {
        variables: {
            id: props.selected?.id
        }
    })

    const file = data?.filesById?.[0];

    const downloadFile = async () => {
        const data = await fetch(file.url)
        const blob = await data.blob();
       
        download(blob, file.name, file.mimeType)
    }

    return (
        <Dialog
            open={props.open}
            >
            <DialogTitle
                sx={{
                    padding: '8px',
                    fontSize: '1rem'
                }}
                bgcolor={BaseStyle.global.colors['accent-2']}
                color={'white'}>File Preview</DialogTitle>
            <DialogContent>
                <Box sx={{flex: 1}}>
                    <FileViewer 
                        files={data?.filesById || []}
                        />
                </Box>
                <Box sx={{flex: 1}}>
                    <Typography>Uploaded By: {data?.filesById?.[0]?.uploadedBy?.name}</Typography>  
                    <Typography>Uploaded at: {moment(data?.filesById?.[0]?.createdAt).format('HH:mma DD/MM/YY')}</Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}