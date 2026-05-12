// Studio Cavallari · plan 90 días · data
// Estructura por día (Mes 1):
//   { n, week, title, theme, duration, ref,
//     objetivo, equipo, aprendizaje, setup,
//     shots:[{tag,frame,model,seed}], luz, audio,
//     sirveA:[{cliente,adaptacion}], ejercicioAdaptativo,
//     postproduccion, entregable, pista }
// Días sin práctica adaptativa (software puro, curaduría, reflexión, comercial)
//   no llevan sirveA ni ejercicioAdaptativo.

window.SC_DATA = {
  brand: "Studio Cavallari",
  signature: "Encuadre dentro del encuadre · paisaje poético · cuerpo como paisaje",
  refs: [
    "fotos/casa-leah-01.jpg","fotos/casa-leah-02.jpg","fotos/casa-leah-03.jpg",
    "fotos/casa-leah-04.jpg","fotos/casa-leah-05.jpg","fotos/casa-leah-06.jpg",
    "fotos/casa-leah-07.jpg","fotos/casa-leah-08.jpg","fotos/casa-leah-09.jpg",
    "fotos/casa-leah-10.jpg","fotos/casa-leah-11.jpg","fotos/casa-leah-12.jpg"
  ],

  // 7 cards · tu firma en cada cliente
  clientes: [
    { id: "hotel", titulo: "Hotel boutique",
      mantiene: "Quietud, detalle sobre general, luz dorada lateral, encuadre dentro del encuadre.",
      ajusta: "Casi nada — es KINTO casi puro. Quizá un plano de figura más narrativo si el hotel lo pide.",
      planos: "Cenital de mesa · ventana con luz lateral · detalle de textura · cortina o tela moviéndose.",
      precio: "1500–4000 € pieza" },
    { id: "slow", titulo: "Marca slow living",
      mantiene: "Espacio negativo amplio, ritmo lento, paleta tierra-cremosa, tacto visual.",
      ajusta: "El producto se vuelve el centro del 60% de los planos. Manos sirviendo, vertiendo, doblando.",
      planos: "Cenital de mesa · detalle de textura · manos haciendo algo · vapor y movimiento sutil.",
      precio: "1500–3500 € pieza" },
    { id: "boda", titulo: "Boda discreta cinematográfica",
      mantiene: "Detalle, figura de espaldas, luz natural cálida, sin movimiento frenético.",
      ajusta: "Añadir narrativa: preparativos (manos, vestido), figura caminando, ceremonia desde lejos, gestos íntimos. Nada de baile frenético ni cámara nerviosa. Destination, hacienda mexicana, masía mediterránea.",
      planos: "Manos haciendo algo · figura femenina de espaldas · detalle de textura · vapor y movimiento sutil.",
      precio: "2500–6000 € pieza" },
    { id: "rest", titulo: "Restaurante de autor · farm-to-table",
      mantiene: "Detalle protagonista, luz lateral rasante, paleta cálida, audio cercano.",
      ajusta: "Ritmo un punto más vivo (cortes de 3–5s). Manos cocinando, vapor, gotas, salpicaduras, brillo. Más saturación en cálidos.",
      planos: "Manos haciendo algo · detalle de textura · vapor y movimiento sutil · cenital de mesa.",
      precio: "800–2500 € pieza" },
    { id: "inmo", titulo: "Inmobiliario de lujo",
      mantiene: "Composición rigurosa, espacio respirado, luz natural cambiando, paleta neutra cálida.",
      ajusta: "Más plano amplio para mostrar escala. Luz arquitectónica dominante. Sin figura, o figura mínima de espaldas atravesando el espacio.",
      planos: "Ventana con luz lateral · detalle de textura · reflejo · cortina moviéndose.",
      precio: "1200–4000 € pieza" },
    { id: "edit", titulo: "Editorial · revista",
      mantiene: "Máxima quietud, espacio negativo dominante, composición casi pictórica, cortes largos.",
      ajusta: "Cortes de 8–12s. Sin música o piano solo. Contraste alto, blancos cremosos, sombras carbón. Kinfolk, Cereal, Apartamento, Condé Nast Traveler como brújula visual.",
      planos: "Cenital de mesa · ventana con luz lateral · figura femenina de espaldas · detalle de textura.",
      precio: "1500–4000 € pieza" },
    { id: "videopoema", titulo: "Videopoema personal",
      mantiene: "Toda la firma — encuadre, cuerpo como paisaje, vegetación como filtro, paleta tierra.",
      ajusta: "Libertad total. Tu voz, tu escritura, tu cuerpo. Esta es la pieza que justifica los precios premium en el resto.",
      planos: "Figura femenina de espaldas · detalle de textura · cortina · vapor.",
      precio: "Sin precio — esta es la pieza que abre los demás mercados" }
  ],

  // 8 planos KINTO · diccionario de referencia
  planosKinto: [
    { n: 1, titulo: "Cenital de mesa",
      desc: "Cámara directamente encima de mesa, paralela. Objeto centrado con espacio negativo. Luz lateral suave (ventana).",
      ejemplos: "Taza de café con cuchara · plato con croissant · libro abierto · manos doblando servilleta.",
      tecnica: "Trípode con cabezal 90° o brazo extendido manual · ISO 100–400 · shutter 1/50 a 24fps · 4K Apple Log.",
      sirveA: "Hoteles boutique · marcas de cerámica · restaurantes · marcas de comida · editorial." },
    { n: 2, titulo: "Ventana con luz lateral",
      desc: "Sujeto u objeto al lado de ventana. Luz entra desde un lado del cuadro. Mitad iluminada, otra en sombra rellenada con reflector blanco.",
      ejemplos: "Mujer leyendo con luz en rostro · taza humeante en repisa · mano apoyada en cristal.",
      tecnica: "Trípode obligatorio · 30–60 min después del amanecer o antes del atardecer · reflector blanco al lado opuesto · si sol directo, cortina blanca difumina.",
      sirveA: "Hoteles · retratos íntimos · editorial · slow living · bodas." },
    { n: 3, titulo: "Detalle de textura",
      desc: "Macro o cerca de textura: cerámica, lino, madera, terracota, piedra, agua, piel.",
      ejemplos: "Vetas de madera con luz lateral · gotas en cristal de copa · lino arrugado con sombras suaves.",
      tecnica: "Lente macro del iPhone (0.5x o 2x) · trípode firme · iluminación lateral muy marcada · 24fps.",
      sirveA: "Marcas de cerámica y lino · slow living · hoteles · restaurantes · inmobiliario." },
    { n: 4, titulo: "Manos haciendo algo",
      desc: "Cámara fija. Manos entran al cuadro, hacen una acción sin prisa.",
      ejemplos: "Servir café · doblar servilleta · encender vela · abrir libro · llenar copa.",
      tecnica: "Cámara a altura de mesa o cenital · acción con principio y final claros · empezar a grabar antes de que entren las manos · acabar 2s después · micro cercano captando la acción.",
      sirveA: "Hoteles · restaurantes · marcas slow living · bodas (preparativos) · café especialidad." },
    { n: 5, titulo: "Figura femenina de espaldas",
      desc: "Mujer entera o medio cuerpo, de espaldas al espectador, caminando o quieta.",
      ejemplos: "Mujer entrando a habitación · mirando por ventana · caminando por jardín.",
      tecnica: "Plano amplio o medio · luz dorada de fondo (contraluz) o lateral · ropa: lino, textura natural, colores neutros · movimiento lento intencional.",
      sirveA: "Hoteles · marcas de moda nicho · slow living · bodas · retiros · videopoema personal." },
    { n: 6, titulo: "Vapor · humo · movimiento sutil",
      desc: "Cámara fija sobre algo con movimiento mínimo y orgánico.",
      ejemplos: "Vapor sobre taza de té · humo de incienso · llama de vela · agua de piscina con reflejos.",
      tecnica: "Contraluz (luz detrás hace visible el vapor) · fondo oscuro y neutro · exposición ligeramente subexpuesta · 8–15s fijo.",
      sirveA: "Hoteles · restaurantes · té y café especialidad · spas · atmósfera de marca." },
    { n: 7, titulo: "Reflejo",
      desc: "Sujeto reflejado en agua, espejo, cristal.",
      ejemplos: "Edificio reflejado en piscina · rostro en espejo de baño · taza reflejada en mesa lacada.",
      tecnica: "Superficies muy quietas · componer el reflejo, no el sujeto real · a veces meter ambos (sujeto arriba, reflejo abajo).",
      sirveA: "Hoteles · inmobiliario · retratos editoriales · marcas de fragancia." },
    { n: 8, titulo: "Cortina o tela moviéndose",
      desc: "Cámara fija sobre cortina movida por viento o ventilador suave.",
      ejemplos: "Cortina blanca de lino con sol detrás · sábana en cuerda con viento · mantel sobre mesa con brisa.",
      tecnica: "Contraluz fuerte · fondo oscuro · 12–15s para movimiento suave.",
      sirveA: "Hoteles · marcas de lino y textil · slow living · atmósfera mediterránea." }
  ],

  // 8 setups de audio por tipo de plano · referencia para B · Audio
  audioPorPlano: [
    { plano: "Paisaje amplio · terraza, jardín, exterior",
      audio: "Ambiente del lugar: pájaros, viento, agua, gente lejana.",
      setup: "TX escondido en planta o piedra, o sobre trípode aparte. Auriculares puestos para descartar avión, coche, AC. Mínimo 2 min limpios; en edición uso 8–15s." },
    { plano: "Detalle fijo · textura, objeto",
      audio: "Silencio cercano o sonido del objeto si lo tiene (vapor, agua, papel).",
      setup: "TX a 30 cm del objeto. Si silencio absoluto, grabar room tone. 30s por plano." },
    { plano: "Manos haciendo algo · servir, doblar, abrir",
      audio: "Muy importante. El sonido de la acción es la mitad del plano.",
      setup: "TX a 20–30 cm de las manos, fuera del cuadro. Café vertido: micro al lado de la taza. Pan partido: micro al lado del pan. Vela: micro al lado de la cerilla. Desde antes de la acción hasta 3s después." },
    { plano: "Figura caminando",
      audio: "Pasos, ropa que se mueve, respiración suave.",
      setup: "TX en cinturón o bolsillo si ropa suelta; en zapato si quiero pasos prominentes. Truco profesional: pasos como foley aparte sobre el mismo suelo." },
    { plano: "Figura quieta mirando algo",
      audio: "Silencio + ambiente lejano + respiración apenas audible.",
      setup: "TX en el sujeto, ganancia baja para que la respiración no sea fuerte." },
    { plano: "Entrevista · anfitrión, cliente",
      audio: "Voz limpia, primer plano.",
      setup: "TX en solapa a 15–20 cm de la boca. AC apagado. Auriculares cableados obligatorios (Bluetooth tiene latencia)." },
    { plano: "Vapor · humo · agua · vela",
      audio: "Muy cerca. El crepitar de una vela, el burbujear de agua, el goteo. Corazón del plano KINTO.",
      setup: "TX a 10–15 cm de la fuente. Ganancia alta porque son sonidos sutiles." },
    { plano: "Cortina movida por viento",
      audio: "Silencio o ambiente muy ligero. La cortina no suena, no forzar audio dramático.",
      setup: "Room tone básico debajo." }
  ],

  // 4 situaciones de luz + estructura de día de cliente
  calendarioRodaje: {
    situaciones: [
      { momento: "Sol alto · ~10:00–17:00",
        luz: "Luz dura desde arriba. Sombras feas debajo de ojos y nariz. Cielo blanco quemado.",
        hacer: "NO filmar personas afuera. SÍ: interiores con ventana grande lateral, agua, detalles bajo sombra de árbol, productos en mesa cubierta." },
      { momento: "Golden hour · 1h tras amanecer y 1h antes de atardecer",
        luz: "Luz dorada lateral. Sombras largas y suaves. Cielo con color.",
        hacer: "Filmar todo lo que pueda afuera. Tepoztlán en mayo: 6:30–7:30 y 18:30–19:30 aprox. Verificar cada día." },
      { momento: "Blue hour · 15–30 min tras el atardecer",
        luz: "Cielo azul oscuro intenso. Luces interiores encendidas calientes. Atmósfera de revista.",
        hacer: "Fachadas, ventanas iluminadas desde afuera, terrazas con velas." },
      { momento: "Día nublado",
        luz: "Luz suave en todas partes.",
        hacer: "Regalo del cielo para retrato, detalles, manos, objetos. Mal para paisaje (cielo aburrido)." }
    ],
    diaCliente: [
      { hora: "Pre-amanecer", actividad: "Llegada, monto equipo, observo luz." },
      { hora: "Golden hour · amanecer (1h)", actividad: "Exteriores principales, fachada, jardín, terraza." },
      { hora: "9:00–11:00", actividad: "Interiores con ventana grande." },
      { hora: "12:00–15:00", actividad: "Descanso. Almuerzo con cliente. Reviso material. Planifico tarde." },
      { hora: "15:00–17:30", actividad: "Interiores secundarios, detalles, manos, b-roll universal." },
      { hora: "Golden hour · atardecer (1h)", actividad: "Exteriores principales otra vez con luz cálida, sesión figura." },
      { hora: "Blue hour (30 min)", actividad: "Fachada con luces encendidas, terraza con velas, ambiente nocturno." },
      { hora: "Noche", actividad: "Descargo material. Backup. Anoto qué falta para mañana." }
    ]
  },

  // Mes 2 y 3 · cards de semana. Semana 7 reorientada a personas en acción.
  weeks: [
    { n: 5, range: "días 31–37", title: "Formato 2 · Transición imposible",
      body: "Filmar dos planos que después se transforman uno en otro. El truco está en el rodaje: mismo encuadre, mismo movimiento, mismo ritmo. ComfyUI o Runway para el plano intermedio.",
      out: "Una transición de 3 s terminada" },
    { n: 6, range: "días 38–44", title: "Formato 3 · Figura femenina en espacio",
      body: "Real (Coral, tú, alguien) + generado (ComfyUI). Siempre de espaldas o silueta. Integrar lo real con lo generado para que parezca el mismo plano.",
      out: "Mini-video de 30 s con figura protagonista" },
    { n: 7, range: "días 45–51", title: "Salir de KINTO puro · Personas en acción",
      body: "Semana clave para abrir mercado. Practicar filmar personas haciendo cosas con vida: clase de yoga o cocina en Casa Leah, alguien cocinando un plato de principio a fin, una pareja desayunando, alguien trabajando con sus manos. Sin perder firma (encuadre, luz, detalle), añadir narrativa y movimiento. Puente de KINTO al cliente comercial amplio (boda, retrato, marca con personas).",
      out: "Pieza de 45 s con narrativa de persona en acción" },
    { n: 8, range: "días 52–60", title: "Estructura comercial + primer trabajo pagado",
      body: "Web simple (Cargo o Squarespace), Vimeo Pro, plantilla de email en 3 versiones, propuesta en PDF, estructura de precios, marca (nombre, logo simple, paleta). Primer trabajo pagado a alguien cercano (Coral para Casa Leah, amiga con negocio, marca local). 300–500 €. Contrato simple. Anticipo 50%. Plazo. Entrega. No es showcase, es ensayo.",
      out: "Web viva + 1 trabajo pagado completado" },
    { n: 9, range: "días 61–67", title: "Formato 4 · Videopoema",
      body: "Pieza de 60 s de autoría pura. Sobre Casa Leah, tu cuerpo, tu hija, Tepoztlán. Justifica precios premium en los otros formatos.",
      out: "Videopoema de 60 s + texto si aplica" },
    { n: 10, range: "días 68–74", title: "Acercamiento real",
      body: "Los 20 emails a hoteles boutique. Personalizados, no plantilla. Mencionar algo concreto de su web. Adjuntar showreel privado de Vimeo. Seguimiento a la semana.",
      out: "20 emails + sistema de seguimiento" },
    { n: 11, range: "días 75–81", title: "Trabajo pagado #2",
      body: "Idealmente del acercamiento. Si no, baja el precio del primero un 30% solo para conseguir el segundo caso. Brief, propuesta firmada, anticipo, rodaje, edición, revisiones, entrega, factura.",
      out: "2 trabajos pagados completados" },
    { n: 12, range: "días 82–90", title: "Trabajo #3 + cierre",
      body: "Refinar precios. Plantilla de contrato definitiva. Sistema de revisiones (máx 2 rondas). Sistema de facturación.",
      out: "3 trabajos pagados + estructura probada" }
  ],

  // 28 micro-lecciones del Mes 1 · una cosa que se queda
  lessons: {
    3:  { tema: "Color · qué es un modelo",
          texto: "Un modelo es un 'estilo de pintor'. DreamShaper pinta ilustrado y estilizado. Realistic Vision pinta fotográfico, sucio, real. Mismo prompt = misma frase. Distinto modelo = distinto pintor. Para hoteles boutique elige siempre Realistic Vision.",
          kinto: "Mira referencias Kinto antes de generar. No buscas 'casa bonita' — buscas un objeto siendo USADO. La taza con vapor, no la taza posada. Pasa eso a tu prompt: añade 'in use, morning ritual, raw photo'.",
          accion: "Genera 3 PNG con Realistic Vision donde haya un gesto, no una pose: alguien sirviendo agua, una mano apoyada en una jarra, una toalla recién doblada." },
    4:  { tema: "Software · qué hace cada pestaña en DaVinci",
          texto: "Media (ingesta), Cut (cortar rápido), Edit (montaje fino), Color (corrección y look), Deliver (exportar). Las cinco siempre, en orden. Quien salta pasos, devuelve trabajos.",
          kinto: "Los videos de Kinto pasan más tiempo en Color que en Edit. Misma escena puede ser publicidad fría o slow living cálido — la diferencia ocurre en la pestaña Color. Reserva siempre el doble de tiempo para color que para montaje.",
          accion: "Abre cada pestaña 2 minutos. No edites — solo familiarízate con el mapa. Especial atención a Color." },
    5:  { tema: "Luz · la regla de los 90 grados",
          texto: "El sol o la ventana NUNCA delante del sujeto, NUNCA detrás de la cámara. Siempre al lado: 90° a la izquierda o derecha del sujeto. Esto marca textura, da volumen, hace cinemática cualquier escena.",
          kinto: "Kinto filma todo con luz lateral suave de mañana (9:00–11:00) o tarde (16:00–18:00). Nunca mediodía. Si miras sus videos: el lado izquierdo de los objetos está bañado, el derecho está en sombra suave. Eso es 90° puros.",
          sol: "Hoy: ponte de pie con el sol a tu izquierda o derecha (no detrás, no delante). Tu sujeto enfrente. Sombra del sujeto cayendo hacia un lado del encuadre, no hacia la cámara, no hacia el fondo.",
          accion: "En cada uno de los 3 planos del día verifica: ¿de dónde viene la luz? Si no es lateral, mueve el sujeto o espera otra hora." },
    6:  { tema: "Color · por qué Log se ve gris",
          texto: "Apple Log graba 'sin opinión': toda la información de luces y sombras, sin contraste añadido. Por eso se ve apagado al importar. Es información cruda, no es un defecto. El color se construye después.",
          kinto: "El look Kinto no existe en cámara. Existe en post. Los videos suyos en cámara también se ven grises. La calidez beige-terracota la añaden en Color. Acepta esa fealdad inicial: es la materia prima correcta.",
          accion: "Importa, mira los clips lo gris que están, y no toques nada. Sólo reproduce 3 veces. Acostúmbrate." },
    7:  { tema: "Generativo · qué es denoise en img2img",
          texto: "Denoise = cuánto deja el modelo intacto de tu foto original. 0.3 = casi exacta. 0.5 = mantiene composición, reinterpreta luz. 0.7 = mantiene encuadre, todo lo demás invención. Para hoteles: 0.3–0.4.",
          kinto: "Kinto NUNCA usa imagen completamente generada para producto real. Usa foto real + retoque sutil. Tu equivalente: img2img a denoise 0.3. La casa del cliente debe ser SU casa, mejorada, no inventada.",
          accion: "Prueba 0.3, 0.5, 0.7 con la misma foto. Anota cuál sigue siendo 'su casa' y cuál ya es 'otra casa'. Quédate en 0.3–0.4 para trabajo comercial." },
    8:  { tema: "Edición · el ritmo de 5 segundos",
          texto: "5 s por plano es el ritmo emocional del slow living. Menos = publicidad rápida. Más = aburrido. La mente humana procesa un plano en 2 s y se queda otros 3 s 'absorbiendo'.",
          kinto: "Cronométralo: en los videos Kinto, casi todos los planos duran entre 4 y 7 segundos. Algunos hasta 10. Cero cortes rápidos. La calma del corte ES el producto. Si cortas rápido, vendes velocidad, no slow.",
          accion: "Cuando cortes en DaVinci, antes de mirar el plano, cuenta '1001, 1002, 1003, 1004, 1005' en voz baja. Ese es tu corte. Repite por cada plano." },
    9:  { tema: "Composición · cuando el lugar es feo, filmas detalle",
          texto: "Casi ningún hotel es bonito de pared a pared. Pero todos tienen un rincón. Una sombra, una textura, un reflejo. Tu trabajo NO es mostrar la casa entera, es elegir los 8 detalles que la convierten en deseable.",
          kinto: "El 70% de los planos Kinto son detalle: una mano vertiendo, el vapor saliendo, la textura de la tetera. El producto entero solo aparece 1–2 veces. Esa proporción —70% detalle, 30% conjunto— es la fórmula.",
          sol: "El detalle pide luz lateral rasante: la luz que entra casi paralela a la superficie. Eso revela textura: la madera vieja, el barro, la tela de lino. Sitúate de modo que la luz roce el detalle.",
          accion: "Tres planos hoy, todos detalle, todos con luz rasante. Si la textura no se ve, mueve el sujeto o cambia el ángulo." },
    10: { tema: "Disciplina · curar es tan importante como producir",
          texto: "Mirar tu propio archivo con calma es la mitad del oficio. Si no curas, no aprendes qué firmas se están consolidando en ti. Reserva siempre un día por semana solo para mirar.",
          kinto: "Detrás de cada video Kinto hay 20× material descartado. La curaduría es el oficio invisible: lo que NO entra define la marca tanto como lo que entra.",
          accion: "Mira las 9 carpetas. Una sola frase: 'mi firma esta semana fue X'. Nada más." },
    11: { tema: "Color · la conversión que todos olvidan",
          texto: "Antes de cualquier ajuste estético, todo clip Log necesita Color Space Transform: Apple Log → Rec.709. Sin ese paso, ningún LUT funcionará bien. Equivale a sazonar antes de cocinar.",
          kinto: "Los grados Kinto se aplican SIEMPRE después de la conversión base. El paso 'Log→709' es invisible al espectador pero sin él, todo lo demás está roto.",
          accion: "Crea un PowerGrade llamado 'BASE · Log to 709'. Lo arrastrarás como primer nodo de TODO clip Apple Log durante los próximos 80 días." },
    12: { tema: "Generativo · prompt positivo y negativo",
          texto: "Positivo = lo que quieres ver. Negativo = lo que no. Sin negativos, ComfyUI te da manos deformes, caras frontales, plástico. Negativos base: deformed hands, frontal face, plastic skin, multiple people, watermark, low quality.",
          kinto: "Para figura tipo Kinto: positivo siempre incluye 'seen from behind, hands visible, ritual gesture, soft natural light'. Negativo incluye 'frontal face, posing, model pose, fashion shoot'. Tú no quieres modelo: quieres persona haciendo algo.",
          accion: "Construye un .txt con tus prompts base: 1 positivo de figura, 1 positivo de espacio, 1 lista de negativos. Cópialos siempre. Solo cambias detalles." },
    13: { tema: "Encuadre · el cuerpo de espaldas resuelve todo",
          texto: "Nadie se siente cómodo de frente a una cámara. Pero cualquiera está dispuesto a caminar de espaldas hacia una ventana. Cuerpo identificable, cara invisible.",
          kinto: "El 90% de las figuras humanas Kinto son: de espaldas, en silueta, o solo manos. Triple ventaja: el modelo no actúa, la imagen es poética, no envejece. Tres beneficios en un gesto.",
          sol: "Para 'de espaldas hacia ventana': el sol o la ventana enfrente del sujeto, tú detrás. Esto crea silueta y halo en el pelo. Para 'de espaldas con luz lateral': sol a 90°, tú detrás del sujeto desplazado 45°.",
          accion: "Los 3 planos hoy: A camina hacia la luz (contraluz puro), B sube escalera (lateral), C abre puerta (silueta). Nadie ve cara." },
    14: { tema: "Edición · sin música primero, siempre",
          texto: "Monta el corte sin música. Si funciona sin música, va a brillar con música. Si solo funciona con música, el montaje está mal. La música es maquillaje.",
          kinto: "En los videos Kinto la música es minimalista, suele ser piano o cuerda, NUNCA tapa el sonido ambiente. El ruido de la cuchara contra la taza vale más que la melodía. Pista: si pudieras quitar la música y aún funcionara, está bien.",
          accion: "Hoy: monta 30 s con solo audio ambiente al -18 dB. Sin tocar música. Mírate eso 3 veces antes de pensar en agregar nada." },
    15: { tema: "Reflexión · escribir es ver",
          texto: "Lo que no escribes, no existe. Tres párrafos cada quincena. No para nadie. Para que dentro de tres meses puedas leer y saber dónde estabas.",
          kinto: "La identidad de una marca como Kinto se construye reescribiéndose. No nació terminada. Cada lanzamiento es una revisión. Tu cuaderno funciona igual: lo que escribes hoy se vuelve tu firma de mes 3.",
          accion: "3 párrafos: qué aprendí · qué se está consolidando · qué necesito. Sin maquillar." },
    16: { tema: "Audio · monitorizar o grabar a ciegas",
          texto: "Sin auriculares puestos mientras grabas, estás apostando. Un cable suelto, una interferencia, viento — todo eso pasa, y si no lo oyes, pierdes el material.",
          kinto: "El secreto del slow living en video es el AUDIO de los gestos: agua llenando una taza, fabric rozando madera, pisada descalza. Sin audio limpio de gestos, la calma se pierde. El DJI Mic 2 te lo permite por primera vez.",
          accion: "Hoy graba el sonido de tres acciones lentas en Casa Leah: agua corriendo de una llave 20 s, mano apoyándose en una mesa, paso descalzo sobre piedra. Sin imagen — solo audio limpio. Es material de oro." },
    17: { tema: "Luz · la ventana es un softbox gratis",
          texto: "Una ventana grande, sin sol directo, con cortina blanca delgada, es exactamente lo que un fotógrafo de revista paga 800€ por simular. Identifica la ventana correcta de cada casa.",
          kinto: "Mira sus videos de interior: el sujeto está SIEMPRE perpendicular a una ventana, a 1–2 metros, con la cámara en el lado opuesto. Misma fórmula en todos los videos. Aprende a ver la ventana antes de ver el objeto.",
          sol: "Horas oro de interior: 9:00–11:00 y 16:00–18:00 según orientación. Sin sol directo entrando — si lo hay, cortina blanca filtra. Sujeto a 1–2 m de la ventana, lado iluminado hacia la luz, lado sombrío hacia el interior.",
          accion: "Recorre Casa Leah y mapea: a qué hora cada ventana da luz lateral suave. Anota en un papel. Es tu base de datos de iluminación gratuita." },
    18: { tema: "Luz · el reflector llena el lado oscuro",
          texto: "Luz lateral = un lado bañado, otro lado en sombra dura. El reflector blanco al lado opuesto rebota luz suave: el lado oscuro respira. Distancia: 1 m del sujeto.",
          kinto: "Toda la luz Kinto parece de una sola fuente. Mentira: es ventana + reflector. Eso es 'el aire' que tienen sus imágenes. La sombra existe pero no aplasta: hay detalle dentro.",
          sol: "Hoy: ventana a la izquierda del sujeto (luz natural). Reflector blanco a la derecha, ángulo tal que el reflector 'mire' a la ventana. El reflector trabaja por rebote: si no ve la luz, no hace nada.",
          accion: "Filma el mismo plano dos veces: sin reflector, con reflector. Compara en DaVinci. Esa diferencia es tu nuevo umbral profesional." },
    19: { tema: "Generativo · seed = misma imagen, mismo dado",
          texto: "Una seed es el número de partida del modelo. Misma seed + mismo prompt = misma imagen exacta. Cambiar la seed = nueva variación. Para refinar prompt: fija la seed y cambia palabras. Para variar visualmente: fija el prompt y cambia la seed.",
          kinto: "Cuando una marca como Kinto encarga ilustración o render, fijan parámetros y solo varían UNA cosa. Esa disciplina es la que separa material de oficio de material de hobby. Trabaja como ellos: cambia una variable por vez.",
          accion: "Hoy: 5 generaciones cambiando solo la seed, prompt idéntico. Después: 5 generaciones cambiando solo una palabra del prompt, seed fija. Compara qué te enseñó cada test." },
    20: { tema: "Encuadre · el ADN del mini-video de hotel",
          texto: "Amplio → medio → detalle → figura → cierre. Cinco planos, en ese orden, son el ADN narrativo de slow living. Amplio sitúa, medio compone, detalle seduce, figura humaniza, cierre suspende.",
          kinto: "Cada lanzamiento Kinto sigue este orden. Mira un video suyo de 30 s: cuenta los planos. Casi siempre son 5 o 6, en esta secuencia exacta. Memoriza la fórmula porque la repetirás 200 veces en tu carrera.",
          sol: "Los 5 planos deben tener LA MISMA luz. Misma hora dorada. Si tardas más de 30 min entre planos, la luz cambia y los planos no casan. Filma rápido o vuelve mañana al mismo lugar.",
          accion: "Hora dorada estricta. Llega 15 min antes. Filma los 5 planos en menos de 30 minutos. 8 s cada uno. Si alguno no salió perfecto, no lo repitas con luz distinta — anota y vuelve otro día." },
    21: { tema: "Edición · el primer video bonito siempre asusta",
          texto: "Cuando exportes este corte y lo veas, vas a pensar 'no es mío, alguien va a descubrir el truco'. No hay truco. Es tu trabajo.",
          kinto: "Las marcas que llevan años con esta estética también dudaron al principio. Lo que hoy te parece imitación es exactamente cómo se construye un oficio: copiar bien, hasta que se vuelve tuyo.",
          accion: "Exporta. Mira el video 3 veces. La tercera vez, sin sonido. Si te parece bonito sin sonido, ya está." },
    22: { tema: "Curaduría · la firma se descubre, no se decide",
          texto: "No elijas tu firma como quien elige un logo. Mira tus 15 mejores planos: lo que se repita sin que tú lo hayas planificado, ESA es tu firma.",
          kinto: "Si miras la web de Kinto te das cuenta de que repiten 4 cosas siempre: madera clara, agua, vapor, manos. Eso es su firma de imagen. No fue decisión de diseño: fue patrón descubierto.",
          accion: "Lista de 15 planos. Encuentra qué se repite (un tipo de luz, un tipo de gesto, un color). Eso es tu firma. Anótala literalmente." },
    23: { tema: "Generativo · mezclar real y generado",
          texto: "Un showreel solo de imagen real cansa. Solo generado, miente. La mezcla 70/30 (real/generado) es la fórmula. Lo generado permite enseñar la 'Casa Leah ideal' antes de tenerla.",
          kinto: "Kinto usa render 3D mezclado con foto en muchos lookbooks. Donde no podían fotografiar el producto en ambiente, generaron el ambiente. Es legítimo si lo declaras al cliente. Si lo escondes, es estafa.",
          accion: "3 PNG generadas hoy: misma luz, mismo aire, mismas texturas que las fotos reales del archivo. El test: si alguien no puede distinguir cuál es real, lo lograste." },
    24: { tema: "Curaduría · contar una historia visual",
          texto: "8–10 planos no son una lista, son una secuencia emocional. Apertura → desarrollo → intimidad → cierre. Mira cualquier video bueno de hotel: sigue esta estructura sin excepción.",
          kinto: "El video MUI de Kinto: empieza con una imagen amplia (la cocina), va al medio (la tetera siendo usada), al detalle (vapor), a la intimidad (mano vertiendo), y cierra con la taza llena reposando. Mismo arco en 25 s. Esa es la estructura.",
          accion: "Ordena tus 8–10 planos en este arco. Si te falta un plano de 'intimidad', anótalo: lo grabarás en mes 2." },
    25: { tema: "Edición · sin texto, sin logo en el corte",
          texto: "Showreel = imagen pura. Tu nombre va en el contenedor (Vimeo, web), no en el video. Confianza visual = silencio gráfico.",
          kinto: "Sus videos NUNCA tienen texto sobreimpreso. El producto se identifica solo. Si tu video necesita texto explicativo, el video falló. La estética es legible o no lo es.",
          accion: "Línea de tiempo nueva. Solo cortes y música. Ninguna pista de texto. Resiste la tentación de meter tu nombre dentro." },
    26: { tema: "Color · qué hace un LUT",
          texto: "Un LUT (Look Up Table) es una receta de color: 'cada vez que veas este azul, cámbialo por este otro azul'. Un LUT bien elegido unifica clips de cámaras, días y horas distintas.",
          kinto: "El look Kinto se puede describir en color: highlights cremosos (no blancos), sombras cálidas (no negras), saturación baja en cyan/azul, alta en naranja/terracota. Esto es un LUT específico. Lo construirás con el tiempo.",
          accion: "Prueba 3 LUTs gratis. El que más parezca 'cocina con leche al sol de la mañana' es el que te llevas. Ajusta exposición clip a clip por encima del LUT." },
    27: { tema: "Entrega · Vimeo, nunca YouTube",
          texto: "YouTube es para creadores, está lleno de recomendados y anuncios. Vimeo Pro es para profesionales: tu showreel ahí dice 'soy del oficio'. 75€/año, contraseña para clientes, reproductor minimalista.",
          kinto: "Marcas premium NUNCA enlazan a YouTube en su web. Siempre Vimeo o video embebido propio. El contenedor importa tanto como el contenido. Tu cliente boutique te juzga por eso.",
          accion: "Sube tu showreel a Vimeo privado, contraseña simple. Mira la URL: ahora puedes mandarla a un hotel sin vergüenza." },
    28: { tema: "Marca · el nicho es un cuchillo, no un abanico",
          texto: "Mientras más estrecho el nicho, más cara la tarifa. 'Hago video' = 500€. 'Video boutique' = 1500€. 'Video cinematográfico para hoteles boutique de slow living en México y España' = 4500€.",
          kinto: "Kinto no vende 'tazas'. Vende 'objetos para la mañana lenta'. Esa frase precisa cierra el 80% del mercado para abrir el 20% que paga. Tu trabajo es escribir esa frase exacta para Studio Cavallari.",
          accion: "5 versiones de tu frase. Una de cada: con verbo, sin verbo, larga, corta, poética. Elige la que asusta un poco — la que excluye claramente. Esa es." },
    29: { tema: "Comercial · el pipeline es la oficina",
          texto: "20 hoteles no son 20 clientes. Son tu pipeline: la lista de a quién escribes mes a mes. Tasa de respuesta realista 30%, conversión 10–15%. De 20 emails salen 2–3 conversaciones reales.",
          kinto: "Detrás de cada lanzamiento Kinto hay una lista cerrada de medios, tiendas, influencers que reciben primero. Nunca disparan al aire. Lista cerrada + email personalizado = tasa decente. Lista abierta + email genérico = 0%.",
          accion: "Cada hotel de tu lista de 20: nombre, web, ciudad, contacto humano (no info@), 3 palabras de por qué conecta con tu estética. Ese campo de '3 palabras' es lo que personaliza el email después." },
    30: { tema: "Reflexión · honestidad con miedo",
          texto: "Al final del mes 1 vas a sentir, a la vez, orgullo y miedo. Las dos cosas son señales correctas. Orgullo dice 'esto es real'. Miedo dice 'algo está cambiando'.",
          kinto: "Toda marca que hoy tiene oficio empezó con un primer producto mal cosido. Lo importante no es el primer producto: es la disciplina de hacer el segundo, y el tercero, sin parar.",
          accion: "5 párrafos: qué aprendí · cuál es mi firma con datos · qué me cuesta · qué quiero en mes 2 · qué me da miedo. Sin maquillar nada." }
  },

  // Mes 1 · día a día con clase doble (base técnica + adaptación por cliente)
  days: [
    // ────────── DÍAS YA HECHOS ──────────
    { n: 1, week: 0, title: "Calibrar el ojo", theme: "Hecho", duration: 0, ref: 0,
      objetivo: "Primeros planos en terraza, DreamShaper instalado.",
      shots: [], luz: "", audio: "", entregable: "Carpeta día-01 archivada", done: true },

    { n: 2, week: 0, title: "Tres planos fijos", theme: "Hecho", duration: 0, ref: 1,
      objetivo: "Realistic Vision instalado, 3 planos terraza Casa Leah.",
      shots: [], luz: "", audio: "", entregable: "Carpeta día-02 archivada", done: true },

    // ────────── SEMANA 1 · BASES ──────────
    { n: 3, week: 1, title: "ComfyUI · el mismo prompt en dos modelos", theme: "Generativo", duration: 30, ref: 2,
      objetivo: "Descubrir diferencias entre DreamShaper 8 y Realistic Vision V6.0 B1.",
      equipo: "Dell XPS con ComfyUI.",
      aprendizaje: "10 min leyendo la página de Realistic Vision en Civitai. Mirar imágenes de ejemplo.",
      setup: "ComfyUI abierto. Workflow txt2img básico. 768×512 · 25 steps · seed fija 12345.",
      shots: [
        { tag: "Prompt+", frame: "mediterranean villa terrace at golden hour, terracotta floor, bougainvillea climbing on wall, soft natural light, magazine architectural digest, raw photo, photorealistic, cinematic, slow living", model: "—", seed: "Positivo" },
        { tag: "Prompt-", frame: "cartoon, illustration, watermark, text, blurry, low quality, oversaturated", model: "—", seed: "Negativo" },
        { tag: "Gen 01", frame: "Misma escena · DreamShaper 8", model: "DreamShaper 8", seed: "12345" },
        { tag: "Gen 02", frame: "Misma escena exacta · Realistic Vision", model: "Realistic Vision V6.0 B1", seed: "12345" },
        { tag: "Compara", frame: "Lado a lado. Anotar: 'Realistic Vision es más X, DreamShaper es más Y. Para Casa Leah elijo ___'", model: "—", seed: "—" }
      ],
      luz: "—", audio: "—",
      traduccionMental: "villa mediterránea / terraza / **hora dorada** / suelo terracota / buganvilla trepando muro / luz suave natural / **architectural digest** / **foto cruda** / fotorealista / cinemático / slow living",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Prompt+ base + añadir 'architectural digest cover, golden hour interior, no people'. txt2img, seed 12345, 768×512, 25 steps. Generar 3 variantes solo cambiando seed (12345·12346·12347). Esta versión la enseñas al cliente con tu propuesta de rodaje." },
        { cliente: "Inmobiliario lujo", adaptacion: "Prompt+ base + añadir 'wide architectural view, multiple windows, no people, daylight'. txt2img, seed 12345, 768×512, 25 steps. Render para listing visual antes de scouting." },
        { cliente: "Marca slow living", adaptacion: "Prompt+ base + añadir 'ceramic objects on linen-covered table, soft morning window light, no people, still life'. txt2img, seed 12345, 768×512, 25 steps. Moodboard de paleta cuando la cerámica aún se está cociendo." },
        { cliente: "Editorial", adaptacion: "Prompt+ base + añadir 'white linen curtain in foreground filling 60% of frame, magazine spread composition, vast negative space'. txt2img, seed 12345, 768×512, 25 steps. Pitch visual para revista antes de proponerla." }
      ],
      ejercicioAdaptativo: "Genera la misma terraza con dos prompts: uno orientado a hotel (sin figura) y otro a editorial (cortina movida por viento dominando el cuadro). Compara qué cambia.",
      entregable: "2 PNG + 1 línea de texto comparando modelos. Carpeta día-03/",
      pista: "Misma seed garantiza que la única variable sea el modelo. Disciplina de cambiar una sola cosa." },

    { n: 4, week: 1, title: "DaVinci Resolve · instalación e interfaz", theme: "Software", duration: 25, ref: 0,
      objetivo: "DaVinci instalado, conocer las 7 pestañas.",
      equipo: "Dell XPS.",
      aprendizaje: "Primeros 10 min del tutorial oficial Blackmagic en YouTube: 'DaVinci Resolve 19 · Beginner Tutorial'.",
      setup: "Descargar DaVinci Resolve 19 de la web oficial Blackmagic Design. Instalar. Liberar 4GB de espacio antes si hace falta.",
      shots: [
        { tag: "Proyecto", frame: "Crear proyecto vacío llamado 'casa-leah-prueba'", model: "DaVinci 19", seed: "—" },
        { tag: "Media", frame: "Pestaña Media — importar archivos. Solo abrir, no importar nada.", model: "—", seed: "—" },
        { tag: "Cut", frame: "Pestaña Cut — edición rápida. Visión general.", model: "—", seed: "—" },
        { tag: "Edit", frame: "Pestaña Edit — edición clásica. La que más usarás.", model: "—", seed: "—" },
        { tag: "Color", frame: "Pestaña Color — corrección. El doble de tiempo aquí que en Edit.", model: "—", seed: "—" },
        { tag: "Fairlight", frame: "Pestaña Fairlight — audio. Solo mirar.", model: "—", seed: "—" },
        { tag: "Deliver", frame: "Pestaña Deliver — exportar. Solo mirar el panel.", model: "—", seed: "—" }
      ],
      luz: "—", audio: "—",
      entregable: "DaVinci instalado · proyecto vacío 'casa-leah-prueba' creado.",
      pista: "No editar nada. Solo familiarizarse con el mapa. Especial atención a Color." },

    { n: 5, week: 1, title: "Tres planos fijos + audio ambiente", theme: "Captura", duration: 40, ref: 0,
      objetivo: "Primeros planos KINTO completos en Casa Leah con audio limpio.",
      equipo: "iPhone 16 Pro, Blackmagic Camera, trípode mini, auriculares (DJI Mic 2 si ya llegó).",
      aprendizaje: "5 min revisando Planos KINTO 1 (cenital) y 2 (ventana lateral) de la sección de planos.",
      setup: "Golden hour vespertina · 1h antes del atardecer · terraza Casa Leah con Tepozteco al fondo · 4K 24fps Apple Log · ISO 100–200 · shutter 1/50 · balance 5500K.",
      shots: [
        { tag: "Plano A · amplio", frame: "Terraza completa con vegetación en primer plano (encuadre dentro del encuadre)", model: "iPhone 1× trípode a 30–50cm del suelo", seed: "15 s · fijo · regla de tercios" },
        { tag: "Plano B · medio", frame: "Rincón con objeto bonito (silla, mesita, taza). Luz dorada lateral, sombras suaves visibles.", model: "Altura pecho, trípode", seed: "12 s · fijo" },
        { tag: "Plano C · detalle", frame: "Textura: pared de cal con sombra de palma · hoja con luz transmitida · vetas de madera", model: "Lente 2× si textura pequeña, trípode firme", seed: "10 s · fijo" },
        { tag: "Audio", frame: "60 s de room tone del lugar. Sin hablar.", model: "DJI Mic 2 o audio interno Blackmagic", seed: "Capa de textura" }
      ],
      luz: "Hora dorada lateral. Sombras del sujeto cayendo hacia un lado del encuadre, no hacia la cámara, no hacia el fondo.",
      audio: "60 s tono de sala obligatorios. Sin AC, sin nevera. Sin viento fuerte.",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Tal cual, 10–15s cada plano, sin figura, paleta dorada. KINTO casi puro." },
        { cliente: "Marca cerámica / lino", adaptacion: "Sustituir el objeto del Plano B por el producto. Espacio negativo más amplio en el detalle." },
        { cliente: "Editorial", adaptacion: "Cortes más largos (15s cada uno). Composición más rigurosa. Cero movimiento de cámara, ni un milímetro." },
        { cliente: "Restaurante (terraza)", adaptacion: "Añadir vapor o taza humeante en el Plano C. Ritmo un punto más cálido." },
        { cliente: "Inmobiliario lujo", adaptacion: "Amplio dominante (20s), detalle reducido. Transmite escala y aire, no intimidad." }
      ],
      ejercicioAdaptativo: "Filma los 3 planos base. Después repite el Plano B con dos adaptaciones: una versión 'hotel' (paleta dorada, objeto cotidiano) y una versión 'inmobiliario' (más amplio, más arquitectónico). Compara los tres en DaVinci.",
      entregable: "3 clips base + 2 clips adaptación + 1 wav ambiente en día-05/",
      pista: "Si tiembla la mano al pulsar grabar, contar hasta 3 antes de mover. Las vibraciones del inicio arruinan el plano." },

    { n: 6, week: 1, title: "DaVinci · importar y reproducir", theme: "Software", duration: 30, ref: 1,
      objetivo: "Meter el material del día 5 en DaVinci. Entender el flujo de ingesta y reproducción Log.",
      equipo: "Dell XPS, DaVinci, archivos día 5.",
      aprendizaje: "Minutos 10–20 del tutorial Blackmagic.",
      setup: "Abrir el proyecto 'casa-leah-prueba'. Tener los archivos del día 5 en una carpeta accesible.",
      shots: [
        { tag: "Media", frame: "Arrastrar los 4 archivos del día 5 al Media Pool.", model: "DaVinci · Media", seed: "—" },
        { tag: "Timeline", frame: "Pestaña Edit · crear nueva línea de tiempo 'dia-05-test' · 1080p 24fps.", model: "—", seed: "—" },
        { tag: "Soltar", frame: "Arrastrar Plano A a la línea. Reproducir. Notar que se ve gris-apagado.", model: "—", seed: "Es Apple Log sin convertir. Correcto." },
        { tag: "Resto", frame: "Arrastrar Plano B, C y el audio. Reproducir el conjunto.", model: "—", seed: "—" },
        { tag: "Mirar", frame: "Reproducir 3 veces. No cortar, no tocar nada.", model: "—", seed: "Sólo entender el flujo." }
      ],
      luz: "—", audio: "—",
      entregable: "Timeline 'dia-05-test' con los 3 clips + audio cargados.",
      pista: "Si reproduce a tirones: Project Settings → Image Scaling → 'Optimized Media'. Genera proxies que aligeran la edición." },

    { n: 7, week: 1, title: "ComfyUI img2img · foto real a versión cinemática", theme: "Generativo", duration: 30, ref: 7,
      objetivo: "Usar img2img para mejorar la luz de una foto real del listing.",
      equipo: "Dell XPS, ComfyUI, una foto real Casa Leah.",
      aprendizaje: "5 min YouTube 'ComfyUI img2img tutorial' (cualquier video reciente).",
      setup: "ComfyUI con workflow img2img · Realistic Vision V6.0 B1 · cargar foto real (techo de bambú, patio, piscina).",
      shots: [
        { tag: "Input", frame: "Foto real del listing existente · techo de bambú u otro detalle del Airbnb.", model: "img2img · Realistic Vision V6", seed: "—" },
        { tag: "Prompt+", frame: "same composition, golden hour light, magazine architectural digest, raw photo, photorealistic, cinematic", model: "—", seed: "—" },
        { tag: "Var A · 0.3", frame: "Denoise 0.3 · cambio sutil, foto casi original con toque IA", model: "—", seed: "El sweet spot comercial" },
        { tag: "Var B · 0.5", frame: "Denoise 0.5 · cambio medio, reinterpreta la luz", model: "—", seed: "—" },
        { tag: "Var C · 0.7", frame: "Denoise 0.7 · cambio grande, ya es otra casa", model: "—", seed: "Anotar cuál engaña más sin perder identidad" }
      ],
      luz: "—", audio: "—",
      traduccionMental: "**misma composición** / hora dorada / architectural digest / **foto cruda** / fotorealista / cinemático",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "img2img sobre foto del listing. Denoise 0.30, seed 12345, 768×512, 25 steps. Prompt+ base + añadir 'same architecture, golden hour relighting, no people'. Genera 3 variantes (seeds 12345·12346·12347). La casa sigue siendo SU casa." },
        { cliente: "Inmobiliario lujo", adaptacion: "img2img. Denoise 0.25 (más fidelidad), seed 12345, 768×512, 25 steps. Prompt+ + 'same architecture exactly, late afternoon side light, no people'. Render para listing antes de visitar." },
        { cliente: "Restaurante", adaptacion: "img2img sobre foto del plato o sala. Denoise 0.40, seed 12345, 768×512, 25 steps. Prompt+ + 'steam rising, side rim light, deep warm shadows'. Permite añadir atmósfera sin reinventar el plato." },
        { cliente: "Marca slow living", adaptacion: "img2img sobre foto del producto. Denoise 0.45, seed 12345, 768×512, 25 steps. Prompt+ + 'morning ritual, hands in frame, soft side window light'. Idealiza luz manteniendo producto reconocible." }
      ],
      ejercicioAdaptativo: "Coge UNA foto del listing y genera 3 versiones para 3 clientes distintos. Un hotel (0.3), un restaurante (0.4) y editorial (0.5 con más drama de luz). Anota qué denoise sirve a cada uno.",
      entregable: "3 PNG comparativas + 1 carpeta por cliente en día-07/",
      pista: "Denoise alto es tentador pero pierde identidad del lugar. Para uso comercial casi siempre 0.2–0.4." },

    // ────────── SEMANA 2 · PRIMEROS CORTES ──────────
    { n: 8, week: 2, title: "Primer corte simple en DaVinci", theme: "Edición", duration: 35, ref: 2,
      objetivo: "Primer corte completo: 3 clips a 5s cada uno, sin color, sin música, sin transiciones.",
      equipo: "Dell XPS, DaVinci, archivos día 5.",
      aprendizaje: "Minutos 20–30 del tutorial Blackmagic.",
      setup: "Proyecto 'casa-leah-prueba' · timeline nueva 'dia-08-corte' · 1080p 24fps.",
      shots: [
        { tag: "Cortar", frame: "Cada clip a 5 s exactos. Atajo B (blade) para cortar, A (select) para seleccionar y borrar sobrante.", model: "DaVinci · Edit", seed: "—" },
        { tag: "Orden", frame: "Amplio → medio → detalle. Cut directo entre clips. Sin transiciones.", model: "—", seed: "—" },
        { tag: "Audio", frame: "Audio ambiente debajo, volumen -20 dB.", model: "—", seed: "—" },
        { tag: "Export", frame: "Deliver → preset 'YouTube 1080p' · H.264 1080p 24fps.", model: "DaVinci · Deliver", seed: "Sin LUT, sin color" },
        { tag: "Mirar", frame: "Reproducir el .mp4 fuera de DaVinci (QuickTime). Sentir el ritmo de 5s.", model: "QuickTime", seed: "—" }
      ],
      luz: "—", audio: "—",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Cortes de 5–6s, calma absoluta. Cut directo entre todos." },
        { cliente: "Restaurante", adaptacion: "Cortes de 3–4s, ritmo un punto más vivo. Audio ambiente más presente, -16 dB en lugar de -20." },
        { cliente: "Editorial", adaptacion: "Cortes de 6–8s, máxima quietud. Posible cross-dissolve de 10 frames entre uno y otro." },
        { cliente: "Boda discreta", adaptacion: "Cortes de 4–5s, narrativa suave. Permitir 1 fundido en el medio si la luz cambia mucho entre planos." },
        { cliente: "Marca slow living", adaptacion: "Cortes de 5–7s, casi contemplativo. Audio ambiente protagonista." }
      ],
      ejercicioAdaptativo: "Haz tres exports del mismo material: uno a 4s por plano (ritmo restaurante), uno a 5s (hotel) y uno a 7s (editorial). Mira los tres seguidos. Anota cuál te parece TU ritmo natural.",
      entregable: "primer-corte-dia08.mp4 + 2 variantes de ritmo en día-08/",
      pista: "Cut directo (sin fundidos) casi siempre más profesional que fundido a negro. Reserva los fundidos para cuando la luz cambia mucho." },

    { n: 9, week: 2, title: "Captura · detalle, no general", theme: "Captura", duration: 30, ref: 4,
      objetivo: "Lección clave KINTO — cuando el lugar es feo, filmas detalle. 5 detalles aislados en Casa Leah.",
      equipo: "iPhone, Blackmagic Camera, trípode.",
      aprendizaje: "5 min revisando Planos KINTO 3 (textura) y 7 (reflejo).",
      setup: "Golden hour ideal (cualquier hora con buena luz funciona) · Casa Leah pero olvidar lo 'bonito' entero · 4K 24fps Apple Log · ISO 100 · shutter 1/50.",
      shots: [
        { tag: "Detalle A", frame: "Sombra de planta sobre pared de cal (oleandro, palmera, buganvilla). Sombra nítida con sol fuerte detrás.", model: "iPhone trípode, ojo a la sombra no a la planta", seed: "10 s · fijo" },
        { tag: "Detalle B", frame: "Textura de madera o piedra con luz lateral rasante marcada.", model: "Lente 2×, foco manual", seed: "10 s · fijo" },
        { tag: "Detalle C", frame: "Reflejo en agua de piscina, cobre, vidrio. Componer el reflejo, no el sujeto real.", model: "Contrapicado, 0.5× si hace falta", seed: "10 s · fijo" },
        { tag: "Detalle D", frame: "Tejido (manta, cojín, cortina) con luz lateral. Lino arrugado con sombras suaves.", model: "Macro improvisado", seed: "10 s · fijo" },
        { tag: "Detalle E", frame: "Objeto cotidiano en silencio: taza, libro, copa, jarrón. Espacio negativo amplio.", model: "Cenital o altura mesa", seed: "10 s · fijo" }
      ],
      luz: "Lateral rasante: la luz casi paralela a la superficie revela textura. Sitúate de modo que la luz roce el detalle.",
      audio: "30 s extra de ambiente al final.",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Textura de piedra, madera y cerámica del lugar. Cada detalle abre una habitación." },
        { cliente: "Marca cerámica", adaptacion: "Detalle del producto con luz rasante fuerte. Macro · acercarte hasta que se vean los poros del barro." },
        { cliente: "Restaurante", adaptacion: "Sustituye los detalles por ingredientes: textura de pan, sal gruesa, salpicadura, vapor. Más saturación en cálidos." },
        { cliente: "Marca lino", adaptacion: "Tejido arrugado dominante. Sombras suaves dentro de los pliegues. Espacio negativo amplio." },
        { cliente: "Inmobiliario lujo", adaptacion: "Detalle de material noble: mármol, latón, roble. Sin elementos cotidianos, solo arquitectura." },
        { cliente: "Editorial", adaptacion: "Composición pictórica, espacio negativo dominante (objeto 25% del encuadre). 12s por plano, casi sin movimiento." }
      ],
      ejercicioAdaptativo: "Después de los 5 detalles base, elige UN detalle (ej. textura de madera) y refílmalo dos veces más: una para 'marca lino' (objeto sobre el detalle) y otra para 'editorial' (composición pictórica con espacio negativo dominante). Compara.",
      entregable: "5 clips detalle base + 2 adaptaciones en día-09/",
      pista: "Filmando general el lugar es soso. Filmando detalle se transforma. Es la lección que más vas a usar con clientes." },

    { n: 10, week: 2, title: "Curaduría · primera semana", theme: "Reflexión", duration: 25, ref: 5,
      objetivo: "Parar a mirar lo acumulado. Saber dónde estás antes de seguir.",
      equipo: "Solo tu visor y una nota.",
      aprendizaje: "Ninguno hoy.",
      setup: "Casa Leah, tarde tranquila. Sin cámara.",
      shots: [
        { tag: "Open", frame: "Abrir carpetas día-01 a día-09 en visor de fotos o Finder.", model: "—", seed: "10 min mirando" },
        { tag: "Marcar", frame: "Estrella en los 5 mejores trabajos de la semana.", model: "—", seed: "—" },
        { tag: "Notar", frame: "Tres frases: 'Mi firma esta semana fue ___' · 'Lo que más me costó fue ___' · 'Lo que más disfruté fue ___'", model: "Notion o cuaderno", seed: "Sin maquillar" }
      ],
      luz: "—", audio: "—",
      entregable: "Una nota corta con autoconocimiento.",
      pista: "No comparar con KINTO ni con referencias. Comparar solo con dónde estabas hace 10 días." },

    { n: 11, week: 2, title: "Color · Apple Log a Rec.709", theme: "Color", duration: 35, ref: 3,
      objetivo: "La única cosa de color que necesitas esta semana — la conversión técnica base.",
      equipo: "Dell XPS, DaVinci, clips días 5 o 9.",
      aprendizaje: "15 min YouTube 'Apple Log to Rec.709 DaVinci Resolve'. Tutorial corto Blackmagic.",
      setup: "DaVinci · proyecto 'color-prueba' · importar 2-3 clips del día 5 o 9.",
      shots: [
        { tag: "Timeline", frame: "Clip a línea de tiempo. Ir a pestaña Color.", model: "DaVinci · Color", seed: "—" },
        { tag: "Nodo 01", frame: "Botón derecho → Add Node → Add Serial. Aplicar Color Space Transform.", model: "—", seed: "—" },
        { tag: "Setup CST", frame: "Input Color Space: Apple Log · Input Gamma: Apple Log · Output Color Space: Rec.709 · Output Gamma: Gamma 2.4", model: "—", seed: "Si queda demasiado contrastado: Gamma 2.2" },
        { tag: "Comparar", frame: "Alternar nodo ON/OFF con bypass (Ctrl/Cmd + D). Ver el cambio.", model: "—", seed: "Esto es lo mínimo profesional" },
        { tag: "PowerGrade", frame: "Botón derecho en el grado → Save Still as PowerGrade · nombrar 'BASE · Log to 709'", model: "—", seed: "Lo reutilizarás en TODO clip Log" }
      ],
      luz: "—", audio: "—",
      postproduccion: "El PowerGrade 'BASE · Log to 709' será el primer nodo de todo clip Apple Log durante los próximos 80 días.",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Sobre la conversión base, segundo nodo: lift cálido suave, gain cálido suave. Paleta tierra-dorada." },
        { cliente: "Restaurante", adaptacion: "Conversión base · segundo nodo: saturación +5 en cálidos, contraste medio-alto. Sombras profundas que dan apetito." },
        { cliente: "Marca lino / cerámica", adaptacion: "Conversión base · segundo nodo: desaturación elegante, casi monocroma cremosa. Highlights sin recortar." },
        { cliente: "Editorial", adaptacion: "Conversión base · segundo nodo: contraste alto, blancos cremosos, sombras casi carbón. Casi sin saturación." },
        { cliente: "Boda discreta", adaptacion: "Conversión base · segundo nodo: cálidos suaves, piel respetada (sin volverla naranja). Sombras presentes pero no duras." },
        { cliente: "Inmobiliario lujo", adaptacion: "Conversión base · segundo nodo: neutros con highlights controlados. Nada de calentar excesivamente — la luz debe parecer la real del espacio." }
      ],
      ejercicioAdaptativo: "Aplica la conversión base al mismo clip y duplica el timeline tres veces. En cada uno, añade un segundo nodo distinto: paleta hotel · paleta editorial · paleta restaurante. Captura los tres y compara.",
      entregable: "PowerGrade 'BASE · Log to 709' guardado + 3 capturas de adaptación en día-11/",
      pista: "Si queda demasiado contrastado, prueba Output Gamma 2.2 en lugar de 2.4. Suele suavizar lo justo." },

    { n: 12, week: 2, title: "ComfyUI · figura femenina en espacio", theme: "Generativo", duration: 30, ref: 6,
      objetivo: "Primera figura femenina en espacio Casa Leah. Aprender prompt positivo + negativo de figura.",
      equipo: "Dell XPS, ComfyUI.",
      aprendizaje: "5 min revisando Plano KINTO 5 (figura femenina de espaldas).",
      setup: "Realistic Vision V6.0 B1 · txt2img · 768×512.",
      shots: [
        { tag: "Prompt+", frame: "mediterranean woman, late 30s, linen dress in cream color, walking through luxury mexican villa terrace, terracotta floor, bougainvillea climbing walls, golden hour light, seen from behind, full body, raw photo, photorealistic, soft natural light, slow living aesthetic", model: "Realistic Vision V6", seed: "—" },
        { tag: "Prompt-", frame: "deformed hands, bad anatomy, blurry, cartoon, watermark, multiple people, frontal face, looking at camera, plastic skin, oversaturated", model: "—", seed: "Negativos base" },
        { tag: "Var 1", frame: "Tal cual el prompt", model: "—", seed: "Seed A" },
        { tag: "Var 2", frame: "Añadir 'carrying a wicker basket'", model: "—", seed: "Seed A" },
        { tag: "Var 3", frame: "Añadir 'long hair flowing in the wind'", model: "—", seed: "Seed A" }
      ],
      luz: "—", audio: "—",
      traduccionMental: "mujer mediterránea / treinta y tantos / vestido lino crema / caminando / villa mexicana / suelo terracota / buganvilla / hora dorada / **de espaldas** / **cuerpo entero** / **foto cruda** / fotorealista / luz suave natural / slow living",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Prompt base como está. Seed 7777, 768×512, 30 steps, CFG 7. Generar 5 variantes solo cambiando seed (7777-7781). Mantener 'seen from behind, full body' obligatorio. Anfitriona caminando hacia terraza." },
        { cliente: "Marca moda nicho", adaptacion: "Misma seed 7777, 768×512. Sustituir 'linen dress in cream color' por descripción exacta del producto. Añadir al positivo 'fabric flowing, garment as protagonist, texture detail visible'. 3 variantes." },
        { cliente: "Boda discreta", adaptacion: "Seed 7777, 768×512. Sustituir 'linen dress' por 'simple silk wedding gown'. Sustituir 'villa terrace' por 'mediterranean courtyard, masía garden'. Añadir 'soft veil'. 3 variantes." },
        { cliente: "Marca fragancia", adaptacion: "Seed 7777, 768×512. Añadir al positivo 'soft focus, dreamy, atmospheric, dust particles in light'. Bajar steps a 25 (más onírico). Figura como atmósfera." },
        { cliente: "Editorial", adaptacion: "Seed 7777, 768×512. Añadir al positivo 'looking at distant horizon, contemplative stillness, magazine spread composition, vast negative space'. Subir CFG a 8 (más rigor compositivo)." },
        { cliente: "Videopoema personal", adaptacion: "Seed 7777, 768×512. Sustituir 'full body shot' por 'close-up of shoulder and neck'. Añadir 'intimate body landscape, skin texture detail'. 3 variantes — es tu cuerpo en el prompt mental." }
      ],
      ejercicioAdaptativo: "Mantén misma seed, mismo negativo. Cambia SOLO el prompt positivo para generar la misma figura adaptada a tres clientes distintos: una versión hotel, una marca fragancia, una videopoema personal. Compara qué cambia con qué palabras.",
      entregable: "3 PNG variantes base + 3 PNG adaptaciones en día-12/",
      pista: "'seen from behind', 'full body' y 'frontal face' en negativo evitan el 80% de los problemas de IA con caras." },

    { n: 13, week: 2, title: "Cuerpo de espaldas · la solución a la vergüenza", theme: "Captura", duration: 40, ref: 8,
      objetivo: "Filmar persona real de espaldas. Nadie está incómodo de espaldas.",
      equipo: "iPhone, Blackmagic Camera, trípode + otra persona (Coral, Gia, vecina, tú con autodisparador).",
      aprendizaje: "5 min leyendo 'Cuando la gente tiene vergüenza' del kit de campo.",
      setup: "Golden hour vespertina · sujeto con ropa neutra (blanco, beige, terracota, lino), sin estampados · 4K 24fps Apple Log · ISO 200 · shutter 1/50.",
      shots: [
        { tag: "Plano A", frame: "Amplio · figura caminando hacia terraza, ventana o jardín. Entra por un lado, sale por otro.", model: "Trípode altura cintura · regla de tercios, NO centro", seed: "10 s" },
        { tag: "Plano B", frame: "Medio · figura quieta mirando algo (paisaje, ventana, Tepozteco). Pelo movido por viento ayuda.", model: "Altura cintura, contraluz suave", seed: "8 s" },
        { tag: "Plano C", frame: "Detalle · hombro, nuca o codo con luz lateral. Cuerpo como paisaje · sin cara, solo fragmento.", model: "Lente 2×, foco en silueta", seed: "8 s" }
      ],
      luz: "Hora dorada lateral o contraluz puro. Cara invisible, cuerpo identificable.",
      audio: "DJI Mic 2 en TX cerca del sujeto. Pasos sobre piedra son oro. Ropa que se mueve también.",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Anfitriona caminando hacia terraza, recibiendo. Cara invisible, gesto de servicio. Plano A dominante." },
        { cliente: "Boda discreta", adaptacion: "Novia de espaldas con velo, ventana al fondo. Plano B dominante. Luz dorada contraluz." },
        { cliente: "Marca moda nicho", adaptacion: "Tejido en movimiento. Cuerpo identificable más que la persona. Plano A · ropa amplia que respira con el paso." },
        { cliente: "Spa / retiro", adaptacion: "Cuerpo entrando a baño, agua al fondo. Pasos descalzos sobre piedra. Plano C en hombro con gotas." },
        { cliente: "Videopoema personal", adaptacion: "Cuerpo como paisaje · Plano C dominante. Hombro, cuello, nuca con luz rasante." },
        { cliente: "Marca lino", adaptacion: "Figura llevando producto (camisa, kaftán). Tejido en movimiento. Plano A con caminata lenta." }
      ],
      ejercicioAdaptativo: "Después de los 3 planos base, repite el Plano A dos veces: una versión 'hotel boutique' (vestido cremoso, gesto de servicio, caminata hacia terraza) y una versión 'videopoema personal' (cuerpo más fragmentado, gesto íntimo).",
      entregable: "3 clips base + 2 adaptaciones en día-13/",
      pista: "Dirigir con frases concretas: 'camina hacia la ventana muy despacio'. 'Mira el Tepozteco como si lo vieras por primera vez'. Nunca 'haz algo bonito'." },

    { n: 14, week: 2, title: "Primer micro-montaje cinemático", theme: "Edición", duration: 60, ref: 9,
      objetivo: "Primer montaje real con color y audio. 30s con identidad.",
      equipo: "Dell XPS, DaVinci, clips días 5, 9, 13.",
      aprendizaje: "Minutos 30–45 del tutorial Blackmagic.",
      setup: "Proyecto 'micro-montaje-dia14' · timeline 1080p 24fps.",
      shots: [
        { tag: "Seleccionar", frame: "5–7 clips: amplio + 2 detalles + figura caminando + textura + reflejo + audio ambiente.", model: "DaVinci · Media Pool", seed: "—" },
        { tag: "Estructura", frame: "0–5s amplio con encuadre dentro del encuadre · 5–13s figura caminando · 13–18s detalle textura · 18–23s detalle reflejo · 23–30s cierre amplio o detalle final.", model: "—", seed: "30 s total" },
        { tag: "Color", frame: "Aplicar PowerGrade 'BASE · Log to 709' a CADA clip.", model: "—", seed: "—" },
        { tag: "Audio", frame: "Audio ambiente debajo a -22 dB.", model: "—", seed: "Sin música hoy" },
        { tag: "Export", frame: "Deliver H.264 1080p 24fps preset 'YouTube'.", model: "DaVinci · Deliver", seed: "—" },
        { tag: "Mirar", frame: "Reproducir 3 veces. Anotar 3 cosas a mejorar.", model: "—", seed: "—" }
      ],
      luz: "—", audio: "Ambiente como única pista. Sin música.",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Estructura amplio → detalle → figura → detalle. Calma. 30s. Cortes 5–6s." },
        { cliente: "Restaurante", adaptacion: "Estructura más rápida: 25s totales. Cortes 3–4s. Incluir un plano con sonido de cocina dominante." },
        { cliente: "Marca slow living", adaptacion: "Estructura contemplativa. 35–40s. Cortes 6–7s. Audio ambiente protagonista, casi sin imagen al inicio." },
        { cliente: "Editorial", adaptacion: "Máxima quietud. 40s. Cortes 8–10s. Casi sin música (o piano solo). Posibles cross-dissolves." },
        { cliente: "Boda discreta", adaptacion: "Estructura narrativa con figura central. 30s. Cortes 4–5s. Permitir 1 fundido emotivo en el medio." },
        { cliente: "Videopoema personal", adaptacion: "Estructura libre. Texto o voz al final si quieres. Cortes a ritmo de respiración (variables, 3–8s)." }
      ],
      ejercicioAdaptativo: "Haz dos exports del mismo material: uno con estructura 'hotel' (30s, 5–6s por plano) y uno con estructura 'editorial' (40s, 8–10s por plano con cross-dissolves de 15 frames). Mira los dos sin sonido. Anota qué te enseña cada ritmo.",
      entregable: "micro-montaje-dia14.mp4 + variante editorial + 3 frases de notas en día-14/",
      pista: "Cut directo casi siempre más profesional que fundido a negro. Reserva fundidos para cuando la luz cambia mucho entre clips o para piezas emotivas (boda, videopoema)." },

    { n: 15, week: 2, title: "Cierre de quincena · reflexión", theme: "Reflexión", duration: 25, ref: 10,
      objetivo: "Pausar, mirar, escribir. Saber qué se está consolidando.",
      equipo: "Una nota.",
      aprendizaje: "Ninguno hoy.",
      setup: "Casa Leah, tarde tranquila. Sin pantalla si puedes.",
      shots: [
        { tag: "P1", frame: "¿Qué aprendí esta quincena? Concreto, técnico.", model: "—", seed: "—" },
        { tag: "P2", frame: "¿Qué se consolida como mi firma? (qué planos vuelvo a hacer sin pensar)", model: "—", seed: "—" },
        { tag: "P3", frame: "¿Qué necesito en la siguiente? Qué falta técnicamente, qué da miedo.", model: "—", seed: "Sin maquillar" }
      ],
      luz: "—", audio: "—",
      entregable: "3 párrafos cortos en el cuaderno.",
      pista: "Si cuesta empezar: 'Lo más sorprendente esta quincena fue ___'." },

    // ────────── SEMANA 3 · AUDIO Y LUZ A FONDO ──────────
    { n: 16, week: 3, title: "Primer uso del DJI Mic 2", theme: "Audio", duration: 45, ref: 11,
      objetivo: "Configurar DJI Mic 2 y primera prueba de voz + ambiente.",
      equipo: "iPhone, Blackmagic Camera, DJI Mic 2 (2 TX + 1 RX), cable USB-C, auriculares cableados.",
      aprendizaje: "15 min guía rápida DJI Mic 2 (caja o web DJI).",
      setup: "Cargar TX y RX al 100%. Encender ambos, se vinculan solos. RX al iPhone con USB-C. Blackmagic Camera → Settings → Audio → External / DJI. Auriculares al jack del RX (no Bluetooth · tiene latencia).",
      shots: [
        { tag: "Setup", frame: "TX en tu solapa, 15–20 cm de la boca. Pinza hacia arriba.", model: "DJI Mic 2 · TX1", seed: "—" },
        { tag: "Config", frame: "Confirmar medidor en Blackmagic recibe señal al hablar. Picos máximos a -12 dB.", model: "Blackmagic Camera", seed: "—" },
        { tag: "Voz", frame: "60 s hablando a la cámara sobre Casa Leah, volumen normal. Escuchar en vivo con auriculares.", model: "Blackmagic Camera · Log", seed: "1 min" },
        { tag: "Ambiente", frame: "TX cerca de fuente ambiente (agua corriendo, viento, pájaros). Sin hablar.", model: "—", seed: "60 s limpios" },
        { tag: "Test 3 acciones", frame: "Audio de 3 acciones lentas: agua de llave 20s · mano apoyándose en mesa · paso descalzo sobre piedra. Sin imagen, solo audio.", model: "—", seed: "Material de oro" }
      ],
      luz: "Cualquiera. Hoy es solo audio.",
      audio: "Esta es la lección entera. Sin auriculares, vuelves al inicio.",
      entregable: "5 archivos audio (1 voz + 1 ambiente + 3 acciones) en día-16/",
      pista: "Si entra demasiado alto, ganancia del RX a -3 o -6 dB. Mejor un poco bajo que un poco alto: 0 dB = distorsión irreversible." },

    { n: 17, week: 3, title: "Leer la luz de una ventana", theme: "Luz", duration: 30, ref: 0,
      objetivo: "Aprender a VER la luz antes de grabar. Sin cámara.",
      equipo: "Solo tus ojos y una nota.",
      aprendizaje: "10 min revisando Fundamentos de luz, parte Dirección.",
      setup: "Casa Leah a cualquier hora. Sin cámara.",
      shots: [
        { tag: "Recorrer", frame: "Recorrer toda la casa. Anotar qué ventana da mejor luz lateral suave a cada hora del día.", model: "Solo ojo", seed: "20 min" },
        { tag: "Test A", frame: "Foto rápida iPhone: objeto bañado por luz (frontal a la ventana).", model: "iPhone foto, no video", seed: "—" },
        { tag: "Test B", frame: "Mismo objeto, contra la luz (espaldas a ventana).", model: "—", seed: "—" },
        { tag: "Test C", frame: "Mismo objeto, al lado de la luz (lateral).", model: "—", seed: "Anotar cuál se ve más cinemática" },
        { tag: "Mapa", frame: "Hoja de papel: planta de Casa Leah, cada ventana marcada con hora ideal.", model: "—", seed: "Tu base de datos de iluminación gratuita" }
      ],
      luz: "Esta es la lección. La luz lateral suave es tu firma.",
      audio: "—",
      entregable: "3 fotos + mapa de ventanas anotado en día-17/",
      pista: "La luz de KINTO no es magia: alguien la eligió. Tú eliges las que tienes. La elección está antes de la cámara." },

    { n: 18, week: 3, title: "Plano fijo con reflector", theme: "Captura", duration: 45, ref: 1,
      objetivo: "Ver con tus ojos lo que cambia un reflector blanco. Comparar blanco vs plata.",
      equipo: "iPhone, Blackmagic Camera, trípode, reflector 5-en-1.",
      aprendizaje: "5 min revisando reflector blanco en Fundamentos de luz.",
      setup: "Ventana del día 17, misma hora · 4K 24fps Apple Log · ISO 200 · shutter 1/50 · objeto bonito (botella, planta, libro, cerámica) a 1–2 m de la ventana.",
      shots: [
        { tag: "Plano A", frame: "Sin reflector. Una mejilla del objeto iluminada, otra en sombra profunda. 15 s.", model: "iPhone trípode", seed: "Referencia base" },
        { tag: "Plano B", frame: "Reflector blanco al lado opuesto de la ventana, a 1 m. Devuelve luz suave a la sombra.", model: "—", seed: "Misma composición exacta · 15 s" },
        { tag: "Plano C", frame: "Reflector plata al lado opuesto. Versión más intensa. Comparar.", model: "—", seed: "15 s" },
        { tag: "Comparar", frame: "En DaVinci, los 3 clips lado a lado. Anotar diferencia con palabras.", model: "DaVinci", seed: "—" }
      ],
      luz: "Ventana lateral suave. Reflector al lado opuesto, 1 m del sujeto. Si está a 3 m casi no rebota.",
      audio: "30 s ambiente al final.",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Reflector blanco · relleno medio. Sombras presentes pero respiran. Atmósfera cálida." },
        { cliente: "Marca cerámica", adaptacion: "Reflector blanco a distancia media · relleno máximo. El producto necesita ver todos sus poros." },
        { cliente: "Restaurante", adaptacion: "Reflector blanco · relleno medio. Sombras de plato dramáticas mantienen apetito." },
        { cliente: "Marca fragancia", adaptacion: "Reflector blanco lejos · relleno suave. Sombras presentes, atmósfera misteriosa." },
        { cliente: "Boda discreta", adaptacion: "Reflector blanco cerca · relleno alto en retrato. Piel respetada, sin sombras duras bajo ojos." },
        { cliente: "Editorial", adaptacion: "Sin reflector o reflector negro · contraste alto. Sombras dejan respirar al objeto, parte del concepto." }
      ],
      ejercicioAdaptativo: "Mismo objeto, misma luz. Tres exposiciones distintas con reflector: relleno alto (cerca, lado boda), relleno medio (1m, lado hotel), relleno cero/negro (sin reflector, lado editorial). Compara los tres en DaVinci, lado a lado.",
      entregable: "3 clips comparativos base + 3 adaptaciones por nivel de relleno en día-18/",
      pista: "Reflector dentro del rebote, no muy lejos. Si está a 3 m casi no rebota. A 1 m es óptimo." },

    { n: 19, week: 3, title: "Refinar prompt de figura · integración", theme: "Generativo", duration: 35, ref: 6,
      objetivo: "Figura femenina integrada en espacio, no flotando. Refinar negativos.",
      equipo: "Dell XPS, ComfyUI.",
      aprendizaje: "5 min mirando las 3 imágenes del día 12. Identificar problemas: figura flotando, luz inconsistente, piel demasiado lisa.",
      setup: "ComfyUI · Realistic Vision V6.0 B1 · txt2img · 768×512.",
      shots: [
        { tag: "Prompt+ refinado", frame: "mediterranean woman, late 30s, wearing flowing cream linen dress, walking barefoot through luxury mexican villa terrace at golden hour, terracotta floor, bougainvillea climbing on stucco wall, soft warm sunset light, seen from behind, full body shot, raw photo, photorealistic, natural skin texture with pores, slow living, architectural digest style, cinematic composition", model: "Realistic Vision V6", seed: "—" },
        { tag: "Prompt- refinado", frame: "floating, disconnected from environment, plastic skin, smooth skin, doll-like, frontal face, looking at camera, deformed hands, bad anatomy, blurry, cartoon, watermark, multiple people, oversaturated, neon colors, modern clothing", model: "—", seed: "—" },
        { tag: "Var 1–5", frame: "5 generaciones con seeds distintas. Mismo prompt exacto.", model: "—", seed: "5 seeds aleatorias" },
        { tag: "Ganadora", frame: "Elegir la mejor. Anotar 1 frase de por qué integra mejor.", model: "—", seed: "—" }
      ],
      luz: "—", audio: "—",
      traduccionMental: "mujer mediterránea / treinta y tantos / vestido lino crema fluido / caminando descalza / villa mexicana / hora dorada / suelo terracota / buganvilla trepando muro de estuco / luz cálida suave de atardecer / **de espaldas** / **cuerpo entero** / **foto cruda** / **textura natural de piel con poros** / slow living / architectural digest / composición cinemática",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Mantener prompt refinado tal cual. Seed ganadora del día 12 fijada. 768×512, 30 steps, CFG 7. Generar 3 variantes solo sustituyendo 'cream linen dress' por 'terracotta linen dress' y añadiendo 'wicker basket in hand'." },
        { cliente: "Marca moda nicho", adaptacion: "Sustituir 'flowing cream linen dress' por descripción exacta del producto. Añadir 'fabric flowing, texture detail visible, garment as protagonist'. Misma seed ganadora, 768×512, 30 steps, CFG 7." },
        { cliente: "Boda discreta", adaptacion: "Cambiar 'cream linen dress' por 'simple silk wedding gown'. Cambiar 'terracotta floor' por 'mediterranean garden, masía courtyard'. Añadir 'soft veil'. Seed nueva (la luz va a cambiar), 768×512, 30 steps." },
        { cliente: "Videopoema personal", adaptacion: "Cambiar 'full body shot' por 'close-up of shoulder and neck'. Añadir 'intimate body landscape'. Mantener 'natural skin texture with pores'. Seed nueva, 768×512, 35 steps (más detalle de piel)." },
        { cliente: "Marca fragancia", adaptacion: "Añadir 'soft focus, dreamy, atmospheric, dust particles in light'. Bajar CFG a 5 (menos literal, más onírico). Seed nueva, 768×512, 25 steps." }
      ],
      ejercicioAdaptativo: "Misma seed ganadora del día. Genera 3 variantes cambiando SOLO 2-3 palabras del prompt positivo para 3 clientes distintos. Compara qué tan poco hace falta cambiar para llegar a mercados distintos.",
      entregable: "5 PNG base + 1 ganadora marcada + 3 PNG adaptaciones en día-19/",
      pista: "'natural skin texture with pores' es palabra mágica para evitar piel de muñeca. Sin esa frase, la IA siempre alisa demasiado." },

    { n: 20, week: 3, title: "Hora dorada con propósito · secuencia de 5", theme: "Captura", duration: 60, ref: 2,
      objetivo: "Secuencia coherente de 5 planos en golden hour. Tu primer mini-video real.",
      equipo: "iPhone, Blackmagic Camera, trípode, reflector, DJI Mic 2.",
      aprendizaje: "5 min revisando Planos KINTO 1, 2, 3, 4, 5.",
      setup: "Empezar 1h30 antes del atardecer, terminar 30 min antes (filmar TODO en menos de 30 min para que la luz no cambie) · zona específica de Casa Leah (UN rincón concreto, no toda la casa) · 4K 24fps Apple Log · ISO 200 · shutter 1/50.",
      shots: [
        { tag: "01 Amplio", frame: "Lugar entero con encuadre dentro del encuadre. Sitúa al espectador.", model: "iPhone 1× trípode", seed: "8 s · fijo" },
        { tag: "02 Medio", frame: "Figura humana o objeto principal — persona de espaldas o 'héroe' del rincón.", model: "1×, altura cintura", seed: "8 s · fijo" },
        { tag: "03 Detalle textura", frame: "Madera, piedra, cerámica con luz lateral rasante.", model: "Macro 2×", seed: "8 s · fijo" },
        { tag: "04 Manos o sutil", frame: "Manos haciendo algo, café, vapor, vela, agua.", model: "—", seed: "8 s · fijo" },
        { tag: "05 Cierre", frame: "Detalle final que cierra la secuencia (vuelta circular o suspensión).", model: "—", seed: "8 s · fijo" }
      ],
      luz: "Hora dorada estricta. Los 5 planos deben tener LA MISMA luz. Si tardas más de 30 min, la luz cambia y los planos no casan.",
      audio: "60 s room tone del rincón al final.",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Secuencia 5 planos, 8s cada uno. Sin movimiento de cámara. Plano 2 con anfitriona de espaldas." },
        { cliente: "Marca cerámica / lino", adaptacion: "Sustituir Plano 2 (figura) por producto en escena. Producto en cada uno de los 5 planos, distintas escalas. 6–8s." },
        { cliente: "Restaurante", adaptacion: "Plano 4 dominante: manos cocinando. Plano 5: vapor del plato terminado. Cortes 6s. Más vivo." },
        { cliente: "Inmobiliario lujo", adaptacion: "Plano 1 amplio dominante (12s). Plano 4 sustituido por luz cambiando en otra ventana. Figura mínima (silueta atravesando). Sin manos." },
        { cliente: "Boda discreta", adaptacion: "Plano 2 con novios de espaldas en el medio. Plano 4 con anillos o manos entrelazadas. Cortes 7–8s con respiración emocional." },
        { cliente: "Editorial", adaptacion: "Máxima quietud. Cortes 10–12s. Sin figura humana (o silueta lejana). Composición más pictórica en cada plano." }
      ],
      ejercicioAdaptativo: "Filma la secuencia base. Después refilma SOLO el Plano 2 dos veces más: una versión 'hotel' (figura de espaldas) y una versión 'inmobiliario' (sin figura, luz cambiando en ventana). Compara cómo cambia toda la secuencia con solo cambiar un plano.",
      entregable: "5 clips base + 2 variantes del Plano 2 + audio en día-20/",
      pista: "Piensa la secuencia como un párrafo: introducción (amplio), desarrollo (medio + detalles), conclusión (cierre)." },

    { n: 21, week: 3, title: "Montar la secuencia del día 20", theme: "Edición", duration: 90, ref: 3,
      objetivo: "Primera secuencia narrativa con color y música. Pieza para portfolio.",
      equipo: "Dell XPS, DaVinci.",
      aprendizaje: "Minutos 45–60 del tutorial Blackmagic. Buscar 'epidemicsound free' YouTube para pista libre.",
      setup: "Proyecto 'secuencia-dia21' · timeline 1080p 24fps.",
      shots: [
        { tag: "Edit", frame: "5 clips en orden a la línea de tiempo. Cortar a 5–6s (no 8 — sobra al ver el conjunto).", model: "DaVinci · Edit", seed: "—" },
        { tag: "Color base", frame: "PowerGrade 'BASE · Log to 709' a cada clip.", model: "DaVinci · Color", seed: "—" },
        { tag: "Color refinement", frame: "Segundo nodo: ajuste manual ruedas. Lift suave cálido · gamma neutro · gain suave cálido. Hacer en UN clip, copiar grado (Shift+H) y pegar en los demás (Shift+G).", model: "—", seed: "—" },
        { tag: "Audio", frame: "Room tone debajo a -22 dB. Música simple libre de derechos a -18 dB. Empieza en el primer corte, sube en el medio, baja en el último.", model: "—", seed: "—" },
        { tag: "Export", frame: "Deliver H.264 1080p 24fps preset 'YouTube'.", model: "DaVinci · Deliver", seed: "—" }
      ],
      luz: "—", audio: "Música + ambiente bajo. Sin voz.",
      postproduccion: "Si los clips quedan desconectados visualmente, fundido cruzado 15–20 frames entre ellos (no más).",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Música ambient suave (piano, cuerda). Color cálido tierra. Sin voz. Cortes 5–6s." },
        { cliente: "Restaurante", adaptacion: "Música con percusión sutil (no jazz frenético). Color saturado un punto en cálidos. Sombras profundas." },
        { cliente: "Marca slow living", adaptacion: "Música casi inexistente (un piano solo). Color cremoso, casi sepia. Sonidos ambientes protagonistas." },
        { cliente: "Editorial", adaptacion: "Sin música o piano solo. Color contrastado, blancos cremosos. Cortes 8–10s con cross-dissolves." },
        { cliente: "Boda discreta", adaptacion: "Música emotiva (cuerda, posible voz lejana). Color cálido emocional. Permite 1 fundido emotivo." },
        { cliente: "Videopoema personal", adaptacion: "Tu voz si quieres, o silencio. Color libre, tu paleta personal. Cortes a ritmo de respiración (variables)." }
      ],
      ejercicioAdaptativo: "Exporta la secuencia con DOS grados de color distintos: uno para 'hotel boutique' (cálido tierra, contraste medio) y uno para 'editorial' (contraste alto, casi monocromo cremoso). Mira los dos seguidos. Anota cuál te emociona más y cuál te parece más comercial — no siempre coinciden.",
      entregable: "secuencia-dia21.mp4 + variante editorial en día-21/",
      pista: "Si dudas del ritmo: dos versiones, una a 5s y otra a 7s. Ver cuál tiene más impacto. La respuesta a veces sorprende." },

    // ────────── SEMANA 4 · PRIMER SHOWREEL ──────────
    { n: 22, week: 4, title: "Inventario de archivo · los 15 mejores planos de tu vida", theme: "Curaduría", duration: 60, ref: 4,
      objetivo: "Corte de los mejores planos de tu vida. Materia prima del showreel.",
      equipo: "Dell XPS, libreta o Notion.",
      aprendizaje: "Ninguno hoy.",
      setup: "Carpetas: Casa Leah, Mediterráneo, viajes, close-up del cuerpo, días 1–21. Visor en grande.",
      shots: [
        { tag: "Abrir todo", frame: "Abrir todas las carpetas en visor de fotos / Finder.", model: "Finder · Adobe Bridge", seed: "Vista grande" },
        { tag: "Marcar", frame: "Estrella en los que tengan tu firma: encuadre dentro del encuadre · paisaje poético · cuerpo como paisaje.", model: "—", seed: "Mínimo 15" },
        { tag: "Lista", frame: "Doc numerado: nombre archivo + carpeta + 1 frase de por qué te gusta.", model: "Notion o md", seed: "Filtro: solo los que pondrías a cliente de 2000€" }
      ],
      luz: "—", audio: "—",
      entregable: "Lista de 15 planos seleccionados + ruta + por qué en día-22/",
      pista: "Si no llegas a 15, está bien. Si sobran, mejor. El filtro real: 'me lo pondría a un cliente que paga 2000€'." },

    { n: 23, week: 4, title: "ComfyUI · 3 planos generados de Casa Leah ideal", theme: "Generativo", duration: 45, ref: 5,
      objetivo: "3 imágenes calidad showreel que muestren la Casa Leah ideal aún no filmada.",
      equipo: "Dell XPS, ComfyUI.",
      aprendizaje: "5 min revisando los prompts ganadores del día 19.",
      setup: "Realistic Vision V6.0 B1 · 1024×576 si la GPU aguanta, si no 768×512 · 30 steps.",
      shots: [
        { tag: "Imagen 1", frame: "Interior con luz dorada entrando por ventana, figura femenina de espaldas mirando afuera.", model: "Prompt completo de figura del día 19", seed: "3-5 seeds, elegir mejor" },
        { tag: "Imagen 2", frame: "Detalle mesa con desayuno mexicano (café de olla, pan, fruta), cenital, mantel lino, manos sirviendo.", model: "Prompt: 'mexican breakfast spread on linen tablecloth, café de olla in clay mug, bread, fresh fruit, hands serving coffee, overhead view, magazine architectural digest, raw photo, soft natural light'", seed: "3-5 seeds" },
        { tag: "Imagen 3", frame: "Terraza al atardecer, encuadre dentro del encuadre con buganvilla, Tepozteco al fondo, sin figura.", model: "Prompt: 'mediterranean-mexican villa terrace at sunset, terracotta floor, bougainvillea framing the view, mountain in background, golden warm light, no people, magazine cinematic photo'", seed: "3-5 seeds" }
      ],
      luz: "—", audio: "—",
      traduccionMental: "Imagen 2 → desayuno mexicano / mantel lino / café de olla en taza de barro / pan / fruta fresca / **manos sirviendo café** / **vista cenital** / architectural digest / **foto cruda** / luz suave natural. Imagen 3 → villa mediterránea-mexicana / atardecer / suelo terracota / buganvilla enmarcando vista / montaña al fondo / luz cálida dorada / **sin gente** / foto cinemática.",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Las 3 imágenes tal cual. 1024×576, 30 steps, CFG 7. Seeds 3001, 3002, 3003. Material showreel propio que enseñas con propuesta de rodaje en el lugar real." },
        { cliente: "Marca slow living", adaptacion: "Imagen 2 modificada. Sustituir 'mexican breakfast spread' por bodegón de la marca (cerámica + lino + té). Misma luz, misma quietud. 1024×576, seed 3010, 30 steps." },
        { cliente: "Editorial", adaptacion: "Imagen 3 modificada. Añadir 'magazine spread composition, vast negative space, no objects in center'. Bajar saturación con CFG a 6. Subir steps a 35 para detalle. 1024×576, seed 3020." },
        { cliente: "Inmobiliario lujo", adaptacion: "Imagen 3 modificada. Quitar 'bougainvillea framing' (menos decorativo). Añadir 'multiple terrace levels, architectural rigor, no people, vacant elegance'. 1024×576, seed 3030, 30 steps." }
      ],
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Las 3 imágenes tal cual — son material showreel propio. Calidad 1024×576 mínimo." },
        { cliente: "Marca slow living", adaptacion: "Cambia el contexto Casa Leah por contexto producto: bodegón con cerámica, lino o té de la marca. Misma luz dorada, misma quietud." },
        { cliente: "Editorial", adaptacion: "Imagen como pieza editorial pura: más espacio negativo, composición pictórica. Reducir saturación, contraste alto." },
        { cliente: "Inmobiliario lujo", adaptacion: "Render arquitectónico para vender espacio. Sin figura. Más amplio. Luz que entra desde varias ventanas, no solo una." }
      ],
      ejercicioAdaptativo: "Genera la Imagen 1 (interior con figura) cuatro veces, una para cada cliente: hotel, slow living, editorial, inmobiliario. Mismo seed inicial, modifica el prompt para cada uno. Anota qué palabra clave hace cada cliente.",
      entregable: "3 PNG base + 4 PNG adaptaciones de la Imagen 1 en día-23/",
      pista: "Estas imágenes fijas pueden animarse con zoom muy lento en DaVinci (efecto Ken Burns) y entrar al showreel como si fueran video." },

    { n: 24, week: 4, title: "Selección final del showreel", theme: "Curaduría", duration: 40, ref: 7,
      objetivo: "8–10 planos que cuentan TU historia visual.",
      equipo: "Dell XPS, lista del día 22, imágenes del día 23, mejores clips días 5-21.",
      aprendizaje: "Ninguno hoy.",
      setup: "Carpeta nueva 'showreel-pool' con los 18 candidatos (15 archivo + 3 generados). Visor en grande.",
      shots: [
        { tag: "Pool", frame: "Todos los candidatos en una carpeta showreel-pool/ numerados.", model: "Finder", seed: "—" },
        { tag: "Criterios", frame: "Filtros: mi firma · variedad (1 amplio, varios medios, varios detalles) · coherencia (tonos tierra y dorados) · calidad técnica.", model: "—", seed: "—" },
        { tag: "Historia", frame: "Ordenar visualmente: apertura → desarrollo → intimidad → cierre.", model: "—", seed: "Empezar y terminar fuerte" },
        { tag: "Cortar", frame: "Eliminar hasta quedar 8–10.", model: "—", seed: "—" },
        { tag: "Probar", frame: "Mirarlos como secuencia mental. ¿Cuenta algo?", model: "—", seed: "—" }
      ],
      luz: "—", audio: "—",
      entregable: "8–10 archivos numerados en showreel-final/ + orden tentativo escrito",
      pista: "Empieza y termina con planos fuertes. El medio puede tener bajadas — principio y final no." },

    { n: 25, week: 4, title: "Montar showreel en DaVinci", theme: "Edición", duration: 120, ref: 8,
      objetivo: "Showreel de 60 segundos en bruto, sin color final.",
      equipo: "Dell XPS, DaVinci, carpeta showreel-final.",
      aprendizaje: "10 min en Vimeo: buscar 'filmmaker showreel'. Mirar 3–4 ejemplos. Notar duración cortes (3–5s), ausencia de texto, música pero no narración.",
      setup: "Proyecto 'Showreel v1' · timeline 1080p 24fps.",
      shots: [
        { tag: "Import", frame: "8–10 planos al Media Pool en orden decidido el día 24.", model: "DaVinci · Media", seed: "—" },
        { tag: "Timeline", frame: "Arrastrar en orden. Cortar 4–6s cada uno. Total 50–60s.", model: "—", seed: "—" },
        { tag: "Música", frame: "Una pista. Epidemic Sound si pagas, YouTube Audio Library gratis. Estilo: ambient, neoclassical, lo-fi cinematic.", model: "—", seed: "—" },
        { tag: "Ritmo", frame: "Cortar al ritmo de la música. Cambios de plano coincidiendo con cambios musicales.", model: "—", seed: "—" },
        { tag: "Sin texto", frame: "Nada de títulos, logos, créditos. Planos puros.", model: "—", seed: "Tu nombre va en Vimeo, no en el video" }
      ],
      luz: "—", audio: "Música única pista. Sin voz, sin ambiente esta vez.",
      entregable: "Timeline 'Showreel v1' lista para color. Bruto reproducible.",
      pista: "Si dudas del ritmo: dos versiones, una a 6s y otra a 3s. Ver cuál tiene más impacto." },

    { n: 26, week: 4, title: "Color del showreel + LUT", theme: "Color", duration: 90, ref: 9,
      objetivo: "Coherencia de color en todo el showreel. Tu firma de color emergente.",
      equipo: "Dell XPS, DaVinci, timeline del día 25.",
      aprendizaje: "15 min YouTube 'free cinematic LUT pack DaVinci Resolve'. Descargar pack gratis (IWLTBAP, Lutify free).",
      setup: "Timeline 'Showreel v1' · pestaña Color.",
      shots: [
        { tag: "Base", frame: "PowerGrade 'BASE · Log to 709' a TODOS los clips Log. Los no-Log ajustar manualmente para igualar.", model: "DaVinci · Color", seed: "—" },
        { tag: "LUT pool", frame: "3 LUTs descargados. Probar uno por uno sobre el showreel completo.", model: "—", seed: "—" },
        { tag: "LUT A", frame: "Aplicar el primer LUT a todo el showreel. Captura screenshot.", model: "—", seed: "—" },
        { tag: "LUT B", frame: "Aplicar el segundo LUT. Captura.", model: "—", seed: "—" },
        { tag: "LUT C", frame: "Aplicar el tercero. Captura.", model: "—", seed: "Elegir el que más se parezca a 'cocina con leche al sol de la mañana'" },
        { tag: "Tune", frame: "Ajustar exposición y temperatura clip a clip para uniformar. Si LUT pone demasiado contraste, bajar key output del nodo.", model: "—", seed: "—" }
      ],
      luz: "—", audio: "—",
      sirveA: [
        { cliente: "Hotel boutique", adaptacion: "Paleta terracota-dorado. Contraste medio. Highlights cremosos, sombras cálidas (no negras)." },
        { cliente: "Restaurante", adaptacion: "Cálidos saturados un punto. Sombras profundas. Highlights con calor (no blancos puros)." },
        { cliente: "Marca lino", adaptacion: "Cremoso desaturado, casi sepia. Saturación general baja-baja. Highlights muy contenidos." },
        { cliente: "Editorial", adaptacion: "Contraste alto. Blancos cremosos pero presentes. Sombras casi carbón. Saturación cero en azul, alta en naranja." },
        { cliente: "Boda discreta", adaptacion: "Cálido emotivo. Piel respetada (sin volverla naranja). Sombras presentes pero no duras. Highlights soft." },
        { cliente: "Videopoema personal", adaptacion: "Tu paleta personal. Lo que sientas. Probablemente terracota intensa, sombras cálidas, highlights con calor." }
      ],
      ejercicioAdaptativo: "Crea 3 versiones del showreel con 3 grados distintos: hotel boutique (cálido tierra), editorial (contraste alto monocromático), restaurante (saturado cálido). No exportar todavía — solo guardar las 3 timelines duplicadas.",
      entregable: "Showreel con grado base + 3 timelines de adaptación guardadas en proyecto",
      pista: "Si el LUT contrasta demasiado: panel Key → Output Gain del nodo LUT a 0.7-0.8. Suaviza sin perder el look." },

    { n: 27, week: 4, title: "Exportar y revisar showreel", theme: "Entrega", duration: 60, ref: 10,
      objetivo: "Showreel exportado, subido a Vimeo privado, revisado en condiciones reales.",
      equipo: "Dell XPS, DaVinci, conexión a internet.",
      aprendizaje: "Crear cuenta gratuita Vimeo si no tienes.",
      setup: "Timeline showreel con grado terminado (versión hotel boutique, la más comercial). Vimeo abierto.",
      shots: [
        { tag: "Export 1080", frame: "Deliver · Format MP4 · Codec H.264 · 1920×1080 · 24fps · calidad Automatic 'Best' · Audio AAC.", model: "DaVinci · Deliver", seed: "~25 Mbps" },
        { tag: "Export 4K", frame: "Mismo preset pero 3840×2160. Para Vimeo en alta.", model: "—", seed: "~50 Mbps" },
        { tag: "Vimeo", frame: "Subir el 4K a Vimeo. Configurar privacidad: 'Only people with the password'. Password simple.", model: "Vimeo", seed: "Vimeo Pro cuando tengas primer trabajo pagado" },
        { tag: "Revisar", frame: "Verlo 5 veces. En ordenador. En móvil. Sin sonido. Con auriculares.", model: "—", seed: "El móvil es donde lo verán los clientes" },
        { tag: "Anotar", frame: "3 cosas concretas a mejorar en versión 2.", model: "—", seed: "—" }
      ],
      luz: "—", audio: "—",
      entregable: "Showreel exportado 1080p + 4K · subido a Vimeo privado · 3 notas de mejora en día-27/",
      pista: "En móvil es donde la mayoría de clientes lo verán por primera vez. Si pierde fuerza ahí, ajustar contraste y audio antes de mandarlo." },

    { n: 28, week: 4, title: "Definir nicho en una frase", theme: "Marca", duration: 45, ref: 11,
      objetivo: "Una frase clara de qué ofreces, máximo 20 palabras.",
      equipo: "Cuaderno.",
      aprendizaje: "10 min mirando 3-4 webs de directores de fotografía o estudios boutique. Notar cómo se presentan en la home.",
      setup: "Sin pantalla. O Notion con doc abierto.",
      shots: [
        { tag: "Versión 1", frame: "Empieza con: 'Video cinematográfico para...'", model: "—", seed: "Estructura clásica" },
        { tag: "Versión 2", frame: "Empieza con un verbo poético: 'Cuento atmósferas con cámara...'", model: "—", seed: "—" },
        { tag: "Versión 3", frame: "Sin verbo, solo nombre + lugar: 'Studio Cavallari · video para hoteles boutique con alma. México · España · Francia.'", model: "—", seed: "Más serif, más editorial" },
        { tag: "Versión 4", frame: "La más larga (20 palabras justos)", model: "—", seed: "—" },
        { tag: "Versión 5", frame: "La más corta (5 palabras)", model: "—", seed: "—" }
      ],
      luz: "—", audio: "—",
      entregable: "1 frase elegida + 4 descartadas archivadas en día-28/",
      pista: "Leer cada versión en voz alta. La que asusta un poco, la que excluye claramente — esa es. La frase evolucionará, pero hoy necesitas una para mañana." },

    { n: 29, week: 4, title: "Lista de 20 hoteles boutique objetivo", theme: "Comercial", duration: 90, ref: 0,
      objetivo: "20 hoteles a los que ofrecerás servicio en mes 2. Pipeline real.",
      equipo: "Spreadsheet o Notion con columnas: Nombre · Ubicación · Web · Instagram · Estética · Email · Notas.",
      aprendizaje: "Ninguno hoy. Solo buscar.",
      setup: "Pestañas del navegador con buscadores: Tablet Hotels, Mr. & Mrs. Smith, Design Hotels, búsquedas regionales.",
      shots: [
        { tag: "México · 6", frame: "Tepoztlán 2 + Valle de Bravo 1 + San Miguel 2 + Tulum 1", model: "Búsqueda web + Instagram", seed: "Empezar por cercanos" },
        { tag: "España · 8", frame: "Mallorca 3 + Menorca 1 + Ibiza 1 + Costa Brava 2 + Cadaqués 1", model: "—", seed: "—" },
        { tag: "Francia · 4", frame: "Dordoña 2 + Provenza 2", model: "—", seed: "Para mes 3+" },
        { tag: "Otros · 2", frame: "Comodín — un sitio que ames sin importar país", model: "—", seed: "—" },
        { tag: "Por hotel", frame: "Cada uno: nombre, web, ciudad, contacto humano (no info@), 3 palabras de por qué conecta con tu estética.", model: "Notion o Sheet", seed: "El campo de '3 palabras' es lo que personaliza el email" }
      ],
      luz: "—", audio: "—",
      entregable: "Spreadsheet con 20 hoteles · datos completos + observación específica para cada uno.",
      pista: "Empezar por hoteles cerca de Tepoztlán y entorno español. Locales más accesibles para primer cliente. Los más exclusivos los reservas para cuando tengas 2-3 trabajos en portfolio." },

    { n: 30, week: 4, title: "Cierre de mes uno", theme: "Reflexión", duration: 60, ref: 1,
      objetivo: "Pausar profundamente. Sin grabar, sin generar. Solo escribir.",
      equipo: "Cuaderno.",
      aprendizaje: "Ninguno hoy.",
      setup: "Casa Leah, tarde tranquila. Mejor sin pantalla.",
      shots: [
        { tag: "P1", frame: "¿Qué he aprendido? Concreto, técnico.", model: "—", seed: "—" },
        { tag: "P2", frame: "¿Cuál es mi firma ahora, con datos? Qué planos repito sin pensar.", model: "—", seed: "—" },
        { tag: "P3", frame: "¿Qué me cuesta todavía? Técnico, emocional.", model: "—", seed: "—" },
        { tag: "P4", frame: "¿Qué quiero conseguir en mes 2? 1 objetivo principal, 2 secundarios.", model: "—", seed: "—" },
        { tag: "P5", frame: "¿Qué me da miedo? Y qué voy a hacer al respecto.", model: "—", seed: "Sin maquillar" }
      ],
      luz: "—", audio: "—",
      entregable: "5 párrafos · cierre de mes 1 en día-30/",
      pista: "Si viene el patrón ('voy a empezar proyecto totalmente nuevo'), escribirlo, reconocerlo, no actuar. Apuntarlo en Ideas. Mes 2 sigue." }
  ],

  // ─── Sección II · Fichas profundas por cliente (expandibles) ───
  fichas:   [
    {
      "id": "hotel",
      "quePide": "Reservas. El video tiene que vender estancias: traducir atmósfera en deseo de quedarse. No documenta — seduce. Métrica indirecta: el cliente lo mide en click-through y en correos pidiendo tarifas.",
      "conversacionPrevia": "Antes de rodar pregúntale: ¿cuántas habitaciones quieres mostrar y cuáles son las protagonistas? ¿hay personal a cámara o solo huéspedes implícitos? ¿el hotel ya tiene material y este es complemento, o es el lanzamiento? ¿necesitan versión 60s para web + 15s para Instagram + reels verticales? Pide planos de planta y orientación de ventanas para mapear luz por hora. · Red flag: si te dicen 'queremos algo muy distinto a la competencia' sin saber qué hace la competencia, hay confusión interna — pide brief escrito antes de cotizar.",
      "estructura": "60–90s pieza principal · 5–7 espacios mostrados · sin voz en off (música + ambiente) · estructura amplio → detalle → figura → detalle → amplio · cortes 5–6s · 1 entregable adicional: 3 reels verticales 15s reutilizando el material.",
      "atencion": [
        "Identificar las 2 ventanas hero del hotel antes de empezar — sin ellas no hay video.",
        "Filmar la misma habitación en hora dorada de mañana Y de tarde — luz distinta, ambas necesarias.",
        "Personal del hotel briefeado: nadie en cuadro accidentalmente, nada de uniformes feos visibles.",
        "Audio de cada espacio (no genérico) — el desayuno suena distinto al spa.",
        "Reservar el último día solo para detalles + segundas tomas."
      ],
      "evita": "Drone genérico de apertura (cliché). Personal sonriendo a cámara. Música tipo lobby de hotel. Mostrar el coche del huésped. Saturación naranja agresiva 'cálido'. Más de 8s en cualquier plano si no hay movimiento dentro del cuadro.",
      "referencias": "Búsqueda recomendada en Vimeo: 'hotel boutique cinematic 60s', 'design hotels film', 'tablet hotels showreel'. · Mundo natural: Luca Guadagnino (Call Me By Your Name para luz mediterránea), Sofia Coppola (Somewhere para quietud), KINTO (lookbook quiet), revista Cereal, IG @lechateaudelune. · Búsqueda recomendada en IG: cuentas de hoteles tipo Casa Bosques, Bisate Lodge, Aire de Bardenas, Son Bunyola — mira CÓMO presentan ellos su video, no quién lo filma.",
      "presentaFactura": "Europa: 2 500–6 000 € pieza principal · paquete (web + 3 reels) 3 500–8 000 €. México: 35 000–95 000 MXN · paquete 50 000–130 000 MXN. · Incluye: pre-producción, 1–2 días rodaje, edición, color, 2 rondas de revisiones, master 4K + entregables web. · Cobra aparte: música licenciada premium (Musicbed/Artlist >50 €), drone profesional con piloto certificado, segundo día extra. · Pago: 40% al firmar, 30% en rodaje, 30% en entrega. · Plazo: 3–4 semanas desde rodaje. · IVA aplica en EU; en MX revisa con asesor (régimen RESICO vs persona física actividad empresarial — esto déjalo para asesor)."
    },
    {
      "id": "slow",
      "quePide": "Posicionamiento de marca. No vende un objeto — vende el ritual alrededor del objeto. El video se usa para lanzamiento de colección, landing del producto, venderle a tiendas. Métrica: dignidad visual que justifica precio premium.",
      "conversacionPrevia": "Antes de rodar: ¿la colección está terminada y empaquetada o usamos prototipos? ¿quién es la persona usuaria mental — edad, casa, gesto? ¿necesitan stills además del video (fotos de producto que salen del mismo rodaje)? ¿usaremos manos modelo o las del fundador/a? ¿hay paleta cerrada o vas a proponerla tú? Pide referencias suyas concretas (no Pinterest genérico) — si no tienen, mala señal. · Red flag: marca que pide 'algo viral en redes' pero el producto es lento — pisan dos caballos.",
      "estructura": "45–60s pieza principal · 1 producto (o serie) protagonista · sin voz en off · estructura ritual: preparación → gesto → uso → reposo · cortes 5–7s · manos visibles en 50%+ de los planos · espacio negativo dominante.",
      "atencion": [
        "El producto entra al cuadro completo solo 1–2 veces — el resto son fragmentos.",
        "Manos cuidadas (esmalte neutro, sin reloj llamativo, sin anillos).",
        "Mismo paño/superficie en todos los planos — coherencia táctil.",
        "Audio del producto en uso (cerámica contra madera, té vertido, lino plegado) más que música.",
        "Color de marca clavado — si la marca dice 'beige tostado' no improvises 'crema marfil'."
      ],
      "evita": "Producto centrado y enfocado todo el plano (es catálogo, no video). Manos masculinas musculosas si el público es femenino (o viceversa según marca). Música ambient genérica con campanitas. Vapor falso (humo de cigarrillo eléctrico se nota). Decir 'minimalista' y meter 12 objetos en el plano.",
      "referencias": "Búsqueda recomendada en Vimeo: 'ceramic lookbook film', 'slow living brand video', 'product film kinfolk'. · Mundo natural: KINTO (referencia central — el dialecto técnico viene de ahí), Kinfolk revista, IG @kinfolk, Naomi Kawase (An, 2015 — gestos pequeños como protagonistas). · Para esta tipología, el referente más útil suele ser la web de la propia marca japonesa o escandinava similar.",
      "presentaFactura": "Europa: 1 500–3 500 € pieza · 2 500–5 000 € con stills incluidos. México: 22 000–55 000 MXN · 35 000–75 000 MXN con stills. · Incluye: 1 día rodaje en estudio o casa cliente, edición, color, 2 revisiones, master + 5–8 stills derivados. · Cobra aparte: modelo de manos profesional (80–150 €/día), atrezzo extra, segunda sesión por colección nueva. · Pago: 50% inicio / 50% entrega — marcas pequeñas, anticipo alto te protege. · Plazo: 2–3 semanas. · Cesión: solo uso digital propio · si quieren impresión grande / publicidad pagada / TV → recotizar."
    },
    {
      "id": "boda",
      "quePide": "Una memoria que pueda ver en 10 años sin vergüenza. No quiere 'video de boda' (cliché). Quiere atmósfera, gesto, contención. La gente ve el video 3 veces el primer mes y luego en aniversarios. Métrica emocional: que la familia lo guarde, no que lo compartan virally.",
      "conversacionPrevia": "Antes de firmar: ¿cuántos invitados? ¿ceremonia religiosa o civil? ¿hay momento clave fuera de la ceremonia (primera mirada, votos privados)? ¿ya tienen fotógrafo y cómo se reparten momentos? ¿qué hace la familia del novio/a — entendieron la estética propuesta? ¿hay invitados que NO quieren salir? · Si la pareja te ve el showreel y dice 'nos gusta pero queremos también baile/discurso completo/llegada al salón' — están pidiendo videografía tradicional, no cinemática. Decide si lo aceptas o lo derivas.",
      "estructura": "3–5 min pieza principal + 60–90s teaser para redes · estructura preparativos → ceremonia → retratos → fiesta primer momento · sin discursos completos · voz en off opcional con frase escogida (votos breves) · cortes 4–6s · 1 entregable adicional: Instagram square 60s con el momento más fuerte.",
      "atencion": [
        "Recorrido del lugar 1 día antes mínimo — luz, ventanas, plan B si llueve.",
        "Coordinación con fotógrafo: turnos para retratos, no chocan.",
        "Momentos íntimos antes de ceremonia (manos, vestido colgado, anillo solo) — material seguro mientras invitados llegan.",
        "Música y baile primer corte solo — no 40 min de fiesta.",
        "Backup de tarjetas en el mismo día, no esperar a casa."
      ],
      "evita": "Slow motion en TODO. Drone sobre la ceremonia (ruido + cliché). Bailes ridículos de invitados en el corte final (envejecen mal). Música pop comercial — recoged usa licencias caras. Voice over comprado a otro idioma. Pareja besándose a cámara forzados. Más de 5 min de pieza principal.",
      "referencias": "Búsqueda recomendada en Vimeo: 'intimate wedding film mediterranean', 'discrete wedding cinematic 2024', 'boda masía cinemática'. · Mundo natural: Luca Guadagnino (Call Me By Your Name — luz mediterránea + figura), Sofia Coppola (Marie Antoinette para atmósfera y exceso contenido), Wong Kar-wai (In the Mood for Love — gesto íntimo, figura de espaldas, encuadre dentro del encuadre). · Productoras de boda fiables en este nicho no inventes — búsqueda recomendada por sitio: 'wedding film Mallorca', 'wedding film Provence', 'wedding film Hacienda México'. Mira CUÁL te emociona, no cuál es más famoso.",
      "presentaFactura": "Europa: 3 500–9 000 € pieza completa (1 cámara) · 5 500–14 000 € (2 cámaras + asistente). México: 50 000–140 000 MXN · 80 000–220 000 MXN con segunda cámara. · Incluye: reunión previa + scouting, 1 día completo de rodaje (10–12h), edición pieza principal + teaser, 2 revisiones, master + entregables redes, USB físico. · Cobra aparte: día previo de preparativos (extra 800–1 500 € EU / 12 000–22 000 MXN), drone con piloto, segundo videógrafo. · Pago: 30% reserva fecha (no reembolsable), 40% un mes antes, 30% entrega. · Plazo entrega: 6–10 semanas — comunícalo claro a la pareja. · Reserva la fecha SOLO con anticipo firmado."
    },
    {
      "id": "rest",
      "quePide": "Llenar mesa. Tráfico físico al restaurante o reservas online. La gente decide qué cenar en 90 segundos viendo Instagram — el video tiene que generar antojo en 15s. Cliente quiere: redes, Google Business, web, posiblemente publicidad pagada Meta.",
      "conversacionPrevia": "Antes de rodar: ¿filmamos plato terminado, plato en proceso, o ambos? ¿chef visible a cámara o solo manos? ¿hay 1 plato hero o cubrimos toda la carta? ¿qué hace el restaurante distinto (técnica, producto, espacio)? ¿temporada del menú — el video tiene fecha de caducidad? ¿hay servicio real durante el rodaje o privatizan? · Red flag: 'quiero algo como esa cuenta de TikTok con 2M de seguidores' — esa cuenta filma 200 videos al año, no uno; el modelo no es comparable.",
      "estructura": "30–45s pieza principal + 4–6 reels verticales 15s (uno por plato hero) · estructura: cocina → mano cocinando → plato terminado → comensal probando (manos, no cara) → reacción de comensal en otra mesa (atmósfera) · cortes 3–4s, más vivo · sonido del plato y la cocina protagonistas.",
      "atencion": [
        "Iluminación del restaurante en horario real (cena = ámbar bajo) vs montaje (mediodía = aprovecha luz natural). Decide y comunica antes.",
        "Doble emplatado de cada plato hero — uno para foto, uno para video, uno backup.",
        "Vapor real, no genérico — caldo recién servido, plancha activa.",
        "Manos del chef cuidadas, mandil limpio, foco visible si hay.",
        "Audio cercano del plato (cuchillo cortando, líquido vertido) más que música."
      ],
      "evita": "Slow motion de gota cayendo a 1000fps en cada plato (cliché de food porn). Texto sobreimpreso con ingredientes. Música electrónica energética con drop. Chef hablando a cámara explicando concepto (eso es entrevista, otra pieza). Filmar comensales reales con cara visible sin consentimiento. Plato moviéndose hacia cámara con motion control falso.",
      "referencias": "Búsqueda recomendada en Vimeo: 'restaurant film 2024 cinematic', 'farm to table short film', 'chef portrait film'. · Mundo natural: KINTO (rituales lentos, mano y producto), Apartamento revista (espacios habitados, no perfectos), IG @nowness (sus piezas de food son referencia). · Serie Chef's Table de Netflix (David Gelb, Boardwalk Pictures) — referencia para ritmo, no para imitar literal. · Búsqueda recomendada: 'noma video', 'mugaritz film', 'pujol video' para nivel alto en EU/MX.",
      "presentaFactura": "Europa: 800–2 500 € pieza · 1 500–4 000 € con paquete reels. México: 12 000–35 000 MXN · 22 000–55 000 MXN con paquete. · Incluye: 1 día rodaje (medio día prep + medio día servicio), edición, color, 2 revisiones, master + reels verticales. · Cobra aparte: estilismo de mesa profesional (food stylist 200–400 €/día EU), platos extras si hay desperdicio alto, segunda sesión por menú nuevo de temporada. · Pago: 50% inicio / 50% entrega. · Plazo: 2–3 semanas — los restaurantes lo necesitan rápido para temporada. · Considera contrato anual (1 sesión por temporada × 4) para clientes habituales — 30% descuento a cambio de fidelidad."
    },
    {
      "id": "inmo",
      "quePide": "Vender la propiedad o alquilarla a tarifa premium. Métrica directa: reduce visitas inútiles (cliente filtrado llega ya decidido), reduce tiempo en mercado. Para alquiler vacacional (Airbnb Plus, agencias premium): aumenta tarifa noche.",
      "conversacionPrevia": "Antes de cotizar: ¿venta o alquiler? ¿qué precio tiene la propiedad (eso define presupuesto razonable)? ¿está vacía/staged/habitada? ¿incluye exterior — piscina, jardín, vistas? ¿hay vecinos que NO pueden salir? ¿el cliente firma cesión de imagen del inmueble? · Si es vacacional de alquiler: ¿temporada alta filmamos en plena ocupación o entre reservas? ¿necesitan también stills HDR para Idealista/Airbnb/web? · Red flag: agencia que paga poco pero pide TODO incluido — están probando si funciona, no es relación a largo plazo.",
      "estructura": "60–90s pieza principal sin voz en off · estructura llegada → exteriores → zona social → cocina → habitaciones → master → exterior cierre · sin figura humana o silueta mínima atravesando · cortes 4–6s · drone obligatorio para apertura y cierre · texto solo si el cliente lo exige (ubicación, m²).",
      "atencion": [
        "Hora del día por orientación — fachada este se filma mañana, oeste tarde, no al revés.",
        "Vacío total del espacio (sin objetos personales del dueño, sin fotos familiares, sin Coca-Cola en la mesa).",
        "Misma temperatura de color en todas las habitaciones — bombillas distintas arruinan coherencia, llevar gel correctores.",
        "Drone con permisos en regla (en EU registro EASA obligatorio; en MX SCT).",
        "Salidas y entradas a cada habitación en planos consistentes — el espectador debe poder mapear la casa mentalmente."
      ],
      "evita": "Movimientos de gimbal nerviosos. Lensflares forzados. Música épica con orquesta. Texto enorme amarillo sobreimpreso. Mostrar el baño con personas dentro. Filmar la calle donde está la casa (privacidad). Drone sobre vecinos. Hora del día incorrecta para la orientación.",
      "referencias": "Búsqueda recomendada en Vimeo: 'luxury real estate film cinematic', 'villa film mediterranean', 'architectural film tour'. · Mundo natural: Cereal revista (arquitectura editorial, no inmobiliaria comercial — referencia para encuadre y vacío elegante), Sofia Coppola (Somewhere — luz cambiando en espacios). · Inmobiliarias premium ejemplo (búsqueda recomendada por mercado): 'Engel Völkers film', 'Sotheby's video Mallorca', 'Berkshire Hathaway Beverly Hills'. Mira CUÁLES son sus videos, no quién los hace.",
      "presentaFactura": "Europa: 1 500–4 500 € pieza · 2 500–6 000 € con stills HDR. México: 25 000–65 000 MXN · 35 000–90 000 MXN con stills. · Incluye: 1 día rodaje (con drone), edición, color, 1 ronda revisión (este sector revisa poco), master 4K. · Cobra aparte: piloto de drone certificado si no eres tú (180–350 €/día EU), 2º día por propiedades >400 m², viaje fuera de zona. · Pago: 40% al firmar, 60% entrega — agencias pagan a 30–60 días tras factura, contemplalo en flujo de caja. · Cesión: uso de la agencia/dueño · NO subagentes ni revendedores sin recotizar. · Plazo: 10–14 días desde rodaje (rápido — la propiedad pierde valor cada semana en mercado)."
    },
    {
      "id": "edit",
      "quePide": "Prestigio. Editorial paga poco pero da pertenencia a un mundo — Kinfolk, Cereal, Apartamento, Condé Nast Traveler. Una pieza tuya en una de esas publica te abre las puertas a hoteles y marcas que pagan 5×. La pieza no busca convertir — busca posicionarte.",
      "conversacionPrevia": "Antes de aceptar: ¿es encargo o submission? ¿hay editor responsable o es freelance project? ¿exclusividad cuánto tiempo (no puedes volver a publicar la pieza)? ¿créditos cómo aparecen (nombre completo, link a web, IG)? ¿la pieza acompaña artículo escrito por otra persona o es autoría tuya completa? ¿qué presupuesto real hay para producción aparte del fee de director? · Red flag: revista que pide 'exposure como pago' — di que no, salvo que sea Cereal/Kinfolk/equivalente.",
      "estructura": "2–5 min pieza única (no se pide paquete de reels — la editorial respeta la forma larga) · puede llevar voz en off literaria · sin música o piano solo · estructura libre, contemplativa · cortes 8–12s · ningún texto sobreimpreso (excepto crédito final muy discreto).",
      "atencion": [
        "Concepto escrito antes del rodaje en 3 párrafos — la editorial revisa, aprueba, y luego defiende cuando dudes.",
        "Composición pictórica en cada cuadro — si no es enmarcable como still individual, no entra.",
        "Audio diseñado, no grabado solo — silencio activo, presencia ambiente trabajada.",
        "Color final como referencia editorial concreta (un fotógrafo de la revista del que sacar paleta).",
        "Margen para 2–3 días extra en rodaje porque la pieza vale lo que vale solo si está bien."
      ],
      "evita": "Música licenciada genérica. Texto sobreimpreso. Voice over publicitario. Más de 1 figura humana visible. Cortes rápidos. Movimiento de cámara llamativo. Color saturado moderno. Cualquier cosa que parezca campaña comercial.",
      "referencias": "Mundo natural directo: Kinfolk (revista + IG @kinfolk), Cereal (revista + IG @cerealmag), Apartamento (revista, espacios habitados), Condé Nast Traveler (referencia editorial para hospitalidad), Naomi Kawase (Vision 2018, An 2015 — quietud editorial pura). · Búsqueda recomendada en Vimeo: 'kinfolk film', 'cereal magazine video', 'apartamento magazine documentary'. · Directoras de fotografía editorial: Hélène Louvart, Christopher Doyle (busca cómo respiran sus planos, no la trama de la peli).",
      "presentaFactura": "Europa: 1 500–4 000 € (a veces 800–1 200 € si la revista es prestigiosa y el ego paga lo que falta). México: 22 000–60 000 MXN. · Incluye: pre-producción + 1–2 días rodaje + edición completa + 3 revisiones + master + entregables que la revista pida. · Cobra aparte: nunca cedas derechos completos — solo uso editorial primario, retienes uso showreel/portfolio. · Pago: 50% inicio / 50% entrega — la revista paga lento (60–90 días tras publicación), prepárate. · Esto es inversión en posicionamiento, no negocio puro — un año con 2 piezas editoriales es lo que abre el resto. · Antes de firmar cesión, asesor."
    },
    {
      "id": "videopoema",
      "quePide": "Identidad propia. Nadie te lo encarga. Lo haces porque sin esa pieza no eres directora — eres técnica. La pieza personal es lo que justifica que un hotel pague 4 500 € en vez de 1 500 €, porque demuestra autoría. No tiene cliente. No tiene plazo. No tiene presupuesto. Tiene urgencia interna.",
      "conversacionPrevia": "Las preguntas son contigo, no con cliente: ¿qué quieres decir? ¿con qué cuerpo (el tuyo, otro)? ¿en qué lugar? ¿con qué texto si lo hay? ¿con qué fecha de entrega te comprometes contigo? ¿quién es la primera persona que lo va a ver (audiencia íntima primero, mundo después)? · Red flag interna: si después de 3 semanas no has filmado nada, no es el proyecto — es la excusa para no exponerte. Reconsidéralo desde cero.",
      "estructura": "60–180s · estructura libre pero internamente coherente · puede llevar texto escrito por ti, voz off, o silencio · música original o cuidadosamente elegida (sin licencia barata) · cortes a ritmo de respiración (variables) · figura tuya o cuerpo ajeno pero siempre fragmento, nunca rostro frontal.",
      "atencion": [
        "Tener escrito el texto/concepto antes del rodaje — no improvises sobre cámara.",
        "Filmar todo en uno o dos días concentrados, no en piezas a lo largo de un mes (pierde coherencia).",
        "Audio diseñado con cuidado — esta pieza vive de la atmósfera sonora.",
        "No mostrarla a 50 personas pidiendo opinión — máximo 3 personas de confianza antes del corte final.",
        "Subirla a Vimeo público con privacidad de comentarios cerrada los primeros días — protégete del feedback ruido."
      ],
      "evita": "Pretender que sea 'profesional' — esta pieza vive de ser tuya. Música licenciada de Epidemic Sound. Texto cursi sin trabajar. Filmar con prisa entre encargos. Mostrarla a tu pareja/madre antes de tenerla terminada (te empujarán a suavizarla). Pedir feedback en redes antes de publicar — destruye la pieza.",
      "referencias": "Mundo natural total: Wong Kar-wai (In the Mood for Love 2000, Happy Together 1997 — encuadre dentro del encuadre, figura de espaldas, gesto contenido). Naomi Kawase (Vision 2018, An 2015 — cuerpo y naturaleza, ritmo lento). Sofia Coppola (Lost in Translation 2003, The Virgin Suicides 1999 — mujer pensando sin decir). · Para texto: búsqueda recomendada 'video poetry contemporary', 'cinepoem'. · Para cuerpo fragmentado como autoría: busca trabajos de directoras de fotografía como Hélène Louvart.",
      "presentaFactura": "Sin factura — no hay cliente. Inversión propia: 0–500 € (música original a músico amigo, locación, gasolina). · Tiempo real: 3–7 días de rodaje + 4–6 semanas de edición intermitente. · ROI: indirecto. La pieza justifica precios premium en los 6 clientes anteriores y abre puerta a editorial (Kinfolk, Cereal). · Si funciona, una pieza personal al año + 2 hoteles + 3 marcas = año pagado. · No la conviertas en encargo después — pierde la cualidad."
    }
  ],

  // ─── Sección XIII · Escuela paralela ───
  escuelaParalela:   {
    "intro": "Lo que ves, lees y escuchas mientras filmas. Una referencia por semana mínimo, una por día máximo. La consumes entera o no la consumes. Anotas qué te llamó la atención. La aplicas en el siguiente plano que filmes. 60 referencias estudiadas en 60 semanas valen más que 60 vistas en una semana.",
    "bloques": [
      {
        "n": 1,
        "titulo": "Ojo · cómo ver",
        "desc": "Películas que enseñan a mirar antes de filmar.",
        "items": [
          {
            "ref": "Wong Kar-wai · In the Mood for Love (2000)",
            "enseña": "Encuadre dentro del encuadre, gesto contenido, luz cálida en interiores. Cantonés, no japonés — distingue."
          },
          {
            "ref": "Wong Kar-wai · Happy Together (1997)",
            "enseña": "Cuerpo y deseo, color saturado, atmósfera densa."
          },
          {
            "ref": "Sofia Coppola · Lost in Translation (2003)",
            "enseña": "Mujer mirando, distancia emocional, luz hotelera."
          },
          {
            "ref": "Sofia Coppola · Somewhere (2010)",
            "enseña": "Quietud dentro de hotel, plano fijo largo."
          },
          {
            "ref": "Luca Guadagnino · Call Me By Your Name (2017)",
            "enseña": "Luz mediterránea, cuerpo en paisaje, verano."
          },
          {
            "ref": "Naomi Kawase · An (2015)",
            "enseña": "Manos haciendo, gesto repetido como ritual. Japonesa."
          },
          {
            "ref": "Naomi Kawase · Vision (2018)",
            "enseña": "Naturaleza y cuerpo, ritmo extremadamente lento."
          }
        ]
      },
      {
        "n": 2,
        "titulo": "Atmósfera y ritmo",
        "desc": "Tempo lento, respiración entre planos, silencio.",
        "items": [
          {
            "ref": "Lucrecia Martel · La Ciénaga (2001)",
            "enseña": "Atmósfera densa, audio diseñado, cuerpos quietos."
          },
          {
            "ref": "Carlos Reygadas · Silent Light (2007)",
            "enseña": "Plano fijo de amanecer, paciencia extrema."
          },
          {
            "ref": "Apichatpong Weerasethakul · Uncle Boonmee (2010)",
            "enseña": "Tiempo dilatado, naturaleza presente."
          },
          {
            "ref": "Hirokazu Kore-eda · Still Walking (2008)",
            "enseña": "Vida cotidiana, ritmo doméstico."
          },
          {
            "ref": "Chantal Akerman · Jeanne Dielman (1975)",
            "enseña": "Duración como contenido, gesto repetido."
          }
        ]
      },
      {
        "n": 3,
        "titulo": "Cuerpo y movimiento",
        "desc": "Filmar figura humana sin caer en cliché.",
        "items": [
          {
            "ref": "Claire Denis · Beau Travail (1999)",
            "enseña": "Cuerpo como paisaje, movimiento coreográfico."
          },
          {
            "ref": "Lucrecia Martel · La Mujer sin Cabeza (2008)",
            "enseña": "Cuerpo desorientado, fragmento."
          },
          {
            "ref": "Wim Wenders · Pina (2011)",
            "enseña": "Cuerpo en espacio, danza como composición."
          },
          {
            "ref": "Sofia Coppola · The Virgin Suicides (1999)",
            "enseña": "Figura femenina contemplada, distancia."
          },
          {
            "ref": "Wong Kar-wai · In the Mood for Love (2000)",
            "enseña": "Figura de espaldas, pasillo, escalera."
          },
          {
            "ref": "Naomi Kawase · An (2015)",
            "enseña": "Manos viejas haciendo — figura como gesto."
          }
        ]
      },
      {
        "n": 4,
        "titulo": "Luz natural · DPs",
        "desc": "Directores de fotografía. Estudia su luz, no la trama.",
        "items": [
          {
            "ref": "Hélène Louvart",
            "enseña": "Luz suave editorial. La Chimera, Happy as Lazzaro, Beach Rats."
          },
          {
            "ref": "Christopher Doyle",
            "enseña": "Luz cálida saturada. Toda la obra con Wong Kar-wai."
          },
          {
            "ref": "Yorick Le Saux",
            "enseña": "Luz mediterránea. Trabaja con Guadagnino y Sofia Coppola."
          },
          {
            "ref": "Sayombhu Mukdeeprom",
            "enseña": "Luz de día prolongado. DP de Call Me By Your Name."
          },
          {
            "ref": "Mark Lee Ping-bing",
            "enseña": "Hora dorada paciente. Con Hou Hsiao-hsien y Wong Kar-wai."
          }
        ]
      },
      {
        "n": 5,
        "titulo": "Composición",
        "desc": "Fotografía, pintura, arte. Encuadrar antes que mover.",
        "items": [
          {
            "ref": "Saul Leiter (fotógrafo)",
            "enseña": "Encuadre dentro del encuadre con cristales, reflejos, lluvia."
          },
          {
            "ref": "Rinko Kawauchi (fotógrafa japonesa)",
            "enseña": "Luz blanca, espacio negativo, fragmento."
          },
          {
            "ref": "Luigi Ghirri (fotógrafo italiano)",
            "enseña": "Paisaje habitado, composición rigurosa."
          },
          {
            "ref": "Hiroshi Sugimoto · serie Seascapes",
            "enseña": "Horizonte como línea, repetición, paciencia."
          },
          {
            "ref": "Vilhelm Hammershøi (pintor)",
            "enseña": "Interiores vacíos, figura de espaldas, luz lateral."
          },
          {
            "ref": "Edward Hopper (pintor)",
            "enseña": "Luz cortando habitación, soledad poblada."
          }
        ]
      },
      {
        "n": 6,
        "titulo": "Audio y sonido",
        "desc": "Silencio, ambiente, voz interior.",
        "items": [
          {
            "ref": "Lucrecia Martel · escucha sin imagen",
            "enseña": "Audio como protagonista. Escucha La Ciénaga con los ojos cerrados."
          },
          {
            "ref": "Walter Murch · libro 'In the Blink of an Eye'",
            "enseña": "Edición y sonido. Corto, esencial."
          },
          {
            "ref": "Michel Chion · libro 'La audiovisión'",
            "enseña": "Académico pero útil. Cómo sonido construye imagen."
          },
          {
            "ref": "Apichatpong Weerasethakul · sonido ambiente",
            "enseña": "Selva diseñada como personaje."
          },
          {
            "ref": "Claire Denis · Beau Travail",
            "enseña": "Silencio + voz interior + cuerpo."
          }
        ]
      },
      {
        "n": 7,
        "titulo": "Comerciales que sí venden",
        "desc": "Anuncios reales. NO links inventados — búsqueda recomendada.",
        "items": [
          {
            "ref": "Vimeo: 'design hotels short film'",
            "enseña": "Hotelería boutique."
          },
          {
            "ref": "Vimeo: 'aesop store opening film'",
            "enseña": "Slow living retail."
          },
          {
            "ref": "Vimeo: 'kinfolk film'",
            "enseña": "Slow living editorial."
          },
          {
            "ref": "Vimeo: 'cereal magazine video'",
            "enseña": "Hospitalidad arquitectónica."
          },
          {
            "ref": "Vimeo: 'nowness food film'",
            "enseña": "Restaurante de autor."
          },
          {
            "ref": "Vimeo: 'intimate wedding film mediterranean 2024'",
            "enseña": "Boda discreta."
          },
          {
            "ref": "Vimeo: 'luxury real estate film cinematic mediterranean'",
            "enseña": "Inmobiliario premium."
          },
          {
            "ref": "Productoras como referencia editorial (no contratable): Park Pictures, Anonymous Content, Stink Films",
            "enseña": "Mira sus reels en sus webs para entender estándar industrial actual."
          }
        ]
      },
      {
        "n": 8,
        "titulo": "Lectura · libros cortos",
        "desc": "Cortos, no enciclopedias.",
        "items": [
          {
            "ref": "Junichiro Tanizaki · In Praise of Shadows (1933)",
            "enseña": "Luz, sombra, estética japonesa. Lo más cercano a tu firma."
          },
          {
            "ref": "John Berger · Ways of Seeing (1972)",
            "enseña": "Cómo se mira, cómo se vende imagen."
          },
          {
            "ref": "Alexandra Horowitz · On Looking (2013)",
            "enseña": "Entrenar la mirada en lo cotidiano."
          },
          {
            "ref": "Andrei Tarkovsky · Sculpting in Time",
            "enseña": "Tiempo en cine. Su única obra teórica, esencial."
          },
          {
            "ref": "Italo Calvino · Six Memos for the Next Millennium",
            "enseña": "Levedad, rapidez, exactitud, visibilidad, multiplicidad."
          }
        ]
      },
      {
        "n": 9,
        "titulo": "Instagram",
        "desc": "Cuentas activas conocidas. Si una está caída, busca por su nombre — no insistas con un handle inactivo.",
        "items": [
          {
            "ref": "@kinfolk",
            "enseña": "Slow living editorial · marca, editorial."
          },
          {
            "ref": "@cerealmag",
            "enseña": "Arquitectura editorial · hoteles, inmobiliario, editorial."
          },
          {
            "ref": "@nowness",
            "enseña": "Videos cortos cinematográficos · todos los clientes, especialmente restaurante."
          },
          {
            "ref": "@lechateaudelune",
            "enseña": "Atmósfera mediterránea · hoteles, boda, slow living."
          },
          {
            "ref": "@apartamentomagazine",
            "enseña": "Espacios habitados · restaurante, editorial."
          },
          {
            "ref": "@design.hotels",
            "enseña": "Hotelería boutique global · hotel boutique."
          },
          {
            "ref": "@kinto_jp / @kintojapan",
            "enseña": "KINTO oficial — verifica el handle activo. Marca slow living."
          },
          {
            "ref": "@condenasttraveler",
            "enseña": "Editorial de hospitalidad · hotel, boda destino, editorial."
          }
        ]
      },
      {
        "n": 10,
        "titulo": "Podcasts",
        "desc": "Para entrenar oído y pensamiento creativo.",
        "items": [
          {
            "ref": "Talk Art · Russell Tovey + Robert Diament",
            "enseña": "Arte contemporáneo y mirada."
          },
          {
            "ref": "The Great Women Artists · Katy Hessel",
            "enseña": "Mujeres en arte. Pensamiento visual con perspectiva."
          },
          {
            "ref": "Team Deakins · Roger Deakins + James Deakins",
            "enseña": "Roger Deakins (DP) conversa con colegas. Técnico."
          },
          {
            "ref": "The Cinematography Podcast",
            "enseña": "Entrevistas a DPs activos en cine y publicidad."
          }
        ]
      }
    ]
  }

};
