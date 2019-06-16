<template>
  <div>
    <label for="first_name">First Name: </label>
    <input type="text" id="first_name" name="first_name" v-validate="'required'" />
    <div v-show="errors.has('first_name')" style="color: red;">Required</div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  inject: ['$validator'],
}
</script>
