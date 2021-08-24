
function accept() {
    var req = document.getElementById("request1");
    req.remove();
    document.getElementById('number').innerHTML --;
    document.getElementById('numbers').innerHTML ++;
}

function reject() {
    var req = document.getElementById("request1");
    req.remove();
    document.getElementById('number').innerHTML --;
}

function accept2() {
    var req = document.getElementById("request2");
    req.remove();
    document.getElementById('number').innerHTML --;
    document.getElementById('numbers').innerHTML ++;
}

function reject2() {
    var req = document.getElementById("request2");
    req.remove();
    document.getElementById('number').innerHTML --;
}

function newme() {
    document.getElementById('name').innerHTML = "Any other name";
}