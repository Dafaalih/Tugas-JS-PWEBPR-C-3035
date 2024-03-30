function buttonIya() {
  document.getElementById("tombol-iya").style.display = "none"; // Fungsinya untuk mengubah ID menjadi 'tombol-iya'
  document.getElementById("tombol-tidak").style.display = "none"; // Fungsinya untuk mengubah ID menjadi 'tombol-tidak'
  document.getElementById("pict").src = "./assets/image 3.png"; // Fungsinya untuk mengubah gambar ketika dipanggil menggunakan src
  document.getElementById("kartu").style.backgroundColor = "#E12E2E";
  document.getElementById("jdl").innerHTML = "Anda Berbohog"; // Fungsinya untuk mengubah teks menggunakan innerHTML
  document.getElementById("yakin").innerHTML = "Anda seorang Teknisi"; // Fungsinya untuk mengubah teks menggunakan innerHTML
}

function buttonTidak() {
  document.getElementById("tombol-iya").style.display = "none"; // Fungsinya untuk mengubah ID menjadi 'tombol-iya'
  document.getElementById("tombol-tidak").style.display = "none"; // Fungsinya untuk mengubah ID menjadi 'tombol-tidak'
  document.getElementById("pict").src = "./assets/image 2.png"; // Fungsinya untuk mengubah gambar ketika dipanggil menggunakan src
  document.getElementById("kartu").style.backgroundColor = "#6FD240";
  document.getElementById("jdl").innerHTML = "Anda Benar"; // Fungsinya untuk mengubah teks menggunakan innerHTML
  document.getElementById("yakin").innerHTML = "Anda adalah seorang Mahasiswa"; // Fungsinya untuk mengubah teks menggunakan innerHTML
}
