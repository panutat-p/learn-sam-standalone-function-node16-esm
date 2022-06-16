import { ListBucketsCommand, S3Client } from '@aws-sdk/client-s3';

const client = new S3Client({ region: 'ap-southeast-1' });

const command = new ListBucketsCommand({});

export async function handler() {
  // await new Promise((r) => setTimeout(r, 2000));
  try {
    const response = await client.send(command);
    console.info(`Total: ${response.Buckets?.length}`);
    return {
      statusCode: 200,
      body: response.Buckets,
    };
  } catch (e) {
    console.log(e);
    throw e;
  }
}
