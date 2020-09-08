<template>
  <div>
    <Header />

    <div class="w-84 md:w-100 mx-auto text-black">
      <p class="text-xl font-bold text-center mt-6">
        Vanesa, por favor ingresá a tu cuenta para obtener tu préstamo:
      </p>

      <button
        class="btn-big-fill w-full mt-6 bg-blue-900"
        @click="clickComprobante"
      >
        Ingresá con Facebook
      </button>

      <button
        class="btn-big-fill w-full mt-2 bg-red-900"
        @click="clickComprobante"
      >
        Ingresá con Google
      </button>

      <div class="mt-6 flex items-center">
        <hr class="w-1/2 border border-gray-500" />
        <span class="w-full text-xs font-medium text-gray-900 text-center">
          o con tu DNI o E-mail
        </span>
        <hr class="w-1/2 border border-gray-500" />
      </div>

      <div class="relative border-2 mt-6 rounded-md">
        <label
          for="user"
          class="absolute top-1 left-3 text-xs font-medium text-gray-900 -z-1"
          >DNI o Email</label
        >
        <input
          type="text"
          name="user"
          placeholder="24601430"
          class="block pl-3 pb-1 pt-6 w-full rounded-md text-base font-medium text-black bg-white"
        />
      </div>

      <button class="btn-big-fill w-full mt-6" @click="clickComprobante">
        Entrar
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
