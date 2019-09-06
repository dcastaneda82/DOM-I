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
//NAVHeader

let logo = document.getElementById("logo-img");
let navItems = document.querySelectorAll("nav a");
let newNavItemLast = document.createElement('a');
let navOnly = document.querySelector('nav');
let newNavItemFirst = document.createElement('a');


newNavItemLast.textContent = 'Last Kid';
newNavItemLast.style.color = 'green';
newNavItemFirst.textContent = 'First Kid';
newNavItemFirst.style.color = 'green';
navOnly.appendChild(newNavItemLast);
navOnly.prepend(newNavItemFirst);
logo.setAttribute('src', siteContent.nav["img-src"]);
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  navItems[i].style.color = "green";
}

//cta Section

let splits = siteContent.cta.h1.split(' ');
let dom = document.createElement('h1');
let domH1 = document.querySelector('.cta-text h1');
let is = document.createElement('h1');
let isH1 = document.querySelector('.cta-text h1');
let awesome = document.createElement('h1');
let awesomeH1 = document.querySelector('.cta-text h1');
let ctaButton = document.querySelector('button');
let ctaIMG = document.getElementById('cta-img');

dom.textContent = splits[0];
domH1.append(dom);
is.textContent = splits[1];
isH1.append(is);
awesome.textContent = splits[2];
awesomeH1.append(awesome);
ctaButton.textContent = siteContent.cta.button;
ctaIMG.setAttribute('src', siteContent.cta["img-src"]);


//Main stuff

let topTitleText = document.querySelectorAll('.main-content .top-content .text-content h4');
let topParaText = document.querySelectorAll('.main-content .top-content .text-content p');
let topIMG = document.getElementById('middle-img');

let bottomTitleText = document.querySelectorAll('.bottom-content .text-content h4');
let bottomParaText = document.querySelectorAll('.bottom-content .text-content p');


topTitleText[0].textContent = siteContent["main-content"]["features-h4"];
topTitleText[1].textContent = siteContent["main-content"]["about-h4"];
topParaText[0].textContent = siteContent["main-content"]["features-content"];
topParaText[1].textContent = siteContent["main-content"]["about-content"];
topIMG.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
bottomTitleText[0].textContent = siteContent["main-content"]["services-h4"]
;bottomParaText[0].textContent = siteContent["main-content"]["services-content"];
bottomTitleText[1].textContent = siteContent["main-content"]["product-h4"];
bottomParaText[1].textContent = siteContent["main-content"]["product-content"];
bottomTitleText[2].textContent = siteContent["main-content"]["vision-h4"];
bottomParaText[2].textContent = siteContent["main-content"]["vision-content"];

//contact stuff

let contactH4 = document.querySelector('.contact h4');
let splitContact = siteContent.contact.address.split(' ');
let newContactp = document.createElement('p');
let newP = document.querySelector('.contact p');
let contactPara = document.querySelectorAll('.contact p');

newContactp.textContent = splitContact[4];
newP.append(newContactp);
contactH4.textContent = siteContent.contact["contact-h4"];
contactPara[0].textContent = siteContent.contact.address;
contactPara[1].textContent = siteContent.contact.phone;
contactPara[2].textContent = siteContent.contact.email;

//Footsies

let foot = document.querySelector('footer p');

foot.textContent = siteContent.footer.copyright;