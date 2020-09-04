$(document).ready(function () {
    $("#pwd_visible").click(function () {
        var check = $('#pwd_visible_icon').hasClass("fa-eye");        
        if (check) {
            $('#pwd_visible_icon').removeClass("fa-eye");
            $('#pwd_visible_icon').addClass("fa-eye-slash");
            $('#login_user_pwd').attr('type', 'text');
        } else {
            $('#pwd_visible_icon').addClass("fa-eye");
            $('#pwd_visible_icon').removeClass("fa-eye-slash");
            $('#login_user_pwd').attr('type', 'password');
        }
    });
});