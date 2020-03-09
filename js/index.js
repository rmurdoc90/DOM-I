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


let navBar1 = document.querySelector('a:nth-of-type(1)')
navBar1.textContent = siteContent["nav"]["nav-item-1"]

let navBar2 = document.querySelector('a:nth-of-type(2)')
navBar2.textContent = siteContent["nav"]["nav-item-2"]

let navBar3 = document.querySelector('a:nth-of-type(3)')
navBar3.textContent = siteContent["nav"]["nav-item-3"]

let navBar4 = document.querySelector('a:nth-of-type(4)')
navBar4.textContent = siteContent["nav"]["nav-item-4"]

let navBar5 = document.querySelector('a:nth-of-type(5)')
navBar5.textContent = siteContent["nav"]["nav-item-5"]

let navBar6 = document.querySelector('a:nth-of-type(6)')
navBar6.textContent = siteContent["nav"]["nav-item-6"]

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

let featureContent = document.querySelector('h4:nth-of-type(1)')
featureContent.textContent = siteContent['main-content']['features-h4']

let featureContent1 = document.querySelector('p:nth-of-type(1)')
featureContent1.textContent = siteContent['main-content']['features-content']

// FEATURE CONTENT END

// ABOUT CONTENT

let featureAbout = document.querySelector('h4:nth-of-type(2)')
featureAbout.textContent = siteContent['main-content']['about-h4']

let featureAbout1 = document.querySelector('p:nth-of-type(2)')
featureAbout1.textContent = siteContent['main-content']['about-content']

// ABOUT CONTENT END




