/* La Perdiz — concept showcase. All figures are demonstration data. */
const T = {
  en: {
    modeLive:"Live", modeInvest:"Invest", cta:"Book a viewing", viewsHead:"Choose your view", scroll:"Discover",
    factsHead:"Project data", demoShort:"Demonstration data", day:"Sunset", night:"Night", sectorsHead:"Sectors", planHint:"All sectors from above", dive:"Fly down",
    v_overview:["Benahavís · Costa del Sol","La Perdiz","A hillside residence between Marbella and Estepona, facing the sea and the sunset."],
    v_entry:["Arrival","The entrance","Low white walls, palms and olive trees. You are home before you reach the door."],
    v_road:["Arrival","The road home","The road climbs between the terraces, and the sea opens on the right."],
    v_residence:["Architecture","The residences","White ribbons, bronze and gardens on every level. No two buildings alike."],
    v_club:["Amenities","The club","A lagoon pool under a sweeping canopy — the heart of the estate."],
    v_living:["Interiors","Double-height living","Oak, stone and glass on both sides: pool on one, the sea on the other."],
    v_terrace:["Interiors","Your terrace","A bronze canopy, a plunge pool, and the whole coast below."],
    v_night:["After sunset","The estate at night","Every terrace lit, every pool glowing."],
    v_court:["Sport","The courts","Two hard courts and one clay court, with the residences rising behind."],
    f_court:[["Courts","3"],["Clay","1"],["Floodlit","Yes"]],
    v_plan:["Masterplan","Masterplan","Select a marker to see a phase."],
    f_overview:[["Residences","280"],["Buildings","30"],["Phases","3"],["Green area","62%"]],
    f_entry:[["Gated access","24/7"],["Guest parking","40"],["To the AP-7","4 min"]],
    f_road:[["Internal road","1.4 km"],["Max gradient","9%"],["EV chargers","60"]],
    f_residence:[["Sizes","95–310 m²"],["Terraces","25–120 m²"],["Bedrooms","2–4"],["Levels","3–5"]],
    f_club:[["Pools","5"],["Club area","1,800 m²"],["Courts","3"],["Spa & gym","Yes"]],
    f_living:[["Ceiling height","5.8 m"],["Glazing","Floor to ceiling"],["Finishes","Oak · limestone"]],
    f_terrace:[["Penthouses","24"],["Private pools","24"],["Orientation","South-west"]],
    f_night:[["Phase 1 delivery","2028"],["Phase 2","2029"],["Phase 3","2031"]],
    p1:["Phase 1","Lower terraces","Four buildings and the long pool. 48 residences, delivery 2028."],
    p2:["Phase 1","West pair","Two buildings with a private pool. 18 residences."],
    p3:["Phase 2","East group","Six buildings in two rows with their own pool. 62 residences."],
    p4:["Phase 2","The club","Lagoon pool, spa, gym and restaurant for residents."],
    p5:["Phase 3","Upper rows","The highest terraces with the widest sea views. 96 residences."],
    p6:["Phase 1","Sports terrace","Two hard courts and one clay court."],
    placeKicker:"Location", placeTitle:"Between Marbella and Estepona, above the sea",
    placeText:"A south-west facing hillside in Benahavís: mountains behind, the Mediterranean in front, the coast road minutes away.",
    dSea:"to the sea", dBanus:"to Puerto Banús", dMarbella:"to Marbella", dAirport:"to Málaga airport",
    craftKicker:"Materials", craftTitle:"White concrete, bronze, oak and water",
    craft1:"Flowing concrete ribbons and brushed bronze", craft2:"Oak walls and hand-shaped wood", craft3:"Pool edges lit from within",
    calcKicker:"For investors", calcTitle:"See the numbers move",
    calcText:"An interactive model: adjust the price, the deposit and the expected rental yield.",
    demoLong:"Concept showcase. All figures are demonstration data, not an offer.",
    calcPrice:"Residence price", calcDown:"Deposit", calcYield:"Gross rental yield",
    calcOutDown:"Deposit to pay", calcOutRent:"Rental income per year",
    contactKicker:"Contact", contactTitle:"Book a private presentation",
    contactText:"Leave your details and we will show you the project in person or online.",
    fName:"Name", fContact:"Email or phone", fInterest:"I am interested in", fOptLive:"A home for myself", fOptInvest:"An investment",
    fSend:"Send request", fOk:"Thank you. This is a demo form — nothing was sent.", fErr:"Please fill in your name and contact.",
    footNote:"Concept showcase · demonstration data · images are illustrative"
  },
  es: {
    modeLive:"Vivir", modeInvest:"Invertir", cta:"Reservar visita", viewsHead:"Elige tu vista", scroll:"Descubrir",
    factsHead:"Datos del proyecto", demoShort:"Datos de demostración", day:"Atardecer", night:"Noche", sectorsHead:"Sectores", planHint:"Todos los sectores desde arriba", dive:"Bajar",
    v_overview:["Benahavís · Costa del Sol","La Perdiz","Una residencia en la ladera entre Marbella y Estepona, frente al mar y al atardecer."],
    v_entry:["Llegada","La entrada","Muros blancos, palmeras y olivos. Ya estás en casa antes de llegar a la puerta."],
    v_road:["Llegada","El camino a casa","La carretera sube entre las terrazas y el mar se abre a la derecha."],
    v_residence:["Arquitectura","Las residencias","Cintas blancas, bronce y jardines en cada nivel. Ningún edificio es igual."],
    v_club:["Servicios","El club","Una piscina laguna bajo una gran marquesina: el corazón de la finca."],
    v_living:["Interiores","Salón a doble altura","Roble, piedra y vidrio a ambos lados: la piscina a un lado, el mar al otro."],
    v_terrace:["Interiores","Tu terraza","Una marquesina de bronce, una piscina privada y toda la costa a tus pies."],
    v_night:["Tras el atardecer","La finca de noche","Cada terraza iluminada, cada piscina encendida."],
    v_court:["Deporte","Las pistas","Dos pistas duras y una de tierra batida, con las residencias detrás."],
    f_court:[["Pistas","3"],["Tierra batida","1"],["Iluminación","Sí"]],
    v_plan:["Plan maestro","Plan maestro","Selecciona un marcador para ver una fase."],
    f_overview:[["Residencias","280"],["Edificios","30"],["Fases","3"],["Zona verde","62%"]],
    f_entry:[["Acceso controlado","24/7"],["Plazas de visita","40"],["A la AP-7","4 min"]],
    f_road:[["Vial interior","1,4 km"],["Pendiente máx.","9%"],["Cargadores","60"]],
    f_residence:[["Superficies","95–310 m²"],["Terrazas","25–120 m²"],["Dormitorios","2–4"],["Niveles","3–5"]],
    f_club:[["Piscinas","5"],["Zona club","1.800 m²"],["Pistas","3"],["Spa y gimnasio","Sí"]],
    f_living:[["Altura","5,8 m"],["Acristalamiento","De suelo a techo"],["Acabados","Roble · caliza"]],
    f_terrace:[["Áticos","24"],["Piscinas privadas","24"],["Orientación","Suroeste"]],
    f_night:[["Entrega fase 1","2028"],["Fase 2","2029"],["Fase 3","2031"]],
    p1:["Fase 1","Terrazas bajas","Cuatro edificios y la piscina larga. 48 residencias, entrega 2028."],
    p2:["Fase 1","Pareja oeste","Dos edificios con piscina propia. 18 residencias."],
    p3:["Fase 2","Grupo este","Seis edificios en dos filas con su piscina. 62 residencias."],
    p4:["Fase 2","El club","Piscina laguna, spa, gimnasio y restaurante para residentes."],
    p5:["Fase 3","Filas altas","Las terrazas más altas con las vistas más amplias. 96 residencias."],
    p6:["Fase 1","Terraza deportiva","Dos pistas duras y una de tierra batida."],
    placeKicker:"Ubicación", placeTitle:"Entre Marbella y Estepona, sobre el mar",
    placeText:"Una ladera orientada al suroeste en Benahavís: montañas detrás, el Mediterráneo delante y la costa a pocos minutos.",
    dSea:"al mar", dBanus:"a Puerto Banús", dMarbella:"a Marbella", dAirport:"al aeropuerto de Málaga",
    craftKicker:"Materiales", craftTitle:"Hormigón blanco, bronce, roble y agua",
    craft1:"Cintas de hormigón y bronce cepillado", craft2:"Paredes de roble y madera tallada", craft3:"Bordes de piscina iluminados",
    calcKicker:"Para inversores", calcTitle:"Mueve los números",
    calcText:"Un modelo interactivo: ajusta el precio, la entrada y la rentabilidad esperada.",
    demoLong:"Proyecto conceptual. Todas las cifras son de demostración, no una oferta.",
    calcPrice:"Precio de la residencia", calcDown:"Entrada", calcYield:"Rentabilidad bruta",
    calcOutDown:"Entrada a pagar", calcOutRent:"Ingresos por alquiler al año",
    contactKicker:"Contacto", contactTitle:"Reserva una presentación privada",
    contactText:"Déjanos tus datos y te mostraremos el proyecto en persona o en línea.",
    fName:"Nombre", fContact:"Email o teléfono", fInterest:"Me interesa", fOptLive:"Una casa para mí", fOptInvest:"Una inversión",
    fSend:"Enviar solicitud", fOk:"Gracias. Es un formulario de demostración: no se ha enviado nada.", fErr:"Indica tu nombre y un contacto.",
    footNote:"Proyecto conceptual · datos de demostración · imágenes ilustrativas"
  },
  ru: {
    modeLive:"Жить", modeInvest:"Инвестировать", cta:"Записаться на показ", viewsHead:"Выберите вид", scroll:"Подробнее",
    factsHead:"Данные проекта", demoShort:"Демонстрационные данные", day:"Закат", night:"Ночь", sectorsHead:"Секторы", planHint:"Все секторы сверху", dive:"Спуститься",
    v_overview:["Бенаавис · Коста-дель-Соль","La Perdiz","Резиденция на склоне между Марбельей и Эстепоной, лицом к морю и закату."],
    v_entry:["Приезд","Въезд","Низкие белые стены, пальмы и оливы. Вы дома ещё до того, как дошли до двери."],
    v_road:["Приезд","Дорога домой","Дорога поднимается между террасами, а справа открывается море."],
    v_residence:["Архитектура","Резиденции","Белые ленты, бронза и сады на каждом уровне. Нет двух одинаковых корпусов."],
    v_club:["Инфраструктура","Клуб","Бассейн-лагуна под большим навесом — сердце комплекса."],
    v_living:["Интерьеры","Гостиная в два света","Дуб, камень и стекло с обеих сторон: с одной бассейн, с другой море."],
    v_terrace:["Интерьеры","Ваша терраса","Бронзовый навес, собственный бассейн и всё побережье внизу."],
    v_night:["После заката","Комплекс ночью","Светится каждая терраса и каждый бассейн."],
    v_court:["Спорт","Корты","Два корта с твёрдым покрытием и один грунтовый, за ними поднимаются резиденции."],
    f_court:[["Кортов","3"],["Грунтовых","1"],["Освещение","Есть"]],
    v_plan:["Генплан","Генплан","Нажмите на метку, чтобы увидеть очередь."],
    f_overview:[["Резиденций","280"],["Корпусов","30"],["Очередей","3"],["Зелёная зона","62%"]],
    f_entry:[["Охраняемый въезд","24/7"],["Гостевые места","40"],["До трассы AP-7","4 мин"]],
    f_road:[["Внутренняя дорога","1,4 км"],["Макс. уклон","9%"],["Зарядки","60"]],
    f_residence:[["Площади","95–310 м²"],["Террасы","25–120 м²"],["Спален","2–4"],["Уровней","3–5"]],
    f_club:[["Бассейнов","5"],["Клубная зона","1 800 м²"],["Кортов","3"],["Спа и зал","Есть"]],
    f_living:[["Высота потолка","5,8 м"],["Остекление","В пол"],["Отделка","Дуб · известняк"]],
    f_terrace:[["Пентхаусов","24"],["Собственных бассейнов","24"],["Ориентация","Юго-запад"]],
    f_night:[["Сдача 1-й очереди","2028"],["2-я очередь","2029"],["3-я очередь","2031"]],
    p1:["1-я очередь","Нижние террасы","Четыре корпуса и длинный бассейн. 48 резиденций, сдача в 2028."],
    p2:["1-я очередь","Западная пара","Два корпуса с собственным бассейном. 18 резиденций."],
    p3:["2-я очередь","Восточная группа","Шесть корпусов в два ряда со своим бассейном. 62 резиденции."],
    p4:["2-я очередь","Клуб","Бассейн-лагуна, спа, зал и ресторан для жителей."],
    p5:["3-я очередь","Верхние ряды","Самые высокие террасы с самым широким видом на море. 96 резиденций."],
    p6:["1-я очередь","Спортивная терраса","Два корта с твёрдым покрытием и один грунтовый."],
    placeKicker:"Расположение", placeTitle:"Между Марбельей и Эстепоной, над морем",
    placeText:"Юго-западный склон в Бенаависе: позади горы, впереди Средиземное море, до побережья несколько минут.",
    dSea:"до моря", dBanus:"до Пуэрто-Бануса", dMarbella:"до Марбельи", dAirport:"до аэропорта Малаги",
    craftKicker:"Материалы", craftTitle:"Белый бетон, бронза, дуб и вода",
    craft1:"Плавные бетонные ленты и матовая бронза", craft2:"Дубовые стены и дерево ручной работы", craft3:"Кромка бассейна с подсветкой",
    calcKicker:"Инвесторам", calcTitle:"Цифры, которые можно двигать",
    calcText:"Интерактивная модель: меняйте цену, первый взнос и ожидаемую доходность аренды.",
    demoLong:"Проект-концепт. Все цифры демонстрационные и не являются офертой.",
    calcPrice:"Цена резиденции", calcDown:"Первый взнос", calcYield:"Доходность аренды",
    calcOutDown:"Сумма взноса", calcOutRent:"Доход от аренды в год",
    contactKicker:"Контакт", contactTitle:"Запишитесь на закрытую презентацию",
    contactText:"Оставьте контакты, и мы покажем проект лично или онлайн.",
    fName:"Имя", fContact:"Почта или телефон", fInterest:"Меня интересует", fOptLive:"Дом для себя", fOptInvest:"Инвестиция",
    fSend:"Отправить заявку", fOk:"Спасибо. Это демонстрационная форма — ничего не отправлено.", fErr:"Укажите имя и контакт.",
    footNote:"Проект-концепт · демонстрационные данные · изображения иллюстративные"
  }
};

