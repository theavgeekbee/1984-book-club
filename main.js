var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const tabTriggers = document.querySelectorAll(".tabs-trigger");
  const tabContents = document.querySelectorAll(".tabs-content");

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      tabTriggers.forEach((t) => t.classList.remove("selected"));
      tabContents.forEach((c) => c.classList.remove("selected"));

      trigger.classList.add("selected");

      const targetId = trigger.getAttribute("aria-controls");
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("selected");
      }

      tabTriggers.forEach((t) => t.setAttribute("aria-selected", "false"));
      trigger.setAttribute("aria-selected", "true");
    });
  });

});

