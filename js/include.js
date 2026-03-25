
fetch("feature.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("features-section").innerHTML = data;

        startCountersObserver();
        initBrochureFormPopup();
        initRevealAnimation();
        revealOnScroll();
        initIndustryAnimation();   // ✅ ADD THIS
    });


// ================= POPUP =================
function initBrochureFormPopup() {

    const popup = document.getElementById("formPopup");
    const openBtn = document.getElementById("openFormBtn");
    const closeBtn = document.getElementById("closeForm");
    const form = document.getElementById("brochureForm");

    if (!popup || !openBtn || !closeBtn || !form) return;

    const fileURL = form.getAttribute("data-file");

    openBtn.addEventListener("click", function () {
        popup.classList.add("active");
    });

    closeBtn.addEventListener("click", function () {
        popup.classList.remove("active");
    });

    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.classList.remove("active");
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const link = document.createElement("a");
        link.href = fileURL;
        link.download = "KompassHR-Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        alert("Brochure downloaded successfully!");

        popup.classList.remove("active");
        form.reset();
    });
}


// ================= REVEAL ANIMATION =================
function initRevealAnimation(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },{ threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach((el)=>{
    observer.observe(el);
  });
}


// ================= STAGGER SCROLL =================
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            setTimeout(() => {
                el.classList.add("active");
            }, index * 100);
        }
    });
}

window.addEventListener("scroll", revealOnScroll);



// ================= INDUSTRY ROW ANIMATION (NEW) =================
function initIndustryAnimation(){

    const rows = document.querySelectorAll('.industry-row');

    if(rows.length === 0) return; // safety

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target); // run only once
            }
        });
    },{ threshold:0.2 });

    rows.forEach(row=>{
        row.style.animationPlayState = 'paused'; // start paused
        observer.observe(row);
    });
}









fetch("why-choose-us.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("kompass-section").innerHTML = data;

    // Tabs JS after content loads
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {

        // Active tab
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        // Active content
        contents.forEach(c => c.classList.remove("active"));
        const id = tab.getAttribute("data-tab");
        document.getElementById(id).classList.add("active");

      });
    });

    // ✅ Intersection Observer (AFTER FETCH)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");


             if (entry.target.classList.contains("tabs")) {
        entry.target.classList.add("show");
      }
        }
      });
    }, {
      threshold: 0.2
    });

    // observe all animate elements
    document.querySelectorAll(".animate").forEach(el => {
      observer.observe(el);
    });

  })
  .catch(error => console.error("Error loading section:", error));










 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 fetch("caseStudies.html")
.then(response => response.text())
.then(data => {

    document.getElementById("case-section").innerHTML = data;

    /* ================================
       TESTIMONIAL SLIDER
    ================================= */

    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll(".dot");

    let index = 0;

    function showSlide(i){
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[i].classList.add("active");
        dots[i].classList.add("active");
    }

    // Dot click
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i;
            showSlide(index);
        });
    });

    // Auto slider
    setInterval(() => {
        index++;
        if(index >= slides.length){
            index = 0;
        }
        showSlide(index);
    }, 4000);


    /* ================================
       SCROLL REVEAL ANIMATION
    ================================= */

    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;

            if (top < triggerBottom) {
                el.classList.add("active");
            }
        });
    }

    // Run on scroll
    window.addEventListener("scroll", revealOnScroll);

    // Run once after load
    revealOnScroll();

});




fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;


    });
























