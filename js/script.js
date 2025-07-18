// Show modal when Sign In button is clicked
document.addEventListener('DOMContentLoaded', function() {
  // Opsi Sign In modern
  const btnGoogle = document.getElementById('signin-google');
  const btnFacebook = document.getElementById('signin-facebook');
  if (btnGoogle) {
    btnGoogle.addEventListener('click', function() {
      if (usernameSpan) usernameSpan.textContent = 'Google User';
      if (modalSignIn) modalSignIn.classList.add('hidden');
    });
  }
  if (btnFacebook) {
    btnFacebook.addEventListener('click', function() {
      if (usernameSpan) usernameSpan.textContent = 'Facebook User';
      if (modalSignIn) modalSignIn.classList.add('hidden');
    });
  }
  // Contact Us Form Validation & Show Values
  const contactForm = document.getElementById('contact-form');
  const resultDiv = document.getElementById('contact-result');
  if (contactForm && resultDiv) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Ambil nilai
      const nama = contactForm.querySelector('#nama').value.trim();
      const tgl = contactForm.querySelector('#tgl').value;
      const gender = contactForm.querySelector('input[name="gender"]:checked')?.value || '';
      const pesan = contactForm.querySelector('#pesan').value.trim();

      // Validasi sederhana
      let errorMsg = '';
      if (!nama) errorMsg += 'Nama wajib diisi. ';
      if (!tgl) errorMsg += 'Tanggal lahir wajib diisi. ';
      if (!gender) errorMsg += 'Jenis kelamin wajib dipilih. ';
      if (!pesan) errorMsg += 'Pesan wajib diisi.';

      // Tampilkan error atau hasil
      if (errorMsg) {
        resultDiv.innerHTML = '<span class="text-red-600">' + errorMsg + '</span>';
        return;
      }

      // Tampilkan nilai
      resultDiv.innerHTML = `<b>Data Formulir:</b><br>
        Nama: ${nama}<br>
        Tanggal Lahir: ${tgl}<br>
        Jenis Kelamin: ${gender}<br>
        Pesan: ${pesan}`;
    });
  }
  const btnSignIn = document.getElementById('btn-signin');
  const modalSignIn = document.getElementById('modal-signin');
  const closeSignIn = document.getElementById('close-signin');
  const formSignIn = document.getElementById('form-signin');
  const usernameSpan = document.getElementById('username');

  if (btnSignIn && modalSignIn) {
    btnSignIn.addEventListener('click', function(e) {
      e.preventDefault();
      modalSignIn.classList.remove('hidden');
    });
  }

  if (closeSignIn && modalSignIn) {
    closeSignIn.addEventListener('click', function() {
      modalSignIn.classList.add('hidden');
    });
  }

  if (formSignIn) {
    formSignIn.addEventListener('submit', function(e) {
      e.preventDefault();
      const nama = document.getElementById('signin-nama').value;
      // Ganti kata 'User' di hero section
      if (usernameSpan && nama) {
        usernameSpan.textContent = nama;
      }
      // Tutup modal
      modalSignIn.classList.add('hidden');
    });
  }
});
