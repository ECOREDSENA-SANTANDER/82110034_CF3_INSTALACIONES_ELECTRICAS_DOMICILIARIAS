<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este documento integra los fundamentos normativos, técnicos y prácticos para la instalación eléctrica segura, enfatizando la aplicación del RETIE, la correcta manipulación de materiales y herramientas, y la identificación de riesgos eléctricos. Destaca la importancia del diseño, ejecución y mantenimiento profesional de las instalaciones, la necesidad de prevenir con acciones concretas los accidentes eléctricos, y la responsabilidad compartida entre diseñadores, técnicos, proveedores y usuarios finales. 
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4
        .row.bggris.borde-redondo
          figure
            img(src="@/assets/curso/sintesis.png", alt="La síntesis organiza los componentes clave relacionados con la seguridad en las instalaciones eléctricas. Incluye estándares internacionales, normativa colombiana (RETIE), análisis de riesgos eléctricos, medidas de protección como puesta a tierra y uso de diferenciales, tipos de empalmes y técnicas de aislamiento. También abarca aspectos de obra civil, requerimientos específicos para instalaciones eléctricas, accesorios y dispositivos eléctricos, así como herramientas frecuentemente utilizadas por electricistas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