const VIEWS = [
  {id:"overview", fx:45, img:"overview", night:"night", loop:"loop-overview", nightLoop:"loop-night"},
  {id:"entry", fx:50, img:"entry", night:"entry-night", loop:"loop-entry"},
  {id:"road", fx:30, img:"road", night:"road-night", loop:"loop-road"},
  {id:"residence", fx:45, img:"residence", night:"residence-night", loop:"loop-residence"},
  {id:"club", fx:42, img:"club", night:"club-night", loop:"loop-club"},
  {id:"living", fx:50, img:"living", night:"living-night", loop:"loop-living"},
  {id:"terrace", fx:62, img:"terrace", night:"terrace-night", loop:"loop-terrace", nightLoop:"loop-terrace-night"},
  {id:"night", fx:45, img:"night", loop:"loop-night"},
  {id:"court", fx:60, img:"court", night:"court-night", loop:"loop-court"},
  {id:"plan", fx:50, img:"plan", investOnly:true}
];
/* camera flights that exist as clips; every other change is a soft dissolve */
const CLIPS = {
  "entry>club":"entry-club", "plan>club":"plan-club", "plan>residence":"plan-residence", "plan>living":"plan-living", "plan>road":"plan-road", "plan>terrace":"plan-terrace", "plan>court":"plan-court", "residence>plan":"up-residence", "living>plan":"up-living", "road>plan":"up-road", "club>plan":"up-club", "terrace>plan":"up-terrace", "court>plan":"up-court", "club>living":"club-living", "living>terrace":"living-terrace",
  "terrace>terrace-night":"terrace-night", "terrace-night>night":"terracenight-night"
};
/* masterplan markers, in pixels of the 1920x1084 image */
const PINS = [[960,744,"p1","residence"],[492,600,"p2","living"],[1476,528,"p3","road"],[894,384,"p4","club"],[1308,264,"p5","terrace"],[672,912,"p6","court"]];
const IMG_W = 1920, IMG_H = 1084;

