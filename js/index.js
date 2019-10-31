const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Task 1
let headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Task 2

// NavBar
const links = document.querySelectorAll('a');
links.forEach((element, n) => {
element.textContent = siteContent['nav'][`nav-item-${n + 1}`]
element.style.color = 'green';  // Task 3
});

// Headline
const headline = document.querySelector('h1');
headline.textContent = ('src', siteContent["cta"]["h1"]);

const btn = document.querySelector('button');
btn.textContent = ('src', siteContent['cta']['button']);

// Middle Content
const subHead = document.querySelectorAll('.main-content h4');
subHead[0].textContent = siteContent['main-content']['features-h4'];
subHead[1].textContent = siteContent['main-content']['about-h4'];
subHead[2].textContent = siteContent['main-content']['product-h4'];
subHead[3].textContent = siteContent['main-content']['vision-h4'];
subHead[4].textContent = siteContent['main-content']['services-h4'];

const subContent = document.querySelectorAll('.main-content p');
subContent[0].textContent = siteContent['main-content']['features-content'];
subContent[1].textContent = siteContent['main-content']['about-content'];
subContent[2].textContent = siteContent['main-content']['product-content'];
subContent[3].textContent = siteContent['main-content']['vision-content'];
subContent[4].textContent = siteContent['main-content']['services-content'];

// Contact Info
const contactSub = document.querySelector('.contact h4');
contactSub.textContent = siteContent['contact']['contact-h4'];

const contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];

// Footer 
const fTag = document.querySelector('footer p');
fTag.textContent = siteContent['footer']['copyright'];

// Task 3

// Append Child
const navBar = document.querySelector('nav');

const newLink = document.createElement('a');
newLink.textContent = 'Fun';
newLink.style.color = 'green';
newLink.href = '#';
navBar.appendChild(newLink);

// Prepend
const newLinkTwo = document.createElement('a');
newLinkTwo.textContent = 'Home';
newLinkTwo.style.color = 'green';
newLinkTwo.href = '#';
navBar.prepend(newLinkTwo);