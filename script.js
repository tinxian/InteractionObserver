let allLinks = document.querySelectorAll('nav a');
let sections = document.querySelectorAll('section');

const callback = (entries, observer) => {
  entries.forEach( entry => {
    console.log(entry.target.parentNode.id + " cut " + entry.isIntersecting);
    if(entry.isIntersecting) {
     let link = searchLink('#' + entry.target.parentNode.id);
     addActive(link);
    }
  });
}

const options = {
  treshold: 1.0
};

let observer = new IntersectionObserver(callback, options);

// observer.observe(sections[1]);

sections.forEach(section => {
  observer.observe(section.getElementsByTagName('p')[0]);
});

// Function that removes class Active
const removeActive = () => {
  allLinks.forEach((link) =>{
    if (link.classList = 'active') {
      link.classList.remove('active');
    }
  });
}

// Function that adds class Active
const addActive = (elem) => {
  removeActive();
  elem.classList.add('active');
}

allLinks.forEach( (link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    addActive(e.target);
    window.location = e.target.href;
  })
});

const searchLink = (id) => {
  let link = document.querySelector('nav a[href="'+ id + '"]');
  return link;
}
