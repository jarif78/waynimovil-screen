<template>
  <div>
    <Header />

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

      <PopupPoll />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import PopupPoll from "../components/PopupPoll";

import imgNext from "../assets/images/arrow-simple-next.svg";
import imgWarning from "../assets/images/warning.svg";

export default {
  components: {
    Header,
    PopupPoll,
  },
  data() {
    return {
      imgNext,
      imgWarning,
    };
  },
};
</script>