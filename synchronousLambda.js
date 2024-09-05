const AWS = require('aws-sdk');
AWS.config.update({
    region: 'ap-south-1'
})

const lambda = new AWS.Lambda();

async function lambdaInvoke() {
    const requestPayload = {
        "key1": "SyncInocation",
        "key2": "SyncInocation",
        "key3": "SyncInocation"
    }
    let params = {
        FunctionName: 'my-first-fun',
        InvocationType: "RequestResponse",  // Synchronous Invocation
        Payload: JSON.stringify(requestPayload)
    };
    try {
        //   const startTime = new Date();
        const response = await lambda.invoke(params).promise();
        //   const endTime = new Date();
        const data = JSON.parse(response.Payload);
        console.log('Response:', data);
    } catch (err) {
        console.error('Error invoking Lambda function:', err);
    }
}
lambdaInvoke();
