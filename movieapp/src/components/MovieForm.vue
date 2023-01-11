<template>
    <form @submit.prevent="onSubmit" class="text-center">
        <input class="form-control mb-2"
            type="text"  
            name="name" 
            v-model="name"
            placeholder="Enter movie name please..."
        >
        <input class="form-control mb-2"
            type="text"  
            name="url"
            v-model="url" 
            placeholder="movie URL"
        >
        <button type="submit" class="btn btn-primary btn-block">Submit</button>
    </form>
</template>

<script>
    import { v4 as uuidv4 } from 'uuid';
    export default {
        name: "Form",
        props:{
            addMovie: Function,
        },
        data(){
            return {
                name: "",
                url: ""
            }
        },
        methods: {
            onSubmit : function() {
                this.addMovie({
                    name: this.name,
                    url: this.url,
                    id: uuidv4(),
                    date: Date.now()
                })
                this.name = "";
                this.url = "";
            }
        }
    }
</script>

<style>

</style>