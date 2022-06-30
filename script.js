function scrollFunction1() {
    let e = document.getElementById("About");
    e.scrollIntoView({
      block:"start",
      behavior: 'smooth',
      inline:'start'

    });
  }
  function scrollFunction2() {
    let e = document.getElementById("Contact");
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
      inline:"center"
  
    });
  }