<template>
    <div class="card border-primary">
        <div class="card-body text-center">
            <img :src="user.picture?.large" alt="" width="150" height="150" class="rounded-circle img-thumbnail border-danger zoomIn">
            <div class="card-title text-primary">
                <h1>
                    <span class="pl-2">{{ user.name?.title }}</span>
                    <span class="pl-2">{{ user.name?.first }}</span>
                    <span class="pl-2">{{ user.name?.last }}</span>
                </h1>
                <p class="badge bg-success text-white">{{ user.gender }}</p>
                <p class="text-dark"><span><i class="fas fa-envelope mr-1"></i></span><span>{{ user.email }}</span></p>
                <p class="text-dark"><span><i class="fas fa-phone mr-1"></i></span><span>{{ user.phone }}</span></p>
                <p class="text-muted">Registered on {{ formatedDate(user.registered.date) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment"
export default{
    name: "UserCard",
    props: ["user"],
    methods: {
        formatedDate: function(date){
            return moment(date).format("DD/MM/YYYY ]at] hh:mm a")
        }
    }
}
</script>

<style>
</style>