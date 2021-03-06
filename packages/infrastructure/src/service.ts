import * as k8s from '@pulumi/kubernetes'
import { Provider } from '@pulumi/kubernetes'
import { Config } from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'

export const Service = async (provider: Provider, zone: aws.route53.GetZoneResult, domainName: string) => {
    const config = new Config();

    let suffix = config.require('suffix');

    const appName = `hive-files-${suffix}`;
    const appLabels = { appClass: appName };


    const sslCert = new aws.acm.Certificate(`${appName}-ssl-certif`, {
        domainName: domainName,
        // subjectAlternativeNames: [domainName],
        validationMethod: "DNS"   
    })

    const certValidation = new aws.route53.Record(`${appName}-certValidation`, {
        name: sslCert.domainValidationOptions[0].resourceRecordName,
        zoneId: zone.id,   
        type: sslCert.domainValidationOptions[0].resourceRecordType,
        records: [sslCert.domainValidationOptions[0].resourceRecordValue],
        ttl: 60
    })

    const sslValidation = new aws.acm.CertificateValidation(`${appName}-ssl-cert-validation`, {
        certificateArn: sslCert.arn,
        validationRecordFqdns: [certValidation.fqdn] //exampleRecord.map((rec) => rec.fqdn)
    })


    const service = new k8s.core.v1.Service(`${appName}-svc`, {
        metadata: { 
            name: `${appName}-svc`,
            labels: appLabels,
            annotations: {
        
                'service.beta.kubernetes.io/aws-load-balancer-ssl-cert': sslValidation.certificateArn,
                'service.beta.kubernetes.io/aws-load-balancer-ssl-ports': 'https',
                'service.beta.kubernetes.io/aws-load-balancer-backend-protocol': 'http',

                'service.beta.kubernetes.io/aws-load-balancer-type': 'external',
                'service.beta.kubernetes.io/aws-load-balancer-nlb-target-type': 'ip',
                'service.beta.kubernetes.io/aws-load-balancer-scheme': 'internet-facing'
            }
        },
        spec: {
            type: "LoadBalancer",
            ports: [{ port: 80, targetPort: "http", name: 'http' }, { port: 443, targetPort: "http", name: 'https'}],
            selector: appLabels,
        },
    }, { provider: provider });


    // Export the URL for the load balanced service.
    const url = service.status.loadBalancer.ingress[0].hostname;

    const filesRecord = new aws.route53.Record(`${appName}-gateway-dns`, {
        zoneId: zone.zoneId,
        name: domainName,
        type: "A",
        aliases: [{
            name: url,
            zoneId: 'ZCT6FZBF4DROD',
            evaluateTargetHealth: true
        }]   
    })

    // const service = new k8s.core.v1.Service(`${appName}-svc`, {
    //     metadata: { 
    //         labels: appLabels,
    //         name: `${appName}-svc`,
    //         annotations: {
    //             // 'service.beta.kubernetes.io/aws-load-balancer-ssl-cert': sslCert.arn,
    //             // 'service.beta.kubernetes.io/aws-load-balancer-ssl-ports': 'https',
    //             // 'service.beta.kubernetes.io/aws-load-balancer-backend-protocol': 'http',
    //             // 'service.beta.kubernetes.io/aws-load-balancer-type': 'internal',
    //             // 'service.beta.kubernetes.io/aws-load-balancer-nlb-target-type': 'ip',
    //             // 'service.beta.kubernetes.io/aws-load-balancer-scheme': 'internet-facing',
    //         }
    //     },
    //     spec: {
    //         type: "ClusterIP",
    //         ports: [{ name: "http", port: 80, targetPort: "http" }],
    //         selector: appLabels,
    //     },
    // }, { provider: provider });

    return service
}