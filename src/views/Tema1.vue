<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Estándares internacionales
        
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los riesgos derivados de una instalación eléctrica deficiente pueden ser graves, tanto en el ámbito doméstico como en el industrial. Por ello, es fundamental seguir todas las precauciones necesarias para prevenir accidentes eléctricos. En este contexto, las normas técnicas constituyen una herramienta esencial, ya que proporcionan las directrices necesarias para garantizar instalaciones eléctricas seguras y confiables.


  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
