var toggle = document.getElementById("navToggle");
    var links = document.getElementById("navLinks");

    toggle.onclick = function () {
        links.classList.toggle("show");
    };


document.querySelectorAll('.rule').forEach(rule => {
    const btn = rule.querySelector('.show-slider');
    const sliderContainer = rule.querySelector('.slider-container');
    const slider = rule.querySelector('.slider');
    const dotsContainer = rule.querySelector('.dots');
    const images = slider.querySelectorAll('img');

    let currentIndex = 0;

    // vytvoření teček
    images.forEach((img, index) => {
        const dot = document.createElement('span');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });

    const updateSlider = () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; // posun přesně o 1 obrázek
        dotsContainer.querySelectorAll('span').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    };

    // zobrazení slideru po kliknutí na tlačítko
    btn.addEventListener('click', () => {
        sliderContainer.style.display = sliderContainer.style.display === 'block' ? 'none' : 'block';
        currentIndex = 0; // reset na první obrázek
        updateSlider();
    });

    // pokud se změní velikost okna, slider se přepočítá
    window.addEventListener('resize', updateSlider);
});