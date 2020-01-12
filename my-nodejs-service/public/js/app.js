// document.getElementById("upload-btn").onclick(function() {
//     console.log("clicked")
//     // using XMLHttpRequest
//     // let xhr = new XMLHttpRequest();
//     // xhr.open("GET", "http://localhost:8080/getData", true); xhr.onload = function () {
//     //     console.log(xhr.responseText);
//     // }; xhr.send();
//     $.get('http://localhost:8080/getData', function (data) {
//         $(".result").html(data);
//     })
//     .done(function (response) {
//         console.log(response);
//     })
// })

$(document).ready(function() {

    $('#upload-btn').click(function() {
        // using XMLHttpRequest
        // let xhr = new XMLHttpRequest();
        // xhr.open("GET", "http://localhost:8080/getData", true); xhr.onload = function () {
        //     console.log(xhr.responseText);
        // }; xhr.send();
        $.get('http://localhost:8080/getData', function (data) {
            // $(".result").html(data);
        })
        .done(function (response) {
            console.log(response);
        })
    })

});