const $ = s => document.querySelector(s);
const stage = $("#stage"), A = $("#layerA"), B = $("#layerB"), flight = $("#flight");
let lang = "en", mode = "live", cur = "overview", isNight = false, busy = false, front = A, activePin = null;

const MV = "?m=21"; /* bump when images or clips change, so browsers drop cached copies */
const src = name => `img/${name}.jpg${MV}`;
const VDIR = matchMedia("(max-width:900px), (max-height:480px)").matches ? "video-m" : "video";
const imgOf = (id, night) => { const v = VIEWS.find(v => v.id === id); return night && v.night ? v.night : v.img; };

const FX = {}; VIEWS.forEach(v => { FX[v.img] = v.fx; if (v.night) FX[v.night] = v.fx; });
const fxOf = name => `${FX[name] ?? 50}% 50%`;
function setLayer(name){
  const back = front === A ? B : A;
  back.dataset.img = name; back.style.backgroundPosition = fxOf(name);
  back.style.backgroundImage = `url(${src(name)})`;
  back.classList.add("is-on"); front.classList.remove("is-on"); front = back;
}
/* clips are fetched whole and played from memory, so they work on any hosting and in Safari */
const BLOBS = {};
async function getClip(c){
  if (!BLOBS[c]) { try { const r = await fetch(`${VDIR}/${c}.mp4${MV}`); if (r.ok) BLOBS[c] = URL.createObjectURL(new Blob([await r.blob()], {type:"video/mp4"})); } catch (e) {} }
  return BLOBS[c] || `${VDIR}/${c}.mp4${MV}`;
}
/* warm up only the flights that can start from the current view */
function prefetch(){
  const from = imgOf(cur, isNight);
  const list = Object.keys(CLIPS).filter(k => k.startsWith(from + ">") && (mode === "invest" || !k.endsWith(">plan"))).map(k => CLIPS[k]);
  [...new Set(list)].filter(Boolean).forEach(getClip);
}
async function playClip(clip, targetImg, fromImg){
  stage.classList.add("is-loading");
  const url = await getClip(clip);
  stage.classList.remove("is-loading");
  return new Promise(res => {
    let done = false;
    const finish = () => { if (done) return; done = true; setLayer(targetImg);
      setTimeout(() => { flight.classList.remove("is-on"); res(); }, 350); };
    flight.style.transition = "opacity .25s ease"; flight.style.objectPosition = fxOf(fromImg || targetImg);
    flight.src = url; flight.load();
    flight.onended = finish; flight.onerror = finish;
    flight.oncanplay = () => { flight.classList.add("is-on"); flight.play().catch(finish);
      /* on portrait screens the crop slides from the old view's focus to the new one during the flight */
      flight.style.transition = `opacity .25s ease, object-position ${Math.max(1, flight.duration || 4)}s ease-in-out`; flight.style.objectPosition = fxOf(targetImg); };
    setTimeout(finish, 9000);
  });
}
/* a view that has a filmed arrival always arrives with it, wherever you come from */
const ARRIVAL = {};
async function show(fromImg, toImg, allowArrival){
  let clip = CLIPS[`${fromImg}>${toImg}`];
  if (!clip && allowArrival && ARRIVAL[toImg]) {
    const [startImg, c] = ARRIVAL[toImg];
    setLayer(startImg); await new Promise(r => setTimeout(r, 700)); clip = c; fromImg = startImg;
  }
  if (clip) await playClip(clip, toImg, fromImg);
  else { setLayer(toImg); await new Promise(r => setTimeout(r, 900)); }
}
async function goTo(id){
  if (busy || id === cur) return;
  busy = true; lockButtons(true); $(".caption").classList.add("is-out"); closePin(); ambientOff();
  const from = imgOf(cur, isNight);
  cur = id; isNight = false;
  markActive();
  await show(from, imgOf(id, false), true);
  renderView(); busy = false; lockButtons(false); ambientOn(); prefetch();
}
async function goSector(to){
  if (busy || to === cur) return;
  busy = true; lockButtons(true); $(".caption").classList.add("is-out"); closePin(); ambientOff();
  if (cur !== "plan") { getClip(CLIPS[`plan>${to}`]); await show(imgOf(cur, isNight), "plan"); }
  cur = to; isNight = false; markActive();
  await show("plan", imgOf(to, false));
  renderView(); busy = false; lockButtons(false); ambientOn(); prefetch();
}
async function toggleNight(){
  const v = VIEWS.find(v => v.id === cur);
  if (busy || !v.night) return;
  busy = true; lockButtons(true); ambientOff();
  const from = imgOf(cur, isNight); isNight = !isNight;
  await show(from, imgOf(cur, isNight));
  renderView(); busy = false; lockButtons(false); ambientOn(); prefetch();
}
/* living background: a looping clip that fades in over the still once the view has settled */
const ambient = $("#ambient");
function ambientOff(){ ambient.classList.remove("is-on"); stage.classList.remove("has-ambient"); ambient.pause(); }
function ambientOn(){
  const v = VIEWS.find(v => v.id === cur);
  const name = isNight ? v.nightLoop : v.loop;
  if (!name) return ambientOff();
  const url = `${VDIR}/${name}.mp4${MV}`;
  ambient.style.objectPosition = fxOf(v.img);
  if (!ambient.src.endsWith(url)) ambient.src = url;
  const night = isNight;
  ambient.oncanplay = () => { if (cur === v.id && isNight === night && !busy) { ambient.classList.add("is-on"); stage.classList.add("has-ambient"); } };
  ambient.play().then(() => ambient.oncanplay()).catch(() => {});
}
function lockButtons(on){ document.querySelectorAll(".view-btn,.sector-btn,.mini-pin").forEach(b => b.disabled = on); }
function markActive(){ document.querySelectorAll(".view-btn,.sector-btn,.mini-pin").forEach(b => b.classList.toggle("is-on", b.dataset.view === cur)); }

