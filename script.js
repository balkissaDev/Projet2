document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");
  
    // Observer pour apparition au scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skill = entry.target;
          const progress = skill.querySelector(".progress");
          const percent = skill.querySelector(".percent");
          const value = parseInt(skill.getAttribute("data-value"));
  
          skill.classList.add("visible");
  
          let counter = 0;
          const speed = 20; // vitesse d’animation
  
          const interval = setInterval(() => {
            if (counter >= value) {
              clearInterval(interval);
            } else {
              counter++;
              percent.textContent = counter + "%";
              progress.style.width = counter + "%";
              // Animation de dégradé dynamique
              progress.style.background = `linear-gradient(90deg, hsl(${counter + 300}, 70%, 60%), hsl(${counter + 180}, 80%, 60%))`;
            }
          }, speed);
  
          observer.unobserve(skill); // évite répétition
        }
      });
    }, { threshold: 0.5 });
  
    skills.forEach(skill => observer.observe(skill));
  });
  