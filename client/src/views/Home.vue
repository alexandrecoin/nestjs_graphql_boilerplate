<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <add-article-form />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import AddArticleForm from '@/components/AddArticleForm.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    AddArticleForm
  },
};
</script>
