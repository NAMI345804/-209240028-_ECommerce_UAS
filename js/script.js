// Data dan variabel global //
let keranjang = [], totalKeranjang = 0, produkDetail = {};

// Daftar Produk yang ditampilkan pada halaman produk //
const produkList = [
    {
        nama: 'Hanasui Bouncy Blush',
        harga: 29900,
        gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7rbk0-marulmjxg33o5e.webp',
        deskripsi: 'Cream-to-powder blush dengan hasil akhir velvet-matte yang halus dan buildable. Tersedia dalam 3 warna cantik yang kasih kesan merona alami.',
        kategori: 'makeup'
    },
    {
        nama: 'BNB Bloomatte Tint',
        harga: 49900,
        gambar: 'https://down-id.img.susercontent.com/file/id-11134201-7rasi-m47tg6mmf162b9.webp',
        deskripsi: 'Teksturnya creamy, ringan di bibir, dan transferproof. Warna tahan lama dan tetap nyaman seharian tanpa bikin bibir kering!',
        kategori: 'makeup'
    },
    {
        nama: 'Dazzle Me Mist',
        harga: 35900,
        gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7rbk2-m8k8grkuhr81ba.webp',
        deskripsi: 'Formulanya ringan dengan satin finish, bantu kunci makeup agar tahan lama. Sekaligus menenangkan dan melembapkan kulit berjerawat.',
        kategori: 'makeup'
    },
    {
        nama: 'PINKFLASH OhMyWink',
        harga: 29900,
        gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7rbk8-map61a91111ua2.webp',
        deskripsi: 'Maskara ini bikin bulu mata tampak terpisah, lentik, dan nggak menggumpal. Hasilnya natural tapi tetap cetar—bikin mata lebih besar seperti boneka!',
        kategori: 'makeup'
    },
    {
        nama: 'Wanderlust Eyeshadow',
        harga: 58500,
        gambar: 'https://down-id.img.susercontent.com/file/sg-11134301-7rfi6-m362tqk2z8urc6.webp',
        deskripsi: 'Dilengkapi Chroma-Blend Formula yang mudah dibaur dan cocok untuk semua undertone. Warnanya pigmented dan pas untuk dipakai sehari-hari hingga acara spesial.',
        kategori: 'makeup'
    },
    {
        nama: 'SOMETHINC EGGO 3D Contour',
        harga: 57000,
        gambar: 'https://down-id.img.susercontent.com/file/id-11134201-7rasb-m3ccf3lgalwv8b.webp',
        deskripsi: 'Shading dengan efek 3D yang halus dan menyatu di kulit, minim fall-out dan long-lasting. Tahan keringat & air—cocok untuk aktif seharian!',
        kategori: 'makeup'
    },
    {
        nama: 'Purbasari Lip Balm Wonder Moist',
        harga: 16900,
        gambar: 'https://down-id.img.susercontent.com/file/sg-11134201-22100-31qzbv8lybiv93.webp',
        deskripsi: 'Lip balm melembapkan dengan aroma lembut. Diperkaya Smooth-Plumper Formula untuk bibir yang lembut, lembap, dan tampak bervolume alami. Warna naturalnya bikin bibir terlihat sehat dan nggak pucat!',
        kategori: 'skincare'
    },
    {
        nama: 'Wardah Hydra Rose Facial Wash',
        harga: 32000,
        gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7qul7-lkcazgiurvvuaf.jpg',
        deskripsi: 'Pembersih wajah lembut dengan rose oil.',
        kategori: 'skincare'
    },
    {
        nama: 'Perfect Bright Night Glow',
        harga: 30000,
        gambar: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-64466116/wardah_wardah_perfect_bright_bright_-_night_glow_night_moisturizer_20_ml_full08_o392qmsj.png',
        deskripsi: 'Night cream dengan 4x bright berries dan glow booster.',
        kategori: 'skincare'
    },
    {
        nama: 'Micellar Water Brightening',
        harga: 25000,
        gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7r991-logpt41tc49l66',
        deskripsi: 'Micellar water pembersih wajah yang mencerahkan.',
        kategori: 'skincare'
    },
    {
        nama: 'Cleansing Milk Wardah',
        harga: 22000,
        gambar: 'https://down-id.img.susercontent.com/file/c9ca898eec301372e7d63187591e8217',
        deskripsi: 'Susu pembersih wajah lembut dan ringan.',
        kategori: 'skincare'
    },
    {
        nama: 'SOME BY MI Truecica Black Snail Serum',
        harga: 166900,
        gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7rbk4-m7vkh5palbcx3a.webp',
        deskripsi: 'Solusi Lengkap untuk Kulit Cerah & Sehat! Diformulasikan khusus untuk mengatasi jerawat membandel, noda hitam, dan hiperpigmentasi, produk ini juga efektif untuk menghidrasi kulit kering, menyamarkan tekstur tidak merata, dan mengecilkan tampilan pori-pori besar.Hasilnya? Kulit tampak lebih halus, cerah, dan bersih merata—dengan kilau sehat alami setiap hari!',
        kategori: 'skincare'
    },
    {
        nama: 'Purbasari Body Lotion Habbatussauda',
        harga: 18500,
        gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7rbk0-ma2d55tqzvj2f6.webp',
        deskripsi: 'Diperkaya Habbatussauda dan Extra Herb Whitening, bantu melembapkan, mencerahkan, dan meratakan warna kulit. Kandungan antioksidannya merawat kulit agar tampak lebih sehat dan muda.',
        kategori: 'skincare'
    },
    {
        nama: 'Purbasari Glowing Rose Water',
        harga: 8900,
        gambar: 'https://down-id.img.susercontent.com/file/sg-11134201-23020-u8sin1o8u2mv71.webp',
        deskripsi: 'Face mist multifungsi untuk wajah segar. Dengan ekstrak mawar, niacinamide, panthenol, dan vitamin C untuk mencerahkan dan menjaga elastisitas kulit. Bisa digunakan sebagai face mist, campuran masker/lulur, hingga cairan DIY sheet mask!',
        kategori: 'skincare'
    },
    {
        nama: 'Biore UV Tinted Cover SPF 50 PA+++',
        harga: 26900,
        gambar: 'https://down-id.img.susercontent.com/file/id-11134201-7rasb-m0ydghtn6w3o1e.webp',
        deskripsi: 'SPF 50 PA+++ dan coverage effect-nya melindungi dari sinar UV sekaligus menyamarkan noda hitam & warna kulit tak merata. No more belang, tampil cerah instan setiap hari!',
        kategori: 'skincare'
    },
    {
        nama: 'O.TWO.O Zero Pores Primer',
        harga: 42800,
        gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7r98o-lxujj8th6b6m6a.webp',
        deskripsi: 'Primer menyamarkan pori untuk hasil flawless. Membantu samarkan pori, kontrol minyak, dan ratakan warna kulit. Kandungan tea extract, niacinamide, dan hyaluronic acid bantu melembapkan sekaligus lindungi dari UV & polusi!',
        kategori: 'makeup'
    },
    {
        nama: 'Wardah Perfect Glow Cushion',
        harga: 81300,
        gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7rasi-m5gjpwk4g26ubd.webp',
        deskripsi: 'Dengan glow-perfecting pigment & skinmatch tech, warnanya nyatu dengan kulit dan bertahan hingga 12 jam. Hasil glowing tapi nggak berminyak, plus SPF 33 PA+++ sebagai perlindungan ekstra.',
        kategori: 'makeup'
    },
    {
        nama: 'BNB 2-in-1 Eyebrow Duo',
        harga: 54000,
        gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7rbk4-m70igrke3u2xc9.webp',
        deskripsi: 'Pensil alis dan browcara 2-in-1 dengan hasil pigmented dan tahan lama. Dilengkapi HD-Brow Lock & Japanese Pigment Powder agar alis terangkat natural tanpa ribet!',
        kategori: 'makeup'
    },
    {
        nama: 'PINKFLASH OhMyLine Eyeliner',
        harga: 16000,
        gambar: 'https://down-id.img.susercontent.com/file/37fabb15739702a30a3270990997e7ac.webp',
        deskripsi: 'Liquid eyeliner waterproof dengan ujung tipis dan presisi, cocok untuk pemula. Warnanya bold dan nggak luntur seharian!',
        kategori: 'makeup'
    }
];

