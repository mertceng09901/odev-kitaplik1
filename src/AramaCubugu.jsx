import React from 'react';


function AramaCubugu({ value, onChange }) {
return (
<input
className="flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring"
placeholder="Kitap başlığı ile ara..."
value={value}
onChange={e => onChange(e.target.value)}
/>
);
}export default AramaCubugu;