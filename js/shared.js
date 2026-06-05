/**
 * CORE FINTECH CORE SYSTEM (SHARED LOGIC)
 * Menguruskan logik global untuk Header, Bubble Dialog, Popups, dan Bottom Access Menu.
 */

// Konfigurasi Harga Emas Semasa (Satu Titik Perubahan)
const HARGA_EMAS_999 = 385.50; // Harga per gram RM
const HARGA_EMAS_916 = 355.20; // Harga per gram RM

document.addEventListener("DOMContentLoaded", () => {
    // INTRANET: Hidrasi Harga Emas Jika Wujud di Halaman (index.html)
    const el999 = document.getElementById("price-999");
    const el916 = document.getElementById("price-916");
    if(el999 && el916) {
        el999.textContent = `RM ${HARGA_EMAS_999.toFixed(2)}`;
        el916.textContent = `RM ${HARGA_EMAS_916.toFixed(2)}`;
    }

    // SYSTEM: Bubble Dialog Logic Engine
    const bubble = document.getElementById("studyBubble");
    if (bubble) {
        let loopCount = 0;
        
        // Kemunculan Kali Pertama: Jam 5 saat pertama
        setTimeout(() => {
            showBubble("Daftar Percuma");
        }, 5000);

        // Selang Masa Seterusnya (Setiap 10 saat bermula selepas pusingan pertama selesai)
        setInterval(() => {
            loopCount++;
            showBubble("Ada Pertanyaan?");
        }, 13000); // 10 saat rehat + 3 saat paparan
    }

    // SYSTEM: Toggle Mobile Menu Dropdown
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-nav-links");
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            mobileMenu.classList.toggle("opacity-0");
        });
    }
});

// Pembantu Animasi Bubble Dialog
function showBubble(text) {
    const bubble = document.getElementById("studyBubble");
    if(!bubble) return;
    
    bubble.textContent = text;
    bubble.classList.remove("opacity-0", "translate-y-2", "pointer-events-none");
    bubble.classList.add("opacity-100", "translate-y-0");

    // Sembunyikan secara perlahan selepas 3 saat
    setTimeout(() => {
        bubble.classList.remove("opacity-100", "translate-y-0");
        bubble.classList.add("opacity-0", "translate-y-2", "pointer-events-none");
    }, 3000);
}

// TOGGLE ACTIONS FOR FLOATING FAB DROPDOWN
function toggleFabDropdown() {
    const dropdown = document.getElementById("fabDropdown");
    if(!dropdown) return;
    dropdown.classList.toggle("hidden");
    dropdown.classList.toggle("opacity-0");
    dropdown.classList.toggle("translate-y-2");
}

// TOGGLE ACTIONS FOR BOTTOM SLIDE-UP ACCESS PANEL
function toggleAccessPanel() {
    const panel = document.getElementById("accessPanel");
    if(!panel) return;
    panel.classList.toggle("hidden");
    panel.classList.toggle("opacity-0");
    panel.classList.toggle("translate-y-2");
}

// MOCK FUNCTION FOR ONESIGNAL WEB PUSH
function triggerOneSignalPush() {
    alert("OneSignal Web Push Notification SDK ditolak masuk: Mendaftarkan peranti ke pelayan secure HTTPS...");
}