$(document).ready(function () {

    $("#menu_icon").click(function () {
        var check = $("#navbar").hasClass("show");
        if (check) {
            $("#navbar").addClass("remove");
            $("#menu_icon").removeClass("active");
            setTimeout(function () {
                $("#navbar").removeClass("show");
                $("#navbar").removeClass("remove");
            }, 2000);
        } else {
            $("#navbar").addClass("show");
            $("#menu_icon").addClass("active");
        }
    });

})