import { gql, useQuery } from '@apollo/client';
import { BaseModal, FileDialog, FileViewer } from '@hexhive/ui';
import { Box } from '@mui/material';
import download from 'downloadjs';
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

    const downloadFile = async () => {
        const data = await fetch(file.url)
        const blob = await data.blob();
       
        download(blob, file.name, file.mimeType)
    }

    return (
        <FileDialog
            open={props.open}
            onClose={props.onClose}
            onDownload={downloadFile}
            files={file ? [file] : []}
            />
    )
}