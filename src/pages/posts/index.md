---
title: Blog - Douglas Ochner
display: ''
plum: true
---

<div class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 relative">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h1 class="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-5xl !leading-loose text-transparent bg-clip-text bg-gradient-to-b from-primary-500 to-secondary">
        My Blog posts
      </h1>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="mt-6 w-full mx-auto">
        <InputText
          name="search"
          label="Search"
          :model-value="search"
          placeholder="Search by title, category, or language"
          @update:model-value="handleInputSearch"
        />
      </div>
    </form>
    <ListPosts />
  </div>
</div>
