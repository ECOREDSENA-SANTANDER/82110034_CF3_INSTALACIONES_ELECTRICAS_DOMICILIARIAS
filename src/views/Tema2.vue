<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Reglamento Técnico de Instalaciones Eléctricas (RETIE)

    p Establece las obligaciones y responsabilidades de todos los actores involucrados en los procesos de generación, transmisión, transformación, distribución y uso final de la energía eléctrica en Colombia. Además, tiene como propósito fundamental garantizar la seguridad de las personas, la protección del medio ambiente y la preservación de la infraestructura eléctrica, mediante el cumplimiento de requisitos técnicos que aseguren instalaciones confiables, eficientes y seguras, en concordancia con las normas vigentes y los avances tecnológicos del sector.

    .row.justify-content-center.align-items-center
      .col-lg-12
        AcordionA.mb-5(tipo="b" clase-tarjeta="bg-trans tipo-b")
          .row(titulo="El RETIE aplica a:")
            .col-md-12.pe-lg-5
              ul.lista-ul--color.lista-ul.fa-al.mb-0
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Todas las instalaciones eléctricas nuevas, ampliaciones o remodelaciones.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Las actividades de generación, transmisión, transformación, distribución y utilización de la energía eléctrica.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Productos eléctricos de uso frecuente en dichas instalaciones.
          .row(titulo="El cumplimiento del RETIE es obligatorio para todos los actores involucrados, como:")
            .col-md-12.pe-lg-5
              ul.lista-ul--color.lista-ul.fa-al.mb-2
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Diseñadores, constructores, interventores y responsables de inspecciones.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Fabricantes y comercializadores de productos eléctricos.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Empresas proveedoras del servicio de energía.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Organismos de certificación de productos e inspección de instalaciones.
              p.mb-4 Para verificar el cumplimiento del reglamento, se emplea un mecanismo de certificación de conformidad, el cual es exigible tanto para los productos sujetos a requisitos obligatorios como para las instalaciones eléctricas ya finalizadas.
              p.mb-2 Además, el RETIE contempla disposiciones transitorias, con el fin de optimizar costos y facilitar la implementación progresiva de los sistemas de verificación. Estas disposiciones no comprometen la exigencia del cumplimiento de los estándares de seguridad, lo que se traduce en beneficios como:
              ul.lista-ul--color.lista-ul.fa-al.mb-2
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Reducción de accidentes eléctricos.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Disminución de costos de mantenimiento correctivo.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Menor necesidad de reemplazo de productos defectuosos.
          .row(titulo="¿Qué es un reglamento técnico?")
            .col-md-12.pe-lg-5
              p.mb-5 De acuerdo con la Ley 170 de 1994, un reglamento técnico es:
              .bloque-texto-f.color-secundario.pt-4.px-5
                .bloque-texto-f__comillas
                  i.fas.fa-quote-left
                  i.fas.fa-quote-right
                h4.text-regular.bloque-texto-f__texto.text-center.p-3 Un documento en el que se establecen las características de un producto, los procesos y métodos de producción relacionados con ellas, incluyendo las disposiciones administrativas aplicables, y cuya observancia es obligatoria (Ministerio de Minas y Energía, 2024).
              p.mb-2 También puede incluir aspectos como terminología, símbolos, embalaje, marcado o etiquetado, siempre que estén relacionados con productos, procesos o métodos de producción.
              p.mb-2 En el ámbito eléctrico, las normas de electrotecnia han tenido tradicionalmente dos fines esenciales:
              ul.lista-ul--color.lista-ul.fa-al.mb-2
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Proteger la vida humana y los bienes materiales.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Garantizar la seguridad en el servicio eléctrico, abarcando generación, transmisión, distribución y uso final.
              p En ese contexto, el RETIE establece medidas concretas que aseguran estas garantías, partiendo del cumplimiento de requisitos técnicos, civiles, mecánicos y de fabricación de los equipos empleados en las instalaciones.
          .row(titulo="Objetivos específicos del RETIE")
            .col-md-12.pe-lg-5
              p.mb-5 Para cumplir con su propósito de garantizar la seguridad eléctrica, el RETIE establece los siguientes objetivos específicos:
              ol.lista-ol.fa-ol
                li 
                  span.text-bold a) 
                  | Establecer condiciones técnicas que eviten accidentes por contacto eléctrico, tanto directos como indirectos, protegiendo así la vida de las personas.
                li 
                  span.text-bold b) 
                  | Prevenir incendios originados por fallas eléctricas, mediante normas que aseguren una adecuada instalación y operación de los sistemas eléctricos.
                li 
                  span.text-bold c) 
                  | Evitar la quema de árboles u otra vegetación causada por el contacto o la cercanía con líneas de transmisión o distribución de energía eléctrica.
                li 
                  span.text-bold d) 
                  | Proteger la vida animal, estableciendo condiciones que prevengan la muerte de animales por contacto con cercas u otras instalaciones eléctricas expuestas.
                li
                  span.text-bold e)   
                  | Prevenir daños en instalaciones eléctricas causados por sobre corrientes o sobretensiones, mediante la implementación de protecciones adecuadas.  
                li   
                  span.text-bold f)   
                  | Adoptar y normalizar el uso de símbolos verbales y gráficos, que deben ser utilizados por los profesionales del sector eléctrico para garantizar una comunicación clara y estandarizada.  
                li   
                  span.text-bold g)   
                  | Reducir las deficiencias en las instalaciones eléctricas, promoviendo su diseño, construcción y mantenimiento bajo criterios de calidad y seguridad.  
                li   
                  span.text-bold h)   
                  | Establecer los requisitos y responsabilidades que deben cumplir los diferentes actores del sector eléctrico, incluyendo diseñadores, constructores, operadores, propietarios, usuarios, fabricantes, distribuidores e importadores de materiales y equipos eléctricos.  
                li   
                  span.text-bold i)   
                  | Unificar las características esenciales de seguridad de los productos eléctricos de mayor uso, con el fin de garantizar su confiabilidad en funcionamiento y su compatibilidad con el sistema eléctrico nacional.  
                li   
                  span.text-bold j)   
                  | Prevenir prácticas engañosas o incorrectas que puedan inducir a error al usuario, como la difusión de información falsa o la omisión de datos relevantes que impidan cumplir con las exigencias del reglamento.  
                li   
                  span.text-bold k)   
                  | Exigir la confiabilidad y compatibilidad técnica de los productos y equipos eléctricos contemplados expresamente en el reglamento, para asegurar un funcionamiento seguro y eficiente.  
          .row(titulo="Campo de aplicación del RETIE")
            .col-md-12.pe-lg-5
              p.mb-3 El Reglamento técnico de instalaciones eléctricas (RETIE) aplica en Colombia desde el 30 de abril de 2005, y su cumplimiento es obligatorio en los siguientes casos:
              h6.mb-2 #[b A. Aplicación general]
              ul.lista-ul--color.lista-ul.fa-al
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Toda instalación eléctrica nueva.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Toda ampliación de una instalación eléctrica existente.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Toda remodelación de una instalación eléctrica, siempre que se realice dentro de los procesos de generación, transmisión, transformación, distribución o utilización de la energía eléctrica.
              h6.mb-2 #[b B. Aplicaciones específicas]
              ul.lista-ul--color.lista-ul.fa-al
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Remodelaciones de instalaciones eléctricas existentes previas a la entrada en vigencia del RETIE, cuando el cambio de componentes supere o sea igual al 80 % del sistema original.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Todas las personas que intervienen en el diseño, construcción, operación, certificación o mantenimiento de las instalaciones eléctricas, incluyendo:
                ul.lista-ul--color.peq.lista-ul.fa-al.px-3
                  li.mb-0
                    i.fas.fa-circle
                    p.mb-0 Diseñadores, constructores e instaladores.
                  li.mb-0
                    i.fas.fa-circle
                    p.mb-0 Fabricantes y distribuidores de productos eléctricos.
                  li.mb-0
                    i.fas.fa-circle
                    p.mb-0 Interventores y certificadores.
                  li.mb-0
                    i.fas.fa-circle
                    p.mb-0 Propietarios de las instalaciones.
                  li.mb-0
                    i.fas.fa-circle
                    p.mb-0 Empresas prestadoras del servicio público de electricidad.
              h6.mb-2 #[b C. Tipos de instalaciones cubiertas]
              ul.lista-ul--color.lista-ul.fa-al
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Instalaciones de corriente continua (DC) con tensiones mayores o iguales a 50 V.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Instalaciones de corriente alterna (AC) con tensiones entre 25 V y 500 kV.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Instalaciones eléctricas que operan con una frecuencia inferior a 1000 Hz.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Instalaciones eléctricas públicas, destinadas a la prestación de servicios públicos, así como instalaciones privadas.
          .row(titulo="Responsabilidades y sanciones según el RETIE")
            .col-md-12.pe-lg-5
              p.mb-3 Dado el alto riesgo inherente a la electricidad, el RETIE establece con claridad las responsabilidades de los distintos actores involucrados en las instalaciones eléctricas. En caso de deficiencias que puedan poner en peligro la seguridad de las personas, los bienes o el medio ambiente, estos agentes serán sujetos del régimen sancionatorio, conforme a lo establecido por la Ley 73 de 1981 y la Ley 446 de 1998.
              p.mb-2 Los responsables incluyen:
              ul.lista-ul--color.lista-ul.fa-al
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Empresas de energía eléctrica, por la prestación del servicio y el aseguramiento de la conformidad de las instalaciones conectadas a la red.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Diseñadores, constructores e interventores, responsables de garantizar que las instalaciones eléctricas cumplan con las exigencias técnicas, de seguridad y de calidad definidas en el RETIE.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Organismos de certificación de productos, encargados de verificar que los equipos eléctricos cumplan con los requisitos obligatorios de seguridad y funcionamiento.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Organismos de certificación de instalaciones eléctricas, que deben garantizar la conformidad de las obras eléctricas con los requisitos del reglamento.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Fabricantes, comercializadores e importadores de productos eléctricos, en lo relacionado con la calidad, seguridad y cumplimiento de especificaciones técnicas de los productos utilizados en las instalaciones.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Usuarios o propietarios de las instalaciones, quienes deben mantener las condiciones de seguridad y funcionamiento exigidas, y responder por modificaciones no autorizadas o peligrosas.
                li.mb-0
                  i.fas.fa-check-circle
                  p.mb-0 Profesionales, tecnólogos y técnicos del sector eléctrico, quienes deben ejercer su labor con responsabilidad técnica, ética y conforme a las normas vigentes.
              .row.align-items-center.mb-3
                .col-auto.bgamarilloclaro.borde-redondo
                  h3.px-1.pt-3 Normativa de seguridad (RETIE)
              p.mb-2 El Reglamento Técnico de Instalaciones Eléctricas (RETIE) establece lineamientos claros sobre la forma de realizar empalmes según el nivel de tensión:
              ul.lista-ul--color.lista-ul.fa-al
                li.mb-2
                  i.fas.fa-check-circle
                  p.mb-0 #[b Media y alta tensión:] los empalmes deben ser soldados y recubiertos con manguitos termo contraíbles o contraíbles en frío, los cuales protegen la unión y aseguran el aislamiento.
                li.mb-2
                  i.fas.fa-check-circle
                  p.mb-0 #[b Baja tensión:] se permiten empalmes hechos con cintas aislantes de alta calidad, siempre que se garantice una cobertura segura, sin riesgo de exposición del conductor.
                li.mb-2
                  i.fas.fa-check-circle
                  p.mb-0 #[b Importante:] un empalme mal hecho puede generar puntos calientes, pérdida de energía, riesgo de incendio y fallas en el sistema eléctrico. Por eso, se recomienda seguir siempre las buenas prácticas y la normativa vigente.

    Separador  
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1  Cables de alto riesgo o peligrosos

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        <br> <br> <br> <br>        
        p.mb-0 En el mercado de cables y alambres eléctricos existe una categoría de productos comúnmente conocida como económicos, los cuales representan un alto riesgo para la seguridad eléctrica. Esta denominación resulta engañosa, ya que estos productos no cumplen con las especificaciones técnicas requeridas y suelen inducir al error al usuario.
        <br> <br> <br> <br>

    p.mb-5 En realidad, estos productos deberían ser denominados "cables de alto riesgo o peligrosos", dado que:

    .row.bgfondo1.align-items-center.p-2.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center
    
        .row.justify-content-center.align-items-center.mb-5

          .col-lg-4.col-md-7.col-9
            img(src='@/assets/curso/temas/t2/img2.png', alt='')

          .col-lg-8.col-md-10
            SlyderF.custom(columnas="col-lg-6 col-md-6 col-xl-6").mt-4
              .tarjeta.tarjeta--slyder.amarilla.px-4
                .row.justify-content-center
                  .col-auto
                    img(data-aos="zoom-in-left")(src='@/assets/curso/temas/t2/tar1-1.png' alt='AvatarTop')
                p.mb-4.mt-0.text-center(data-aos="fade-right") Declaran un calibre que no corresponde a su verdadera sección de conductor.    
              .tarjeta.tarjeta--slyder.amarilla.px-4
                .row.justify-content-center
                  .col-auto
                    img(data-aos="zoom-in-left")(src='@/assets/curso/temas/t2/tar1-2.png' alt='AvatarTop')
                p.mb-4.mt-0.text-center(data-aos="fade-right") Utilizan recubrimientos de baja calidad, sin propiedades aislantes certificadas para uso eléctrico.    
              .tarjeta.tarjeta--slyder.amarilla.px-4
                .row.justify-content-center
                  .col-auto
                    img(data-aos="zoom-in-left")(src='@/assets/curso/temas/t2/tar1-3.png' alt='AvatarTop')
                p.mb-4.mt-0.text-center(data-aos="fade-right") No cumplen con las condiciones térmicas y de seguridad establecidas por las normas técnicas.

    .row.justify-content-center.align-items-center

      .bloque-texto-f.color-adicional.pt-4.px-5
        .bloque-texto-f__comillas
          i.fas.fa-quote-left.verde
          i.fas.fa-quote-right.verde
        h4.text-regular.bloque-texto-f__texto.text-center.p-3 Según Centelsa (2004), estos productos son una forma de fraude al consumidor, ya que aparentan cumplir con las normas, pero no lo hacen. Esta situación compromete la seguridad de las instalaciones, incrementa el riesgo de incendios, eleva el consumo energético y genera sobrecostos al usuario.

    p.mb-4 Ejemplos de cables peligrosos comúnmente encontrados:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-md-12.col-sm-12
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-auto.bgamarilloclaro.borde-redondo
            h3.px-1.pt-3 a) Alambre para construcción calibre 12 AWG
        ul.lista-ul--color.lista-ul.fa-al
          li.mb-0
            i.fas.fa-check-circle
            p.mb-0 #[b Marcado en el aislamiento:] fabricante 1, alambre TW, 12 AWG, 600V, 75° C.
          li.mb-0
            i.fas.fa-check-circle
            p.mb-0 #[b Valor real esperado:] según la norma, el conductor de cobre calibre 12 AWG debe tener un diámetro de 2.05 mm.
          li.mb-0
            i.fas.fa-check-circle
            p.mb-0 #[b Hallazgo en laboratorio:] el diámetro real del conductor en las muestras evaluadas no supera los 1.60 mm, lo cual ni siquiera corresponde al calibre 14 AWG, evidenciando una clara subvaloración del material conductor.
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-auto.bgamarilloclaro.borde-redondo
            h3.px-1.pt-3 b) Cable dúplex para instalación interior calibre 2x18 AWG
        ul.lista-ul--color.lista-ul.fa-al
          li.mb-0
            i.fas.fa-check-circle
            p.mb-0 #[b Marcado en el aislamiento:] fabricante 1, cable dúplex flexible, 2x18 AWG, 300V, 75° C.
          li.mb-0
            i.fas.fa-check-circle
            p.mb-0 #[b Valor real esperado:] un cable 18 AWG flexible debe tener 16 hilos de cobre, con un diámetro mínimo de 0.251 mm cada uno.
          li.mb-0
            i.fas.fa-check-circle
            p.mb-0 #[b Hallazgo en laboratorio:] en algunas muestras, los hilos de cobre tenían un diámetro de apenas 0.16 mm, equivalente a un calibre 22 AWG, lo que compromete seriamente la capacidad de conducción del cable.
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/t2/img3.png', alt='')

    p.mb-4 Además de la reducción indebida del tamaño del conductor, los recubrimientos utilizados en estos cables son de muy baja calidad, sin certificaciones eléctricas válidas. Aunque el producto indique una resistencia térmica de 75° C, en pruebas reales no soportan siquiera 60° C, lo cual representa un riesgo crítico en instalaciones eléctricas interiores.

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/ico_subt.svg', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Consecuencias del uso de cables de alto riesgo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-md-12.col-sm-12
        ul.lista-ul--color.lista-ul.fa-al
          li.mb-0
            i.fas.fa-check-circle
            p.mb-0 Aumento en el consumo de energía, debido a una mayor resistencia eléctrica, lo cual se traduce en sobrecostos para el usuario.
          li.mb-0
            i.fas.fa-check-circle
            p.mb-0 Incremento en la posibilidad de fallas eléctricas e incendios, por recalentamiento del conductor y deterioro del aislamiento.
          li.mb-0
            i.fas.fa-check-circle
            p.mb-0 Riesgo para la vida y los bienes materiales, al no cumplir con las condiciones mínimas de seguridad establecidas por el RETIE y las normas técnicas NTC y UL.
        .subt.mb-4(data-aos="fade-right")
          .row.align-items-center
            .col-md-auto.col-3
              img(src='@/assets/curso/ico_subt.svg', alt='')
            .col-md-auto.col-9.ps-0
              h3.mb-0.text-white Pruebas realizadas
        ul.lista-ul--color.lista-ul.fa-al
          li.mb-0
            i.fas.fa-check-circle
            p.mb-0 Se tomaron muestras representativas de cables y alambres "económicos" en varias ciudades de Colombia, las cuales fueron sometidas a:
          ul.lista-ul--color.peq.lista-ul.fa-al.px-3
            li.mb-0
              i.fas.fa-circle
              p.mb-0 Ensayos dimensionales del conductor.
            li.mb-0
              i.fas.fa-circle
              p.mb-0 Pruebas de resistencia eléctrica.
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/t2/img4.png', alt='')

    p.mb-4 Estas pruebas se realizaron conforme a los requisitos establecidos por el RETIE, las normas técnicas colombianas (NTC) y las normas internacionales UL, evidenciando múltiples incumplimientos técnicos y riesgos asociados.

    .row.justify-content-center.align-items-center.mb-4
      .titulo-sexto.color-acento-contenido
        h5 Tabla 1. 
        | Amperaje que soportan los cables de cobre
      figure
        img.mb-2(src='@/assets/curso/temas/t2/tabla1.png', alt='Presenta una tabla con la capacidad de conducción de corriente (amperaje) de los cables de cobre, según el tipo de aislamiento y la temperatura de operación. Se organiza por calibre del cable (desde 14 AWG hasta 4/0 AWG) y clasifica los valores de amperaje soportado en tres niveles de temperatura: 60°C, 75°C y 90°C, con distintos tipos de aislamiento eléctrico como TW, RHW, THW, THWN, THHN, XHHW-2 y THWN-2. Además, se incluye una columna separada para cables con aislamiento tipo SPT a 60°C, que abarca calibres del 20 AWG al 12 AWG, con capacidades desde 2 A hasta 25 A. ')
      figcaption Fuente: https://masvoltaje.com/img/cms/img_tabla_amperaje.gif

      


</template>

<script>
export default {
  name: 'Tema2',
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
