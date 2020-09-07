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

    <!--CONTENT-->
    <div class="w-84 md:w-100 mx-auto px-3 text-black">
      <div class="bg-white p-3 border border-gray-500 rounded-lg mt-8">
        <p class="text-gray-900 text-2xs font-bold">ESTADO DE TU PRÉSTAMO:</p>
        <table class="table-auto mt-3">
          <tbody>
            <tr>
              <td class>
                <hr class="border-solid border-2 rounded-md border-green-800" />
              </td>
              <td class>
                <hr class="border-solid border-2 rounded-md border-green-800" />
              </td>
              <td class>
                <hr class="border-solid border-2 rounded-md border-green-800" />
              </td>
            </tr>
            <tr>
              <td class="py-2 text-2xs font-bold leading-4">Revisando información</td>
              <td class="py-2 text-2xs font-bold leading-4">Preparando transferencia</td>
              <td class="py-2 text-2xs font-bold leading-4">¡Fondos depositados!</td>
            </tr>
          </tbody>
        </table>
        <p
          class="text-xs font-medium leading-5 mt-2"
        >Si hay algún inconveniente, te avisaremos por WhatsApp, sino tu préstamo será depositado en el transcurso del día.</p>
      </div>

      <div class="bg-white p-3 border border-gray-500 rounded-lg my-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-blue-900">PRÉSTAMO SOLICITADO:</span>
          <span class="text-xs font-bold text-blue-900">$10.000</span>
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Plazo de devolución</span>
          <span class="text-xs font-bold">8 meses</span>
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Cuotas</span>
          <span class="text-xs font-bold">8 de $2.040</span>
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Tasa Nominal Anual (TNA)</span>
          <span class="text-xs font-bold">58%</span>
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Costo Financiero Total (DFT)*</span>
          <span class="text-xs font-bold">329%</span>
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Total a devolver</span>
          <span class="text-xs font-bold">$16.320</span>
        </div>

        <div class="bg-blue-500 rounded text-center mt-3 py-1">
          <span class="text-white text-xs font-bold">👌 Comenzá a pagar el 1 de Mayo</span>
        </div>

        <div class="mt-3">
          <span class="block text-xs font-bold">El dinero se depositará en la cuenta:</span>
          <span class="block text-xs font-medium">Banco Galicia</span>
          <span class="block text-xs font-medium">CBU 007094932840284757345</span>
        </div>

        <hr class="mt-3" />

        <div class="mt-3">
          <span class="block text-xs font-bold">Método de pago:</span>
          <span class="block text-xs font-medium">Débito automático</span>
          <span class="block text-xs font-medium">CBU 007094932840284757345</span>
        </div>

        <hr class="mt-3" />

        <div class="mt-4 mb-2 flex items-center justify-between">
          <span class="text-purple-900 text-xs font-bold">Ver téminos y condiciones</span>
          <img class="h-5" :src="imgNext" alt="next" />
        </div>
      </div>

      <button class="btn-big-outline-full w-full">Descargar comprobante transferencia</button>

      <button class="btn-big-outline-full w-full mt-4">Descargar documentación</button>

      <div class="bg-gray-990 text-white mt-24 p-3 rounded-t-lg text-center relative">
        <p class="text-xs font-bold">
          Nos ayudás constestando estas preguntas:
          <br />¿Cómo te resultó solicitar tu préstamo?
        </p>
        <div class="flex items-center justify-center">
          <button class="btn-medium-fill bg-green-800 mt-3">Responder</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgArrowBack from "../assets/images/arrow-back.svg";
import imgLogo from "../assets/images/wayni-logo-two-colors.svg";
import imgExit from "../assets/images/exit.svg";
import imgOK from "../assets/images/ok.svg";
import imgNext from "../assets/images/arrow-simple-next.svg";

export default {
  data() {
    return {
      imgArrowBack,
      imgLogo,
      imgExit,
      imgOK,
      imgNext,
    };
  },
};
</script>