if (screen && screen.width > 900) {
        window.addEventListener('mouseup', function (click) {
                let x = click.clientX
                let y = click.clientY

                let doorRect = this.document.getElementById("doorhandle").getBoundingClientRect()
                let youtube = this.document.getElementById("youtube").getBoundingClientRect()
                let vk = this.document.getElementById("vk").getBoundingClientRect()
                let inst = this.document.getElementById("inst").getBoundingClientRect()
                console.log('desktop')
                if (y >= doorRect.top && y <= doorRect.bottom && x <= doorRect.right && x >= doorRect.left) {
                        document.location.href = 'corridor.html'
                } else if (y >= youtube.top && y <= youtube.bottom && x <= youtube.right && x >= youtube.left){
                        document.location.href = 'https://www.youtube.com/channel/UC2VOhHW8Bf8z0wz-QnxzGWA'
                } else if (y >= vk.top && y <= vk.bottom && x <= vk.right && x >= vk.left){
                        document.location.href = 'https://vk.com/apolly_nariya'
                } else if (y >= inst.top && y <= inst.bottom && x <= inst.right && x >= inst.left){
                        document.location.href = 'https://www.instagram.com/apolly_nariya/'
                }


        });
} else {
        window.addEventListener('touchstart', function (click) {
                let x = click.touches[0].clientX
                let y = click.touches[0].clientY

                let doorRect = this.document.getElementById("door-href").getBoundingClientRect()
                let youtube = this.document.getElementById("youtube").getBoundingClientRect()
                let vk = this.document.getElementById("vk").getBoundingClientRect()
                let inst = this.document.getElementById("inst").getBoundingClientRect()

                console.log('mobile')

                if (y >= doorRect.top && y <= doorRect.bottom && x <= doorRect.right && x >= doorRect.left) {
                        document.location.href = '/corridor.html'
                        console.log('on')
                } else if (y >= youtube.top && y <= youtube.bottom && x <= youtube.right && x >= youtube.left){
                        document.location.href = 'https://www.youtube.com/channel/UC2VOhHW8Bf8z0wz-QnxzGWA'
                } else if (y >= vk.top && y <= vk.bottom && x <= vk.right && x >= vk.left){
                        document.location.href = 'https://vk.com/apolly_nariya'
                } else if (y >= inst.top && y <= inst.bottom && x <= inst.right && x >= inst.left){
                        document.location.href = 'https://www.instagram.com/_appollinariya_/'
                }

        }, false);
}


