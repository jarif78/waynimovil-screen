<template>
  <div>
    <Header />

    <div class="w-84 md:w-100 mx-auto text-black">
      <div v-if="!isPrepared && !isTransferred">
        <div class="flex justify-center">
          <img class="bock mt-8" :src="img.ok" alt="ok" />
        </div>
        <p class="block mt-4 text-xl font-bold text-center">
          ¡Solicitud de préstamo completada!
        </p>
      </div>

      <div class="bg-white p-3 border border-gray-500 rounded-lg mt-4">
        <p class="text-gray-900 text-2xs font-bold">ESTADO DE TU PRÉSTAMO:</p>
        <table class="table-auto mt-3">
          <tbody>
            <tr>
              <td class>
                <hr
                  v-if="isChecking"
                  class="border-solid border-2 rounded-md border-green-800 animate-pulse"
                />
                <hr
                  v-else
                  class="border-solid border-2 rounded-md border-gray-500"
                />
              </td>
              <td class>
                <hr
                  v-if="isPrepared"
                  class="border-solid border-2 rounded-md border-green-800 animate-pulse"
                />
                <hr
                  v-else
                  class="border-solid border-2 rounded-md border-gray-500"
                />
              </td>
              <td class>
                <hr
                  v-if="isTransferred"
                  class="border-solid border-2 rounded-md border-green-800 animate-pulse"
                />
                <hr
                  v-else
                  class="border-solid border-2 rounded-md border-gray-500"
                />
              </td>
            </tr>
            <tr>
              <td class="py-2 text-2xs font-bold leading-4">
                Revisando información
              </td>
              <td class="py-2 text-2xs font-bold leading-4">
                Preparando transferencia
              </td>
              <td class="py-2 text-2xs font-bold leading-4">
                ¡Fondos depositados!
              </td>
            </tr>
          </tbody>
        </table>
        <p class="text-xs font-medium leading-5 mt-2">
          Si hay algún inconveniente, te avisaremos por WhatsApp, sino tu
          préstamo será depositado en el transcurso del día.
        </p>
      </div>

      <div class="bg-white p-3 border border-gray-500 rounded-lg my-4">
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

      <button
        v-if="isTransferred"
        class="btn-big-outline-full w-full"
        @click="clickComprobante"
      >
        Descargar comprobante transferencia
      </button>
      <button
        v-if="isTransferred"
        class="btn-big-outline-full w-full mt-4 mb-4"
        @click="clickDocumentacion"
      >
        Descargar documentación
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
