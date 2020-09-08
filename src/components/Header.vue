<template>
  <div
    class="sticky top-0 z-40 bg-white shadow-header flex items-center justify-around h-14 md:h-16"
  >
    <img :src="imgArrowBack" alt="back" role="button" @click="clickBack" />
    <img :src="imgLogo" alt="logo" />
    <img :src="imgExit" alt="exit" role="button" @click="clickExit" />
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
  methods: {
    clickExit: () => {
      window.location.href = "https://www.waynimovil.com/";
    },
    clickBack: () => {
      window.location.href = "/";
    },
  },
};
</script>