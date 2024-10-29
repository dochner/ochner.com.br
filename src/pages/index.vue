<script setup lang="ts"></script>

<template>
  <header class="relative h-screen pt-$header-height">
    <div class="page-padding">
      <div class="max-w-screen-xl w-full mx-auto">
        <div class="z-2 flex h-[80vh] min-h-[580px] mb-12 pt-20 flex-col justify-center items-center text-center">
          <h2 class="font-serif text-6xl sm:text-7xl md:text-9xl tracking-tight bg-gradient-to-b from-indigo-500 to-black text-transparent bg-clip-text">
            Soluções web personalizadas
          </h2>
        </div>
      </div>
    </div>

    <div class="absolute bottom-4 left-0 right-0 flex items-center flex flex-col">
      <div class="i-carbon-drill-down animate-pulse bg-indigo-800 text-5xl" />
    </div>
  </header>

  <section
    id="works"
    class="relative pt-12"
  >
    <div class="page-padding">
      <div class="max-w-screen-xl w-full mb-16 mx-auto">
        <div class="max-w-350px sm:max-w-sm lg:max-w-md lg:mb-30 mx-auto">
          <h3 class="text-5xl lg:text-6xl font-serif text-center">
            Alguns dos meus trabalhos
          </h3>
        </div>

        <div class="flex flex-col items-center">
          <div class="w-full flex-1">
            <div>Projeto 1</div>
            <div>Projeto 2</div>
            <div>Projeto 3</div>
            <div>Projeto 4</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
