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
    // 1. Devre - Dem Sesleri (Pes Üfleyiş)
    { section: "1. Devre — Dem Sesleri (Pes Üfleyiş)", turkishName: "Kaba Rast", turkishNotation: "Sol", komaOffset: -62, accidental: "Doğal", fingers: [1, 1, 1, 1, 1, 1, 1], fingerNote: "Tüm delikler kapalı, pes üfleyiş (Şekil 1)" },
    { turkishName: "Kaba Dügâh", turkishNotation: "La", komaOffset: -53, accidental: "Doğal", fingers: [1, 1, 1, 1, 1, 1, 0], fingerNote: "Alt el son delik açık, pes üfleyiş (Şekil 2)" },
    { turkishName: "Kaba Segâh", turkishNotation: "Si", komaOffset: -45, accidental: "Koma Bemolü", fingers: [1, 1, 1, 1, 1, 0, 0], fingerNote: "Alt el son iki delik açık, pes üfleyiş (Şekil 4)" },
    { turkishName: "Kaba Çargâh", turkishNotation: "Do", komaOffset: -40, accidental: "Doğal", fingers: [1, 1, 1, 1, 0, 0, 0], fingerNote: "Alt el açık, pes üfleyiş (Şekil 5)" },

    // 2. Devre - Asıl Sesler (Normal Üfleyiş)
    { section: "2. Devre — Asıl Sesler (Normal Üfleyiş)", turkishName: "Rast", turkishNotation: "Sol", komaOffset: -9, accidental: "Doğal", fingers: [1, 1, 1, 1, 1, 1, 1], fingerNote: "Tüm delikler kapalı (Şekil 1)" },
    { turkishName: "Dügâh", turkishNotation: "La", komaOffset: 0, accidental: "Doğal (Karar Sesi)", fingers: [1, 1, 1, 1, 1, 1, 0], fingerNote: "Alt el son delik açık (Şekil 2)" },
    { turkishName: "Kürdi", turkishNotation: "Si", komaOffset: 4, accidental: "5 Koma Bemol", fingers: [1, 1, 1, 1, 1, 0.5, 0], fingerNote: "5. delik yarım açık (Şekil 3)" },
    { turkishName: "Segâh", turkishNotation: "Si", komaOffset: 8, accidental: "1 Koma Bemol", fingers: [1, 1, 1, 1, 1, 0, 0], fingerNote: "Son iki delik açık (Şekil 4)" },
    { turkishName: "Bûselik", turkishNotation: "Si", komaOffset: 9, accidental: "Natürel (Çapraz)", fingers: [1, 1, 1, 1, 1, 0, 1], fingerNote: "Çapraz parmaklama: 5. delik açık, 6. kapalı (Şekil 12)" },
    { turkishName: "Çargâh", turkishNotation: "Do", komaOffset: 13, accidental: "Doğal", fingers: [1, 1, 1, 1, 0, 0, 0], fingerNote: "Alt el tamamen açık (Şekil 5)" },
    { turkishName: "Nim Hicaz", turkishNotation: "Do#", komaOffset: 17, accidental: "4 Koma Diyez", fingers: [1, 1, 1, 0.5, 0, 0, 0], fingerNote: "3. delik yarım açık (Şekil 6)" },
    { turkishName: "Neva", turkishNotation: "Re", komaOffset: 22, accidental: "Doğal", fingers: [1, 0, 0, 0, 0, 0, 0], fingerNote: "Sadece arka delik kapalı (Şekil 7)" },
    { turkishName: "Acem", turkishNotation: "Fa", komaOffset: 35, accidental: "Doğal", fingers: [0, 0, 0, 0, 0, 0, 0], fingerNote: "Tüm delikler açık (Şekil 8)" },

    // 3. Devre - Tiz Sesler (Kuvvetli Üfleyiş)
    { section: "3. Devre — Tiz Sesler (Kuvvetli Üfleyiş)", turkishName: "Hüseyni", turkishNotation: "Mi", komaOffset: 31, accidental: "Doğal", fingers: [1, 1, 1, 1, 1, 1, 0], fingerNote: "Dügâh pozisyonuyla, kuvvetli üfleme (Şekil 2)" },
    { turkishName: "Eviç", turkishNotation: "Fa#", komaOffset: 39, accidental: "4 Koma Diyez", fingers: [1, 1, 1, 1, 1, 0, 0], fingerNote: "Segâh pozisyonuyla, kuvvetli üfleme (Şekil 4)" },
    { turkishName: "Gerdaniye", turkishNotation: "Sol", komaOffset: 44, accidental: "Doğal", fingers: [1, 1, 1, 1, 0, 0, 0], fingerNote: "Çargâh pozisyonuyla, kuvvetli üfleme (Şekil 5)" },
    { turkishName: "Muhayyer", turkishNotation: "La", komaOffset: 53, accidental: "Doğal", fingers: [1, 0, 0, 0, 0, 0, 0], fingerNote: "Neva pozisyonuyla, kuvvetli üfleme (Şekil 7)" }
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
    
    // New Advanced Acoustic Inputs
    const lengthInput = document.getElementById("ney-length");
    const diameterTopInput = document.getElementById("ney-diameter-top");
    const diameterBottomInput = document.getElementById("ney-diameter-bottom");
    const node1LengthInput = document.getElementById("ney-node1-length");
    const node1HoleDiaInput = document.getElementById("ney-node1-hole-dia");
    const node1HoleThickInput = document.getElementById("ney-node1-hole-thick");
    const baspareTotalInput = document.getElementById("ney-baspare-total");
    const baspareExposedInput = document.getElementById("ney-baspare-exposed");
    const baspareDiameterInput = document.getElementById("ney-baspare-diameter");
    const thicknessInput = document.getElementById("ney-thickness");
    const holeDiameterInput = document.getElementById("ney-hole-diameter");
    
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

    function updateMakerTable(length, diaTop, diaBottom, node1Len, node1HoleDia, node1HoleThick, baspareTotal, baspareExposed, baspareDia, thickness, holeDia) {
        makerTbody.innerHTML = "";
        
        // 1. Boru Akustik Boyu (L_eff)
        const r_ust = diaTop / 2;
        const r_alt = diaBottom / 2;
        
        // Alt açık uç düzeltmesi
        const deltaL_alt = 0.61 * r_alt;
        
        // Üst açık uç (Çift Boğumlu Rezonatör)
        // 1. Kesişim hesabı (Başpârenin içeri giren kısmı)
        const baspareKes = Math.max(0, baspareTotal - baspareExposed);
        
        // 2. 1. Boğum Efektif Kavite Boyu
        const L_kavite = Math.max(0, node1Len - baspareKes);
        
        // 3. Perde Deliği Sanal Uzaması (Equivalent Length)
        // L_eq_perde = (t_perde + 1.2 * r_perde) * (D_ust / D_perde)^2
        const r_perde = node1HoleDia / 2;
        let L_eq_perde = 0;
        if (node1HoleDia > 0) {
            L_eq_perde = (node1HoleThick + 1.2 * r_perde) * Math.pow(diaTop / node1HoleDia, 2);
        }
        
        // 4. 1. Boğum Kavitesi Uzaması
        const L_eq_hazne = L_kavite;
        
        // 5. Başpâre Sanal Uzaması (Neck)
        let L_eq_baspare = 0;
        if (baspareDia > 0) {
            L_eq_baspare = baspareTotal * Math.pow(diaTop / baspareDia, 2);
        }
        
        // Açık uç radyasyon kütlesi (Başpâre ağzından)
        const r_agiz = baspareDia / 2;
        const deltaL_open = 0.61 * r_agiz;
        
        const deltaL_ust = L_eq_perde + L_eq_hazne + L_eq_baspare + deltaL_open;
        
        const Leff = length + deltaL_alt + deltaL_ust;
        
        makerSummary.innerHTML = `
            <span><strong>Fiziksel Boy:</strong> ${length.toFixed(1)} mm</span>
            <span><strong>Akustik Efektif Boy:</strong> ${Leff.toFixed(1)} mm</span>
            <span><strong>Üst Uç Eklentisi:</strong> +${deltaL_ust.toFixed(1)} mm</span>
            <span><strong>Alt Uç Eklentisi:</strong> +${deltaL_alt.toFixed(1)} mm</span>
        `;
        
        holes26.forEach(hole => {
            const ratio = hole.ratio / 26;
            
            // Teorik Nodal Nokta (Akustik boy üzerinden)
            const X_teorik = Leff * ratio;
            
            // Fiziksel borudaki ölçüm noktası (Cetvelin sıfırı üstte olduğu için üst düzeltmeyi çıkarıyoruz)
            const X_1 = X_teorik - deltaL_ust;
            
            // İlgili deliğin açılacağı noktadaki lokal konik çap (Interpolasyon)
            // x ekseni üstten alta doğru arttığı için:
            const D_x = diaTop + ratio * (diaBottom - diaTop);
            
            // Deliğin Sanal Uzantısı (Acoustic Hole End Correction)
            // L_hole = (r_main / r_hole)^2 * (t + 1.5 * r_hole)
            // Veya çaplar cinsinden: (D_x / D_delik)^2 * (t + 0.75 * D_delik)
            let deltaL_hole = 0;
            if (holeDia > 0 && D_x > 0) {
                deltaL_hole = Math.pow(D_x / holeDia, 2) * (thickness + 0.75 * holeDia);
            }
            
            // Son Fiziksel Konum (Deliğin sanal uzantısını çıkararak deliği başpâreye yaklaştırıyoruz)
            const X_fiziksel = X_1 - deltaL_hole;
            
            const klasikMesafe = length * ratio;

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${hole.name}</strong></td>
                <td>${hole.ratio} / 26</td>
                <td style="color: var(--text-muted); font-size: 1.1rem; text-decoration: line-through;">${klasikMesafe.toFixed(1)} mm</td>
                <td style="color: var(--accent-gold); font-size: 1.1rem; font-weight: 500;">
                    ${X_fiziksel.toFixed(1)} mm 
                    <span style="font-size: 0.8rem; opacity: 0.7; display: block;">(D_lokal: ${D_x.toFixed(1)}mm, ΔDelik: -${deltaL_hole.toFixed(1)}mm)</span>
                </td>
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
        
        const lVal = selectedNey.avgLength;
        const dTop = parseFloat(diameterTopInput.value) || 16.0;
        const dBot = parseFloat(diameterBottomInput.value) || 15.0;
        const n1Len = parseFloat(node1LengthInput.value) || 60.0;
        const n1HDia = parseFloat(node1HoleDiaInput.value) || 8.0;
        const n1HThk = parseFloat(node1HoleThickInput.value) || 3.0;
        const bTot = parseFloat(baspareTotalInput.value) || 25.0;
        const bExp = parseFloat(baspareExposedInput.value) || 15.0;
        const bDia = parseFloat(baspareDiameterInput.value) || 12.0;
        const thick = parseFloat(thicknessInput.value) || 3.0;
        const hDia = parseFloat(holeDiameterInput.value) || 9.0;
        
        updateMakerTable(lVal, dTop, dBot, n1Len, n1HDia, n1HThk, bTot, bExp, bDia, thick, hDia);

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
        const lVal = parseFloat(lengthInput.value);
        const dTop = parseFloat(diameterTopInput.value);
        const dBot = parseFloat(diameterBottomInput.value);
        const n1Len = parseFloat(node1LengthInput.value);
        const n1HDia = parseFloat(node1HoleDiaInput.value);
        const n1HThk = parseFloat(node1HoleThickInput.value);
        const bTot = parseFloat(baspareTotalInput.value);
        const bExp = parseFloat(baspareExposedInput.value);
        const bDia = parseFloat(baspareDiameterInput.value);
        const thick = parseFloat(thicknessInput.value);
        const hDia = parseFloat(holeDiameterInput.value);
        
        if(!isNaN(lVal) && lVal > 0) {
            updateMakerTable(lVal, dTop||0, dBot||0, n1Len||0, n1HDia||0, n1HThk||0, bTot||0, bExp||0, bDia||0, thick||0, hDia||0);
        }
    }

    lengthInput.addEventListener("input", handleMakerInput);
    diameterTopInput.addEventListener("input", handleMakerInput);
    diameterBottomInput.addEventListener("input", handleMakerInput);
    node1LengthInput.addEventListener("input", handleMakerInput);
    node1HoleDiaInput.addEventListener("input", handleMakerInput);
    node1HoleThickInput.addEventListener("input", handleMakerInput);
    baspareTotalInput.addEventListener("input", handleMakerInput);
    baspareExposedInput.addEventListener("input", handleMakerInput);
    baspareDiameterInput.addEventListener("input", handleMakerInput);
    thicknessInput.addEventListener("input", handleMakerInput);
    holeDiameterInput.addEventListener("input", handleMakerInput);
    
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

        // Calculate absolute Hz shift based on current Ney's Neva note
        const selectEl = document.getElementById("ney-select");
        const selectedNey = neyTypes.find(n => n.id === selectEl.value) || neyTypes[0];
        const baseFreq = getFrequencyFromMidi(selectedNey.baseMidi);
        const freqOct2 = baseFreq * Math.pow(2, 22 / 53); // Neva
        const freqOct3 = baseFreq * Math.pow(2, 75 / 53); // Tiz Neva

        const hzShiftOct2 = freqOct2 * (Math.pow(2, shiftOct2 / 1200) - 1);
        const hzShiftOct3 = freqOct3 * (Math.pow(2, shiftOct3 / 1200) - 1);

        function formatShift(shift, hzShift, elem) {
            if(!elem) return;
            const signStr = hzShift >= 0 ? "+" : "";
            if (shift > 0.1) {
                elem.innerHTML = `+${shift.toFixed(1)} Cent <br><span style="font-size: 1.2rem; opacity: 0.8">(${signStr}${hzShift.toFixed(1)} Hz)</span><br><span style="font-size: 1rem">(Tizleşir)</span>`;
                elem.style.color = '#ff6b6b'; // Light red for sharp
            } else if (shift < -0.1) {
                elem.innerHTML = `${shift.toFixed(1)} Cent <br><span style="font-size: 1.2rem; opacity: 0.8">(${signStr}${hzShift.toFixed(1)} Hz)</span><br><span style="font-size: 1rem">(Pesleşir)</span>`;
                elem.style.color = '#4dabf7'; // Light blue for flat
            } else {
                elem.innerHTML = `0 Cent <br><span style="font-size: 1.2rem; opacity: 0.8">(0 Hz)</span><br><span style="font-size: 1rem">(Dengeli)</span>`;
                elem.style.color = 'white';
            }
        }
        
        formatShift(shiftOct2, hzShiftOct2, acousticShiftOct2);
        formatShift(shiftOct3, hzShiftOct3, acousticShiftOct3);
    }

    if(acousticsDiameter) acousticsDiameter.addEventListener('input', updateAcousticsTab);
    if(acousticsDepth) acousticsDepth.addEventListener('input', updateAcousticsTab);
    
    // Also update acoustics when Ney type changes since it affects base frequency
    const mainSelectEl = document.getElementById("ney-select");
    if(mainSelectEl) mainSelectEl.addEventListener('change', updateAcousticsTab);

    updateAcousticsTab();
});

