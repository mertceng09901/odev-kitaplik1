import React from 'react';
import KitapKarti from './KitapKarti';
function KitapListe({ kitaplar, favoriler, onToggleFavori }) {
if (kitaplar.length === 0) {
return <p className="text-gray-500">Eşleşen kitap bulunamadı.</p>;
}


return (
<div className="grid gap-3">
{kitaplar.map(k => (
<KitapKarti
key={k.id}
{...k}
favorideMi={favoriler.includes(k.id)}
onToggleFavori={() => onToggleFavori(k.id)}
/>
))}
</div>
);
}export default KitapListe;