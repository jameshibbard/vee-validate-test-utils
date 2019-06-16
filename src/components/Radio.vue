<template>
  <div>
    What's your favourite framework?
    <input type="radio" id="vue" name="framework" value="vue" v-validate="'required'" /> Vue
    <input type="radio" id="react" name="framework" value="react" /> Vue
    <div v-show="errors.has('framework')" style="color: red;">Required</div>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  inject: ['$validator'],
}
</script>