// Menampilkan produk berdasarkan kategori //
function loadProduk(kategori = 'semua') {
    const container = document.getElementById('productList');
    container.innerHTML = '';
    const produkFilter = kategori === 'semua' ? produkList : produkList.filter(p => p.kategori === kategori);

    produkFilter.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
  <img src="${p.gambar}" alt="${p.nama}">
  <h3>${p.nama}</h3>
  <p>Rp${p.harga.toLocaleString()}</p>
  <button class="detail-button" onclick="lihatDetail(${produkList.indexOf(p)})">Lihat Detail</button>
  <div style="margin-top:10px;">
    <input type="number" id="qty-${index}" value="1" min="1" style="width:50px; padding:4px; border:1px solid #ccc; border-radius:6px;" />
    <button class="detail-button" onclick="tambahKeranjangDenganJumlah(${index})">+ Keranjang</button>
  </div>
    `;
        container.appendChild(card);
    });
}

// Menambahkan produk ke keranjang dengan jumlah dari beranda // 
function tambahKeranjangDenganJumlah(index) {
    const produk = produkList[index];
    const qtyInput = document.getElementById(`qty-${index}`);
    const jumlah = parseInt(qtyInput.value) || 1;

    for (let i = 0; i < jumlah; i++) {
        keranjang.push({ nama: produk.nama, harga: produk.harga });
    }
    totalKeranjang += jumlah;

    const count = document.getElementById("keranjang-jumlah");
    count.style.display = 'inline-block';
    count.textContent = totalKeranjang;
}

// FILTER KATEGORI (semua, makeup, skincare) //
function filterProduk(kategori) {
    loadProduk(kategori);
    document.querySelectorAll('.filter-button').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === kategori);
    });
}

// tampilan menambahkan produk //
function tambahKeranjang(nama, harga) {
    keranjang.push({ nama, harga });
    totalKeranjang++;

    const count = document.getElementById("keranjang-jumlah");
    count.style.display = 'inline-block';
    count.textContent = totalKeranjang;

    // Tambah notifikasi
    const notif = document.createElement('div');
    notif.innerText = `✅ ${nama} ditambahkan ke keranjang!`;
    notif.style = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #e91e63;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 9999;
  `;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2500);
}

