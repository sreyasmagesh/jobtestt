function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  function rightNav() {
    document.getElementById("mySidenavv").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function close() {
    document.getElementById("mySidenavv").style.width = "0";
  }


 
  function incrementValue()
  {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      if(value<10){
          value++;
      total=1500*value

              document.getElementById('number').value = value;
              document.getElementById('total').value = value*1500;
      }
  }
  function decrementValue()
  {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      if(value>1){
          value--;
              document.getElementById('number').value = value;
      }
  
  }




  function openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
  }
  
  function closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
  }
  
  function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }
  
  function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }
