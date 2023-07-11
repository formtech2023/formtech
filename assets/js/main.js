// scrollanimation
var observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation');
        } else {
            entry.target.classList.remove('animation');
        }
    })
});

var observers = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('transitions')
        } else {
            entry.target.classList.remove('transitions')
        }
    })
});

const circle = document.querySelectorAll('.circle');
circle.forEach((el) => observers.observe(el))

const animaObject = document.querySelectorAll('.animaObject');
animaObject.forEach((el) => observer.observe(el))

// scrollanimation end


// navbar

var leftSections = document.querySelectorAll('.left-section');
var languageCon = document.querySelector('.language-con');

window.onscroll = function () {
  if (window.scrollY > 90) {
    for (var i = 0; i < leftSections.length; i++) {
      leftSections[i].style.transition = "display 0.3s ease";
      leftSections[i].style.display = "none";
    }
    languageCon.style.transition = "display 0.3s ease";
    languageCon.style.display = "none";
  } else {
    for (var i = 0; i < leftSections.length; i++) {
      leftSections[i].style.transition = "display 0.3s ease";
      leftSections[i].style.display = "flex";
    }
    languageCon.style.transition = "display 0.3s ease";
    languageCon.style.display = "flex";
  }
};


// navbar end


