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
    version: "0.9",
    fecha: "22/11/2026",
    elaboro: "Johann Herrera (Mejora Continua)",
    aprueba: "Henry (Gerencia General)",
    estadoMapa: "Validado",
    nota: "El mapa de procesos nivel 0 fue validado por Henry. Fichas, subprocesos, diagramas e indicadores están en borrador; lo marcado como simulado es un supuesto por validar."
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
      cod: "E.01",
      tipo: "E",
      nombre: "Dirección y planeamiento",
      dueno: "Henry",
      estado: "op",
      doc: "Borrador",
      version: "0.2",
      simulado: true,
      objetivo: "Fijar los objetivos y metas de BLACKBELT, revisarlos cada mes junto con Calidad y decidir acciones con base en los indicadores.",
      alcance: "Planeamiento anual, reunión mensual de calidad y planeamiento, y seguimiento de acuerdos.",
      inicio: "Inicio del año o del periodo.",
      fin: "Objetivos evaluados al cierre del año y acuerdos cumplidos.",
      situacion: "Henry dirige y aprueba todo. El objetivo actual es la mejora continua mediante estandarización y KPIs. No hay plan anual escrito ni reuniones periódicas formales. El flujo siguiente es una simulación para validar.",
      nivel1: [{"cod": "E.01.01", "nombre": "Planeamiento anual", "dueno": "Henry", "objetivo": "Definir objetivos, metas y prioridades del año.", "entradas": ["Resultados del año anterior", "Propuestas de Calidad y del equipo"], "salidas": ["Objetivos y metas anuales"], "registros": ["FO-E01-02 Plan anual (sim)"], "nivel2": [{"cod": "E.01.01.P01", "nombre": "Análisis de resultados e indicadores del año (sim)"}, {"cod": "E.01.01.P02", "nombre": "Definición de objetivos y metas por proceso (sim)"}, {"cod": "E.01.01.P03", "nombre": "Plan de acción con responsables y fechas (sim)"}]}, {"cod": "E.01.02", "nombre": "Reunión mensual de calidad y planeamiento", "dueno": "Henry (convoca Johann)", "objetivo": "Revisar indicadores, aprobar propuestas de mejora y documentos.", "entradas": ["Tablero de indicadores (E.02.05)", "Propuestas de mejora", "Documentos para aprobar"], "salidas": ["Acta con acuerdos, responsables y fechas"], "registros": ["FO-E01-01 Acta de reunión (sim)"], "nivel2": [{"cod": "E.01.02.P01", "nombre": "Convocatoria y agenda (Johann, primera semana del mes) (sim)"}, {"cod": "E.01.02.P02", "nombre": "Revisión del tablero de indicadores en semáforo (sim)"}, {"cod": "E.01.02.P03", "nombre": "Revisión de no conformidades, reclamos y encuestas (sim)"}, {"cod": "E.01.02.P04", "nombre": "Propuestas de mejora del equipo y decisión de Henry (sim)"}, {"cod": "E.01.02.P05", "nombre": "Aprobación de fichas y documentos (sim)"}, {"cod": "E.01.02.P06", "nombre": "Acta con acuerdos, responsables y fechas (sim)"}]}, {"cod": "E.01.03", "nombre": "Seguimiento de acuerdos", "dueno": "Johann", "objetivo": "Asegurar que los acuerdos se cumplan.", "entradas": ["Acta de la reunión mensual"], "salidas": ["Estado de acuerdos"], "registros": ["FO-E01-01 Acta (columna de estado) (sim)"], "nivel2": [{"cod": "E.01.03.P01", "nombre": "Reunión quincenal breve Henry–Johann (15 min) (sim)"}, {"cod": "E.01.03.P02", "nombre": "Actualización del estado de cada acuerdo (sim)"}]}],
      sipoc: [{"prov": "E.02 Calidad", "ent": "Tablero de indicadores y propuestas", "sub": "E.01.02", "prod": "Acta con acuerdos", "cli": "Todos los procesos"}, {"prov": "S.01 Finanzas", "ent": "Ingresos, egresos y margen", "sub": "E.01.01", "prod": "Objetivos y metas del año", "cli": "Todos los procesos"}, {"prov": "E.02 Calidad", "ent": "Fichas y documentos en borrador", "sub": "E.01.02", "prod": "Documentos aprobados", "cli": "E.02, S.03"}, {"prov": "E.01.02", "ent": "Acuerdos", "sub": "E.01.03", "prod": "Acuerdos cumplidos", "cli": "E.02"}],
      requisitos: ["Ley General de Sociedades, Ley N.° 26887 — por validar"],
      controles: ["Reunión mensual con acta (sim)", "Toda aprobación de documentos queda en el acta y en el control de cambios", "Seguimiento quincenal de acuerdos (sim)"],
      recursos: {"humanos": ["Henry", "Johann (Calidad)", "Teddy y Jeferson (participan)"], "sistemas": ["Google Meet", "Portafolio de procesos", "Google Drive"], "instalaciones": ["Virtual"], "equipos": ["Computadoras"]},
      indicadores: ["E.01.I01", "E.01.I02", "E.01.I03"],
      salidas: [{"a": "E.02", "que": "Acuerdos y prioridades de mejora"}, {"a": "E.03", "que": "Metas de captación"}, {"a": "E.04", "que": "Decisión sobre alianzas"}, {"a": "S.01", "que": "Presupuesto aprobado"}],
      riesgos: [{"r": "Dependencia de Henry en todas las decisiones", "c": "Criterios escritos en cada ficha y decisiones registradas en acta (sim)"}, {"r": "Reuniones que no generan acciones", "c": "Todo acuerdo con responsable y fecha, revisado cada 15 días (sim)"}],
      pendientes: ["Validar con Henry la frecuencia y participantes de la reunión.", "Metas anuales del periodo."]
    },
    {
      cod: "E.02",
      tipo: "E",
      nombre: "Calidad y mejora continua",
      dueno: "Johann",
      estado: "ini",
      doc: "Borrador",
      version: "0.2",
      simulado: true,
      objetivo: "Asegurar que los procesos aprobados se cumplan, medir sus resultados, atender la voz del cliente y corregir y mejorar de forma continua.",
      alcance: "Todos los procesos aprobados. El levantamiento de procesos nuevos es parte de la mejora continua (E.02.06).",
      inicio: "Inicio de cada mes.",
      fin: "Tablero actualizado, acciones verificadas y documentos al día.",
      situacion: "En inicio: hoy Calidad está levantando y documentando los procesos. Cuando las fichas estén aprobadas, se dedicará a lo que describe esta ficha. Flujo simulado para validar.",
      nivel1: [{"cod": "E.02.01", "nombre": "Control de documentos y registros", "dueno": "Johann", "objetivo": "Que solo se usen documentos vigentes y que cada caso tenga sus registros.", "entradas": ["Documentos nuevos o modificados"], "salidas": ["Documentos aprobados y publicados"], "registros": ["Control de cambios del portafolio"], "nivel2": [{"cod": "E.02.01.P01", "nombre": "Codificar y versionar el documento"}, {"cod": "E.02.01.P02", "nombre": "Aprobación de Henry en la reunión mensual (sim)"}, {"cod": "E.02.01.P03", "nombre": "Publicar en el portafolio y retirar la versión obsoleta"}, {"cod": "E.02.01.P04", "nombre": "Comunicar el cambio al equipo (sim)"}]}, {"cod": "E.02.02", "nombre": "Aseguramiento de calidad del servicio", "dueno": "Johann", "objetivo": "Comprobar por muestreo que cada avance liberado cumplió los controles.", "entradas": ["Expedientes de casos activos y cerrados"], "salidas": ["Resultado de la verificación"], "registros": ["FO-E02-01 Lista de verificación de avances (sim)"], "nivel2": [{"cod": "E.02.02.P01", "nombre": "Seleccionar 2 avances por mes (o todos si hay pocos) (sim)"}, {"cod": "E.02.02.P02", "nombre": "Verificar revisión técnica, reportes Turnitin y JustDone, fuentes verificables y formato (sim)"}, {"cod": "E.02.02.P03", "nombre": "Verificar contrato, cronograma y registros del expediente (sim)"}, {"cod": "E.02.02.P04", "nombre": "Registrar hallazgos como no conformidad si corresponde (sim)"}]}, {"cod": "E.02.03", "nombre": "Satisfacción y reclamos", "dueno": "Johann", "objetivo": "Escuchar al cliente y atender sus quejas.", "entradas": ["Encuestas intermedia y final", "Quejas por WhatsApp o reclamo formal"], "salidas": ["Índice de satisfacción", "Reclamos atendidos"], "registros": ["Google Forms", "FO-E02-03 Registro de reclamos (sim)"], "nivel2": [{"cod": "E.02.03.P01", "nombre": "Envío y recordatorio de encuestas (M.07.03)"}, {"cod": "E.02.03.P02", "nombre": "Seguimiento de puntajes bajos con Henry (sim)"}, {"cod": "E.02.03.P03", "nombre": "Registro y respuesta de reclamos en el plazo acordado (sim)"}, {"cod": "E.02.03.P04", "nombre": "Verificar con el asesor si corresponde Libro de Reclamaciones virtual (sim)"}]}, {"cod": "E.02.04", "nombre": "No conformidades y acciones correctivas", "dueno": "Johann", "objetivo": "Corregir fallas atacando su causa.", "entradas": ["Hallazgos del muestreo", "Reclamos", "Indicadores en rojo"], "salidas": ["Acciones correctivas verificadas"], "registros": ["FO-E02-02 Registro de no conformidades y acciones (sim)"], "nivel2": [{"cod": "E.02.04.P01", "nombre": "Registrar la no conformidad (sim)"}, {"cod": "E.02.04.P02", "nombre": "Analizar causa con el responsable (5 porqués) (sim)"}, {"cod": "E.02.04.P03", "nombre": "Definir acción, responsable y fecha; aprueba Henry (sim)"}, {"cod": "E.02.04.P04", "nombre": "Verificar eficacia y cerrar (sim)"}]}, {"cod": "E.02.05", "nombre": "Medición y tablero de indicadores", "dueno": "Johann", "objetivo": "Llevar a la reunión mensual los indicadores con semáforo.", "entradas": ["Registros de cada proceso"], "salidas": ["Tablero mensual", "Propuestas de mejora"], "registros": ["Tablero de indicadores (sim)"], "nivel2": [{"cod": "E.02.05.P01", "nombre": "Recolectar datos de los registros (últimos días del mes) (sim)"}, {"cod": "E.02.05.P02", "nombre": "Calcular indicadores y semáforo (sim)"}, {"cod": "E.02.05.P03", "nombre": "Analizar tendencias y preparar propuestas (sim)"}, {"cod": "E.02.05.P04", "nombre": "Presentar en la reunión mensual de calidad y planeamiento (E.01.02)"}]}, {"cod": "E.02.06", "nombre": "Mejora continua", "dueno": "Johann", "objetivo": "Mejorar los procesos con el ciclo planificar-hacer-verificar-actuar.", "entradas": ["Acuerdos de la reunión mensual", "Lecciones aprendidas"], "salidas": ["Procesos y documentos mejorados"], "registros": ["FO-E02-04 Registro de lecciones aprendidas (sim)"], "nivel2": [{"cod": "E.02.06.P01", "nombre": "Recoger lecciones aprendidas al cierre de cada caso (sim)"}, {"cod": "E.02.06.P02", "nombre": "Proponer proyectos de mejora (PDCA) (sim)"}, {"cod": "E.02.06.P03", "nombre": "Pilotear el cambio en un caso real (sim)"}, {"cod": "E.02.06.P04", "nombre": "Levantar y documentar procesos nuevos (líneas que inician)"}]}],
      sipoc: [{"prov": "Todos los procesos", "ent": "Registros y expedientes", "sub": "E.02.02", "prod": "Hallazgos y verificación", "cli": "Responsables de proceso"}, {"prov": "Clientes", "ent": "Encuestas y reclamos", "sub": "E.02.03", "prod": "Índice de satisfacción, reclamos atendidos", "cli": "E.01, M.07"}, {"prov": "E.02.02, E.02.03", "ent": "No conformidades", "sub": "E.02.04", "prod": "Acciones correctivas cerradas", "cli": "Procesos involucrados"}, {"prov": "Registros de cada proceso", "ent": "Datos", "sub": "E.02.05", "prod": "Tablero mensual y propuestas", "cli": "E.01 (reunión mensual)"}, {"prov": "E.01", "ent": "Acuerdos aprobados", "sub": "E.02.01, E.02.06", "prod": "Documentos y procesos actualizados", "cli": "Todos"}],
      requisitos: ["Referencia metodológica: gestión por procesos (PCM) y modelo UNHEVAL V.0.6; ISO 9001 como referencia, sin certificación", "Ley N.° 29571 y su reglamento (Libro de Reclamaciones) — por validar con el asesor"],
      controles: ["Muestreo mensual de avances con lista de verificación (sim)", "Toda no conformidad con causa, acción, responsable y fecha (sim)", "Ningún documento se publica sin aprobación de Henry", "Tablero presentado cada mes en la reunión de calidad y planeamiento (sim)"],
      recursos: {"humanos": ["Johann (Calidad)", "Henry (aprueba)", "Responsables de cada proceso"], "sistemas": ["Portafolio de procesos", "Google Forms", "Google Drive", "Google Sheets (registros) (sim)"], "instalaciones": ["Virtual"], "equipos": ["Computadora"]},
      indicadores: ["E.02.I01", "E.02.I02", "E.02.I03", "E.02.I04", "E.02.I05"],
      salidas: [{"a": "E.01", "que": "Tablero de indicadores y propuestas de mejora"}, {"a": "S.03", "que": "Documentos controlados"}, {"a": "M.01", "que": "Acciones correctivas"}, {"a": "M.02", "que": "Hallazgos del muestreo"}, {"a": "M.07", "que": "Resultados de satisfacción"}],
      riesgos: [{"r": "Producir documentos que nadie usa", "c": "Medir la aplicación (E.02.I02) y el muestreo mensual"}, {"r": "Calidad vista como control y no como apoyo", "c": "Hallazgos con propuesta de solución y aprobación de Henry (sim)"}],
      pendientes: ["Validar con Henry el tamaño del muestreo y la fecha de la reunión mensual."]
    },
    {
      cod: "E.03", simulado: true, tipo: "E", nombre: "Marca y marketing", dueno: "Jeferson", estado: "op", doc: "Borrador", version: "0.1",
      objetivo: "Atraer clientes potenciales a BLACKBELT y a BLACKBELT Institute con una marca coherente y canales medidos.",
      alcance: "Desde la planificación de contenidos y campañas hasta la entrega del contacto a M.01 (o a M.08 en el Institute).",
      inicio: "Plan de contenidos o campaña.", fin: "Contacto entregado a gestión comercial.",
      situacion: "Los clientes llegan por Facebook, WhatsApp e Instagram (según dónde se pauta) y por referidos; TikTok no trae clientes porque no se promociona para ventas. Hay campañas de Facebook Ads. BLACKBELT es solo virtual; el Institute hará marketing presencial y virtual. No se mide el origen de cada cliente.",
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
      cod: "E.04", simulado: true, tipo: "E", nombre: "Gestión de alianzas", dueno: "Henry", estado: "op", doc: "Borrador", version: "0.1",
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
      recursos: { humanos: ["Henry", "Teddy (consigue aliados para ciertos proyectos)"], sistemas: ["Google Drive"], instalaciones: ["Virtual"], equipos: ["Computadora"] },
      indicadores: ["E.04.I01"],
      salidas: [ { a: "M.05", que: "Proyectos de aliados para apoyar" }, { a: "S.02", que: "Especialistas disponibles" } ],
      riesgos: [ { r: "Responsabilidad ante el cliente por un trabajo del aliado", c: "Revisión técnica competente antes de entregar (M.02.05)" } ],
      pendientes: ["Alcance contractual con cada aliado."]
    },

    /* ======================= MISIONALES ======================= */
    {
      cod: "M.01", tipo: "M", nombre: "Gestión comercial y de acuerdos", dueno: "Henry", estado: "op", doc: "Borrador", version: "0.3", prioridad: true,
      objetivo: "Convertir a un cliente interesado en un caso con servicio, cotización, cronograma y condiciones acordados por escrito antes de iniciar el trabajo.",
      alcance: "Hoy solo el servicio de investigación (M.02). Se aplicará a las demás unidades cuando operen.",
      inicio: "El cliente potencial escribe por Facebook, WhatsApp o Instagram (según dónde se pautó) o llega referido.", fin: "Contrato firmado en PDF y grupo de WhatsApp del caso creado; el caso pasa a M.02.",
      situacion: "Confirmado por Henry (24/11/2026): los clientes llegan sobre todo por Facebook, WhatsApp e Instagram, según dónde se pauta; TikTok no trae clientes porque no se promociona para ventas. Un mensaje automático da la primera respuesta y luego Henry responde en menos de 3 minutos. Antes del Meet se piden nombre, carrera, universidad, nivel (pregrado o posgrado) e investigación; en el Meet se precisa la problemática (por ejemplo, investigación rechazada o con mucho %IA). Casi todos los casos se cierran por Meet; solo uno se cerró por WhatsApp. No se rechazan casos: siempre se ofrece una solución y el cliente decide. El contrato, firmado en PDF, incluye la cotización y el cronograma. Henry crea el grupo de WhatsApp. Hubo un caso sin contrato, que Henry reconoce como error. La conversión no se mide.",
      nivel1: [
        { cod: "M.01.01", nombre: "Captación y primera respuesta", dueno: "Henry", objetivo: "Responder rápido y registrar cada contacto con su canal de origen.",
          entradas: ["Mensaje del cliente por Facebook, WhatsApp o Instagram", "Referidos"], salidas: ["Contacto atendido y registrado con canal de origen"], registros: ["Mensaje automático de bienvenida (existe)", "FO-M01-01 Registro de contactos (*)"],
          nivel2: [ { cod: "M.01.01.P01", nombre: "Respuesta automática de bienvenida" }, { cod: "M.01.01.P02", nombre: "Respuesta de Henry en menos de 3 minutos" }, { cod: "M.01.01.P03", nombre: "Datos previos: nombre, carrera, universidad, pregrado o posgrado e investigación" }, { cod: "M.01.01.P04", nombre: "Registro del contacto y su canal (*)" } ] },
        { cod: "M.01.02", nombre: "Diagnóstico en Meet y viabilidad", dueno: "Henry", objetivo: "Entender la problemática y comprobar que lo que se promete se puede cumplir.",
          entradas: ["Datos previos del cliente", "Problemática: investigación rechazada, observaciones, alto %IA o %SIM, falta de avance"], salidas: ["Solución propuesta al cliente", "Alcance que se puede cumplir"], registros: ["FO-M01-02 Ficha de diagnóstico (*)"],
          nivel2: [ { cod: "M.01.02.P01", nombre: "Reunión Meet de diagnóstico de la problemática" }, { cod: "M.01.02.P02", nombre: "Verificación de viabilidad antes de prometer cantidades o resultados (búsqueda preliminar si se piden antecedentes) (*)" }, { cod: "M.01.02.P03", nombre: "Propuesta de solución y servicio del catálogo (SV-01 a SV-05)" } ] },
        { cod: "M.01.03", nombre: "Contrato y apertura del caso", dueno: "Henry", objetivo: "Dejar por escrito lo acordado y abrir el caso.",
          entradas: ["Solución aceptada por el cliente", "Lista de precios (DO-M01-01)"], salidas: ["Contrato firmado en PDF con cotización y cronograma", "Grupo de WhatsApp y carpeta del caso"], registros: ["CT-S04-01 Contrato general (existe)", "FO-M01-03 Anexo de condiciones (*)"],
          nivel2: [ { cod: "M.01.03.P01", nombre: "Contrato con cotización y cronograma (el precio oferta lo autoriza Henry)" }, { cod: "M.01.03.P02", nombre: "Anexo con partes, rondas de corrección y tratamiento de cambios (*)" }, { cod: "M.01.03.P03", nombre: "Firma del contrato en PDF" }, { cod: "M.01.03.P04", nombre: "Creación del grupo de WhatsApp (Henry) y de la carpeta en Drive (*)" } ] }
      ],
      sipoc: [
        { prov: "E.03 Marca y marketing / referidos", ent: "Mensaje del cliente por Facebook, WhatsApp o Instagram", sub: "M.01.01", prod: "Contacto atendido con datos previos y canal", cli: "E.03 (medición)" },
        { prov: "Cliente", ent: "Problemática de su investigación", sub: "M.01.02", prod: "Solución y servicio propuestos", cli: "Cliente" },
        { prov: "S.04 Legal / lista de precios", ent: "Modelo de contrato y precios", sub: "M.01.03", prod: "Contrato firmado con cotización y cronograma", cli: "Cliente, M.02, S.01" },
        { prov: "Henry", ent: "Contrato firmado", sub: "M.01.03", prod: "Grupo de WhatsApp y carpeta del caso", cli: "M.02, S.03" }
      ],
      requisitos: ["Código Civil peruano (contratos) — por validar", "Ley N.° 29571, Código de Protección y Defensa del Consumidor — por validar", "Ley N.° 29733, Protección de Datos Personales — por validar"],
      controles: ["Respuesta automática y respuesta de Henry en menos de 3 minutos (existe)", "Ningún caso empieza sin contrato firmado (existe como regla; hubo una excepción)", "Contrato con cotización y cronograma (existe)", "El precio oferta solo se aplica con autorización de Henry", "Verificar viabilidad antes de prometer cantidades o resultados (*)", "Anexo con rondas de corrección y cambios (*)", "El contrato aclara que no se garantiza la aprobación institucional ni un %SIM o %IA determinado (*)", "Registro del canal de origen y del motivo de no cierre (*)"],
      recursos: { humanos: ["Henry", "Teddy o especialista (consulta de viabilidad)"], sistemas: ["Facebook, WhatsApp, Instagram", "Mensaje automático", "Google Meet", "Google Drive", "Sistema propio de costos"], instalaciones: ["Trabajo virtual"], equipos: ["Computadora, celular"] },
      indicadores: ["M.01.I01", "M.01.I02", "M.01.I05", "M.01.I03", "M.01.I04"],
      salidas: [ { a: "M.02", que: "Caso contratado con cronograma" }, { a: "S.01", que: "Cotización y pagos por partes" }, { a: "S.03", que: "Contrato y carpeta del caso" }, { a: "E.03", que: "Canal de origen de los clientes" } ],
      riesgos: [
        { r: "Prometer un resultado que no se puede cumplir (caso A: 15 antecedentes pedidos, 1 encontrado; se habló con la cliente y no se cobró)", c: "Búsqueda preliminar antes de prometer cantidades y alternativa escrita si no se alcanza (*)" },
        { r: "Aceptar un caso técnico sin revisor competente (caso B: memoria de cálculo tercerizada)", c: "Definir especialista y revisor en el diagnóstico; incluir su costo en la cotización (*)" },
        { r: "Iniciar un caso sin contrato (ocurrió una vez)", c: "Regla: sin contrato firmado no se abre grupo ni se empieza (indicador S.04.I01)" },
        { r: "Retrabajo sin límite", c: "Anexo con rondas de corrección y cambios (*)" }
      ],
      pendientes: ["Copia del contrato general sin datos personales, para ver qué falta (rondas, cambios, confidencialidad).", "Quién crea el grupo de WhatsApp cuando Henry no está disponible."]
    },
    {
      cod: "M.02", tipo: "M", nombre: "Investigación y Desarrollo", dueno: "Henry (asigna; ejecuta Henry o Teddy según especialidad)", estado: "op", doc: "Borrador", version: "0.1", prioridad: true, unidad: true,
      objetivo: "Desarrollar el servicio de investigación contratado con rigor metodológico, fuentes verificables y revisión competente, dentro del plazo acordado.",
      alcance: "Desde la planificación hasta la preparación para la sustentación. Los 5 servicios del catálogo: tesis, plan de tesis, artículos, levantamiento de observaciones y asesoramiento por horas (ver catálogo). Aprox. 4–5 casos por mes.",
      inicio: "Caso contratado recibido de M.01.", fin: "Entregable aprobado internamente por Henry y enviado a M.07.",
      situacion: "Henry capta y atiende al cliente; luego los casos se reparten por especialidad: Henry toma los de ingeniería, Teddy los de química y biología, y las investigaciones descriptivas o correlacionales las puede tomar cualquiera. Si hace falta, se contrata un especialista; Teddy también consigue aliados para ciertos proyectos. Henry revisa siempre antes de enviar. Los archivos viven en la computadora de Henry, el Drive y el grupo de WhatsApp. No hay secuencia uniforme ni entregables estándar.",
      nivel1: [
        { cod: "M.02.01", nombre: "Planificación del caso", dueno: "Henry", objetivo: "Convertir lo contratado en un plan con entregables y fechas.",
          entradas: ["Contrato y propuesta aceptada", "Requisitos de la institución del cliente"], salidas: ["Plan del caso con cronograma de entregas"], registros: ["FO-M02-01 Plan del caso (*)"],
          nivel2: [ { cod: "M.02.01.P01", nombre: "Revisión de requisitos de la institución (formato, similitud, plazos)" }, { cod: "M.02.01.P02", nombre: "Plan de trabajo y cronograma por partes o avances (*)" }, { cod: "M.02.01.P03", nombre: "Asignación por especialidad: ingeniería → Henry; química y biología → Teddy; descriptivas o correlacionales → cualquiera; especialista si hace falta" } ] },
        { cod: "M.02.02", nombre: "Búsqueda y gestión de información", dueno: "Responsable del caso (Henry o Teddy)", objetivo: "Reunir antecedentes y fuentes verificables.",
          entradas: ["Plan del caso"], salidas: ["Fuentes y antecedentes verificados"], registros: ["FO-M02-03 Registro de búsqueda (*)"],
          nivel2: [ { cod: "M.02.02.P01", nombre: "Definir palabras clave por variable y criterios (años, idioma, tipo de estudio) (sim)" }, { cod: "M.02.02.P02", nombre: "Buscar en Google Académico, Scopus, SciELO, Redalyc, RENATI y ALICIA (sim)" }, { cod: "M.02.02.P03", nombre: "Registro de bases consultadas, filtros y resultados (*)" }, { cod: "M.02.02.P04", nombre: "Verificar que cada fuente exista y sea citable (autor, año, enlace o DOI)" } ] },
        { cod: "M.02.03", nombre: "Metodología y análisis", dueno: "Responsable del caso o especialista", objetivo: "Diseñar el método y analizar los datos.",
          entradas: ["Fuentes", "Datos del cliente"], salidas: ["Metodología y resultados del análisis"], registros: ["Archivos de análisis en la carpeta del caso"],
          nivel2: [ { cod: "M.02.03.P01", nombre: "Tipo, enfoque, nivel y diseño de la investigación" }, { cod: "M.02.03.P02", nombre: "Población, muestra y muestreo" }, { cod: "M.02.03.P03", nombre: "Instrumentos alineados a la operacionalización; validez por juicio de expertos y confiabilidad (sim)" }, { cod: "M.02.03.P04", nombre: "Procesamiento de la base de datos del cliente (Excel, SPSS u otro) (sim)" }, { cod: "M.02.03.P05", nombre: "Trabajo especializado tercerizado (cálculos, ensayos)" } ] },
        { cod: "M.02.04", nombre: "Redacción y formato", dueno: "Responsable del caso (Henry o Teddy)", objetivo: "Redactar y dar formato según la norma de la institución.",
          entradas: ["Resultados", "Guía de la institución"], salidas: ["Borrador del entregable"], registros: ["Versión del entregable en Drive"],
          nivel2: [ { cod: "M.02.04.P01", nombre: "Redacción de la parte según la estructura de la universidad" }, { cod: "M.02.04.P02", nombre: "Citas y referencias en la norma (APA 7 u otra)" }, { cod: "M.02.04.P03", nombre: "Edición de estilo y claridad: ortografía, gramática, coherencia y tono académico (herramienta por definir) (sim)" }, { cod: "M.02.04.P04", nombre: "Formato de la guía de la universidad" }, { cod: "M.02.04.P05", nombre: "Versión guardada con código y número (*)" } ] },
        { cod: "M.02.05", nombre: "Revisión técnica y de similitud", dueno: "Henry", objetivo: "Verificar calidad técnica y requisitos antes de entregar.",
          entradas: ["Borrador del entregable"], salidas: ["Entregable aprobado internamente"], registros: ["FO-M02-02 Control de entregas y revisiones (*)"],
          nivel2: [ { cod: "M.02.05.P01", nombre: "Revisión técnica por revisor competente" }, { cod: "M.02.05.P02", nombre: "Reporte de %SIM (Turnitin) e %IA (JustDone) de cada avance (servicios SV-01 a SV-03)" }, { cod: "M.02.05.P03", nombre: "Si el %SIM es alto: ubicar coincidencias, citar o resumir con aporte propio" }, { cod: "M.02.05.P04", nombre: "Si el %IA es alto: reescribir con datos, contexto y voz del cliente, revisado con él" }, { cod: "M.02.05.P05", nombre: "Aprobación interna de Henry" } ] },
        { cod: "M.02.06", nombre: "Preparación para la sustentación", dueno: "Responsable del caso", objetivo: "Que el cliente domine su investigación y la defienda con seguridad.", entradas: ["Investigación aprobada por la universidad o programada para sustentar"], salidas: ["Presentación y simulacro realizados"], registros: ["Diapositivas y guion en la carpeta del caso (sim)"], nivel2: [ { cod: "M.02.06.P01", nombre: "Diapositivas con problema, objetivos, método, resultados y conclusiones (sim)" }, { cod: "M.02.06.P02", nombre: "Guion de exposición por tiempos (sim)" }, { cod: "M.02.06.P03", nombre: "Simulacro con preguntas probables del jurado (sim)" }, { cod: "M.02.06.P04", nombre: "Observaciones del jurado → M.07.02" } ] }
      ],
      sipoc: [
        { prov: "M.01 Gestión comercial", ent: "Caso contratado, alcance y plazos", sub: "M.02.01", prod: "Plan del caso", cli: "Equipo del caso" },
        { prov: "Cliente / institución", ent: "Avance, datos y requisitos", sub: "M.02.02 – M.02.03", prod: "Fuentes, metodología y análisis", cli: "M.02.04" },
        { prov: "S.02 Especialistas", ent: "Trabajo especializado", sub: "M.02.03", prod: "Resultado técnico", cli: "M.02.05" },
        { prov: "M.07 Entrega", ent: "Observaciones del cliente", sub: "M.02.04 – M.02.05", prod: "Entregable revisado y aprobado", cli: "M.07" }
      ],
      requisitos: ["Reglamentos de grados, títulos e integridad académica de la institución del cliente (requisito del cliente)", "Decreto Legislativo N.° 822, Ley sobre el Derecho de Autor — por validar", "Ley N.° 29733, Protección de Datos Personales — por validar"],
      controles: ["Nunca fabricar antecedentes, datos ni referencias", "Revisión de Henry antes de cada envío (existe)", "Revisor competente para entregables técnicos (*)", "Registro de búsqueda cuando se piden antecedentes en cantidad (*)", "Reporte de %SIM (Turnitin) e %IA (JustDone) en cada avance, archivado con fecha (*)", "Si el %SIM o el %IA es alto, el texto se reescribe con aporte propio y cita correcta; no se usan herramientas para ocultar similitud o autoría", "Un porcentaje de similitud o de IA no se trata como prueba de calidad", "El cliente aprueba cada parte y recibe su explicación: es el autor de su investigación (sim)", "No se usan parafraseadores para ocultar similitud o autoría"],
      recursos: { humanos: ["Henry", "Teddy", "Especialistas externos según el caso"], sistemas: ["Google Drive", "WhatsApp", "Turnitin (reporte de similitud)", "JustDone (detección de IA)", "Bases de datos académicas"], instalaciones: ["Trabajo virtual"], equipos: ["Computadoras"] },
      indicadores: ["M.02.I01", "M.02.I02", "M.02.I03", "M.02.I04", "M.02.I05", "M.02.I06"],
      salidas: [ { a: "M.07", que: "Entregable aprobado internamente" }, { a: "S.01", que: "Costo real del caso" }, { a: "S.03", que: "Versiones del entregable" } ],
      riesgos: [ { r: "Retrabajo por cambios sin límite", c: "Número de revisiones y cambios definidos en la propuesta (M.01.03)" }, { r: "Archivos solo en la computadora de Henry", c: "Expediente del caso en Drive con versiones (S.03)" } ],
      pendientes: ["Duración típica de cada parte y si el cronograma se comparte con el cliente.", "Bases de datos y software que se usan.", "Cómo se elige y se paga al especialista y quién revisa su trabajo.", "Qué revisa Henry antes de enviar."]
    },
    {
      cod: "M.03", arranque: ["Responsable de la línea", "Servicios y alcance de cada uno", "Cliente típico y cómo llega", "Flujo desde el contrato hasta la entrega", "Entregables y criterios de aceptación", "Quién revisa (revisor competente)", "Forma de pago (precios fuera del proceso)", "Indicador clave y fuente de datos", "Riesgos y controles", "Primer caso piloto"], tipo: "M", nombre: "Ingeniería y Productividad", dueno: "Por definir", estado: "idea", doc: "Borrador", version: "0.1", unidad: true,
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
      cod: "M.04", arranque: ["Responsable de la línea", "Servicios y alcance de cada uno", "Cliente típico y cómo llega", "Flujo desde el contrato hasta la entrega", "Entregables y criterios de aceptación", "Quién revisa (revisor competente)", "Forma de pago (precios fuera del proceso)", "Indicador clave y fuente de datos", "Riesgos y controles", "Primer caso piloto"], tipo: "M", nombre: "Tecnología y Transformación Digital", dueno: "Por definir", estado: "ini", doc: "Borrador", version: "0.1", unidad: true,
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
      cod: "M.05", simulado: true, tipo: "M", nombre: "Ingeniería Especializada", dueno: "Henry", estado: "apoyo", doc: "Borrador", version: "0.1", unidad: true,
      objetivo: "Apoyar proyectos de aliados que requieren conocimientos técnicos especializados (geofísica, investigación ambiental).",
      alcance: "Proyectos de aliados en los que BLACKBELT participa como apoyo.",
      inicio: "Proyecto de aliado identificado.", fin: "Apoyo cerrado con conformidad del aliado.",
      situacion: "Los proyectos publicados (geofísica en Huancavelica y Jaén, calidad de agua en Loreto) son de aliados; Henry participó como apoyo. Se busca encontrar más proyectos de aliados.",
      nivel1: [
        { cod: "M.05.01", nombre: "Búsqueda de proyectos de aliados", objetivo: "Identificar proyectos donde aportar.", nivel2: [ { cod: "M.05.01.P01", nombre: "Contacto con aliados (Henry, Teddy) (sim)" } ] },
        { cod: "M.05.02", nombre: "Apoyo técnico en campo y gabinete", objetivo: "Ejecutar la parte acordada.", nivel2: [ { cod: "M.05.02.P01", nombre: "Acuerdo escrito del alcance del apoyo (*)" }, { cod: "M.05.02.P02", nombre: "Ejecución del apoyo técnico (sim)" } ] },
        { cod: "M.05.03", nombre: "Cierre y conformidad del aliado", objetivo: "Cerrar el apoyo y evaluarlo.", nivel2: [ { cod: "M.05.03.P01", nombre: "Conformidad del aliado y lecciones aprendidas (sim)" } ] }
      ],
      sipoc: [ { prov: "E.04 Alianzas", ent: "Proyecto del aliado y alcance del apoyo", sub: "M.05.01 – M.05.03", prod: "Apoyo técnico entregado", cli: "Aliado" } ],
      requisitos: [], controles: ["Acuerdo escrito del alcance del apoyo (*)"],
      recursos: { humanos: ["Henry"], sistemas: [], instalaciones: ["Campo (según proyecto)"], equipos: ["Del aliado"] },
      indicadores: ["M.05.I01"], salidas: [ { a: "E.04", que: "Resultado del proyecto conjunto" } ], riesgos: [], pendientes: []
    },
    {
      cod: "M.06", arranque: ["Responsable de la línea", "Servicios y alcance de cada uno", "Cliente típico y cómo llega", "Flujo desde el contrato hasta la entrega", "Entregables y criterios de aceptación", "Quién revisa (revisor competente)", "Forma de pago (precios fuera del proceso)", "Indicador clave y fuente de datos", "Riesgos y controles", "Primer caso piloto"], tipo: "M", nombre: "Emprendimiento y Desarrollo Empresarial", dueno: "Por definir", estado: "ini", doc: "Borrador", version: "0.1", unidad: true,
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
      situacion: "Henry envía por WhatsApp; el cliente da conformidad o pide cambios hasta quedar satisfecho. Se cobra contra entrega; en tesis y en levantamiento de observaciones el cliente puede pagar por partes (7 partes del catálogo). Existe una encuesta de satisfacción en Google Forms para todas las investigaciones, pero al final los clientes casi no la responden. Se planea una encuesta intermedia cuando el cliente paga una parte.",
      nivel1: [
        { cod: "M.07.01", nombre: "Entregas parciales y cobro", dueno: "Henry", objetivo: "Entregar por hitos y cobrar cada parte.",
          entradas: ["Entregable aprobado internamente", "Hitos de pago de la propuesta (*)"], salidas: ["Entrega enviada", "Pago registrado"], registros: ["FO-M02-02 Control de entregas y revisiones (*)", "Comprobante (boleta electrónica)"],
          nivel2: [ { cod: "M.07.01.P01", nombre: "Envío del entregable o avance" }, { cod: "M.07.01.P02", nombre: "Cobro del hito y emisión del comprobante" } ] },
        { cod: "M.07.02", nombre: "Observaciones y correcciones", dueno: "Henry", objetivo: "Atender las observaciones dentro de lo acordado.",
          entradas: ["Observaciones del cliente"], salidas: ["Entrega corregida"], registros: ["FO-M02-02 Control de entregas y revisiones (*)"],
          nivel2: [ { cod: "M.07.02.P01", nombre: "Registro de observaciones (ronda N de las acordadas) (*)" }, { cod: "M.07.02.P02", nombre: "Corrección en M.02 y nueva entrega" } ] },
        { cod: "M.07.03", nombre: "Satisfacción del cliente", dueno: "Henry (Johann mide)", objetivo: "Conocer la opinión del cliente durante y al final del servicio.",
          entradas: ["Pago de un hito intermedio", "Conformidad final"], salidas: ["Respuestas de encuesta"], registros: ["FO-M07-02 Encuesta intermedia (*)", "Encuesta final en Google Forms (existe)"],
          nivel2: [ { cod: "M.07.03.P01", nombre: "Encuesta intermedia al pagar la parte 4 (Metodología) o el avance intermedio (*)" }, { cod: "M.07.03.P02", nombre: "Encuesta final en Google Forms" } ] },
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
      riesgos: [ { r: "El cliente no responde la encuesta final", c: "Encuesta intermedia al pagar un hito (*)" }, { r: "Servicios cobrados solo contra entrega final: trabajo no cobrado si el cliente abandona", c: "Usar los pagos por partes del catálogo como hitos de cobro en la propuesta (*)" } ],
      pendientes: [ "Preguntas de la encuesta actual de Google Forms."]
    },
    {
      cod: "M.08", arranque: ["Responsable de la línea", "Servicios y alcance de cada uno", "Cliente típico y cómo llega", "Flujo desde el contrato hasta la entrega", "Entregables y criterios de aceptación", "Quién revisa (revisor competente)", "Forma de pago (precios fuera del proceso)", "Indicador clave y fuente de datos", "Riesgos y controles", "Primer caso piloto"], tipo: "M", nombre: "BLACKBELT Institute", dueno: "Jair (con Jeferson)", estado: "ini", doc: "Borrador", version: "0.1", aparte: true,
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
      cod: "S.01", simulado: true, tipo: "S", nombre: "Finanzas y costos", dueno: "Henry + contador externo", estado: "op", doc: "Borrador", version: "0.1",
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
      cod: "S.02", simulado: true, tipo: "S", nombre: "Personal y especialistas", dueno: "Henry", estado: "op", doc: "Borrador", version: "0.1",
      objetivo: "Contar con el equipo y los especialistas competentes que cada caso necesita.",
      alcance: "Equipo interno (4 personas) y especialistas externos remunerados.",
      inicio: "Necesidad de un perfil en un caso.", fin: "Especialista pagado y evaluado.",
      situacion: "Henry busca especialistas por contactos o publicidad. No hay criterios escritos de selección ni evaluación.",
      nivel1: [
        { cod: "S.02.01", nombre: "Asignación del equipo interno", objetivo: "Asignar casos por especialidad.", nivel2: [ { cod: "S.02.01.P01", nombre: "Ingeniería → Henry; química y biología → Teddy; descriptivas o correlacionales → cualquiera" }, { cod: "S.02.01.P02", nombre: "Revisión de carga de trabajo semanal (sim)" } ] },
        { cod: "S.02.02", nombre: "Selección y contratación de especialistas", objetivo: "Elegir con criterios.", nivel2: [ { cod: "S.02.02.P01", nombre: "Requisitos del perfil, alcance, plazo y entregable (*)" }, { cod: "S.02.02.P02", nombre: "Búsqueda por contactos, aliados o publicidad (Henry, Teddy)" }, { cod: "S.02.02.P03", nombre: "Acuerdo escrito de alcance, plazo y pago (*)" } ] },
        { cod: "S.02.03", nombre: "Pago y evaluación de especialistas", objetivo: "Pagar y evaluar.", nivel2: [ { cod: "S.02.03.P01", nombre: "Revisión del entregable por revisor competente (*)" }, { cod: "S.02.03.P02", nombre: "Pago contra trabajo aprobado (S.01) (sim)" }, { cod: "S.02.03.P03", nombre: "Evaluación del especialista al cierre (*)" } ] }
      ],
      sipoc: [ { prov: "M.02 Investigación", ent: "Necesidad de especialista", sub: "S.02.02", prod: "Especialista contratado", cli: "M.02" }, { prov: "M.02", ent: "Trabajo recibido", sub: "S.02.03", prod: "Especialista evaluado", cli: "E.04, S.01" } ],
      requisitos: ["Código Civil peruano (locación de servicios) — por validar"],
      controles: ["Requisitos y revisor definidos antes de contratar (*)"],
      recursos: { humanos: ["Henry"], sistemas: ["Google Drive"], instalaciones: [], equipos: [] },
      indicadores: ["S.02.I01"], salidas: [ { a: "M.02", que: "Especialistas asignados" }, { a: "S.01", que: "Pagos por realizar" } ], riesgos: [], pendientes: []
    },
    {
      cod: "S.03", simulado: true, tipo: "S", nombre: "Documentos y archivos", dueno: "Henry", estado: "op", doc: "Borrador", version: "0.1",
      objetivo: "Conservar los documentos del sistema y los expedientes de cada caso, con versiones y respaldo.",
      alcance: "Documentos del sistema de procesos y archivos de cada caso.",
      inicio: "Creación de un documento o apertura de un caso.", fin: "Documento vigente publicado o expediente cerrado y respaldado.",
      situacion: "Henry administra el Drive y todo el equipo tiene acceso. Los entregables también están en la computadora de Henry y se intercambian por WhatsApp. No hay control de versiones ni respaldo definido.",
      nivel1: [
        { cod: "S.03.01", nombre: "Control de documentos del sistema", objetivo: "Codificación, versiones y estados.", nivel2: [ { cod: "S.03.01.P01", nombre: "Ver E.02.01 Control de documentos y registros" } ] },
        { cod: "S.03.02", nombre: "Expediente digital por caso", objetivo: "Una carpeta por caso en Drive.", nivel2: [ { cod: "S.03.02.P01", nombre: "Carpeta del caso con estructura estándar: 01 Contrato · 02 Insumos del cliente · 03 Avances · 04 Reportes SIM e IA · 05 Entregas finales (*)" }, { cod: "S.03.02.P02", nombre: "Nombre de archivo: CÓDIGO-CASO_Parte_vN (*)" }, { cod: "S.03.02.P03", nombre: "Mover a «Casos cerrados» al cierre (sim)" } ] },
        { cod: "S.03.03", nombre: "Respaldo", objetivo: "Evitar pérdidas.", nivel2: [ { cod: "S.03.03.P01", nombre: "Respaldo mensual del Drive en un disco o cuenta aparte (*)" } ] }
      ],
      sipoc: [ { prov: "M.01, M.02, M.07", ent: "Archivos del caso", sub: "S.03.02", prod: "Expediente completo", cli: "Equipo del caso" }, { prov: "E.02", ent: "Documentos del sistema", sub: "S.03.01", prod: "Documentos vigentes", cli: "Todos" } ],
      requisitos: ["Ley N.° 29733, Protección de Datos Personales — por validar"],
      controles: ["Nombre de archivo con código y versión (*)"],
      recursos: { humanos: ["Henry"], sistemas: ["Google Drive"], instalaciones: [], equipos: [] },
      indicadores: ["S.03.I01"], salidas: [ { a: "M.02", que: "Expediente del caso" } ], riesgos: [], pendientes: []
    },
    {
      cod: "S.04", simulado: true, tipo: "S", nombre: "Legal y contractual", dueno: "Henry", estado: "op", doc: "Borrador", version: "0.1",
      objetivo: "Que cada relación con clientes, especialistas y aliados tenga un acuerdo escrito y que la empresa cumpla sus obligaciones formales.",
      alcance: "Contratos y obligaciones de BLACKBELT GROUP S.A.C. (RUC 20616527704).",
      inicio: "Necesidad de un acuerdo.", fin: "Acuerdo firmado y archivado.",
      situacion: "Existe un contrato general con clientes. Con especialistas y aliados no se han confirmado acuerdos escritos.",
      nivel1: [
        { cod: "S.04.01", nombre: "Contratos con clientes", objetivo: "Mantener el modelo de contrato.", nivel2: [ { cod: "S.04.01.P01", nombre: "Contrato general con cotización y cronograma, firmado en PDF" }, { cod: "S.04.01.P02", nombre: "Anexo de rondas y cambios (*)" } ] },
        { cod: "S.04.02", nombre: "Acuerdos con especialistas y aliados", objetivo: "Dejar por escrito alcance y pago.", nivel2: [ { cod: "S.04.02.P01", nombre: "Acuerdo de locación de servicios con especialista (*)" }, { cod: "S.04.02.P02", nombre: "Acuerdo por proyecto con aliado (*)" } ] },
        { cod: "S.04.03", nombre: "Formalización y cumplimiento", objetivo: "Mantener al día a la empresa ante SUNAT.", nivel2: [ { cod: "S.04.03.P01", nombre: "Revisión anual de modelos de contrato con asesor legal (*)" }, { cod: "S.04.03.P02", nombre: "Habilitar factura electrónica para atender empresas (evaluar con el contador) (*)" } ] }
      ],
      sipoc: [ { prov: "M.01", ent: "Condiciones acordadas", sub: "S.04.01", prod: "Contrato firmado", cli: "Cliente, M.02" } ],
      requisitos: ["Código Civil peruano — por validar", "Ley General de Sociedades — por validar"],
      controles: ["Contrato firmado antes de iniciar el trabajo (*)"],
      recursos: { humanos: ["Henry", "Asesoría legal externa (por definir)"], sistemas: ["Google Drive"], instalaciones: [], equipos: [] },
      indicadores: ["S.04.I01"], salidas: [ { a: "M.01", que: "Modelo de contrato" } ], riesgos: [], pendientes: ["Copia del contrato general."]
    },
    {
      cod: "S.05", simulado: true, tipo: "S", nombre: "Tecnología y herramientas", dueno: "Por definir", estado: "op", doc: "Borrador", version: "0.1",
      objetivo: "Mantener operativas las herramientas digitales de la empresa.",
      alcance: "Sistema propio de costos, Drive, web corporativa y este portafolio.",
      inicio: "Necesidad o falla de una herramienta.", fin: "Herramienta operativa.",
      situacion: "Se usan un sistema propio (control de costos), Google Drive, WhatsApp y la web en GitHub Pages.",
      nivel1: [
        { cod: "S.05.01", nombre: "Sistema propio de costos", objetivo: "Mantenerlo operativo.", nivel2: [ { cod: "S.05.01.P01", nombre: "Registro de incidencias (*)" }, { cod: "S.05.01.P02", nombre: "Solución o escalamiento (sim)" } ] },
        { cod: "S.05.02", nombre: "Drive y herramientas de trabajo", objetivo: "Accesos y orden.", nivel2: [ { cod: "S.05.02.P01", nombre: "Alta y baja de accesos del equipo (sim)" } ] },
        { cod: "S.05.03", nombre: "Web corporativa y portafolio de procesos", objetivo: "Publicar y actualizar.", nivel2: [ { cod: "S.05.03.P01", nombre: "Publicar documentos aprobados (E.02.01)" } ] }
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
    { cod: "E.01.I02", proceso: "E.01", nombre: "Cumplimiento de acuerdos", finalidad: "Que la reunión mensual produzca resultados.", formula: "Acuerdos cumplidos en la fecha ÷ acuerdos con fecha vencida × 100", responsable: "Johann", tipo: "Eficacia", unidad: "%", fuente: "FO-E01-01 Acta de reunión", frecuencia: "Mensual", meta: null },
    { cod: "E.01.I03", proceso: "E.01", nombre: "Reuniones de calidad y planeamiento realizadas", finalidad: "Mantener la revisión periódica.", formula: "Reuniones mensuales realizadas ÷ reuniones programadas × 100", responsable: "Johann", tipo: "Eficacia", unidad: "%", fuente: "Actas", frecuencia: "Trimestral", meta: null },
    { cod: "E.02.I01", proceso: "E.02", nombre: "Procesos estandarizados aprobados", finalidad: "Medir el avance de la estandarización.", formula: "Procesos con documentación aprobada por Henry ÷ 17 procesos del mapa × 100", responsable: "Johann", tipo: "Eficacia", unidad: "%", fuente: "Portafolio de procesos", frecuencia: "Mensual", meta: null },
    { cod: "E.02.I02", proceso: "E.02", nombre: "Aplicación de documentos en piloto", finalidad: "Comprobar que los documentos se usan.", formula: "Registros llenados en los casos piloto ÷ registros exigidos × 100", responsable: "Johann", tipo: "Eficacia", unidad: "%", fuente: "Expedientes de casos piloto", frecuencia: "Por piloto", meta: null },
    { cod: "E.02.I03", proceso: "E.02", nombre: "Acciones correctivas cerradas a tiempo", finalidad: "Que las fallas se corrijan.", formula: "Acciones cerradas y verificadas en la fecha ÷ acciones con fecha vencida × 100", responsable: "Johann", tipo: "Eficacia", unidad: "%", fuente: "FO-E02-02", frecuencia: "Mensual", meta: null },
    { cod: "E.02.I04", proceso: "E.02", nombre: "Avances conformes en el muestreo", finalidad: "Medir el cumplimiento de los controles del servicio.", formula: "Avances revisados sin hallazgos ÷ avances revisados × 100", responsable: "Johann", tipo: "Calidad", unidad: "%", fuente: "FO-E02-01", frecuencia: "Mensual", meta: null },
    { cod: "E.02.I05", proceso: "E.02", nombre: "Reclamos atendidos en plazo", finalidad: "Responder a tiempo al cliente.", formula: "Reclamos respondidos en el plazo ÷ reclamos recibidos × 100", responsable: "Johann", tipo: "Eficacia", unidad: "%", fuente: "FO-E02-03", frecuencia: "Mensual", meta: null },
    { cod: "E.03.I01", proceso: "E.03", nombre: "Contactos por canal", finalidad: "Saber qué canal trae clientes.", formula: "N.° de contactos nuevos por canal (referido, redes, Facebook Ads)", responsable: "Jeferson", tipo: "Eficacia", unidad: "N.°", fuente: "FO-M01-01 Registro de contactos", frecuencia: "Mensual", meta: null },
    { cod: "E.03.I02", proceso: "E.03", nombre: "Costo de captación por Ads", finalidad: "Saber cuánto cuesta un cliente que llega por Ads.", formula: "Inversión en Facebook Ads ÷ contratos con origen Ads", responsable: "Jeferson y Henry", tipo: "Eficiencia", unidad: "S/ por cliente", fuente: "FO-M01-01 y gasto en Ads", frecuencia: "Mensual", meta: null },
    { cod: "E.04.I01", proceso: "E.04", nombre: "Conformidad de trabajos con aliados", finalidad: "Medir la calidad del trabajo conjunto.", formula: "Trabajos con aliado entregados conformes ÷ trabajos con aliado × 100", responsable: "Henry", tipo: "Calidad", unidad: "%", fuente: "Evaluación de aliados", frecuencia: "Semestral", meta: null },
    { cod: "M.01.I01", proceso: "M.01", clave: true, nombre: "Tasa de conversión", finalidad: "Saber cuántas reuniones terminan en contrato.", formula: "Contratos firmados ÷ reuniones Meet realizadas × 100", responsable: "Henry", tipo: "Eficacia", unidad: "%", fuente: "FO-M01-01 Registro de contactos", frecuencia: "Mensual", meta: null },
    { cod: "M.01.I05", proceso: "M.01", nombre: "Tiempo de primera respuesta de Henry", finalidad: "Mantener la rapidez que hoy es una fortaleza.", formula: "Promedio de minutos entre la respuesta automática y la primera respuesta de Henry", responsable: "Henry", tipo: "Eficiencia", unidad: "minutos", fuente: "FO-M01-01 (hora de contacto y de respuesta)", frecuencia: "Mensual", meta: null, nota: "Referencia declarada: menos de 3 minutos." },
    { cod: "M.01.I02", proceso: "M.01", nombre: "Tiempo de cierre", finalidad: "Medir la rapidez comercial.", formula: "Promedio de días entre el primer contacto y la firma del contrato", responsable: "Henry", tipo: "Eficiencia", unidad: "días", fuente: "FO-M01-01", frecuencia: "Mensual", meta: null, nota: "Referencia actual declarada: 1 a 3 días." },
    { cod: "M.01.I03", proceso: "M.01", nombre: "Contratos completos", finalidad: "Comprobar que lo acordado queda por escrito.", formula: "Contratos con cotización, cronograma, rondas de corrección y cambios definidos ÷ contratos firmados × 100", responsable: "Johann (verificación)", tipo: "Calidad", unidad: "%", fuente: "Contratos en la carpeta del caso", frecuencia: "Mensual", meta: null },
    { cod: "M.01.I04", proceso: "M.01", nombre: "Precio promedio por caso", finalidad: "Seguir el ingreso medio por caso.", formula: "Suma de precios contratados ÷ contratos firmados", responsable: "Henry", tipo: "Eficiencia", unidad: "S/", fuente: "FO-M01-01", frecuencia: "Mensual", meta: null },
    { cod: "M.02.I01", proceso: "M.02", clave: true, nombre: "Aceptación en primera entrega", finalidad: "Medir la calidad del entregable a la primera.", formula: "Entregas aceptadas sin observaciones ÷ entregas realizadas × 100", responsable: "Henry", tipo: "Calidad", unidad: "%", fuente: "FO-M02-02 Control de entregas y revisiones", frecuencia: "Mensual", meta: null },
    { cod: "M.02.I02", proceso: "M.02", nombre: "Rondas de corrección por caso", finalidad: "Medir el retrabajo.", formula: "Total de rondas de corrección ÷ casos cerrados", responsable: "Henry", tipo: "Eficiencia", unidad: "rondas", fuente: "FO-M02-02", frecuencia: "Mensual", meta: null },
    { cod: "M.02.I03", proceso: "M.02", nombre: "Entregas a tiempo", finalidad: "Medir el cumplimiento de plazos.", formula: "Entregas en la fecha pactada ÷ entregas realizadas × 100", responsable: "Henry", tipo: "Eficacia", unidad: "%", fuente: "FO-M02-01 y FO-M02-02", frecuencia: "Mensual", meta: null },
    { cod: "M.02.I04", proceso: "M.02", nombre: "Entregables técnicos con revisor competente", finalidad: "Asegurar la revisión técnica.", formula: "Entregables técnicos revisados por especialista competente ÷ entregables técnicos × 100", responsable: "Henry", tipo: "Calidad", unidad: "%", fuente: "FO-M02-02", frecuencia: "Mensual", meta: null },
    { cod: "M.02.I05", proceso: "M.02", nombre: "Avances con reporte de %SIM e %IA", finalidad: "Cumplir lo que incluye el servicio.", formula: "Avances entregados con reporte de %SIM e %IA ÷ avances entregados de servicios SV-01 a SV-03 × 100", responsable: "Henry", tipo: "Calidad", unidad: "%", fuente: "FO-M02-02 Control de entregas y revisiones", frecuencia: "Mensual", meta: null },
    { cod: "M.02.I06", proceso: "M.02", nombre: "Mezcla de servicios", finalidad: "Saber qué servicios se venden más.", formula: "Casos contratados por servicio (SV-01 a SV-05) ÷ casos contratados × 100", responsable: "Henry", tipo: "Eficacia", unidad: "%", fuente: "FO-M01-01 Registro de contactos", frecuencia: "Mensual", meta: null },
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
  /* Catálogo de servicios de M.02 (lista de precios de BLACKBELT, 22/11/2026).
     partes: entregables por los que se puede pagar por partes. */
  servicios: [
    { cod: "SV-01", nombre: "Desarrollo y asesoramiento de tesis",
      incluye: ["Plan de tesis (si el cliente lo requiere)", "Asesoramiento especializado en cada avance", "Levantamiento de observaciones hasta antes y/o después de la sustentación, entrega o exposición final", "Reportes de %SIM e %IA en cada avance"],
      partes: ["Planteamiento de la problemática", "Hipótesis, matrices y aspectos administrativos (estos últimos si hay plan de tesis)", "Marco teórico", "Metodología", "Resultados y discusiones", "Conclusiones y recomendaciones", "Anexos y referencias"], subprocesos: ["M.02.01", "M.02.02", "M.02.03", "M.02.04", "M.02.05", "M.07.01", "M.07.02"], estado: "Confirmado" },
    { cod: "SV-02", nombre: "Desarrollo y asesoramiento de plan de tesis",
      incluye: ["Plan de tesis", "Asesoramiento especializado en cada avance", "Levantamiento de observaciones hasta antes y/o después de la sustentación, entrega o exposición final", "Reportes de %SIM e %IA en cada avance"],
      partes: [], subprocesos: ["M.02.01", "M.02.02", "M.02.03", "M.02.04", "M.02.05", "M.07.01", "M.07.02"], estado: "Confirmado" },
    { cod: "SV-03", nombre: "Desarrollo y asesoramiento de artículos", requisito: "El cliente ya tiene la investigación previa",
      incluye: ["Asesoramiento especializado en cada avance", "Levantamiento de observaciones hasta antes y/o después de la sustentación, entrega o exposición final", "Reportes de %SIM e %IA en cada avance"],
      partes: [], subprocesos: ["M.02.01", "M.02.04", "M.02.05", "M.07.01", "M.07.02"], estado: "Confirmado" },
    { cod: "SV-04", nombre: "Levantamiento de observaciones y asesoramiento",
      incluye: ["Asesoramiento especializado en cada avance", "Levantamiento de observaciones hasta antes y/o después de la sustentación, entrega o exposición final"],
      partes: ["Fundamentación y planteamiento de la problemática", "Hipótesis, matrices y aspectos administrativos (estos últimos si hay plan de tesis)", "Marco teórico", "Metodología", "Resultados y discusiones", "Conclusiones y recomendaciones", "Anexos y referencias"], subprocesos: ["M.02.01", "M.02.04", "M.02.05", "M.07.02"], estado: "Confirmado" },
    { cod: "SV-05", nombre: "Asesoramiento de investigación",
      incluye: ["Asesoramiento especializado hasta que el usuario sustente, exponga o haga la entrega final"],
      partes: [], subprocesos: ["M.02.01", "M.02.03"], estado: "Confirmado" }
  ],
  /* M.02: qué se hace en cada parte de la investigación (servicios SV-01 y SV-04; SV-02 llega hasta la parte 4) */
  partesInvestigacion: [{"n": 1, "nombre": "Planteamiento del problema", "tareas": ["Describir la realidad problemática con datos y fuentes verificables (internacional, nacional, local)", "Formular el problema general y los específicos", "Redactar la justificación (teórica, práctica, metodológica, social)", "Delimitar el estudio (espacio, tiempo, población)"], "entregable": "Capítulo I en borrador", "control": "Problemas coherentes con el título y las variables; cada dato con su fuente"}, {"n": 2, "nombre": "Objetivos, hipótesis, matrices y aspectos administrativos", "tareas": ["Plantear objetivo general y específicos (uno por problema)", "Formular hipótesis cuando el diseño las requiere", "Elaborar la matriz de consistencia", "Elaborar la matriz de operacionalización de variables (dimensiones, indicadores, escala)", "Cronograma y presupuesto, si es plan de tesis"], "entregable": "Matrices y objetivos aprobados por el cliente", "control": "Coherencia problema → objetivo → hipótesis → variable → indicador"}, {"n": 3, "nombre": "Marco teórico", "tareas": ["Buscar antecedentes internacionales y nacionales en bases académicas y repositorios (registro de búsqueda)", "Verificar cada antecedente: autor, año, enlace o DOI", "Redactar bases teóricas de cada variable con autores reconocidos", "Definir términos básicos"], "entregable": "Capítulo II con antecedentes verificados", "control": "Ningún antecedente sin enlace o DOI comprobable; citas en la norma de la universidad"}, {"n": 4, "nombre": "Metodología", "tareas": ["Definir tipo, enfoque, nivel y diseño", "Definir población, muestra y muestreo", "Elaborar técnicas e instrumentos alineados a la operacionalización", "Validar instrumentos (juicio de expertos) y confiabilidad (prueba piloto, alfa de Cronbach)", "Plan de procesamiento y aspectos éticos (consentimiento informado)"], "entregable": "Capítulo III e instrumentos listos para aplicar", "control": "Cada ítem del instrumento corresponde a un indicador; validación documentada"}, {"n": 5, "nombre": "Resultados y discusión", "tareas": ["Recibir la base de datos recogida por el cliente o por la institución", "Procesar datos: estadística descriptiva e inferencial (prueba de hipótesis)", "Elaborar tablas y figuras con interpretación", "Discutir los resultados contrastándolos con los antecedentes"], "entregable": "Capítulos IV y V", "control": "Resultados trazables a la base de datos; nunca se crean ni alteran datos"}, {"n": 6, "nombre": "Conclusiones y recomendaciones", "tareas": ["Una conclusión por objetivo, basada en los resultados", "Recomendaciones factibles dirigidas a actores concretos"], "entregable": "Conclusiones y recomendaciones", "control": "Correspondencia uno a uno con los objetivos"}, {"n": 7, "nombre": "Anexos y referencias", "tareas": ["Compilar matriz de consistencia, instrumentos, validaciones, base de datos y evidencias", "Ordenar referencias en la norma (APA 7 u otra)", "Cruzar citas y referencias", "Aplicar formato final de la guía de la universidad"], "entregable": "Documento completo para revisión final", "control": "Toda cita está en referencias y viceversa; formato conforme a la guía"}],
  cierreCadaParte: ["Revisión de Henry (y del revisor competente si hay trabajo técnico)", "Reporte de %SIM en el Turnitin de BLACKBELT y de %IA en JustDone, archivados con fecha", "Si el %SIM es alto: ubicar las coincidencias, citar correctamente o resumir con aporte propio", "Si el %IA es alto: reescribir con los datos, el contexto y la voz del cliente, y revisarlo con él", "Edición final de estilo y claridad sobre el texto ya citado (no para modificar el %SIM ni el %IA)", "Envío de la parte y explicación al cliente para que la domine (sesión breve si la pide)"],
  serviciosNotas: [
    "Los reportes de %SIM (Turnitin) e %IA (JustDone) son evidencia de control, no prueba de calidad ni garantía de aprobación: se archiva el reporte con su fecha en cada avance (*).",
    "La cuenta de Turnitin que se usa es institucional (UDH): confirmar que la licencia permite usarla para servicios a terceros.",
    "La encuesta intermedia se envía al pagar la parte 4 (Metodología) en SV-01 y SV-04, o al pagar el avance intermedio en los demás servicios (*).",
    "El levantamiento de observaciones «hasta después de la sustentación» necesita un límite escrito de rondas y plazo en la propuesta (M.01.03) para evitar retrabajo sin fin (*).",
    "Los precios no forman parte de los procesos: se manejan en la lista de precios (DO-M01-01). El precio oferta solo lo autoriza Henry."
  ],
  serviciosBrochure: ["Investigación aplicada", "Estudios y análisis técnicos", "Desarrollo experimental", "Prototipos y validación de soluciones", "Análisis e interpretación de datos", "Asesoría en trabajos de investigación"],

  /* ======================= DIAGRAMAS DE FLUJO (estilo BPMN / Bizagi) =======================
     carriles: roles. nodos: tipo inicio | fin | tarea | decision; carril (índice), col (columna), fila (0 arriba, 1 abajo),
     ref: subproceso al que enlaza. flujos: de → a, con etiqueta opcional. */
  diagramas: {
    "M.01": {
      titulo: "Gestión comercial: del contacto al caso abierto",
      carriles: ["Cliente", "Henry (Gerencia)", "Teddy / especialista"],
      nodos: [
        { id: "i", tipo: "inicio", carril: 0, col: 0, txt: "Escribe por Facebook, WhatsApp o Instagram" },
        { id: "a1", tipo: "tarea", carril: 1, col: 1, txt: "Responder (automático + Henry en < 3 min) y pedir datos", ref: "M.01.01" },
        { id: "a2", tipo: "tarea", carril: 1, col: 2, txt: "Meet: diagnóstico de la problemática", ref: "M.01.02" },
        { id: "a3", tipo: "tarea", carril: 2, col: 3, txt: "Verificar viabilidad técnica (*)", ref: "M.01.02" },
        { id: "g1", tipo: "decision", carril: 1, col: 4, txt: "¿Se puede cumplir lo pedido?" },
        { id: "a4", tipo: "tarea", carril: 1, col: 5, txt: "Preparar contrato con cotización y cronograma", ref: "M.01.03" },
        { id: "r1", tipo: "tarea", carril: 1, col: 5, fila: 1, txt: "Proponer alcance alternativo por escrito (*)", ref: "M.01.02" },
        { id: "a5", tipo: "tarea", carril: 0, col: 6, txt: "Revisar el contrato" },
        { id: "g2", tipo: "decision", carril: 0, col: 7, txt: "¿Acepta?" },
        { id: "a6", tipo: "tarea", carril: 1, col: 8, txt: "Firmar en PDF y crear grupo de WhatsApp", ref: "M.01.03" },
        { id: "r2", tipo: "tarea", carril: 1, col: 8, fila: 1, txt: "Registrar motivo de no cierre (*)", ref: "M.01.03" },
        { id: "f1", tipo: "fin", carril: 1, col: 9, txt: "Caso pasa a M.02" },
        { id: "f3", tipo: "fin", carril: 1, col: 9, fila: 1, txt: "Caso no cerrado" }
      ],
      flujos: [
        { de: "i", a: "a1" }, { de: "a1", a: "a2" }, { de: "a2", a: "a3" }, { de: "a3", a: "g1" },
        { de: "g1", a: "a4", txt: "sí" }, { de: "g1", a: "r1", txt: "no" }, { de: "r1", a: "a4" },
        { de: "a4", a: "a5" }, { de: "a5", a: "g2" }, { de: "g2", a: "a6", txt: "sí" }, { de: "g2", a: "r2", txt: "no" },
        { de: "a6", a: "f1" }, { de: "r2", a: "f3" }
      ],
      notas: ["No se rechazan casos: si lo pedido no se puede cumplir, se propone un alcance alternativo y el cliente decide.", "El precio oferta solo se aplica con autorización de Henry.", "La verificación de viabilidad con Teddy o un especialista es propuesta (*)."]
    },
    "M.02": {
      titulo: "Investigación y Desarrollo: desarrollo de cada parte o avance",
      carriles: ["Henry (Gerencia y revisión)", "Responsable del caso (Henry o Teddy)", "Especialista externo"],
      nodos: [
        { id: "i", tipo: "inicio", carril: 0, col: 0, txt: "Caso contratado (M.01)" },
        { id: "a1", tipo: "tarea", carril: 0, col: 1, txt: "Asignar por especialidad y planificar por partes", ref: "M.02.01" },
        { id: "a2", tipo: "tarea", carril: 1, col: 2, txt: "Buscar información y antecedentes", ref: "M.02.02" },
        { id: "g1", tipo: "decision", carril: 0, col: 3, txt: "¿Requiere especialista?" },
        { id: "a3", tipo: "tarea", carril: 2, col: 4, txt: "Elaborar trabajo especializado", ref: "M.02.03" },
        { id: "a4", tipo: "tarea", carril: 1, col: 4, txt: "Metodología y análisis", ref: "M.02.03" },
        { id: "a5", tipo: "tarea", carril: 1, col: 5, txt: "Redacción y formato", ref: "M.02.04" },
        { id: "a6", tipo: "tarea", carril: 0, col: 6, txt: "Revisión técnica", ref: "M.02.05" },
        { id: "a7", tipo: "tarea", carril: 0, col: 7, txt: "Reporte %SIM (Turnitin) e %IA (JustDone)", ref: "M.02.05" },
        { id: "g2", tipo: "decision", carril: 0, col: 8, txt: "¿Cumple?" },
        { id: "a8", tipo: "tarea", carril: 0, col: 9, txt: "Aprobar y enviar el avance (M.07)", ref: "M.07.01" },
        { id: "g3", tipo: "decision", carril: 0, col: 10, txt: "¿Quedan partes?" },
        { id: "a9", tipo: "tarea", carril: 1, col: 11, txt: "Preparar la sustentación", ref: "M.02.06" },
        { id: "f1", tipo: "fin", carril: 0, col: 12, txt: "Cierre en M.07" }
      ],
      flujos: [
        { de: "i", a: "a1" }, { de: "a1", a: "a2" }, { de: "a2", a: "g1" },
        { de: "g1", a: "a3", txt: "sí" }, { de: "g1", a: "a4", txt: "no" }, { de: "a3", a: "a5" }, { de: "a4", a: "a5" },
        { de: "a5", a: "a6" }, { de: "a6", a: "a7" }, { de: "a7", a: "g2" },
        { de: "g2", a: "a8", txt: "sí" }, { de: "g2", a: "a5", txt: "no, corregir" },
        { de: "a8", a: "g3" }, { de: "g3", a: "a9", txt: "no" }, { de: "a9", a: "f1" }, { de: "g3", a: "a2", txt: "sí, siguiente parte" }
      ],
      notas: ["Ingeniería → Henry; química y biología → Teddy; investigaciones descriptivas o correlacionales → cualquiera de los dos.", "Si el trabajo es del especialista, la revisión técnica la hace un revisor competente en la materia (*).", "Los servicios SV-01 y SV-04 tienen 7 partes; SV-02 y SV-03 avanzan por avances; SV-05 son sesiones por horas."]
    },
    "M.07": {
      titulo: "Entrega, cobro por partes, encuestas y cierre",
      carriles: ["Henry (Gerencia)", "Cliente", "Mejora Continua (Johann)"],
      nodos: [
        { id: "i", tipo: "inicio", carril: 0, col: 0, txt: "Avance aprobado (M.02)" },
        { id: "a1", tipo: "tarea", carril: 0, col: 1, txt: "Enviar avance por WhatsApp", ref: "M.07.01" },
        { id: "a2", tipo: "tarea", carril: 1, col: 2, txt: "Revisar el avance" },
        { id: "g1", tipo: "decision", carril: 1, col: 3, txt: "¿Tiene observaciones?" },
        { id: "a3", tipo: "tarea", carril: 0, col: 4, txt: "Registrar ronda y corregir en M.02 (*)", ref: "M.07.02" },
        { id: "a4", tipo: "tarea", carril: 1, col: 4, fila: 1, txt: "Pagar la parte", ref: "M.07.01" },
        { id: "a5", tipo: "tarea", carril: 0, col: 5, fila: 1, txt: "Emitir boleta electrónica", ref: "M.07.01" },
        { id: "g2", tipo: "decision", carril: 0, col: 6, fila: 1, txt: "¿Parte 4 o avance medio?" },
        { id: "a6", tipo: "tarea", carril: 2, col: 7, txt: "Enviar encuesta intermedia (*)", ref: "M.07.03" },
        { id: "g3", tipo: "decision", carril: 0, col: 8, fila: 1, txt: "¿Última parte?" },
        { id: "f2", tipo: "fin", carril: 0, col: 9, fila: 1, txt: "Siguiente parte en M.02" },
        { id: "a7", tipo: "tarea", carril: 1, col: 9, txt: "Dar conformidad (*)", ref: "M.07.04" },
        { id: "a8", tipo: "tarea", carril: 2, col: 10, txt: "Enviar encuesta final (Google Forms)", ref: "M.07.03" },
        { id: "a9", tipo: "tarea", carril: 0, col: 11, txt: "Archivar expediente y pedir referido (*)", ref: "M.07.04" },
        { id: "f1", tipo: "fin", carril: 0, col: 12, txt: "Caso cerrado" }
      ],
      flujos: [
        { de: "i", a: "a1" }, { de: "a1", a: "a2" }, { de: "a2", a: "g1" },
        { de: "g1", a: "a3", txt: "sí" }, { de: "a3", a: "a1", txt: "nueva entrega" }, { de: "g1", a: "a4", txt: "no" },
        { de: "a4", a: "a5" }, { de: "a5", a: "g2" }, { de: "g2", a: "a6", txt: "sí" }, { de: "g2", a: "g3", txt: "no" }, { de: "a6", a: "g3" },
        { de: "g3", a: "f2", txt: "no" }, { de: "g3", a: "a7", txt: "sí" }, { de: "a7", a: "a8" }, { de: "a8", a: "a9" }, { de: "a9", a: "f1" }
      ],
      notas: ["La encuesta intermedia se envía al pagar la parte 4 (Metodología) en SV-01 y SV-04, o al pagar el avance intermedio en los demás servicios (*).", "Si el cliente paga todo al final, la encuesta intermedia se envía al entregar el avance intermedio."]
    },
    "M.01.01": {"titulo": "Captación y primera respuesta", "simulado": true, "carriles": ["Cliente", "Mensajería", "Henry"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Escribe por Facebook, WhatsApp o Instagram"}, {"id": "a1", "tipo": "tarea", "carril": 1, "col": 1, "txt": "Enviar mensaje automático de bienvenida"}, {"id": "a2", "tipo": "tarea", "carril": 0, "col": 2, "txt": "Responder al mensaje"}, {"id": "a3", "tipo": "tarea", "carril": 2, "col": 3, "txt": "Responder en menos de 3 minutos"}, {"id": "a4", "tipo": "tarea", "carril": 2, "col": 4, "txt": "Pedir nombre, carrera, universidad, nivel e investigación"}, {"id": "a5", "tipo": "tarea", "carril": 2, "col": 5, "txt": "Registrar contacto y canal (*)"}, {"id": "g1", "tipo": "decision", "carril": 2, "col": 6, "txt": "¿Acepta reunión?"}, {"id": "f1", "tipo": "fin", "carril": 2, "col": 8, "txt": "Agendar Meet (M.01.02)"}, {"id": "a6", "tipo": "tarea", "carril": 2, "col": 7, "txt": "Seguimiento a los 3 días (*)", "fila": 1}, {"id": "f2", "tipo": "fin", "carril": 2, "col": 8, "txt": "Contacto en seguimiento", "fila": 1}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "a5"}, {"de": "a5", "a": "g1"}, {"de": "g1", "a": "f1", "txt": "sí"}, {"de": "g1", "a": "a6", "txt": "no"}, {"de": "a6", "a": "f2"}], "notas": []},
    "M.01.02": {"titulo": "Diagnóstico en Meet y viabilidad", "simulado": true, "carriles": ["Cliente", "Henry", "Teddy / especialista"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 1, "col": 0, "txt": "Meet agendado"}, {"id": "a1", "tipo": "tarea", "carril": 1, "col": 1, "txt": "Conducir Meet: problemática, plazos, requisitos"}, {"id": "a2", "tipo": "tarea", "carril": 0, "col": 2, "txt": "Compartir avance, observaciones o reportes"}, {"id": "a3", "tipo": "tarea", "carril": 1, "col": 3, "txt": "Llenar ficha de diagnóstico (*)", "ref": "M.01.02"}, {"id": "g1", "tipo": "decision", "carril": 1, "col": 4, "txt": "¿Promete cantidades o tema técnico?"}, {"id": "a4", "tipo": "tarea", "carril": 2, "col": 5, "txt": "Búsqueda preliminar o consulta técnica (*)"}, {"id": "g2", "tipo": "decision", "carril": 1, "col": 6, "txt": "¿Se puede cumplir?"}, {"id": "a5", "tipo": "tarea", "carril": 1, "col": 7, "txt": "Proponer servicio del catálogo"}, {"id": "a6", "tipo": "tarea", "carril": 1, "col": 7, "txt": "Proponer alcance alternativo (*)", "fila": 1}, {"id": "f1", "tipo": "fin", "carril": 1, "col": 8, "txt": "Pasa a contrato (M.01.03)"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "g1"}, {"de": "g1", "a": "a4", "txt": "sí"}, {"de": "g1", "a": "g2", "txt": "no"}, {"de": "a4", "a": "g2"}, {"de": "g2", "a": "a5", "txt": "sí"}, {"de": "g2", "a": "a6", "txt": "no"}, {"de": "a6", "a": "a5"}, {"de": "a5", "a": "f1"}], "notas": ["Nunca se prometen antecedentes, datos o resultados que no se han verificado."]},
    "M.01.03": {"titulo": "Contrato y apertura del caso", "simulado": true, "carriles": ["Henry", "Cliente"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Solución aceptada"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Tomar precio de la lista (oferta: autoriza Henry)"}, {"id": "a2", "tipo": "tarea", "carril": 0, "col": 2, "txt": "Preparar contrato con cotización y cronograma por partes"}, {"id": "a3", "tipo": "tarea", "carril": 0, "col": 3, "txt": "Adjuntar anexo de rondas y cambios (*)"}, {"id": "a4", "tipo": "tarea", "carril": 1, "col": 4, "txt": "Revisar y firmar en PDF"}, {"id": "g1", "tipo": "decision", "carril": 1, "col": 5, "txt": "¿Firma?"}, {"id": "a5", "tipo": "tarea", "carril": 0, "col": 6, "txt": "Crear grupo de WhatsApp y carpeta en Drive (*)"}, {"id": "a6", "tipo": "tarea", "carril": 0, "col": 6, "txt": "Registrar motivo de no cierre (*)", "fila": 1}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 7, "txt": "Caso abierto (M.02)"}, {"id": "f2", "tipo": "fin", "carril": 0, "col": 7, "txt": "Caso no cerrado", "fila": 1}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "g1"}, {"de": "g1", "a": "a5", "txt": "sí"}, {"de": "g1", "a": "a6", "txt": "no"}, {"de": "a5", "a": "f1"}, {"de": "a6", "a": "f2"}], "notas": ["Regla: sin contrato firmado no se crea el grupo ni empieza el trabajo."]},
    "M.02.06": {"titulo": "Preparación para la sustentación", "simulado": true, "carriles": ["Responsable del caso", "Cliente"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 1, "col": 0, "txt": "Fecha de sustentación"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Elaborar diapositivas"}, {"id": "a2", "tipo": "tarea", "carril": 0, "col": 2, "txt": "Guion de exposición por tiempos"}, {"id": "a3", "tipo": "tarea", "carril": 1, "col": 3, "txt": "Simulacro con preguntas probables"}, {"id": "g1", "tipo": "decision", "carril": 0, "col": 4, "txt": "¿Domina su investigación?"}, {"id": "a4", "tipo": "tarea", "carril": 0, "col": 5, "txt": "Reforzar puntos débiles", "fila": 1}, {"id": "a5", "tipo": "tarea", "carril": 1, "col": 6, "txt": "Sustentar"}, {"id": "f1", "tipo": "fin", "carril": 1, "col": 7, "txt": "Observaciones → M.07.02"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "g1"}, {"de": "g1", "a": "a5", "txt": "sí"}, {"de": "g1", "a": "a4", "txt": "no"}, {"de": "a4", "a": "a3", "txt": "otro simulacro"}, {"de": "a5", "a": "f1"}], "notas": []},
    "M.02.01": {"titulo": "Planificación del caso", "simulado": true, "carriles": ["Henry", "Responsable del caso (Henry o Teddy)"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Caso abierto"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Revisar requisitos: guía, norma, %SIM e %IA"}, {"id": "a2", "tipo": "tarea", "carril": 0, "col": 2, "txt": "Asignar responsable por especialidad"}, {"id": "g1", "tipo": "decision", "carril": 0, "col": 3, "txt": "¿Requiere especialista?"}, {"id": "a3", "tipo": "tarea", "carril": 0, "col": 4, "txt": "Solicitar especialista (S.02)", "fila": 1}, {"id": "a4", "tipo": "tarea", "carril": 1, "col": 5, "txt": "Elaborar cronograma por partes con fechas (*)"}, {"id": "a5", "tipo": "tarea", "carril": 0, "col": 6, "txt": "Validar y compartir cronograma en el grupo (*)"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 7, "txt": "Inicio de la parte 1"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "g1"}, {"de": "g1", "a": "a3", "txt": "sí"}, {"de": "g1", "a": "a4", "txt": "no"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "a5"}, {"de": "a5", "a": "f1"}], "notas": ["Ingeniería → Henry; química y biología → Teddy; descriptivas o correlacionales → cualquiera."]},
    "M.02.02": {"titulo": "Búsqueda y gestión de información", "simulado": true, "carriles": ["Responsable del caso", "Henry"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Parte planificada"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Definir palabras clave y criterios"}, {"id": "a2", "tipo": "tarea", "carril": 0, "col": 2, "txt": "Buscar en bases académicas y repositorios"}, {"id": "a3", "tipo": "tarea", "carril": 0, "col": 3, "txt": "Registrar bases, filtros y resultados (*)"}, {"id": "g1", "tipo": "decision", "carril": 0, "col": 4, "txt": "¿Se alcanzó lo comprometido?"}, {"id": "a4", "tipo": "tarea", "carril": 1, "col": 5, "txt": "Informar al cliente y acordar alternativa (*)"}, {"id": "a5", "tipo": "tarea", "carril": 0, "col": 6, "txt": "Verificar que cada fuente exista y sea citable"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 7, "txt": "Fuentes listas"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "g1"}, {"de": "g1", "a": "a5", "txt": "sí"}, {"de": "g1", "a": "a4", "txt": "no"}, {"de": "a4", "a": "a5"}, {"de": "a5", "a": "f1"}], "notas": ["Caso A: si no se encuentra lo prometido, se informa y se acuerda una alternativa; nunca se fabrican antecedentes."]},
    "M.02.03": {"titulo": "Metodología y análisis", "simulado": true, "carriles": ["Responsable del caso", "Cliente", "Especialista externo"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Fuentes listas"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Definir enfoque, diseño, población y muestra"}, {"id": "a2", "tipo": "tarea", "carril": 0, "col": 2, "txt": "Elaborar instrumentos y matriz de consistencia"}, {"id": "g1", "tipo": "decision", "carril": 0, "col": 3, "txt": "¿Hay datos de campo?"}, {"id": "a3", "tipo": "tarea", "carril": 1, "col": 4, "txt": "Aplicar instrumentos y entregar datos (sim)"}, {"id": "a4", "tipo": "tarea", "carril": 0, "col": 5, "txt": "Procesar y analizar datos"}, {"id": "g2", "tipo": "decision", "carril": 0, "col": 6, "txt": "¿Cálculo especializado?"}, {"id": "a5", "tipo": "tarea", "carril": 2, "col": 7, "txt": "Elaborar cálculo o ensayo"}, {"id": "a6", "tipo": "tarea", "carril": 0, "col": 8, "txt": "Interpretar resultados"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 9, "txt": "Resultados listos"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "g1"}, {"de": "g1", "a": "a3", "txt": "sí"}, {"de": "g1", "a": "a4", "txt": "no"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "g2"}, {"de": "g2", "a": "a5", "txt": "sí"}, {"de": "g2", "a": "a6", "txt": "no"}, {"de": "a5", "a": "a6"}, {"de": "a6", "a": "f1"}], "notas": ["Pendiente confirmar quién aplica los instrumentos y qué software se usa."]},
    "M.02.04": {"titulo": "Redacción y formato", "simulado": true, "carriles": ["Responsable del caso"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Resultados o insumos listos"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Redactar la parte según la estructura de la universidad"}, {"id": "a2", "tipo": "tarea", "carril": 0, "col": 2, "txt": "Citar y referenciar con la norma (APA 7 u otra)"}, {"id": "a2b", "tipo": "tarea", "carril": 0, "col": 3, "txt": "Edición de estilo y claridad (sim)"}, {"id": "a3", "tipo": "tarea", "carril": 0, "col": 4, "txt": "Aplicar formato de la guía"}, {"id": "a4", "tipo": "tarea", "carril": 0, "col": 5, "txt": "Guardar versión con código y número (*)"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 6, "txt": "Lista para revisión (M.02.05)"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a2b"}, {"de": "a2b", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "f1"}], "notas": ["La edición de estilo mejora la redacción de un texto que ya tiene sus fuentes citadas y el aporte del cliente; no se usa para modificar el %SIM ni el %IA."]},
    "M.02.05": {"titulo": "Revisión técnica y de similitud", "simulado": true, "carriles": ["Henry", "Revisor competente", "Responsable del caso"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Parte lista"}, {"id": "g0", "tipo": "decision", "carril": 0, "col": 1, "txt": "¿Incluye trabajo técnico?"}, {"id": "a1", "tipo": "tarea", "carril": 1, "col": 2, "txt": "Revisión técnica por revisor competente (*)"}, {"id": "a2", "tipo": "tarea", "carril": 0, "col": 3, "txt": "Revisar contenido, coherencia y citas"}, {"id": "a3", "tipo": "tarea", "carril": 0, "col": 4, "txt": "Reporte %SIM en Turnitin"}, {"id": "a4", "tipo": "tarea", "carril": 0, "col": 5, "txt": "Reporte %IA en JustDone"}, {"id": "g1", "tipo": "decision", "carril": 0, "col": 6, "txt": "¿Cumple los requisitos?"}, {"id": "a5", "tipo": "tarea", "carril": 2, "col": 7, "txt": "Reescribir con aporte propio y citar"}, {"id": "a6", "tipo": "tarea", "carril": 0, "col": 8, "txt": "Archivar reportes y aprobar envío"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 9, "txt": "Enviar (M.07.01)"}], "flujos": [{"de": "i", "a": "g0"}, {"de": "g0", "a": "a1", "txt": "sí"}, {"de": "g0", "a": "a2", "txt": "no"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "g1"}, {"de": "g1", "a": "a6", "txt": "sí"}, {"de": "g1", "a": "a5", "txt": "no"}, {"de": "a5", "a": "a2", "txt": "nueva revisión"}, {"de": "a6", "a": "f1"}], "notas": ["Los reportes se archivan en la carpeta del caso (04 Reportes SIM e IA)."]},
    "M.07.01": {"titulo": "Entregas parciales y cobro", "simulado": true, "carriles": ["Henry", "Cliente", "Finanzas (Henry y contador)"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Parte aprobada"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Enviar avance y reportes por WhatsApp"}, {"id": "a2", "tipo": "tarea", "carril": 1, "col": 2, "txt": "Revisar el avance"}, {"id": "g1", "tipo": "decision", "carril": 1, "col": 3, "txt": "¿Conforme con la parte?"}, {"id": "f2", "tipo": "fin", "carril": 1, "col": 4, "txt": "Observaciones (M.07.02)", "fila": 1}, {"id": "a3", "tipo": "tarea", "carril": 1, "col": 5, "txt": "Pagar la parte"}, {"id": "a4", "tipo": "tarea", "carril": 2, "col": 6, "txt": "Verificar abono en la cuenta"}, {"id": "a5", "tipo": "tarea", "carril": 2, "col": 7, "txt": "Emitir boleta electrónica"}, {"id": "a6", "tipo": "tarea", "carril": 2, "col": 8, "txt": "Registrar ingreso del caso"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 9, "txt": "Parte cerrada"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "g1"}, {"de": "g1", "a": "a3", "txt": "sí"}, {"de": "g1", "a": "f2", "txt": "no"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "a5"}, {"de": "a5", "a": "a6"}, {"de": "a6", "a": "f1"}], "notas": ["Pendiente confirmar si el cliente paga antes o después de recibir cada parte (sim)."]},
    "M.07.02": {"titulo": "Observaciones y correcciones", "simulado": true, "carriles": ["Cliente", "Henry", "Responsable del caso"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Envía observaciones"}, {"id": "a1", "tipo": "tarea", "carril": 1, "col": 1, "txt": "Registrar ronda N y observaciones (*)"}, {"id": "g1", "tipo": "decision", "carril": 1, "col": 2, "txt": "¿Dentro de lo acordado?"}, {"id": "a2", "tipo": "tarea", "carril": 1, "col": 3, "txt": "Acordar costo o alcance adicional (*)", "fila": 1}, {"id": "a3", "tipo": "tarea", "carril": 2, "col": 4, "txt": "Corregir la parte"}, {"id": "a4", "tipo": "tarea", "carril": 1, "col": 5, "txt": "Revisar corrección (M.02.05)"}, {"id": "f1", "tipo": "fin", "carril": 1, "col": 6, "txt": "Nueva entrega (M.07.01)"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "g1"}, {"de": "g1", "a": "a3", "txt": "sí"}, {"de": "g1", "a": "a2", "txt": "no"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "f1"}], "notas": ["Incluye observaciones del asesor o del jurado antes y después de la sustentación, dentro del límite del anexo (*)."]},
    "M.07.03": {"titulo": "Satisfacción del cliente", "simulado": true, "carriles": ["Henry", "Cliente", "Calidad (Johann)"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Pago de la parte 4 o del avance medio"}, {"id": "a1", "tipo": "tarea", "carril": 2, "col": 1, "txt": "Enviar encuesta intermedia (Forms)"}, {"id": "g1", "tipo": "decision", "carril": 1, "col": 2, "txt": "¿Responde en 48 horas?"}, {"id": "a2", "tipo": "tarea", "carril": 2, "col": 3, "txt": "Recordatorio por el grupo (*)", "fila": 1}, {"id": "a3", "tipo": "tarea", "carril": 2, "col": 4, "txt": "Registrar respuestas"}, {"id": "g2", "tipo": "decision", "carril": 2, "col": 5, "txt": "¿Puntaje bajo (3 o menos)?"}, {"id": "a4", "tipo": "tarea", "carril": 0, "col": 6, "txt": "Llamar al cliente y acordar acción"}, {"id": "a5", "tipo": "tarea", "carril": 2, "col": 7, "txt": "Registrar acción (E.02.04)"}, {"id": "f1", "tipo": "fin", "carril": 2, "col": 8, "txt": "Encuesta cerrada"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "g1"}, {"de": "g1", "a": "a3", "txt": "sí"}, {"de": "g1", "a": "a2", "txt": "no"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "g2"}, {"de": "g2", "a": "a4", "txt": "sí"}, {"de": "g2", "a": "f1", "txt": "no"}, {"de": "a4", "a": "a5"}, {"de": "a5", "a": "f1"}], "notas": ["La encuesta final (M.07.04) sigue el mismo flujo."]},
    "M.07.04": {"titulo": "Conformidad y cierre", "simulado": true, "carriles": ["Cliente", "Henry", "Calidad (Johann)"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Sustenta o hace la entrega final"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Dar conformidad por escrito (*)"}, {"id": "a2", "tipo": "tarea", "carril": 2, "col": 2, "txt": "Enviar encuesta final"}, {"id": "a3", "tipo": "tarea", "carril": 1, "col": 3, "txt": "Confirmar pagos completos"}, {"id": "a4", "tipo": "tarea", "carril": 1, "col": 4, "txt": "Archivar expediente y reportes (*)"}, {"id": "a5", "tipo": "tarea", "carril": 2, "col": 5, "txt": "Registrar lecciones aprendidas (*)"}, {"id": "a6", "tipo": "tarea", "carril": 1, "col": 6, "txt": "Pedir referido o testimonio (*)"}, {"id": "f1", "tipo": "fin", "carril": 1, "col": 7, "txt": "Caso cerrado"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "a5"}, {"de": "a5", "a": "a6"}, {"de": "a6", "a": "f1"}], "notas": []},
    "E.01": {"titulo": "Planeamiento y reunión mensual de calidad y planeamiento", "simulado": true, "carriles": ["Henry (Gerencia)", "Calidad (Johann)", "Equipo (Teddy, Jeferson)"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Inicio del año"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Fijar objetivos y metas anuales", "ref": "E.01.01"}, {"id": "a2", "tipo": "tarea", "carril": 1, "col": 2, "txt": "Traducir metas a indicadores por proceso"}, {"id": "a3", "tipo": "tarea", "carril": 1, "col": 3, "txt": "Preparar tablero mensual", "ref": "E.02.05"}, {"id": "a4", "tipo": "tarea", "carril": 0, "col": 4, "txt": "Reunión mensual de calidad y planeamiento", "ref": "E.01.02"}, {"id": "a5", "tipo": "tarea", "carril": 2, "col": 5, "txt": "Proponer mejoras y reportar avances"}, {"id": "a6", "tipo": "tarea", "carril": 1, "col": 6, "txt": "Acta con acuerdos, responsables y fechas", "ref": "E.01.02"}, {"id": "a7", "tipo": "tarea", "carril": 1, "col": 7, "txt": "Seguimiento quincenal de acuerdos", "ref": "E.01.03"}, {"id": "g1", "tipo": "decision", "carril": 0, "col": 8, "txt": "¿Fin del año?"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 9, "txt": "Evaluar objetivos del año"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "a5"}, {"de": "a5", "a": "a6"}, {"de": "a6", "a": "a7"}, {"de": "a7", "a": "g1"}, {"de": "g1", "a": "f1", "txt": "sí"}, {"de": "g1", "a": "a3", "txt": "no, siguiente mes"}], "notas": ["Participan Henry y Johann; Teddy y Jeferson presentan avances y propuestas de sus procesos (sim)."]},
    "E.02": {"titulo": "Ciclo mensual de calidad", "simulado": true, "carriles": ["Calidad (Johann)", "Henry", "Responsable del proceso"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Inicio del mes"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Muestreo de avances con lista de verificación", "ref": "E.02.02"}, {"id": "a2", "tipo": "tarea", "carril": 0, "col": 2, "txt": "Revisar encuestas y reclamos", "ref": "E.02.03"}, {"id": "g1", "tipo": "decision", "carril": 0, "col": 3, "txt": "¿Hay no conformidades?"}, {"id": "a3", "tipo": "tarea", "carril": 2, "col": 4, "txt": "Analizar causa y proponer acción", "ref": "E.02.04"}, {"id": "a4", "tipo": "tarea", "carril": 1, "col": 5, "txt": "Aprobar acción"}, {"id": "a5", "tipo": "tarea", "carril": 2, "col": 6, "txt": "Ejecutar acción"}, {"id": "a6", "tipo": "tarea", "carril": 0, "col": 7, "txt": "Verificar eficacia", "ref": "E.02.04"}, {"id": "a7", "tipo": "tarea", "carril": 0, "col": 8, "txt": "Calcular indicadores y semáforo", "ref": "E.02.05"}, {"id": "a8", "tipo": "tarea", "carril": 1, "col": 9, "txt": "Reunión mensual de calidad y planeamiento", "ref": "E.01.02"}, {"id": "a9", "tipo": "tarea", "carril": 0, "col": 10, "txt": "Actualizar documentos y lecciones", "ref": "E.02.01"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 11, "txt": "Ciclo cerrado"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "g1"}, {"de": "g1", "a": "a3", "txt": "sí"}, {"de": "g1", "a": "a7", "txt": "no"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "a5"}, {"de": "a5", "a": "a6"}, {"de": "a6", "a": "a7"}, {"de": "a7", "a": "a8"}, {"de": "a8", "a": "a9"}, {"de": "a9", "a": "f1"}], "notas": []},
    "E.03": {"titulo": "Campañas y captación", "simulado": true, "carriles": ["Jeferson (Marketing)", "Henry", "Cliente potencial"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Plan mensual de contenidos"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Diseñar piezas y campaña", "ref": "E.03.01"}, {"id": "a2", "tipo": "tarea", "carril": 1, "col": 2, "txt": "Aprobar pieza y presupuesto de Ads (*)"}, {"id": "a3", "tipo": "tarea", "carril": 0, "col": 3, "txt": "Publicar y lanzar Ads en Facebook e Instagram", "ref": "E.03.02"}, {"id": "a4", "tipo": "tarea", "carril": 2, "col": 4, "txt": "Escribe por Facebook, WhatsApp o Instagram"}, {"id": "a5", "tipo": "tarea", "carril": 1, "col": 5, "txt": "Atender (M.01.01)", "ref": "M.01.01"}, {"id": "a6", "tipo": "tarea", "carril": 0, "col": 6, "txt": "Medir contactos y costo por canal (*)", "ref": "E.03.02"}, {"id": "a7", "tipo": "tarea", "carril": 0, "col": 7, "txt": "Informe mensual de campañas (*)"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 8, "txt": "Ajustar el plan siguiente"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "a5"}, {"de": "a5", "a": "a6"}, {"de": "a6", "a": "a7"}, {"de": "a7", "a": "f1"}], "notas": []},
    "S.01": {"titulo": "Cobros, pagos y cierre mensual", "simulado": true, "carriles": ["Henry", "Contador externo", "Cliente / especialista"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 2, "col": 0, "txt": "Pago de una parte"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Verificar abono en la cuenta de la empresa", "ref": "S.01.01"}, {"id": "a2", "tipo": "tarea", "carril": 0, "col": 2, "txt": "Emitir boleta electrónica", "ref": "S.01.01"}, {"id": "a3", "tipo": "tarea", "carril": 0, "col": 3, "txt": "Registrar ingreso por caso", "ref": "S.01.03"}, {"id": "a4", "tipo": "tarea", "carril": 0, "col": 4, "txt": "Pagar especialista contra trabajo aprobado", "ref": "S.01.02"}, {"id": "a5", "tipo": "tarea", "carril": 0, "col": 5, "txt": "Registrar egreso por caso", "ref": "S.01.03"}, {"id": "a6", "tipo": "tarea", "carril": 0, "col": 6, "txt": "Calcular margen del caso al cierre (*)", "ref": "S.01.03"}, {"id": "a7", "tipo": "tarea", "carril": 1, "col": 7, "txt": "Recibir comprobantes del mes"}, {"id": "a8", "tipo": "tarea", "carril": 1, "col": 8, "txt": "Declarar impuestos", "ref": "S.01.04"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 9, "txt": "Mes cerrado"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "a5"}, {"de": "a5", "a": "a6"}, {"de": "a6", "a": "a7"}, {"de": "a7", "a": "a8"}, {"de": "a8", "a": "f1"}], "notas": []},
    "S.02": {"titulo": "Selección y evaluación de especialistas", "simulado": true, "carriles": ["Henry", "Teddy", "Especialista"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Caso requiere especialista"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Definir perfil, alcance, plazo y entregable (*)", "ref": "S.02.02"}, {"id": "a2", "tipo": "tarea", "carril": 1, "col": 2, "txt": "Buscar candidatos: contactos, aliados, publicidad", "ref": "S.02.02"}, {"id": "a3", "tipo": "tarea", "carril": 0, "col": 3, "txt": "Elegir especialista"}, {"id": "a4", "tipo": "tarea", "carril": 0, "col": 4, "txt": "Acuerdo escrito de alcance, plazo y pago (*)", "ref": "S.04.02"}, {"id": "a5", "tipo": "tarea", "carril": 2, "col": 5, "txt": "Elaborar el trabajo"}, {"id": "a6", "tipo": "tarea", "carril": 0, "col": 6, "txt": "Revisar entregable (revisor competente)", "ref": "S.02.03"}, {"id": "g1", "tipo": "decision", "carril": 0, "col": 7, "txt": "¿Conforme?"}, {"id": "a7", "tipo": "tarea", "carril": 0, "col": 8, "txt": "Pagar (S.01)", "ref": "S.01.02"}, {"id": "a8", "tipo": "tarea", "carril": 0, "col": 9, "txt": "Evaluar al especialista (*)", "ref": "S.02.03"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 10, "txt": "Especialista evaluado"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "a5"}, {"de": "a5", "a": "a6"}, {"de": "a6", "a": "g1"}, {"de": "g1", "a": "a7", "txt": "sí"}, {"de": "g1", "a": "a5", "txt": "no, corregir"}, {"de": "a7", "a": "a8"}, {"de": "a8", "a": "f1"}], "notas": []},
    "S.03": {"titulo": "Expediente del caso", "simulado": true, "carriles": ["Henry", "Responsable del caso", "Calidad (Johann)"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Caso abierto"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Crear carpeta con estructura estándar (*)", "ref": "S.03.02"}, {"id": "a2", "tipo": "tarea", "carril": 1, "col": 2, "txt": "Guardar versiones: CÓDIGO_Parte_vN (*)", "ref": "S.03.02"}, {"id": "a3", "tipo": "tarea", "carril": 1, "col": 3, "txt": "Guardar reportes de Turnitin y JustDone"}, {"id": "a4", "tipo": "tarea", "carril": 2, "col": 4, "txt": "Verificar expediente (muestreo mensual)", "ref": "E.02.02"}, {"id": "a5", "tipo": "tarea", "carril": 0, "col": 5, "txt": "Mover a «Casos cerrados»"}, {"id": "a6", "tipo": "tarea", "carril": 0, "col": 6, "txt": "Respaldo mensual del Drive (*)", "ref": "S.03.03"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 7, "txt": "Expediente archivado"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "a5"}, {"de": "a5", "a": "a6"}, {"de": "a6", "a": "f1"}], "notas": []},
    "S.04": {"titulo": "Contratos y acuerdos", "simulado": true, "carriles": ["Henry", "Cliente / especialista", "Asesor legal externo"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Necesidad de un acuerdo"}, {"id": "g1", "tipo": "decision", "carril": 0, "col": 1, "txt": "¿Cliente o especialista?"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 2, "txt": "Contrato general con cotización, cronograma y anexo", "ref": "S.04.01"}, {"id": "a2", "tipo": "tarea", "carril": 0, "col": 2, "txt": "Acuerdo de locación con especialista (*)", "ref": "S.04.02", "fila": 1}, {"id": "a3", "tipo": "tarea", "carril": 1, "col": 3, "txt": "Firmar en PDF"}, {"id": "a4", "tipo": "tarea", "carril": 0, "col": 4, "txt": "Archivar en la carpeta del caso", "ref": "S.03.02"}, {"id": "a5", "tipo": "tarea", "carril": 2, "col": 5, "txt": "Revisión anual de modelos (*)", "ref": "S.04.03"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 6, "txt": "Acuerdo vigente"}], "flujos": [{"de": "i", "a": "g1"}, {"de": "g1", "a": "a1", "txt": "cliente"}, {"de": "g1", "a": "a2", "txt": "especialista"}, {"de": "a1", "a": "a3"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "a5"}, {"de": "a5", "a": "f1"}], "notas": []},
    "E.04": {"titulo": "Ciclo de una alianza", "simulado": true, "carriles": ["Teddy", "Henry", "Aliado"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Identificar aliado potencial"}, {"id": "a1", "tipo": "tarea", "carril": 1, "col": 1, "txt": "Evaluar capacidad y reputación (*)", "ref": "E.04.01"}, {"id": "a2", "tipo": "tarea", "carril": 1, "col": 2, "txt": "Acordar alcance y pagos por escrito (*)", "ref": "E.04.02"}, {"id": "a3", "tipo": "tarea", "carril": 2, "col": 3, "txt": "Ejecutar el proyecto conjunto"}, {"id": "a4", "tipo": "tarea", "carril": 1, "col": 4, "txt": "Evaluar desempeño al cierre (*)", "ref": "E.04.03"}, {"id": "f1", "tipo": "fin", "carril": 1, "col": 5, "txt": "Aliado evaluado"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "f1"}], "notas": []},
    "M.05": {"titulo": "Apoyo a un proyecto de aliado", "simulado": true, "carriles": ["Henry", "Aliado"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 1, "col": 0, "txt": "Proyecto del aliado"}, {"id": "a1", "tipo": "tarea", "carril": 0, "col": 1, "txt": "Acordar el alcance del apoyo (*)", "ref": "M.05.02"}, {"id": "a2", "tipo": "tarea", "carril": 0, "col": 2, "txt": "Apoyo técnico en campo o gabinete", "ref": "M.05.02"}, {"id": "a3", "tipo": "tarea", "carril": 1, "col": 3, "txt": "Dar conformidad", "ref": "M.05.03"}, {"id": "a4", "tipo": "tarea", "carril": 0, "col": 4, "txt": "Registrar proyecto y lecciones", "ref": "M.05.03"}, {"id": "f1", "tipo": "fin", "carril": 0, "col": 5, "txt": "Apoyo cerrado"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "a4"}, {"de": "a4", "a": "f1"}], "notas": []},
    "S.05": {"titulo": "Atención de incidencias de herramientas", "simulado": true, "carriles": ["Usuarios", "Responsable de herramientas"], "nodos": [{"id": "i", "tipo": "inicio", "carril": 0, "col": 0, "txt": "Falla o necesidad"}, {"id": "a1", "tipo": "tarea", "carril": 1, "col": 1, "txt": "Registrar incidencia (*)", "ref": "S.05.01"}, {"id": "a2", "tipo": "tarea", "carril": 1, "col": 2, "txt": "Resolver o escalar al proveedor", "ref": "S.05.01"}, {"id": "a3", "tipo": "tarea", "carril": 0, "col": 3, "txt": "Confirmar funcionamiento"}, {"id": "f1", "tipo": "fin", "carril": 1, "col": 4, "txt": "Incidencia cerrada"}], "flujos": [{"de": "i", "a": "a1"}, {"de": "a1", "a": "a2"}, {"de": "a2", "a": "a3"}, {"de": "a3", "a": "f1"}], "notas": []}
  },

  /* Documentos y formatos */
  documentos: [
    { cod: "FO-E01-01", nombre: "Acta de reunión mensual de calidad y planeamiento", proceso: "E.01", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-E01-02", nombre: "Plan anual", proceso: "E.01", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-E02-01", nombre: "Lista de verificación de avances", proceso: "E.02", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-E02-02", nombre: "Registro de no conformidades y acciones", proceso: "E.02", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-E02-03", nombre: "Registro de reclamos", proceso: "E.02", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-E02-04", nombre: "Registro de lecciones aprendidas", proceso: "E.02", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-S02-01", nombre: "Acuerdo con especialista", proceso: "S.02", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-S03-01", nombre: "Estructura de carpeta del caso", proceso: "S.03", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "DO-E02-01", nombre: "Mapa de procesos nivel 0", proceso: "E.02", tipo: "Documento", estado: "Validado", existe: true },
    { cod: "FC-M01", nombre: "Ficha técnica M.01 Gestión comercial", proceso: "M.01", tipo: "Ficha", estado: "Borrador", existe: true },
    { cod: "FC-M02", nombre: "Ficha técnica M.02 Investigación y Desarrollo", proceso: "M.02", tipo: "Ficha", estado: "Borrador", existe: true },
    { cod: "FC-M07", nombre: "Ficha técnica M.07 Entrega, cierre y satisfacción", proceso: "M.07", tipo: "Ficha", estado: "Borrador", existe: true },
    { cod: "DO-M01-01", nombre: "Lista de servicios y precios (normal y oferta)", proceso: "M.01", tipo: "Documento", estado: "Existe, por revisar", existe: true },
    { cod: "FO-M01-01", nombre: "Registro de contactos", proceso: "M.01", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-M01-02", nombre: "Ficha de diagnóstico del caso", proceso: "M.01", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-M01-03", nombre: "Anexo de condiciones del contrato (partes, rondas, cambios)", proceso: "M.01", tipo: "Formato", estado: "Por elaborar", existe: false },
    { cod: "FO-M01-04", nombre: "Mensaje automático de bienvenida", proceso: "M.01", tipo: "Formato", estado: "Existe, por revisar", existe: true },
    { cod: "CT-S04-01", nombre: "Contrato general con clientes (incluye cotización y cronograma; firma en PDF)", proceso: "S.04", tipo: "Contrato", estado: "Existe, por revisar", existe: true },
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
    { version: "0.3", fecha: "22/11/2026", cambio: "Portafolio web con modelo UNHEVAL: niveles 0-1-2, fichas técnicas, fichas de indicador, interrelación y documentos.", estado: "Borrador" },
    { version: "0.4", fecha: "22/11/2026", cambio: "Catálogo de 5 servicios de M.02 con lo que incluye, pagos por partes y reportes de %SIM e %IA; indicadores M.02.I05 y M.02.I06.", estado: "Borrador" },
    { version: "0.5", fecha: "22/11/2026", cambio: "Diagramas de flujo con carriles (estilo BPMN) de M.01, M.02 y M.07; precios fuera de los procesos; encuesta intermedia en la parte 4; herramientas Turnitin y JustDone.", estado: "Borrador" },
    { version: "0.6", fecha: "24/11/2026", cambio: "Respuestas de Henry: canales, primera respuesta, datos previos, Meet, contrato con cotización y cronograma en PDF, no se rechazan casos; asignación de casos por especialidad; indicador M.01.I05.", estado: "Borrador" },
    { version: "0.7", fecha: "24/11/2026", cambio: "Simulación completa: 12 diagramas de nivel 1 (M.01, M.02, M.07), diagramas de E.01, E.02, E.03, S.01–S.05, E.04 y M.05; E.02 rediseñado (control de documentos, aseguramiento, satisfacción y reclamos, no conformidades, tablero, mejora continua); reunión mensual de calidad y planeamiento; fichas de arranque de M.03, M.04, M.06 y M.08.", estado: "Borrador (simulado, por validar)" },
    { version: "0.8", fecha: "24/11/2026", cambio: "M.02 detallado: tareas, entregable y control de cada una de las 7 partes; cierre de cada parte con Turnitin y JustDone; nuevo subproceso M.02.06 Preparación para la sustentación.", estado: "Borrador (simulado, por validar)" },
    { version: "0.9", fecha: "24/11/2026", cambio: "M.02.04: paso de edición de estilo y claridad (herramienta por definir).", estado: "Borrador (simulado, por validar)" }
  ]
};
