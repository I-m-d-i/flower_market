<script>
export default {
  name: "RegistrationComponent",
  methods: {
    registration() {
      this.$store.dispatch("registration", this.formData);
    }
  },
  data() {
    return {
      formData: {
        name: "",
        city: "",
        phone: ""
      }
    }
  }
}
</script>

<template>
    <div class="modal">
      <div class="modal_body">
        <div class="modal_h">
          <p>Регистрация</p>
        </div>
        <form class="form_reg" @submit.prevent="registration()">
          <input v-model="formData.name" type="text" name="name" placeholder="ФИО">
          <input v-model="formData.city" type="text" name="city" placeholder="Город">
          <input v-model="formData.phone" style="margin-top: 10px" type="text" name="phone" placeholder="Номер телефона">
          <button  class="btn_reg" type="submit">Готово</button>
        </form>
      </div>
  </div>

</template>

<style scoped>

.modal_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.form_reg {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center
}

input {
  min-height: 75px;
  width: 370px;
  border-radius: 40px;
  background-color: #D5CBCB;
  color: #6B5D76;
  flex: 1;
  font: 400 24px Playfair Display, sans-serif;
  outline: none;
  padding: 10px 0 10px 30px;

}

button {
  color: #4F3960;
  max-width: 264px;
  height: 65px;
  border-radius: 33px;
  background-color: #D5CBCB;
  flex: 1;
  padding: 12px 45px 12px 45px;
  margin-top: 45px;
  font: small-caps 400 28px Playfair Display;
}

.modal_h {
  text-align: center;
  font: 400 28px Playfair Display;
  padding-block: 45px;
}

.modal {
  width: 465px;
  height: 645px;
  display: block;
  border-radius: 90px;
  background-color: #EDE5E5;
}

.modal_body {
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: stretch;
  width: 100%;
  height: 100%;
  padding-block: 25px;
}
</style>