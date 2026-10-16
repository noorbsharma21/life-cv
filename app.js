/* ───────────────────────────────────────────────
   life/cv — the gallery, the morning after
   Wren got three minutes. Everything below is her
   first draft of a person. All of it is editable.
   ─────────────────────────────────────────────── */

const KEY = 'lifecv.v2';
const uid = () => Math.random().toString(36).slice(2, 9);

/* ── the first pass ─────────────────────────── */
const SEED = () => ({
  person: {
    name: 'Mira',
    era: 'Becoming',
    eraSub: 'years in. Began the summer you stopped answering the landline.',
    eraYears: 4,
    eras: ['The long childhood', 'The blue room', 'Night radio', 'Becoming'],
  },
  pass: 2,
  minutesGiven: 3,
  rooms: [
    {
      id: 'music', name: 'Music', public: true, c1: '#6E5BF2', c2: '#CFC6FF',
      blurb: 'The sounds that raised you, and the two you can’t put on anymore.',
      entries: [
        { id: uid(), title: 'Blue — Joni Mitchell', note: 'Your mother’s cassette. The only one in the car for a whole year.', year: '2007', src: 'you', ok: true },
        { id: uid(), title: 'That winter album', note: 'You said “the one that sounds like a flooded room.” Wren thinks: Burial, Untrue. She is not sure.', year: '2015', src: 'wren', ok: false },
        { id: uid(), title: 'You stopped playing piano at fifteen', note: 'Said flatly, then you changed the subject, which she noticed.', year: '2009', src: 'wren', ok: false },
        { id: uid(), title: 'Jeff Buckley at 3am, only in other people’s kitchens', note: '', year: '', src: 'you', ok: true },
      ],
    },
    {
      id: 'art', name: 'Art & Looking', public: true, c1: '#F2772F', c2: '#FFD9A8',
      blurb: 'What stops you in a room. You are a starer. You admitted this.',
      entries: [
        { id: uid(), title: 'Agnes Martin, the grey ones', note: 'You stood there “an embarrassing amount of time.”', year: '2019', src: 'you', ok: true },
        { id: uid(), title: 'You draw hands badly and keep drawing them', note: '', year: '', src: 'you', ok: true },
        { id: uid(), title: 'Photographs of empty rooms', note: 'Wren inferred this from three separate things you said. Possibly overreaching.', year: '', src: 'wren', ok: false },
      ],
    },
    {
      id: 'work', name: 'Work', public: true, c1: '#0E9A8B', c2: '#AEEBD8',
      blurb: 'What you did for money, and the thing underneath it.',
      entries: [
        { id: uid(), title: 'Night shifts at the student radio station', note: '2am to 6am. You called it the best job you’ll ever have.', year: '2016', src: 'you', ok: true },
        { id: uid(), title: 'The agency. Four years.', note: 'You described it as “fine,” twice, in the same tone.', year: '2019', src: 'wren', ok: false },
        { id: uid(), title: 'Left after a Tuesday meeting', note: 'You didn’t say what happened in the meeting.', year: '2023', src: 'you', ok: true },
        { id: uid(), title: 'The thing you actually want to make', note: 'Wren has a guess and is keeping it to herself until you say more.', year: 'now', src: 'wren', ok: false },
      ],
    },
    {
      id: 'love', name: 'Love', public: true, c1: '#F2548C', c2: '#FFC9DC',
      blurb: 'Handled gently. Nothing here is hung without your say-so.',
      entries: [
        { id: uid(), title: 'D. — four years, ended kindly', note: 'You used the word “kindly” unprompted. She’s keeping it.', year: '2019–2023', src: 'you', ok: true },
        { id: uid(), title: 'The letter you didn’t send', note: 'Mentioned once, quickly, at 2:14 into the three minutes.', year: '2024', src: 'wren', ok: false },
        { id: uid(), title: 'You fall for the way people say your name', note: 'A guess. A bold one.', year: '', src: 'wren', ok: false },
      ],
    },
    {
      id: 'people', name: 'The People', public: true, c1: '#3A74F2', c2: '#BBD6FF',
      blurb: 'Who holds a version of you that you can’t reach anymore.',
      entries: [
        { id: uid(), title: 'Your sister. Sundays, forty minutes.', note: 'Never longer, never skipped.', year: 'ongoing', src: 'you', ok: true },
        { id: uid(), title: 'Theo — keeps the 2014 version of you', note: '', year: '2014', src: 'you', ok: true },
        { id: uid(), title: 'The friend you owe a call', note: 'You know exactly who. Wren doesn’t.', year: '', src: 'wren', ok: false },
      ],
    },
    {
      id: 'rituals', name: 'Rituals', public: true, c1: '#8C9A3F', c2: '#E7F0BC',
      blurb: 'The small repeated things. Usually the truest part of the show.',
      entries: [
        { id: uid(), title: 'Coffee before speaking to anyone', note: 'Non-negotiable, you said, laughing.', year: '', src: 'you', ok: true },
        { id: uid(), title: 'The long way home when upset', note: '', year: '', src: 'you', ok: true },
        { id: uid(), title: 'Rereading the same four pages', note: 'You didn’t say which book. Wren would like to know which book.', year: '', src: 'wren', ok: false },
      ],
    },
  ],
  timeline: [
    { id: uid(), year: '2007', label: 'the cassette in the car' },
    { id: uid(), year: '2009', label: 'piano, then no piano' },
    { id: uid(), year: '2014', label: 'the blue room' },
    { id: uid(), year: '2016', label: 'night radio' },
    { id: uid(), year: '2019', label: 'D., and the agency' },
    { id: uid(), year: '2023', label: 'the Tuesday meeting' },
    { id: uid(), year: '2026', label: 'now, apparently' },
  ],
  threads: [
    { id: uid(), q: 'Something happened in 2014 that you walked around, not through.', room: 'love' },
    { id: uid(), q: 'You talk about work in a flat voice and music in a fast one.', room: 'work' },
    { id: uid(), q: 'Your mother is in three answers and never named once.', room: 'people' },
  ],
  holding: [
    { id: uid(), text: '“…the smell of the hallway carpet, which I know is a strange thing to lead with.”' },
    { id: uid(), text: '“I kept the receipt. I don’t know why I kept the receipt.”' },
  ],
  picks: [
    { id: uid(), kind: 'a song', title: 'This Mortal Coil — Song to the Siren', why: 'Because of the kitchens, and the 3am.', c1: '#6E5BF2', c2: '#D6CEFF' },
    { id: uid(), kind: 'an object', title: 'The unsent letter', why: 'She thinks it belongs on the wall. You may disagree.', c1: '#F2548C', c2: '#FFD1E1' },
    { id: uid(), kind: 'a room', title: 'The radio booth, 4am', why: 'You lit up. It was the only time in three minutes.', c1: '#0E9A8B', c2: '#B6EDDC' },
    { id: uid(), kind: 'a sentence', title: '“It ended kindly.”', why: 'Your words. She’d hang them as a wall label.', c1: '#F2772F', c2: '#FFE0B8' },
  ],
  log: [
    { who: 'sys', text: 'first pass · 3:00 · 41 things heard, 19 kept' },
    { who: 'wren', text: 'I only had three minutes, so I guessed in places. The dashed ones are guesses — correct me and I’ll rehang them.' },
    { who: 'you', text: 'the winter one isn’t what you think it is' },
    { who: 'wren', text: 'Noted. I’ve left it marked unsure in Music. Tell me when you’re ready and I’ll ask about 2014.' },
  ],
  asked: 0,
});

