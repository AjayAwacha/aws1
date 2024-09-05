const AWS = require('aws-sdk');
AWS.config.update({
    region: 'ap-south-1'
})

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' }); 
const queueUrl = 'https://sqs.ap-south-1.amazonaws.com/654654182688/MyFirstQueue';

async function sendMessage(messageBody) {
    const params = {
        QueueUrl: queueUrl,
        MessageBody: JSON.stringify(messageBody)
    };

    try {
        const data = await sqs.sendMessage(params).promise();
        console.log('Message sent, ID:', data.MessageId);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}
sendMessage('Hello, SQS!');

