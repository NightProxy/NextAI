const API_ENDPOINT = 'https://api.openai.com/v1/completions';
const API_KEY = '';
const model = 'gpt-3.5-turbo';

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    
    // Send user input to the API
    fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            prompt: userInput,
            model:  model
        })
    })
    .then(response => response.json())
    .then(data => {
        // Log the response data to inspect its structure
        console.log(data);
        
        // Handle AI response
        if (data.choices && data.choices.length > 0) {
            displayResponse(data.choices[0].text);
        } else {
            console.error('No response or invalid response structure.');
        }
    })
    .catch(error => console.error('Error:', error));
}

function displayResponse(response) {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="ai-message">${response}</div>`;
}
