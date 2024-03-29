//____________________________
//Program   : GetExternalIP.js
//Author    : Ben Morgan
//Date      : 02/21/2022
//Purpose   : Get external IP address, display it, and copy it to the clipboard.
//            More info here: https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript
//Updated   : 07/18/2023 - update copy to clipboard function to use document.execCommand
//Last Run  :   
//____________________________


function getIP() {
   fetch('https://ipinfo.io/json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var ipinfo = data;
        var result = '';
        
        textToClipboard(data.ip); 
        
        result +='IP: ' + data.ip + '<br>';
        result +='City: ' + data.city + '<br>';
        result +='Region: ' + data.region + '<br>';
        result +='Country: ' + data.country + '<br>';
        result +='Loc: ' + data.loc + '<br>';
        result +='Org: ' + data.org + '<br>';
        result +='Postal: ' + data.postal + '<br>';
        result +='Timezone: ' + data.timezone + '<br>';      
        
        document.getElementById("Result").innerHTML = result;
                
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });

}

function textToClipboard (txt) 
{
    // copy input text to clipboard
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = txt;
    dummy.select();
    // navigator.clipboard.writeText(txt);
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function showConfirm()
{
    // show copy confirmation on button click
    divConf = document.getElementById("copyConfirm");
    divConf.style.display = "block";
}

function clickWrapper()
{
    // handle button click separately from basic load
    getIP();
    showConfirm();
    
}