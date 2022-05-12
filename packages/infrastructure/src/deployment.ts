import { Provider } from '@pulumi/kubernetes'
import * as k8s from '@pulumi/kubernetes'
import { Config, Output, all } from '@pulumi/pulumi'

export const Deployment = async (provider: Provider, rootServer: string, dbUrl: Output<any>, dbPass: Output<any>, bucket: Output<any>) => {
    const config = new Config();

    let suffix = config.require('suffix');
    let imageTag = process.env.IMAGE_TAG 

    const appName = `hive-files-${suffix}`;
    const appLabels = { appClass: appName };
   
    const deployment = new k8s.apps.v1.Deployment(`${appName}-dep`, {
        metadata: { labels: appLabels },
        spec: {
            replicas: 1,
            strategy: { type: "RollingUpdate" },
            selector: { matchLabels: appLabels },
            
            template: {
                metadata: { labels: appLabels },
                spec: {
                    
                    containers: [{
                        imagePullPolicy: "Always",
                        name: appName,
                        image: `thetechcompany/hivefiles-backend:${imageTag}`,
                        ports: [{ name: "http", containerPort: 9013 }],
                        volumeMounts: [
                        ],
                        env: [
                            { name: 'NODE_ENV', value: 'production' },
                            { name: 'ROOT_SERVER', value: `http://${rootServer}` },
                            { name: 'VERSION_SHIM', value: '1.0.5' },
                            { name: 'BUCKET_NAME', value: bucket},
                            { name: "DATABASE_URL", value: all([dbUrl, dbPass]).apply(([url, pass]) => `postgresql://postgres:${pass}@${url}.default.svc.cluster.local:5432/hivefiles`) },

                            { name: 'AWS_SECRET_ACCESS_KEY', value: process.env.AWS_SECRET_ACCESS_KEY },
                            { name: 'AWS_ACCESS_KEY_ID', value: process.env.AWS_ACCESS_KEY_ID }
                        ],
                        readinessProbe: {
                            httpGet: {
                                path: '/graphql',
                                port: 'http'
                            }
                        },
                        // livenessProbe: {
                        //     httpGet: {
                        //         path: '/graphql',
                        //         port: 'http'
                        //     }
                        // }
                    }],
                    // volumes: [{
                    //     name: `endpoints-config`,
                    //     configMap: {
                    //         name: configMap.metadata.name,
                    //         items: [{
                    //             key: 'endpoints',
                    //             path: 'endpoints.json'
                    //         }]
                    //     }
                    // }]
                }
            }
        },
    }, { provider: provider });

    return deployment
}
