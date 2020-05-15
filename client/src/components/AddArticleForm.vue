<template>
  <form @click.prevent="trySubmit" id="form">
    <input type="text" placeholder="title" v-model="form.title" />
    <input type="text" placeholder="description" v-model="form.description" />
    <textarea type="text" placeholder="body" v-model="form.body" />
    <input type="submit" value="Soumettre" />
  </form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        title: '',
        description: '',
        body: '',
        author: 'Alexandre',
        date: new Date(),
      },
    };
  },
  methods: {
    trySubmit() {
      console.log({ ...this.form });
    },
  },
};
</script>

<style scoped>
#form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* input, textarea {
  margin-top: 1em;
  border-radius: 0.5em;
} */

textarea {
  width: 500px;
  height: 350px;
  resize: none;
}

input {
  width: 500px;
  height: auto;
}
</style>
