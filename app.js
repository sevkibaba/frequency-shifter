const neyTypes = [
    { id: "mansur", name: "Mansur Ney (La/A)", baseMidi: 69, avgLength: 780, desc: "Dügâh (Karar Sesi): La (A4) | Rast Sesi: Sol (G4). Standart ahenk, yerinden icra." },
    { id: "kiz", name: "Kız Ney (Si/B)", baseMidi: 71, avgLength: 702, desc: "Dügâh (Karar Sesi): Si (B4) | Rast Sesi: La (A4). Eğitime en uygun kabul edilen neydir." },
    { id: "yildiz", name: "Yıldız Ney (Do/C)", baseMidi: 72, avgLength: 650, desc: "Dügâh (Karar Sesi): Do (C5) | Rast Sesi: Sib (Bb4)." },
    { id: "supurde", name: "Süpürde Ney (Re/D)", baseMidi: 74, avgLength: 598, desc: "Dügâh (Karar Sesi): Re (D5) | Rast Sesi: Do (C5)." },
    { id: "bolahenk", name: "Bolâhenk Ney (Mi/E)", baseMidi: 64, avgLength: 1040, desc: "Dügâh (Karar Sesi): Mi (E4) | Rast Sesi: Re (D4). Pes (bas) karakterli neydir." },
    { id: "davud", name: "Davud Ney (Fa#/F#)", baseMidi: 66, avgLength: 910, desc: "Dügâh (Karar Sesi): Fa# (F#4) | Rast Sesi: Mi (E4)." },
    { id: "sah", name: "Şah Ney (Sol/G)", baseMidi: 67, avgLength: 884, desc: "Dügâh (Karar Sesi): Sol (G4) | Rast Sesi: Fa (F4)." },
];

// Her nota icin fingers dizisi:
// [arka(aşiran), on1(ust el), on2, on3, on4(alt el), on5, on6]
// 1 = kapalı (tam), 0.5 = yarım kapalı (orta parmak ya da yarim delik), 0 = açık
// 'M' = orta parmak ile kapatma tekniği

