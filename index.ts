import signalR from "@microsoft/signalr";

let connection = new signalR.HubConnectionBuilder()
    .withUrl("/chat")
    .build();

connection.on("send", data => {
    console.log(data);
});

connection.start()
    .then(() => connection.invoke("send", "Hello"));