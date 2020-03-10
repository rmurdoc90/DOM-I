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

// NAV SECTION
let navigationBar = document.querySelectorAll('a')

navigationBar[0].textContent = siteContent["nav"]["nav-item-1"]
navigationBar[1].textContent = siteContent["nav"]["nav-item-2"]
navigationBar[2].textContent = siteContent["nav"]["nav-item-3"]
navigationBar[3].textContent = siteContent["nav"]["nav-item-4"]
navigationBar[4].textContent = siteContent["nav"]["nav-item-5"]
navigationBar[5].textContent = siteContent["nav"]["nav-item-6"]

navigationBar[0].style.color = 'green'
navigationBar[1].style.color = 'green'
navigationBar[2].style.color = 'green'
navigationBar[3].style.color = 'green'
navigationBar[4].style.color = 'green'
navigationBar[5].style.color = 'green'

let navAdditions = document.createElement('a');
navAdditions.textContent = "End Nav"

let navAddition = document.createElement('a');
navAddition.textContent = "Beginning Nav"

let newNav = document.querySelector('nav')

newNav.appendChild(navAdditions)
newNav.prepend(navAddition)



// NAV SECTION

// IMAGES

let codeImg1 = document.querySelector('#cta-img')
codeImg1.setAttribute('src','img/header-img.png')

let codeImg2 = document.querySelector('#middle-img')
codeImg2.setAttribute('src','img/mid-page-accent.jpg')

// IMAGES END

// CTA SECTION

let titleH1 = document.querySelector('h1')
titleH1.textContent = siteContent['cta']['h1']

let button = document.querySelector('button')
button.textContent = siteContent['cta']['button']

// CTA SECTION END

// FEATURE CONTENT

let mainH4 = document.querySelectorAll(".text-content h4");
let mainText = document.querySelectorAll(".text-content p");

mainH4[0].textContent = siteContent["main-content"]["features-h4"];
mainText[0].textContent = siteContent["main-content"]["features-content"];

// FEATURE CONTENT END

// ABOUT CONTENT

mainH4[1].textContent = siteContent["main-content"]["about-h4"];
mainText[1].textContent = siteContent["main-content"]["about-content"];

// ABOUT CONTENT END

// SERVICES CONTENT

mainH4[2].textContent = siteContent["main-content"]["services-h4"];
mainText[2].textContent = siteContent["main-content"]["services-content"];


// SERVICES CONTENT END

// PRODUCT CONTENT

mainH4[3].textContent = siteContent["main-content"]["product-h4"];
mainText[3].textContent = siteContent["main-content"]["product-content"];


// PRODUCT CONTENT END

// VISION CONTENT

mainH4[4].textContent = siteContent["main-content"]["vision-h4"];
mainText[4].textContent = siteContent["main-content"]["vision-content"];

// VISION CONTENT END

// ADDRESS

let contactP = document.querySelectorAll('.contact p')
let contactInfo = document.querySelector(".contact h4")
contactInfo.textContent = siteContent['contact']['contact-h4']

contactP[0].textContent = siteContent['contact']['address']
contactP[1].textContent = siteContent['contact']['phone']
contactP[2].textContent = siteContent['contact']['email']

// ADDRESS END

// FOOTER

let footerInfo = document.querySelector('footer p')
footerInfo.textContent = siteContent['footer']['copyright']

// FOOTER END

// let greenText = document.querySelectorAll('a')
greenText.style.color = 'green'




