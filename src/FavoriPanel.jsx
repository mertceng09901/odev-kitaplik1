import React from 'react';
function FavoriPaneli({ favoriIds, kitaplar, onToggleFavori }) {
const favoriKitaplar = favoriIds.map(id => kitaplar.find(k => k.id === id)).filter(Boolean);


return (
<div className="border rounded-lg p-4">
<h2 className="font-semibold">Favoriler ({favoriKitaplar.length})</h2>
{favoriKitaplar.length === 0 ? (
<p className="text-gray-500 text-sm mt-2">Henüz favori yok.</p>
) : (
<ul className="mt-2 space-y-2">
{favoriKitaplar.map(k => (
<li key={k.id} className="flex items-center justify-between">
<div className="text-sm">
<div className="font-medium">{k.baslik}</div>
<div className="text-xs text-gray-600">{k.yazar}</div>
</div>
<button className="text-sm px-2 py-1 rounded border" onClick={() => onToggleFavori(k.id)}>Çıkar</button>
</li>
))}
</ul>
)}
</div>
);}export default FavoriPaneli;