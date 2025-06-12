<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-12

        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/img_intro.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            br
            p La energía eléctrica es una de las formas de energía más utilizadas tanto en el ámbito doméstico como en el industrial. Su presencia es tan esencial en la vida moderna que muchas de nuestras actividades cotidianas serían impensables sin ella. A diario hacemos uso de electrodomésticos como lámparas, neveras, hornos microondas, equipos de sonido, televisores, computadores, planchas, entre otros, todos ellos dependientes de la energía eléctrica para su funcionamiento.
              br
              br
              | En el entorno industrial, la electricidad cumple un papel fundamental, ya que es la principal fuente de alimentación para motores, maquinarias y diversos equipos, lo que la convierte en un pilar del desarrollo tecnológico y productivo.
              <br> <br>

    .row.justify-content-center.align-items-center(data-aos="fade-right")    
      .col-lg-12.p-4
        .row.bgmorado
          p.py-3.px-5 En definitiva, la energía eléctrica es indispensable en nuestra vida diaria y en el progreso de la sociedad. No obstante, para aprovecharla de manera eficiente y segura, es fundamental adoptar medidas de precaución que protejan tanto nuestra integridad física como los bienes materiales. Una red eléctrica bien diseñada y utilizada no solo optimiza el rendimiento de los equipos, sino que también reduce significativamente los riesgos eléctricos.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/DTveW204nFc?si=HfsVOKaLP1DJzieP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Seguridad e implementación de las instalaciones eléctricas.



</template>

<script>
export default {
  name: 'Introduccion',
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
