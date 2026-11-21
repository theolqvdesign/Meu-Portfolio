const home = document.getElementById('home');
const sobre = document.getElementById('sobre');
const projeto = document.getElementById('projeto');
const rodape = document.getElementById('rodape');
const grade = document.getElementById('grade');
const nav = document.getElementById('nav');
const back = document.getElementById('back');
const topo = document.getElementById('topo');

/* IDIOMA: 'pt' ou 'en' (lembra a escolha neste navegador) */
let idioma = 'pt';
try { idioma = localStorage.getItem('idioma') === 'en' ? 'en' : 'pt'; } catch (e) {}
const ROT = { pt: { inicio: 'Início', projetos: 'Projetos', ferramentas: 'Ferramentas utilizadas' }, en: { inicio: 'Home', projetos: 'Projects', ferramentas: 'Tools used' } };

/* DADOS DOS PROJETOS: edite aqui.
   - capa: imagem do card (ex.: 'img/p1-capa.jpg'); vazia = gradiente de exemplo
   - imagens: lista de arquivos 1920x1080 (ex.: ['img/p1-1.jpg', 'img/p1-2.jpg']); vazia = 3 blocos de exemplo
   - ferramentas: softwares usados no projeto, pelos nomes da lista FERRAMENTAS (ex.: ['photoshop', 'illustrator'])
   - pt / en: textos em cada idioma. O id ('projeto-1') vira o endereço #projeto-1 */
const projetos = {
  'projeto-1': { data: '2026', capa: 'img/capafestivalteresina26.png', imagens: [], ferramentas: ['photoshop', 'illustrator'], a: '#e8c4b8', b: '#b7798a',
    pt: { nome: 'Festival de Teresina', area: 'Social Media Design', desc: 'Trabalhei nesse projeto como designer para os posts de Instagram do Festival. Como já havia trabalhado com eles no Festival de 2024, a pedida foi manter o design dos posts dentro da identidade visual. A partir daí criei peças que capturavam a essência do festival, mas com uma abordagem diferente que representasse a nova edição.' },
    en: { nome: 'Teresina Festival', area: 'Social Media Design', desc: 'I worked on this project as a designer for the Festival’s Instagram posts. Since I had already worked with them on the 2024 Festival, the brief was to keep the posts within the visual identity. From there, I created pieces that captured the essence of the festival, but with a different approach that represented the new edition.' } },
  'projeto-2': { data: '2026', capa: 'img/CapaSocialMediaAcervo.png', imagens: [], ferramentas: ['photoshop', 'illustrator'], a: '#b9d3c2', b: '#5f8f78',
    pt: { nome: 'Acervo Violão Brasileiro', area: 'Social Media Design', desc: 'Criação e adaptação de peças para Instagram (posts), YouTube (thumbnails) e TikTok (capas de posts), ao longo de um ano de produção contínua. Cada formato foi pensado de acordo com as especificações, o comportamento de consumo e o público da plataforma, mantendo a consistência da marca em temas variados. Demandou organização, domínio de múltiplos formatos e atenção em cada etapa, da concepção à entrega final.' },
    en: { nome: 'Acervo Violão Brasileiro', area: 'Social Media Design', desc: 'Creation and adaptation of pieces for Instagram (posts), YouTube (thumbnails) and TikTok (post covers), over a year of continuous production. Each format was designed according to the platform’s specifications, consumption behavior and audience, while keeping the brand consistent across a variety of themes. It required organization, mastery of multiple formats and attention at every stage, from concept to final delivery.' } },
  'projeto-3': { data: '2026', capa: 'img/capaabutres2026.png', imagens: [], ferramentas: ['photoshop', 'illustrator'], a: '#c5c9ea', b: '#6a70b8',
    pt: { nome: 'Abutres de Olinda', area: 'Illustração / Design de Camisa', desc: 'Para o carnaval de 2026, o bloco queria um desenho que representasse a história do carnaval pernambucano. Com o tema homenageando o músico e fundador do Movimento Manguebeat, Chico Science, criamos um desenho que trouxesse referências ao carnaval de Recife e Olinda e ao movimento Manguebeat.' },
    en: { nome: 'Abutres de Olinda', area: 'Illustration / Shirt Design', desc: 'For the 2026 carnival, the carnival block wanted a design that represented the history of Pernambuco’s carnival. With a theme paying tribute to the musician and founder of the Manguebeat movement, Chico Science, we created a design that brought in references to the carnivals of Recife and Olinda and to the Manguebeat movement.' } },
  'projeto-4': { data: '2025', capa: 'img/capadomqueiroga.jpg', imagens: [], ferramentas: ['illustrator'], a: '#f0dca8', b: '#c9964a',
    pt: { nome: 'Cachaça Dom Queiroga', area: 'Design de Embalagem', desc: 'Cachaça é a bebida mais tradicional do Nordeste, logo o que não falta é variedade de marcas, rótulos e formatos de garrafa. Trabalhar nesse projeto foi uma experiência única e desafiadora para entregar um visual original. Usando como referência a fachada da fazenda de alambique e o brasão da família, , foram criados os rótulos que representam a história da marca. Cada um com sua individualidade, mantendo a coesão da linha e o posicionamento no mercado de bebidas artesanais.' },
    en: { nome: 'Cachaça Dom Queiroga', area: 'Packaging Design', desc: 'Cachaça is the most traditional spirit of Brazil’s Northeast, so there is no shortage of brands, labels and bottle shapes. Working on this project was a unique and challenging experience in delivering an original look. Using the facade of the distillery farm and the family crest as references, the labels that represents the brand’s story were created. Each label has its own unique traits and keeps the line cohesive and in line with its positioning in the artisanal drinks market.' } },
  'projeto-5': { data: '2025', capa: 'img/capaabutres25.png', imagens: [], ferramentas: ['photoshop', 'illustrator'], a: '#d9b8e0', b: '#8a5a9e',
    pt: { nome: 'Abutres de Olinda', area: 'Illustração / Design de Camisa', desc: 'Nesse trabalho a ideia era criar um desenho irreverente que combinasse com o tema “Pit-stop do Beijo”, sendo uma brincadeira entre carnaval e fórmula 1. Mantendo a tradição do bloco e fazendo referência ao universo das corridas automobilísticas, entregamos uma camisa que registrou recorde de vendas na história do bloco. ' },
    en: { nome: 'Abutres de Olinda', area: 'Illustration / Shirt Design', desc: 'The idea for this work was to create an irreverent design that matched the theme “Pit-stop do Beijo” (Kiss Pit Stop), a playful mix of carnival and Formula 1. Keeping the block’s tradition while referencing the world of motor racing, we delivered a shirt that set a sales record in the block’s history.' } },
  'projeto-6': { data: '2025', capa: 'img/capascolecaoebooks.png', imagens: [], ferramentas: ['photoshop', 'indesign'], a: '#b8dde0', b: '#4f8f98',
    pt: { nome: 'Coleção Partituras Digitais', area: 'Design Editorial / Design de Capas', desc: 'Projeto de desenvolvimento de 3 e-books, trabalhei como designer na diagramação dos livros de partituras e design das capas das três edições. O trabalho foi planejado em fases ao longo de um ano, permitindo tratamento personalizado a cada e-book. A partir do briefing e pesquisa, defini um sistema visual que unifica a coleção e preserva a identidade de cada título.' },
    en: { nome: 'Digital Sheet Music Collection', area: 'Editorial design / Cover Design', desc: 'A project to develop 3 e-books: I worked as a designer on the layout of the sheet music books and on the cover design for all three editions. The work was planned in phases over a year, allowing personalized treatment for each e-book. Based on the briefing and research, I defined a visual system that unifies the collection while preserving the identity of each title.' } }
};

