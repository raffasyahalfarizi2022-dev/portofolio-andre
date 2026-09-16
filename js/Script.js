document.addEventListener('DOMContentLoaded', function () {
    // Ambil semua elemen
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('navMenu');
    var navLinks = document.querySelectorAll('.nav-link');
    var form = document.getElementById('contactForm');
    var status = document.getElementById('formStatus');

    // ===== Hamburger Menu =====
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // ===== Tutup Menu Saat Link Diklik =====
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    // ===== Menu Aktif Saat Scroll =====
    window.addEventListener('scroll', function () {
        var current = '';
        var sections = document.querySelectorAll('section');
        sections.forEach(function (section) {
            var posisi = section.offsetTop - 120;
            if (window.pageYOffset >= posisi) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ===== Form Kontak =====
    if (form && status) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Ambil nilai — langsung dan sederhana
            var nama = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var pesan = document.getElementById('message').value.trim();

            // Cek kolom kosong
            if (nama === '' || email === '' || pesan === '') {
                status.textContent = '❌ Isi semua kolom yang wajib ya!';
                status.style.color = '#ef4444';
                return;
            }

            // Cek format email
            var cekEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!cekEmail.test(email)) {
                status.textContent = '❌ Email-nya salah format ya!';
                status.style.color = '#ef4444';
                return;
            }

            // Proses kirim
            status.textContent = '⏳ Sedang dikirim...';
            status.style.color = '#2563eb';

            setTimeout(function () {
                status.textContent = '✅ Pesan terkirim! Terima kasih banyak! 🙌';
                status.style.color = '#22c55e';
                form.reset();
            }, 1500);
        });
    }

    console.log('🚀 Versi Dola — TANPA $, murni JS, siap berfungsi!');
});
