const AWS = require('aws-sdk');
AWS.config.update({
    region: 'ap-south-1'
});
const lambda = new AWS.Lambda();

async function lambdaInvoke() {
    const requestPayload = {
        "key1": "ASyncInocation",
        "key2": "ASyncInocation",
        "key3": "ASyncInocation"
    }
    let params = {
        FunctionName: 'asynch-demo',
        InvocationType: "Event",  // asynchronous Invocation
        Payload: JSON.stringify(requestPayload)
    }
    try {
        //   const startTime = new Date();
        const response = await lambda.invoke(params).promise();
        //   const endTime = new Date();
        const data = response.Payload;
        console.log('Response:', data);
    } catch (err) {
        console.error('Error invoking Lambda function:', err);
    }
}
lambdaInvoke();
