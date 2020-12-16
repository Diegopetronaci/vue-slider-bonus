let images = new Vue ({
    el: "#app",
    data: {
        counter: 0,
        img: [
            "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
            "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg",
            
        ]
    },
    created: function () {
        setInterval(this.nextImg, 3000)
    },
    methods: {
        nextImg(){
            this.counter++;
            if (this.counter == this.img.length) {
                this.counter = 0;
            }
            console.log(this.counter);
        },
        prevImg() {
            if (this.counter === 0) {
                this.counter = (this.img.length - 1);
            } else {
                this.counter--;
            }
            console.log(this.counter);
        },
        circleClick(i) {
            this.counter = i;
        }
    },
    mounted(){
        document.addEventListener("keyup",e => {
            if(e.key === "ArrowRight"){
                this.nextImg();
            } else if (e.key === "ArrowLeft"){
                this.prevImg();
            }
        })
    }
})