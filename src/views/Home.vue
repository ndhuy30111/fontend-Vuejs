<template>
  <div class="home">
    <CarouselCustom :image="imageCarousel"></CarouselCustom>
  </div>
</template>

<script>
import CarouselCustom from "../components/CarouselCustom.vue";

export default {
  name: "Home",
  data() {
    return {
      imageCarousel: [
        {
          src:
            "https://cdn.pixabay.com/photo/2017/02/01/21/47/cube-2031512_960_720.jpg",
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2015/07/15/11/53/woodtype-846089_960_720.jpg",
        },
        {
          src:
            "https://media.istockphoto.com/photos/retire-picture-id154113712?s=612x612",
        },
      ],
    };
  },
  components: {
    CarouselCustom,
  },
};
</script>
