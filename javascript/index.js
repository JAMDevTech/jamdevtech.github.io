export default function sendWebhookMessage(name, email, message) {
    // This function sends a message to a webhook URL using AJAX (Fetch API)
    // Replace the webhook URL with your actual webhook endpoint
    // Ensure that the URL is correct and accessible from your environment

    const webhookUrl = 'https://hooks.airtable.com/workflows/v1/genericWebhook/appOZXTTPET0Dg4jf/wfl1fkkO7erkb0S8s/wtrCPe7NzVbv8qJS8';
    const messagePayload = {
        "records": [
            {
                "fields": {
                    "Name": name,
                    "Email": email,
                    "Description": message
                }
            }
        ]
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(messagePayload),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Or response.text() if the webhook doesn't return JSON
    })
    .then(data => {
        console.log('Webhook message sent successfully:', data);
    })
    .catch(error => {
        console.error('Error sending webhook message:', error);
    });
}