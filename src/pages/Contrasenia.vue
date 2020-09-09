<template>
  <div>
    <Header />

    <div class="w-84 md:w-100 mx-auto text-black">
      <p class="text-xl font-bold text-center mt-6">
        Ingresá tu contraseña:
      </p>

      <div class="relative border-2 mt-6 rounded-md">
        <input
          type="password"
          name="user"
          placeholder="contraseña"
          class="block px-3 py-3 w-full rounded-md text-base font-medium text-black bg-white"
        />
      </div>

      <div>
        <p class="text-purple-900 text-xs font-bold mt-2 text-right">No sé mi contraseña</p>
      </div>

      <button class="btn-big-fill w-full mt-6" @click="clickComprobante">
        Aceptar
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