/* ── Wren's questions ───────────────────────── */
const QUESTIONS = [
  { q: 'What did your room smell like at fourteen?', room: 'rituals' },
  { q: 'Name a song you couldn’t play for a year. Don’t explain yet.', room: 'music' },
  { q: 'Who taught you to cook, and what did they get wrong?', room: 'people' },
  { q: 'What’s the last thing you made that nobody saw?', room: 'art' },
  { q: 'Which year would you not live again, and which one twice?', room: 'rituals' },
  { q: 'What do you do with your hands when you’re lying?', room: 'rituals' },
  { q: 'Who have you forgiven without telling them?', room: 'love' },
  { q: 'What would the 2014 version of you not believe about now?', room: 'people' },
  { q: 'Describe a job you were good at and didn’t want to be.', room: 'work' },
  { q: 'What object would you grab? Be honest, not noble.', room: 'art' },
  { q: 'What’s the four pages you keep rereading?', room: 'rituals' },
  { q: 'Who says your name correctly?', room: 'love' },
  { q: 'What did you stop doing that you’d like back?', room: 'music' },
  { q: 'What’s the Tuesday meeting? You can tell me or not.', room: 'work' },
  { q: 'Which door in your life is still open a crack?', room: 'love' },
];

const LEXICON = {
  music: ['song', 'album', 'band', 'piano', 'guitar', 'sing', 'listen', 'record', 'radio station', 'playlist', 'melody', 'concert', 'violin', 'choir', 'dance'],
  art: ['draw', 'paint', 'museum', 'photo', 'film', 'book', 'write', 'poem', 'make', 'gallery', 'camera', 'colour', 'color', 'sketch', 'read'],
  work: ['job', 'work', 'boss', 'office', 'money', 'career', 'shift', 'quit', 'meeting', 'hired', 'fired', 'company', 'school', 'study', 'degree'],
  love: ['love', 'loved', 'kiss', 'ex', 'married', 'marriage', 'divorce', 'heart', 'broke', 'date', 'partner', 'crush', 'letter', 'miss him', 'miss her'],
  people: ['mother', 'mum', 'mom', 'father', 'dad', 'sister', 'brother', 'friend', 'grandma', 'grandmother', 'grandfather', 'aunt', 'uncle', 'family', 'taught me'],
  rituals: ['every', 'always', 'morning', 'coffee', 'walk', 'habit', 'smell', 'sunday', 'routine', 'before bed', 'ritual', 'hands', 'night', 'tea'],
};

const WREN_REPLIES = [
  'Kept. I’ve put it where I think it goes — move it if I’m wrong.',
  'That’s a better answer than the one I had. Replacing mine.',
  'I’ve hung it. It changes the room a little.',
  'Noted, and I’ll stop guessing about that one.',
  'Filed. I have a follow-up, but I’ll wait.',
  'That’s the first thing you’ve said in that tone. I kept the tone too.',
];

