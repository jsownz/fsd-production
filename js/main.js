var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
		
    var panel = entries[0].target,
        incomingPanel = panel.dataset.panel;
    
    if (panel !== undefined) {
      if (!panel.classList.contains("reveal")) {
        panel.classList = "reveal";
      }
    }

    // switch(incomingPanel) {
    //   case 'two':
    //       panel.classList = "reveal";
    //     break;
    // }

}, { threshold: [0.25] });

observer.observe(document.querySelector("#section-1"));
observer.observe(document.querySelector("#section-2"));
observer.observe(document.querySelector("#section-3"));