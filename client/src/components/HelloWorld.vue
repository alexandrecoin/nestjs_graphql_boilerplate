<template>
  <div class="hello">
    <div v-for="meal in getArticles" :key="meal.id">{{ meal.id }} {{ meal.description }}</div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'HelloWorld',
  apollo: {
    getArticles: gql`
      query {
        getArticles {
          title
          description
        }
      }
    `,
  },
  created() {
    console.log(this.getMeals)
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
