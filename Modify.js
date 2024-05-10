function saveChat() {
    var chatContent = document.getElementById('chatbox').value;
    
    // Send AJAX request to save chat content
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://your-azure-server.com/save-chat", true); // Replace with your server URL
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Handle successful response from server
            alert('Chat saved successfully!');
        } else {
            // Handle error or failure response from server
            alert('Error saving chat!');
        }
    };
    xhr.send(JSON.stringify({ content: chatContent }));
}
