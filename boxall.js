window.addEventListener("keydown", function(e){
	if (e.ctrlKey && e.key === "b") {
    if (document.boxesOn) {
      document.querySelectorAll("*").forEach(function(x){
        x.style.outline = x.oldOutlineStyle;
        delete x.oldOutlineStyle;
      });
      delete document.boxesOn;
    }
    else {
      document.querySelectorAll("*").forEach(function(x){
        x.oldOutlineStyle = x.style.outline;
        x.style.outline = "thin red solid";
      });
      document.boxesOn = true;
    }
  }
});
