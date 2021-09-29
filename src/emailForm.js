let User_ID="user_enkWKyFhTz4LYcC40AIa0"
let Access_Token="62f0bc3d7f354a23b46900e3a3e6b0ca"

window.onload = function() {
    document.getElementById("contact_form").addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_sxczv1e', 'template_8le72v7', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
            console.log('FAILED...',error);
            });
    });
}

