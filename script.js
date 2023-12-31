window.addEventListener("load",checkInternetConnection)

function checkInternetConnection(){
    const statusText= document.getElementById("statusText")
    const networkText= document.getElementById("networkStrengthText")
    const ipAddressText= document.getElementById("ipAddressText")

    statusText.innerText=" Checking..."

    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=> response.json())
        .then((data)=>{
            ipAddressText.innerText=data.ip;
            statusText.innerText="Connected"

            const connection =navigator.connection;

            const networkStrength = connection?connection.downlink + 'Mbps' : ' unknown'
            networkText.innerText=networkStrength
        })

    }else{
        statusText.innerText=" Disconnected"
        networkText.innerText=" --"
        ipAddressText.innerText=" --"
    }
}
