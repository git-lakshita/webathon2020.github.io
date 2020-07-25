function allFilled () {
    var filled = true;
    $('body input').each(function() {
        if($(this).val() == '') filled = false;
    });
    return filled;
}


var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 

$('#myBtn').bind('click', function(e) {
    e.preventDefault()
    if(allFilled()) modal.style.display = "block";
});


btn.onclick = function () {
    $('#username, #password, #address, #mobile, #email').bind('keyup', function() {
        if(allFilled()) modal.style.display = "block";
    });
}



//btn.onclick = function () {
//    modal.style.display = "block";
//}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
        
//}