// Notifikasi (tooltip) jumlah produk di ikon keranjang
function updateKeranjangTooltip() {
    const tooltip = document.querySelector(".keranjang-icon");
    tooltip.title = `Klik untuk melihat isi keranjang (${keranjang.length} produk)`;
}

// Menambahkan Produk Ke Keranjang dari Halaman Detail
function tambahKeranjangDariDetail() {
    const qty = parseInt(document.getElementById("qty-detail").value) || 1;

    for (let i = 0; i < qty; i++) {
        keranjang.push({ nama: produkDetail.nama, harga: produkDetail.harga });
    }
    totalKeranjang += qty;

    // Update jumlah di ikon keranjang
    const count = document.getElementById("keranjang-jumlah");
    count.style.display = 'inline-block';
    count.textContent = totalKeranjang;

    // Notifikasi popup
    const notif = document.createElement('div');
    notif.innerText = `✅ ${qty} produk ditambahkan ke keranjang!`;
    notif.style = "position: fixed; bottom: 20px; right: 20px; background: #e91e63; color: white; padding: 10px 20px; border-radius: 8px;";
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2500);
}

// Menampilkan Keranjang Halaman Penuh //
function bukaKeranjang() {
    navigate("keranjang");

    let isiHTML = '', total = 0;
    keranjang.forEach((p, i) => {
        isiHTML += `
  <div style="
    border: 1px solid #e0e0e0;
    padding: 12px;
    border-radius: 10px;
    margin-bottom: 10px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  ">
    <strong>${p.nama}</strong><br>
    <span>Rp${p.harga.toLocaleString()}</span><br>
    <button onclick="ubahJumlah(${i}, -1)" class="keranjang-aksi-btn">−</button>
    <button onclick="ubahJumlah(${i}, 1)" class="keranjang-aksi-btn">+</button>
    <button onclick="hapusDariKeranjang(${i})" class="keranjang-hapus-btn">x</button>
  </div>
`;
        total += p.harga;
    });

    // update isi keranjang //
    document.getElementById("isiKeranjangHalaman").innerHTML = isiHTML || "<p>Keranjang kosong</p>";
    document.getElementById("totalHargaHalaman").innerText = total.toLocaleString();

    // Tampilkan info jumlah dan total
    document.getElementById("jumlahBarangCheckout").innerText = keranjang.length;
    document.getElementById("totalCheckout").innerText = total.toLocaleString();

    // tampilkan form checkout jika ada produk di keranjang //
    document.getElementById("formCheckoutHalaman").style.display = "block";

}

// menutup keranjang //
function tutupKeranjang() {
    // sembunyikan halaman keranjang //
    document.getElementById('keranjangPanel').style.display = 'none';
    document.body.classList.remove("modal-open");

    const footer = document.querySelector("footer");
    footer.style.display = "block"; // tampilkan kembali

    // log untuk debugging //
    console.log("Footer seharusnya muncul kembali.");
}

// menampilkan modal panduan //
function tampilkanPanduan() {
    document.getElementById("panduanModal").style.display = "block";
}

// menutup modal panduan
function tutupPanduan() {
    document.getElementById("panduanModal").style.display = "none";
    document.body.classList.remove("modal-open");
}

