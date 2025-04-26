<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Medidas de seguridad en las instalaciones eléctricas

    p.mb-4 La electricidad es una fuente de energía esencial para el funcionamiento de la vida moderna, pero también representa un riesgo significativo si no se gestiona adecuadamente. Por esta razón, es fundamental aplicar rigurosas medidas de seguridad en las instalaciones eléctricas, con el fin de prevenir accidentes, proteger la integridad de las personas y preservar la infraestructura. A continuación, se detallan las principales recomendaciones:

    .tarjeta--container.row.mb-4(data-aos='fade-right')
      .col-md.tarjeta.b1.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t4/tar1-1.png', alt='Texto que describa la imagen')          
          p.text-white #[b a) Diseño e instalación segura:] todos los equipos e instalaciones eléctricas deben ser diseñados e instalados de manera que se evite el contacto accidental con fuentes de tensión y se minimice el riesgo de incendios. La elección de materiales debe considerar las tensiones eléctricas a las que estarán sometidos, asegurando su resistencia y durabilidad.
      .col-md.tarjeta.b2.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t4/tar1-2.png', alt='Texto que describa la imagen')   
          p #[b b) Intervención de personal calificado:] la supervisión, instalación y puesta en funcionamiento de equipos eléctricos debe estar a cargo de personal capacitado y con experiencia comprobada. En instalaciones de alta tensión, es crucial restringir el acceso mediante cercas, señalización, elevación de los equipos o su ubicación en áreas de acceso controlado. Especial atención debe prestarse durante labores de mantenimiento o reparación cercanas, donde pueden retirarse temporalmente las barreras de seguridad.     

    .tarjeta--container.row.mb-4(data-aos='fade-left')
      .col-md.tarjeta.b1.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t4/tar2-1.png', alt='Texto que describa la imagen')          
          p.text-white.mb-4 #[b c) Espacio suficiente para mantenimiento:] los equipos eléctricos deben instalarse dejando espacio adecuado a su alrededor, permitiendo un acceso seguro y eficiente para tareas de inspección, reparación, limpieza o ajustes.
      .col-md.tarjeta.b2.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t4/tar2-2.png', alt='Texto que describa la imagen')   
          p.mb-4 #[b d) Accesos restringidos:] las áreas donde se encuentren equipos de alta tensión no deben ser utilizadas como rutas habituales de tránsito del personal, para evitar riesgos innecesarios.

    .tarjeta--container.row.mb-4(data-aos='fade-right')
      .col-md.tarjeta.b1.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t4/tar3-1.png', alt='Texto que describa la imagen')          
          p.text-white #[b e) Identificación y fijación de conductores:] los conductores eléctricos deben estar claramente identificados para facilitar el seguimiento de su recorrido. Asimismo, deben estar firmemente sujetos a las paredes o instalados en canalizaciones (caños, bandejas, etc.) con puntos de acceso distribuidos regularmente para inspección y mantenimiento.
      .col-md.tarjeta.b2.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t4/tar3-2.png', alt='Texto que describa la imagen')   
          p #[b f) Aislamiento de conductores:] los cables deben estar debidamente aislados utilizando materiales como caucho, amianto o cambray. En los casos donde el aislamiento completo no sea posible (por ejemplo, cables de troles), deben instalarse protecciones físicas que eviten el contacto accidental.

    .tarjeta--container.row.mb-4(data-aos='fade-left')
      .col-md.tarjeta.b1.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t4/tar4-1.png', alt='Texto que describa la imagen')          
          p.text-white #[b g) Canalización y protección de conductores:] se recomienda que los conductores se ubiquen dentro de canaletas o tuberías para protegerlos del deterioro físico y del ambiente.
      .col-md.tarjeta.b2.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t4/tar4-2.png', alt='Texto que describa la imagen')   
          p #[b h) Protección de fusibles:] los fusibles deben estar resguardados adecuadamente, mediante cajas cerradas o dispositivos de acceso restringido al personal autorizado. En sistemas de alta tensión, deben colocarse dentro de receptáculos o tableros de distribución, y contar con mecanismos de desconexión (como conmutadores) operables desde lugares seguros y debidamente señalizados.

    .tarjeta--container.row.mb-4(data-aos='fade-right')
      .col-md.tarjeta.b1.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t4/tar5-1.png', alt='Texto que describa la imagen')          
          p.text-white #[b i) Tableros de distribución seguros:] estos tableros, que permiten el control individual de motores u otros equipos, deben estar blindados y tener elementos de alta tensión protegidos. El entorno debe contar con pisos aislantes y pantallas que permitan realizar ajustes o reparaciones sin entrar en contacto directo con componentes energizados.
      .col-md.tarjeta.b2.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t4/tar5-2.png', alt='Texto que describa la imagen')   
          p #[b j) Uso de lámparas portátiles:] aunque se recomienda evitar el uso de lámparas eléctricas portátiles, cuando su uso sea indispensable deben estar provistas de portalámparas aislantes, cables en buen estado y enchufes seguros, los cuales deben ser inspeccionados regularmente.

    .tarjeta--container.row.mb-4(data-aos='fade-left')
      .col-md.tarjeta.b1.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t4/tar6-1.png', alt='Texto que describa la imagen')          
          p.text-white #[b k) Protección de motores eléctricos:] los motores deben estar aislados y resguardados para impedir el contacto accidental. En ambientes con humedad excesiva, vapores o agentes corrosivos, deben contar con protecciones adicionales que garanticen su funcionamiento seguro.
      .col-md.tarjeta.b2.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t4/tar6-2.png', alt='Texto que describa la imagen')   
          p #[b l) Seguridad en equipos de soldadura:] los dispositivos de soldadura o corte por arco eléctrico deben estar adecuadamente aislados y conectados a tierra. Las ranuras de ventilación no deben permitir el ingreso de objetos que puedan hacer contacto con partes energizadas.


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
