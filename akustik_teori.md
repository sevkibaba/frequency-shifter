# Ney Gelişmiş Akustik ve Delik Konumlandırma Teorisi

Ney yapımında kullanılan geleneksel 26'lı birim sistemi, silindirik borunun fiziksel boyunu temel alır. Ancak modern akustik prensipler (açık uç düzeltmeleri, koniklik, delik empedansı) göz önüne alındığında, sesin dalga boyu borunun fiziksel sınırlarını aşar ve deliklerin ideal fiziksel konumları bu parametrelerden etkilenir.

Bu belge, ney açkısında deliklerin matematiksel olarak doğru yerlere (frekanslara) konumlandırılması için hesaplanan "Efektif Akustik Boy" formülasyonunu açıklar.

## 1. Açık Deliklerin Sanal Uzantısı (Tone Hole End Correction)

Bir perde (delik) açıldığında, ses dalgası borunun içinden dış ortama bu delikten yayılır. Ancak hava, deliğin fiziksel merkezinde aniden serbest kalmaz; deliğin bir çapı ($2b$) ve kamışın bir et kalınlığı ($t$) vardır. Deliğin içindeki hava kütlesi akustik bir direnç (Acoustic Inertance) yaratır.

- **Deliğin Kendi Efektif Boyu:** $t_e \approx t + 1.5b$ (Delik et kalınlığı + deliğin dışarı taşma payı).
- **Ana Boruya Etkisi:** Açık olan bir delik, boruyu fiziksel konumundan biraz daha "uzunmuş" gibi gösterir. Borunun ana yarıçapı $a$, deliğin yarıçapı $b$ ise, deliğin yarattığı sanal uzama miktarı kabaca $\Delta L_{delik} \approx \left(\frac{a}{b}\right)^2 \times t_e$ ile orantılıdır.
- **Sonuç:** Delik çapı küçüldükçe veya et kalınlığı arttıkça bu sanal uzama büyür (ses pesleşir). Sesi doğru frekansa çekmek için matkapla delinecek fiziksel noktanın, beklenen matematiksel konumdan daha yukarıda (başpâreye daha yakın) olması gerekir.

## 2. Kamışın Konikliği (Farklı Alt ve Üst Çaplar)

Doğal kargı (kamış) tam bir silindir değildir, genellikle uca doğru daralır. Bu konikliğin akustik matematiği şöyledir:

- Üst Çap ($D_{\ddot{u}st}$) ve Alt Çap ($D_{alt}$) farklı olduğunda, boru bir "Kesik Koni" halini alır.
- **Uç Düzeltmeleri:** Alt uç düzeltmesi ($\Delta L_{alt}$) doğrudan alt çap ile, üst uç düzeltmesi ($\Delta L_{\ddot{u}st}$) ise üst çap ve hazne ile hesaplanır. Her iki uca da et kalınlığı hesabı dahil edilir.
- **Lokal Çap (İnterpolasyon):** $x$ mesafesindeki bir deliğin bulunduğu yerdeki iç çap, iki uç arasındaki doğrusal eğimle hesaplanabilir:
## 3. Çift Boğumlu (Coupled Resonator) Akustik Model ve Başpâre Kesişimi

Neyin üst kısmındaki fiziksel yapı tam olarak şöyledir (Aşağıdan yukarıya):
1. **Ana Boru:** Kamışın genel çapı.
2. **1. Boğum Perde Deliği (Septum):** 1. Boğumun altındaki doğal kargı perdesinin delinmesiyle oluşan daralma.
3. **1. Boğum Kavitesi (Hazne):** Perde deliği ile Başpâre arasında kalan odacık.
4. **Başpâre Boynu:** Üfleme ağzına kadar giden dar kanal.

**Başpâre - Kamış Kesişimi:**
Başpâre kamışın ağzına takıldığında kamışın içine doğru bir miktar girer. Bu durum iki önemli sonuç doğurur:
- Başpârenin toplam boyu ile "dışarıda kalan" boyu farklıdır. İçeri giren kısım (Kesişim) 1. boğumun iç hacmini işgal eder ve kaviteyi daraltır/kısaltır.
- Kamışın ağız çapı, ana borunun üst iç çapı ($D_{\ddot{u}st}$) ile aynıdır.

> [!NOTE]
> **Kontrol Edilecek (Ampirik Doğrulama):** Alanların karesiyle orantılı sanal uzama hesabı (Empedans Dönüşümü) şimdilik teorik akustik fizik kurallarına göre varsayılmıştır. Atölye denemeleriyle bu etkinin pratik yansıması doğrulanacak ve gerekirse katsayılarla güncellenecektir.

## 4. Tüm Değişkenleri Birleştiren Algoritma

