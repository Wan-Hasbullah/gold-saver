/**
 * GLOBAL LOGIC CORE - GOLD SAVER WEB APP
 * Menguruskan fungsi Floating Action Button (FAB) & Pemasa Alternating Bubble Dialog
 */

document.addEventListener('DOMContentLoaded', () => {
    const fabSupportBtn = document.getElementById('fabSupportBtn');
    const fabPopup = document.getElementById('fabPopup');
    const studyBubble = document.getElementById('studyBubble');

    // 1. Pengendali Interaksi Klik FAB Button (Dropdown Toggle)
    if (fabSupportBtn && fabPopup) {
        fabSupportBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            fabPopup.classList.toggle('hidden');
        });

        // Tutup popup secara automatik jika pengguna klik di luar kawasan komponen
        document.addEventListener('click', (e) => {
            if (!fabSupportBtn.contains(e.target) && !fabPopup.contains(e.target)) {
                fabPopup.classList.add('hidden');
            }
        });
    }

    // 2. State-Engine Pemasa Automatik bagi Bubble Dialog (#studyBubble)
    if (studyBubble) {
        let isFirstText = true;

        // Fungsi pembantu pudar-masuk (Fade-In)
        function fadeInBubble(text) {
            studyBubble.textContent = text;
            studyBubble.classList.remove('opacity-0', 'translate-y-2');
            studyBubble.classList.add('opacity-100', 'translate-y-0');
        }

        // Fungsi pembantu pudar-keluar (Fade-Out)
        function fadeOutBubble() {
            studyBubble.classList.remove('opacity-100', 'translate-y-0');
            studyBubble.classList.add('opacity-0', 'translate-y-2');
        }

        // Kemunculan Pertama: Berlaku selepas 5 saat halaman dimuatkan
        setTimeout(() => {
            fadeInBubble("Daftar Percuma");
            
            // Hilang secara perlahan selepas 3 saat dipaparkan
            setTimeout(fadeOutBubble, 3000);

            // Memulakan Gelung Pemasa Seterusnya (Setiap Selang Masa 10 Saat)
            setInterval(() => {
                // Berganti teks antara "Ada Pertanyaan?" dan "Daftar Percuma"
                const currentText = isFirstText ? "Ada Pertanyaan?" : "Daftar Percuma";
                fadeInBubble(currentText);
                
                // Tukar status state teks bagi gelung seterusnya
                isFirstText = !isFirstText;

                // Kekalkan paparan selama 3 saat sebelum pudar-keluar semula
                setTimeout(fadeOutBubble, 3000);

            }, 10000); // Gelung berulang setiap 10 saat

        }, 5000); // Penundaan pembukaan awal (5 saat)
    }
});