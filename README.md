# BLACKBELT · Portafolio de procesos

Sitio estático (GitHub Pages) con el mapa de procesos, inventario niveles 0-1-2, fichas técnicas, fichas de indicador, interrelación, servicios de investigación, documentos y plan de estandarización de **BLACKBELT GROUP S.A.C.** Modelo de referencia: Mapa de Procesos UNHEVAL V.0.6.

## Cómo corregir contenidos
Todo el contenido está en **`assets/js/datos.js`**. Edite ese archivo (también desde GitHub, con el lápiz) y el cambio se refleja en el mapa, las fichas, el inventario y el tablero.

- Procesos: lista `procesos` (código, dueño, estado, objetivo, nivel1 → nivel2, sipoc, requisitos, controles, recursos, indicadores, salidas, riesgos, pendientes).
- Indicadores: lista `indicadores`. Para fijar una meta: `meta: { rojo: "< 40 %", amarillo: "40 % a 60 %", verde: "> 60 %" }`.
- Relaciones entre procesos: campo `salidas` de cada proceso (alimenta la matriz de interrelación).
- `(*)` en un texto lo marca como **propuesto** (aún no se realiza).

## Navegación
`#/mapa` · `#/inventario` · `#/p/M.01` (ficha nivel 0) · `#/p/M.01.02` (ficha nivel 1) · `#/i/M.01.I01` (ficha de indicador) · `#/indicadores` · `#/interrelacion` · `#/servicios` · `#/documentos` · `#/plan`

## Publicación
Settings → Pages → Source: *Deploy from a branch* → rama `main`, carpeta `/ (root)`.

Dominio propio: `procesos.blackbeltcorp.com` (archivo `CNAME`). En Cloudflare: registro CNAME `procesos` → `blackbeltingenieria-droid.github.io`.

Estado: documento de trabajo. Solo Henry (Gerencia General) valida y aprueba.
