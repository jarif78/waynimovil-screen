<template>
  <div>
    <Header />

    <div class="w-84 md:w-100 mx-auto text-black">
      <div>
        <p class="text-xl font-bold text-center mt-6">
          Revisá los detalles para finalizar:
        </p>
      </div>

      <div class="bg-white p-3 border border-gray-500 rounded-lg mt-6">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-blue-900"
            >PRÉSTAMO SOLICITADO:</span
          >
          <span class="text-xs font-bold text-blue-900"
            >${{ data.montoPrestamo }}</span
          >
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Plazo de devolución</span>
          <span class="text-xs font-bold">{{ data.cuotas }} meses</span>
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Cuotas</span>
          <span class="text-xs font-bold"
            >{{ data.cuotas }} de ${{ data.montoCuota }}</span
          >
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Tasa Nominal Anual (TNA)</span>
          <span class="text-xs font-bold">{{ data.tna }}%</span>
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Costo Financiero Total (CFT)*</span>
          <span class="text-xs font-bold">{{ data.cft }}%</span>
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Total a devolver</span>
          <span class="text-xs font-bold">${{ data.montoDevolver }}</span>
        </div>

        <div
          class="bg-blue-500 rounded mt-3 py-3px flex justify-center items-center"
        >
          <span class="text-white text-xs font-bold"
            >👌 Comenzá a pagar el {{ data.fechaInicial }}</span
          >
        </div>

        <div class="mt-3">
          <span class="block text-xs font-bold"
            >El dinero se depositará en la cuenta:</span
          >
          <span class="block text-xs font-medium">{{ data.banco }}</span>
          <span class="block text-xs font-medium">CBU {{ data.cbu }}</span>
        </div>

        <hr class="mt-3" />

        <div class="mt-3">
          <span class="block text-xs font-bold">Método de pago:</span>
          <span class="block text-xs font-medium">Débito automático</span>
          <span class="block text-xs font-medium">CBU {{ data.cbu }}</span>
        </div>
      </div>

      <div class="flex items-center mt-6">
        <div class="mr-2">
          <img class="h-30px" :src="img.check" alt="circle" />
        </div>
        <div>
          <p class="text-black text-xs font-medium">He leído y aceptado los <span class="font-bold text-green-800">términos y concidiones</span></p>
        </div>
      </div>

      <p class="mt-6 text-red-900 text-xs font-bold text-center">Acepta los términos y condiciones para finalizar</p>

      <button disabled
        class="btn-big-fill w-full mt-6"
        @click="clickComprobante"
      >
        Solicitar préstamo
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
import imgCircle from "../assets/images/circle.svg";
import imgCicleCheck from "../assets/images/circle-check.svg";

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
        circle: imgCircle,
        check: imgCicleCheck,
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