/* ── state ──────────────────────────────────── */
let S = load();
let undoStack = [];
let openRoom = null;
let live = null;
let qIndex = 0;

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* fresh start */ }
  return SEED();
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
function snapshot(label) {
  undoStack.push({ label, json: JSON.stringify(S) });
  if (undoStack.length > 30) undoStack.shift();
}
function commit(label) { save(); toast(label); }

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const room = (id) => S.rooms.find(r => r.id === id);

/* ── dot numerals ───────────────────────────── */
const DIGITS = {
  0: ['01110', '10001', '10011', '10101', '11001', '10001', '01110'],
  1: ['00100', '01100', '00100', '00100', '00100', '00100', '01110'],
  2: ['01110', '10001', '00001', '00010', '00100', '01000', '11111'],
  3: ['11111', '00010', '00100', '00010', '00001', '10001', '01110'],
  4: ['00010', '00110', '01010', '10010', '11111', '00010', '00010'],
  5: ['11111', '10000', '11110', '00001', '00001', '10001', '01110'],
  6: ['00110', '01000', '10000', '11110', '10001', '10001', '01110'],
  7: ['11111', '00001', '00010', '00100', '01000', '01000', '01000'],
  8: ['01110', '10001', '10001', '01110', '10001', '10001', '01110'],
  9: ['01110', '10001', '10001', '01111', '00001', '00010', '01100'],
};
function paintDots(el, value, size = 7) {
  el.innerHTML = '';
  el.style.setProperty('--ds', size + 'px');
  let d = 0;
  String(value).split('').forEach(ch => {
    const rows = DIGITS[ch];
    if (!rows) return;
    const dig = document.createElement('div');
    dig.className = 'dig';
    rows.forEach(r => r.split('').forEach(bit => {
      const px = document.createElement('span');
      px.className = 'px' + (bit === '1' ? ' on' : '');
      px.style.setProperty('--d', d++);
      dig.appendChild(px);
    }));
    el.appendChild(dig);
  });
}

/* ── toast + undo ───────────────────────────── */
let toastTimer;
function toast(text, undoable = true) {
  const t = $('#toast');
  $('#toastText').textContent = text;
  $('#toastUndo').hidden = !undoable || !undoStack.length;
  t.hidden = false;
  t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 4200);
}
$('#toastUndo').addEventListener('click', () => {
  const last = undoStack.pop();
  if (!last) return;
  S = JSON.parse(last.json);
  save(); renderAll();
  toast('put back.', false);
});

/* ── counts ─────────────────────────────────── */
const allEntries = () => S.rooms.flatMap(r => r.entries);
const knownCount = () => allEntries().length;
const guessCount = () => allEntries().filter(e => e.src === 'wren' && !e.ok).length;

/* ─────────────────────────────────────────────
   RENDER
   ───────────────────────────────────────────── */
function renderAll() {
  renderHeader();
  renderEra();
  renderPass();
  renderThreads();
  renderRooms();
  renderTimeline();
  renderHolding();
  renderMirror();
  renderPicks();
  renderLog();
  bindEditables();
}

function renderHeader() {
  const n = (S.person.name || '—').trim();
  $('#initials').textContent = n ? n.slice(0, 1).toUpperCase() : '—';
  $('#whoami').title = `This show is about ${n || 'someone'}`;
}

function renderEra() {
  $('[data-edit="person.era"]').textContent = S.person.era;
  $('[data-edit="person.eraSub"]').textContent = S.person.eraSub;
  paintDots($('#eraYears'), S.person.eraYears, 9);
  const wrap = $('#eraChips');
  wrap.innerHTML = '';
  S.person.eras.forEach((name, i) => {
    const b = document.createElement('button');
    b.className = 'chip' + (name === S.person.era ? ' is-now' : '');
    b.textContent = name;
    b.title = 'make this the era you’re in';
    b.addEventListener('click', () => {
      snapshot(); S.person.era = name; commit(`you’re in “${name}” now.`); renderEra();
    });
    wrap.appendChild(b);
  });
}

function renderPass() {
  const known = knownCount(), total = Math.max(40, known + guessCount() + 6);
  $('#answered').textContent = known;
  $('#totalQ').textContent = total;
  $('#passLabel').textContent = `pass ${S.pass}`;
  const pct = Math.min(1, known / total);
  $('#ringFill').style.strokeDashoffset = String(327 - 327 * pct);
}

function renderThreads() {
  const list = $('#threadList');
  list.innerHTML = '';
  $('#threadCount').textContent = `${S.threads.length} open`;
  if (!S.threads.length) {
    list.innerHTML = `<li class="thread"><span class="thread__q" style="color:var(--muted);font-style:italic">She has nothing she’s holding back. For now.</span></li>`;
    return;
  }
  S.threads.forEach(t => {
    const li = document.createElement('li');
    li.className = 'thread';
    li.innerHTML = `
      <span class="thread__q">${esc(t.q)}</span>
      <span class="thread__room">${esc(room(t.room)?.name || 'unfiled')}</span>
      <button class="thread__act" data-pull="${t.id}">pull it</button>`;
    list.appendChild(li);
  });
  $$('[data-pull]').forEach(b => b.addEventListener('click', () => {
    const t = S.threads.find(x => x.id === b.dataset.pull);
    if (!t) return;
    askNow(`About this: ${t.q.replace(/\.$/, '')} — what actually happened?`, t.room);
    openDock(true);
    say('wren', `Alright. ${t.q}`);
    snapshot();
    S.threads = S.threads.filter(x => x.id !== t.id);
    commit('thread pulled. she’s asking about it.');
    renderThreads();
  }));
}

