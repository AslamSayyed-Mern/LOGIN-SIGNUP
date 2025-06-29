function handleLogin(event) {
    event.preventDefault();
    
    let user_name = document.getElementById("user_name").value;
    let user_password = document.getElementById("user_password").value;
    
    if (!user_name || !user_password) {
        alert("Please fill in all fields!");
        return;
    }

    console.log(user_name, user_password);

    let reg_user_list = window.localStorage.getItem("users");
    
    if (!reg_user_list) {
        alert("No users found. Please register first!");
        return;
    }

    // Converting string data to object
    reg_user_list = JSON.parse(reg_user_list);
    console.log(reg_user_list);
    
    let user_found = false;
    reg_user_list.forEach((v) => {
        if (user_name == v.name && user_password === v.password) {
            alert("Login successful!");
            user_found = true;
        }
    });
    
    if (user_found == true) {
        window.location.href = "FakeStore-JavaScript/index.html";
    } else {
        alert("Invalid credentials!");
    }
}
