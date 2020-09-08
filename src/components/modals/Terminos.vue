<template>
  <div
    class="overflow-auto h-screen fixed z-50 bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
  >
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-900 opacity-75" @click="isToggle = !isToggle" />
    </div>
    <div
      class="bg-white mt-16 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div class="bg-white px-4 sm:p-6 pt-5">
        <div class="flex justify-end items-center">
          <div class="cursor-pointer z-50" @click="isToggle = !isToggle">
            <svg
              class="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              />
            </svg>
          </div>
        </div>
        <div class="text-black">
          <h3 class="text-base font-bold text-center mt-4">Estos serán los términos de tu préstamo:</h3>
          <p
            class="text-xs font-medium leading-snug mt-6 mb-8 text-center"
          >*Tasa de interés nominal Anual (TNA) 58%. La tasa de interés es fija. El CFT (NA) 329% estimado para un tiempo estimado de 30 días. Puede variar dependiendo del plazo y el monto de tu préstamo. El incumplimiento en el pago de los préstamos puede traer aparejado alguna o todas las siguientes consecuencias: (1) información a las entidades de riesgo crediticio, (2) prácticas de cobranza, (3) intereses por mora.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["toggle"],
  data() {
    return {
      isToggle: this.toggle,
    };
  }
};
</script>