
import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KitapListe from './KitapListele.jsx'
import KategoriFiltre from './KategoriFiltre.jsx'
import AramaCubugu from './AramaCubugu.jsx'
import FavoriPaneli from './FavoriPanel.jsx';




function App() {
  const [count, setCount] = useState(0)

  
    const LS_ARAMA = 'aramaMetni';
  const LS_KATEGORI = 'kategori';
  const LS_FAVORI = 'favoriler';

  // Kitap verisi (sabit örnek)
  const kitaplar = [
    { id: 1, baslik: 'Kürk Mantolu Madonna', yazar: 'Sabahattin Ali', kategori: 'Roman' },
    { id: 2, baslik: '1984', yazar: 'George Orwell', kategori: 'Distopya' },
    { id: 3, baslik: 'Simyacı', yazar: 'Paulo Coelho', kategori: 'Roman' },
    { id: 4, baslik: 'Hayvan Çiftliği', yazar: 'George Orwell', kategori: 'Distopya' },
    { id: 5, baslik: 'Nutuk', yazar: 'Mustafa Kemal Atatürk', kategori: 'Tarih' },
  ];

  // State’ler
  const [aramaMetni, setAramaMetni] = useState(localStorage.getItem(LS_ARAMA) || '');
  const [kategori, setKategori] = useState(localStorage.getItem(LS_KATEGORI) || 'Hepsi');
  const [favoriler, setFavoriler] = useState(() => {
    const saved = localStorage.getItem(LS_FAVORI);
    return saved ? JSON.parse(saved) : [];
  });

  // LocalStorage senkronizasyonu
  useEffect(() => {
    localStorage.setItem(LS_ARAMA, aramaMetni);
  }, [aramaMetni]);

  useEffect(() => {
    localStorage.setItem(LS_KATEGORI, kategori);
  }, [kategori]);

  useEffect(() => {
    localStorage.setItem(LS_FAVORI, JSON.stringify(favoriler));
  }, [favoriler]);

  // Favori ekleme / çıkarma
  function toggleFavori(id) {
    setFavoriler(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id);
      return [...prev, id];
    });
  }

  // Filtreleme işlemi
  const filtrelenmis = kitaplar.filter(kita => {
    const baslikMatch = kita.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriMatch = kategori === 'Hepsi' || kita.kategori === kategori;
    return baslikMatch && kategoriMatch;
  });

  // Kategoriler (benzersiz + Hepsi)
  const kategoriler = ['Hepsi', ...Array.from(new Set(kitaplar.map(k => k.kategori)))];

  // Ekrana basılacak görünüm
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <header className="mb-4">
            <h1 className="text-2xl font-semibold">Kulüp Web Kitaplığı</h1>
            <p className="text-sm text-gray-500">
              Kitapları başlığa göre ara, kategoriye göre filtrele, favori ekle.
            </p>
          </header>

          <div className="flex gap-3 mb-4">
            <AramaCubugu value={aramaMetni} onChange={setAramaMetni} />
            <KategoriFiltre kategoriler={kategoriler} value={kategori} onChange={setKategori} />
          </div>

          <KitapListe kitaplar={filtrelenmis} favoriler={favoriler} onToggleFavori={toggleFavori} />
        </div>

        <aside className="md:col-span-1">
          <FavoriPaneli
            favoriIds={favoriler}
            kitaplar={kitaplar}
            onToggleFavori={toggleFavori}
          />
        </aside>
      </div>
    </div>
  );
}


export default App;