function roomChips(r) {
  if (!r.entries.length) return `<span class="chip chip--empty">nothing here yet</span>`;
  return r.entries.slice(0, 3).map(e => {
    const guess = e.src === 'wren' && !e.ok;
    return `<span class="chip ${guess ? 'chip--guess' : ''}" title="${esc(e.note || e.title)}">${esc(e.title.length > 34 ? e.title.slice(0, 33) + '…' : e.title)}</span>`;
  }).join('') + (r.entries.length > 3 ? `<span class="chip">+${r.entries.length - 3}</span>` : '');
}

function renderRooms() {
  const grid = $('#roomGrid');
  grid.innerHTML = '';
  S.rooms.forEach((r, i) => {
    const guesses = r.entries.filter(e => e.src === 'wren' && !e.ok).length;
    const full = Math.min(100, Math.round((r.entries.length / 6) * 100));
    const el = document.createElement('article');
    el.className = 'card room';
    el.style.setProperty('--c1', r.c1);
    el.style.setProperty('--c2', r.c2);
    el.style.setProperty('--i', i + 5);
    el.dataset.room = r.id;
    el.innerHTML = `
      ${r._fresh ? '<span class="room__new">new</span>' : ''}
      <div class="room__orb" style="animation-delay:${i * 0.4}s"></div>
      <h3 class="room__name">${esc(r.name)}</h3>
      <p class="room__blurb">${esc(r.blurb)}</p>
      <div class="room__chips">${roomChips(r)}</div>
      <div class="room__foot">
        <span class="meter"><i style="width:${full}%"></i></span>
        <span class="room__count">${r.entries.length} · ${guesses} unsure</span>
      </div>`;
    if (r._fresh) { el.classList.add('is-new'); setTimeout(() => { delete r._fresh; }, 1500); }
    el.addEventListener('click', () => openDrawer(r.id));
    grid.appendChild(el);
  });
  const add = document.createElement('article');
  add.className = 'card room room--add';
  add.style.setProperty('--i', S.rooms.length + 5);
  add.innerHTML = `<strong style="font-family:var(--disp);font-size:22px">+</strong><span>hang a new room<br><small style="color:var(--faint)">something she never thought to ask</small></span>`;
  add.addEventListener('click', newRoom);
  grid.appendChild(add);
}

function renderTimeline() {
  const rail = $('#rail');
  rail.innerHTML = '';
  [...S.timeline].sort((a, b) => String(a.year).localeCompare(String(b.year))).forEach(ev => {
    const n = document.createElement('div');
    n.className = 'node';
    n.innerHTML = `
      <span class="node__dot"></span>
      <div class="node__card">
        <div class="node__year" contenteditable="plaintext-only" data-ev="${ev.id}" data-f="year">${esc(ev.year)}</div>
        <div class="node__label" contenteditable="plaintext-only" data-ev="${ev.id}" data-f="label">${esc(ev.label)}</div>
        <button class="node__kill" data-killev="${ev.id}">remove</button>
      </div>`;
    rail.appendChild(n);
  });
  $$('[data-ev]').forEach(el => el.addEventListener('blur', () => {
    const ev = S.timeline.find(x => x.id === el.dataset.ev);
    if (!ev) return;
    const v = el.textContent.trim();
    if (ev[el.dataset.f] === v) return;
    snapshot(); ev[el.dataset.f] = v; commit('year rewritten.');
  }));
  $$('[data-killev]').forEach(b => b.addEventListener('click', () => {
    snapshot();
    S.timeline = S.timeline.filter(x => x.id !== b.dataset.killev);
    commit('taken off the line.'); renderTimeline();
  }));
}

function renderHolding() {
  const list = $('#holdList');
  list.innerHTML = '';
  $('#holdCount').textContent = S.holding.length;
  $('#holdEmpty').hidden = S.holding.length > 0;
  S.holding.forEach(h => {
    const li = document.createElement('li');
    li.className = 'hold';
    li.innerHTML = `
      <p class="hold__text">${esc(h.text)}</p>
      <div class="hold__row">
        <small>hang in</small>
        ${S.rooms.map(r => `<button class="pill" data-file="${h.id}" data-room="${r.id}">${esc(r.name)}</button>`).join('')}
        <button class="pill pill--kill" data-drop="${h.id}">not mine</button>
      </div>`;
    list.appendChild(li);
  });
  $$('[data-file]').forEach(b => b.addEventListener('click', () => {
    const h = S.holding.find(x => x.id === b.dataset.file);
    const r = room(b.dataset.room);
    if (!h || !r) return;
    snapshot();
    r.entries.unshift({ id: uid(), title: h.text.replace(/^[“"]|[”"]$/g, '').slice(0, 70), note: 'Filed by you, from the three minutes.', year: '', src: 'you', ok: true });
    r._fresh = true;
    S.holding = S.holding.filter(x => x.id !== h.id);
    commit(`hung in ${r.name}.`);
    say('sys', `you filed a loose fragment into ${r.name}`);
    renderHolding(); renderRooms(); renderPass(); renderMirror();
  }));
  $$('[data-drop]').forEach(b => b.addEventListener('click', () => {
    snapshot();
    S.holding = S.holding.filter(x => x.id !== b.dataset.drop);
    commit('she’ll drop it.'); renderHolding();
  }));
}

