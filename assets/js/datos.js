/*
  BLACKBELT GROUP S.A.C. - Portafolio de procesos
  Archivo ÚNICO de datos. Para corregir el portafolio, edite este archivo:
  cada cambio se refleja en el mapa, el inventario, las fichas y el tablero.

  Convenciones (modelo UNHEVAL, Mapa de Procesos V.0.6):
    Nivel 0:  E.01 / M.01 / S.01
    Nivel 1:  M.01.01
    Nivel 2:  M.01.01.P01
    Indicador de nivel 0: M.01.I01  ·  de nivel 1: M.01.01.I01
  Estado operativo:   op = operativo sin estandarizar · ini = en inicio ·
                      apoyo = apoyo a aliados · idea = sin clientes aún
  Estado documental:  Borrador → Validado (Henry) → Aprobado (tras piloto)
  Marcas en texto:    (*) = actividad o control PROPUESTO, no existe hoy
*/

window.BB = {
  meta: {
    titulo: "Portafolio de procesos",
    empresa: "BLACKBELT GROUP S.A.C.",
    ruc: "20616527704",
    domicilio: "Cal. Huayllabamba 192, Coop. Veintisiete de Abril, Ate, Lima",
    version: "0.3",
    fecha: "22/11/2026",
    elaboro: "Johann Herrera (Mejora Continua)",
    aprueba: "Henry (Gerencia General)",
    estadoMapa: "Validado",
    nota: "El mapa de procesos nivel 0 fue validado por Henry. Fichas, subprocesos e indicadores están en borrador y se corrigen sobre la marcha."
  },

  estados: {
    op:    { txt: "Operativo, sin estandarizar", cls: "st-op" },
    ini:   { txt: "En inicio",                   cls: "st-ini" },
    apoyo: { txt: "Apoyo a aliados",             cls: "st-apoyo" },
    idea:  { txt: "Sin clientes aún",            cls: "st-idea" }
  },

  tipos: {
    E: { nombre: "Estratégicos", desc: "Orientan a la empresa: dirección, calidad, marca y alianzas." },
    M: { nombre: "Misionales",   desc: "Generan el servicio que recibe el cliente. M.02 a M.06 son las unidades de negocio." },
    S: { nombre: "De soporte",   desc: "Dan los recursos que necesitan los demás procesos." }
  },

  unidades: {
    "M.03": "#F26B1D", "M.04": "#1F5FBF", "M.02": "#6A2C91", "M.05": "#3E8A2E", "M.06": "#0E8C8C"
  },

  procesos: [
    /* ======================= ESTRATÉGICOS ======================= */
    {
      cod: "E.01", tipo: "E", nombre: "Dirección y planeamiento", dueno: "Henry", estado: "op", doc: "Borrador", version: "0.1",
      objetivo: "Orientar a BLACKBELT hacia sus objetivos mediante metas anuales, revisión periódica de resultados y decisiones documentadas.",
      alcance: "Desde la definición de objetivos anuales hasta la revisión mensual de indicadores y las decisiones que de ella resultan.",
      inicio: "Inicio del año o del periodo de planeamiento.", fin: "Decisiones registradas en la revisión mensual.",
      situacion: "Henry dirige todos los casos y aprueba todo. El objetivo actual de la dirección es la mejora continua mediante estandarización y KPIs. No hay plan anual escrito ni revisión periódica formal.",
      nivel1: [
        { cod: "E.01.01", nombre: "Planeamiento estratégico", objetivo: "Fijar objetivos, metas y prioridades del periodo.", nivel2: [
          { cod: "E.01.01.P01", nombre: "Definición de objetivos y metas anuales (*)" },
          { cod: "E.01.01.P02", nombre: "Plan de acción del periodo (*)" } ] },
        { cod: "E.01.02", nombre: "Seguimiento y revisión por la dirección", objetivo: "Revisar indicadores y decidir acciones.", nivel2: [
          { cod: "E.01.02.P01", nombre: "Revisión mensual del tablero de indicadores (*)" },
          { cod: "E.01.02.P02", nombre: "Decisiones y aprobaciones de documentos" } ] }
      ],
      sipoc: [
        { prov: "E.02 Calidad y mejora", ent: "Tablero de indicadores", sub: "E.01.02", prod: "Acta de revisión con decisiones (*)", cli: "Todos los procesos" },
        { prov: "S.01 Finanzas", ent: "Ingresos, egresos y margen por caso", sub: "E.01.01", prod: "Objetivos y metas del periodo (*)", cli: "Todos los procesos" },
        { prov: "E.02 Calidad y mejora", ent: "Fichas y documentos en borrador", sub: "E.01.02", prod: "Documentos validados o aprobados", cli: "E.02, S.03" }
      ],
      requisitos: ["Ley General de Sociedades, Ley N.° 26887 (obligaciones de la S.A.C.) — por validar"],
      controles: ["Revisión mensual del tablero (*)", "Toda aprobación queda registrada en el control de cambios del documento"],
      recursos: { humanos: ["Gerente general (Henry)", "Subgerente (Teddy)"], sistemas: ["Google Drive", "Portafolio de procesos"], instalaciones: ["Trabajo virtual"], equipos: ["Computadoras personales"] },
      indicadores: ["E.01.I01"],
      salidas: [ { a: "E.02", que: "Prioridades de mejora y aprobaciones" }, { a: "E.03", que: "Metas de captación" }, { a: "E.04", que: "Decisión sobre alianzas" } ],
      riesgos: [ { r: "Dependencia operativa de Henry en todas las decisiones", c: "Delegar decisiones rutinarias con criterios escritos en cada ficha (*)" } ],
      pendientes: ["Confirmar si existen metas de ventas o de lanzamiento (ZIGO, Institute) para el periodo."]
    },
    {
      cod: "E.02", tipo: "E", nombre: "Calidad y mejora continua", dueno: "Johann", estado: "ini", doc: "Borrador", version: "0.1",
      objetivo: "Estandarizar los procesos de BLACKBELT, medirlos con indicadores y mejorarlos de forma continua.",
      alcance: "Desde el levantamiento de cada proceso hasta su aprobación, medición y mejora.",
      inicio: "Encargo de estandarización de la dirección.", fin: "Proceso aprobado y medido; acciones de mejora cerradas.",
      situacion: "En inicio. Mapa nivel 0 validado por Henry. Ficha M.01 en borrador. Plan de 6 fases definido.",
      nivel1: [
        { cod: "E.02.01", nombre: "Gestión por procesos", objetivo: "Levantar, documentar y aprobar procesos.", nivel2: [
          { cod: "E.02.01.P01", nombre: "Levantamiento y mapeo de procesos" },
          { cod: "E.02.01.P02", nombre: "Elaboración de fichas, procedimientos y formatos" },
          { cod: "E.02.01.P03", nombre: "Control de documentos y versiones" } ] },
        { cod: "E.02.02", nombre: "Gestión de indicadores", objetivo: "Medir el desempeño de cada proceso.", nivel2: [
          { cod: "E.02.02.P01", nombre: "Medición y actualización del tablero (*)" },
          { cod: "E.02.02.P02", nombre: "Línea base y propuesta de metas (*)" } ] },
        { cod: "E.02.03", nombre: "Mejora continua", objetivo: "Probar y corregir los procesos.", nivel2: [
          { cod: "E.02.03.P01", nombre: "Pilotos con casos reales (*)" },
          { cod: "E.02.03.P02", nombre: "Acciones correctivas y de mejora (*)" } ] }
      ],
      sipoc: [
        { prov: "Henry, Teddy, Jeferson", ent: "Información de la operación real y evidencias", sub: "E.02.01", prod: "Mapa, inventario y fichas de procesos", cli: "E.01, todos los procesos" },
        { prov: "Registros de cada proceso", ent: "Datos de los formatos", sub: "E.02.02", prod: "Tablero de indicadores", cli: "E.01" },
        { prov: "E.01 Dirección", ent: "Decisiones de la revisión mensual", sub: "E.02.03", prod: "Acciones de mejora registradas", cli: "Procesos involucrados" }
      ],
      requisitos: ["Referencia metodológica: Norma Técnica N.° 002-2025-PCM-SGP (gestión por procesos) y modelo UNHEVAL V.0.6 — referencia, no obligación"],
      controles: ["Ningún documento se declara implementado sin piloto", "Solo Henry valida y aprueba", "Control de cambios en cada documento"],
      recursos: { humanos: ["Mejora Continua (Johann)"], sistemas: ["Portafolio de procesos (GitHub Pages)", "Google Drive"], instalaciones: ["Trabajo virtual"], equipos: ["Computadora"] },
      indicadores: ["E.02.I01", "E.02.I02"],
      salidas: [ { a: "E.01", que: "Tablero de indicadores y documentos para aprobar" }, { a: "S.03", que: "Documentos controlados" }, { a: "M.01", que: "Fichas y formatos" }, { a: "M.02", que: "Fichas y formatos" }, { a: "M.07", que: "Fichas y formatos" } ],
      riesgos: [ { r: "Producir documentos que nadie usa", c: "Medir la aplicación en piloto (E.02.I02)" } ],
      pendientes: []
    },
    {
      cod: "E.03", tipo: "E", nombre: "Marca y marketing", dueno: "Jeferson", estado: "op", doc: "Borrador", version: "0.1",
      objetivo: "Atraer clientes potenciales a BLACKBELT y a BLACKBELT Institute con una marca coherente y canales medidos.",
      alcance: "Desde la planificación de contenidos y campañas hasta la entrega del contacto a M.01 (o a M.08 en el Institute).",
      inicio: "Plan de contenidos o campaña.", fin: "Contacto entregado a gestión comercial.",
      situacion: "Los clientes llegan por referidos, redes sociales y campañas de Facebook Ads. BLACKBELT es solo virtual; el Institute hará marketing presencial y virtual. No se mide el origen de cada cliente.",
      nivel1: [
        { cod: "E.03.01", nombre: "Gestión de marca y contenidos", objetivo: "Mantener la identidad y publicar contenidos.", nivel2: [
          { cod: "E.03.01.P01", nombre: "Calendario de contenidos (*)" }, { cod: "E.03.01.P02", nombre: "Publicación en redes y web" } ] },
        { cod: "E.03.02", nombre: "Campañas digitales", objetivo: "Captar contactos con Facebook Ads.", nivel2: [
          { cod: "E.03.02.P01", nombre: "Diseño y lanzamiento de campañas" }, { cod: "E.03.02.P02", nombre: "Medición de resultados por campaña (*)" } ] },
        { cod: "E.03.03", nombre: "Referidos", objetivo: "Aprovechar las recomendaciones de clientes.", nivel2: [
          { cod: "E.03.03.P01", nombre: "Solicitud de referidos al cierre (*)" } ] }
      ],
      sipoc: [
        { prov: "E.01 Dirección", ent: "Metas de captación", sub: "E.03.02", prod: "Campañas publicadas", cli: "Clientes potenciales" },
        { prov: "Clientes potenciales", ent: "Interacciones y mensajes", sub: "E.03.01", prod: "Contacto con canal de origen registrado", cli: "M.01, M.08" },
        { prov: "M.07 Entrega y satisfacción", ent: "Clientes satisfechos", sub: "E.03.03", prod: "Referidos", cli: "M.01" }
      ],
      requisitos: ["Ley N.° 29571, Código de Protección y Defensa del Consumidor (publicidad) — por validar", "Ley N.° 29733, Protección de Datos Personales — por validar"],
      controles: ["Registrar el canal de origen de cada contacto (*)", "Revisión de la pieza publicitaria por Henry antes de publicar (*)"],
      recursos: { humanos: ["Marketing (Jeferson)", "Apoyo Institute (Jair)"], sistemas: ["Facebook / Meta Ads", "Redes sociales", "Web corporativa"], instalaciones: ["Virtual; presencial para el Institute"], equipos: ["Computadora, celular"] },
      indicadores: ["E.03.I01", "E.03.I02"],
      salidas: [ { a: "M.01", que: "Contactos con canal de origen" }, { a: "M.08", que: "Interesados en programas" } ],
      riesgos: [ { r: "Invertir en Ads sin saber cuántos clientes generan", c: "Costo de captación por Ads (E.03.I02)" } ],
      pendientes: ["Monto mensual aproximado invertido en Facebook Ads."]
    },
    {
      cod: "E.04", tipo: "E", nombre: "Gestión de alianzas", dueno: "Henry", estado: "op", doc: "Borrador", version: "0.1",
      objetivo: "Contar con aliados confiables que amplíen la capacidad técnica de BLACKBELT.",
      alcance: "Desde la identificación de un aliado hasta la evaluación de su desempeño en proyectos conjuntos.",
      inicio: "Necesidad de capacidad externa o propuesta de alianza.", fin: "Aliado evaluado tras el proyecto.",
      situacion: "Aliados publicados: Bethabel Company (geofísica), ECUS S.A.C. (construcción y telecomunicaciones), ODISEO (software) y AIONVEX (tecnología comercial). BLACKBELT contrata con el cliente y paga al aliado cuando interviene. Henry apoya proyectos de aliados (M.05).",
      nivel1: [
        { cod: "E.04.01", nombre: "Identificación y evaluación de aliados", objetivo: "Elegir aliados con criterio.", nivel2: [ { cod: "E.04.01.P01", nombre: "Evaluación inicial del aliado (*)" } ] },
        { cod: "E.04.02", nombre: "Acuerdos con aliados", objetivo: "Fijar alcance, pagos y responsabilidades.", nivel2: [ { cod: "E.04.02.P01", nombre: "Acuerdo escrito por proyecto (*)" } ] },
        { cod: "E.04.03", nombre: "Seguimiento del desempeño", objetivo: "Medir la calidad del trabajo conjunto.", nivel2: [ { cod: "E.04.03.P01", nombre: "Evaluación al cierre del proyecto (*)" } ] }
      ],
      sipoc: [
        { prov: "Aliados", ent: "Capacidades y propuestas", sub: "E.04.01", prod: "Aliado evaluado", cli: "E.01" },
        { prov: "E.01 Dirección", ent: "Decisión de alianza", sub: "E.04.02", prod: "Acuerdo con el aliado", cli: "M.05, S.02, S.04" },
        { prov: "M.05 Ingeniería Especializada", ent: "Resultado del proyecto conjunto", sub: "E.04.03", prod: "Evaluación del aliado", cli: "E.01" }
      ],
      requisitos: ["Código Civil peruano (contratos de locación de servicios) — por validar"],
      controles: ["Acuerdo escrito antes de iniciar un proyecto con aliado (*)"],
      recursos: { humanos: ["Henry"], sistemas: ["Google Drive"], instalaciones: ["Virtual"], equipos: ["Computadora"] },
      indicadores: ["E.04.I01"],
      salidas: [ { a: "M.05", que: "Proyectos de aliados para apoyar" }, { a: "S.02", que: "Especialistas disponibles" } ],
      riesgos: [ { r: "Responsabilidad ante el cliente por un trabajo del aliado", c: "Revisión técnica competente antes de entregar (M.02.05)" } ],
      pendientes: ["Alcance contractual con cada aliado."]
    },

    /* ======================= MISIONALES ======================= */
    {
      cod: "M.01", tipo: "M", nombre: "Gestión comercial y de acuerdos", dueno: "Henry", estado: "op", doc: "Borrador", version: "0.2", prioridad: true,
      objetivo: "Convertir a un cliente interesado en un caso con alcance, precio y plazo acordados por escrito antes de iniciar el trabajo.",
      alcance: "Hoy solo el servicio de investigación (M.02). Se aplicará a las demás unidades cuando operen.",
      inicio: "El cliente potencial hace el primer contacto (referido, redes o Facebook Ads).", fin: "Contrato firmado y grupo de WhatsApp del caso creado; el caso pasa a M.02.",
      situacion: "Henry atiende el contacto, hace un Meet, acuerda casi todo verbalmente, fija el precio caso por caso (una investigación completa ronda S/ 3,000), firma el contrato general (título del proyecto y nombre del cliente) y crea el grupo de WhatsApp. El cierre toma 1 a 3 días. La conversión no se mide.",
      nivel1: [
        { cod: "M.01.01", nombre: "Captación y registro del contacto", dueno: "Henry (Jeferson en campañas)", objetivo: "Atender y registrar cada contacto con su origen.",
          entradas: ["Mensaje del cliente potencial"], salidas: ["Contacto registrado con canal de origen"], registros: ["FO-M01-01 Registro de contactos (*)"],
          nivel2: [ { cod: "M.01.01.P01", nombre: "Recepción y primera respuesta" }, { cod: "M.01.01.P02", nombre: "Registro del contacto y su canal (*)" } ] },
        { cod: "M.01.02", nombre: "Diagnóstico y viabilidad", dueno: "Henry", objetivo: "Entender el caso y decidir si se puede cumplir antes de ofertar.",
          entradas: ["Contacto registrado", "Datos del caso: tema, institución, avance, plazos, requisitos de similitud"], salidas: ["Caso viable, viable con ajustes o rechazado"], registros: ["FO-M01-02 Ficha de diagnóstico (*)"],
          nivel2: [ { cod: "M.01.02.P01", nombre: "Reunión Meet de diagnóstico" }, { cod: "M.01.02.P02", nombre: "Evaluación de viabilidad (información disponible, plazo, competencias, especialista) (*)" }, { cod: "M.01.02.P03", nombre: "Rechazo o alternativa por escrito (*)" } ] },
        { cod: "M.01.03", nombre: "Propuesta y contrato", dueno: "Henry", objetivo: "Dejar por escrito lo acordado y abrir el caso.",
          entradas: ["Caso viable", "Referencia de precios (*)"], salidas: ["Contrato firmado", "Grupo de WhatsApp y carpeta del caso"], registros: ["FO-M01-03 Propuesta de servicio (*)", "Contrato general (existe)"],
          nivel2: [ { cod: "M.01.03.P01", nombre: "Propuesta escrita: alcance, entregables, plazos, revisiones, cambios, precio y forma de pago (*)" }, { cod: "M.01.03.P02", nombre: "Aceptación del cliente" }, { cod: "M.01.03.P03", nombre: "Contrato y apertura del caso (grupo y carpeta en Drive)" } ] }
      ],
      sipoc: [
        { prov: "E.03 Marca y marketing / referidos", ent: "Contacto del cliente potencial", sub: "M.01.01", prod: "Contacto registrado con canal", cli: "E.03 (medición)" },
        { prov: "Cliente", ent: "Datos y requisitos del caso", sub: "M.01.02", prod: "Ficha de diagnóstico y decisión de viabilidad", cli: "Henry, M.02" },
        { prov: "S.01 Finanzas", ent: "Referencia de precios y costos", sub: "M.01.03", prod: "Propuesta aceptada", cli: "Cliente" },
        { prov: "S.04 Legal", ent: "Modelo de contrato general", sub: "M.01.03", prod: "Contrato firmado y caso abierto", cli: "Cliente, M.02, S.01, S.03" }
      ],
      requisitos: ["Código Civil peruano (contratos) — por validar", "Ley N.° 29571, Código de Protección y Defensa del Consumidor — por validar", "Ley N.° 29733, Protección de Datos Personales — por validar"],
      controles: ["Evaluación de viabilidad antes de ofertar (*)", "Propuesta aceptada por escrito antes del contrato (*)", "El contrato aclara que no se garantiza la aprobación institucional ni un porcentaje de similitud (*)", "Registro del motivo de cada caso no cerrado (*)"],
      recursos: { humanos: ["Henry", "Teddy o especialista (consulta de viabilidad)"], sistemas: ["Google Meet", "WhatsApp", "Google Drive", "Sistema propio de costos"], instalaciones: ["Trabajo virtual"], equipos: ["Computadora, celular"] },
      indicadores: ["M.01.I01", "M.01.I02", "M.01.I03", "M.01.I04"],
      salidas: [ { a: "M.02", que: "Caso contratado con alcance acordado" }, { a: "S.01", que: "Precio y forma de pago" }, { a: "S.03", que: "Carpeta del caso" }, { a: "E.03", que: "Canal de origen de los clientes" } ],
      riesgos: [
        { r: "Comprometer un resultado imposible (caso A: 15 antecedentes pedidos, 1 encontrado; no se entregó ni cobró)", c: "Viabilidad y búsqueda preliminar antes de comprometer cantidades (*)" },
        { r: "Aceptar un caso técnico sin revisor competente (caso B: memoria de cálculo tercerizada)", c: "Definir especialista y revisor en la viabilidad; incluir su costo en el precio (*)" },
        { r: "Desacuerdo sobre lo pactado y retrabajo sin límite", c: "Propuesta escrita con número de revisiones y tratamiento de cambios (*)" }
      ],
      pendientes: ["Medio por el que escribe primero el cliente y quién responde.", "Motivos por los que se ha rechazado un caso.", "Copia del contrato general sin datos personales."]
    },
    {
      cod: "M.02", tipo: "M", nombre: "Investigación y Desarrollo", dueno: "Henry (ejecuta con Teddy)", estado: "op", doc: "Borrador", version: "0.1", prioridad: true, unidad: true,
      objetivo: "Desarrollar el servicio de investigación contratado con rigor metodológico, fuentes verificables y revisión competente, dentro del plazo acordado.",
      alcance: "Todos los servicios de investigación: investigación completa, por partes, asesoría y corrección (ver catálogo de servicios). Aprox. 4–5 casos por mes.",
      inicio: "Caso contratado recibido de M.01.", fin: "Entregable aprobado internamente por Henry y enviado a M.07.",
      situacion: "Henry y Teddy trabajan cada caso; si hace falta, se contrata un especialista. Henry revisa siempre antes de enviar. Los archivos viven en la computadora de Henry, el Drive y el grupo de WhatsApp. No hay secuencia uniforme ni entregables estándar.",
      nivel1: [
        { cod: "M.02.01", nombre: "Planificación del caso", dueno: "Henry", objetivo: "Convertir lo contratado en un plan con entregables y fechas.",
          entradas: ["Contrato y propuesta aceptada", "Requisitos de la institución del cliente"], salidas: ["Plan del caso con cronograma de entregas"], registros: ["FO-M02-01 Plan del caso (*)"],
          nivel2: [ { cod: "M.02.01.P01", nombre: "Revisión de requisitos de la institución (formato, similitud, plazos)" }, { cod: "M.02.01.P02", nombre: "Plan de trabajo y cronograma de entregas (*)" }, { cod: "M.02.01.P03", nombre: "Asignación del equipo y del especialista" } ] },
        { cod: "M.02.02", nombre: "Búsqueda y gestión de información", dueno: "Teddy", objetivo: "Reunir antecedentes y fuentes verificables.",
          entradas: ["Plan del caso"], salidas: ["Fuentes y antecedentes verificados"], registros: ["FO-M02-03 Registro de búsqueda (*)"],
          nivel2: [ { cod: "M.02.02.P01", nombre: "Búsqueda de antecedentes y fuentes" }, { cod: "M.02.02.P02", nombre: "Registro de bases consultadas, filtros y resultados (*)" } ] },
        { cod: "M.02.03", nombre: "Metodología y análisis", dueno: "Henry / Teddy / especialista", objetivo: "Diseñar el método y analizar los datos.",
          entradas: ["Fuentes", "Datos del cliente"], salidas: ["Metodología y resultados del análisis"], registros: ["Archivos de análisis en la carpeta del caso"],
          nivel2: [ { cod: "M.02.03.P01", nombre: "Diseño metodológico" }, { cod: "M.02.03.P02", nombre: "Procesamiento y análisis de datos" }, { cod: "M.02.03.P03", nombre: "Trabajo especializado tercerizado (cálculos, ensayos)" } ] },
        { cod: "M.02.04", nombre: "Redacción y formato", dueno: "Henry / Teddy", objetivo: "Redactar y dar formato según la norma de la institución.",
          entradas: ["Resultados", "Guía de la institución"], salidas: ["Borrador del entregable"], registros: ["Versión del entregable en Drive"],
          nivel2: [ { cod: "M.02.04.P01", nombre: "Redacción" }, { cod: "M.02.04.P02", nombre: "Formato y normas de citación" } ] },
        { cod: "M.02.05", nombre: "Revisión técnica y de similitud", dueno: "Henry", objetivo: "Verificar calidad técnica y requisitos antes de entregar.",
          entradas: ["Borrador del entregable"], salidas: ["Entregable aprobado internamente"], registros: ["FO-M02-02 Control de entregas y revisiones (*)"],
          nivel2: [ { cod: "M.02.05.P01", nombre: "Revisión técnica por revisor competente" }, { cod: "M.02.05.P02", nombre: "Revisión de similitud según requisito del cliente" }, { cod: "M.02.05.P03", nombre: "Aprobación interna de Henry" } ] }
      ],
      sipoc: [
        { prov: "M.01 Gestión comercial", ent: "Caso contratado, alcance y plazos", sub: "M.02.01", prod: "Plan del caso", cli: "Equipo del caso" },
        { prov: "Cliente / institución", ent: "Avance, datos y requisitos", sub: "M.02.02 – M.02.03", prod: "Fuentes, metodología y análisis", cli: "M.02.04" },
        { prov: "S.02 Especialistas", ent: "Trabajo especializado", sub: "M.02.03", prod: "Resultado técnico", cli: "M.02.05" },
        { prov: "M.07 Entrega", ent: "Observaciones del cliente", sub: "M.02.04 – M.02.05", prod: "Entregable revisado y aprobado", cli: "M.07" }
      ],
      requisitos: ["Reglamentos de grados, títulos e integridad académica de la institución del cliente (requisito del cliente)", "Decreto Legislativo N.° 822, Ley sobre el Derecho de Autor — por validar", "Ley N.° 29733, Protección de Datos Personales — por validar"],
      controles: ["Nunca fabricar antecedentes, datos ni referencias", "Revisión de Henry antes de cada envío (existe)", "Revisor competente para entregables técnicos (*)", "Registro de búsqueda cuando se piden antecedentes en cantidad (*)", "Un porcentaje de similitud no se trata como prueba de calidad"],
      recursos: { humanos: ["Henry", "Teddy", "Especialistas externos según el caso"], sistemas: ["Google Drive", "WhatsApp", "Herramientas de similitud del cliente o de la institución", "Bases de datos académicas"], instalaciones: ["Trabajo virtual"], equipos: ["Computadoras"] },
      indicadores: ["M.02.I01", "M.02.I02", "M.02.I03", "M.02.I04"],
      salidas: [ { a: "M.07", que: "Entregable aprobado internamente" }, { a: "S.01", que: "Costo real del caso" }, { a: "S.03", que: "Versiones del entregable" } ],
      riesgos: [ { r: "Retrabajo por cambios sin límite", c: "Número de revisiones y cambios definidos en la propuesta (M.01.03)" }, { r: "Archivos solo en la computadora de Henry", c: "Expediente del caso en Drive con versiones (S.03)" } ],
      pendientes: ["Catálogo definitivo de servicios (completo, por partes, asesoría, corrección) y qué subprocesos aplica cada uno.", "Un caso típico de inicio a fin: qué hace Henry, qué hace Teddy, cuándo entra el especialista y cuántas entregas parciales hay."]
    },
    {
      cod: "M.03", tipo: "M", nombre: "Ingeniería y Productividad", dueno: "Por definir", estado: "idea", doc: "Borrador", version: "0.1", unidad: true,
      objetivo: "Mejorar procesos, operaciones y productividad de los clientes para generar eficiencia y resultados sostenibles.",
      alcance: "Servicios publicados en el brochure; aún sin clientes.",
      inicio: "Caso contratado por M.01.", fin: "Informe de mejora entregado a M.07.",
      situacion: "Sin clientes aún. Solo figura en la oferta comercial. Se estandarizará con una ficha de arranque al primer cliente.",
      nivel1: [
        { cod: "M.03.01", nombre: "Diagnóstico y mejora de procesos", objetivo: "Según oferta publicada.", nivel2: [] },
        { cod: "M.03.02", nombre: "Lean, calidad y productividad", objetivo: "Según oferta publicada.", nivel2: [] },
        { cod: "M.03.03", nombre: "Estudio de tiempos e indicadores de gestión", objetivo: "Según oferta publicada.", nivel2: [] }
      ],
      sipoc: [ { prov: "M.01", ent: "Caso contratado", sub: "M.03.01 – M.03.03", prod: "Informe de mejora", cli: "M.07" } ],
      requisitos: [], controles: ["Ficha de arranque antes del primer cliente (*)"],
      recursos: { humanos: ["Por definir"], sistemas: [], instalaciones: [], equipos: [] },
      indicadores: ["M.03.I01"], salidas: [ { a: "M.07", que: "Informe de mejora" } ], riesgos: [], pendientes: ["Responsable de la unidad."]
    },
    {
      cod: "M.04", tipo: "M", nombre: "Tecnología y Transformación Digital", dueno: "Por definir", estado: "ini", doc: "Borrador", version: "0.1", unidad: true,
      objetivo: "Desarrollar soluciones digitales y el producto propio ZIGO.",
      alcance: "Hoy solo el desarrollo de ZIGO, producto propio en desarrollo con un tercero. Aún no hay desarrollos para clientes.",
      inicio: "Requerimiento o hito del producto.", fin: "Versión del producto o solución entregada.",
      situacion: "ZIGO (movilidad en Huánuco, Amarilis y Pillco Marca) está en desarrollo con un tercero. El estado real de cada función no está verificado.",
      nivel1: [
        { cod: "M.04.01", nombre: "Desarrollo del producto propio ZIGO", objetivo: "Seguir el avance del desarrollo con el tercero.", nivel2: [ { cod: "M.04.01.P01", nombre: "Plan de hitos con el tercero (*)" }, { cod: "M.04.01.P02", nombre: "Pruebas y aceptación de cada versión (*)" } ] },
        { cod: "M.04.02", nombre: "Soluciones digitales para clientes", objetivo: "Sin desarrollos aún.", nivel2: [] }
      ],
      sipoc: [ { prov: "Tercero desarrollador", ent: "Versiones del producto", sub: "M.04.01", prod: "ZIGO probado por hitos", cli: "E.01, usuarios finales" } ],
      requisitos: ["Ley N.° 29733, Protección de Datos Personales (datos de usuarios de la app) — por validar"],
      controles: ["Aceptación por hitos documentada (*)"],
      recursos: { humanos: ["Por definir", "Tercero desarrollador"], sistemas: [], instalaciones: [], equipos: [] },
      indicadores: ["M.04.I01"], salidas: [ { a: "E.01", que: "Avance de ZIGO" } ], riesgos: [], pendientes: ["Responsable interno de ZIGO y acuerdo con el tercero."]
    },
    {
      cod: "M.05", tipo: "M", nombre: "Ingeniería Especializada", dueno: "Henry", estado: "apoyo", doc: "Borrador", version: "0.1", unidad: true,
      objetivo: "Apoyar proyectos de aliados que requieren conocimientos técnicos especializados (geofísica, investigación ambiental).",
      alcance: "Proyectos de aliados en los que BLACKBELT participa como apoyo.",
      inicio: "Proyecto de aliado identificado.", fin: "Apoyo cerrado con conformidad del aliado.",
      situacion: "Los proyectos publicados (geofísica en Huancavelica y Jaén, calidad de agua en Loreto) son de aliados; Henry participó como apoyo. Se busca encontrar más proyectos de aliados.",
      nivel1: [
        { cod: "M.05.01", nombre: "Búsqueda de proyectos de aliados", objetivo: "Identificar proyectos donde aportar.", nivel2: [] },
        { cod: "M.05.02", nombre: "Apoyo técnico en campo y gabinete", objetivo: "Ejecutar la parte acordada.", nivel2: [] },
        { cod: "M.05.03", nombre: "Cierre y conformidad del aliado", objetivo: "Cerrar el apoyo y evaluarlo.", nivel2: [] }
      ],
      sipoc: [ { prov: "E.04 Alianzas", ent: "Proyecto del aliado y alcance del apoyo", sub: "M.05.01 – M.05.03", prod: "Apoyo técnico entregado", cli: "Aliado" } ],
      requisitos: [], controles: ["Acuerdo escrito del alcance del apoyo (*)"],
      recursos: { humanos: ["Henry"], sistemas: [], instalaciones: ["Campo (según proyecto)"], equipos: ["Del aliado"] },
      indicadores: ["M.05.I01"], salidas: [ { a: "E.04", que: "Resultado del proyecto conjunto" } ], riesgos: [], pendientes: []
    },
    {
      cod: "M.06", tipo: "M", nombre: "Emprendimiento y Desarrollo Empresarial", dueno: "Por definir", estado: "ini", doc: "Borrador", version: "0.1", unidad: true,
      objetivo: "Acompañar la creación, validación y fortalecimiento de emprendimientos y empresas.",
      alcance: "En etapa de publicidad y definición de precios.",
      inicio: "Caso contratado por M.01.", fin: "Acompañamiento cerrado en M.07.",
      situacion: "Sin clientes. Se están definiendo precios y publicidad.",
      nivel1: [
        { cod: "M.06.01", nombre: "Ideación, validación y modelo de negocio", objetivo: "Según oferta publicada.", nivel2: [] },
        { cod: "M.06.02", nombre: "Planificación y gestión", objetivo: "Según oferta publicada.", nivel2: [] },
        { cod: "M.06.03", nombre: "Marketing, ventas y capacitación empresarial", objetivo: "Según oferta publicada.", nivel2: [] }
      ],
      sipoc: [ { prov: "M.01", ent: "Caso contratado", sub: "M.06.01 – M.06.03", prod: "Plan o acompañamiento entregado", cli: "M.07" } ],
      requisitos: [], controles: ["Tarifario aprobado antes del primer cliente (*)"],
      recursos: { humanos: ["Por definir"], sistemas: [], instalaciones: [], equipos: [] },
      indicadores: ["M.06.I01"], salidas: [ { a: "M.07", que: "Acompañamiento entregado" } ], riesgos: [], pendientes: ["Tarifario y responsable."]
    },
    {
      cod: "M.07", tipo: "M", nombre: "Entrega, cierre y satisfacción", dueno: "Henry", estado: "op", doc: "Borrador", version: "0.1", prioridad: true,
      objetivo: "Entregar al cliente lo acordado, atender sus observaciones, cobrar y cerrar el caso con conformidad y opinión del cliente registradas.",
      alcance: "Todas las entregas de investigación; se aplicará a las demás unidades cuando operen.",
      inicio: "Entregable aprobado internamente (M.02.05).", fin: "Conformidad registrada, encuestas respondidas y caso archivado.",
      situacion: "Henry envía por WhatsApp; el cliente da conformidad o pide cambios hasta quedar satisfecho. Se cobra contra entrega. Existe una encuesta de satisfacción en Google Forms para todas las investigaciones, pero al final los clientes casi no la responden. Se planea una encuesta intermedia cuando el cliente paga una parte.",
      nivel1: [
        { cod: "M.07.01", nombre: "Entregas parciales y cobro", dueno: "Henry", objetivo: "Entregar por hitos y cobrar cada parte.",
          entradas: ["Entregable aprobado internamente", "Hitos de pago de la propuesta (*)"], salidas: ["Entrega enviada", "Pago registrado"], registros: ["FO-M02-02 Control de entregas y revisiones (*)", "Comprobante (boleta electrónica)"],
          nivel2: [ { cod: "M.07.01.P01", nombre: "Envío del entregable o avance" }, { cod: "M.07.01.P02", nombre: "Cobro del hito y emisión del comprobante" } ] },
        { cod: "M.07.02", nombre: "Observaciones y correcciones", dueno: "Henry", objetivo: "Atender las observaciones dentro de lo acordado.",
          entradas: ["Observaciones del cliente"], salidas: ["Entrega corregida"], registros: ["FO-M02-02 Control de entregas y revisiones (*)"],
          nivel2: [ { cod: "M.07.02.P01", nombre: "Registro de observaciones (ronda N de las acordadas) (*)" }, { cod: "M.07.02.P02", nombre: "Corrección en M.02 y nueva entrega" } ] },
        { cod: "M.07.03", nombre: "Satisfacción del cliente", dueno: "Henry (Johann mide)", objetivo: "Conocer la opinión del cliente durante y al final del servicio.",
          entradas: ["Pago de un hito intermedio", "Conformidad final"], salidas: ["Respuestas de encuesta"], registros: ["FO-M07-02 Encuesta intermedia (*)", "Encuesta final en Google Forms (existe)"],
          nivel2: [ { cod: "M.07.03.P01", nombre: "Encuesta intermedia al pagar el hito intermedio (*)" }, { cod: "M.07.03.P02", nombre: "Encuesta final en Google Forms" } ] },
        { cod: "M.07.04", nombre: "Conformidad y cierre", dueno: "Henry", objetivo: "Cerrar el caso con evidencia.",
          entradas: ["Última entrega aceptada"], salidas: ["Acta o mensaje de conformidad", "Caso archivado"], registros: ["FO-M07-01 Conformidad de servicio (*)"],
          nivel2: [ { cod: "M.07.04.P01", nombre: "Registro de conformidad (*)" }, { cod: "M.07.04.P02", nombre: "Cierre y archivo del expediente (*)" }, { cod: "M.07.04.P03", nombre: "Solicitud de referido (*)" } ] }
      ],
      sipoc: [
        { prov: "M.02 Investigación", ent: "Entregable aprobado internamente", sub: "M.07.01", prod: "Entrega enviada y cobro", cli: "Cliente, S.01" },
        { prov: "Cliente", ent: "Observaciones", sub: "M.07.02", prod: "Entrega corregida", cli: "Cliente" },
        { prov: "Cliente", ent: "Respuestas de encuesta", sub: "M.07.03", prod: "Índice de satisfacción", cli: "E.01, E.02" },
        { prov: "Cliente", ent: "Conformidad", sub: "M.07.04", prod: "Caso cerrado y referido", cli: "S.03, E.03" }
      ],
      requisitos: ["Normas de comprobantes de pago de SUNAT (boleta electrónica) — por validar con el contador", "Ley N.° 29571, Código de Protección y Defensa del Consumidor — por validar"],
      controles: ["Revisión de Henry antes de enviar (existe)", "Encuesta intermedia vinculada al pago de un hito (*)", "Conformidad registrada antes del cierre (*)", "Conteo de rondas de corrección contra lo acordado (*)"],
      recursos: { humanos: ["Henry", "Johann (medición)"], sistemas: ["WhatsApp", "Google Forms", "Google Drive", "Portal SUNAT (boletas)"], instalaciones: ["Virtual"], equipos: ["Computadora, celular"] },
      indicadores: ["M.07.I01", "M.07.I02", "M.07.I03"],
      salidas: [ { a: "S.01", que: "Cobros realizados" }, { a: "M.02", que: "Observaciones para corregir" }, { a: "E.03", que: "Referidos" }, { a: "E.02", que: "Resultados de satisfacción" }, { a: "S.03", que: "Expediente cerrado" } ],
      riesgos: [ { r: "El cliente no responde la encuesta final", c: "Encuesta intermedia al pagar un hito (*)" }, { r: "Cobro contra entrega sin hitos: trabajo no cobrado si el cliente abandona", c: "Hitos de pago en la propuesta (*)" } ],
      pendientes: ["Qué parte del pago dispara la encuesta intermedia (porcentaje o entregable).", "Preguntas de la encuesta actual de Google Forms."]
    },
    {
      cod: "M.08", tipo: "M", nombre: "BLACKBELT Institute", dueno: "Jair (con Jeferson)", estado: "ini", doc: "Borrador", version: "0.1", aparte: true,
      objetivo: "Ofrecer cursos, capacitaciones y diplomados virtuales con calidad medida.",
      alcance: "Línea aparte de las 5 unidades de negocio; opera bajo BLACKBELT GROUP S.A.C. Marketing presencial y virtual.",
      inicio: "Diseño o convocatoria de un programa.", fin: "Participantes certificados y programa evaluado.",
      situacion: "Negocio absorbido que aún no inicia. Jair, quien trabajó 3 años en esa empresa, es el responsable, con apoyo de Jeferson.",
      nivel1: [
        { cod: "M.08.01", nombre: "Diseño de programas", objetivo: "Por levantar.", nivel2: [] },
        { cod: "M.08.02", nombre: "Promoción e inscripción", objetivo: "Por levantar.", nivel2: [] },
        { cod: "M.08.03", nombre: "Dictado virtual", objetivo: "Por levantar.", nivel2: [] },
        { cod: "M.08.04", nombre: "Evaluación y certificación", objetivo: "Por levantar.", nivel2: [] }
      ],
      sipoc: [ { prov: "E.03 Marketing", ent: "Interesados", sub: "M.08.01 – M.08.04", prod: "Participantes capacitados y certificados", cli: "Participantes" } ],
      requisitos: [], controles: ["Ficha de arranque antes del primer programa (*)"],
      recursos: { humanos: ["Jair", "Jeferson", "Docentes por programa"], sistemas: ["Plataforma virtual (por definir)"], instalaciones: ["Virtual"], equipos: [] },
      indicadores: ["M.08.I01"], salidas: [ { a: "S.01", que: "Ingresos por programas" }, { a: "E.03", que: "Testimonios" } ], riesgos: [], pendientes: ["Levantar los procesos del Institute con Jair."]
    },

    /* ======================= SOPORTE ======================= */
    {
      cod: "S.01", tipo: "S", nombre: "Finanzas y costos", dueno: "Henry + contador externo", estado: "op", doc: "Borrador", version: "0.1",
      objetivo: "Registrar y controlar ingresos, egresos y costo por caso, y cumplir las obligaciones tributarias.",
      alcance: "Todos los ingresos y pagos de la empresa.",
      inicio: "Cobro o pago.", fin: "Registro conciliado y obligaciones declaradas.",
      situacion: "Henry registra en Excel y en el sistema propio (ingresos, egresos, clientes activos, pagos de mano de obra) con apoyo de un contador externo que lleva los impuestos. Paga por la cuenta de la empresa. Hoy solo emite boletas electrónicas.",
      nivel1: [
        { cod: "S.01.01", nombre: "Cobranzas y comprobantes", objetivo: "Cobrar y emitir comprobantes.", nivel2: [ { cod: "S.01.01.P01", nombre: "Cobro por entrega o hito" }, { cod: "S.01.01.P02", nombre: "Emisión de boleta electrónica (factura: por habilitar)" } ] },
        { cod: "S.01.02", nombre: "Pagos", objetivo: "Pagar especialistas, aliados y gastos.", nivel2: [ { cod: "S.01.02.P01", nombre: "Pago a especialistas y aliados" }, { cod: "S.01.02.P02", nombre: "Pago de publicidad y herramientas" } ] },
        { cod: "S.01.03", nombre: "Control de costos por caso", objetivo: "Conocer el margen de cada caso.", nivel2: [ { cod: "S.01.03.P01", nombre: "Registro en Excel y sistema propio" } ] },
        { cod: "S.01.04", nombre: "Obligaciones tributarias", objetivo: "Cumplir con SUNAT.", nivel2: [ { cod: "S.01.04.P01", nombre: "Declaraciones (contador externo)" } ] }
      ],
      sipoc: [
        { prov: "M.07 Entrega", ent: "Cobros", sub: "S.01.01", prod: "Comprobantes emitidos", cli: "Cliente" },
        { prov: "S.02 Especialistas", ent: "Trabajos realizados", sub: "S.01.02", prod: "Pagos realizados", cli: "Especialistas, aliados" },
        { prov: "M.02 Investigación", ent: "Costos del caso", sub: "S.01.03", prod: "Margen por caso", cli: "E.01, M.01" }
      ],
      requisitos: ["Normas de comprobantes de pago de SUNAT — por validar con el contador", "Régimen tributario de la empresa — por confirmar con el contador"],
      controles: ["Comprobante por cada cobro", "Costo por caso registrado al cierre (*)"],
      recursos: { humanos: ["Henry", "Contador externo"], sistemas: ["Excel", "Sistema propio de costos", "Portal SUNAT"], instalaciones: [], equipos: [] },
      indicadores: ["S.01.I01", "S.01.I02"],
      salidas: [ { a: "E.01", que: "Resultados económicos" }, { a: "M.01", que: "Referencia de precios y costos" } ],
      riesgos: [ { r: "No poder atender empresas que exigen factura", c: "Evaluar con el contador habilitar factura electrónica" } ],
      pendientes: []
    },
    {
      cod: "S.02", tipo: "S", nombre: "Personal y especialistas", dueno: "Henry", estado: "op", doc: "Borrador", version: "0.1",
      objetivo: "Contar con el equipo y los especialistas competentes que cada caso necesita.",
      alcance: "Equipo interno (4 personas) y especialistas externos remunerados.",
      inicio: "Necesidad de un perfil en un caso.", fin: "Especialista pagado y evaluado.",
      situacion: "Henry busca especialistas por contactos o publicidad. No hay criterios escritos de selección ni evaluación.",
      nivel1: [
        { cod: "S.02.01", nombre: "Asignación del equipo interno", objetivo: "Asignar casos a Henry y Teddy.", nivel2: [] },
        { cod: "S.02.02", nombre: "Selección y contratación de especialistas", objetivo: "Elegir con criterios.", nivel2: [ { cod: "S.02.02.P01", nombre: "Requisitos del perfil (*)" }, { cod: "S.02.02.P02", nombre: "Acuerdo de alcance, plazo y pago (*)" } ] },
        { cod: "S.02.03", nombre: "Pago y evaluación de especialistas", objetivo: "Pagar y evaluar.", nivel2: [ { cod: "S.02.03.P01", nombre: "Evaluación al cierre (*)" } ] }
      ],
      sipoc: [ { prov: "M.02 Investigación", ent: "Necesidad de especialista", sub: "S.02.02", prod: "Especialista contratado", cli: "M.02" }, { prov: "M.02", ent: "Trabajo recibido", sub: "S.02.03", prod: "Especialista evaluado", cli: "E.04, S.01" } ],
      requisitos: ["Código Civil peruano (locación de servicios) — por validar"],
      controles: ["Requisitos y revisor definidos antes de contratar (*)"],
      recursos: { humanos: ["Henry"], sistemas: ["Google Drive"], instalaciones: [], equipos: [] },
      indicadores: ["S.02.I01"], salidas: [ { a: "M.02", que: "Especialistas asignados" }, { a: "S.01", que: "Pagos por realizar" } ], riesgos: [], pendientes: []
    },
    {
      cod: "S.03", tipo: "S", nombre: "Documentos y archivos", dueno: "Henry", estado: "op", doc: "Borrador", version: "0.1",
      objetivo: "Conservar los documentos del sistema y los expedientes de cada caso, con versiones y respaldo.",
      alcance: "Documentos del sistema de procesos y archivos de cada caso.",
      inicio: "Creación de un documento o apertura de un caso.", fin: "Documento vigente publicado o expediente cerrado y respaldado.",
      situacion: "Henry administra el Drive y todo el equipo tiene acceso. Los entregables también están en la computadora de Henry y se intercambian por WhatsApp. No hay control de versiones ni respaldo definido.",
      nivel1: [
        { cod: "S.03.01", nombre: "Control de documentos del sistema", objetivo: "Codificación, versiones y estados.", nivel2: [] },
        { cod: "S.03.02", nombre: "Expediente digital por caso", objetivo: "Una carpeta por caso en Drive.", nivel2: [ { cod: "S.03.02.P01", nombre: "Estructura estándar de carpeta (*)" } ] },
        { cod: "S.03.03", nombre: "Respaldo", objetivo: "Evitar pérdidas.", nivel2: [] }
      ],
      sipoc: [ { prov: "M.01, M.02, M.07", ent: "Archivos del caso", sub: "S.03.02", prod: "Expediente completo", cli: "Equipo del caso" }, { prov: "E.02", ent: "Documentos del sistema", sub: "S.03.01", prod: "Documentos vigentes", cli: "Todos" } ],
      requisitos: ["Ley N.° 29733, Protección de Datos Personales — por validar"],
      controles: ["Nombre de archivo con código y versión (*)"],
      recursos: { humanos: ["Henry"], sistemas: ["Google Drive"], instalaciones: [], equipos: [] },
      indicadores: ["S.03.I01"], salidas: [ { a: "M.02", que: "Expediente del caso" } ], riesgos: [], pendientes: []
    },
    {
      cod: "S.04", tipo: "S", nombre: "Legal y contractual", dueno: "Henry", estado: "op", doc: "Borrador", version: "0.1",
      objetivo: "Que cada relación con clientes, especialistas y aliados tenga un acuerdo escrito y que la empresa cumpla sus obligaciones formales.",
      alcance: "Contratos y obligaciones de BLACKBELT GROUP S.A.C. (RUC 20616527704).",
      inicio: "Necesidad de un acuerdo.", fin: "Acuerdo firmado y archivado.",
      situacion: "Existe un contrato general con clientes. Con especialistas y aliados no se han confirmado acuerdos escritos.",
      nivel1: [
        { cod: "S.04.01", nombre: "Contratos con clientes", objetivo: "Mantener el modelo de contrato.", nivel2: [] },
        { cod: "S.04.02", nombre: "Acuerdos con especialistas y aliados", objetivo: "Dejar por escrito alcance y pago.", nivel2: [] },
        { cod: "S.04.03", nombre: "Formalización y cumplimiento", objetivo: "Mantener al día a la empresa ante SUNAT.", nivel2: [] }
      ],
      sipoc: [ { prov: "M.01", ent: "Condiciones acordadas", sub: "S.04.01", prod: "Contrato firmado", cli: "Cliente, M.02" } ],
      requisitos: ["Código Civil peruano — por validar", "Ley General de Sociedades — por validar"],
      controles: ["Contrato firmado antes de iniciar el trabajo (*)"],
      recursos: { humanos: ["Henry", "Asesoría legal externa (por definir)"], sistemas: ["Google Drive"], instalaciones: [], equipos: [] },
      indicadores: ["S.04.I01"], salidas: [ { a: "M.01", que: "Modelo de contrato" } ], riesgos: [], pendientes: ["Copia del contrato general."]
    },
    {
      cod: "S.05", tipo: "S", nombre: "Tecnología y herramientas", dueno: "Por definir", estado: "op", doc: "Borrador", version: "0.1",
      objetivo: "Mantener operativas las herramientas digitales de la empresa.",
      alcance: "Sistema propio de costos, Drive, web corporativa y este portafolio.",
      inicio: "Necesidad o falla de una herramienta.", fin: "Herramienta operativa.",
      situacion: "Se usan un sistema propio (control de costos), Google Drive, WhatsApp y la web en GitHub Pages.",
      nivel1: [
        { cod: "S.05.01", nombre: "Sistema propio de costos", objetivo: "Mantenerlo operativo.", nivel2: [] },
        { cod: "S.05.02", nombre: "Drive y herramientas de trabajo", objetivo: "Accesos y orden.", nivel2: [] },
        { cod: "S.05.03", nombre: "Web corporativa y portafolio de procesos", objetivo: "Publicar y actualizar.", nivel2: [] }
      ],
      sipoc: [ { prov: "Todos los procesos", ent: "Requerimientos", sub: "S.05.01 – S.05.03", prod: "Herramientas operativas", cli: "Todos" } ],
      requisitos: [], controles: [],
      recursos: { humanos: ["Por definir"], sistemas: ["GitHub Pages", "Google Drive", "Sistema propio"], instalaciones: [], equipos: [] },
      indicadores: ["S.05.I01"], salidas: [ { a: "S.01", que: "Sistema de costos" }, { a: "S.03", que: "Drive" } ], riesgos: [], pendientes: ["Responsable de las herramientas."]
    }
  ],

  /* ======================= INDICADORES =======================
     meta: null = se fija con Henry tras 2-3 meses de línea base.
     Para fijarla: meta: { rojo: "< 40 %", amarillo: "40 % a 60 %", verde: "> 60 %" } */
  indicadores: [
    { cod: "E.01.I01", proceso: "E.01", nombre: "Cumplimiento de objetivos", finalidad: "Saber cuánto de lo planificado se logra.", formula: "Objetivos cumplidos ÷ objetivos planificados × 100", responsable: "Henry", tipo: "Eficacia", unidad: "%", fuente: "Plan anual y actas de revisión", frecuencia: "Trimestral", meta: null },
    { cod: "E.02.I01", proceso: "E.02", nombre: "Procesos estandarizados aprobados", finalidad: "Medir el avance de la estandarización.", formula: "Procesos con documentación aprobada por Henry ÷ 17 procesos del mapa × 100", responsable: "Johann", tipo: "Eficacia", unidad: "%", fuente: "Portafolio de procesos", frecuencia: "Mensual", meta: null },
    { cod: "E.02.I02", proceso: "E.02", nombre: "Aplicación de documentos en piloto", finalidad: "Comprobar que los documentos se usan.", formula: "Registros llenados en los casos piloto ÷ registros exigidos × 100", responsable: "Johann", tipo: "Eficacia", unidad: "%", fuente: "Expedientes de casos piloto", frecuencia: "Por piloto", meta: null },
    { cod: "E.03.I01", proceso: "E.03", nombre: "Contactos por canal", finalidad: "Saber qué canal trae clientes.", formula: "N.° de contactos nuevos por canal (referido, redes, Facebook Ads)", responsable: "Jeferson", tipo: "Eficacia", unidad: "N.°", fuente: "FO-M01-01 Registro de contactos", frecuencia: "Mensual", meta: null },
    { cod: "E.03.I02", proceso: "E.03", nombre: "Costo de captación por Ads", finalidad: "Saber cuánto cuesta un cliente que llega por Ads.", formula: "Inversión en Facebook Ads ÷ contratos con origen Ads", responsable: "Jeferson y Henry", tipo: "Eficiencia", unidad: "S/ por cliente", fuente: "FO-M01-01 y gasto en Ads", frecuencia: "Mensual", meta: null },
    { cod: "E.04.I01", proceso: "E.04", nombre: "Conformidad de trabajos con aliados", finalidad: "Medir la calidad del trabajo conjunto.", formula: "Trabajos con aliado entregados conformes ÷ trabajos con aliado × 100", responsable: "Henry", tipo: "Calidad", unidad: "%", fuente: "Evaluación de aliados", frecuencia: "Semestral", meta: null },
    { cod: "M.01.I01", proceso: "M.01", clave: true, nombre: "Tasa de conversión", finalidad: "Saber cuántas reuniones terminan en contrato.", formula: "Contratos firmados ÷ reuniones Meet realizadas × 100", responsable: "Henry", tipo: "Eficacia", unidad: "%", fuente: "FO-M01-01 Registro de contactos", frecuencia: "Mensual", meta: null },
    { cod: "M.01.I02", proceso: "M.01", nombre: "Tiempo de cierre", finalidad: "Medir la rapidez comercial.", formula: "Promedio de días entre el primer contacto y la firma del contrato", responsable: "Henry", tipo: "Eficiencia", unidad: "días", fuente: "FO-M01-01", frecuencia: "Mensual", meta: null, nota: "Referencia actual declarada: 1 a 3 días." },
    { cod: "M.01.I03", proceso: "M.01", nombre: "Casos con propuesta escrita", finalidad: "Comprobar que lo acordado queda por escrito.", formula: "Casos con propuesta aceptada por escrito ÷ contratos firmados × 100", responsable: "Johann (verificación)", tipo: "Calidad", unidad: "%", fuente: "FO-M01-03 y expedientes", frecuencia: "Mensual", meta: null },
    { cod: "M.01.I04", proceso: "M.01", nombre: "Precio promedio por caso", finalidad: "Seguir el ingreso medio por caso.", formula: "Suma de precios contratados ÷ contratos firmados", responsable: "Henry", tipo: "Eficiencia", unidad: "S/", fuente: "FO-M01-01", frecuencia: "Mensual", meta: null, nota: "Referencia declarada: investigación completa cerca de S/ 3,000." },
    { cod: "M.02.I01", proceso: "M.02", clave: true, nombre: "Aceptación en primera entrega", finalidad: "Medir la calidad del entregable a la primera.", formula: "Entregas aceptadas sin observaciones ÷ entregas realizadas × 100", responsable: "Henry", tipo: "Calidad", unidad: "%", fuente: "FO-M02-02 Control de entregas y revisiones", frecuencia: "Mensual", meta: null },
    { cod: "M.02.I02", proceso: "M.02", nombre: "Rondas de corrección por caso", finalidad: "Medir el retrabajo.", formula: "Total de rondas de corrección ÷ casos cerrados", responsable: "Henry", tipo: "Eficiencia", unidad: "rondas", fuente: "FO-M02-02", frecuencia: "Mensual", meta: null },
    { cod: "M.02.I03", proceso: "M.02", nombre: "Entregas a tiempo", finalidad: "Medir el cumplimiento de plazos.", formula: "Entregas en la fecha pactada ÷ entregas realizadas × 100", responsable: "Henry", tipo: "Eficacia", unidad: "%", fuente: "FO-M02-01 y FO-M02-02", frecuencia: "Mensual", meta: null },
    { cod: "M.02.I04", proceso: "M.02", nombre: "Entregables técnicos con revisor competente", finalidad: "Asegurar la revisión técnica.", formula: "Entregables técnicos revisados por especialista competente ÷ entregables técnicos × 100", responsable: "Henry", tipo: "Calidad", unidad: "%", fuente: "FO-M02-02", frecuencia: "Mensual", meta: null },
    { cod: "M.03.I01", proceso: "M.03", nombre: "Proyectos entregados a tiempo", finalidad: "Medir cumplimiento.", formula: "Proyectos entregados en la fecha pactada ÷ proyectos entregados × 100", responsable: "Por definir", tipo: "Eficacia", unidad: "%", fuente: "Por definir", frecuencia: "Por proyecto", meta: null },
    { cod: "M.04.I01", proceso: "M.04", nombre: "Avance de ZIGO según plan", finalidad: "Seguir el desarrollo del producto.", formula: "Hitos cumplidos ÷ hitos planificados a la fecha × 100", responsable: "Por definir", tipo: "Eficacia", unidad: "%", fuente: "Plan de hitos con el tercero", frecuencia: "Mensual", meta: null },
    { cod: "M.05.I01", proceso: "M.05", nombre: "Proyectos de aliados apoyados", finalidad: "Medir la actividad de la unidad.", formula: "N.° de proyectos de aliados con participación de BLACKBELT en el periodo", responsable: "Henry", tipo: "Eficacia", unidad: "N.°", fuente: "Registro de proyectos", frecuencia: "Trimestral", meta: null },
    { cod: "M.06.I01", proceso: "M.06", nombre: "Clientes que culminan el acompañamiento", finalidad: "Medir la retención.", formula: "Clientes que terminan el servicio ÷ clientes que lo iniciaron × 100", responsable: "Por definir", tipo: "Eficacia", unidad: "%", fuente: "Por definir", frecuencia: "Trimestral", meta: null },
    { cod: "M.07.I01", proceso: "M.07", clave: true, nombre: "Satisfacción del cliente", finalidad: "Conocer la opinión del cliente.", formula: "Promedio del puntaje de las encuestas (intermedia y final) de los casos del periodo", responsable: "Johann", tipo: "Calidad", unidad: "puntos (1 a 5)", fuente: "Google Forms", frecuencia: "Mensual", meta: null },
    { cod: "M.07.I02", proceso: "M.07", nombre: "Tasa de respuesta de encuestas", finalidad: "Atacar el problema de clientes que no responden.", formula: "Encuestas respondidas ÷ encuestas enviadas × 100 (intermedia y final por separado)", responsable: "Johann", tipo: "Eficacia", unidad: "%", fuente: "Google Forms y FO-M02-02", frecuencia: "Mensual", meta: null, nota: "Problema declarado: casi nadie responde la encuesta final." },
    { cod: "M.07.I03", proceso: "M.07", nombre: "Casos cerrados con conformidad registrada", finalidad: "Asegurar evidencia de cierre.", formula: "Casos con conformidad registrada ÷ casos cerrados × 100", responsable: "Henry", tipo: "Calidad", unidad: "%", fuente: "FO-M07-01", frecuencia: "Mensual", meta: null },
    { cod: "M.08.I01", proceso: "M.08", nombre: "Inscritos y satisfacción por programa", finalidad: "Medir la demanda y calidad de los programas.", formula: "N.° de inscritos por programa; promedio de la evaluación del participante", responsable: "Jair", tipo: "Eficacia", unidad: "N.° y puntos", fuente: "Por definir", frecuencia: "Por programa", meta: null },
    { cod: "S.01.I01", proceso: "S.01", nombre: "Margen por caso", finalidad: "Saber si cada caso es rentable.", formula: "(Ingreso del caso − costos directos) ÷ ingreso del caso × 100", responsable: "Henry", tipo: "Eficiencia", unidad: "%", fuente: "Excel y sistema propio de costos", frecuencia: "Por caso / mensual", meta: null },
    { cod: "S.01.I02", proceso: "S.01", nombre: "Cobranza a tiempo", finalidad: "Evitar trabajo no cobrado.", formula: "Hitos cobrados en la fecha pactada ÷ hitos vencidos × 100", responsable: "Henry", tipo: "Eficacia", unidad: "%", fuente: "Sistema propio de costos", frecuencia: "Mensual", meta: null },
    { cod: "S.02.I01", proceso: "S.02", nombre: "Especialistas con requisitos y revisión registrados", finalidad: "Asegurar criterio en la tercerización.", formula: "Casos con especialista que tienen requisitos y revisión registrados ÷ casos con especialista × 100", responsable: "Henry", tipo: "Calidad", unidad: "%", fuente: "Expediente del caso", frecuencia: "Mensual", meta: null },
    { cod: "S.03.I01", proceso: "S.03", nombre: "Expedientes completos", finalidad: "Evitar pérdida de información.", formula: "Casos con expediente completo y versionado en Drive ÷ casos activos × 100", responsable: "Johann (verificación)", tipo: "Calidad", unidad: "%", fuente: "Google Drive", frecuencia: "Mensual", meta: null },
    { cod: "S.04.I01", proceso: "S.04", nombre: "Casos con contrato antes de iniciar", finalidad: "Proteger a la empresa y al cliente.", formula: "Casos iniciados con contrato firmado ÷ casos iniciados × 100", responsable: "Henry", tipo: "Eficacia", unidad: "%", fuente: "Expedientes", frecuencia: "Mensual", meta: null },
    { cod: "S.05.I01", proceso: "S.05", nombre: "Incidencias que afectan entregas", finalidad: "Detectar fallas de herramientas.", formula: "N.° de incidencias de herramientas que retrasaron una entrega", responsable: "Por definir", tipo: "Eficacia", unidad: "N.°", fuente: "Registro de incidencias", frecuencia: "Mensual", meta: null }
  ],

  /* Catálogo de servicios de M.02 (Johann enviará la lista definitiva) */
  servicios: [
    { nombre: "Investigación completa", desc: "Desarrollo de toda la investigación, desde el planteamiento hasta los resultados y el formato final.", subprocesos: ["M.02.01", "M.02.02", "M.02.03", "M.02.04", "M.02.05"], precio: "Referencia declarada: cerca de S/ 3,000", estado: "Confirmado" },
    { nombre: "Investigación por partes", desc: "Desarrollo de capítulos o secciones específicas.", subprocesos: ["M.02.01", "M.02.04", "M.02.05"], precio: "Por definir", estado: "Por confirmar" },
    { nombre: "Asesoría", desc: "Orientación metodológica y acompañamiento al investigador.", subprocesos: ["M.02.01", "M.02.03"], precio: "Por definir", estado: "Por confirmar" },
    { nombre: "Corrección", desc: "Corrección de observaciones, redacción o formato.", subprocesos: ["M.02.04", "M.02.05"], precio: "Por definir", estado: "Por confirmar" }
  ],
  serviciosBrochure: ["Investigación aplicada", "Estudios y análisis técnicos", "Desarrollo experimental", "Prototipos y validación de soluciones", "Análisis e interpretación de datos", "Asesoría en trabajos de investigación"],

  /* Documentos y formatos */
  documentos: [
    { cod: "DO-E02-01", nombre: "Mapa de procesos nivel 0", proceso: "E.02", tipo: "Documento", estado: "Validado", existe: true },
    { cod: "FC-M01", nombre: "Ficha técnica M.01 Gestión comercial", proceso: "M.01", tipo: "Ficha", estado: "Borrador", existe: true },
    { cod: "FC-M02", nombre: "Ficha técnica M.02 Investigación y Desarrollo", proceso: "M.02", tipo: "Ficha", estado: "Borrador", existe: true },
    { cod: "FC-M07", nombre: "Ficha técnica M.07 Entrega, cierre y satisfacción", proceso: "M.07", tipo: "Ficha", estado: "Borrador", existe: true },
    { cod: "FO-M01-01", nombre: "Registro de contactos", proceso: "M.01", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-M01-02", nombre: "Ficha de diagnóstico del caso", proceso: "M.01", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-M01-03", nombre: "Propuesta de servicio", proceso: "M.01", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "CT-S04-01", nombre: "Contrato general con clientes", proceso: "S.04", tipo: "Contrato", estado: "Existe, por revisar", existe: true },
    { cod: "FO-M02-01", nombre: "Plan del caso", proceso: "M.02", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-M02-02", nombre: "Control de entregas y revisiones", proceso: "M.02", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-M02-03", nombre: "Registro de búsqueda de información", proceso: "M.02", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-M07-01", nombre: "Conformidad de servicio", proceso: "M.07", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-M07-02", nombre: "Encuesta intermedia de satisfacción", proceso: "M.07", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-M07-03", nombre: "Encuesta final de satisfacción (Google Forms)", proceso: "M.07", tipo: "Formato", estado: "Existe, por revisar", existe: true }
  ],

  /* Plan de trabajo por fases */
  fases: [
    { n: 0, nombre: "Base", procesos: [], estado: "Hecha", detalle: "Contexto, mapa nivel 0 validado por Henry, inventario e indicadores en borrador." },
    { n: 1, nombre: "Cadena de investigación", procesos: ["M.01", "M.02", "M.07"], estado: "En curso", detalle: "Fichas, formatos mínimos y piloto con 1 o 2 casos reales." },
    { n: 2, nombre: "Soporte", procesos: ["S.01", "S.02", "S.03", "S.04", "S.05"], estado: "Pendiente", detalle: "Finanzas, especialistas, archivos, contrato y herramientas." },
    { n: 3, nombre: "Estratégicos", procesos: ["E.01", "E.02", "E.03", "E.04"], estado: "Pendiente", detalle: "Revisión mensual, mejora continua, marketing y alianzas." },
    { n: 4, nombre: "Nuevas líneas", procesos: ["M.08", "M.06", "M.05", "M.04", "M.03"], estado: "Pendiente", detalle: "Cada una cuando empiece a operar; Institute primero." },
    { n: 5, nombre: "Indicadores", procesos: [], estado: "Pendiente", detalle: "Línea base de 2–3 meses, metas con Henry y revisión mensual." }
  ],

  cambios: [
    { version: "0.1", fecha: "21/11/2026", cambio: "Mapa general, inventario e indicadores candidatos.", estado: "Borrador" },
    { version: "0.2", fecha: "21/11/2026", cambio: "Datos de SUNAT, BLACKBELT Institute (M.08), ficha M.01.", estado: "Mapa validado por Henry" },
    { version: "0.3", fecha: "22/11/2026", cambio: "Portafolio web con modelo UNHEVAL: niveles 0-1-2, fichas técnicas, fichas de indicador, interrelación y documentos.", estado: "Borrador" }
  ]
};
