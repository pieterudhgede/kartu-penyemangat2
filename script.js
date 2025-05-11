const pesanPenyemangat = [
    "Semangat kristin💯",
    "Jangan menyerah, hasil tidak akan mengkhianati usaha. ✨",
    "Percaya diri adalah kunci sukses! 🔑",
    "kristin pasti bisa 🙏",
    "Setiap usaha yang tulus akan membuahkan hasil. 🍀",
    "Istirahat yang cukup💤",
    "Doa dan usaha kristin 🙌",
    "UTS dulu, lalu gas tembak tembak! 😄📚",
    "semangat pasti bisa maku tak gentar! 😎🔥"
  ];
  
  function tampilkanPesan() {
    const index = Math.floor(Math.random() * pesanPenyemangat.length);
    const pesan = document.getElementById("pesan");
    pesan.textContent = pesanPenyemangat[index];
    
    // Trigger animasi ulang
    pesan.style.animation = 'none';
    pesan.offsetHeight; // Force reflow
    pesan.style.animation = 'bounce 1s ease';
  }
  