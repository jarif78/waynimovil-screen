<template>
  <div>
    <Header />

    <div class="w-84 md:w-100 mx-auto text-black">
      <div
        class="bg-white p-3 border border-gray-500 rounded-lg my-4 shadow-lg"
      >
        <p class="text-xl font-bold text-center">Vanesa, podesmos prestarte:</p>
        <p class="text-4xl font-bold text-center">$5.000</p>

        <!-- component -->
        <div class="w-full mt-3">
          <div class="bg-gray-300 h-1 w-full rounded-full relative">
            <span
              class="bg-green-800 h-5 w-5 absolute top-0 -ml-2 -mt-2 z-10 shadow rounded-full cursor-pointer"
              style="left:50%"
            ></span>
            <span
              class="bg-green-800 h-1 absolute left-0 top-0 rounded-full"
              style="width:50%"
            ></span>
          </div>
          <div class="flex justify-between mt-2 text-2xs font-bold text-gray-900">
            <span class="text-left">$1.000</span>
            <span class="text-right">$10.000</span>
          </div>
        </div>

        <hr class="border mt-3" />

        <p class="text-base font-bold text-center mt-3">
          ¿Cómo querés devolverlo?
        </p>

        <div class="flex justify-between items-center mt-3">
          <div class="w-1/2 border-2 border-green-800 rounded-lg py-2 mr-2">
            <p class="text-xs font-bold text-center">1 Cuota</p>
            <p class="text-xs text-center">de $6.000</p>
          </div>
          <div class="w-1/2 border rounded-lg py-2">
            <p class="text-xs font-bold text-center">2 Cuotas</p>
            <p class="text-xs text-center">de $3.500</p>
          </div>
        </div>

        <div
          class="bg-blue-500 rounded mt-3 py-3px flex justify-center items-center"
        >
          <span class="text-white text-xs font-bold"
            >👌 Comenzá a pagar el {{ data.fechaInicial }}</span
          >
        </div>

        <hr class="mt-3" />

        <div
          class="mt-4 mb-2 flex items-center justify-between"
          role="button"
          @click="toggleModal = !toggleModal"
        >
          <span class="text-purple-900 text-xs font-bold"
            >Ver téminos y condiciones</span
          >
          <img class="h-5" :src="img.next" alt="next" />
        </div>
      </div>

      <button class="btn-big-fill w-full" @click="clickComprobante">
        Continuar
      </button>
      <button
        class="btn-big-outline-full w-full mt-2 mb-4"
        @click="clickDocumentacion"
      >
        Esta opción no me parece interesante
      </button>

      <modalTerminos v-bind:toggle="toggleModal" v-if="toggleModal" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import modalTerminos from "../components/modals/Terminos";

import imgOK from "../assets/images/ok.svg";
import imgNext from "../assets/images/arrow-simple-next.svg";

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
