
    $(window).scroll(function () {
      if ($("#menu").offset().top > 30) {
        $("#menu").addClass("bg-header");
      } else {
        $("#menu").removeClass("bg-header");
      }
    });


  
    $(window).scroll(function () {
      if ($("#menu").offset().top < 30) {
        $("#menu").addClass("nobg");
      } else {
        $("#menu").removeClass("nobg");

      }
    });
 

  
    // Add active class to the current button (highlight it)
    var header = document.getElementById("PG1");
    var btns = header.getElementsByClassName("btn_galery");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active_p");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active_p", "");
        }
        this.className += " active_p";
      });
    }

  

 
    function ocultar(id) {
      document.getElementById(id).style.display = 'none';
    }
 
    function mostrar(id) {
      document.getElementById(id).style.display = 'block';
      document.getElementById(id).style.opacity = 0;
     
    (function fade() {
    let val = parseFloat(document.getElementById(id).style.opacity);
    // cambiando el valor 0.01 se puede afectar la velocidad del efecto
    if (!((val += 0.015) > 1)) { 
      document.getElementById(id).style.opacity = val;
      requestAnimationFrame(fade);
    }
    })();
    }
  
