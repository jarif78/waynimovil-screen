<template>
  <div>
    <Header />

    <h1 class="text-center text-xl font-bold mt-6">Desarrollo nuevo look and feel</h1>

    <div class="w-84 md:w-100 mx-auto bg-white p-4 mt-6 rounded-xl shadow-xl">
      <div class="text-center py-4 lg:px-4" role="button">
        <router-link to="/solicitud-completada">
          <div
            class="p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span class="font-semibold ml-3 mr-2 text-left flex-auto">Solicitud completada</span>
            <svg
              class="fill-current opacity-75 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
              />
            </svg>
          </div>
        </router-link>
      </div>

      <div class="text-center py-4 lg:px-4" role="button">
        <router-link to="/solicitud-cancelada">
          <div
            class="p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            <span class="font-semibold ml-3 mr-2 text-left flex-auto">Solicitud cancelada</span>
            <svg
              class="fill-current opacity-75 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
              />
            </svg>
          </div>
        </router-link>
      </div>

      <div class="text-center py-4 lg:px-4" role="button">
        <router-link to="/propuesta-comercial">
        <div
          class="p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span class="font-semibold ml-3 mr-2 text-left flex-auto">Propuesta comercial</span>
          <svg
            class="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </svg>
        </div>
        </router-link>
      </div>

      <div class="text-center py-4 lg:px-4" role="button">
        <router-link to="/ingreso">
        <div
          class="p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span class="font-semibold ml-3 mr-2 text-left flex-auto">Ingreso</span>
          <svg
            class="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </svg>
        </div>
        </router-link>
      </div>

      <div class="text-center py-4 lg:px-4" role="button">
        <router-link to="/contrasenia">
        <div
          class="p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span class="flex rounded-full bg-purple-900 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
          <span class="font-semibold mr-2 text-left flex-auto">Contraseña</span>
          <svg
            class="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </svg>
        </div>
        </router-link>
      </div>

      <div class="text-center py-4 lg:px-4" role="button">
        <router-link to="/solicitud-paso-1">
        <div
          class="p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span class="flex rounded-full bg-purple-900 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
          <span class="font-semibold mr-2 text-left flex-auto">Solicitud paso 1</span>
          <svg
            class="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </svg>
        </div>
        </router-link>
      </div>

      <div class="text-center py-4 lg:px-4" role="button">
        <router-link to="/solicitud-paso-3">
        <div
          class="p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span class="flex rounded-full bg-purple-900 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
          <span class="font-semibold mr-2 text-left flex-auto">Solicitud paso 3</span>
          <svg
            class="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </svg>
        </div>
        </router-link>
      </div>

      <div class="text-center py-4 lg:px-4" role="button">
        <router-link to="/solicitud-paso-4">
        <div
          class="p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span class="flex rounded-full bg-purple-900 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
          <span class="font-semibold mr-2 text-left flex-auto">Solicitud paso 4</span>
          <svg
            class="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </svg>
        </div>
        </router-link>
      </div>

      <div class="text-center py-4 lg:px-4" role="button">
        <router-link to="/solicitud-paso-5">
        <div
          class="p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span class="flex rounded-full bg-purple-900 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
          <span class="font-semibold mr-2 text-left flex-auto">Solicitud paso 5</span>
          <svg
            class="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
            />
          </svg>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