function renderMirror() {
  const known = knownCount(), unsure = guessCount();
  const top = [...S.rooms].sort((a, b) => b.entries.length - a.entries.length)[0];
  const thin = [...S.rooms].sort((a, b) => a.entries.length - b.entries.length)[0];
  const lines = [
    `Mostly ${top?.name.toLowerCase()}, thin on ${thin?.name.toLowerCase()} — ${known} things known, ${unsure} still only suspected.`,
    `A person who keeps ${top?.name.toLowerCase()} close and leaves ${thin?.name.toLowerCase()} in the dark. ${unsure} guesses still hanging.`,
    `${known} pieces hung. ${unsure} of them she’d take down if you asked. Heaviest wall: ${top?.name.toLowerCase()}.`,
    `You gave her ${S.minutesGiven} minutes and she built ${known} rooms’ worth. ${thin?.name} is nearly empty, which is also information.`,
  ];
  S._mirror = S._mirror ?? 0;
  $('#mirrorLine').textContent = lines[S._mirror % lines.length];
}

function renderPicks() {
  const wrap = $('#picks');
  wrap.innerHTML = '';
  if (!S.picks.length) {
    wrap.innerHTML = `<p class="sub" style="padding:8px 2px">She’s out of suggestions. Give her three more minutes and she’ll find more.</p>`;
    return;
  }
  S.picks.forEach((p, i) => {
    const el = document.createElement('article');
    el.className = 'card pick';
    el.style.setProperty('--c1', p.c1); el.style.setProperty('--c2', p.c2); el.style.setProperty('--i', i + 2);
    el.innerHTML = `
      <span class="pick__tag">${esc(p.kind)}</span>
      <span class="pick__orb" style="animation-delay:${i * .5}s"></span>
      <h4 class="pick__title">${esc(p.title)}</h4>
      <p class="pick__why">${esc(p.why)}</p>
      <div class="pick__acts">
        <button class="mini mini--yes" data-pin="${p.id}">hang it</button>
        <button class="mini mini--no" data-nope="${p.id}">not me</button>
      </div>`;
    wrap.appendChild(el);
  });
  $$('[data-pin]').forEach(b => b.addEventListener('click', () => {
    const p = S.picks.find(x => x.id === b.dataset.pin);
    const target = room(guessRoom(p.kind + ' ' + p.title)) || S.rooms[0];
    snapshot();
    target.entries.unshift({ id: uid(), title: p.title, note: p.why, year: '', src: 'you', ok: true });
    target._fresh = true;
    S.picks = S.picks.filter(x => x.id !== p.id);
    commit(`hung in ${target.name}.`);
    say('wren', `Good. I’ll stop second-guessing that one.`);
    renderPicks(); renderRooms(); renderPass(); renderMirror();
  }));
  $$('[data-nope]').forEach(b => b.addEventListener('click', () => {
    snapshot();
    S.picks = S.picks.filter(x => x.id !== b.dataset.nope);
    commit('she’ll think again.');
    say('wren', `Wrong read on my part. Noted.`);
    renderPicks();
  }));
}

/* ── inline editables on the main canvas ────── */
function bindEditables() {
  $$('[data-edit]').forEach(el => {
    if (el._bound) return;
    el._bound = true;
    el.addEventListener('focus', () => { el._before = el.textContent; });
    el.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); el.blur(); } });
    el.addEventListener('blur', () => {
      const v = el.textContent.trim();
      if (v === el._before?.trim()) return;
      snapshot();
      const [a, b] = el.dataset.edit.split('.');
      S[a][b] = v;
      commit('in your words now.');
      renderHeader(); renderMirror();
    });
  });
}

/* ─────────────────────────────────────────────
   DRAWER — the room editor
   ───────────────────────────────────────────── */
