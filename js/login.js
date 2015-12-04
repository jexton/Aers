$(document).ready(
    function() {
        $("#aers_login_submit").click(function() {
            submit();
        });
    });
//登录点击事件
function submit() {
    var name = $("#aers_login_name input");
    if (Boolean(name.attr("data-sta"))) {
        $.modal("请确认<span style='color:red;'> 登录名称 </span>是否填写正确！");
    }

}
