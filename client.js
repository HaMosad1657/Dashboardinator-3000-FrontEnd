const Client = () => {
    let url = "localhost:8888";
    let client = new WebSocket(url);

    client.addEventListener("open", ()=>{
        //server connect print shit idk
        console.log("connected");
    })

    client.addEventListener("close", ()=>{
        //server disconnected
        console.log("disconected");
        client = null;
    })
}

export default Client;