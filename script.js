// openeing and closing first FAQ
let open1 = document.querySelector('.firstQ')
let open1a = document.querySelector('.firstQOpened')

open1.addEventListener('click', function () {
    open1a.classList.toggle("show")
    open1.classList.toggle("active")
});

// openeing and closing sec FAQ
let open2 = document.querySelector('.secQ')
let open2a = document.querySelector('.secQOpened')

open2.addEventListener('click', function () {
    open2a.classList.toggle("show")
    open2.classList.toggle("active")
});


// openeing and closing third FAQ
let open3 = document.querySelector('.thirdQ')
let open3a = document.querySelector('.thirdQOpened')

open3.addEventListener('click', function () {
    open3a.classList.toggle("show")
    open3.classList.toggle("active")
});


// openeing and closing fourth FAQ
let open4 = document.querySelector('.fourthQ')
let open4a = document.querySelector('.fourthQOpened')

open4.addEventListener('click', function () {
    open4a.classList.toggle("show")
    open4.classList.toggle("active")
});


// openeing and closing fifth FAQ
let open5 = document.querySelector('.fifthQ')
let open5a = document.querySelector('.fifthQOpened')

open5.addEventListener('click', function () {
    open5a.classList.toggle("show")
    open5.classList.toggle("active")
});


// openeing and closing sixth FAQ
let open6 = document.querySelector('.sixthQ')
let open6a = document.querySelector('.sixthQOpened')

open6.addEventListener('click', function () {
    open6a.classList.toggle("show")
    open6.classList.toggle("active")
});

// for the learn more openeing
let learn = document.querySelector('.learnMore');
let learnOpen = document.querySelector('.learnOpen')

learn.addEventListener('click', function () {
    learnOpen.classList.add("show", "fade-in")
    learn.classList.add("fade-out")
    
});