Hesaplamada şu parametreler toplanır:
1. `L_fiziksel` (Neyin tam boyu - mm)
2. `D_ust` (Ana boru üst boğum iç çapı / Kamış Ağız Çapı - mm)
3. `D_alt` (En alt boğum iç çap - mm)
4. `L_1_bogum` (1. Boğum Uzunluğu - mm)
5. `D_1_perde` (1. Boğum Perde Deliği - Örn: 8 mm)
6. `t_1_perde` (1. Boğum Perde Kalınlığı - Örn: 3 mm)
7. `L_baspare_toplam` (Başpâre Toplam Boyu - mm)
8. `L_baspare_dis` (Başpâre Dışarıda Kalan Boyu - mm)
9. `D_baspare_agiz` (Başpâre Üfleme Ağzı Çapı - mm)
10. `t_et` (Kamış et kalınlığı ortalaması - mm)
11. `D_delik` (Açılacak perdelerin ortalama matkap çapı - mm)

**Hesaplama Adımları:**
1. **Kesişim ve Hacim Daralması:**
   - Kesişim Boyu: $L_{kesisim} = L_{baspare\_toplam} - L_{baspare\_dis}$
   - Efektif Kavite Boyu (1. Boğum): $L_{kavite} = L_{1\_bogum} - L_{kesisim}$
2. **Empedans Dönüşümleri (Alanların Karesiyle Orantılı Sanal Uzama):**
   - **Perde Deliği Sanal Uzaması:** 
     $$L_{eq\_perde} = (t_{1\_perde} + 1.2 \times r_{1\_perde}) \times \left(\frac{D_{\ddot{u}st}}{D_{1\_perde}}\right)^2$$
   - **1. Boğum Kavitesi Uzaması:** Alan farkı az olduğu için yaklaşık fiziksel boyuna eşittir:
     $$L_{eq\_hazne} = L_{kavite}$$
   - **Başpâre Sanal Uzaması:** Akustik boyun (Neck) kendi fiziksel uzunluğudur.
     $$L_{eq\_baspare} = L_{baspare\_toplam} \times \left(\frac{D_{\ddot{u}st}}{D_{baspare\_agiz}}\right)^2$$
3. **Uç Düzeltmeleri:**
   - $\Delta L_{alt} = 0.61 \times \left(\frac{D_{alt}}{2}\right)$
   - $\Delta L_{\ddot{u}st} = L_{eq\_perde} + L_{eq\_hazne} + L_{eq\_baspare} + 0.61 \times \left(\frac{D_{baspare\_agiz}}{2}\right)$
4. **Boru Akustik Boyu:** 
   $$L_{eff} = L_{fiziksel} + \Delta L_{alt} + \Delta L_{\ddot{u}st}$$
5. **Teorik Nodal Nokta:** İstenen nota için 26'lı oranlara göre teorik nokta:
   $$X_{teorik} = L_{eff} \times \frac{R_i}{26}$$
6. **Lokal Etkilerle Geri Dönüşüm (Fiziksel Konum):**
   - Üst uç düzeltmesini teorik mesafeden çıkar:
     $$X_1 = X_{teorik} - \Delta L_{\ddot{u}st}$$
   - İlgili noktadaki konik çapı bul: $D_x = D_{\ddot{u}st} + \frac{x}{L_{fiziksel}} \times (D_{alt} - D_{\ddot{u}st})$
   - Deliğin sanal uzantısını çıkar:
     $$X_{fiziksel} = X_1 - \left[ \left(\frac{D_x}{D_{delik}}\right)^2 \times \left( t_{et} + 0.75 \cdot D_{delik} \right) \right]$$

## 5. Kamış Et Kalınlığının ($t_{et}$) Etkisi (Parmak Delikleri)

Kamışın cidar/et kalınlığı ($t_{et}$), açılan **parmak deliklerinin akustik direncini (sanal uzamasını)** hesaplarken kullanılır. 

Neyin üzerine bir delik açtığınızda, o deliğin içindeki hava bir kütle oluşturur. Deliğin fiziksel derinliği, kamışın et kalınlığına eşittir. Et kalınlığı ne kadar fazlaysa, deliğin içindeki hava kütlesi (akustik ağırlık) o kadar fazla olur. Kalın etli bir kamışa açılan delik tünel gibi derin olacağı için, boruyu tam manasıyla dışarıya açamaz ve boru akustik olarak **pes kalmaya** meyleder.

Algoritma bunu bildiği için $\Delta L_{delik}$ hesabını yapar; eğer et kalınlığı fazla girilmişse, bu pesleşmeyi dengelemek adına matkap vurulacak fiziksel yeri **başpâreye doğru daha yukarı** kaydırır. Et kalınlığı ($t_{et}$), açılan nota deliklerinin tam yerini milimetrik olarak yukarı çeken (tizleştiren) kritik bir dengeleme faktörüdür.

Bu sayede sadece teorik nota mesafesi değil, "seçilen kamışın yapısına ve açılan deliklerin büyüklüğüne göre" en isabetli matkap vuruş noktaları milimetrik olarak elde edilir.
