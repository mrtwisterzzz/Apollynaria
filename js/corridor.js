let left = 0;
if (screen && screen.width > 900) {
    window.addEventListener('click', function (click) {
        let x = click.clientX
        let y = click.clientY

        let doorRect = this.document.getElementById("train").getBoundingClientRect()
        let handle = this.document.getElementById("door-href").getBoundingClientRect()
        console.log('desktop')
        if (y >= doorRect.top && y <= doorRect.bottom && x <= doorRect.right && x >= doorRect.left) {
            let start = Date.now();
            left = !left;
            let timer = setInterval(function () {

                let timePassed = Date.now() - start;
                if (left){
                    train.style.left = 19 + timePassed / 50 + '%';
                } if (!left){
                    train.style.left = (59 - (timePassed) / 50) + '%';
                }

                if (timePassed > 2000) clearInterval(timer);
            }, 20);
        }
        if (y >= handle.top && y <= handle.bottom && x <= handle.right && x >= handle.left) {
            document.location.href = 'artroom.html'
        }

    });
} else {
    window.addEventListener('touchstart', function (click) {
        let x = click.touches[0].clientX
        let y = click.touches[0].clientY

        let doorRect = this.document.getElementById("train").getBoundingClientRect()
        let handle = this.document.getElementById("door-href").getBoundingClientRect()
        console.log('mobile')
        if (y >= doorRect.top && y <= doorRect.bottom && x <= doorRect.right && x >= doorRect.left) {
            let start = Date.now();
            left = !left;
            let timer = setInterval(function () {

                let timePassed = Date.now() - start;
                if (left){
                    train.style.left = 19 + timePassed / 50 + '%';
                } if (!left){
                    train.style.left = (59 - (timePassed) / 50) + '%';
                }

                if (timePassed > 2000) clearInterval(timer);
            }, 20);
        }
        if (y >= handle.top && y <= handle.bottom && x <= handle.right && x >= handle.left) {
            document.location.href = '/artroom.html'
        }

    });
}