function openDrawer(id) {
  const r = room(id);
  if (!r) return;
  openRoom = id;
  $('#drawer').hidden = false; $('#scrim').hidden = false;
  document.body.style.overflow = 'hidden';
  const orb = $('#drawerOrb');
  orb.style.setProperty('--c1', r.c1); orb.style.setProperty('--c2', r.c2);
  $('#drawerTitle').textContent = r.name;
  $('#drawerBlurb').textContent = r.blurb;
  $('#drawerBlurb').dataset.ph = 'what is this room for?';
  $('#drawerPublic').checked = !!r.public;
  renderEntries();
}
function closeDrawer() {
  $('#drawer').hidden = true; $('#scrim').hidden = true;
  document.body.style.overflow = '';
  openRoom = null;
  renderRooms(); renderPass(); renderMirror();
}
function renderEntries() {
  const r = room(openRoom); if (!r) return;
  const unsure = r.entries.filter(e => e.src === 'wren' && !e.ok).length;
  $('#drawerFull').textContent = `${r.entries.length} hung · ${unsure} unsure`;
  const wrap = $('#entries');
  wrap.innerHTML = '';
  r.entries.forEach((e, i) => {
    const guess = e.src === 'wren' && !e.ok;
    const el = document.createElement('div');
    el.className = 'entry';
    el.dataset.src = e.src; el.dataset.ok = String(!!e.ok);
    el.style.animationDelay = (i * 40) + 'ms';
    el.innerHTML = `
      <div class="entry__top">
        <span class="entry__year" contenteditable="plaintext-only" data-en="${e.id}" data-f="year" data-ph="year">${esc(e.year)}</span>
        <span class="entry__title" contenteditable="plaintext-only" data-en="${e.id}" data-f="title" data-ph="name it">${esc(e.title)}</span>
        <span class="entry__badge ${guess ? 'is-guess' : ''}">${guess ? 'wren guessed' : e.src === 'wren' ? 'wren, confirmed' : 'your words'}</span>
      </div>
      <div class="entry__note" contenteditable="plaintext-only" data-en="${e.id}" data-f="note" data-ph="add what she missed…">${esc(e.note)}</div>
      <div class="entry__acts">
        ${guess ? `<button class="mini mini--yes" data-ok="${e.id}">she’s right</button>` : ''}
        ${guess ? `<button class="mini mini--no" data-wrong="${e.id}">she’s wrong</button>` : ''}
        <button class="mini" data-move="${e.id}">move room</button>
        <button class="mini" data-up="${e.id}">↑</button>
        <button class="mini" data-down="${e.id}">↓</button>
        <button class="mini mini--no" data-del="${e.id}">take down</button>
      </div>`;
    wrap.appendChild(el);
  });
  if (!r.entries.length) {
    wrap.innerHTML = `<p class="sub" style="font-style:italic">Empty wall. She never got here in three minutes.</p>`;
  }

  $$('[data-en]', wrap).forEach(el => {
    el.addEventListener('focus', () => { el._before = el.textContent; });
    el.addEventListener('keydown', ev => { if (ev.key === 'Enter' && el.dataset.f !== 'note') { ev.preventDefault(); el.blur(); } });
    el.addEventListener('blur', () => {
      const e = r.entries.find(x => x.id === el.dataset.en); if (!e) return;
      const v = el.textContent.trim();
      if (v === (el._before || '').trim()) return;
      snapshot();
      e[el.dataset.f] = v;
      if (e.src === 'wren') { e.ok = true; e.src = 'you'; }
      commit('rewritten in your hand.');
      el.closest('.entry').dataset.src = e.src;
      el.closest('.entry').dataset.ok = String(!!e.ok);
      const badge = $('.entry__badge', el.closest('.entry'));
      badge.className = 'entry__badge'; badge.textContent = 'your words';
      $('#drawerFull').textContent = `${r.entries.length} hung · ${r.entries.filter(x => x.src === 'wren' && !x.ok).length} unsure`;
    });
  });

  const re = () => { renderEntries(); renderRooms(); renderPass(); renderMirror(); };
  $$('[data-ok]', wrap).forEach(b => b.addEventListener('click', () => {
    snapshot(); const e = r.entries.find(x => x.id === b.dataset.ok);
    e.ok = true; commit('confirmed. it stays.'); say('sys', `you confirmed “${e.title.slice(0, 30)}…”`); re();
  }));
  $$('[data-wrong]', wrap).forEach(b => b.addEventListener('click', () => {
    snapshot(); const e = r.entries.find(x => x.id === b.dataset.wrong);
    e.note = ''; e.title = ''; e.src = 'you'; e.ok = true;
    commit('cleared. say it your way.');
    say('wren', `Sorry — scrapped. Tell me the real version when you want.`);
    re();
    setTimeout(() => { const f = $(`[data-en="${e.id}"][data-f="title"]`); f && f.focus(); }, 60);
  }));
  $$('[data-del]', wrap).forEach(b => b.addEventListener('click', () => {
    snapshot(); r.entries = r.entries.filter(x => x.id !== b.dataset.del);
    commit('taken down.'); re();
  }));
  $$('[data-up]', wrap).forEach(b => b.addEventListener('click', () => {
    const i = r.entries.findIndex(x => x.id === b.dataset.up);
    if (i <= 0) return; snapshot();
    [r.entries[i - 1], r.entries[i]] = [r.entries[i], r.entries[i - 1]];
    commit('rehung.'); re();
  }));
  $$('[data-down]', wrap).forEach(b => b.addEventListener('click', () => {
    const i = r.entries.findIndex(x => x.id === b.dataset.down);
    if (i < 0 || i >= r.entries.length - 1) return; snapshot();
    [r.entries[i + 1], r.entries[i]] = [r.entries[i], r.entries[i + 1]];
    commit('rehung.'); re();
  }));
  $$('[data-move]', wrap).forEach(b => b.addEventListener('click', () => {
    const e = r.entries.find(x => x.id === b.dataset.move); if (!e) return;
    const others = S.rooms.filter(x => x.id !== r.id);
    const names = others.map((x, i) => `${i + 1}. ${x.name}`).join('\n');
    const pick = prompt(`Move “${e.title}” to which room?\n\n${names}`, '1');
    const target = others[parseInt(pick, 10) - 1];
    if (!target) return;
    snapshot();
    r.entries = r.entries.filter(x => x.id !== e.id);
    target.entries.unshift(e); target._fresh = true;
    commit(`moved to ${target.name}.`); re();
  }));
}

