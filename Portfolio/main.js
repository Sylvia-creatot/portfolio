const typed = new Typed('multiple-text', {
    strings: ['I\'m a software engineer', 'Trained one!!', 'And a book lover'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const circularProgress = document.querySelectorAll('[data-all]');
const progressValue = document.querySelectorAll('[data-value]');
const progress = [
    {
        id: 0,
        progressStartValue: 0,
        progressEndValue: 70,
        speed: 100,
        language: "Html and Css"
    },
    {
        id: 1,
        progressStartValue: 0,
        progressEndValue: 60,
        speed: 100,
        language: "Javascript"
    },
    {
        id: 2,
        progressStartValue: 0,
        progressEndValue: 60,
        speed: 100,
        language: "Java"
    }
];

document.getElementById('skills').innerHTML = progress
    .map(item => {
        let { progressStartValue, progressEndValue, speed, language } = item;
        let progressRun = setInterval(() => {
            progressStartValue += 1;
            progressValue.forEach(value => {
                value.textContent = `${progressStartValue}%`;
            });
            circularProgress.forEach(box => {
                box.style.background = `conic-gradient(#dd2a7b ${progressStartValue * 3.6}deg, #ededed 0deg)`;
            });
            if (progressStartValue >= progressEndValue) {
                clearInterval(progressRun);
            }
        }, 1000);
        return `<div>${language}: ${progressStartValue}%</div>`;
    })
    .join('');
