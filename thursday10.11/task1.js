let userArray = [];

function setData(data, userData) {
    if (userData == "userName") {
        userArray["userName"] = data;
        return (
            document.getElementById("userName").innerHTML = data,
            document.getElementById("userName").style.backgroundColor = "Green",
            setUserData(userArray)
        );
    } else if (userData == "userEmail") {
        userArray["userEmail"] = data;

        return (
            document.getElementById("userEmail").innerHTML = data,
            document.getElementById("userEmail").style.backgroundColor = "Red",
            setUserData(userArray)
        );
    } else {
        userArray["userNumber"] = data;

        return (
            document.getElementById("userNumber").innerHTML = data,
            document.getElementById("userNumber").style.backgroundColor = "Yellow",
            setUserData(userArray)
        );
    }
}
function setUserData(userData) {
    console.log(userData, 'UserArray');
    var rows = [
        {
            name: userData.userName,
            email: userData.userEmail,
            mobile: userData.userNumber,
        },
        // {
        //     name:"Abrar",
        //     email:"abrar@hotmail.com",
        //     mobile:"07777777777"
        // }
    ];
    var html = "<table  border='2'>";
    for (var i = 0; i < rows.length; i++) {
        html += "<tr>";
        html += "<td>" + rows[i].name + "</td>";
        if(rows[i].email)
        html += "<td>" + rows[i].email + "</td>";
        if(rows[i].mobile)
        html += "<td>" + rows[i].mobile + "</td>";
        html += "</tr>";

    }
    html += "</table>";
    document.getElementById("tableContainer").innerHTML = html;

}