$('#closeDrawer').addEventListener('click', closeDrawer);
$('#scrim').addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && openRoom) closeDrawer(); });

$('#drawerTitle').addEventListener('blur', () => {
  const r = room(openRoom); if (!r) return;
  const v = $('#drawerTitle').textContent.trim() || r.name;
  if (v === r.name) return;
  snapshot(); r.name = v; commit('room renamed.'); renderRooms();
});
$('#drawerBlurb').addEventListener('blur', () => {
  const r = room(openRoom); if (!r) return;
  const v = $('#drawerBlurb').textContent.trim();
  if (v === r.blurb) return;
  snapshot(); r.blurb = v; commit('wall label rewritten.'); renderRooms();
});
$('#drawerPublic').addEventListener('change', e => {
  const r = room(openRoom); if (!r) return;
  snapshot(); r.public = e.target.checked;
  commit(r.public ? 'hung in the gallery.' : 'taken off the public wall.');
});
$('#addEntry').addEventListener('click', () => {
  const r = room(openRoom); if (!r) return;
  snapshot();
  const e = { id: uid(), title: '', note: '', year: '', src: 'you', ok: true };
  r.entries.unshift(e);
  save(); renderEntries(); renderRooms();
  setTimeout(() => { const f = $(`[data-en="${e.id}"][data-f="title"]`); f && f.focus(); }, 60);
});
$('#askMore').addEventListener('click', () => {
  const r = room(openRoom); if (!r) return;
  const q = QUESTIONS.filter(x => x.room === r.id)[Math.floor(Math.random() * Math.max(1, QUESTIONS.filter(x => x.room === r.id).length))]
    || { q: `What’s missing from ${r.name}?`, room: r.id };
  askNow(q.q, r.id);
  openDock(true);
  say('wren', q.q);
  toast('she’s asking about this room.', false);
});

/* ─────────────────────────────────────────────
   WREN — asking, listening, filing
   ───────────────────────────────────────────── */
let pending = { q: QUESTIONS[0].q, room: QUESTIONS[0].room };

function askNow(q, roomId) {
  pending = { q, room: roomId };
  const el = $('#askQ');
  el.style.animation = 'none'; void el.offsetWidth;
  el.textContent = q;
  el.style.animation = 'rise .6s var(--ease) both';
}
function nextQuestion() {
  qIndex = (qIndex + 1) % QUESTIONS.length;
  askNow(QUESTIONS[qIndex].q, QUESTIONS[qIndex].room);
}
function guessRoom(text) {
  const t = text.toLowerCase();
  let best = null, score = 0;
  for (const [id, words] of Object.entries(LEXICON)) {
    const s = words.reduce((n, w) => n + (t.includes(w) ? 1 : 0), 0);
    if (s > score) { score = s; best = id; }
  }
  return score ? best : null;
}
function receive(text) {
  const clean = text.trim();
  if (!clean) return;
  say('you', clean);
  snapshot();
  S.asked++;
  const target = guessRoom(clean) || pending.room;
  const r = room(target);
  if (r) {
    r.entries.unshift({
      id: uid(),
      title: clean.length > 62 ? clean.slice(0, 60).trim() + '…' : clean,
      note: `In answer to: ${pending.q}`,
      year: (clean.match(/\b(19|20)\d{2}\b/) || [''])[0],
      src: 'you', ok: true,
    });
    r._fresh = true;
    setTimeout(() => say('wren', WREN_REPLIES[Math.floor(Math.random() * WREN_REPLIES.length)] + ` → ${r.name}`), 420);
  } else {
    S.holding.unshift({ id: uid(), text: `“${clean}”` });
    setTimeout(() => say('wren', 'I don’t know where that goes yet. It’s in the holding room — file it for me.'), 420);
  }
  save();
  renderRooms(); renderHolding(); renderPass(); renderMirror();
  if (!live) setTimeout(nextQuestion, 900);
}

$('#askForm').addEventListener('submit', e => {
  e.preventDefault();
  const v = $('#askInput').value; $('#askInput').value = '';
  receive(v);
  if (live) setTimeout(nextQuestion, 500);
});
$('#skipQ').addEventListener('click', () => {
  nextQuestion();
  say('sys', 'you asked for a different question');
});

/* ── the three minutes ──────────────────────── */
$('#startPass').addEventListener('click', () => {
  if (live) { endLive(true); return; }
  startLive();
});
function startLive() {
  let left = 180;
  $('#askCard').dataset.live = 'true';
  $('#clock').hidden = false;
  $('#clock').textContent = '3:00';
  $('#startPass').innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="7" y="7" width="10" height="10" rx="2"/></svg> stop the clock';
  openDock(true);
  say('sys', 'pass ' + (S.pass + 1) + ' · 3:00 on the clock');
  say('wren', 'Three minutes. Short answers are fine — I’d rather have ten crooked things than two polished ones.');
  nextQuestion();
  $('#askInput').focus();
  live = setInterval(() => {
    left--;
    $('#clock').textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
    if (left <= 0) endLive(false);
  }, 1000);
}
function endLive(stopped) {
  clearInterval(live); live = null;
  $('#askCard').dataset.live = 'false';
  $('#clock').hidden = true;
  $('#startPass').innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l2.5 1.6"/></svg> Give her 3 more minutes';
  snapshot();
  S.pass++; S.minutesGiven += 3;
  save(); renderPass();
  say('sys', stopped ? 'you stopped the clock' : 'time. pass ' + S.pass + ' closed');
  say('wren', stopped ? 'Fine. I got some of it.' : 'That’s three minutes. The show is different than it was. Look at what I moved.');
  toast(stopped ? 'clock stopped.' : 'pass closed — the gallery changed.', false);
}

