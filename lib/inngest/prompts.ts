export const PERSONALIZED_WELCOME_EMAIL_PROMPT = `Genera contenido HTML altamente personalizado que se insertará en una plantilla de correo electrónico en el marcador de posición {{intro}}.

Datos del perfil del usuario:
{{userProfile}}

PERSONALIZATION REQUIREMENTS:
DEBES crear contenido que esté claramente adaptado a ESTE usuario específico:

IMPORTANT: NO comiences el contenido personalizado con "Bienvenido", ya que el encabezado del correo ya dice "Bienvenido a bordo {{name}}". Usa aperturas alternativas como "Gracias por unirte", "Es genial tenerte", "Todo listo", "Llegaste en el momento perfecto", etc.

1. **Direct Reference to User Details**: Extrae y utiliza información específica de su perfil:
   - Sus objetivos o metas de inversión exactos
   - Su nivel declarado de tolerancia al riesgo
   - Sus sectores/industrias preferidos mencionados
   - Su nivel de experiencia o antecedentes
   - Acciones/empresas específicas de su interés
   - Su horizonte de inversión (corto plazo, largo plazo, jubilación)

2. **Contextual Messaging**: Crea contenido que demuestre que entiendes su situación:
   - Nuevos inversores → Referencia a aprender/iniciar su camino
   - Traders experimentados → Referencia a herramientas avanzadas/mejora de estrategias
   - Planificación de jubilación → Referencia a construir riqueza a largo plazo
   - Sectores específicos → Menciona esas industrias por su nombre
   - Enfoque conservador → Referencia a seguridad y decisiones informadas
   - Enfoque agresivo → Referencia a oportunidades y potencial de crecimiento

3. **Personal Touch**: Haz que sienta que fue escrito solo para él/ella:
   - Usa sus metas en el mensaje
   - Menciona directamente sus intereses
   - Conecta las funciones con sus necesidades específicas
   - Haz que se sienta comprendido y valorado

CRITICAL FORMATTING REQUIREMENTS:
- Devuelve SOLO contenido HTML limpio, SIN markdown, SIN bloques de código, SIN comillas invertidas
- Usa UN SOLO párrafo: <p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">contenido</p>
- Escribe exactamente DOS frases (agrega una frase más que la actual)
- Mantén el contenido entre 35-50 palabras para facilitar la lectura
- Usa <strong> para los elementos clave personalizados (sus metas, sectores, etc.)
- NO incluyas "Esto es lo que puedes hacer ahora:" ya que ya está en la plantilla
- Haz que cada palabra cuente para la personalización
- La segunda frase debe agregar contexto útil o reforzar la personalización

Example personalized outputs (showing obvious customization with TWO sentences):
<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">¡Gracias por unirte a Signalist! Como alguien enfocado en <strong>acciones tecnológicas de crecimiento</strong>, te encantarán nuestras alertas en tiempo real para empresas como las que sigues. Te ayudaremos a detectar oportunidades antes de que sean noticia.</p>

<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">¡Es genial tenerte a bordo! Perfecto para tu <strong>estrategia conservadora de jubilación</strong>: te ayudaremos a monitorear acciones de dividendos sin abrumarte con ruido. Por fin podrás seguir el progreso de tu portafolio con confianza y claridad.</p>

<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">¡Todo listo! Como eres nuevo en inversiones, hemos diseñado herramientas simples para ayudarte a ganar confianza mientras aprendes sobre el <strong>sector salud</strong> que te interesa. Nuestras alertas para principiantes te guiarán sin jerga confusa.</p>`

