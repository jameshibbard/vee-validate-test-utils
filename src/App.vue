<template>
  <div id="app">
    <form @submit="submit">
      <Input />
      <Radio />

      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import Input from './components/Input.vue'
import Radio from './components/Radio.vue'

export default {
  name: 'app',
  $_veeValidate: {
    validator: 'new',
  },
  components: {
    Input,
    Radio
  },
  methods: {
    submit(e) {
      e.preventDefault();

      this.$validator.validateAll().then((result) => {
        if (result){
          alert("All Good!");
        } else {
          alert("Errors!");
        }
      });
    },
  },
}
</script>
