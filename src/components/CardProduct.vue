<template>
  <div class="div">
    <a  class="img"  :href="'/#/product/'+id">
      <img :src="image_src" class="img" :alt="title"/>
    </a>
    <div class="div-2">
      <div class="div-3">
        <div class="div-4">{{ title }}</div>
        <div class="div-5">{{ description }}</div>
      </div>
      <div class="div-6">
        <div class="div-7">
          <span style="font-family: Crimson Text, -apple-system, Roboto, Helvetica, sans-serif;">{{ price }} руб</span>
        </div>
        <button class="div-8" @click="addToBasket(id)">в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image_src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    id:{
      type: Number,
      required: true,
    }
  },
  methods: {
    addToBasket(id) {
      this.$store.commit("addToBasket", id)
    },
  },
};
</script>

<style scoped>
.div {
  display: flex;
  flex-direction: column;
  padding: 5px;
  min-width: 310px;
  max-width: 460px;
}

button{
  border: none;
}

.img {
  border-radius: 368px 368px 0px 0px;
  aspect-ratio: 0.84;
  object-position: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  align-self: start;
  background:lightgray 50% / cover no-repeat;
}

.div-2 {
  align-self: start;
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px 0 0 0px;
  gap: 5px;
}

.div-3 {
  align-self: start;
  flex-grow: 1;
  width: 100px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.div-4 {
  color: #000;
  font-family: Playfair Display;
  font-size: 24px;
  line-height: normal;
  font-variant: small-caps;
}

.div-5 {
  color: #000;
  margin-top: 18px;
  font-family: Playfair Display;
  font-size: 16px;
  max-height: 100px;
  line-height: normal;
  font-variant: small-caps;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.div-6 {
  flex: 1;
  padding-right: 10px;
}

.div-7 {
  color: #000;
  align-self: stretch;
  font-family: Crimson Text;
  font-size: 24px;
  line-height: normal;
  text-align: center;
  font-variant: small-caps;
}

.div-8 {
  color: #fffbfb;
  align-self: stretch;
  border-radius: 40px;
  background-color: #81637d;
  margin-top: 26px;
  width: 100%;
  flex-grow: 1;
  min-width: 120px;
  min-height: 30px;
  font: small-caps 400 18px Playfair Display, -apple-system, Roboto, Helvetica, sans-serif;
}

@media (max-width: 640px) {
  .div-8 {
    padding: 0 -5px 0 2px;
  }
}

@media (max-width: 991px) {
  .div-8 {
    padding: 0 10px;
  }
}
</style>