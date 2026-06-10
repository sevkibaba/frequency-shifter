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

## 4. Sapma (Pertürbasyon) Modeli ve Algoritma

Geleneksel 26'lık sistem zaten standart bir neyin (başpâre ve boğum daralmaları dahil) tüm akustik yapısını kendi içinde barındırır. Bu yüzden algoritmamız sıfırdan bir açık boru hesabı yapmak yerine, **Standart Ney'den ne kadar sapıldığını (Pertürbasyon)** hesaplar.

**Standart (Referans) Değerler:**
- Üst İç Çap = 15 mm, Alt İç Çap = 10 mm
- 1. Boğum Boyu = 26 mm, Perde Deliği = 8 mm
- Başpâre Toplam = 20 mm, Dışarıda Kalan = 10 mm
- Başpâre Ağzı = 10 mm, Et Kalınlığı = 3 mm, Matkap Çapı = 9 mm

**Hesaplama Adımları:**
1. **Klasik (Referans) Konum:** Cetvelin sıfır noktası fiziksel kamışın en altıdır.
   $$X_{klasik} = L_{kamis} \times \frac{R_i}{26}$$
2. **Üst Akustik Sapma ($\Delta L_{\ddot{u}st\_diff}$):** 
   Kullanıcının girdiği başpâre ve boğum ölçülerinin yarattığı teorik sanal uzama ($\Delta L_{\ddot{u}st\_g\ddot{u}ncel}$) hesaplanır. Referans değerlerin ürettiği uzama ($\Delta L_{\ddot{u}st\_std}$) bundan çıkarılır.
   - Pozitif fark: Üst taraf standarda göre daha dar/uzun (Sesi pesleştiriyor).
3. **Delik Akustik Sapması ($\Delta L_{delik\_diff}$):**
   Kullanıcının girdiği matkap çapı ve et kalınlığının yarattığı sanal uzama, standart 9 mm matkap ve 3 mm et kalınlığının uzamasından çıkarılır.
4. **Empedans (Etki) Dağılımı:**
   Üst kısımdaki değişimin ($\Delta L_{\ddot{u}st\_diff}$), alt deliklere etkisi daha azdır. Delik başpâreye yaklaştıkça bu daralmanın frekansa/konuma olan etkisi artar. Arka delik (13.5) için bu etki çarpanı `1x`, en alt delik olan Dügâh (6) için `~0.44x` olarak ölçeklenir.
   $$Efektif\ \ddot{U}st\ Sapma = \Delta L_{\ddot{u}st\_diff} \times \frac{R_i}{13.5}$$
5. **Son Fiziksel Konum:**
   Tüm sapmalar klasik konuma eklenir. (Pozitif bir sapma deliğin rezonansını pesleştireceği için, deliği fiziksel olarak **yukarı -alttan uzağa-** kaydırarak tizleştirir ve sistemi akort eder).
   $$X_{fiziksel} = X_{klasik} + Efektif\ \ddot{U}st\ Sapma + \Delta L_{delik\_diff}$$

## 5. Kamış Et Kalınlığının ve Çapların Etkisi

- **Kalın Etli Kamış veya Dar Matkap:** Açılan delik tünel gibi derin olacağı için, boruyu tam manasıyla dışarıya açamaz ve boru akustik olarak pes kalmaya meyleder. Algoritma bunu bildiği için $\Delta L_{delik\_diff}$ pozitif çıkar ve matkap vurulacak fiziksel yeri **başpâreye doğru daha yukarı** kaydırır.
- **Dar Başpâre veya Küçük Perde Deliği:** Neyin üst kısmı daraldığında boru akustik olarak daha ağırlaşır (uzar) ve pesleşir. Algoritma bunu kompanze etmek için deliklerin tamamını oransal olarak **yukarı** çeker. En üst delik en çok kayarken, en alt delik en az kayar.

Bu sapma modeli sayesinde sadece teorik matematik değil, yüzyıllık ustanın "deneme yanılma" tecrübesi milimetrik olarak ekrana yansıtılır.
