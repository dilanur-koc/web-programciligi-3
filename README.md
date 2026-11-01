# Web Programcılığı III — Haftalık Çalışmalar

Bu depoda dönem boyunca geliştirilmesi planlanan **BrawlTrio** adlı üç kişilik takım planlama uygulaması ve haftalık ödev belgeleri bulunur.

## Klasör yapısı

```text
web-programciligi-3/
├── hafta-01-git-github/
│   └── README.md
├── uygulama/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── .gitignore
└── README.md
```

## Çalıştırma

1. Depoyu indir veya `git clone` ile kopyala.
2. `uygulama/index.html` dosyasını Chrome, Edge veya Firefox ile aç.
3. Oyun modu ve harita seç; üç oyuncu için sırayla karakter belirle.
4. **Takımı değerlendir** butonuna bas. Seçimler tarayıcıda saklanır.

Harici bağımlılık, kurulum komutu, API anahtarı ve sunucu gerekmiyor.

## Özellikler (1. hafta)

- 4 örnek oyun modu ve her modda 2 örnek harita
- 12 örnek karakter ve isim/rol filtreleme
- Üç kişilik sıralı takım planlama; seçimi geri alma ve sıfırlama
- Şeffaf kurallara dayalı, resmî olmayan denge değerlendirmesi
- `localStorage` ile planı tarayıcıda koruma
- Mobil uyumlu sayfa

**Sınırlar:** Henüz gerçek zamanlı üç cihaz bağlantısı ve harici REST API entegrasyonu yok. Bu ilk sürüm, aynı ekrandan sırayla üç kişilik takım planlar. Veriler örnektir; uygulamanın puanı maç kazanma olasılığı değildir.

## Dönem planı

- **Hafta 1 — Git/GitHub:** Başlangıç sürümü ve 5 anlamlı commit.
- **Hafta 2 — Dokümantasyon:** Gereksinimler, kullanım senaryoları, README geliştirme.
- **Hafta 3 — HTTP/REST:** BrawlAPI ile karakter/harita verisi, API istekleri ve hata yönetimi.
- **Hafta 4 — Veritabanı:** Takım planlarını veritabanında saklama.
- **Hafta 5 — Authentication:** Oturum açma ve kullanıcıya özel kayıtlar.
- **Sonrası:** Ayrı cihazlardan odaya katılma, test, CI/CD ve yayınlama.

## Sürüm kontrolü

Her özellik için anlamlı commit kullanılır. Yeni haftalar `feature/hafta-XX-*` dallarında geliştirilebilir ve pull request ile `main` dalına birleştirilebilir. İlk hafta beş ayrı geliştirme commit'i vardır.

## Lisans ve marka uyarısı

Bu proje eğitim amaçlı, ücretsiz, gayriresmî bir Brawl Stars fan rehber/planlama aracıdır. Brawl Stars karakter görselleri veya oyundan kopyalanmış varlıklar depoya eklenmemiştir.

**Bu ürün resmî değildir ve Supercell tarafından onaylanmamıştır.** Daha fazla bilgi: https://supercell.com/en/fan-content-policy/tr/
