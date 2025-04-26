<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Empalmes o amarres eléctricos

    .row.bgfondo2.justify-content-center

      p.mb-4.px-5 Los empalmes o amarres eléctricos son uniones entre conductores que permiten la continuidad del flujo de corriente en una instalación; realizar estas uniones de manera correcta es fundamental para garantizar la eficiencia del sistema eléctrico y, sobre todo, la seguridad de las personas y equipos.

      .col-lg-7.col-md-12.col-sm-12
        .row.mb-5
          .subt.mb-4(data-aos="fade-right")
            .row.align-items-center
              .col-md-auto.col-3
                img(src='@/assets/curso/ico_subt.svg', alt='')
              .col-md-auto.col-9.ps-0
                h3.mb-0.text-white Técnicas de pelado de los conductores eléctricos
        .row.mt-5(data-aos="fade-left")
          p.bgmorado.borde-redondo.p-4 Antes de realizar un empalme, es necesario retirar el aislamiento de los extremos del cable (pelado), dejando expuesto el conductor metálico; este proceso debe realizarse cuidadosamente para evitar dañar los hilos conductores, lo cual podría afectar la calidad del amarre y generar riesgos eléctricos. Existen varias herramientas y métodos para ello:
      .col-lg-1
      .col-lg-3.col-md-6.col-12
        img.mb-4(src='@/assets/curso/temas/t5/img1.png', alt='')

    .tarjeta--container.row.mb-5(data-aos='fade-right')
      .col-md.tarjeta.b1.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t5/tar1-1.png', alt='Texto que describa la imagen')          
          p.text-white #[b Pinzas de electricista:] se utilizan principalmente cuando se desea pelar entre 2 y 3 centímetros del extremo del cable. Estas herramientas permiten un corte limpio y controlado del aislamiento.
      .col-md.tarjeta.b2.p-5
        .row.mb-0
          .col-auto
            img.mb-2(src='@/assets/curso/temas/t5/tar1-2.png', alt='Texto que describa la imagen')   
          p #[b Navaja o cuchilla de hoja ancha y sin punta (también conocida como trucha):] se recomienda su uso cuando es necesario pelar entre 5 y 8 centímetros del conductor o cuando se requiere pelar una sección intermedia del cable (no en el extremo). El procedimiento consiste en marcar con precisión el inicio y fin del tramo a pelar y retirar cuidadosamente el aislamiento, inclinando la hoja para evitar dañar el conductor interno.

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/ico_subt.svg', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Condiciones para un buen amarre

    p Un empalme bien realizado debe garantizar una conexión mecánica y eléctrica segura. Para ello, debe cumplir con las siguientes condiciones:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      ul.lista-ul--color.lista-ul--separador.fa-al.mb-0
        li.mb-2
          i.fas.fa-check-circle
          span #[b Firmeza:] los conductores deben quedar fuertemente unidos entre sí.
        li.mb-2
          i.fas.fa-check-circle
          span #[b Compacidad:] la unión no debe presentar espacios vacíos entre los hilos del conductor, lo cual podría generar calentamiento o pérdida de continuidad eléctrica.
        li.mb-2
          i.fas.fa-check-circle
          span #[b Vueltas o dobleces:] el cable debe enrollarse o retorcerse adecuadamente, de forma que la unión quede sólida y sin riesgo de soltarse.
        li.mb-2
          i.fas.fa-check-circle
          span #[b Remate final:] es fundamental dar dos o más vueltas firmes con pinzas de electricista para asegurar el empalme y evitar que queden puntas o hilos sueltos que puedan causar cortocircuitos.

    .subt.mb-4(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/ico_subt.svg', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-white Tipos de empalmes en desuso

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t5/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        <br> <br>
        p.mb-0 Con el paso del tiempo, algunos tipos de empalmes que anteriormente eran de uso común han caído en desuso, ya sea por no cumplir con los estándares actuales de seguridad o por la implementación de técnicas más eficientes.
        <br> <br> 
        br
    p.mb-4 En el presente componente se mencionan estos empalmes como referencia, con el fin de que el aprendiz tenga en cuenta esta información en su proceso de formación. A continuación, se presenta una tabla con ejemplos:

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-left')
      .titulo-sexto.color-acento-contenido
        h5 Tabla 2. 
        | Empalmes en desuso
      figure
        img.mb-2(src='@/assets/curso/temas/t5/tabla2.png', alt='La tabla presenta cuatro tipos de empalmes eléctricos en desuso o que no se utilizan con frecuencia. Cada uno se identifica por su nombre y una breve descripción del procedimiento y su aplicación. Incluye los empalmes "Cola de rata", "Western", "Derivación sencilla" y "Derivación doble", detallando sus características técnicas y el tipo de cables o situaciones donde se emplean.')
      figcaption Fuente: Implementación de instalaciones eléctricas, (2017).





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
