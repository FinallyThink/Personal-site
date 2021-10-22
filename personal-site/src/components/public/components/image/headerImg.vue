<template>
  <video :src="image" autoplay="autoplay" loop="loop" muted="muted"></video>
</template>

<script>
import image from "@/assets/image/1.mp4";
export default {
data(){
  return{  
      image: image

}}
}
</script>

<style>
video{
width: 100%;height: 100%;object-fit: cover;position: absolute;top: 0;left: 0;

}
</style>