// This code is for checking the communications with the API
$(document).ready(function () {
    $.ajax(backgroundSettings).done(function (response) {
        console.log(response);
    });
});

/* <script src="https://code.jquery.com/jquery-3.6.0.js"
integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script> */