<template>
  <div>
    <div
      class="flex justify-center items-center bg-green-800 h-10 text-white font-bold"
    >
      <p>WAYNIMOVIL</p>
    </div>
    <div class="container mx-auto text-center">
      <h1 class="text-xl font-bold">Nuevas pantallas</h1>
      <br />
      <br />
      <div>
        <router-link to="/solicitud-completada"
          >Solicitud Completada</router-link
        >
        <br />
        <br />
        <router-link to="/solicitud-cancelada">Solicitud Cancelada</router-link>
        <br />
        <br />
        <router-link to="/propuesta-comercial">Propuesta Comercial</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
