const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const themeBtn = document.getElementById("themeBtn");

let messages =
JSON.parse(localStorage.getItem("messages")) || [];

function saveMessages() {
    localStorage.setItem(
        "messages",
        JSON.stringify(messages)
    );
}

function renderMessages() {

    chatBox.innerHTML = "";

    messages.forEach((msg, index) => {

        const div = document.createElement("div");
        div.classList.add("message");

        div.innerHTML = `
            ${msg.text}
            <span class="time">${msg.time}</span>
            <span class="delete-btn" onclick="deleteMessage(${index})">
                ❌
            </span>
        `;

        chatBox.appendChild(div);
    });

    chatBox.scrollTop = chatBox.scrollHeight;
}

function addMessage() {

    const text = messageInput.value.trim();

    if(text === "") return;

    const now = new Date();

    const time =
        now.getHours() +
        ":" +
        String(now.getMinutes()).padStart(2,"0");

    messages.push({
        text,
        time
    });

    saveMessages();
    renderMessages();

    messageInput.value = "";
}

function deleteMessage(index){

    messages.splice(index,1);

    saveMessages();
    renderMessages();
}

sendBtn.addEventListener("click", addMessage);

messageInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        addMessage();
    }
});

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
    );
});

if(localStorage.getItem("theme") === "true"){
    document.body.classList.add("dark");
}

renderMessages();

window.deleteMessage = deleteMessage;