function renderList(){
  const ul = $("#viewList"), t = T[lang]; ul.innerHTML = "";
  const nav = $(".views"); nav.classList.toggle("is-sectors", mode === "invest");
  $(".views-head").textContent = mode === "invest" ? t.sectorsHead : t.viewsHead;
  let mini = $("#miniMap");
  if (mode !== "invest") {
    if (mini) mini.remove();
    VIEWS.filter(v => !v.investOnly).forEach(v => {
      const li = document.createElement("li");
      li.innerHTML = `<button class="view-btn" data-view="${v.id}"><img src="${src(v.img)}" alt=""><span>${t["v_" + v.id][1]}</span></button>`;
      li.firstChild.addEventListener("click", () => goTo(v.id));
      ul.appendChild(li);
    });
    return markActive();
  }
  /* investor mode: a small masterplan plus the six numbered sectors, each saying where it takes you */
  if (!mini) { mini = document.createElement("div"); mini.id = "miniMap"; mini.className = "mini-map"; nav.insertBefore(mini, ul); }
  mini.innerHTML = `<button class="mini-plan" data-view="plan" aria-label="${t.v_plan[1]}"></button>` +
    PINS.map(([x, y, , to], i) => `<button class="mini-pin" data-view="${to}" style="left:${x / IMG_W * 100}%;top:${y / IMG_H * 100}%">${i + 1}</button>`).join("");
  mini.querySelector(".mini-plan").addEventListener("click", () => goTo("plan"));
  mini.querySelectorAll(".mini-pin").forEach(b => b.addEventListener("click", () => goSector(b.dataset.view)));
  PINS.forEach(([, , key, to], i) => {
    const li = document.createElement("li");
    li.innerHTML = `<button class="sector-btn" data-view="${to}"><b>${i + 1}</b><span><strong>${t[key][1]}</strong><em>${t[key][0]} · ${t["v_" + to][1]}</em></span></button>`;
    li.firstChild.addEventListener("click", () => goSector(to));
    ul.appendChild(li);
  });
  const li = document.createElement("li");
  li.innerHTML = `<button class="sector-btn is-plan-btn" data-view="plan"><b>◎</b><span><strong>${t.v_plan[1]}</strong><em>${t.planHint}</em></span></button>`;
  li.firstChild.addEventListener("click", () => goTo("plan"));
  ul.appendChild(li);
  markActive();
}
function renderView(){
  const t = T[lang], v = VIEWS.find(v => v.id === cur), [k, title, text] = t["v_" + cur];
  $("#capKicker").textContent = k; $("#capTitle").textContent = title; $("#capText").textContent = text;
  $(".caption").classList.remove("is-out");
  const dn = $("#dayNight"); dn.hidden = !v.night;
  dn.classList.toggle("is-night", isNight); $("#dayNightLabel").textContent = isNight ? t.day : t.night;
  const isPlan = cur === "plan"; stage.classList.toggle("is-plan", isPlan);
  const facts = $("#facts"), rows = t["f_" + cur];
  facts.hidden = mode !== "invest" || isPlan || !rows;
  if (rows) $("#factsList").innerHTML = rows.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join("");
  $("#pins").hidden = !isPlan;
  if (isPlan) { placePins(); if (!activePin) openPin("p1"); else openPin(activePin); } else closePin();
}
function placePins(){
  const box = $("#pins"), W = stage.clientWidth, H = stage.clientHeight;
  let s = Math.max(W / IMG_W, H / IMG_H), ox = (W - IMG_W * s) / 2, oy = (H - IMG_H * s) / 2;
  if (matchMedia("(max-width:900px) and (orientation:portrait)").matches) {
    const top = Math.round($(".top").getBoundingClientRect().bottom - stage.getBoundingClientRect().top + 6);
    stage.style.setProperty("--plan-top", top + "px"); s = W / IMG_W; ox = 0; oy = top;
  }
  box.innerHTML = "";
  PINS.forEach(([x, y, key], i) => {
    const b = document.createElement("button");
    b.className = "pin" + (key === activePin ? " is-on" : ""); b.textContent = i + 1;
    b.style.left = ox + x * s + "px"; b.style.top = oy + y * s + "px";
    b.setAttribute("aria-label", T[lang][key][1]);
    b.addEventListener("click", () => { const to = PINS[i][3]; if (to && activePin === key) goSector(to); else openPin(key); });
    box.appendChild(b);
  });
}
function openPin(key){
  activePin = key; const [tag, title, text] = T[lang][key], card = $("#pinCard");
  const to = (PINS.find(p => p[2] === key) || [])[3];
  card.innerHTML = `<span class="tag">${tag}</span><h3>${title}</h3><p>${text}</p>` + (to ? `<button class="cta solid dive">${T[lang].dive}</button>` : "");
  card.hidden = false;
  if (to) card.querySelector(".dive").addEventListener("click", () => goSector(to));
  document.querySelectorAll(".pin").forEach((p, i) => p.classList.toggle("is-on", PINS[i][2] === key));
}
function closePin(){ $("#pinCard").hidden = true; }

