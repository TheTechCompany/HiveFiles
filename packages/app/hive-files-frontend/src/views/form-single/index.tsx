import { FormBuilder } from '@hexhive/ui';
import { Box, Paper } from '@mui/material';
import React from 'react';

export const FormSingle = () => {
    return (
        <Paper sx={{flex: 1, display: 'flex'}}>
            <FormBuilder
                form={[]}
                onFormChange={(form) => {
                
                }}
                />
        </Paper>
    )
}