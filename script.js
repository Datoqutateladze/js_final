// burger animation
let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
});



// accordion

let accordition = document.getElementsByClassName('container-accordion');

for (let i = 0; i < accordition.length; i++) {
    accordition[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}

// slideriiiii

let arrowleft =  document.getElementById('left-arrow');
let arrowright = document.getElementById('right-arrow');
let sliderContent = document.getElementById('slider-cont');
let dotslist = document.getElementsByClassName('dot');

let data = [
    {
        id: 1,
        imageUrl: 'https://www.sportsshoes.com/media/image/department/gym/feature-image.jpg',
        title: '',
        url: 'https://www.youtube.com/'
    },

    {
        id: 2,
        imageUrl: 'https://www.brother2brother.co.uk/blog/wp-content/uploads/2017/09/1-4.jpg',
        title: '',
        url: 'https://www.youtube.com/'
    },

    {
        id: 3,
        imageUrl: 'https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/article/strong-man-barbell-bench-press-1000.jpg',
        title: '',
        url: 'https://www.youtube.com/'
    },
    {
        id: 4,
        imageUrl: 'https://wholesale.rdxsports.com/hubfs/victor-freitas-iGZiWuEg824-unsplash.jpg',
        title: '',
        url: 'https://www.youtube.com/'
    }
]


function aTag(item){
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}

function createH2(item){
    let tagtitle = document.createElement('h2');
    tagtitle.setAttribute('class', 'title');
    tagtitle.append(item.title);
    

    return tagtitle;
}

function createImgtag(item){
    // let tagimage = document.createElement('div');
    // tagimage.style.backgroundImage = url($ {item.imageUrl});
    // tagimage.setAttribute('class', 'slidebg');

    let tagimage = document.createElement('img');
    tagimage.setAttribute('src', item.imageUrl);
    tagimage.setAttribute('alt', item.title);

    return tagimage;
}

let sliderIndex = 0;

function createDots(item){
    let dots = document.createElement('div');
    dots.setAttribute('class', 'dots');

    data.forEach( (elem) => { 
         let dotelem = document.createElement('div');
         dotelem.setAttribute('class', 'dot');
         dotelem.setAttribute('data-id', elem.id-1);

         dotelem.onclick = function(event) {
             let id =  event.target.getAttribute('data-id');
             sliderIndex = id;
             setSlide();
         }

         dots.appendChild(dotelem);
    });
    return dots;
}

function dotactive(){
    dotslist[sliderIndex].classList.add('active');
}

function setSlide(){
    sliderContent.innerHTML = ' ';
    let slideItem = aTag(data[sliderIndex]);
    let h2Tag =  createH2 (data[sliderIndex]);
    let imgtag = createImgtag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(imgtag);
    slideItem.appendChild(h2Tag);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    dotactive();
}

function arrowleftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }

    sliderIndex--;
    setSlide();
}

function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }

    sliderIndex++;
    setSlide();
}

arrowleft.addEventListener('click', arrowleftClick);
arrowright.addEventListener('click', arrowRightClick);


setSlide();


// localstorage

// let counter = localStorage.getItem('count');

// let newValue;

// if(!counter) {
//     newValue = 1;
// }else {
//     newValue = parseInt(counter) + 1;
// }

// localStorage.setItem('count', newValue);





// sessionstorage

let counter = sessionStorage.getItem('count');

let newValue;

if(!counter) {
    newValue = 1;
}else {
    newValue = parseInt(counter) + 1;
}

sessionStorage.setItem('count', newValue);

