<template>
<main>
  <div class="app p-4 container-fluid">
    <div class="row">
      <div class="col col-md-4 mt-4 offset-md-4">
        <div class="text-center">
          <div v-if="user">
            <User :user="user" />
            <button type="button" @click="fetchuser" class="btn btn-primary btn-lg btn-block mt-2">Fetch new user</button>
          </div>
          <div v-else class="text-center">
            <div class="spinner-grow spinner-border" role="status">
            </div>
            <div class="text-white">Loading...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script>
import axios from "axios"
import User from "./components/UserCard"
export default {
  name: 'App',
  components: {
    User,
  },
  data(){
    return {
      user: null,
    }
  },
  mounted(){
    this.fetchuser();
  },
  methods: {
    fetchuser : function(){
      axios.get("https://randomuser.me/api/")
      .then((res) => {
        console.log(res)
        this.user = res.data.results[0]
      })
      
    }
  }
}
</script>

<style>
main {
	height: 100vh;
	width: 100%;
	background-image: url('./assets/lco-api-one.jpg');
	background-position: center;
	background-size: cover;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
}
</style>
