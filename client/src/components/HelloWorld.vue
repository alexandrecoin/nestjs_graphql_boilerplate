<template>
  <div class="hello">
    <div v-for="meal in getMeals" :key="meal.id">{{ meal.id }} {{ meal.description }}</div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'HelloWorld',
  apollo: {
    getMeals: gql`
      query {
        getMeals {
          id
          description
        }
      }
    `,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
