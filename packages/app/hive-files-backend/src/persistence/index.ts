import { S3 } from 'aws-sdk'

export class PersistenceEngine {
    
    private s3 : S3;

    private bucketName: string;

    constructor(bucketName: string){
        this.bucketName = bucketName;
        this.s3 = new S3({apiVersion: '2006-03-01'});
    }

    
    async writeObject(key: string, data: Buffer){

        console.log(`Writing ${key} with length ${data.byteLength}`);
        
        const bucket = this.s3.putObject({
            Bucket: this.bucketName,
            Key: key,
            Body: data
        }).promise()
        return await bucket;
    }

    async readObject(key: string, expires?: number){
        const item = this.s3.getSignedUrl("getObject", {
            Bucket: this.bucketName,
            Key: key,
            Expires: expires || 3600
        })

        return item;
    }

    async getObject(key: string){
        const object = this.s3.getObject({
            Bucket: this.bucketName,
            Key: key
        }).promise();

        return await object
    }

    async deleteObject(key: string){
        const deleted = this.s3.deleteObject({
            Bucket: this.bucketName,
            Key: key
        }).promise()
        return await deleted;
    }


}