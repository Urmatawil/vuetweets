<template>
  <nav class="navbar navbar-dark bg-dark">
      <div class="container">
          <span class="navbar-brand">Simulador de tweets</span>
      </div>
      <!--Agragamos una clase dinamica al boton, si showform es false=boton Enviar, si es verdadera boton=rojo Cerrar-->
      <button class="btn pl-4 pr-4" 
      @click="openForm"
      :class="{'btn-success': !showForm, 'btn-danger': showForm}">
      {{!showForm ? "Nuevo Tweet" : "Cerrar Tweet"}}
      </button>
  </nav>
</template>

<script>
export default {
  //importamos el el showform como booleano
    props:{
        showForm: Boolean,
        openForm: Function,
    },

}
</script>

<style>

</style>