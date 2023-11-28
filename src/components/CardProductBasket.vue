<script>
export default {
  name: "CardProductBasket",
  props: {
    id: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    }
  },
  computed: {
    product() {
      return this.$store.getters.getProductById(this.id);
    }
  },
  methods: {
    addToBasket(id) {
      this.$store.commit("addToBasket", id);
    },
    deleteFromBasket(id) {
      this.$store.commit("deleteFromBasket", id);
    }
  }
}
</script>

<template>
  <div class="card-product">
    <a class="img" :href="'/#/product/'+id">
      <img :src="product.img_src" class="img" height="398" width="398" :alt="product.title"/>
    </a>
    <div class="div-3">
      <div class="div-4">{{ product.title }}</div>
      <div class="div-5">
        <p>Цвет: <span> белоснежный</span></p>
        <p>Склад:<span> красноярск</span></p>
      </div>
      <div style="display: flex; flex-direction: row;justify-content: space-between; padding-inline: 20px">
        <div class="count-product">
          <button class="decrement" @click="deleteFromBasket(id)">—</button>
          <span>{{ count }}</span>
          <button class="increment" @click="addToBasket(id)">+</button>
        </div>
        <button class="add-to-cart" @click="$router.push({ name: 'PaymentPage'})">Купить</button>
      </div>

    </div>
  </div>
</template>


<style scoped>

.div-3 {
  width: 100%;
  padding-top: 54px;
}

.count-product button {
  color: white;
  border-radius: 3px;
  min-width: 39px;
  width: 40px;
  height: 21px;
  user-select: none;
}

.count-product .decrement {
  background: #D9D9D9;
}

.count-product .increment {
  background: #81637D;
}

.count-product {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
}

.count-product span {
  text-align: center;
  color: #000;
  font-family: Playfair Display;
  padding-bottom: 8px;
  font-size: 24px;
  line-height: normal;
  font-variant: small-caps;
}

.card-product {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-height: 386px;
  gap: 40px;
  width: 100%;
}

img {
  border-radius: 10px;
}

.div-4 {
  padding-bottom: 25px;
  color: #000;
  font-family: Playfair Display;
  font-size: 32px;
  line-height: normal;
  font-variant: small-caps;
}

.div-5 {
  color: #757171;
  font-family: Playfair Display;
  padding-bottom: 31px;
  font-size: 20px;
  line-height: normal;
  font-variant: small-caps;
}

.div-5 span {
  color: #000;
  font-family: Playfair Display;
  font-size: 20px;
  line-height: normal;
  font-variant: small-caps;
}

.add-to-cart {
  color: #fffbfb;
  align-self: stretch;
  border-radius: 40px;
  background-color: #81637d;
  max-width: 140px;
  flex-grow: 1;
  padding: 12px 25px 12px 25px;
  font: small-caps 18px Playfair Display, -apple-system, Roboto, Helvetica, sans-serif;
}
</style>