# Konu

**1. Hafta — Git ve GitHub:** Sürüm kontrolü ile çalışan örnek web uygulamasının geliştirilmesi.

## Araştırma

Git, dosyalardaki değişiklikleri commit'lerle kaydeden dağıtık sürüm kontrol sistemidir. GitHub, Git depolarını çevrimiçi paylaşma ve iş birliği platformudur. Branch, çalışmaların birbirinden ayrılmasını; merge, dalların birleştirilmesini; clone, depoyu kopyalamayı; pull, uzaktaki değişiklikleri almayı; push, yereldeki commit'leri göndermeyi sağlar. `.gitignore`, gereksiz ve hassas dosyaların izlenmemesi için kullanılır.

**Ayrıntılı araştırma PDF'si** ders platformuna ayrıca teslim edilmektedir.

## Sektörde Kullanımı

Git/GitHub sürüm takibi, kod incelemesi, ekip çalışması ve geri alınabilir geliştirme süreçleri için kullanılır. Açıklayıcı ve atomik commit'ler, değişikliklerin neden yapıldığını anlamayı kolaylaştırır.

## İncelediğim Projeler

- [Spotify Web API Examples](https://github.com/spotify/web-api-examples): API örnekleri ve yetkilendirme.
- [OsmAnd Web](https://github.com/osmandapp/web): React ile etkileşimli harita uygulaması.
- [Excalidraw](https://github.com/excalidraw/excalidraw): React/TypeScript ile çizim editörü.

## Yaptığım Uygulama

**BrawlTrio**, üç oyuncunun aynı ekrandan sırayla karakter seçip takım oluşturabildiği basit bir Brawl Stars fan planlama aracıdır. Dört örnek mod, harita seçimi, karakter filtreleme, rol/menzil temelli örnek değerlendirme ve tarayıcıda yerel kayıt içerir. HTML, CSS ve JavaScript ile geliştirilmiştir.

**Çalıştırma:** `../uygulama/index.html` dosyasını bir tarayıcıda aç. Sunucu veya ek paket gerekli değildir.

## Karşılaştığım Problemler

- Bir karakterin birden fazla oyuncu tarafından seçilmesini engellemek gerekiyordu. Seçilen karakterler tekrar seçilemeyecek şekilde işaretlendi.
- Kullanıcı seçim değiştirince eski analiz sonucu güncelliğini kaybediyordu. Seçimler değiştiğinde rapor temizleniyor.
- Sayfa yenilenince seçimler kaybolmaması için `localStorage` kullanıldı; depolama kullanılamadığında uygulama çalışmayı sürdürür.

## Öğrendiklerim

Projeyi küçük ve anlamlı geliştirme adımlarına ayırmayı, her değişikliği ayrı commit ile kaydetmeyi, duyarlı arayüz geliştirmeyi ve tarayıcıda kullanıcı seçimlerini saklamayı uyguladım. Kod değişikliklerinin sürüm geçmişinde izlenebilir olmasının önemini gördüm.

## Kaynaklar

- https://git-scm.com/docs
- https://docs.github.com/en/get-started/using-git
- https://github.com/spotify/web-api-examples
- https://github.com/osmandapp/web
- https://github.com/excalidraw/excalidraw
- https://brawlapi.com/ (gelecek haftanın API araştırması)
- https://supercell.com/en/fan-content-policy/tr/
