import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';


export interface FormModalProps {
    open: boolean;
    onClose?: () => void;
    onSubmit?: (name: string) => void;
}

export const FormModal : React.FC<FormModalProps> = (props) => {

    const [ name, setName ] = useState('');

    const submit = () => {
        props.onSubmit?.(name);
        setName('')
    }

    return (
        <Dialog 
            maxWidth='md'
            open={props.open} 
            onClose={props.onClose}>
            <DialogTitle>
                Create Form
            </DialogTitle>
            <DialogContent>
                <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', marginTop: '6px'}}>
                    
                    <TextField 
                        size="small"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Name" />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>
                    Close
                </Button>
                <Button onClick={submit} variant='contained'>
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}