export default {
  global: {
    Name: 'Seguridad de las instalaciones eléctricas',
    Description:
      'En este espacio se aborda la seguridad en instalaciones eléctricas, haciendo énfasis en el cumplimiento del RETIE en Colombia. Así mismo se desarrollan contenidos sobre normativas técnicas, riesgos eléctricos, herramientas, empalmes y obra civil. Se promueve la correcta instalación, operación y mantenimiento para garantizar protección a las personas, equipos e infraestructuras. Además, se enfatiza la importancia del personal calificado y del uso de materiales certificados para minimizar riesgos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen_portada.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/decorativo3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estándares internacionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Reglamento técnico de instalaciones eléctricas (RETIE) ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cables de alto riesgo o peligrosos',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Riesgo eléctrico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Medidas de seguridad en las instalaciones eléctricas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Empalmes o amarres eléctricos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Obra civil y requisitos técnicos para instalaciones eléctricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Requisitos de obra civil para instalaciones eléctricas',
            hash: 't_6_1',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Herramientas más utilizadas por el electricista',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Cuadro de riesgo eléctrico',
      referencia:
        'ACHS-FUCYT. (n.d.). Prevención de Riesgos Eléctricos en el Sector de la Construcción.',
      tipo: 'PDF',
      link:
        'https://www.achs.cl/docs/librariesprovider2/empresa/centro-de-fichas/documentos-esenciales/manual-prevencion-riesgos-electricos.pdf',
    },
    {
      tema: 'Requerimientos de obra civil para instalaciones eléctricas',
      referencia:
        'Huérfano, J. D. (2021). MANUAL BÁSICO DE ESPECIFICACIONES TÉCNICAS DE CONSTRUCCIÓN DE INSTALACIONES ELÉCTRICAS PUERTO LEGUÍZAMO.',
      tipo: 'PDF',
      link:
        'https://www.enterritorio.gov.co/web/sites/default/files/2022-04/documentos/2.3%20Especificaciones%20t%C3%A9cnicas%20Complementarias%20El%C3%A9ctricas..pdf',
    },
  ],
  glosario: [
    {
      termino: 'RETIE',
      significado:
        'Reglamento técnico colombiano que establece requisitos de seguridad para instalaciones eléctricas.',
    },
    {
      termino: 'CEI/IEC',
      significado:
        'Organización internacional que elabora normas para sistemas eléctricos y electrónicos.',
    },
    {
      termino: 'Acometida',
      significado:
        'Conexión que lleva energía desde la red pública hasta la instalación del usuario.',
    },
    {
      termino: 'Empalme',
      significado:
        'Unión entre conductores eléctricos que garantiza continuidad y seguridad del circuito.',
    },
    {
      termino: 'Canalización',
      significado:
        'Sistema de tubos o bandejas que protege y organiza los conductores eléctricos.',
    },
    {
      termino: 'Norma técnica',
      significado:
        'Documento que especifica requisitos técnicos y de seguridad para productos o procesos.',
    },
    {
      termino: 'Sobretensión',
      significado:
        'Aumento anormal del voltaje que puede dañar equipos o generar riesgos.',
    },
    {
      termino: 'Corto circuito',
      significado:
        'Contacto directo entre conductores que genera un corriente excesiva y peligro.',
    },
    {
      termino: 'Puesta a tierra',
      significado:
        'Sistema que desvía la corriente eléctrica hacia la tierra para proteger a las personas y equipos.',
    },
    {
      termino: 'Interruptor termomagnético',
      significado:
        'Dispositivo de protección que desconecta el circuito ante sobrecargas o corto circuitos.',
    },
    {
      termino: 'Multímetro',
      significado:
        'Herramienta que mide voltaje, corriente y resistencia eléctrica.',
    },
    {
      termino: 'Riesgo eléctrico',
      significado:
        'Posibilidad de daño por contacto con electricidad o fallos en el sistema.',
    },
    {
      termino: 'Fusible',
      significado:
        'Elemento que protege el circuito al fundirse por exceso de corriente.',
    },
    {
      termino: 'Instalación visible',
      significado:
        'Sistema eléctrico montado sobre la superficie, sin ocultamiento en muros o techos.',
    },
    {
      termino: 'Calibre del conductor',
      significado:
        'Espesor del cable que determina su capacidad para conducir corriente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Centelsa. (2014). Boletín técnico Centelflex, Multiflex, ST-C & Potencia.',
      link:
        'https://www.nexans.co/dam/jcr:e54f8a3c-e092-41e7-b9d8-d6787b2219a7/Bolet%C3%ADn%20T%C3%A9cnico%20Centelflex,%20Multiflex,%20ST-C%20&%20Potencia.pdf',
    },
    {
      referencia:
        'Comisión Electrotécnica Internacional. (2018). Bienvenidos a IEC. Dato, 2.',
      link:
        'https://wpo-altertechnology.com/wp-content/uploads/2018/08/iec-pdf.pdf',
    },
    {
      referencia: 'Implementación de instalaciones eléctricas. (2017).',
      link:
        'https://iensmm.weebly.com/uploads/2/5/2/9/25294684/u4_implementacion.pdf',
    },
    {
      referencia: 'Miky. (2012). Historia de la soldadura. [Web blog spot].',
      link:
        'https://weldingandmore.blogspot.com/2012/01/historia-de-la-soldadura.html',
    },
    {
      referencia:
        'Ministerio De Minas Y Energía. (2024). Resolución número 40117 de 02 abril 2024. En libro 3.',
      link:
        'https://www.minenergia.gov.co/documents/11566/4._Libro_3_-_Instalaciones.pdf',
    },
    {
      referencia:
        'Navarro, F. (2025). Qué son las fugas eléctricas a tierra y cómo solucionarlas. Grupo Navarro.',
      link: 'https://gruponavarro.pe/blog/las-fugas-electricas-a-tierra/',
    },
    {
      referencia: 'Nevi. (2013). Electrónica.',
      link:
        'https://www.clubensayos.com/Temas-Varios/Qu%C3%A9-es-el-CEI-o-IEC/696212.html',
    },
    {
      referencia:
        'Swiss Re. (2024). Descargas Atmosféricas – Preparación y Protección.',
      link:
        'https://corporatesolutions.swissre.com/mexico-seguros/conocimiento/ingenieria-de-riesgos/guia-de-preparacion-y-proteccion-descargas-atmosfericas.html',
    },
    {
      referencia:
        'Zabalbeascoa, A. (2011). Todo sobre la casa. Editorial Gustavo Gili, SL.',
      link: 'https://www.academia.edu/35988718/GG_todo_sobre_la_casa',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Francisco Arnaldo Vargas Bermúdez ',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agropecuario y Agroindustrial - Regional Boyacá',
        },
        {
          nombre: 'Johanna Martínez Aragón',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro de Desarrollo Agropecuario y Agroindustrial - Regional Boyacá',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
