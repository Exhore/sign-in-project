const inputName = $("#fname");
const inputLname = $("#lname");
const inputEmail = $("#email");
const inputPassword = $("#password");

function validateEmail(str) {
    var lastAtPos = str.lastIndexOf('@');
    var lastDotPos = str.lastIndexOf('.');
    return (lastAtPos < lastDotPos && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2);
};

var span = $("<span>").html("Cannot be empty").css({
    color: "hsl(0, 100%, 74%)",
    fontSize: "12px"
});

var errorImg = $("<img>").attr("src", "images/icon-error.svg");

inputName.on("blur", function () {
    if ($(this).val() === "") {
        $(this).addClass("empty").css({
            backgroundImage: "url(" + errorImg.attr("src") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize: "20px"
        });
    } else {
        $(this).removeClass("empty").css("backgroundImage", "none");
    }
});

inputLname.on("blur", function () {
    if ($(this).val() === "") {
        $(this).addClass("empty").css({
            backgroundImage: "url(" + errorImg.attr("src") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize: "20px"
        });
    } else {
        $(this).removeClass("empty").css("backgroundImage", "none");
    }
});

inputEmail.on("blur", function () {
    if (!validateEmail($(this).val())) {
        $(this).addClass("empty").css({
            backgroundImage: "url(" + errorImg.attr("src") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize: "20px"
        });
    } else {
        $(this).removeClass("empty").css("backgroundImage", "none");
    }
});


$("#password").on("blur", function () {
    if ($(this).val() === "") {
        $(this).addClass("empty").css({
            backgroundImage: "url(" + errorImg.attr("src") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize: "20px"
        });
    } else {
        $(this).removeClass("empty").css("backgroundImage", "none");
    }
});