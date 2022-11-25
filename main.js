const { createApp } = Vue ;

createApp({
    data() {
        return{
            message: "HELLO" ,
            image : "img/img.jpeg"
        }
    }
}).mount("#app")