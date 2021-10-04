var app = new Vue({
    el: '#root',
    data: {
        counterPhotos: 0,
        photos: [
            "slider_1.png",
            "slider_2.png",
            "slider_3.png",
            "slider_4.png"
        ]
    },
    created: function() {
        setInterval(() => {
            this.nextPhoto();
        }, 2000)
    },
    methods: {
        prevPhoto: function() {
            this.counterPhotos--;
            if (this.counterPhotos < 0) {
                this.counterPhotos = (this.photos.length - 1);
            }
        },
        nextPhoto: function() {
            this.counterPhotos++;
            if (this.counterPhotos > this.photos.length - 1) {
                this.counterPhotos = 0;
            }
        },
        clickCircle(index) {
            this.counterPhotos = index;
        },
    }
});

console.log(app);