const notes = [
    // 2. Devre - Temel Doğal Sesler (Progresif delik açma sistemi: alttan yukarı sırayla)
    { section: "2. Devre — Temel Doğal Sesler", turkishName: "Gerdaniye", turkishNotation: "Sol", komaOffset: 44, accidental: "Doğal", fingers: [1, 1, 1, 1, 0, 0, 0], fingerNote: "Çargâh pozisyonuyla, 3. devre üfleme" },
    { turkishName: "Acem", turkishNotation: "Fa", komaOffset: 35, accidental: "Doğal", fingers: [1, 1, 1, 1, 1, 0, 0], fingerNote: "Bûselik pozisyonuyla, 3. devre üfleme" },
    { turkishName: "Hüseyni", turkishNotation: "Mi", komaOffset: 31, accidental: "Doğal", fingers: [1, 1, 1, 1, 1, 1, 0], fingerNote: "Dügâh pozisyonuyla, 3. devre üfleme" },
    { turkishName: "Neva", turkishNotation: "Re", komaOffset: 22, accidental: "Doğal", fingers: [1, 0, 0, 0, 0, 0, 0], fingerNote: "Sadece arka delik kapalı, tüm ön delikler açık" },
    { turkishName: "Çargâh", turkishNotation: "Do", komaOffset: 13, accidental: "Doğal", fingers: [1, 1, 1, 1, 0, 0, 0], fingerNote: "Arka + üst el kapalı, alt el açık" },
    { turkishName: "Bûselik", turkishNotation: "Si", komaOffset: 9, accidental: "Doğal", fingers: [1, 1, 1, 1, 1, 0, 0], fingerNote: "Alt el son 2 delik açık" },
    { turkishName: "Dügâh", turkishNotation: "La", komaOffset: 0, accidental: "Doğal (Karar Sesi)", fingers: [1, 1, 1, 1, 1, 1, 0], fingerNote: "Alt el son delik açık" },
    { turkishName: "Rast", turkishNotation: "Sol", komaOffset: -9, accidental: "Doğal", fingers: [1, 1, 1, 1, 1, 1, 1], fingerNote: "Tüm delikler kapalı" },

    // 3. Devre - Tiz Sesler (Aynı pozisyonlar, daha kuvvetli üfleme — 5li harmonik)
    { section: "3. Devre — Tiz Sesler", turkishName: "Tiz Neva", turkishNotation: "Re", komaOffset: 75, accidental: "Doğal", fingers: [1, 0, 0, 0, 0, 0, 0], fingerNote: "Neva pozisyonuyla, en kuvvetli üfleme" },
    { turkishName: "Tiz Çargâh", turkishNotation: "Do", komaOffset: 66, accidental: "Doğal", fingers: [1, 1, 1, 1, 0, 0, 0], fingerNote: "Çargâh pozisyonuyla, daha kuvvetli üfleme" },
    { turkishName: "Tiz Segâh", turkishNotation: "Si", komaOffset: 61, accidental: "Koma Bemolü (1 koma pes)", fingers: [1, 1, 1, 1, 1, 0.5, 0], fingerNote: "Segâh pozisyonuyla, daha kuvvetli üfleme" },
    { turkishName: "Muhayyer", turkishNotation: "La", komaOffset: 53, accidental: "Doğal", fingers: [1, 0, 0, 0, 0, 0, 0], fingerNote: "Neva pozisyonuyla, 3. devre üfleme" },

    // Ara ve Arıza Sesler (Diyez, Bemol ve Yarım Delikliler)
    { section: "Ara ve Arıza Sesler (Diyez, Bemol ve Yarım Delikliler)", turkishName: "Eviç", turkishNotation: "Fa#", komaOffset: 39, accidental: "Bakiye Diyezi (4 koma tiz)", fingers: [0.5, 0, 0, 0, 0, 0, 0], fingerNote: "Arka delik yarım (başparmak)" },
    { turkishName: "Nim Hisar", turkishNotation: "Mi♭", komaOffset: 26, accidental: "5 Koma Bemol (Zor Perde)", fingers: [1, 1, 1, 0.5, 1, 1, 1], fingerNote: "Üst el yüzük parmağı yarım" },
    { turkishName: "Hicaz (Nim Hicaz)", turkishNotation: "Do#", komaOffset: 17, accidental: "Bakiye Diyezi (4 koma tiz)", fingers: [1, 1, 1, 0.5, 0, 0, 0], fingerNote: "Üst el yüzük parmağı yarım" },
    { turkishName: "Segâh", turkishNotation: "Si", komaOffset: 8, accidental: "Koma Bemolü (1 koma pes)", fingers: [1, 1, 1, 1, 1, 0.5, 0], fingerNote: "Alt el orta parmak hafif aralıklı" },
    { turkishName: "Kürdi", turkishNotation: "Si", komaOffset: 5, accidental: "Bakiye Bemolü (4 koma pes)", fingers: [1, 1, 1, 1, 1, 0.5, 0], fingerNote: "Alt el orta parmak yarım" },
    { turkishName: "Geveşt", turkishNotation: "Fa#", komaOffset: -14, accidental: "5 Koma Bemol (Zor Perde)", fingers: [0, 0, 1, 0, 0, 1, 0], fingerNote: "Sadece iki elin orta parmakları kapalı" },

    // 1. Devre - Dem Sesleri (2. devre ile aynı pozisyonlar, pes/sıcak üfleme ile)
    { section: "1. Devre — Dem Sesleri (En Pes)", turkishName: "Irak", turkishNotation: "Fa#", komaOffset: -13, accidental: "Bakiye Diyezi", fingers: [0.5, 0, 0, 0, 0, 0, 0], fingerNote: "Dem, Eviç pozisyonu (arka delik yarım)" },
    { turkishName: "Acem Aşiran", turkishNotation: "Fa", komaOffset: -18, accidental: "Doğal", fingers: [1, 1, 1, 1, 1, 0, 0], fingerNote: "Dem, Bûselik pozisyonu" },
    { turkishName: "Hüseyni Aşiran", turkishNotation: "Mi", komaOffset: -22, accidental: "Doğal", fingers: [1, 1, 1, 1, 1, 1, 0], fingerNote: "Dem, Dügâh pozisyonu" },
    { turkishName: "Kaba Neva (Yegâh)", turkishNotation: "Re", komaOffset: -31, accidental: "Doğal", fingers: [1, 0, 0, 0, 0, 0, 0], fingerNote: "Dem, Neva pozisyonu" },
    { turkishName: "Kaba Çargâh", turkishNotation: "Do", komaOffset: -40, accidental: "Doğal (Natürel)", fingers: [1, 1, 1, 1, 0, 0, 0], fingerNote: "Dem, Çargâh pozisyonu" },
    { turkishName: "Kaba Rast (Yegâh)", turkishNotation: "Sol", komaOffset: -62, accidental: "Doğal", fingers: [1, 1, 1, 1, 1, 1, 1], fingerNote: "Dem, Rast pozisyonu (tüm delikler kapalı)" },
];

