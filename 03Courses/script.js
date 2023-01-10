
const App = {
    data(){
        return {
            courseList : [{
                id: '1',
                courseName : "Full Stack Developer",
                subTitle : "Learn full stack with React and Django",
                price : 200,
                courseImage : "./django.png",
                url : "https://courses.learncodeonline.in/learn/Full-stack-with-Django-and-React"
            }, {
                id: '2',
                courseName : "React Developer",
                subTitle : "Learn React JS",
                price : 400,
                courseImage : "rn.png",
                url : "https://courses.learncodeonline.in/learn/Complete-ReactJS-developer-Bootcamp"
            }, {
                id: '3',
                courseName : "Backend Developer",
                subTitle : "Learn full backend with Node",
                price : 700,
                courseImage : "interview.png",
                url : "https://courses.learncodeonline.in/learn/Complete-Backend-development-with-NodeJS"
            }]
        }
    }
}

Vue.createApp(App).mount("#vapp")