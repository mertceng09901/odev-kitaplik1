import React from 'react';
function KategoriFiltre({ kategoriler, value, onChange }) {
return (
<select
className="rounded-md border px-3 py-2"
value={value}
onChange={e => onChange(e.target.value)}
>
{kategoriler.map(k => (
<option key={k} value={k}>{k}</option>
))}
</select>
);
}export default KategoriFiltre;