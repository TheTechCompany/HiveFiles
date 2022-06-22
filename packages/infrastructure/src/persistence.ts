import * as aws from '@pulumi/aws'
import { Config } from '@pulumi/pulumi'

export const Persistence = () => {
    const config = new Config();

    const suffix = config.get('suffix');

    let origins: string[] = [];

    if(suffix == 'staging'){
        origins = ['staging.hexhive.io'];
    }else{
        origins = ['go.hexhive.io'];
    }

    const bucket = new aws.s3.Bucket(`hive-files-storage-${suffix}`, {
        corsRules: [
            {
                allowedOrigins: origins,
                allowedMethods: ["GET", "HEAD", "POST"]
            }
        ]
    })

    return bucket;
}