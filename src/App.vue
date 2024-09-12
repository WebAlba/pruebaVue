<template>
  <div>
  <table>
    <tr v-for="comment in comments">
      <td>
        {{ comment.id }}
      </td>
      <td>
        {{ comment.apellidos }}
      </td>
      <td>
        {{ comment.nombre }}
      </td>
      <td>


        <a href="'https://www.profangel.somee.com/api/Empleados/${ comment.id }'">Go to register</a>
      </td>
    </tr>
  </table>
  <button @click="getcomments">Dades</button>
  <button v-on:click="getcomments">Dades</button>
</div>
</template>

<script>
export default {
  data() {
    return{
      comments:[],
      nom:'Angel'
    }
  },
  methods:{
    async getcomments() {
      const response = await fetch('https://www.profangel.somee.com/api/Empleados');
      const data = await response.json();
      this.comments = data;
    }
  }
}
</script>
  


<style scoped>

</style>
