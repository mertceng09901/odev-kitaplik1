function KitapKarti({ id, baslik, yazar, kategori, favorideMi, onToggleFavori }) {
return (
<div className="flex items-center justify-between border rounded-lg p-3">
<div>
<div className="font-medium">{baslik}</div>
<div className="text-sm text-gray-600">{yazar} — <span className="italic">{kategori}</span></div>
</div>


<div className="flex items-center gap-2">
<button
className="px-3 py-1 rounded-md border text-sm"
onClick={onToggleFavori}
>
{favorideMi ? 'Çıkar' : 'Favori'}
</button>
</div>
</div>
);
}export default KitapKarti;