const fadeOut = () => {
    const loaderWrapper = 
    document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);

const enlaces = document.getElementsByClassName("enlaces")[0];
const menu = document.getElementsByClassName("menu")[0];
const menuMenu = document.getElementById("menu");

let abierto = false;

const toggleMenu = () => {
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.5s ease-in-out";
}

menu.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".enlaces.enlaces2")){
        abierto=true;
    }else{
        abierto=false;
    }
})


window.addEventListener("click", function(e){
    this.console.log(e.target)
    if(abierto){
        if(e.target != menuMenu){
            toggleMenu();
            abierto = false;
        }
    }
})


window.addEventListener("resize", function(){
    if(screen.width > 800){
        if(abierto){
            toggleMenu();
            enlaces.style.transition = "none";
            abierto = false;
        }
    }
})

/*typewriting*/

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    const textArray = [
        'Mi nombre es Luis González, ',
        'Mobile developer, ',
        'Machine Learning developer, ',
        'Linuxero, ',
        'Escritor en mis tiempos libres, ',
        'Amante de los michis'
    ];
    let currentText = '';
    let currentIndex = 0;
    let arrayIndex = 0;
    let isAdding = true;
    const delay = 100; // Delay between characters
    const pause = 2000; // Pause between sections
    const clearPause = 500; // Pause before clearing text

    function type() {
        if (isAdding) {
            if (currentIndex < textArray[arrayIndex].length) {
                currentText += textArray[arrayIndex].charAt(currentIndex);
                textElement.innerHTML = currentText;
                currentIndex++;
                setTimeout(type, delay);
            } else {
                isAdding = false;
                setTimeout(() => {
                    textElement.innerHTML = '';
                    currentText = '';
                    currentIndex = 0;
                    arrayIndex = (arrayIndex + 1) % textArray.length;
                    isAdding = true;
                    setTimeout(type, clearPause);
                }, pause);
            }
        }
    }

    type();
});

/*card's function*/
document.querySelector('.filter-button').addEventListener('click', function() {
    const filterOptions = document.querySelector('.filter-options');
    filterOptions.style.display = filterOptions.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.filter-option').forEach(option => {
    option.addEventListener('click', function() {
        let filter = this.getAttribute('data-filter');
        let cards = document.querySelectorAll('.card');
        
        if (filter === 'all') {
            cards.forEach(card => {
                card.style.display = '';
            });
        } else {
            cards.forEach(card => {
                let tags = card.getAttribute('data-tags').toLowerCase();
                if (tags.includes(filter)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        document.querySelector('.filter-options').style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('.filter-button')) {
        document.querySelector('.filter-options').style.display = 'none';
    }
});

/*back to top*/

window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});