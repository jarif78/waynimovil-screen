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

        <div
          class="bg-red-100 flex items-center p-2 rounded border border-red-900 border-opacity-25 mt-3"
        >
          <img class="mr-3" :src="imgWarning" alt="warning" role="button" />
          <span class="text-xs font-bold">Solicitud cancelada</span>
        </div>

        <p class="text-xs font-medium leading-5 mt-3">
          Yanel lo sentimos, pero por el momento no podemos avanzar con tu solicitud de préstamo ya que tu perfil no se adapta a los términos y condiciones de otorgamiento de Waynimóvil.
          <br />
          <br />Esperamos poder ayudarte en el futuro.
        </p>
      </div>

      <div class="bg-white p-3 border border-gray-500 rounded-lg my-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold">PRÉSTAMO SOLICITADO:</span>
          <span class="text-xs font-bold line-through">$10.000</span>
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Plazo de devolución</span>
          <span class="text-xs font-bold line-through">8 meses</span>
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Cuotas</span>
          <span class="text-xs font-bold line-through">8 de $2.040</span>
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Tasa Nominal Anual (TNA)</span>
          <span class="text-xs font-bold line-through">58%</span>
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Costo Financiero Total (DFT)*</span>
          <span class="text-xs font-bold line-through">329%</span>
        </div>
        <hr class="mt-6px border-gray-500" />
        <div class="flex items-center justify-between mt-8px">
          <span class="text-xs font-medium">Total a devolver</span>
          <span class="text-xs font-bold line-through">$16.320</span>
        </div>

        <div class="bg-gray-500 rounded text-center mt-3 py-1">
          <span class="text-black text-xs font-bold">PRÉSTAMO NO APROBADO</span>
        </div>
      </div>

      <div class="bg-gray-990 text-white mt-18 p-3 rounded-t-lg text-center relative">
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
import imgWarning from "../assets/images/warning.svg";

export default {
  data() {
    return {
      imgArrowBack,
      imgLogo,
      imgExit,
      imgOK,
      imgNext,
      imgWarning,
    };
  },
};
</script>