export const NEWS_SUMMARY_EMAIL_PROMPT = `Genera contenido HTML para un resumen de noticias del mercado que se insertará en la plantilla de correo NEWS_SUMMARY_EMAIL_TEMPLATE en el marcador de posición {{newsContent}}.

News data to summarize:
{{newsData}}

CRITICAL FORMATTING REQUIREMENTS:
- Devuelve SOLO contenido HTML limpio, SIN markdown, SIN bloques de código, SIN comillas invertidas
- Estructura el contenido con secciones claras usando encabezados HTML y párrafos apropiados
- Usa estas clases CSS y estilos específicos para coincidir con la plantilla de correo:

SECTION HEADINGS (para categorías como "Market Highlights", "Top Movers", etc.):
<h3 class="mobile-news-title dark-text" style="margin: 30px 0 15px 0; font-size: 18px; font-weight: 600; color: #f8f9fa; line-height: 1.3;">Título de la sección</h3>

PARAGRAPHS (para contenido de noticias):
<p class="mobile-text dark-text-secondary" style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">El contenido va aquí</p>

STOCK/COMPANY MENTIONS:
<strong style="color: #FDD458;">Stock Symbol</strong> for ticker symbols
<strong style="color: #CCDADC;">Company Name</strong> for company names

PERFORMANCE INDICATORS:
Usa 📈 para ganancias, 📉 para pérdidas, 📊 para neutral/mixto

NEWS ARTICLE STRUCTURE:
Para cada noticia dentro de una sección, usa esta estructura:
1. Contenedor del artículo con estilo visual e ícono
2. Título del artículo como subtítulo
3. Puntos clave en viñetas (2-3 ideas accionables)
4. Sección "Qué significa esto" para contexto
5. Enlace "Leer más" al artículo original
6. Separador visual entre artículos

ARTICLE CONTAINER:
Envuelve cada artículo en un contenedor limpio y simple:
<div class="dark-info-box" style="background-color: #212328; padding: 24px; margin: 20px 0; border-radius: 8px;">

ARTICLE TITLES:
<h4 class="dark-text" style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #FFFFFF; line-height: 1.4;">
Título del artículo aquí
</h4>

BULLET POINTS (mínimo 3 ideas concisas):
Usa este formato con explicaciones claras y concisas (sin etiqueta):
<ul style="margin: 16px 0 20px 0; padding-left: 0; margin-left: 0; list-style: none;">
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Explicación clara y concisa en términos simples y fáciles de entender rápidamente.
  </li>
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Explicación breve con cifras clave y lo que significan en lenguaje cotidiano.
  </li>
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Conclusión simple sobre lo que esto significa para el dinero de la gente común.
  </li>
</ul>

INSIGHT SECTION:
Agrega una explicación de contexto simple:
<div style="background-color: #141414; border: 1px solid #374151; padding: 15px; border-radius: 6px; margin: 16px 0;">
<p class="dark-text-secondary" style="margin: 0; font-size: 14px; color: #CCDADC; line-height: 1.4;">💡 <strong style="color: #FDD458;">Conclusión:</strong> Explicación simple de por qué esta noticia es importante para tu dinero en lenguaje cotidiano.</p>
</div>

READ MORE BUTTON:
<div style="margin: 20px 0 0 0;">
<a href="ARTICLE_URL" style="color: #FDD458; text-decoration: none; font-weight: 500; font-size: 14px;" target="_blank" rel="noopener noreferrer">Leer noticia completa →</a>
</div>

ARTICLE DIVIDER:
Cierra cada contenedor de artículo:
</div>

SECTION DIVIDERS:
Entre secciones principales, usa:
<div style="border-top: 1px solid #374151; margin: 32px 0 24px 0;"></div>

Content guidelines:
- Organiza las noticias en secciones lógicas con íconos (📊 Resumen del mercado, 📈 Mayores subidas, 📉 Mayores bajadas, 🔥 Noticias de última hora, 💼 Resultados empresariales, 🏛️ Datos económicos, etc.)
- NUNCA repitas títulos de sección: usa cada tipo solo una vez por correo
- Para cada noticia, incluye su titular real del dato de noticias
- Proporciona MÍNIMO 3 viñetas concisas (SIN etiqueta "Puntos clave": comienza directamente con las viñetas)
- Cada viñeta debe ser CORTA y FÁCIL DE ENTENDER: se prefiere una frase clara
- Usa LENGUAJE SENCILLO: evita jerga, términos financieros complejos o lenguaje de expertos
- Explica conceptos como si hablaras con alguien nuevo en inversiones
- Incluye cifras específicas pero explica qué significan en términos simples
- Agrega contexto "Conclusión" en lenguaje cotidiano que cualquiera pueda entender
- Usa diseño limpio y claro con viñetas amarillas para mejor legibilidad
- Haz cada artículo fácil de escanear con espacios y estructura claros
- Siempre incluye botones "Leer noticia completa" con URLs reales
- Enfócate en ideas PRÁCTICAS que la gente común pueda entender y usar
- Explica qué significa la noticia para el dinero de los inversores comunes
- Prioriza BREVEDAD y CLARIDAD sobre explicaciones detalladas

Example structure:
<h3 class="mobile-news-title dark-text" style="margin: 30px 0 15px 0; font-size: 20px; font-weight: 600; color: #f8f9fa; line-height: 1.3;">📊 Resumen del mercado</h3>

<div class="dark-info-box" style="background-color: #212328; padding: 24px; margin: 20px 0; border-radius: 8px;">
<h4 class="dark-text" style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #FDD458; line-height: 1.4;">
El mercado bursátil tuvo resultados mixtos hoy
</h4>

<ul style="margin: 16px 0 20px 0; padding-left: 0; margin-left: 0; list-style: none;">
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Las acciones tecnológicas como Apple subieron un 1,2% hoy, lo cual es una buena noticia para los inversores tecnológicos.
  </li>
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Las empresas tradicionales bajaron un 0,3%, mostrando que los inversores prefieren tecnología en este momento.
  </li>
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>El alto volumen de operaciones (12,4 mil millones de acciones) muestra que los inversores están confiados y activos.
  </li>
</ul>

<div style="background-color: #141414; border: 1px solid #374151; padding: 15px; border-radius: 6px; margin: 16px 0;">
<p class="dark-text-secondary" style="margin: 0; font-size: 14px; color: #CCDADC; line-height: 1.4;">💡 <strong style="color: #FDD458;">Conclusión:</strong> Si tienes acciones tecnológicas, hoy fue un buen día para ti. Si estás pensando en invertir, las empresas tecnológicas pueden ser una buena opción ahora mismo.</p>
</div>

<div style="margin: 20px 0 0 0;">
<a href="https://example.com/article1" style="color: #FDD458; text-decoration: none; font-weight: 500; font-size: 14px;" target="_blank" rel="noopener noreferrer">Leer noticia completa →</a>
</div>
</div>

<div style="border-top: 1px solid #374151; margin: 32px 0 24px 0;"></div>

<h3 class="mobile-news-title dark-text" style="margin: 30px 0 15px 0; font-size: 20px; font-weight: 600; color: #f8f9fa; line-height: 1.3;">📈 Mayores subidas</h3>

<div class="dark-info-box" style="background-color: #212328; padding: 24px; margin: 20px 0; border-radius: 8px;">
<h4 class="dark-text" style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #FDD458; line-height: 1.4;">
Las acciones de Apple subieron tras un gran informe de resultados
</h4>

<ul style="margin: 16px 0 20px 0; padding-left: 0; margin-left: 0; list-style: none;">
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Las acciones de Apple subieron un 5,2% tras superar las expectativas de resultados.
  </li>
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Se espera que las ventas de iPhone crezcan un 8% el próximo trimestre a pesar de la incertidumbre económica.
  </li>
  <li class="dark-text-secondary" style="margin: 0 0 16px 0; padding: 0; margin-left: 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
    <span style="color: #FDD458; font-weight: bold; font-size: 20px; margin-right: 8px;">•</span>Los ingresos por App Store y servicios alcanzaron los $22.3 mil millones (un 14% más), proporcionando ingresos estables.
  </li>
</ul>

<div style="background-color: #141414; border: 1px solid #374151; padding: 15px; border-radius: 6px; margin: 16px 0;">
<p class="dark-text-secondary" style="margin: 0; font-size: 14px; color: #CCDADC; line-height: 1.4;">💡 <strong style="color: #FDD458;">Conclusión:</strong> Apple gana dinero de diferentes formas (teléfonos Y servicios), por lo que es una acción bastante segura incluso cuando la economía es incierta.</p>
</div>

<div style="margin: 20px 0 0 0;">
<a href="https://example.com/article2" style="color: #FDD458; text-decoration: none; font-weight: 500; font-size: 14px;" target="_blank" rel="noopener noreferrer">Leer noticia completa →</a>
</div>
</div>`

