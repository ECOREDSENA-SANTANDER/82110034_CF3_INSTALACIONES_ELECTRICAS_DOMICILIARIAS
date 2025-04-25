<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Riesgo eléctrico

    .row.align-items-center.justify-content-center.mb-4(data-aos="fade-down")
      .col-sm-12.col-md-12.col-lg-5
        .row.bgmoradooscuro.borde-redondo
          p.px-5.ml-mr-3.py-2.mt-2.mb-2 El riesgo eléctrico se refiere a la posibilidad de que una persona sufra daños o lesiones debido al contacto directo o indirecto con la electricidad, así como a fallas en los sistemas eléctricos, estos riesgos pueden derivarse de situaciones como descargas eléctricas, cortocircuitos, sobrecargas, arcos eléctricos, incendios, explosiones o fallas en el aislamiento de los conductores.
      .col-6.col-md-6.col-lg-3
        img.mt-2(src='@/assets/curso/temas/t3/img1.png', alt='')
      .col-sm-12.col-md-12.col-lg-4
        .row.align-items-center
          .col-auto
            img.mt-4(src='@/assets/curso/temas/t3/ico1.png', alt='').d-none.d-lg-block
        .row
          p Los riesgos eléctricos no solo ponen en peligro la integridad física de las personas, sino que también pueden causar daños a los equipos, instalaciones y afectar la continuidad de las operaciones en diferentes entornos laborales o residenciales.

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/ico_subt.svg', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white ¿Qué es un cuadro de riesgo eléctrico?

    .row.justify-content-center.align-items-center.mb-4
      p.mb-4 Un cuadro de riesgo eléctrico es una herramienta de gestión y prevención que permite identificar, clasificar, evaluar y controlar los riesgos asociados al uso de la energía eléctrica en un entorno determinado. Esta herramienta facilita la toma de decisiones en materia de seguridad eléctrica y sirve como guía para implementar acciones preventivas y correctivas.
      p.mb-3 En un cuadro de riesgo eléctrico se describen:
      ul.lista-ul--color.lista-ul--separador.fa-al.mb-0
        li.mb-2
          i.fas.fa-check-circle
          | Los tipos de riesgos eléctricos identificados (por ejemplo, contacto con partes energizadas, fallas en el sistema de puesta a tierra, sobrecargas, cortocircuitos).
        li.mb-2
          i.fas.fa-check-circle
          | El nivel de probabilidad e impacto de cada riesgo.
        li.mb-2
          i.fas.fa-check-circle
          | Las medidas preventivas y de control sugeridas (aislamiento, señalización, mantenimiento, uso de equipos de protección personal, formación del personal, entre otras).
        li.mb-2
          i.fas.fa-check-circle
          | Los responsables y tiempos de ejecución de dichas acciones.        
    
    p.mb-4 Esta herramienta es clave para promover un entorno más seguro, minimizar accidentes laborales y garantizar el cumplimiento de normativas en seguridad eléctrica.

    .row.justify-content-center.align-items-center.mb-4
      .titulo-sexto.color-acento-contenido
        h5 Figura 1. 
        | Efectos de la electricidad según la intensidad de corriente
      figure
        img.mb-2(src='@/assets/curso/temas/t3/fig1.png', alt='La figura indica que los efectos de la corriente eléctrica en el cuerpo dependen de su intensidad. Desde cosquilleo leve (1-3 mA) hasta riesgo de muerte por fibrilación ventricular (60-75 mA). A mayor intensidad, mayores daños: contracciones musculares, paro respiratorio, asfixia y afectación del corazón.')
      figcaption Fuente: Fuente: https://www.unirioja.es/servicios/sprl/pdf/riesgos_electricos.pdf


    .row.justify-content-center.align-items-center(data-aos="fade")
      .col-lg-12
        TabsA.color-acento-botones
          .tarjeta.color-primario.p-4(titulo="Arcos eléctricos")
            p.mb-3 Logra la integración de autoridades locales, comunidad y actores clave del proceso.
          .tarjeta.color-primario.p-4(titulo="Ausencia de suministro eléctrico")
            p Define y asigna roles y responsabilidades para cada integrante del equipo.
          .tarjeta.color-primario.p-4(titulo="Contacto directo con partes energizadas")
            p Ajustar los planes de desarrollo en correspondencia con la estrategia para garantizar la gestión hacia un entorno o municipio saludable.
          .tarjeta.color-primario.p-4(titulo="Contacto indirecto")
            p Ajustar los planes de desarrollo en correspondencia con la estrategia para garantizar la gestión hacia un entorno o municipio saludable.
          .tarjeta.color-primario.p-4(titulo="Riesgo por rayos (descargas atmosféricas)")
            p Ajustar los planes de desarrollo en correspondencia con la estrategia para garantizar la gestión hacia un entorno o municipio saludable.
          .tarjeta.color-primario.p-4(titulo="Cortocircuito")
            p Ajustar los planes de desarrollo en correspondencia con la estrategia para garantizar la gestión hacia un entorno o municipio saludable.
          .tarjeta.color-primario.p-4(titulo="Sobretensión de paso o de contacto")
            p Ajustar los planes de desarrollo en correspondencia con la estrategia para garantizar la gestión hacia un entorno o municipio saludable.




</template>

<script>
export default {
  name: 'Tema3',
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
