
const App = {
    data(){
        return {
            cardList : [{
                heading : "A trip to portland",
                subHeading : "Long beach in portland",
                myImg : "1.jpeg",
                url : "https://github.com/",
                buttonText : "Visit web here",
            }, {
                heading : "A trip to portland",
                subHeading : "Long beach in portland",
                myImg : "4.jpeg",
                url : "https://github.com/",
                buttonText : "Visit web here",
            }, {
                heading : "A trip to portland",
                subHeading : "Long beach in portland",
                myImg : "5.jpeg",
                url : "https://github.com/",
                buttonText : "Visit web here",
            }]    
        }
    }
}

Vue.createApp(App).mount("#app")