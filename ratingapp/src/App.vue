<template>
  
  <div class="container">
    <div class="card card-body text-center p-5 mt-5 border-primary">
      <div class="col-md-12">
        <i class="fa fa-star text-warning fa-6x" @click="setRating(1)"></i>
        <i class="fa fa-star text-warning fa-6x" @click="setRating(2)"></i>
        <i class="fa fa-star text-warning fa-6x" @click="setRating(3)"></i>
        <i class="fa fa-star text-warning fa-6x" @click="setRating(4)"></i>
        <i class="fa fa-star text-warning fa-6x" @click="setRating(5)"></i>
      </div>
      <h1 class="text-success mt-4" v-if="rating == 1">Sorry to hear that rating</h1>
      <h1 class="text-success mt-4" v-if="rating == 2">we got 2 star, we will improve our service</h1>
      <h1 class="text-success mt-4" v-if="rating == 3">will improve our service:)</h1>
      <h1 class="text-success mt-4" v-if="rating == 4">Awesome:)</h1>
      <h1 class="text-success mt-4" v-if="rating == 5">Great to hear that you loved our service </h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    data(){
      return {
        rating: null
      }
    },
    methods: {
      setRating(rating){
        this.rating = rating;
      }
    }
  }
</script>

<style>
body{
  background-color: #333;
}
</style>