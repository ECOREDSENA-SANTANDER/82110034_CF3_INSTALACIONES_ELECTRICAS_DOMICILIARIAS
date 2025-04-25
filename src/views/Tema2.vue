<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Reglamento Técnico de Instalaciones Eléctricas (RETIE)

    p Establece las obligaciones y responsabilidades de todos los actores involucrados en los procesos de generación, transmisión, transformación, distribución y uso final de la energía eléctrica en Colombia. Además, tiene como propósito fundamental garantizar la seguridad de las personas, la protección del medio ambiente y la preservación de la infraestructura eléctrica, mediante el cumplimiento de requisitos técnicos que aseguren instalaciones confiables, eficientes y seguras, en concordancia con las normas vigentes y los avances tecnológicos del sector.

    .row.justify-content-center.align-items-center.mb-5
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
