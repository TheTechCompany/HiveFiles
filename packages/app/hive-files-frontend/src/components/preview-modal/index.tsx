import { gql, useQuery } from '@apollo/client';
import { BaseModal, FileViewer } from '@hexhive/ui';
import { Box } from '@mui/material';
import { Text } from 'grommet';
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

    return (
        <BaseModal
            title='Preview'
            width='xlarge'
            open={props.open}
            onClose={props.onClose}
            >
            <Box sx={{flex: 1, height: '400px', maxHeight: '500px', display: 'flex'}}>
                <Box sx={{flex: 1, width: '50%', display: 'flex', '& > *': {flex: 1}}}>
                    <FileViewer 
                        
                        files={file ? [file] : []}
                        />
                </Box>
                <Box sx={{
                    flex: 1, 
                    width: '50%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    padding: '6px'
                }}>
                    <Text>{file?.name}</Text>
                    <Text>Uploaded at {file?.createdAt} by {file?.uploadedBy?.name}</Text>
                    <Text>{file?.organisation?.name}</Text>
                </Box>
            </Box>
        </BaseModal>
    )
}