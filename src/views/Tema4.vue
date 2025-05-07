<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Medidas de seguridad en las instalaciones eléctricas


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t4/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        <br> <br>
        p.mb-0 La electricidad es una fuente de energía esencial para el funcionamiento de la vida moderna, pero también representa un riesgo significativo si no se gestiona adecuadamente. Por esta razón, es fundamental aplicar rigurosas medidas de seguridad en las instalaciones eléctricas, con el fin de prevenir accidentes, proteger la integridad de las personas y preservar la infraestructura.
        <br> <br>
        br

    p.mb-5 A continuación, se detallan las principales recomendaciones:

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
          .row
            .col-md-8.mb-4.mb-md-0
              h3 Espacio suficiente para mantenimiento
              p Los equipos eléctricos deben instalarse dejando espacio adecuado a su alrededor, permitiendo un acceso seguro y eficiente para tareas de inspección, reparación, limpieza o ajustes.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/t4/tar2-1.png', alt='Texto que describa la imagen')
          .row
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t4/tar2-2.png', alt='Texto que describa la imagen')
            .col-md-8
              h3 Accesos restringidos
              p Las áreas donde se encuentren equipos de alta tensión no deben ser utilizadas como rutas habituales de tránsito del personal, para evitar riesgos innecesarios.
          .row
            .col-md-8.mb-4.mb-md-0
              h3 Identificación y fijación de conductores
              p Los conductores eléctricos deben estar claramente identificados para facilitar el seguimiento de su recorrido. Asimismo, deben estar firmemente sujetos a las paredes o instalados en canalizaciones (caños, bandejas, etc.) con puntos de acceso distribuidos regularmente para inspección y mantenimiento.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/t4/tar3-1.png', alt='Texto que describa la imagen')
          .row
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t4/tar3-2.png', alt='Texto que describa la imagen')
            .col-md-8
              h3 Aislamiento de conductores
              p Los cables deben estar debidamente aislados utilizando materiales como caucho, amianto o cambray. En los casos donde el aislamiento completo no sea posible (por ejemplo, cables de troles), deben instalarse protecciones físicas que eviten el contacto accidental.
          .row
            .col-md-8.mb-4.mb-md-0
              h3 Canalización y protección de conductores
              p Se recomienda que los conductores se ubiquen dentro de canaletas o tuberías para protegerlos del deterioro físico y del ambiente.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/t4/tar4-1.png', alt='Texto que describa la imagen')
          .row
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t4/tar4-2.png', alt='Texto que describa la imagen')
            .col-md-8
              h3 Protección de fusibles
              p Los fusibles deben estar resguardados adecuadamente, mediante cajas cerradas o dispositivos de acceso restringido al personal autorizado. En sistemas de alta tensión, deben colocarse dentro de receptáculos o tableros de distribución, y contar con mecanismos de desconexión (como conmutadores) operables desde lugares seguros y debidamente señalizados.
          .row
            .col-md-8.mb-4.mb-md-0
              h3 Tableros de distribución seguros
              p Estos tableros, que permiten el control individual de motores u otros equipos, deben estar blindados y tener elementos de alta tensión protegidos. El entorno debe contar con pisos aislantes y pantallas que permitan realizar ajustes o reparaciones sin entrar en contacto directo con componentes energizados.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/t4/tar5-1.png', alt='Texto que describa la imagen')
          .row
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t4/tar5-2.png', alt='Texto que describa la imagen')
            .col-md-8
              h3 Uso de lámparas portátiles
              p Aunque se recomienda evitar el uso de lámparas eléctricas portátiles, cuando su uso sea indispensable deben estar provistas de portalámparas aislantes, cables en buen estado y enchufes seguros, los cuales deben ser inspeccionados regularmente.
          .row
            .col-md-8.mb-4.mb-md-0
              h3 Protección de motores eléctricos
              p Los motores deben estar aislados y resguardados para impedir el contacto accidental. En ambientes con humedad excesiva, vapores o agentes corrosivos, deben contar con protecciones adicionales que garanticen su funcionamiento seguro.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/t4/tar6-1.png', alt='Texto que describa la imagen')
          .row
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t4/tar6-2.png', alt='Texto que describa la imagen')
            .col-md-8
              h3 Seguridad en equipos de soldadura
              p Los dispositivos de soldadura o corte por arco eléctrico deben estar adecuadamente aislados y conectados a tierra. Las ranuras de ventilación no deben permitir el ingreso de objetos que puedan hacer contacto con partes energizadas.


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
