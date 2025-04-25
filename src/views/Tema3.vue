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
            .row.justify-content-center.align-items-center.mb-5            
              .col-lg-8.col-md-12.col-sm-12
                ul.lista-ul--color.lista-ul.fa-al
                  li.mb-4
                    i.fas.fa-check-circle
                    p.mb-0 #[b Causas comunes:] malos contactos, cortocircuitos, operación de interruptores bajo carga, apertura o cierre incorrecto de seccionadores.
                  li.mb-0
                    i.fas.fa-check-circle
                    p.mb-0 #[b Medidas de protección:] 
                  ul.lista-ul--color.peq.lista-ul.fa-al.px-3
                    li.mb-0
                      i.fas.fa-circle
                      p.mb-0 Uso de envolventes resistentes a arcos eléctricos.
                    li.mb-0
                      i.fas.fa-circle
                      p.mb-0 Mantenimiento de distancias de seguridad.
                    li.mb-0
                      i.fas.fa-circle
                      p.mb-0 Uso de gafas de protección contra radiación ultravioleta.
              .col-lg-4.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/tab1-1.png', alt='')

          .tarjeta.color-primario.p-4(titulo="Ausencia de suministro eléctrico")
            .row.justify-content-center.align-items-center.mb-5            
              .col-lg-8.col-md-12.col-sm-12
                ul.lista-ul--color.lista-ul.fa-al
                  li.mb-4
                    i.fas.fa-check-circle
                    p.mb-0 #[b Causas comunes:] cortes del servicio (apagones), falta de sistemas de respaldo como UPS o plantas eléctricas.
                  li.mb-0
                    i.fas.fa-check-circle
                    p.mb-0 #[b Medidas de protección:] 
                  ul.lista-ul--color.peq.lista-ul.fa-al.px-3
                    li.mb-0
                      i.fas.fa-circle
                      p.mb-0 Implementación de sistemas de alimentación ininterrumpida (UPS).
                    li.mb-0
                      i.fas.fa-circle
                      p.mb-0 Disponibilidad de plantas eléctricas con transferencia automática.
              .col-lg-4.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/tab1-2.png', alt='')

          .tarjeta.color-primario.p-4(titulo="Contacto directo con partes energizadas")
            .row.justify-content-center.align-items-center.mb-5            
              .col-lg-8.col-md-12.col-sm-12
                ul.lista-ul--color.lista-ul.fa-al
                  li.mb-4
                    i.fas.fa-check-circle
                    p.mb-0 #[b Causas comunes:] negligencia del personal técnico, manipulación por personas no calificadas.
                  li.mb-0
                    i.fas.fa-check-circle
                    p.mb-0 #[b Medidas de protección:] 
                  ul.lista-ul--color.peq.lista-ul.fa-al.px-3
                    li.mb-0
                      i.fas.fa-circle
                      p.mb-0 Mantener distancias de seguridad.
                    li.mb-0
                      i.fas.fa-circle
                      p.mb-0 Colocación de barreras físicas o aislamiento de partes activas.
                    li.mb-0
                      i.fas.fa-circle
                      p.mb-0 Uso de interruptores diferenciales.
                    li.mb-0
                      i.fas.fa-circle
                      p.mb-0 Equipos de protección personal (EPP).
                    li.mb-0
                      i.fas.fa-circle
                      p.mb-0 Verificación de ausencia de tensión antes de intervenir.
              .col-lg-4.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/tab1-3.png', alt='')

          .tarjeta.color-primario.p-4(titulo="Contacto indirecto")
            .row.justify-content-center.align-items-center.mb-5            
              .col-lg-8.col-md-12.col-sm-12  
                ul.lista-ul--color.lista-ul.fa-al  
                  li.mb-4  
                    i.fas.fa-check-circle  
                    p.mb-0 #[b Causas comunes:] fallas en el aislamiento, mantenimiento deficiente, ausencia de conexión a tierra.  
                  li.mb-0  
                    i.fas.fa-check-circle  
                    p.mb-0 #[b Medidas de protección:]   
                  ul.lista-ul--color.peq.lista-ul.fa-al.px-3  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Separación de circuitos.  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Uso de muy baja tensión (MBT).  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Correcta puesta a tierra de equipos.  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Implementación de interruptores diferenciales.  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Mantenimiento preventivo y correctivo.  
              .col-lg-4.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/tab1-4.png', alt='')

          .tarjeta.color-primario.p-4(titulo="Riesgo por rayos (descargas atmosféricas)")
            .row.justify-content-center.align-items-center.mb-5            
              .col-lg-8.col-md-12.col-sm-12  
                ul.lista-ul--color.lista-ul.fa-al  
                  li.mb-4  
                    i.fas.fa-check-circle  
                    p.mb-0 #[b Causas comunes:] deficiencias en el diseño, instalación, operación o mantenimiento del sistema de protección contra rayos.  
                  li.mb-0  
                    i.fas.fa-check-circle  
                    p.mb-0 #[b Medidas de protección:]   
                  ul.lista-ul--color.peq.lista-ul.fa-al.px-3  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Instalación de pararrayos, bajantes y sistemas de puesta a tierra.  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Apantallamiento y adecuada topología de cableado.  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Suspensión de actividades en exteriores durante tormentas eléctricas.  
              .col-lg-4.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/tab1-5.png', alt='')

          .tarjeta.color-primario.p-4(titulo="Cortocircuito")
            .row.justify-content-center.align-items-center.mb-5            
              .col-lg-8.col-md-12.col-sm-12  
                ul.lista-ul--color.lista-ul.fa-al  
                  li.mb-4  
                    i.fas.fa-check-circle  
                    p.mb-0 #[b Causas comunes:] fallas de aislamiento, errores humanos en la manipulación de instalaciones, impactos físicos sobre estructuras energizadas.  
                  li.mb-0  
                    i.fas.fa-check-circle  
                    p.mb-0 #[b Medidas de protección:]   
                  ul.lista-ul--color.peq.lista-ul.fa-al.px-3  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Instalación de fusibles o interruptores automáticos.  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Uso de soportes con buen aislamiento y resistencia mecánica.  
              .col-lg-4.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/tab1-6.png', alt='')

          .tarjeta.color-primario.p-4(titulo="Sobretensión de paso o de contacto")
            .row.justify-content-center.align-items-center.mb-5            
              .col-lg-8.col-md-12.col-sm-12  
                ul.lista-ul--color.lista-ul.fa-al  
                  li.mb-4  
                    i.fas.fa-check-circle  
                    p.mb-0 #[b Causas comunes:] fallas de aislamiento, corrientes de falla a tierra, descargas atmosféricas, deficiencias en la puesta a tierra, acceso indebido a zonas restringidas.  
                  li.mb-0  
                    i.fas.fa-check-circle  
                    p.mb-0 #[b Medidas de protección:]   
                  ul.lista-ul--color.peq.lista-ul.fa-al.px-3  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Interconexión de sistemas de puesta a tierra para garantizar el mismo potencial eléctrico.  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Instalación de puestas a tierra de baja resistencia.  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Aislamiento de dispositivos accesibles al contacto humano.  
                    li.mb-0  
                      i.fas.fa-circle  
                      p.mb-0 Señalización adecuada de zonas de riesgo.  
              .col-lg-4.col-md-5.col-5
                img(src='@/assets/curso/temas/t3/tab1-7.png', alt='')



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
