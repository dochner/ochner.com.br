<template>
  <div class="min-h-screen">
    <div class="w-full h-full  bg-white py-1">
      <UContainer>
        <UButton
          color="black"
          variant="solid"
        >
          <UIcon
            class="text-lg"
            name="i-heroicons-globe-americas-solid"
          />
        </UButton>
      </UContainer>
    </div>
    <slot />
  </div>
</template>