function navigate(pageId) {
    // Sembunyikan semua halaman
    document.getElementById('home').style.display = 'none';
    document.getElementById('produk').style.display = 'none';
    document.getElementById('kontak').style.display = 'none';
    document.getElementById('detail-produk').style.display = 'none';
    document.getElementById('keranjang').style.display = 'none';

    // Sembunyikan form checkout
    document.getElementById("formCheckoutHalaman").style.display = "none";

    // Tampilkan halaman yang diminta
    document.getElementById(pageId).style.display = 'block';

    // Hapus class modal-open saat berpindah halaman
    document.body.classList.remove("modal-open");

    if (pageId === 'produk') {
        loadProduk('semua');
        document.querySelectorAll('.filter-button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.toLowerCase() === 'semua') {
                btn.classList.add('active');
            }
        });
    }

    // Update menu aktif
    document.querySelectorAll('.nav-link').forEach(link => {
        const text = link.textContent.trim().toLowerCase();
        link.classList.toggle('active', text === pageId);
    });
}

// Inisialisasi halaman saat pertama kali dimuat //
window.onload = () => {
    navigate('home');
    loadProduk('semua');
    // tandai tombol "Semua" sebagai aktif saat pertama kali
    document.querySelectorAll('.filter-button').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === 'semua');
        updateKeranjangTooltip();
    });
};

// Menampilkan detial produk dan rekomendasi //
function lihatDetail(index) {
    const p = produkList[index];
    produkDetail = p;

    // tampilkan detail produk //
    document.getElementById("detail-img").src = p.gambar;
    document.getElementById("detail-nama").innerText = p.nama;
    document.getElementById("detail-harga").innerText = "Rp" + p.harga.toLocaleString();
    document.getElementById("detail-deskripsi").innerText = p.deskripsi;

    // tampilkan halaman detail
    navigate('detail-produk');

    // tampilkan produk rekomendasi
    const rekomendasiContainer = document.getElementById("rekomendasi-produk");
    rekomendasiContainer.innerHTML = "";

    // Ambil 3 produk acak selain produk yang sedang dilihat //
    const rekomendasi = produkList
        .filter((_, i) => i !== index)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    // produk rekomendasi //
    rekomendasi.forEach((item) => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
      <img src="${item.gambar}" alt="${item.nama}" />
      <h3>${item.nama}</h3>
      <p>Rp${item.harga.toLocaleString()}</p>
      <button class="detail-button" onclick="lihatDetail(${produkList.indexOf(item)})">Lihat Detail</button>
    `;
        rekomendasiContainer.appendChild(div);
    });
}

// Menangani pengiriman form kontak //
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    this.reset();

    // Buat notifikasi pop-up
    const notif = document.createElement('div');
    notif.innerText = "✅ Pesan berhasil dikirim!";
    notif.style = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #e91e63;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    font-size: 14px;
    z-index: 9999;
  `;
    // tambahkan notifikasi ke body //
    document.body.appendChild(notif);

    setTimeout(() => notif.remove(), 3000); // Hapus setelah 3 detik
});

// Menampilkan form checkout di halaman //
function tampilkanFormCheckout() {
    // sembunyikan halaman lain //
    document.getElementById("formCheckout").style.display = "block";
    // menampilkan jumlah total barang di keranjang ke dalam form //
    document.getElementById("jumlahBarangCheckout").innerText = keranjang.length;
    // menghitung total harga semua produk di keranjang dan menampilkannya //
    document.getElementById("totalCheckout").innerText = keranjang.reduce((a, b) => a + b.harga, 0) //total semua harga// .toLocaleString(); // format angka jadi misal "Rp21.000" //
}

// menangani pengiriman form chechkout //
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formCheckoutHalaman").addEventListener("submit", function (e) {
        e.preventDefault();

        // ambil data dari form //
        const notif = document.createElement('div');
        notif.innerText = "✅ Pesanan berhasil dibuat! 🌸";
        notif.style = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #e91e63;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      font-size: 14px;
      z-index: 9999;
    `;
        // tambahkan notifikasi ke body //
        document.body.appendChild(notif);

        // reset form checkout //
        keranjang = [];
        totalKeranjang = 0;
        document.getElementById("keranjang-jumlah").style.display = 'none';
        document.getElementById("isiKeranjangHalaman").innerHTML = '';
        document.getElementById("totalHargaHalaman").innerText = '0';
        document.getElementById("formCheckoutHalaman").reset();

        // tampilan notifikasi selama 2 detik //
        setTimeout(() => {
            notif.remove();
        }, 2000);
    });
});

// Mengubah Jumlah Produk di Keranjang (+ / - ) //
function ubahJumlah(index, delta) {
    if (delta === -1) {
        keranjang.splice(index, 1);
        totalKeranjang--;
    } else if (delta === 1) {
        keranjang.push({ nama: keranjang[index].nama, harga: keranjang[index].harga });
        totalKeranjang++;
    }

    // Update tampilan keranjang //
    updateKeranjangTooltip();
    const count = document.getElementById("keranjang-jumlah");
    if (keranjang.length === 0) {
        count.style.display = 'none';
    } else {
        count.textContent = totalKeranjang;
    }
    bukaKeranjang(); // Refresh tampilan
}