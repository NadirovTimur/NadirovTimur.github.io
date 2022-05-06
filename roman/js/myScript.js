$(document).ready(function () {
    $('.image-link').magnificPopup({
        type: 'image'
    });
    
    
    $("#inputTel").mask("+7(999) 999-9999");
    
    $('form').submit(function(event){
        
        if($("#inputTel").val() == "" || $("#inputEmail3").val() == ""){
            event.preventDefault();
            alert("Заполните поле");
        }
        
    });
    
});










