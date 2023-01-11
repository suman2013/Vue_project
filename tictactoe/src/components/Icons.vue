
<template>
    <i class="fa fa-circle fa-4x zoomIn text-primary" v-if="iconname == 'circle'"></i>
    <i class="fa fa-times fa-4x zoomIn text-primary" v-else-if="iconname == 'cross'"></i>
    <img src="../assets/logo.png" alt="" class="img-fluid zoomIn" v-else-if="iconname == 'empty'">
</template>

<script>

export default {
    props:{
        iconname:{
            type : String,
            required : true
        }
    }
}
</script>

<style>
img {
  width: 80px;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
  animation-duration: 1s;
}
</style>

++++++++++++++++++  component style  +++++++++++++++++++++++++
++++++++++++++++++  app style  +++++++++++++++++++++++++
<style>
main {
  height: 100vh;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
}

.box {
  height: 150px;
}
</style>

