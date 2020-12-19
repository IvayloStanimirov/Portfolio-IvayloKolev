window.onload = function() {
    let website = {
        startOfPageAnimation: function() {
            let cloudWrapper = document.getElementById('cloud-wrapper');
            cloudWrapper.addEventListener('animationend', () => {
                cloudWrapper.classList.add('remove-before')
            })
            let canvasContainer = document.getElementById('canvas-container');
            canvasContainer.addEventListener('animationend', () => {
                canvasContainer.classList.add('remove-before')
            })
            let counter = 0;
            let computerWrapper = document.getElementById('computer-wrapper');
                computerWrapper.addEventListener('animationend', () => {
                computerWrapper.classList.add('remove-before')
                
                counter++
                if(counter === 2) {
                    document.getElementById('start-animation-overley').style.display = 'none'
                    document.getElementsByTagName('body')[0].style.background = 'white'
                }
            })            
        }
    }
    website.startOfPageAnimation()

}
  