/* FERRAMENTAS: ícones dos softwares. Sem 'icone', aparece um selo com a sigla e as cores abaixo.
   Para usar o ícone oficial, coloque o arquivo em img/ e preencha, ex.: icone: 'img/photoshop.svg'.
   Para incluir outro software, copie uma linha e use o novo nome em 'ferramentas' do projeto. */
const FERRAMENTAS = {
  photoshop:   { nome: 'Photoshop',     sigla: 'Ps', fundo: '#001E36', cor: '#31A8FF', icone: '' },
  illustrator: { nome: 'Illustrator',   sigla: 'Ai', fundo: '#330000', cor: '#FF9A00', icone: '' },
  indesign:    { nome: 'InDesign',      sigla: 'Id', fundo: '#49021F', cor: '#FF3366', icone: '' },
  premiere:    { nome: 'Premiere',      sigla: 'Pr', fundo: '#00005B', cor: '#9999FF', icone: '' },
  figma:       { nome: 'Figma',         sigla: 'Fg', fundo: '#1E1E1E', cor: '#F24E1E', icone: '' },
  express:     { nome: 'Adobe Express', sigla: 'Ex', fundo: '#2A0A4A', cor: '#FF61F6', icone: '' }
};

function montarGrade() {
  grade.innerHTML = '';
  Object.entries(projetos).forEach(([id, p]) => {
    const t = p[idioma];
    const a = document.createElement('a');
    a.className = 'card';
    a.href = '#' + id;
    a.style.setProperty('--a', p.a);
    a.style.setProperty('--b', p.b);
    const capa = p.capa ? '<img class="cover" src="' + p.capa + '" alt="' + t.nome + '">' : '<div class="cover"></div>';
    a.innerHTML = capa + '<div class="info"><h3>' + t.nome + '</h3><p>' + t.area + ' · ' + p.data + '</p></div>';
    grade.appendChild(a);
  });
}

