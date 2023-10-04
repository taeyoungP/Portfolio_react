function show() {
    //console.log('show function is called');
    var reveal = document.querySelectorAll(".reveal");
  
    for (var i = 1; i < reveal.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveal[i].getBoundingClientRect().top;
      var e = 190;
  
      if (elementTop < windowHeight - e) {
        //console.log('active');
        reveal[i].classList.add("active");
      } else {
        //console.log('not active');
        reveal[i].classList.remove("active");
      }
    }
  }
  
  export { show };