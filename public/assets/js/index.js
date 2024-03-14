const API_ENDPOINT = 'your-api-endpoint';
const API_KEY = 'your-api-key';

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    
    fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            prompt: userInput,
        })
    })
    .then(response => response.json())
    .then(data => {
        displayResponse(data.choices[0].text);
    })
    .catch(error => console.error('Error:', error));
}