function setMode(m){
  mode = m;
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.toggle("is-on", b.dataset.mode === m));
  renderList();
  if (m === "live" && cur === "plan") goTo("overview"); else renderView();
}
function setLang(l){
  lang = l; document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = T[l][el.dataset.i18n]; });
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("is-on", b.dataset.lang === l));
  renderList(); renderView(); calc(); $("#formMsg").textContent = "";
}

/* calculator */
const money = n => new Intl.NumberFormat(lang === "en" ? "en-GB" : lang === "es" ? "es-ES" : "ru-RU",
  {style:"currency", currency:"EUR", maximumFractionDigits:0}).format(n);
function calc(){
  const p = +$("#rPrice").value, d = +$("#rDown").value, y = +$("#rYield").value;
  $("#oPrice").textContent = money(p); $("#oDown").textContent = d + "%";
  $("#oYield").textContent = y.toLocaleString(lang === "en" ? "en-GB" : "es-ES") + "%";
  $("#resDown").textContent = money(p * d / 100); $("#resRent").textContent = money(p * y / 100);
}

/* wiring */
document.querySelectorAll(".mode-btn").forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
$("#dayNight").addEventListener("click", toggleNight);
["rPrice", "rDown", "rYield"].forEach(id => $("#" + id).addEventListener("input", calc));
addEventListener("resize", () => { if (cur === "plan") placePins(); });
$("#form").addEventListener("submit", e => {
  e.preventDefault(); const f = e.target;
  $("#formMsg").textContent = f.name.value.trim() && f.contact.value.trim() ? T[lang].fOk : T[lang].fErr;
});

const pref = (navigator.language || "en").slice(0, 2);
front.style.backgroundImage = `url(${src("overview")})`; front.dataset.img = "overview"; front.style.backgroundPosition = fxOf("overview"); front.classList.add("is-on");
VIEWS.forEach(v => { new Image().src = src(v.img); if (v.night) new Image().src = src(v.night); });
setLang(T[pref] ? pref : "en");
ambientOn();
prefetch();

/* living detail clips in the craft block: load and play only while on screen */
(function(){
  const vids = document.querySelectorAll("video.detal");
  if (!vids.length || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) { if (!v.src) v.src = `${VDIR}/${v.dataset.clip}.mp4${MV}`; v.play().catch(() => {}); }
    else v.pause();
  }), {threshold: .25});
  vids.forEach(v => io.observe(v));
})();
