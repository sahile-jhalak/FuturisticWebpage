const sliders = document.querySelectorAll('.slide-in');
const appearOptions = {
    threshold: 0,
    rootMargin: "0% 0% -50% 0%"
}

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {

        // let audio = entry.target.querySelector('audio');
        let img = entry.target.querySelectorAll('img')[0];

        // Checking if the entry is intersecting don't toggle class

        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            // audio.play()
            // audio.addEventListener("ended", () => console.log("End"));

            setTimeout(() => {
                img.style.opacity = 0;
            }, 1000);
            appearOnScroll.unobserve(entry.target);
        }
    })
},
    appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})

function pauseAll() {
    const allAudios = document.getElementsByTagName('audio');
    for (i in allAudios.length) {
        allAudios[i].pause();
        allAudios[i].currentTime = 0;
        allAudios[i].volume = 0;
    }
}