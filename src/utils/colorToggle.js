// Color Toggle Utility for Tailwind bg- classes
// Usage: Call colorToggle({containerId, buttonId, labelId, colors})
// Example:
// colorToggle({
//   containerId: 'color-toggle-container',
//   buttonId: 'colorToggleBtn',
//   labelId: 'colorLabel',
//   colors: [ ... ]
// });

function colorToggle({ containerId, buttonId, labelId, colors }) {
    let currentIdx = 0;
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById(containerId);
        const btn = document.getElementById(buttonId);
        const label = document.getElementById(labelId);
        if (!container || !btn || !label) return;
        function updateLabel() {
            label.textContent = colors[currentIdx];
        }
        btn.addEventListener('click', () => {
            container.classList.remove(colors[currentIdx]);
            currentIdx = (currentIdx + 1) % colors.length;
            container.classList.add(colors[currentIdx]);
            updateLabel();
        });
        updateLabel();
    });
}

// Default color list: all major Tailwind colors and shades 50, 300, 500, 900
const defaultBgClasses = [
    'bg-red-50','bg-red-300','bg-red-500','bg-red-900',
    'bg-orange-50','bg-orange-300','bg-orange-500','bg-orange-900',
    'bg-amber-50','bg-amber-300','bg-amber-500','bg-amber-900',
    'bg-yellow-50','bg-yellow-300','bg-yellow-500','bg-yellow-900',
    'bg-lime-50','bg-lime-300','bg-lime-500','bg-lime-900',
    'bg-green-50','bg-green-300','bg-green-500','bg-green-900',
    'bg-emerald-50','bg-emerald-300','bg-emerald-500','bg-emerald-900',
    'bg-teal-50','bg-teal-300','bg-teal-500','bg-teal-900',
    'bg-cyan-50','bg-cyan-300','bg-cyan-500','bg-cyan-900',
    'bg-sky-50','bg-sky-300','bg-sky-500','bg-sky-900',
    'bg-blue-50','bg-blue-300','bg-blue-500','bg-blue-900',
    'bg-indigo-50','bg-indigo-300','bg-indigo-500','bg-indigo-900',
    'bg-violet-50','bg-violet-300','bg-violet-500','bg-violet-900',
    'bg-purple-50','bg-purple-300','bg-purple-500','bg-purple-900',
    'bg-fuchsia-50','bg-fuchsia-300','bg-fuchsia-500','bg-fuchsia-900',
    'bg-pink-50','bg-pink-300','bg-pink-500','bg-pink-900',
    'bg-rose-50','bg-rose-300','bg-rose-500','bg-rose-900',
    'bg-slate-50','bg-slate-300','bg-slate-500','bg-slate-900',
    'bg-gray-50','bg-gray-300','bg-gray-500','bg-gray-900',
    'bg-zinc-50','bg-zinc-300','bg-zinc-500','bg-zinc-900',
    'bg-neutral-50','bg-neutral-300','bg-neutral-500','bg-neutral-900',
    'bg-stone-50','bg-stone-300','bg-stone-500','bg-stone-900'
];

// If you want to auto-initialize on page load, uncomment below:
// colorToggle({
//   containerId: 'color-toggle-container',
//   buttonId: 'colorToggleBtn',
//   labelId: 'colorLabel',
//   colors: defaultBgClasses
// });
