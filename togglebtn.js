 let togglebtn = document.getElementById("togglebtn");  // target html btn
  let isdarkmode = false;

  togglebtn.addEventListener("click", () => {
    if (isdarkmode) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      togglebtn.textContent = "Switch to Dark Mode";
    } else {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
      togglebtn.textContent = "Switch to Light Mode";
    }
    isdarkmode = !isdarkmode;
  })