<template>
  <div id="PopuplPoll">
    <div class="bg-gray-990 text-white mt-24 p-3 rounded-t-lg text-center relative">
      <p class="text-xs font-bold">
        Nos ayudás constestando estas preguntas:
        <br />¿Cómo te resultó solicitar tu préstamo?
      </p>

      <div class="flex items-center justify-center">
        <button class="btn-medium-fill bg-green-800 mt-3" @click="clickAnswer">Responder</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: "#PopuplPoll",
  data() {
    return {};
  },
  methods: {
    clickAnswer: () => {
      alert("respondeme mierda");
    },
  },
};
</script>