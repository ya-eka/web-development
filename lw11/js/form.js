$('#my_form').submit(function () {
    alert('Нажата submit-кнопка');
    return false;
});

$("#send_mail").on("click", function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var activity = $("#activity").val();
    var checkbox = $("#checkbox").val();
    //.trim()
    // проверка эти полей и только потом отправляем на сервер
    if (name == "") {
        $("#error_mess").text("Введите имя");
        return false;
    }
    if (email == "") {
        $("#error_mess").text("Введите email");
        return false;
    }
    // if (activity == "") {
    //     $("#error_mess").text("Введите деятельность");
    //     return false;
    // }

    $("#error_mess").text(""); // если нет ошибки

    // отправляем данные на сервер
    
    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'email': email }, //, 'activity': activity, 'checkbox': checkbox
        dataType: 'html',
        beforeSend: function() {
            $("#send_mail").prop("disabled", true);
        },
        success: function(data) {
            if(!data)  // false
                alert("Были ошибки, сообщение не отправлено!");
            else
                $("#my_form").trigger("reset");
            alert(data);
            $("#send_mail").prop("disabled", false);
        }
    });

});


