<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Medidas de seguridad en las instalaciones eléctricas

    p.mb-4 La electricidad es una fuente de energía esencial para el funcionamiento de la vida moderna, pero también representa un riesgo significativo si no se gestiona adecuadamente. Por esta razón, es fundamental aplicar rigurosas medidas de seguridad en las instalaciones eléctricas, con el fin de prevenir accidentes, proteger la integridad de las personas y preservar la infraestructura. A continuación, se detallan las principales recomendaciones:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-12.col-sm-12

        PasosA.color-acento-contenido.mb-5(tipo="l")
          .row
            .col-md-8.mb-4.mb-md-0
              h3 Diseño e instalación segura
              p Todos los equipos e instalaciones eléctricas deben ser diseñados e instalados de manera que se evite el contacto accidental con fuentes de tensión y se minimice el riesgo de incendios. La elección de materiales debe considerar las tensiones eléctricas a las que estarán sometidos, asegurando su resistencia y durabilidad.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/t4/tar1-1.png', alt='Texto que describa la imagen')
          .row
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t4/tar1-2.png', alt='Texto que describa la imagen')
            .col-md-8
              h3 Intervención de personal calificado
              p La supervisión, instalación y puesta en funcionamiento de equipos eléctricos debe estar a cargo de personal capacitado y con experiencia comprobada. En instalaciones de alta tensión, es crucial restringir el acceso mediante cercas, señalización, elevación de los equipos o su ubicación en áreas de acceso controlado. Especial atención debe prestarse durante labores de mantenimiento o reparación cercanas, donde pueden retirarse temporalmente las barreras de seguridad.






</template>

<script>
export default {
  name: 'Tema4',
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
