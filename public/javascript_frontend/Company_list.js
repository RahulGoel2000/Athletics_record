var to_add_div=document.getElementById("to_add")
var docRef = db.collection("userAdmin").doc(clientID).collection("list_of_companies")
var clientID = sessionStorage.getItem("user");
if (clientID)
{
    db.collection("userAdmin").doc(clientID).collection("list_of_companies")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // var button=document.createElement("INPUT")?
            var x = document.createElement("INPUT");
            x.setAttribute("type", "button");
            // x.setAttribute("class","company_button");
            x.classList.add("company_button")
            x.value=doc.id;
            // x.onclick="redirection_function(this.id)"
            x.onclick=function() {
                redirection_function(this.value)
            };
            to_add_div.appendChild(x);
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);


    });

}


else
{
    sessionStorage.setItem("authenticated","false")
    sessionStorage.setItem("authenticated","false")
    document.cookie="authenticated=false";
    window.location.href=window.location.href;
}

    function redirection_function(company_id)
    {
        sessionStorage.setItem("Company",company_id)
        db.collection("userAdmin").doc(clientID).collection("list_of_companies")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.id==company_id)
                {
                    console.log(doc.data()["setup details"].xflipped)
                    sessionStorage.setItem("Host",doc.data().Host)
                    sessionStorage.setItem("Topic",doc.data().Topic)
                    sessionStorage.setItem("UserName",doc.data().UserName)
                    sessionStorage.setItem("Password",doc.data().Password)
                    sessionStorage.setItem("Port",doc.data().Port)
                    sessionStorage.setItem("xflipped",doc.data()["setup details"].xflipped)
                    sessionStorage.setItem("yflipped",doc.data()["setup details"].yflipped)
                    sessionStorage.setItem("scale_factor",doc.data()["setup details"].scale)
                    sessionStorage.setItem("originx",-1*doc.data()["setup details"].originx)
                    sessionStorage.setItem("originy",-1*doc.data()["setup details"].originy)
                    window.location="/visualiser"
                }

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
    

        });

    }

    function add_company_redirect()
    {
        window.location="/form"
    }
