import React, { useEffect, useState, useCallback } from 'react';
import { Text, Box, Collapsible, Spinner } from 'grommet'
import { FileExplorer } from '@hexhive/ui';
import { gql, useQuery as useApollo, useApolloClient, ApolloClient, InMemoryCache, useMutation } from '@apollo/client';
import { useMemo } from 'react';
import { uploadFiles } from '../../actions';
import { Folder, Download, CloudComputer, Inspect } from 'grommet-icons';
import { FolderModal } from '../../components/folder-modal';
import { ConvertModal } from '../../components/convert-modal';
import {  GLBPreview } from './previews/GLB'
import { nanoid } from 'nanoid';
import { useRef } from 'react';
import { PDFPreview } from './previews/PDF';
import { Duration, differenceInSeconds, intervalToDuration, formatDuration } from 'date-fns'
// import { addFolder, runWorkflow } from '../../actions/filesystem';
import { useAuth } from '@hexhive/auth-ui';
import { PreviewModal } from '../preview-modal';

export const Explorer: React.FC<{
	parentId?: string;
    
    application?: string;
    mountPath?: string;

	onNavigate: (path: {id: string, path: string}) => void;
	apolloClient?: ApolloClient<InMemoryCache>
}> = ({
	onNavigate,
	parentId,
	apolloClient,
    
    application,
    mountPath
}) => {

    const [ explorerPath, setExplorerPath ] = useState('/')

    console.log(application, mountPath)

    const { activeUser } = useAuth()
    const [ inspector, setInspector ] = useState<boolean>(false)

    // const [ previewModalOpen, openPreviewModal ] = useState(false);
    const [ preview, setPreview ] = useState<any>(null);
    console.log(parentId)

    const UPLOAD_FILE = gql`
        mutation SingleUpload($path: String!, $file: [Upload]!) {
            uploadFiles(path: $path, files: $file){
                name
            }
        }
    `;

    const MAKE_DIR = gql`
        mutation MakeDir($path: String!, $name: String!) {
            createDirectory(path: $path, name: $name){
                name
            }
        }
    `;

    const DELETE_FILE = gql`
        mutation DeleteFile($path: String){
            deleteFile(path: $path){
                id
            }
        }
    `;

    const RENAME_FILE = gql`
        mutation RenameFile($path: String, $name: String){
            renameFile(path: $path, newName: $name){
                id
            }
        }
    `;

    const [ deleteFile ] = useMutation(DELETE_FILE);
    const [ renameFile ] = useMutation(RENAME_FILE);

    const [ uploadFiles ] = useMutation(UPLOAD_FILE, {
        context: {
            fetchOptions: {
                onUploadProgress: ((progress: any) => {
                    let percent = (progress.loaded / progress.total) * 100;

                    uploading.current.loading?.forEach((item, ix) => {
                        (uploading.current.loading || [])[ix].percent = percent;
                    })
                    console.info("Upload", {percent})
                })
            }
        }
    })

    const [ createDirectory ] = useMutation(MAKE_DIR);

    useEffect(() => {
        if(application && mountPath){
            console.log("INIT")
            // const d = resolved(() => {
            //     return {...query.resolveFS({appId: application, mountPath})}
            // })

            // d.then((data) => {
            //     if(data.id){
            //         onNavigate({
            //             id: data.id,
            //             path: `/explore/${data.id}`
            //         })       
            //     }
            // })
        }
    }, [application, mountPath])

    const exploreFolder = (folderId: string) => {

        console.log("EXPLORE", folderId)
        if (folderId && folderId != "null") {
			onNavigate({id: folderId, path: `/explore/${folderId}`})
        } else {
            // onNavigate({id: undefined, path: `/`})
        }
    }

    const previewFile = (file: any) => {
        setPreview(file);
    }

    const client = apolloClient || useApolloClient()

    const toggleInspector = () => {
        setInspector(!inspector)
    }
    const actions = [
    {
        key: "Inspector",
        icon: <Inspect />,
        onClick: () => toggleInspector()
    },
    {
        key: "Create Folder",
        icon: <Folder />,
        onClick: () => openFolderModal(true)
    }, {
        key: "Download",
        icon: <Download />,
        disabled: () => {
            return selected.length < 1
        }
    }
    // {
    //     key: "Convert",
    //     icon: <CloudComputer />,
    //     onClick: () => openConvertModal(true),
    //     disabled: () => {
    //         return selected.length < 1
    //     }
    //}
]
    const [selected, setSelected] = useState<string[]>([])

    const [folderModal, openFolderModal] = useState<boolean>(false);
    const [convertModal, openConvertModal] = useState<boolean>(false);

    // const [ files, setFiles ] = useState<any[]>([])

    const [breadcrumb, setBreadcrumb] = useState<{ ids: string, names: string }>({ ids: '', names: '' })
    // const files = query.hiveFiles({where: {fs: {name: 'Shared FS'}}})

    const uploading = useRef<{loading?: {id?: string, name?: string, percent?: number}[]}>({loading: []})

    // const [ _uploading, _setUploading ] = useState<any[]>();

    const setUploading = (items: any[]) => {
        uploading.current.loading = items;
        // _setUploading(items)
    }
    
    // const [ newFolder, newFolderInfo ] = useMutation(addFolder, {
    //     onCompleted(data) { },
    //     onError(error) { },
    //     refetchQueries: [],
    //     awaitRefetchQueries: true,
    //     suspense: false,
    // })

    // const [ startFlow, startFlowInfo ] = useMutation(runWorkflow, 
    //     {
    //         onCompleted(data) { },
    //         onError(error) { },
    //         refetchQueries: [],
    //         awaitRefetchQueries: true,
    //         suspense: false,
    //     })

    // let query = useQuery({
    //     suspense: false,
    //     staleWhileRevalidate: true
    // })


    /*
hiveFiles(where: ${parentId && parentId != "null" ? `{id: "${parentId}"}` : `{parent: null }`}){
            id
            name
            path
            mimetype
            size
            isFolder
            path_id
            cid
            convertedFrom {
                id
                
            }

            conversions {
                createdAt
                completedAt

                pipeline {
                    id
                    name
                }
            }
            views {
                id
                cid
                name
            }
            children {
                id
                name
                mimetype
                size

                isFolder
                path
                cid
                views {
                    id
                    cid
                    name
                }
                convertedFrom{
                    id
                }
                conversions {
                    createdAt
                    startedAt
                    completedAt
    
                    pipeline {
                        id
                        name
                    }
                }
            }
        }


              hiveOrganisations(where: {name: "Guaranteed Flow Systems"}){
            files {
                ... on File {
                    id
                    name
                }
                ... on Folder {
                    id
                    name
                }   
            }
        }
    */
    const { data } = useApollo(gql`
      query GET_FILES($path: String!) {

        cwd:files(path: $path){
            id
            name
            
            size

            directory

            createdAt
        }
  
      }
    `, { variables: {path: explorerPath} })

    const files = data?.cwd || []; //hiveOrganisations?.[0]?.files;
    
    console.log({data})

    // const files = useMemo(() => {
    //     return parentId && parentId != "null" ? 
    //         ( data?.hiveFiles?.[0]?.isFolder ? 
    //                 data?.hiveFiles?.[0]?.children || [] : 
    //             (data?.hiveFiles?.[0] ? 
    //                 data?.hiveFiles?.[0] : undefined )) 
    //         : data?.hiveFiles

    // }, [data, parentId])

    const fetchFiles = () => {
        client.refetchQueries({ include: ["GET_FILES"] })
    }


    useEffect(() => {
    
        fetchFiles();

    }, [parentId])

    const breadcrumbs = useMemo(() => {

        if (data?.hiveFiles?.[0] && parentId && parentId != "null") {
            let file = data?.hiveFiles?.[0];
            let crumb_name = file?.path?.split('/')
            let crumb_id = file?.path_id?.split('/')

            return [] // (crumb_name || []).map((x, ix) => ({ id: crumb_id[ix], name: x }))
        } else {
            return [{ id: "null", name: "/Shared FS" }]
        }
        return []
    }, [data])

    const onDrop = useCallback((files: File[]) => {
   
            let ids = breadcrumb.ids.split('/')
            console.log(ids)
            let uploads = uploading.current.loading?.slice()
            
            let id = nanoid();
            uploads = uploads?.concat(files.map((x) => ({id: id, name: x.name, percent: 0})));

            console.log("Uploading with slug", parentId) //ref.current.id)
            setUploading(uploads || [])

            console.log({files})
            

            uploadFiles({variables: {path: explorerPath, file: files}}).then((resp) => {
                fetchFiles()
                console.log(resp)
            })
            // uploadFiles(files, (progress) => {
            //      let u = uploading.current.loading.slice()
            //      u = u.map((x) => {
            //          if(x.id === id){
            //              x.percent = progress * 100;
            //          }
            //          return x;
            //      })
            //      setUploading(u)
            // }, parentId).then((response) => {
            //     console.log(response)
            //     fetchFiles()
            // })
    }, [parentId, explorerPath])


    return (
        <Box
            round="xsmall"
            flex>

            <PreviewModal 
                open={Boolean(preview)}
                selected={preview}
                onClose={() => {
                    setPreview(null)
                }} />
           
            <ConvertModal
                onSubmit={(folder) => {
                    console.log(folder)
                    // startFlow({args: {
                    //     files: files?.filter((a) => selected?.indexOf(a.id) > -1),
                    //     pipeline: folder.workflow
                    // }}).then(() => {
                    //     openConvertModal(false)
                    // })
                }}
                files={Array.isArray(files) ? files?.filter((a) => selected?.indexOf(a?.id) > -1) : [files]}
                onClose={() => openConvertModal(false)}
                open={convertModal} />
            <Box
                round="xsmall"
                flex
                direction="row">

            <FileExplorer
                path={explorerPath}
                onNavigate={(path) => {
                    setExplorerPath(path)
                    // console.log({id})
                }}
                onCreateFolder={(folderName) => {
                    createDirectory({
                        variables: {
                            path: explorerPath, 
                            name: folderName
                    }}).then(() => {
                        fetchFiles();
                    })
                }}
                onRename={(file, newName) => {
                    renameFile({
                        variables: {
                            path: `${explorerPath}/${file.name}`,
                            name: newName
                        }
                    }).then(() => {
                        fetchFiles();
                    })
                }}
                onDelete={(file) => {
                    deleteFile({
                        variables: {
                            path: `${explorerPath}/${file.name}`
                        }
                    }).then(() => {
                        fetchFiles();
                    })
                }}
                uploading={uploading.current.loading}
                previewEngines={[
                    {filetype: 'glb', component: GLBPreview},
                    {filetype: 'stp', component: GLBPreview},
                    {filetype: 'pdf', component: PDFPreview}
                ]}
                selected={selected}
                onSelect={(id) => {
                    setSelected([...selected, id])
                }}
                onDeselect={(id) => {
                    let s = selected.slice()
                    s.splice(s.indexOf(id), 1)
                    setSelected(s)
                }}
                actions={actions}
                onDrop={onDrop}
                   
                onClick={(file) => {
                    console.log({file})
                    previewFile(file)
                    // setSelected([])
                    // exploreFolder(file.id)
                }}
                files={files.map((file: any) => ({
                    ...file,
                    isFolder: file.directory
                }))} />
                <Collapsible 
                    direction="horizontal"
                    open={inspector}>
                    <Box 
                        gap="xsmall"
                        overflow="scroll" 
                        pad="xsmall" 
                        background="neutral-1" 
                        round="xsmall" 
                        elevation="small" 
                        width="small" 
                        height="100%">
                        {(Array.isArray(files) ? files?.filter((a) => selected.indexOf(a.id) > -1) : files ? [files] : []).map((file) => (
                            <Box overflow="hidden" round="xsmall" background="neutral-2" elevation="small">
                                <Box direction="row" background="accent-2" pad="xsmall"><Text>{file.name}</Text></Box>
                                {/* {file.conversions.map((x) => (
                                    <Box align="center" direction="row">
                                      {!x.completedAt &&  <Spinner size="small" />}
                                    <Box>
                                        <Text size="small">{x.pipeline?.name}</Text>
                                        <Text size="xsmall">{getDuration(x.startedAt, x.completedAt)}</Text>
                                    </Box>
                                    </Box>
                                ))} */}
                            </Box>
                        ))}
                    </Box>
                </Collapsible>
           
            </Box>
         
            {/* <BabylonViewer
          data={'2CylinderEngine.glb'}
          rootUrl={'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/2CylinderEngine/glTF-Binary/'} /> */}
        </Box>
    )
}