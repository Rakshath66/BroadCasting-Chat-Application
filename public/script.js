// function createConnection(){
    // const socket = io();
// }
const socket = io();//connection form
const sendBtn=document.getElementById("sendBtn");
const messageInput=document.getElementById("message");
const allMessages=document.getElementById("messages");

let flag=0;
socket.on("message", (message) => {
    const div=document.createElement('div');
    const p=document.createElement('p');

    if(flag==1){div.style.backgroundColor="#E2DFD2"; div.style.color="black"; div.style.textAlign="center"}
    else{div.style.textAlign="center"}
    flag=!flag;

    p.innerText=message;
    div.appendChild(p);
    allMessages.appendChild(div);//show mess in div

    //   Assigning 5 different colors 
    // const div=document.createElement('div');
    // const p=document.createElement('p');
    // if(flag%5==0){div.style.backgroundColor="blue";}
    // else if(flag%5==1){div.style.backgroundColor="white";}
    // else if(flag%5==2){div.style.backgroundColor="green";}
    // else if(flag%5==3){div.style.backgroundColor="red";}
    // else{}
    // flag++;
    // p.innerText=message;
    // div.appendChild(p);
    // div.style.flex="center";
    // allMessages.appendChild(div);//show mess in div
});//if backend sends any message named mess, do this

sendBtn.addEventListener("click", (e) => {
    const message=messageInput.value;
    console.log(message);
    socket.emit("user-message", message);//frontend to server
})
