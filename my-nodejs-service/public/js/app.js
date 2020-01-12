let amountDue = 0;
let scrapedAmt = 0;

$(document).ready(function () {
    $('.upload-btn').click(function () {
        $.get('http://localhost:8080/getData', function (data) {})
            .done(function (response) {
                $("#amt-confirmation").css("display", "inline-block");
                $("#amt-scanned").text("We scanned: $" + response.Actualtotal + " - Is this correct?")
                scrapedAmt = parseFloat(response.Actualtotal);
            })
    })
    $('.pay-btn').click(function () {
        let prevAmount = amountDue;
        amountDue -= parseFloat($('#amt-paid').val());
        if (amountDue < 0) {
            amountDue = 0;
        }
        $('#card-1-amt-due').text("Amount Due: $" + amountDue);
        if (amountDue == 0 && prevAmount != 0) {
            $('#credit-score').text("Credit Score: 720");
            $('#forest-img').attr("src", "img/portfolio/block2.png");
            alert("Congratulations! You've successfully paid off your credit statement this month. Check out your new tree! 🤩🌳💸💳💯🎉");
        }
    })

    $('#yes-btn').click(function () {
        $('#card-1-amt-due').text("Amount Due: $" + scrapedAmt);
        amountDue += scrapedAmt;
        $("#amt-confirmation").css("display", "none");
    })

    $('#no-btn').click(function () {
        scrapedAmt = parseFloat($("#resubmit-amt").val());
        $('#card-1-amt-due').text("Amount Due: $" + scrapedAmt);
        amountDue += scrapedAmt;
        $("#amt-confirmation").css("display", "none");
    })
});
