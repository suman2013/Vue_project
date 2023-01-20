<template>
  <div class="container h-100">
    <div class="row mt-5" v-if="!userData">
      <div class="col-md-6">
        <img
          src="../assets/home.svg"
          alt=""
          class="img-fluid hero-img animate__animated animate__fadeIn animate__slow"
        />
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center p-5">
        <h3
          class="text-center text-uppercase animate__animated animate__bounce"
        >
          Search your github profile
        </h3>
        <input
          type="text"
          placeholder="Github User Name"
          class="form-control"
          v-model.trim="userName"
        />
        <button type="button" class="btn btn-primary" @click="fetchData" >
          Search
        </button>
      </div>
    </div>

    <div class="row mt-3" v-else>
      <div class="col-md-4">
        <UserCard :userData="userData" :resetData="resetData" />
      </div>
      <div class="col-md-8">
        <Repos :repos_url="repos_url"/>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios"

//components
import UserCard from "../components/UserCard.vue"
import Repos from "../components/Repo.vue"

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    UserCard,
    Repos
  },
  data(){
    return {
      userName: "",
      userData: null,
      repos_url: null
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  watch: {
    isAuthenticated: function(newVal){
			if(!newVal){
				return this.$router({path: "/signin"})
			}
		}
  },
  methods: {
    fetchData: async function(){
      try{
        console.log(this.userName);
        const api = "https://api.github.com/users/"
        console.log(api+this.userName)
        const {data} = await Axios.get(api+this.userName);
        this.userData = data;
        this.repos_url = data.repos_url
      }catch(err){
        this.$swal({
          icon: "error",
          title: "ops",
          text: "Please check user name"
        })
      }
    },
    resetData: function(){
      this.userData = null;
      this.userName = "";
      this.repos_url = null
    }
  }
  
};
</script>


<style  scoped>
.hero-img {
  height: 70vh;
  width: 100%;
}
button {
  margin-top: 5px;
  border-radius: 5px;
  text-transform: uppercase;
}
</style>