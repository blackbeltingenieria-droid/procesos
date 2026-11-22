/* BLACKBELT · Portafolio de procesos — navegación y vistas.
   No es necesario editar este archivo para cambiar contenidos: use datos.js. */
(function () {
  "use strict";
  const D = window.BB;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const prop = (t) => esc(t).replace(/\(\*\)/g, '<span class="prop" title="Propuesto: hoy no se realiza">propuesto</span>');

  /* ---------- Índices ---------- */
  const P = {}, N1 = {}, I = {};
  D.procesos.forEach((p) => { P[p.cod] = p; (p.nivel1 || []).forEach((n) => (N1[n.cod] = { n, p })); });
  D.indicadores.forEach((i) => (I[i.cod] = i));
  const orden = D.procesos.map((p) => p.cod);
  const entrantes = (cod) => D.procesos.flatMap((p) => (p.salidas || []).filter((s) => s.a === cod).map((s) => ({ de: p.cod, que: s.que })));

  /* ---------- Componentes ---------- */
  const est = (k) => { const e = D.estados[k]; return e ? `<span class="badge ${e.cls}">${esc(e.txt)}</span>` : ""; };
  const docb = (t) => `<span class="badge doc doc-${String(t).split(" ")[0].toLowerCase().normalize("NFD").replace(/[^a-z]/g, "")}">${esc(t)}</span>`;
  const link = (cod, txt) => {
    if (P[cod]) return `<a href="#/p/${cod}">${esc(txt ?? cod + " " + P[cod].nombre)}</a>`;
    if (N1[cod]) return `<a href="#/p/${cod}">${esc(txt ?? cod + " " + N1[cod].n.nombre)}</a>`;
    if (I[cod]) return `<a href="#/i/${cod}">${esc(txt ?? cod + " " + I[cod].nombre)}</a>`;
    return esc(txt ?? cod);
  };
  const autolink = (t) => prop(t).replace(/\b([EMS]\.0\d(?:\.0\d)?)(?!\.P|\.I|\d)/g, (m) => (P[m] || N1[m] ? `<a href="#/p/${m}">${m}</a>` : m));
  const lista = (arr) => (arr && arr.length ? `<ul>${arr.map((x) => `<li>${autolink(x)}</li>`).join("")}</ul>` : `<p class="muted">Por levantar.</p>`);
  const color = (p) => (D.unidades[p.cod] ? ` style="--u:${D.unidades[p.cod]}"` : "");
  const migas = (arr) => `<nav class="migas" aria-label="Ruta">${[["#/", "Inicio"], ...arr].map(([h, t], k, a) => (k < a.length - 1 ? `<a href="${h}">${esc(t)}</a>` : `<span aria-current="page">${esc(t)}</span>`)).join('<span class="sep">›</span>')}</nav>`;

  /* ---------- Vistas ---------- */
  function vInicio() {
    const n = D.procesos.length, ops = D.procesos.filter((p) => p.estado === "op").length;
    const n1 = Object.keys(N1).length;
    const tarjetas = [
      ["#/mapa", "Mapa de procesos", "Nivel 0: los 17 procesos y cómo se encadenan. Haga clic en cualquier proceso.", "mapa"],
      ["#/inventario", "Inventario", `Niveles 0, 1 y 2 con su codificación (${n1} subprocesos).`, "arbol"],
      ["#/indicadores", "Tablero de indicadores", `${D.indicadores.length} indicadores con fórmula, fuente y meta.`, "kpi"],
      ["#/interrelacion", "Interrelación", "Qué entrega cada proceso a los demás.", "red"],
      ["#/servicios", "Servicios de investigación", "Catálogo de M.02 y subprocesos que aplica cada servicio.", "lupa"],
      ["#/documentos", "Documentos y formatos", "Fichas, formatos y contratos con su estado.", "doc"],
      ["#/plan", "Plan de estandarización", "Fases, avance y control de cambios.", "plan"]
    ];
    return `<section class="hero">
      <img src="assets/img/logo-oscuro.png" alt="BLACKBELT" class="hero-logo">
      <div><p class="eyebrow">${esc(D.meta.empresa)} · RUC ${esc(D.meta.ruc)}</p>
      <h1>Portafolio de procesos</h1>
      <p class="lead">${esc(D.meta.nota)}</p>
      <div class="stats"><div><b>${n}</b><span>procesos nivel 0</span></div><div><b>${n1}</b><span>subprocesos nivel 1</span></div><div><b>${D.indicadores.length}</b><span>indicadores</span></div><div><b>${ops}</b><span>operativos hoy</span></div></div>
      <a class="btn" href="#/mapa">Ver el mapa de procesos</a></div></section>
      <section class="grid-cards">${tarjetas.map(([h, t, d, ic]) => `<a class="card nav-card" href="${h}"><span class="ic ic-${ic}" aria-hidden="true"></span><h3>${t}</h3><p>${d}</p></a>`).join("")}</section>
      <section class="panel"><h2>Cómo leer este portafolio</h2>
      <ol class="guia"><li><b>Mapa:</b> los procesos estratégicos orientan, los misionales entregan el servicio y los de soporte dan recursos.</li>
      <li><b>Ficha técnica (nivel 0):</b> objetivo, alcance, dueño, tabla proveedores → entradas → subprocesos → productos → clientes, requisitos, controles, recursos e indicadores.</li>
      <li><b>Subprocesos (nivel 1) y actividades (nivel 2):</b> quién hace qué, con qué registros.</li>
      <li><b>Ficha de indicador:</b> fórmula, fuente, frecuencia, responsable y meta en semáforo.</li></ol>
      <p class="muted">Marcas: <span class="prop">propuesto</span> = aún no se realiza. Estados operativos: ${Object.keys(D.estados).map(est).join(" ")}</p></section>`;
  }

  function pcard(p) {
    const ik = (p.indicadores || []).map((c) => I[c]).find((i) => i && i.clave) || I[(p.indicadores || [])[0]];
    return `<a class="pcard t-${p.tipo}${p.prioridad ? " prio" : ""}${p.unidad ? " unidad" : ""}${p.aparte ? " aparte" : ""}" href="#/p/${p.cod}"${color(p)}>
      <span class="pc-cod">${p.cod}</span><span class="pc-nom">${esc(p.nombre)}</span>
      <span class="pc-meta">${est(p.estado)}</span>
      ${ik ? `<span class="pc-kpi" title="Indicador clave">KPI: ${esc(ik.nombre)}</span>` : ""}</a>`;
  }

  function vMapa() {
    const by = (t) => D.procesos.filter((p) => p.tipo === t);
    const M = (c) => pcard(P[c]);
    return `${migas([["#/mapa", "Mapa de procesos"]])}
      <div class="titulo"><h1>Mapa de procesos · nivel 0</h1>${docb(D.meta.estadoMapa)}</div>
      <p class="lead">Haga clic en un proceso para abrir su ficha técnica. M.01, M.02 y M.07 forman la cadena de investigación, prioridad de la fase 1.</p>
      <div class="mapa">
        <div class="lado entrada"><b>Necesidades y requisitos</b><span>de clientes y partes interesadas</span></div>
        <div class="centro">
          <section class="banda b-E"><h2>Procesos estratégicos</h2><div class="fila f4">${by("E").map(pcard).join("")}</div></section>
          <div class="flecha-v" aria-hidden="true">▼ orientan</div>
          <section class="banda b-M"><h2>Procesos misionales · cadena de valor</h2>
            <div class="cadena">${M("M.01")}<div class="conector" aria-hidden="true">→</div>
              <div class="unidades"><p class="mini">Unidades de negocio</p>${["M.02", "M.03", "M.04", "M.05", "M.06"].map(M).join("")}</div>
              <div class="conector" aria-hidden="true">→</div>${M("M.07")}</div>
            <div class="linea-aparte">${M("M.08")}<p class="mini">Línea aparte de las 5 unidades · opera bajo la misma empresa</p></div>
          </section>
          <div class="flecha-v" aria-hidden="true">▲ dan soporte</div>
          <section class="banda b-S"><h2>Procesos de soporte</h2><div class="fila f5">${by("S").map(pcard).join("")}</div></section>
        </div>
        <div class="lado salida"><b>Satisfacción</b><span>servicios entregados conforme y resultados medidos</span></div>
      </div>
      <p class="muted">Leyenda: ${Object.keys(D.estados).map(est).join(" ")} · Borde dorado: prioridad fase 1.</p>`;
  }

  function vInventario() {
    const filas = D.procesos.map((p) => `<details class="inv"${p.prioridad ? " open" : ""}><summary><span class="cod">${p.cod}</span> ${esc(p.nombre)} ${est(p.estado)} <a class="ver" href="#/p/${p.cod}">ficha →</a></summary>
      <table class="tabla"><thead><tr><th>Cód.</th><th>Nivel 1</th><th>Cód.</th><th>Nivel 2</th></tr></thead><tbody>
      ${(p.nivel1 || []).map((n) => { const n2 = n.nivel2 && n.nivel2.length ? n.nivel2 : [{ cod: "—", nombre: "Por levantar" }];
        return n2.map((a, k) => `<tr>${k === 0 ? `<td rowspan="${n2.length}"><a href="#/p/${n.cod}">${n.cod}</a></td><td rowspan="${n2.length}">${esc(n.nombre)}</td>` : ""}<td class="cod">${esc(a.cod)}</td><td>${prop(a.nombre)}</td></tr>`).join(""); }).join("")}
      </tbody></table></details>`).join("");
    return `${migas([["#/inventario", "Inventario"]])}<h1>Inventario de procesos</h1>
      <p class="lead">Niveles 0, 1 y 2 con codificación tipo UNHEVAL. Use el buscador superior para filtrar.</p>
      <div class="acciones"><button class="btn sec" data-abrir="1">Expandir todo</button> <button class="btn sec" data-abrir="0">Contraer todo</button></div>${filas}`;
  }

  function vFicha(cod) {
    if (N1[cod]) return vFichaN1(cod);
    const p = P[cod];
    if (!p) return vNoEncontrado();
    const k = orden.indexOf(cod), ant = orden[k - 1], sig = orden[k + 1];
    const r = p.recursos || {};
    const ent = entrantes(cod);
    return `${migas([["#/mapa", "Mapa"], ["#/p/" + cod, cod]])}
    <article class="ficha"${color(p)}>
      <header class="ficha-head">
        <img src="assets/img/logo-claro.png" alt="" class="ficha-logo">
        <div class="fh-t"><p class="eyebrow">Ficha técnica del proceso · nivel 0</p><h1>${p.cod} ${esc(p.nombre)}</h1></div>
        <table class="fh-meta"><tr><th>Clasificación</th><td>${D.tipos[p.tipo].nombre}</td></tr><tr><th>Código</th><td>FC-${p.cod.replace(".", "")}</td></tr><tr><th>Versión</th><td>${esc(p.version)}</td></tr><tr><th>Estado</th><td>${docb(p.doc)}</td></tr></table>
      </header>
      <table class="tabla kv"><tr><th>Objetivo</th><td>${esc(p.objetivo)}</td></tr><tr><th>Alcance</th><td>${esc(p.alcance)}</td></tr>
        <tr><th>Inicio · fin</th><td>${esc(p.inicio)} → ${esc(p.fin)}</td></tr><tr><th>Dueño del proceso</th><td>${esc(p.dueno)}</td></tr><tr><th>Situación actual</th><td>${est(p.estado)} ${esc(p.situacion)}</td></tr></table>

      <h2>Descripción del proceso</h2>
      <div class="scroll"><table class="tabla sipoc"><thead><tr><th>Proveedores</th><th>Entradas</th><th>Procesos nivel 1</th><th>Productos</th><th>Clientes</th></tr></thead><tbody>
      ${(p.sipoc || []).map((s) => `<tr><td>${autolink(s.prov)}</td><td>${prop(s.ent)}</td><td class="sub">${autolink(s.sub)}</td><td>${prop(s.prod)}</td><td>${autolink(s.cli)}</td></tr>`).join("")}</tbody></table></div>

      <h2>Procesos de nivel 1</h2>
      <div class="n1-grid">${(p.nivel1 || []).map((n) => `<a class="n1" href="#/p/${n.cod}"><span class="cod">${n.cod}</span><b>${esc(n.nombre)}</b><span>${esc(n.objetivo || "")}</span><span class="cnt">${(n.nivel2 || []).length || "—"} actividades</span></a>`).join("")}</div>

      <div class="dos">
        <section><h2>Requisitos legales</h2>${lista(p.requisitos)}</section>
        <section><h2>Controles</h2>${lista(p.controles)}</section>
      </div>
      <h2>Recursos</h2>
      <table class="tabla kv"><tr><th>Humanos</th><td>${esc((r.humanos || []).join(" · ") || "Por definir")}</td></tr><tr><th>Sistemas</th><td>${esc((r.sistemas || []).join(" · ") || "Por definir")}</td></tr><tr><th>Instalaciones</th><td>${esc((r.instalaciones || []).join(" · ") || "Por definir")}</td></tr><tr><th>Equipos</th><td>${esc((r.equipos || []).join(" · ") || "Por definir")}</td></tr></table>

      <h2>Indicadores de desempeño</h2>
      <div class="kpis">${(p.indicadores || []).map((c) => I[c]).filter(Boolean).map((i) => `<a class="kpi${i.clave ? " clave" : ""}" href="#/i/${i.cod}"><span class="cod">${i.cod}</span><b>${esc(i.nombre)}</b><span>${esc(i.formula)}</span>${i.clave ? '<span class="tag">Clave</span>' : ""}</a>`).join("") || '<p class="muted">Por definir.</p>'}</div>

      <h2>Interrelación</h2>
      <div class="dos"><section><h3>Recibe de</h3>${ent.length ? `<ul>${ent.map((e) => `<li>${link(e.de)}: ${esc(e.que)}</li>`).join("")}</ul>` : '<p class="muted">Clientes y partes interesadas externas.</p>'}</section>
      <section><h3>Entrega a</h3>${(p.salidas || []).length ? `<ul>${p.salidas.map((s) => `<li>${link(s.a)}: ${esc(s.que)}</li>`).join("")}</ul>` : '<p class="muted">—</p>'}</section></div>

      ${(p.riesgos || []).length ? `<h2>Riesgos y controles propuestos</h2><table class="tabla"><thead><tr><th>Riesgo</th><th>Control</th></tr></thead><tbody>${p.riesgos.map((x) => `<tr><td>${autolink(x.r)}</td><td>${autolink(x.c)}</td></tr>`).join("")}</tbody></table>` : ""}
      ${(p.pendientes || []).length ? `<h2>Pendientes por levantar</h2><ul class="pend">${p.pendientes.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
      ${cod === "M.02" ? `<p><a class="btn sec" href="#/servicios">Ver catálogo de servicios de investigación →</a></p>` : ""}
      <footer class="ficha-pie"><span>Elaboró: ${esc(D.meta.elaboro)}</span><span>Revisa y aprueba: ${esc(D.meta.aprueba)}</span><span>Fecha: ${esc(D.meta.fecha)}</span></footer>
    </article>
    <nav class="prevnext">${ant ? `<a href="#/p/${ant}">← ${ant} ${esc(P[ant].nombre)}</a>` : "<span></span>"}<button class="btn sec" onclick="window.print()">Imprimir ficha</button>${sig ? `<a href="#/p/${sig}">${sig} ${esc(P[sig].nombre)} →</a>` : "<span></span>"}</nav>`;
  }

  function vFichaN1(cod) {
    const { n, p } = N1[cod];
    const hermanos = p.nivel1, k = hermanos.indexOf(n), ant = hermanos[k - 1], sig = hermanos[k + 1];
    const ind = D.indicadores.filter((i) => i.cod.startsWith(cod + "."));
    return `${migas([["#/mapa", "Mapa"], ["#/p/" + p.cod, p.cod], ["#/p/" + cod, cod]])}
    <article class="ficha"${color(p)}>
      <header class="ficha-head"><img src="assets/img/logo-claro.png" alt="" class="ficha-logo">
        <div class="fh-t"><p class="eyebrow">Ficha del proceso · nivel 1 · pertenece a ${link(p.cod)}</p><h1>${n.cod} ${esc(n.nombre)}</h1></div>
        <table class="fh-meta"><tr><th>Proceso nivel 0</th><td>${p.cod}</td></tr><tr><th>Versión</th><td>${esc(p.version)}</td></tr><tr><th>Estado</th><td>${docb(p.doc)}</td></tr></table></header>
      <table class="tabla kv"><tr><th>Objetivo</th><td>${esc(n.objetivo || "Por levantar.")}</td></tr><tr><th>Responsable</th><td>${esc(n.dueno || p.dueno)}</td></tr>
      ${n.entradas ? `<tr><th>Entradas</th><td>${n.entradas.map(prop).join("<br>")}</td></tr>` : ""}${n.salidas ? `<tr><th>Salidas</th><td>${n.salidas.map(prop).join("<br>")}</td></tr>` : ""}
      ${n.registros ? `<tr><th>Registros</th><td>${n.registros.map((r) => `<a href="#/documentos">${prop(r)}</a>`).join("<br>")}</td></tr>` : ""}</table>
      <h2>Actividades · nivel 2</h2>
      ${(n.nivel2 || []).length ? `<ol class="pasos">${n.nivel2.map((a) => `<li><span class="cod">${esc(a.cod)}</span> ${prop(a.nombre)}</li>`).join("")}</ol>` : '<p class="muted">Por levantar.</p>'}
      ${ind.length ? `<h2>Indicadores</h2><div class="kpis">${ind.map((i) => `<a class="kpi" href="#/i/${i.cod}"><span class="cod">${i.cod}</span><b>${esc(i.nombre)}</b></a>`).join("")}</div>` : ""}
    </article>
    <nav class="prevnext">${ant ? `<a href="#/p/${ant.cod}">← ${ant.cod} ${esc(ant.nombre)}</a>` : `<a href="#/p/${p.cod}">← Volver a ${p.cod}</a>`}<span></span>${sig ? `<a href="#/p/${sig.cod}">${sig.cod} ${esc(sig.nombre)} →</a>` : `<a href="#/p/${p.cod}">Volver a ${p.cod} →</a>`}</nav>`;
  }

  function semaforo(m) {
    if (!m) return `<div class="semaforo vacio"><span>Meta por definir con Henry tras 2–3 meses de línea base</span></div>`;
    return `<div class="semaforo"><span class="r">${esc(m.rojo)}</span><span class="a">${esc(m.amarillo)}</span><span class="v">${esc(m.verde)}</span></div>`;
  }

  function vIndicador(cod) {
    const i = I[cod]; if (!i) return vNoEncontrado();
    const p = P[i.proceso];
    return `${migas([["#/indicadores", "Indicadores"], ["#/p/" + p.cod, p.cod], ["#/i/" + cod, cod]])}
    <article class="ficha"${color(p)}><header class="ficha-head"><img src="assets/img/logo-claro.png" alt="" class="ficha-logo">
      <div class="fh-t"><p class="eyebrow">Ficha técnica del indicador${i.clave ? " · indicador clave" : ""}</p><h1>${i.cod} ${esc(i.nombre)}</h1></div></header>
      <table class="tabla kv"><tr><th>Nombre del proceso</th><td>${link(p.cod)}</td></tr><tr><th>Nombre del indicador</th><td>${esc(i.nombre)} <span class="cod">${i.cod}</span></td></tr>
      <tr><th>Finalidad</th><td>${esc(i.finalidad)}</td></tr><tr><th>Fórmula de cálculo</th><td class="formula">${esc(i.formula)}</td></tr>
      <tr><th>Responsable</th><td>${esc(i.responsable)}</td></tr><tr><th>Tipo · unidad</th><td>${esc(i.tipo)} · ${esc(i.unidad)}</td></tr>
      <tr><th>Fuente de datos</th><td>${esc(i.fuente)}</td></tr><tr><th>Frecuencia de medición</th><td>${esc(i.frecuencia)}</td></tr>
      <tr><th>Línea base</th><td>Pendiente de medición</td></tr>${i.nota ? `<tr><th>Nota</th><td>${esc(i.nota)}</td></tr>` : ""}
      <tr><th>Meta</th><td>${semaforo(i.meta)}</td></tr></table>
    </article><nav class="prevnext"><a href="#/p/${p.cod}">← Ficha de ${p.cod}</a><span></span><a href="#/indicadores">Tablero de indicadores →</a></nav>`;
  }

  function vIndicadores() {
    return `${migas([["#/indicadores", "Indicadores"]])}<h1>Tablero de indicadores</h1>
    <p class="lead">Todos en borrador; las metas se fijarán con Henry tras la línea base. Filtre por tipo de proceso o use el buscador.</p>
    <div class="filtros" role="group" aria-label="Filtrar por tipo">${["Todos", "E", "M", "S"].map((t, k) => `<button class="chip${k === 0 ? " on" : ""}" data-f="${t}">${t === "Todos" ? t : D.tipos[t].nombre}</button>`).join("")}<button class="chip" data-f="clave">Solo clave</button></div>
    <div class="scroll"><table class="tabla" id="tkpi"><thead><tr><th>Código</th><th>Indicador</th><th>Proceso</th><th>Fórmula</th><th>Frecuencia</th><th>Responsable</th><th>Meta</th></tr></thead><tbody>
    ${D.indicadores.map((i) => `<tr data-t="${i.proceso[0]}" data-c="${i.clave ? 1 : 0}"><td><a href="#/i/${i.cod}">${i.cod}</a></td><td>${esc(i.nombre)}${i.clave ? ' <span class="tag">Clave</span>' : ""}</td><td>${link(i.proceso, i.proceso)}</td><td>${esc(i.formula)}</td><td>${esc(i.frecuencia)}</td><td>${esc(i.responsable)}</td><td>${i.meta ? "Definida" : '<span class="muted">Por definir</span>'}</td></tr>`).join("")}</tbody></table></div>`;
  }

  function vInterrelacion() {
    const cods = orden;
    const rel = {}; D.procesos.forEach((p) => (p.salidas || []).forEach((s) => (rel[p.cod + ">" + s.a] = s.que)));
    return `${migas([["#/interrelacion", "Interrelación"]])}<h1>Interrelación de procesos · nivel 0</h1>
    <p class="lead">Cada celda marcada indica que el proceso de la fila entrega algo al de la columna. Pase el cursor para ver qué entrega; haga clic para abrir la ficha.</p>
    <div class="scroll"><table class="matriz"><thead><tr><th class="esq">Entrega ↓ · Recibe →</th>${cods.map((c) => `<th class="v t-${c[0]}"><a href="#/p/${c}" title="${esc(P[c].nombre)}">${c}</a></th>`).join("")}</tr></thead><tbody>
    ${cods.map((f) => `<tr><th class="t-${f[0]}"><a href="#/p/${f}">${f}</a> <span>${esc(P[f].nombre)}</span></th>${cods.map((c) => { const q = rel[f + ">" + c]; return f === c ? '<td class="diag"></td>' : q ? `<td class="si" title="${esc(f + " → " + c + ": " + q)}"><a href="#/p/${c}" aria-label="${esc(f + " entrega a " + c + ": " + q)}">●</a></td>` : "<td></td>"; }).join("")}</tr>`).join("")}
    </tbody></table></div><p class="muted">Las relaciones salen del campo «salidas» de cada proceso en datos.js.</p>`;
  }

  function vServicios() {
    return `${migas([["#/p/M.02", "M.02"], ["#/servicios", "Servicios"]])}<h1>Servicios de investigación (M.02)</h1>
    <p class="lead">Modalidades del servicio y subprocesos de M.02 que aplica cada una. Lista preliminar: Johann enviará el catálogo definitivo.</p>
    <div class="grid-cards">${D.servicios.map((s) => `<div class="card"><h3>${esc(s.nombre)}</h3><p>${esc(s.desc)}</p><p class="muted">${esc(s.precio)} · ${docb(s.estado)}</p><div class="chips">${s.subprocesos.map((c) => `<a class="chip" href="#/p/${c}">${c} ${esc(N1[c].n.nombre)}</a>`).join("")}</div></div>`).join("")}</div>
    <h2>Oferta publicada en el brochure</h2><ul class="cols">${D.serviciosBrochure.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`;
  }

  function vDocumentos() {
    return `${migas([["#/documentos", "Documentos"]])}<h1>Documentos y formatos</h1>
    <p class="lead">Codificación: DO documento · FC ficha · FO formato · CT contrato. Los formatos «por elaborar» se crean en la fase 1.</p>
    <div class="scroll"><table class="tabla"><thead><tr><th>Código</th><th>Nombre</th><th>Tipo</th><th>Proceso</th><th>Estado</th></tr></thead><tbody>
    ${D.documentos.map((d) => `<tr><td class="cod">${esc(d.cod)}</td><td>${esc(d.nombre)}</td><td>${esc(d.tipo)}</td><td>${link(d.proceso, d.proceso)}</td><td>${docb(d.estado)}</td></tr>`).join("")}</tbody></table></div>`;
  }

  function vPlan() {
    return `${migas([["#/plan", "Plan"]])}<h1>Plan de estandarización</h1>
    <ol class="fases">${D.fases.map((f) => `<li class="fase f-${f.estado.replace(/\s/g, "").toLowerCase()}"><span class="fn">${f.n}</span><div><b>${esc(f.nombre)}</b> ${docb(f.estado)}<p>${esc(f.detalle)}</p>${f.procesos.length ? `<div class="chips">${f.procesos.map((c) => `<a class="chip" href="#/p/${c}">${c}</a>`).join("")}</div>` : ""}</div></li>`).join("")}</ol>
    <h2>Control de cambios</h2><table class="tabla"><thead><tr><th>Versión</th><th>Fecha</th><th>Cambio</th><th>Estado</th></tr></thead><tbody>${D.cambios.map((c) => `<tr><td>${esc(c.version)}</td><td>${esc(c.fecha)}</td><td>${esc(c.cambio)}</td><td>${esc(c.estado)}</td></tr>`).join("")}</tbody></table>`;
  }

  function vNoEncontrado() { return `<h1>No encontrado</h1><p>Ese código no existe. <a href="#/mapa">Volver al mapa</a>.</p>`; }

  /* ---------- Buscador ---------- */
  const indice = [
    ...D.procesos.map((p) => ({ cod: p.cod, t: p.nombre, h: "#/p/" + p.cod, k: "Proceso" })),
    ...Object.values(N1).map(({ n }) => ({ cod: n.cod, t: n.nombre, h: "#/p/" + n.cod, k: "Nivel 1" })),
    ...D.indicadores.map((i) => ({ cod: i.cod, t: i.nombre, h: "#/i/" + i.cod, k: "Indicador" })),
    ...D.documentos.map((d) => ({ cod: d.cod, t: d.nombre, h: "#/documentos", k: "Documento" }))
  ];
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  function buscar(q) {
    const box = $("#resultados"); q = norm(q.trim());
    if (q.length < 2) { box.hidden = true; box.innerHTML = ""; return; }
    const r = indice.filter((x) => norm(x.cod + " " + x.t).includes(q)).slice(0, 12);
    box.innerHTML = r.length ? r.map((x) => `<a href="${x.h}"><span class="cod">${x.cod}</span> ${esc(x.t)} <em>${x.k}</em></a>`).join("") : '<p class="muted">Sin resultados</p>';
    box.hidden = false;
  }

  /* ---------- Router ---------- */
  function render() {
    const h = location.hash.replace(/^#\/?/, "");
    const [ruta, arg] = h.split("/");
    const vistas = { "": vInicio, mapa: vMapa, inventario: vInventario, indicadores: vIndicadores, interrelacion: vInterrelacion, servicios: vServicios, documentos: vDocumentos, plan: vPlan };
    let html;
    if (ruta === "p") html = vFicha(decodeURIComponent(arg || ""));
    else if (ruta === "i") html = vIndicador(decodeURIComponent(arg || ""));
    else html = (vistas[ruta] || vNoEncontrado)();
    $("#app").innerHTML = html;
    document.querySelectorAll(".menu a").forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#/" + ruta || (ruta === "p" && a.getAttribute("href") === "#/mapa") || (ruta === "i" && a.getAttribute("href") === "#/indicadores")));
    const t = $("#app h1"); document.title = (t ? t.textContent + " · " : "") + "BLACKBELT procesos";
    $("#resultados").hidden = true; $("#q").value = "";
    $("#menu").classList.remove("abierto");
    window.scrollTo(0, 0);
    if (t) { t.setAttribute("tabindex", "-1"); t.focus({ preventScroll: true }); }
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-abrir]");
    if (b) document.querySelectorAll("details.inv").forEach((d) => (d.open = b.dataset.abrir === "1"));
    const f = e.target.closest("[data-f]");
    if (f) {
      document.querySelectorAll("[data-f]").forEach((x) => x.classList.toggle("on", x === f));
      document.querySelectorAll("#tkpi tbody tr").forEach((tr) => { const v = f.dataset.f; tr.hidden = !(v === "Todos" || (v === "clave" ? tr.dataset.c === "1" : tr.dataset.t === v)); });
    }
    if (!e.target.closest(".buscador")) $("#resultados").hidden = true;
  });
  $("#q").addEventListener("input", (e) => buscar(e.target.value));
  $("#q").addEventListener("keydown", (e) => { if (e.key === "Enter") { const a = $("#resultados a"); if (a) location.hash = a.getAttribute("href"); } if (e.key === "Escape") $("#resultados").hidden = true; });
  $("#btn-menu").addEventListener("click", () => { const m = $("#menu"); const ab = m.classList.toggle("abierto"); $("#btn-menu").setAttribute("aria-expanded", ab); });
  $("#pie").innerHTML = `${esc(D.meta.empresa)} · RUC ${esc(D.meta.ruc)} · Portafolio v${esc(D.meta.version)} · ${esc(D.meta.fecha)} · Documento de trabajo: solo Henry valida y aprueba.`;
  window.addEventListener("hashchange", render);
  render();
})();
