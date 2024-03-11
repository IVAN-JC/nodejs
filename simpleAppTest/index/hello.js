function ShowHelloMessage() {
    let name = document.getElementById("myname");
    document.getElementById("hellomessage").innerHTML = "Hello, " + name.value;
}

document.getElementById("mybutton").onclick = ShowHelloMessage;