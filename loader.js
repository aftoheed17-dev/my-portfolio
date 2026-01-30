class UniversalLoader {
    constructor() {
        this.loader = document.getElementById('universal-loader');
        this.progressBar = document.getElementById('loaderProgressBar');
        this.loaderText = document.getElementById('loaderText');
        this.progress = 0;
        this.steps = [
            { percent: 10, text: "Initializing digital experience..." },
            { percent: 40, text: "Preparing your visit..." },
            { percent: 75, text: "Almost ready..." }
        ];
    }
    init() {
        this.simulateLoading();
        window.addEventListener('load', () => { this.completeLoading(); });
        setTimeout(() => { if (this.progress < 100) this.completeLoading(); }, 5000);
    }
    simulateLoading() {
        let currentStepIndex = 0;
        this.interval = setInterval(() => {
            if (this.progress < 85) {
                this.progress += Math.random() * 5; 
                this.progressBar.style.width = `${this.progress}%`;
                if (currentStepIndex < this.steps.length) {
                    if (this.progress >= this.steps[currentStepIndex].percent) {
                        this.loaderText.textContent = this.steps[currentStepIndex].text;
                        currentStepIndex++;
                    }
                }
            }
        }, 400);
    }
    completeLoading() {
        clearInterval(this.interval);
        this.progressBar.style.width = '100%';
        this.loaderText.textContent = "Welcome..."; 
        setTimeout(() => {
            this.loader.classList.add('fade-out');
            setTimeout(() => { this.loader.style.display = 'none'; }, 800);
        }, 600);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const loader = new UniversalLoader();
    loader.init();
});