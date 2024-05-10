function showChatbot() {
    document.getElementById('chatbot').style.display = 'block';
    document.getElementById('qr').style.display = 'none';
}

function showQR() {
    document.getElementById('qr').style.display = 'block';
    document.getElementById('chatbot').style.display = 'none';
}

function clearChat() {
    document.getElementById('chatbox').value = '';
}

function deleteChat() {
    // Clear the chatbox
    clearChat();
    // Optionally, you can perform additional actions here
    alert('Chat deleted!');
}

function saveChat() {
    var chatContent = document.getElementById('chatbox').value;
    // Perform actions to save chat content, such as sending it to a server
    alert('Chat saved:\n' + chatContent);
}
