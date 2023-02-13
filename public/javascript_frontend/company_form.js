// Called after form input is processed
var tag_coordinates={};
var host,port, pozyx_username, pozyx_password,mqtt_username,mqtt_password,topic,company_name,clientID;
// var client;

function startConnect() {
    // Generate a random client ID
    clientID = sessionStorage.getItem("user")+ parseInt(Math.random() * 100);
    console.log("Startconnected")

    // Fetch the hostname/IP address and port number from the form
    host = document.getElementById("host").value;
    port = document.getElementById("port").value;
    pozyx_username=document.getElementById("pozyx_username").value
    pozyx_password=document.getElementById("pozyx_password").value
    mqtt_username=document.getElementById("mqtt_username").value
    mqtt_password=document.getElementById("mqtt_password").value
    company_name=document.getElementById("company_name").value
    topic = document.getElementById("topic").value;

    register_company();
    // Print output for the user in the messages div
    // document.getElementById("messages").innerHTML += '<span>Connecting to: ' + host + ' on port: ' + port + '</span><br/>';
    // document.getElementById("messages").innerHTML += '<span>Using the following client value: ' + clientID + '</span><br/>';

    // Initialize new Paho client connection
    // client = new Paho.MQTT.Client(host, Number(port), clientID);

    // // Set callback handlers
    // client.onConnectionLost = onConnectionLost;
    // client.onMessageArrived = onMessageArrived;



    // Create a client instance
// client = new Paho.MQTT.Client(host, Number(port), clientID);

// // set callback handlers
// client.onConnectionLost = onConnectionLost;
// client.onMessageArrived = onMessageArrived;

// connect the client
// client.connect({onSuccess:onConnect});


// called when the client connects
// function onConnect() {
//   // Once a connection has been made, make a subscription and send a message.
//   console.log("onConnect");
//   client.subscribe("World");
//   message = new Paho.MQTT.Message("Hello");
//   message.destinationName = "World";
//   client.send(message);
// }

// // called when the client loses its connection
// function onConnectionLost(responseObject) {
//   if (responseObject.errorCode !== 0) {
//     console.log("onConnectionLost:"+responseObject.errorMessage);
//   }
// }

// // called when a message arrives
// function onMessageArrived(message) {
//   console.log("onMessageArrived:"+message.payloadString);
// }
// console.log("username",mqtt_username)

    // var details = { 
    //     // clientId: '5f07680e66f23b6fe65dbac9',
    //     onSuccess : onConnect,
    //     userName: mqtt_username,
    //     password: mqtt_password,
    //     useSSL: true,
    //     cleanSession : false
    // }
    // // Connect the client, if successful, call onConnect function
    // client.connect(details);
    
}

// Called when the client connects
// function onConnect() {
//     // Fetch the MQTT topic from the form
//     topic = document.getElementById("topic").value;

//     // Print output for the user in the messages div
//     // document.getElementById("messages").innerHTML += '<span>Subscribing to: ' + topic + '</span><br/>';
//     console.log("connected")
//     // Subscribe to the requested topic
//     client.subscribe(topic);
//     startDisconnect();
// }

// Called when the client loses its connection
// function onConnectionLost(responseObject) {
//     console.log("onConnectionLost: Connection Lost");
//     // alert("connection Lost");
//     if (responseObject.errorCode !== 0) {
//         console.log("onConnectionLost: " + responseObject.errorMessage);
//     }
// }

// Called when a message arrives
// function onMessageArrived(message) {
//     console.log("onMessageArrived: " + message.payloadString);
//     data_json=JSON.parse(message.payloadString);
//     var index=Object.keys(data_json).length
//     while(index!=0)
//     {
//       index=index-1;
//       tag_coordinates[data_json[index].tagId] = data_json[index].data.coordinates;
//       console.log("rahul");
//       console.log(tag_coordinates);
//     } 
    
//     console.log(Object.keys(tag_coordinates));
    // startDisconnect();
    

    // document.getElementById("messages").innerHTML += '<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>';
    // updateScroll(); // Scroll to bottom of window
// }

// Called when the disconnection button is pressed
// function startDisconnect() {
//     client.disconnect();
//     console.log("disconnect")
    
//     // document.getElementById("messages").innerHTML += '<span>Disconnected</span><br/>';
//     // updateScroll(); // Scroll to bottom of window
// }

// Updates #messages div to auto-scroll
// function updateScroll() {
//     var element = document.getElementById("messages");
//     element.scrollTop = element.scrollHeight;
// }