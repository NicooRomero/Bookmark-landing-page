
document.addEventListener('DOMContentLoaded', function() {

    //mostrar contenido feature seleccionado
    $('.content-feature .info-feature:first').show();
    $('.select a:first').addClass('activo');
    $('.select a').mouseenter(function() {
        $('.select a').removeClass('activo');
        $(this).addClass('activo');
        $('.hide').hide();

        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);

        return false;

    });

    //accordion
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }

    //validar email

    // var email = document.getElementById('email');
    // var errordiv = document.getElementById('error');

    //     email.addEventListener('submit', validarMail);

    //     function validarMail() {
    //         if (this.value.indexOf("@") > -1) {
    //             errordiv.style.display = 'none';
    //             this.style.border = '1px solid #cccccc';
    //         } else {
    //             errordiv.className += 'error-div';
    //             errordiv.innerHTML = "Whoops, make sure it´s an email";
    //             this.style.border = '1px solid red';
    //         }
    //     }


        //validate mail on submit

        document.getElementById('form-mail').addEventListener('submit', validarMail);
        var errordiv = document.getElementById('error');

        function validarMail(e) {
            e.preventDefault();
            if(this.querySelector('[name=e-mail]').value.indexOf("@") > -1) {
                errordiv.style.display = 'none';
            return;
            } else if(errordiv.classList.contains('error-div')){
                    errordiv.classList.remove('error-div');
                    errordiv.style.display = 'none';
                    return;
                } else {
                    errordiv.className += 'error-div';
                    errordiv.innerHTML = "Whoops, make sure it´s an email";
                    errordiv.style.display = 'block';
                    return;
                }
             this.submit();
            }
});