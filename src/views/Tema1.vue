<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Estándares internacionales
        
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          <br> <br>
          p.mb-0 Los riesgos derivados de una instalación eléctrica deficiente pueden ser graves, tanto en el ámbito doméstico como en el industrial. Por ello, es fundamental seguir todas las precauciones necesarias para prevenir accidentes eléctricos. En este contexto, las normas técnicas constituyen una herramienta esencial, ya que proporcionan las directrices necesarias para garantizar instalaciones eléctricas seguras y confiables.
          <br> <br> 
          br

      .subt.mb-4(data-aos="fade-right")
        .row.align-items-center
          .col-md-auto.col-3
            img(src='@/assets/curso/ico_subt.svg', alt='')
          .col-md-auto.col-9.ps-0
            h3.mb-0.text-white ¿Qué es la CEI o IEC?

      .row.justify-content-center.align-items-center.mb-2
        p La Comisión Electrotécnica Internacional CEI o IEC, por sus siglas en inglés International electrotechnical commission, es una organización internacional dedicada a la estandarización en los campos eléctrico, electrónico y de tecnologías afines. Muchas de sus normas se desarrollan conjuntamente con la Organización Internacional de Normalización (ISO), dando lugar a las normas conjuntas ISO/IEC (2013).

      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          <br> <br> <br>         
          p.mb-0 La CEI fue fundada en 1904 durante el congreso eléctrico internacional celebrado en San Luis, Estados Unidos. Su primer presidente fue el renombrado científico Lord Kelvin. Inicialmente, la sede de la organización se encontraba en Londres, pero en 1948 fue trasladada a Ginebra, Suiza; en la actualidad, está compuesta por los organismos nacionales de normalización en los sectores mencionados, representando a más de 60 países miembros desde 2003.
          <br> <br> <br> <br>

      p.mt-4.mb-4 Entre las contribuciones más importantes de la CEI se destacan el desarrollo de estándares para unidades de medida como:

      .row.justify-content-center.mb-4(data-aos="fade-down")
        .col-lg-4.col-md-6.mb-3
          .tarjeta.tarj-hover.text-center.p-4.h-100
            img.mb-0(src='@/assets/curso/temas/t1/tar1-1.png', alt='')
            p.mb-0 El “Gauss”, proviene del apellido del matemático y físico alemán Carl Friedrich Gauss y es una unidad del sistema CGS (centímetro-gramo-segundo) para el campo magnético.  
        .col-lg-4.col-md-6.mb-3
          .tarjeta.tarj-hover.text-center.p-4.h-100
            img.mb-0(src='@/assets/curso/temas/t1/tar1-1.png', alt='')
            p.mb-0 El hercio (Hertz), proviene del físico alemán Heinrich Hertz, y se entiende como la unidad de frecuencia en el “SI” (un ciclo por segundo).
        .col-lg-4.col-md-6.mb-3
          .tarjeta.tarj-hover.text-center.p-4.h-100
            img.mb-0(src='@/assets/curso/temas/t1/tar1-1.png', alt='')
            p.mb-0 El Weber, proviene del físico alemán Wilhelm Eduard Weber. Es la unidad de flujo magnético en el “SI”.

      .row.justify-content-center.align-items-center.mb-4.bgmorado.borde-redondo
        p.px-5.py-3.mt-2 #[b Nota: el Sistema Internacional de Unidades (SI)], sirve para unificar y estandarizar las mediciones a nivel mundial, permitiendo que científicos, ingenieros y profesionales de diferentes países hablen el mismo idioma en cuanto a unidades de medida, como el metro, el kilogramo o el segundo; facilitando la comunicación, la comparación de datos y el avance de la ciencia y la tecnología.

      .row.justify-content-center.align-items-center.mb-2
        p En 1938, la Comisión Electrotécnica Internacional (CEI) publicó por primera vez el Vocabulario Electrotécnico Internacional (VEI), con el propósito de unificar la terminología técnica utilizada en el ámbito de la electricidad. Desde entonces, este esfuerzo se ha mantenido y actualizado constantemente, convirtiendo al VEI en una herramienta esencial para estandarizar el lenguaje técnico en la industria eléctrica a nivel mundial.

      .row.align-items-center.mb-3(data-aos="fade-right")
        .col-auto.bgamarilloclaro.borde-redondo
          h3.px-1.pt-2 Misión de la CEI o IEC

      p La misión principal de la CEI es fomentar la cooperación internacional en todos los aspectos relacionados con la normalización electrotécnica. Para ello, se han propuesto los siguientes objetivos estratégicos:

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.col-md-12.col-sm-12
          ul.lista-ul--color.lista-ul--separador.fa-al.mb-0
            li.mb-2
              i.fas.fa-check-circle
              | Identificar y responder eficazmente a las necesidades del mercado global.
            li.mb-2
              i.fas.fa-check-circle
              | Promover la adopción de sus normas y esquemas de certificación en todo el mundo.
            li.mb-2
              i.fas.fa-check-circle
              | Asegurar la calidad de productos y servicios mediante la aplicación de sus estándares.
            li.mb-2 
              i.fas.fa-check-circle
              | Mejorar la eficiencia de los procesos industriales.
            li.mb-2 
              i.fas.fa-check-circle
              | Contribuir a la protección de la salud y seguridad de las personas.
            li.mb-2 
              i.fas.fa-check-circle
              | Apoyar la preservación del medio ambiente.
        .col-lg-4.col-md-6.col-12
          img(src='@/assets/curso/temas/t1/img3.png', alt='').d-none.d-lg-block

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img4.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          <br> <br>
          p.mb-0 En el contexto colombiano, la IEC desempeña un papel clave como referente técnico para la elaboración y actualización del #[b RETIE] (Reglamento Técnico de Instalaciones Eléctricas). A su vez, la norma #[b NTC 2050] permite adaptar y convertir estos lineamientos internacionales en normativa de obligatorio cumplimiento en el país, garantizando así instalaciones seguras y alineadas con los estándares internacionales.
          <br> <br> 
          br



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
