<template>
  <div>
    <Header />

    <div class="w-84 md:w-100 mx-auto text-black">
      <div>
        <p class="mt-6 text-xl font-bold text-center">¿Cómo pagarás tu préstamo?</p>
        <p class="mt-2 text-xl text-center leading-snug text-gray-900">Las cuotas serán debitadas mensualmente de la siguiente tarjeta de débito:</p>
      </div>

      <div class="flex items-center bg-white p-3 border border-gray-500 rounded-lg mt-6">
        <div class="mr-10px">
          <img class="h-5" :src="img.visa" alt="visa" />
        </div>
        <div>
          <p class="text-xs font-bold">Tarjeta de débito Galicia</p>
          <p class="text-xs font-medium">{{ data.cbu }}</p>
        </div>
      </div>

      <div class="flex items-center mt-2">
        <img class="h-4" :src="img.next" alt="next" />
        <span class="text-purple-900 text-xs font-bold">Depositar en otra cuenta</span>
      </div>

      <div class="bg-white p-3 border border-gray-500 rounded-lg mt-6">
        <p class="text-xs font-medium text-gray-900">Código de seguridad</p>
        <p class="text-base font-medium">4567</p>
      </div>

      <div class="flex items-center mt-2">
        <p class="text-xs font-medium text-gray-900 leading-snug">Pedimos esta información para confirmar la validez de la tarjeta.</p>
      </div>

      <button class="btn-big-fill w-full mt-6 mb-6" @click="clickDocumentacion">Continuar</button>

      <modalTerminos v-bind:toggle="toggleModal" v-if="toggleModal" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import modalTerminos from "../components/modals/Terminos";

import imgOK from "../assets/images/ok.svg";
import imgNext from "../assets/images/arrow-simple-next.svg";
import imgVisa from "../assets/images/visa.svg";

export default {
  components: {
    Header,
    modalTerminos,
  },
  data() {
    return {
      toggleModal: false,
      img: {
        ok: imgOK,
        next: imgNext,
        visa: imgVisa
      },
      data: {
        nombre: "Yanel",
        montoPrestamo: new Intl.NumberFormat("de-DE").format(10000),
        cuotas: 8,
        montoCuota: new Intl.NumberFormat("de-DE").format(2040),
        tna: 58,
        cft: 329,
        montoDevolver: new Intl.NumberFormat("de-DE").format(16320),
        banco: "Banco Galicia",
        cbu: "007094932840284757345",
        fechaInicial: "1 de mayo",
      },
      isChecking: true,
      isPrepared: false,
      isTransferred: false,
      isCanceled: false,
    };
  },
  methods: {
    clickComprobante: () => {
      alert("Descarga de comprobante...");
    },
    clickDocumentacion: () => {
      alert("Descarga de documentación...");
    },
  },
};
</script>
