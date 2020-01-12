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

let amountDue = 0;
let scrapedAmt = 0;

$(document).ready(function() {
    $('.upload-btn').click(function() {
        $.get('http://localhost:8080/getData', function (data) {
        })
        .done(function (response) {
            $("#amt-confirmation").css("display", "inline-block");
            $("#amt-scanned").text("We scanned: $" + response.Actualtotal + " - Is this correct?")
            scrapedAmt = parseFloat(response.Actualtotal);
        })
    })
    $('.pay-btn').click(function() {
        $('#card-1-amt-due').text("Amount Due: $" + (amountDue - parseFloat($('#amt-paid').val())));
        amountDue -= parseFloat($('#amt-paid').val());
        if (amountDue >= 0) {
            $('#credit-score').text("Credit Score: 720");
            $('#forest-img').attr("src", "img/portfolio/block2.png");
        }
    })

    $('input[name=yesno]:checked', '#yesno-form').on('change', function() {
        console.log($('input[name=yesno]:checked', '#yesno-form').val());
    });

    // $('resubmit-btn').click(function() {
    //     e.preventDefault();

    //     // let amt = parseFloat($('resubmit-amt').val());
    //     // amountDue += amt;
    //     // $('#card-1-amt-due').text("Amount Due: $" + amountDue);
    //     console.log("clicked")
    // })

    $('#yes-btn').click(function() {
        $('#card-1-amt-due').text("Amount Due: $" + scrapedAmt);
        amountDue += scrapedAmt;
        $("#amt-confirmation").css("display", "none");
    })

    $('#no-btn').click(function() {
        scrapedAmt = parseFloat($("#resubmit-amt").val());
        $('#card-1-amt-due').text("Amount Due: $" + scrapedAmt);
        amountDue += scrapedAmt;
        $("#amt-confirmation").css("display", "none");
    })
});

// increase credit score
// update value

