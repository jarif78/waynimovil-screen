<template>
  <div>
    <div
      id="header"
      class="sticky top-0 z-40 bg-white shadow-header flex items-center justify-around h-14 md:h-16"
    >
      <img :src="imgArrowBack" alt="back" role="button" />
      <img :src="imgLogo" alt="logo" role="button" />
      <img :src="imgExit" alt="exit" role="button" />
    </div>

    <div class="bg-white w-100 h-120 mx-auto">
        <p class="text-2xl font-bold text-center text-black leading-5">Estamos calculando tu préstamo</p>
        <p class="text-base text-center text-gray-900 leading-6">¡Esperanos por favor! No nos tomará más de unos instantes 😉</p>
    </div>
  </div>
</template>

<script>
import imgArrowBack from "../assets/images/arrow-back.svg";
import imgLogo from "../assets/images/wayni-logo-two-colors.svg";
import imgExit from "../assets/images/exit.svg";

export default {
  data() {
    return {
      imgArrowBack,
      imgLogo,
      imgExit,
    };
  },
};
</script>