function getFrequencyFromMidi(midi) {
    return 440 * Math.pow(2, (midi - 69) / 12);
}

function getWesternNoteData(frequency) {
    const A4 = 440;
    const midi = 69 + 12 * Math.log2(frequency / A4);
    const nearestMidi = Math.round(midi);
    const cents = Math.round((midi - nearestMidi) * 100);
    
    const noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const noteName = noteNames[nearestMidi % 12];
    const octave = Math.floor(nearestMidi / 12) - 1;
    
    const westernFreq = 440 * Math.pow(2, (nearestMidi - 69) / 12);
    const diffHz = frequency - westernFreq;
    
    let centStr = "";
    if (cents > 0) centStr = `<span class="koma-badge">+${cents}¢</span>`;
    else if (cents < 0) centStr = `<span class="koma-badge">${cents}¢</span>`;
    
    return {
        nameStr: `${noteName}${octave} ${centStr}`,
        westernFreq: westernFreq,
        diffHz: diffHz
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const selectEl = document.getElementById("ney-select");
    const descEl = document.getElementById("ney-description");
    const tbody = document.getElementById("notes-body");
    const makerTbody = document.getElementById("maker-body");
    const lengthInput = document.getElementById("ney-length");
    const diameterInput = document.getElementById("ney-diameter");
    const makerSummary = document.getElementById("maker-summary");

    const holes26 = [
        { name: "1. Delik (Alt El)", ratio: 4 },
        { name: "2. Delik (Alt El)", ratio: 5 },
        { name: "3. Delik (Alt El)", ratio: 6 },
        { name: "4. Delik (Üst El)", ratio: 8 },
        { name: "5. Delik (Üst El)", ratio: 9 },
        { name: "6. Delik (Üst El)", ratio: 10 },
        { name: "Arka Delik (Aşiran)", ratio: 13 }
    ];

    // Populate Select
    neyTypes.forEach(ney => {
        const option = document.createElement("option");
        option.value = ney.id;
        option.textContent = ney.name;
        if (ney.id === "kiz") {
            option.selected = true;
        }
        selectEl.appendChild(option);
    });

    function getFingeringHtml(fingers) {
        if (!fingers) return "";
        const getClass = (val) => val === 1 ? "closed" : (val === 0.5 ? "half" : "open");
        return `
            <div class="ney-fingering">
                <div class="hole back ${getClass(fingers[0])}" title="Arka (Aşiran)"></div>
                <div class="hole-sep"></div>
                <div class="hole ${getClass(fingers[1])}"></div>
                <div class="hole ${getClass(fingers[2])}"></div>
                <div class="hole ${getClass(fingers[3])}"></div>
                <div class="hole-sep"></div>
                <div class="hole ${getClass(fingers[4])}"></div>
                <div class="hole ${getClass(fingers[5])}"></div>
                <div class="hole ${getClass(fingers[6])}"></div>
            </div>
        `;
    }

    function updateMakerTable(length, diameter) {
        makerTbody.innerHTML = "";
        const unit = length / 26;
        
        let diameterHtml = "";
        if (diameter > 0) {
            const endCorrection = 0.61 * (diameter / 2);
            diameterHtml = `<span style="width: 100%; text-align: center; font-size: 0.95rem; color: var(--text-muted); margin-top: 0.5rem;"><strong>Akustik Uç Düzeltmesi (Açık uç):</strong> +${endCorrection.toFixed(1)} mm (Teorik olarak ses sütununa eklenen uzunluk)</span>`;
        }

        makerSummary.innerHTML = `
            <span><strong>1 Birim Oranı:</strong> ${unit.toFixed(1)} mm</span>
            <span><strong>İlk Delik Mesafesi:</strong> ${(unit * 4).toFixed(1)} mm</span>
            <span><strong>Delikler Arası Mesafe:</strong> ${unit.toFixed(1)} mm</span>
            ${diameterHtml}
        `;
        
        holes26.forEach(hole => {
            const distance = unit * hole.ratio;
            let adjustedHtml = `<td style="color: var(--text-muted);">---</td>`;

            if (diameter > 0) {
                const endCorrection = 0.61 * (diameter / 2);
                const adjustedDistance = distance + (endCorrection * (hole.ratio / 26));
                adjustedHtml = `<td style="color: var(--accent-gold); font-size: 1.1rem; font-weight: 500;">${adjustedDistance.toFixed(1)} mm</td>`;
            }

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${hole.name}</strong></td>
                <td>${hole.ratio} / 26</td>
                <td style="color: var(--text-main); font-size: 1.1rem;">${distance.toFixed(1)} mm</td>
                ${adjustedHtml}
            `;
            makerTbody.appendChild(tr);
        });
    }

    function updateTable() {
        const selectedId = selectEl.value;
        const selectedNey = neyTypes.find(n => n.id === selectedId);
        
        descEl.textContent = selectedNey.desc;
        tbody.innerHTML = "";
        
        lengthInput.value = selectedNey.avgLength;
        updateMakerTable(selectedNey.avgLength, parseFloat(diameterInput.value) || 0);

        // Calculate base frequency of Dügâh for this Ney
        const baseFreq = getFrequencyFromMidi(selectedNey.baseMidi);

        let currentSection = null;
        notes.forEach(note => {
            // Insert section header row when section changes
            if (note.section && note.section !== currentSection) {
                currentSection = note.section;
                const sectionTr = document.createElement("tr");
                sectionTr.className = "section-header";
                // Determine section color class
                let sectionClass = "section-normal";
                if (currentSection.includes("Dem")) sectionClass = "section-dem";
                else if (currentSection.includes("Tiz")) sectionClass = "section-tiz";
                sectionTr.classList.add(sectionClass);
                sectionTr.innerHTML = `<td colspan="5" class="section-label">${currentSection}</td>`;
                tbody.appendChild(sectionTr);
            }

            // Determine row color class
            let rowClass = "row-normal";
            if (currentSection && currentSection.includes("Dem")) rowClass = "row-dem";
            else if (currentSection && currentSection.includes("Tiz")) rowClass = "row-tiz";

            // AEU system 1 octave = 53 komas
            const freq = baseFreq * Math.pow(2, note.komaOffset / 53);
            const wData = getWesternNoteData(freq);
            const fingeringStr = getFingeringHtml(note.fingers);
            
            const tr = document.createElement("tr");
            tr.className = rowClass;
            const sign = wData.diffHz >= 0 ? "+" : "-";
            const opStr = `<span style="color:var(--text-muted); font-size:0.85em; display:block; margin-top:2px;">(Batı: ${wData.westernFreq.toFixed(2)} ${sign} ${Math.abs(wData.diffHz).toFixed(2)})</span>`;
            const noteHint = note.fingerNote ? `<br><span style="font-size:0.8em; opacity:0.6;">↳ ${note.fingerNote}</span>` : "";
            
            tr.innerHTML = `
                <td><strong>${note.turkishName}</strong> <span style="color: var(--text-muted)">(${note.turkishNotation})</span>${noteHint}</td>
                <td>${fingeringStr}</td>
                <td>${wData.nameStr}</td>
                <td>${note.accidental}</td>
                <td>${freq.toFixed(2)} Hz ${opStr}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    selectEl.addEventListener("change", updateTable);
    
    function handleMakerInput() {
        const lengthVal = parseFloat(lengthInput.value);
        const diaVal = parseFloat(diameterInput.value);
        if(!isNaN(lengthVal) && lengthVal > 0) {
            updateMakerTable(lengthVal, diaVal || 0);
        }
    }

    lengthInput.addEventListener("input", handleMakerInput);
    diameterInput.addEventListener("input", handleMakerInput);
    
    // Initial Render
    updateTable();

    // Tab Logic
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const targetTab = document.getElementById(btn.getAttribute('data-tab'));
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
    // Acoustics Tab Logic
    const acousticsDiameter = document.getElementById('acoustics-diameter');
    const acousticsDepth = document.getElementById('acoustics-depth');
    const acousticEndCorrection = document.getElementById('acoustic-end-correction');
    const acousticShiftOct2 = document.getElementById('acoustic-shift-oct2');
    const acousticShiftOct3 = document.getElementById('acoustic-shift-oct3');

    function updateAcousticsTab() {
        if(!acousticsDiameter || !acousticsDepth) return;
        const dia = parseFloat(acousticsDiameter.value);
        const depth = parseFloat(acousticsDepth.value);
        if(isNaN(dia) || dia <= 0 || isNaN(depth)) return;

        const radius = dia / 2;
        const endCorr = 0.61 * radius;
        if(acousticEndCorrection) acousticEndCorrection.textContent = `+${endCorr.toFixed(2)} mm`;

        // Base ideal depth around 2.0 mm
        const idealDepth = 2.0; 
        const diff = depth - idealDepth; // Positive means deeper, negative means shallower
        
        // Deeper cavity -> flatter (-) upper notes.
        // Shallower cavity -> sharper (+) upper notes.
        const rateOct2 = 6; // 6 cents shift per 1mm diff for 2nd octave
        const rateOct3 = 15; // 15 cents shift per 1mm diff for 3rd octave
        
        const shiftOct2 = -diff * rateOct2;
        const shiftOct3 = -diff * rateOct3;

        function formatShift(shift, elem) {
            if(!elem) return;
            if (shift > 0.1) {
                elem.textContent = `+${shift.toFixed(1)} Cent (Tizleşir)`;
                elem.style.color = '#ff6b6b'; // Light red for sharp
            } else if (shift < -0.1) {
                elem.textContent = `${shift.toFixed(1)} Cent (Pesleşir)`;
                elem.style.color = '#4dabf7'; // Light blue for flat
            } else {
                elem.textContent = `0 Cent (Dengeli)`;
                elem.style.color = 'white';
            }
        }
        
        formatShift(shiftOct2, acousticShiftOct2);
        formatShift(shiftOct3, acousticShiftOct3);
    }

    if(acousticsDiameter) acousticsDiameter.addEventListener('input', updateAcousticsTab);
    if(acousticsDepth) acousticsDepth.addEventListener('input', updateAcousticsTab);
    updateAcousticsTab();
});