export const TRADINGVIEW_SYMBOL_MAPPING_PROMPT = `Eres un experto en mercados financieros y plataformas de trading. Tu tarea es encontrar el símbolo correcto de TradingView que corresponde a un símbolo de acción dado por Finnhub.

Stock information from Finnhub:
Symbol: {{symbol}}
Company: {{company}}
Exchange: {{exchange}}
Currency: {{currency}}
Country: {{country}}

IMPORTANT RULES:
1. TradingView usa formatos de símbolo específicos que pueden diferir de Finnhub
2. Para acciones de EE.UU.: Usualmente solo el símbolo (ejemplo: AAPL para Apple)
3. Para acciones internacionales: A menudo incluye prefijo de bolsa (ejemplo: NASDAQ:AAPL, NYSE:MSFT, LSE:BARC)
4. Algunos símbolos pueden tener sufijos para diferentes clases de acciones
5. Los ADR y acciones extranjeras pueden tener formatos de símbolo diferentes

RESPONSE FORMAT:
Devuelve SOLO un objeto JSON válido con esta estructura exacta:
{
  "tradingViewSymbol": "EXCHANGE:SYMBOL",
  "confidence": "high|medium|low",
  "reasoning": "Breve explicación de por qué este mapeo es correcto"
}

EXAMPLES:
- Apple Inc. (AAPL) from Finnhub → {"tradingViewSymbol": "NASDAQ:AAPL", "confidence": "high", "reasoning": "Apple cotiza en NASDAQ como AAPL"}
- Microsoft Corp (MSFT) from Finnhub → {"tradingViewSymbol": "NASDAQ:MSFT", "confidence": "high", "reasoning": "Microsoft cotiza en NASDAQ como MSFT"}
- Barclays PLC (BARC.L) from Finnhub → {"tradingViewSymbol": "LSE:BARC", "confidence": "high", "reasoning": "Barclays cotiza en la Bolsa de Londres como BARC"}

Tu respuesta debe ser solo JSON válido. No incluyas ningún otro texto.`
