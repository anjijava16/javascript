function getTest(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/",
        headers: {
            "Authorization": "sso-key SVSNKTZD_Gagrotyae4NN6mDrA41Gme:GagvVxVZwPUkwnbLiRczkp",
            "X-Shopper-Id": "307684",
            "Accept": "application/json"
        },
        success: function(body) { console.log(body) }
    });
}

function postTest(){
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/signup",
        headers: {
        },
        data: {
            "email" : "tom@gmail.com",
            "name" : "Tom"
        },
        success: function(body) { console.log(body) }
    });
}