function mostrarProjeto(p) {
  const t = p[idioma];
  document.getElementById('p-nome').textContent = t.nome;
  document.getElementById('p-meta').textContent = t.area + ' · ' + p.data;
  document.getElementById('p-desc').textContent = t.desc;
  const ferr = (p.ferramentas || []).filter(id => FERRAMENTAS[id]);
  const blocoFerr = document.getElementById('p-tools');
  const listaFerr = document.getElementById('p-tools-lista');
  blocoFerr.hidden = !ferr.length;
  document.getElementById('p-tools-titulo').textContent = ROT[idioma].ferramentas;
  listaFerr.innerHTML = '';
  ferr.forEach(id => {
    const f = FERRAMENTAS[id];
    const li = document.createElement('li');
    let ico;
    if (f.icone) {
      ico = document.createElement('img');
      ico.src = f.icone; ico.alt = f.nome;
    } else {
      ico = document.createElement('span');
      ico.textContent = f.sigla;
      ico.style.background = f.fundo; ico.style.color = f.cor;
      ico.setAttribute('role', 'img'); ico.setAttribute('aria-label', f.nome);
    }
    ico.className = 'ico'; ico.title = f.nome;
    li.appendChild(ico);
    listaFerr.appendChild(li);
  });
  const caixa = document.getElementById('p-imgs');
  caixa.innerHTML = '';
  const lista = p.imagens.length ? p.imagens : [null, null, null];
  lista.forEach((src, i) => {
    let el;
    if (src) {
      el = document.createElement('img');
      el.src = src; el.width = 1920; el.height = 1080; el.loading = 'lazy';
      el.alt = t.nome + ' – ' + (i + 1);
    } else {
      el = document.createElement('div');
      el.className = 'ph';
      el.style.setProperty('--a', p.a);
      el.style.setProperty('--b', p.b);
    }
    caixa.appendChild(el);
  });
}

/* Botão flutuante: só na página inicial e depois de rolar 300px */
function atualizarTopo() {
  topo.classList.toggle('visivel', !home.hidden && window.scrollY > 300);
}

/* ROTAS: decide qual "página" mostrar conforme o final do endereço (#sobre, #projeto-1, #inicio) */
function rota(manterScroll) {
  const h = location.hash.slice(1);
  const p = projetos[h];
  const naSobre = h === 'sobre';
  home.hidden = naSobre || !!p;
  sobre.hidden = !naSobre;
  projeto.hidden = !p;
  rodape.hidden = naSobre;
  if (p) mostrarProjeto(p);
  back.style.visibility = (p || naSobre) ? 'visible' : 'hidden';
  back.textContent = naSobre ? ROT[idioma].projetos : ROT[idioma].inicio;
  nav.style.visibility = naSobre ? 'hidden' : 'visible';
  if (!manterScroll) window.scrollTo(0, 0);
  atualizarTopo();
}

/* Troca de idioma: todo elemento com data-en="..." tem o texto em PT no HTML e em EN no atributo */
function aplicarIdioma() {
  document.documentElement.lang = idioma === 'en' ? 'en' : 'pt-BR';
  document.querySelectorAll('[data-en]').forEach(el => {
    if (el.dataset.pt === undefined) el.dataset.pt = el.textContent;
    el.textContent = idioma === 'en' ? el.dataset.en : el.dataset.pt;
  });
  document.querySelectorAll('#lang span').forEach(s => s.classList.toggle('on', s.dataset.l === idioma));
  montarGrade();
  rota(true);
}

document.getElementById('lang').addEventListener('click', () => {
  idioma = idioma === 'pt' ? 'en' : 'pt';
  try { localStorage.setItem('idioma', idioma); } catch (e) {}
  aplicarIdioma();
});
topo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', atualizarTopo, { passive: true });
window.addEventListener('hashchange', () => rota(false));

/* Ampliar imagem ao clicar */
const zoom = document.getElementById('zoom');
const zoomImg = document.getElementById('zoom-img');
function abrirZoom(src, alt) {
  zoomImg.src = src;
  zoomImg.alt = alt;
  zoom.hidden = false;
  document.body.style.overflow = 'hidden';   // trava a rolagem da página ao fundo
}
function fecharZoom() {
  zoom.hidden = true;
  zoomImg.removeAttribute('src');
  document.body.style.overflow = '';
}
document.getElementById('p-imgs').addEventListener('click', e => {
  const img = e.target.closest('img');
  if (img) abrirZoom(img.src, img.alt);
});
zoom.addEventListener('click', fecharZoom);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !zoom.hidden) fecharZoom(); });
window.addEventListener('hashchange', fecharZoom);

aplicarIdioma();
