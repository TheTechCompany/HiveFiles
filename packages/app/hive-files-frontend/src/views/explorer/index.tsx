import React, { useEffect, useState, useCallback } from 'react';
import { Text, Box, Collapsible, Spinner } from 'grommet'
import { gql, useQuery, useApolloClient } from '@apollo/client';
import { useMemo } from 'react';
import { uploadFiles } from '../../actions';
import { Folder, Download, CloudComputer, Inspect } from 'grommet-icons';
import { FolderModal } from '../../components/folder-modal';
import { ConvertModal } from '../../components/convert-modal';
import { SidePane } from './side-pane';
import {  GLBPreview } from './previews/GLB'
import { nanoid } from 'nanoid';
import { useRef } from 'react';
import { PDFPreview } from './previews/PDF';
import { Duration, differenceInSeconds, intervalToDuration, formatDuration } from 'date-fns'
// import { addFolder, runWorkflow } from '../../actions/filesystem';
import { useAuth } from '@hexhive/auth-ui';
import { Explorer as FileExplorer } from '../../components/explorer'
import { useParams, useNavigate } from 'react-router-dom'

export const Explorer: React.FC<{}> = (props) => {
   
    const {id} = useParams<{id: string}>()
   
    const navigate = useNavigate();

    const parentRef = useRef<{id?: string}>({id: undefined})
    const [ parentId, _setParentId ] = useState<string>()

    const setParentId = (id: string) => {
        parentRef.current.id = id;
        _setParentId(id)
    }

    useEffect(() => {
        console.log(id)
        if(id) setParentId(id)
    }, [id])

    return (
        <FileExplorer
            onNavigate={(path) => {
                setParentId(path.id)
                navigate(path.path)
            }}
            parentId={parentId} />
    )
}