function register_company()
{
    // host = document.getElementById("host").value;
    // port = document.getElementById("port").value;
    // pozyx_username=document.getElementById("pozyx_username").value
    // pozyx_password=document.getElementById("pozyx_password").value
    // mqtt_username=document.getElementById("mqtt_username").value
    // mqtt_password=document.getElementById("mqtt_password").value
    // company_name=document.getElementById("company_name").value
    clientID1 = sessionStorage.getItem("user")
    db.collection("userAdmin").doc(clientID1).collection("list_of_companies").doc(company_name).set({
        Name:pozyx_username,
        Roll:pozyx_password,
        Topic:topic,
        Port:port,
        Host:host,
        UserName: mqtt_username,
        Password: mqtt_password
    })
    .then((docRef) => {
        console.log("Document written with ID: ", clientID);
        window.location="/home"
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    
    
}