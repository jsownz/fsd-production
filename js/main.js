if (!('IntersectionObserver' in window) ||
    !('IntersectionObserverEntry' in window) ||
    !('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
    // load polyfill now
    var sections = document.querySelectorAll(".section");
    for (var i = 0; i < sections.length; i++) {
      if (!sections[i].classList.contains("reveal")) {
        sections[i].classList.add("reveal");
      }
    }
} else {
  var observer = new IntersectionObserver(function(entries) {
    for (entry in entries) {
      if(entries[entry].isIntersecting === true) {
        
        var panel = entries[entry].target,
            incomingPanel = panel.dataset.panel;
        
        if (panel !== undefined) {
          if (!panel.classList.contains("reveal")) {
            panel.classList.add("reveal");
          }

          var scrollButton = document.querySelector("#x-btn-scroll-to-top");
          if (incomingPanel === "intro") {
            // hide scroll to top
            scrollButton.classList = "";
          } else {
            if (!scrollButton.classList.contains("show")) {
              scrollButton.classList = "show";
            }
          }
        }
      }
    }

  }, { threshold: [0.25] });

  observer.observe(document.querySelector("#section-1"));
  observer.observe(document.querySelector("#section-2"));
  observer.observe(document.querySelector("#section-3"));
  observer.observe(document.querySelector("#section-4"));

  var scrollButton = document.querySelector("#x-btn-scroll-to-top");
  scrollButton.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
}