<script>
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "popular",
  components: {CardProduct},
  computed: {
    products() {
      return this.$store.getters.getProducts.slice(0,3)
    }
  }
}
</script>

<template>
  <div id="popular" style="text-align: left">
    <span class="popular_title">Популярное</span>
  </div>
  <div class="popular">
    <card-product v-for="product in products" :key="product.id" :id="product.id" :title="product.title" :price="product.price" :description="product.description" :image_src="product.img_src"/>

<!--    <card-product title="букетик" price="100" description="супер букет"-->
<!--                  :image_src="require('@/assets/flower1.png')" url="http://krasecology.ru"/>-->
<!--    <card-product title="букетик" price="100" description="супер букет"-->
<!--                  :image_src="require('@/assets/flower2.png')"/>-->
<!--    <card-product title="букетик" price="100" description="супер букет"-->
<!--                  :image_src="require('@/assets/flower3.png')"/>-->
  </div>
</template>

<style scoped>
.popular {
  display: grid;
  margin-top: 80px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  margin-inline: 20px;
  gap: 5%;
}
@media (max-width: 680px) {
  .popular {
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
  }
}

.popular_title{
  font-family: Source Serif Pro;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-variant: small-caps;
  margin-left: 33%
}

@media (max-width: 680px) {
  .popular_title{
    margin-left: 0
  }
}
</style>