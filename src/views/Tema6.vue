<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Obra civil y requerimientos técnicos para instalaciones eléctricas

    p.mb-4 Este apartado abarca todas las actividades de adecuación estructural necesarias para garantizar una instalación eléctrica segura, funcional y eficiente en edificaciones. La obra civil asociada a las instalaciones eléctricas incluye desde la interpretación de planos hasta la ejecución de canalizaciones y montaje de dispositivos de control y protección.

    .subt2.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/ico_subt.svg', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Tipos de instalaciones eléctricas según su visibilidad y protección

    .row.bgfondo3

      p.mb-4.px-5 Las instalaciones eléctricas se clasifican en función de su disposición en la estructura y del nivel de protección frente a esfuerzos mecánicos y condiciones ambientales:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-md-6.col-6
          img.mb-4(src='@/assets/curso/temas/t6/img1.png', alt='')
        .col-lg-7.col-md-12.col-sm-12
          SlyderF.custom(columnas="col-lg-6 col-md-6 col-xl-6").mt-4
            .tarjeta.tarjeta--slyder.blanca.px-4
              .row.justify-content-center
                .col-auto
                  img.mt-4(data-aos="zoom-in-left")(src='@/assets/curso/temas/t6/tar1-1.png' alt='AvatarTop')
              .row.justify-content-center
                .col-lg-7.col-md-12.col-sm-12
                  p.mb-4.mt-0.text-center.bgverde.text-white.mt-4 #[b Instalaciones visibles:] 
              p.mb-4.mt-0.text-center(data-aos="fade-right") Todos los componentes están expuestos, sin protección adicional. Se utilizan principalmente en instalaciones temporales o en espacios industriales.   
            .tarjeta.tarjeta--slyder.blanca.px-4
              .row.justify-content-center
                .col-auto
                  img.mt-3(data-aos="zoom-in-left")(src='@/assets/curso/temas/t6/tar1-2.png' alt='AvatarTop')
              .row.justify-content-center
                .col-lg-7.col-md-12.col-sm-12
                  p.mb-4.mt-0.text-center.bgverde.text-white.mt-4 #[b Instalaciones visibles entubadas:] 
              p.mb-4.mt-0.text-center(data-aos="fade-right") Los componentes están a la vista, pero protegidos mediante tuberías, cajas de conexión y dispositivos de unión y control.
            .tarjeta.tarjeta--slyder.blanca.px-4
              .row.justify-content-center
                .col-auto
                  img.mt-3(data-aos="zoom-in-left")(src='@/assets/curso/temas/t6/tar1-3.png' alt='AvatarTop')
              .row.justify-content-center
                .col-lg-7.col-md-12.col-sm-12
                  p.mb-4.mt-0.text-center.bgverde.text-white.mt-4 #[b Instalaciones parcialmente ocultas:] 
              p.mb-4.mt-0.text-center(data-aos="fade-right") Una parte del sistema se instala empotrada en paredes, pisos o techos, mientras que el resto queda visible, generalmente escondida en falsos techos o estructuras.
            .tarjeta.tarjeta--slyder.blanca.px-4
              .row.justify-content-center
                .col-auto
                  img.mt-3(data-aos="zoom-in-left")(src='@/assets/curso/temas/t6/tar1-4.png' alt='AvatarTop')
              .row.justify-content-center
                .col-lg-7.col-md-12.col-sm-12
                  p.mb-4.mt-0.text-center.bgverde.text-white.mt-4 #[b Instalaciones ocultas:] 
              p.mb-4.mt-0.text-center(data-aos="fade-right") Toda la canalización está empotrada en los elementos estructurales del edificio. solo son visibles los dispositivos finales como enchufes, interruptores y tableros.

    Separador  
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.1  Requerimientos de obra civil para instalaciones eléctricas

    p.mb-4 La correcta ejecución de la obra civil es fundamental para el buen funcionamiento de una instalación eléctrica. Incluye tareas como la preparación del terreno, construcción de canalizaciones, instalación de soportes, protección contra agentes externos y cumplimiento de normativas técnicas.

    .row.mb-4(data-aos="fade-left")
      p.bgmorado.borde-redondo.p-3.text-center #[b Una buena planificación garantiza seguridad, durabilidad y facilidad de mantenimiento.]

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/ico_subt.svg', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Interpretación de planos en instalaciones eléctricas

    p.mb-4 El análisis e interpretación de planos es esencial para comprender la disposición de los elementos estructurales y eléctricos de un proyecto. Se utilizan diferentes tipos de planos:

    .row.bgfondo4.justify-content-center
      .col-lg-6.col-md-12.col-12
        img.mt-5.mb-4(src='@/assets/curso/temas/t6/img2.png', alt='')

    .row.justify-content-center.align-items-center.mb-4.mt-4
      .col-lg-7.col-md-12.col-sm-12
        ul.lista-ul--color.lista-ul--separador.fa-al.mb-0
          li.mb-2
            i.fas.fa-check-circle
            span #[b Planos arquitectónicos:] representan gráficamente la distribución espacial de una edificación. Permiten ubicar muros, columnas, pisos y otros elementos relevantes para la instalación eléctrica.
          li.mb-2
            i.fas.fa-check-circle
            span #[b Planos de redes eléctricas:] muestran la ubicación de los componentes eléctricos como tomacorrientes, interruptores, puntos de luz y canalizaciones.
          li.mb-2
            i.fas.fa-check-circle
            span #[b Plano de diagrama unifilar:] esquema simplificado que representa los circuitos eléctricos mediante una sola línea, ideal para visualizar la interconexión de dispositivos eléctricos.
      .col-lg-5.col-md-7.col-12
        img(src='@/assets/curso/temas/t6/img3.png', alt='')

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/ico_subt.svg', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Canalización y montaje de dispositivos eléctricos

    p.mb-4 La canalización eléctrica requiere accesorios específicos para garantizar la conectividad y protección del sistema. Entre ellos se destacan:

    .row.justify-content-center.cursor-pointer.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false").borde-redondo
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t6/tar2-1.png", alt="")
          .crd_hover_txt--body.borde-redondo-abajo
            h4.mb-3.text-center Caja de protección
            p.mb-0.text-center  Punto de inicio de la instalación. Se ubica cerca del ingreso del suministro eléctrico y distribuye los circuitos de la edificación. Debe estar empotrada en el muro y protegida contra accesos no autorizados.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt.borde-redondo
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t6/tar2-2.png", alt="")
          .crd_hover_txt--body.borde-redondo-abajo
            h4.mb-3.text-center Cajas de mecanismos
            p.mb-0.text-center Albergan dispositivos como enchufes, interruptores, pulsadores, tomas de teléfono o televisión. Se fijan al muro mediante grapas o tornillos y permiten la conexión de los tubos eléctricos a través de perforaciones laterales o traseras.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt.borde-redondo-abajo
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t6/tar2-3.png", alt="")
          .crd_hover_txt--body.borde-redondo-abajo
            h4.mb-3.text-center Cajas de derivación
            p.mb-0.text-center Se colocan entre 30 y 50 cm del techo. En su interior se realizan los empalmes utilizando regletas o clemas normalizadas. Su tamaño varía según el número de tubos que recibe.

    .row.justify-content-center.cursor-pointer.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false").borde-redondo
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t6/tar2-4.png", alt="")
          .crd_hover_txt--body.borde-redondo-abajo
            h4.mb-3.text-center Circuito sencillo
            p.mb-0.text-center  Permite encender un punto de luz mediante un solo interruptor. El conductor de fase siempre se conecta al interruptor.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt.borde-redondo
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t6/tar2-5.png", alt="")
          .crd_hover_txt--body.borde-redondo-abajo
            h4.mb-3.text-center Circuito conmutado
            p.mb-0.text-center Permite encender o apagar una luz desde dos puntos diferentes mediante dos interruptores conectados entre sí. Se utiliza comúnmente en pasillos, escaleras o habitaciones con más de una entrada.


    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.bgamarilloclaro.borde-redondo
        h3.px-1.pt-1.pb-0.mb-1 Interpretación de planos de redes eléctricas

    .row.bgfondo5.justify-content-center.align-items-center.mb-5
      .col-lg-8.col-md-12.col-sm-12
        p.mt-5.p-1 Consiste en analizar representaciones gráficas de las instalaciones eléctricas de equipos o edificaciones. Estos planos utilizan símbolos y elementos técnicos que permiten identificar y ubicar espacialmente las conexiones eléctricas, lo cual resulta fundamental tanto para su construcción como para tareas de mantenimiento o reparación.
        .row
          .col-lg-10.col-md-12.col-12
            img(src='@/assets/curso/temas/t6/img4.png', alt='')
      .col-lg-3.col-md-6.col-12
        img.mt-5(src='@/assets/curso/temas/t6/img5.png', alt='')


    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.bgamarilloclaro.borde-redondo
        h3.px-1.pt-1.pb-0.mb-1 Interpretación del plano de diagrama unifilar

    p.mb-4 Es el análisis de un esquema gráfico que representa un sistema eléctrico utilizando una sola línea para simplificar la disposición de los circuitos. Este tipo de diagrama facilita la comprensión del flujo de energía y la conexión entre los diferentes componentes eléctricos.

    .row.bgfondo5.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-12.col-12
        img.mt-5(src='@/assets/curso/temas/t6/img6.png', alt='')

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.bgamarilloclaro.borde-redondo
        h3.px-1.pt-1.pb-0.mb-1 Canalización de la instalación eléctrica

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t6/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        <br> <br> <br> <br>    
        p.mb-0 Las canalizaciones eléctricas y sus accesorios son elementos esenciales en una instalación eléctrica, ya que permiten interconectar conductores y dispositivos como interruptores, tomacorrientes y equipos de protección. Su diseño y disposición deben asegurar funcionalidad, seguridad y facilidad de mantenimiento.
        <br> <br> <br> <br> <br>

    .row.justify-content-center.align-items-center.mb-4.mt-4
      .col-lg-12.col-md-12.col-sm-12
        ul.lista-ul--color.lista-ul--separador.fa-al.mb-0
          li.mb-2
            i.fas.fa-check-circle
            span #[b Caja de protección:] la instalación inicia en la caja de protección, que se ubica junto al punto de entrada de la acometida, empotrada en el muro. Desde esta caja se distribuyen los diferentes circuitos eléctricos de la vivienda. Es fundamental respetar las distancias de seguridad establecidas para evitar interferencias con otras canalizaciones y reducir riesgos durante taladros o modificaciones en las paredes.
          li.mb-2
            i.fas.fa-check-circle
            span #[b Cajas de mecanismos:] las cajas de mecanismos alojan dispositivos como interruptores, tomacorrientes, pulsadores, tomas telefónicas o de televisión. Estas cajas se perforan en los laterales o en la parte posterior para permitir el paso de los tubos. Los mecanismos se fijan con tornillos o grapas de presión.
          li.mb-2
            i.fas.fa-check-circle
            span #[b Cajas de derivación:] las cajas de derivación permiten la interconexión de diferentes circuitos. Se instalan a una altura de entre 30 y 50 cm del techo. Su tamaño depende del número de tubos que confluyen en ellas. Las conexiones internas se realizan mediante regletas o clemas normalizadas, que aseguran un empalme seguro y ordenado.
    
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.bgamarilloclaro.borde-redondo
        h3.px-1.pt-1.pb-0.mb-1 Tipos de circuitos

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.b1.p-5(data-aos='fade-left')
        .row.align-items-center.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t6/tar3-1.png', alt='Texto que describa la imagen')  
          .col-auto
            h2.text-white.bgverde.p-1 a) Circuito sencillo       
          p.text-white Permite encender o apagar un punto de luz desde un solo interruptor.
          ul.lista-ul--color.lista-ul.fa-al.mb-0
            li.mb-2
              i.fas.fa-check-circle.morada
              span.text-white El interruptor se conecta siempre al conductor de fase.
            li.mb-2
              i.fas.fa-check-circle.morada
              span.text-white Las conexiones dentro de la caja de derivación deben realizarse con regletas normalizadas o clemas.
      .col-md.tarjeta.b2.p-5(data-aos='fade-right')
        .row.align-items-center.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t6/tar3-2.png', alt='Texto que describa la imagen')  
          .col-auto
            h2.text-white.bgverde.p-1 b) Circuito conmutado    
          p Permite controlar un mismo punto de luz desde dos lugares distintos, mediante dos interruptores conmutados.
          ul.lista-ul--color.lista-ul.fa-al.mb-0
            li.mb-2
              i.fas.fa-check-circle.azul
              span El conductor de fase se conecta al borne común del primer   interruptor.
            li.mb-2
              i.fas.fa-check-circle.azul
              span  El borne común del segundo interruptor se conecta al punto de luz.
            li.mb-2
              i.fas.fa-check-circle.azul
              span  El cable entre ambos interruptores puede identificarse con color naranja u otro disponible.
    
    .subt.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/ico_subt.svg', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Accesorios y dispositivos eléctricos utilizados


    .row.justify-content-center.align-items-center
      .col-lg-12
        AcordionA.mb-5(tipo="b" clase-tarjeta="bg-trans tipo-b")
          .row.justify-content-center(titulo="Canalizaciones")
            .col-auto
              img.mb-2(src='@/assets/curso/temas/t6/acor1-1.png', alt='')
            .col-lg-7.col-md-12.col-sm-12
              ul.lista-ul--color.lista-ul.fa-al.mb-0
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 #[b Tuberías de plástico (poliducto):] medidas comunes: ½”, ¾”, 1”, 5/4”, 1½”. El espacio ocupado por los conductores no debe superar el 40 % del volumen interno de la tubería para permitir la disipación del calor.
          .row.justify-content-center(titulo="Cajas")
            .col-auto
              img.mb-2(src='@/assets/curso/temas/t6/acor1-2.png', alt='')
            .col-lg-7.col-md-12.col-sm-12
              ul.lista-ul--color.lista-ul.fa-al.mb-0
                li.mb-2
                  i.fas.fa-check-circle
                  p.mb-0 #[b Rectangulares (chalupas):] para #[em breakers] y tomas.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 #[b Octagonales (hexagonales en el mercado):] para salidas de techo y portalámparas.
          .row.justify-content-center(titulo="Portalámparas de porcelana")
            .col-auto
              img.mb-2(src='@/assets/curso/temas/t6/acor1-3.png', alt='')
            .col-lg-7.col-md-12.col-sm-12
              ul.lista-ul--color.lista-ul.fa-al.mb-0
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 #[b Posee dos tornillos:] uno conecta el conductor neutro a la rosca del casquillo del bombillo; el otro conecta el conductor de fase al contacto central del bombillo.
          .row.justify-content-center(titulo="Interruptores (<em>breakers</em>)")
            .col-auto
              img.mb-2(src='@/assets/curso/temas/t6/acor1-4.png', alt='')
            .col-lg-7.col-md-12.col-sm-12
              ul.lista-ul--color.lista-ul.fa-al.mb-0
                li.mb-2
                  i.fas.fa-check-circle
                  p.mb-0 #[b Sencillos:] controlan uno o más bombillos desde un punto, se instalan a 1.25 m de altura y a 30 cm del marco de la puerta.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 #[b De tres vías (conmutados):] controlan bombillos desde dos ubicaciones distintas.
          .row.justify-content-center(titulo="Tomacorrientes (tomas)")
            .col-auto
              img.mb-2(src='@/assets/curso/temas/t6/acor1-5.png', alt='')
            .col-lg-7.col-md-12.col-sm-12
              ul.lista-ul--color.lista-ul.fa-al.mb-0
                li.mb-2
                  i.fas.fa-check-circle
                  p.mb-0 #[b Sencillos o dobles:] se instalan entre 30 y 50 cm del piso.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 #[b Polarizados:] incluyen conexión a tierra para mayor seguridad.
          .row.justify-content-center(titulo="Conductores")
            .col-auto
              img.mb-2(src='@/assets/curso/temas/t6/acor1-6.png', alt='')
            .col-lg-7.col-md-12.col-sm-12
              ul.lista-ul--color.lista-ul.fa-al.mb-0
                li.mb-2
                  i.fas.fa-check-circle
                  p.mb-0 #[b Calibres más comunes:] 14 (retornos), 12 (tomas y tierra física), 10 (equipos como aire acondicionado), 16 (timbres), 8 (acometidas).
          .row.justify-content-center(titulo="Transformador")
            .col-auto
              img.mb-2(src='@/assets/curso/temas/t6/acor1-7.png', alt='')
            .col-lg-7.col-md-12.col-sm-12
              p Ubicado en el poste externo. Proporciona energía con:
              ul.lista-ul--color.lista-ul.fa-al.mb-0
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 127 V entre fase y neutro.
                li.mb-2
                  i.fas.fa-check-circle
                  p.mb-0 220 V entre dos fases.
          .row.justify-content-center(titulo="Interruptor termomagnético")
            .col-auto
              img.mb-2(src='@/assets/curso/temas/t6/acor1-8.png', alt='')
            .col-lg-7.col-md-12.col-sm-12
              p Protege la instalación contra cortocircuitos y sobrecargas, desconectando automáticamente el circuito cuando se excede la capacidad de corriente.
          .row.justify-content-center(titulo="Fusibles")
            .col-auto
              img.mb-2(src='@/assets/curso/temas/t6/acor1-9.png', alt='')
            .col-lg-7.col-md-12.col-sm-12
              ul.lista-ul--color.lista-ul.fa-al.mb-0
                li.mb-2
                  i.fas.fa-check-circle
                  p.mb-0 #[b Tipo tapón o cartucho:] protegen mediante la fusión del hilo conductor ante una sobre corriente.
          .row.justify-content-center(titulo="Varillas de puesta a tierra")
            .col-auto
              img.mb-2(src='@/assets/curso/temas/t6/acor1-10.png', alt='')
            .col-lg-7.col-md-12.col-sm-12
              ul.lista-ul--color.lista-ul.fa-al.mb-0
                li.mb-2
                  i.fas.fa-check-circle
                  p.mb-0 No se permite aluminio.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Deben tener al menos 2.4 m de largo y garantía de 15 años contra la corrosión.
          .row.justify-content-center(titulo="Medidor de energía")
            .col-auto
              img.mb-2(src='@/assets/curso/temas/t6/acor1-11.png', alt='')
            .col-lg-7.col-md-12.col-sm-12
              ul.lista-ul--color.lista-ul.fa-al.mb-0
                li.mb-2
                  i.fas.fa-check-circle
                  p.mb-0 #[b De inducción:] basado en corrientes inducidas.
                li.mb-2
                  i.fas.fa-check-circle
                  p.mb-0 #[b Estáticos:] emplean electrónica de estado sólido para registrar el consumo.


</template>

<script>
export default {
  name: 'Tema5',
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
