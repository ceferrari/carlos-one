<template>
  <header id="app-header" class="sticky-top">
    <a href="#/" @click="$parent.sidebarToggled = !$parent.sidebarToggled">
      <i class="fas fa-fw fa-bars"></i>
    </a>
    <a href="#/" class="flex-fill">Carlos One</a>
    <a href="#/" @click="$parent.filtersToggled = !$parent.filtersToggled">
      <i class="fas fa-fw fa-filter"></i>
    </a>
  </header>
</template>