/* ── dock ───────────────────────────────────── */
function say(who, text) {
  S.log.push({ who, text });
  if (S.log.length > 120) S.log.shift();
  save(); renderLog();
  if ($('#dock').dataset.open === 'false' && who === 'wren') {
    const b = $('#dockBadge');
    b.textContent = String((parseInt(b.textContent, 10) || 0) + 1);
    b.dataset.zero = 'false';
  }
}
function renderLog() {
  const log = $('#dockLog');
  log.innerHTML = S.log.map(m => `<div class="msg msg--${m.who}">${esc(m.text)}</div>`).join('');
  log.scrollTop = log.scrollHeight;
}
function openDock(open) {
  $('#dock').dataset.open = String(open);
  if (open) { $('#dockBadge').textContent = '0'; $('#dockBadge').dataset.zero = 'true'; renderLog(); }
}
$('#dockTab').addEventListener('click', () => openDock($('#dock').dataset.open === 'false'));
$('#dockForm').addEventListener('submit', e => {
  e.preventDefault();
  const v = $('#dockInput').value; $('#dockInput').value = '';
  receive(v);
});

/* ── rooms: add / rehang ────────────────────── */
const PALETTE = [
  ['#6E5BF2', '#CFC6FF'], ['#F2772F', '#FFD9A8'], ['#0E9A8B', '#AEEBD8'],
  ['#F2548C', '#FFC9DC'], ['#3A74F2', '#BBD6FF'], ['#8C9A3F', '#E7F0BC'],
  ['#B5479B', '#F3C7EA'], ['#C9971F', '#FBE7AE'],
];
function newRoom() {
  const name = prompt('What’s the room called?\n(“Food”, “Fears”, “Money”, “Religion”, “The body”…)');
  if (!name) return;
  snapshot();
  const [c1, c2] = PALETTE[S.rooms.length % PALETTE.length];
  S.rooms.push({ id: uid(), name: name.trim(), public: true, c1, c2, blurb: 'She never asked about this. You’re ahead of her.', entries: [], _fresh: true });
  commit(`${name} hung.`);
  say('wren', `A room I didn’t think to ask about. Noted — I’ll ask about ${name.toLowerCase()} next time.`);
  renderRooms();
}
$('#addRoom').addEventListener('click', newRoom);
$('#rehang').addEventListener('click', () => {
  snapshot();
  S.rooms.sort(() => Math.random() - 0.5);
  commit('the show is rehung.');
  renderRooms();
});
$('#rewriteMirror').addEventListener('click', () => {
  S._mirror = (S._mirror || 0) + 1; save(); renderMirror();
});

/* ── identity, export, reset ────────────────── */
$('#whoami').addEventListener('click', () => {
  const n = prompt('Whose life is this?', S.person.name || '');
  if (n === null) return;
  snapshot(); S.person.name = n.trim(); commit('the show has a name.'); renderHeader();
});
$('#exportBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `life-cv-${(S.person.name || 'someone').toLowerCase().replace(/\s+/g, '-')}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  toast('your whole life, 40kb.', false);
});
$('#resetAll').addEventListener('click', () => {
  if (!confirm('Clear everything and go back to Wren’s first pass?')) return;
  snapshot(); S = SEED(); save(); renderAll();
  toast('back to the first draft of you.');
});

/* ── nav ────────────────────────────────────── */
$$('.view').forEach(b => b.addEventListener('click', () => {
  $$('.view').forEach(x => x.classList.remove('is-on'));
  b.classList.add('is-on');
  $('#' + b.dataset.scroll)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}));
$('#addEvent').addEventListener('click', () => {
  snapshot();
  const ev = { id: uid(), year: String(new Date().getFullYear()), label: 'something happened' };
  S.timeline.push(ev);
  commit('a year marked.'); renderTimeline();
  setTimeout(() => { const f = $(`[data-ev="${ev.id}"][data-f="label"]`); if (f) { f.focus(); document.execCommand?.('selectAll'); } }, 80);
});
$('[data-open-era]')?.addEventListener('click', e => {
  e.stopPropagation();
  $('[data-edit="person.era"]').focus();
});

/* ── go ─────────────────────────────────────── */
$('#stamp').textContent = new Date().toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
askNow(QUESTIONS[0].q, QUESTIONS[0].room);
renderAll();
$('#dockBadge').dataset.zero = 'true';
setTimeout(() => {
  if ($('#dock').dataset.open === 'false') {
    $('#dockBadge').textContent = '1';
    $('#dockBadge').dataset.zero = 'false';
  }
}, 2600);
