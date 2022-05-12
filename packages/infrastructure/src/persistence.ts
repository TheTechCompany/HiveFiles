import * as aws from '@pulumi/aws'
import { Config } from '@pulumi/pulumi'

export const Persistence = () => {
    const config = new Config();

    const suffix = config.get('suffix');

    const bucket = new aws.s3.Bucket(`hive-files-storage-${suffix}`)

    return bucket;
}