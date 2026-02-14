welcomeMessage();

// Welcome Message Function
function welcomeMessage() {
    // Show Popup
    let name = prompt("Welcome to Hungry Corndog Website! What is your name?");

    // validate input
    if (name == null || name.trim() === "") {
        // If user cancels or enters an empty name, use "Guest" as default
        name = "Guest";
    }

    // Display Welcome Message
    document.getElementById('welcome-speech').innerHTML = `Hello, ${name}! 
    Welcome to Hungry Corndog Website.`;
}

function validateForm() {
    const name = document.getElementById('name-input').value;
    const birth = document.getElementById('birth-input').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById ('message-input').value;

    const now = new Date();
    document.getElementById('current-time').innerText = now.toString();

    document.getElementById('res-name').innerText = name;
    document.getElementById('res-birth').innerText = birth;
    document.getElementById('res-gender').innerText = gender;
    document.getElementById('res-message').innerText = message;
    
    return false;
 }