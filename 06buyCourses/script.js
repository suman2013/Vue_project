
const App = {
    data(){
        return {
            holdMyItem: [],
            courseIdAddedInCart : [],
            courseList : [{
                id: '1',
                courseName : "Full Stack Developer",
                subTitle : "Learn full stack with React and Django",
                price : 200,
                courseImage : "./django.png",
                url : "https://courses.learncodeonline.in/learn/Full-stack-with-Django-and-React",
                cart: false,
            }, {
                id: '2',
                courseName : "React Developer",
                subTitle : "Learn React JS",
                price : 400,
                courseImage : "rn.png",
                url : "https://courses.learncodeonline.in/learn/Complete-ReactJS-developer-Bootcamp",
                cart: false
            }, {
                id: '3',
                courseName : "InterView Preparations",
                subTitle : "Full Interview preparation course",
                price : 700,
                courseImage : "interview.png",
                url : "https://courses.learncodeonline.in/learn/Complete-Backend-development-with-NodeJS",
                cart: false,
            }]
        }
    },
    computed: {
        finalBill(){
            return this.holdMyItem.reduce((acc, course) => acc + Number(course.price) + (Number(course.price) * 0.18), 0)
        }
    },
    methods: {
        addToHolder(course){
            var contain = false;
            if(this.holdMyItem.length == 0){
                contain = false;
            }else{
                this.holdMyItem.map(function(cours){
                    if(cours.id == course.id){
                        contain = true;
                    }
                })
            }
            
            if(contain == false){
                this.holdMyItem.push(course);
                course.cart = true;
            }
               
        },

        message(msg){
            alert(msg);
        }
    }
}

Vue.createApp(App).mount("#vapp")