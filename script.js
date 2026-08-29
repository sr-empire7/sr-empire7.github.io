const CONFIG = {
  telegramUrl: "https://t.me/completepuzzle",
  tiktokUrl: "https://www.tiktok.com/@srshaempire7",
  instagramUrl: "https://www.instagram.com/srshah_4111",
  hfmIbUrl: "https://www.hfmmalaysia.com/sv/en/?refid=30480157",
  whatsappNumber: "60103732776", // format: 60 + nomor, tanpa +, spasi atau tanda -
  classLocationName: "Kuala Lumpur",
  latitude: 3.1390,
  longitude: 101.6869  
};

const translations = {
  id: {
    "nav.classes":"Kelas","nav.broker":"Broker","nav.location":"Lokasi","nav.community":"Komunitas","nav.join":"Daftar Kelas",
    "hero.title":"Bangun <em>ilmu trading.</em><br>Bangun disiplin.","hero.text":"Pelajari dasar pasar, analisis, manajemen risiko dan cara menyusun trading plan dengan pendekatan yang terstruktur.","hero.start":"Mulai Belajar <span>↗</span>","hero.program":"Lihat Program",
    "stats.education":"Fokus Edukasi","stats.community":"Komunitas","stats.risk":"Risk First",
    "classes.label":"PROGRAM PEMBELAJARAN","classes.title":"Naikkan level<br><span>skill trading Anda.</span>","classes.desc":"Materi dirancang bertahap agar Anda memahami proses, bukan sekadar mengejar hasil.",
    "classes.basic":"Trading Dasar","classes.basicDesc":"Market structure, candlestick, trend, support & resistance, leverage dan dasar manajemen risiko.","classes.strategy":"Analisis & Strategy","classes.strategyDesc":"Trading plan, backtesting, journal, setup entry/exit dan pengelolaan posisi secara sistematis.","classes.mentoring":"Coaching Intensif","classes.mentoringDesc":"Bimbingan kelompok, review journal dan penguatan disiplin proses bersama mentor.","classes.cta":"Daftar minat →",
    "broker.title":"Pilih broker dengan<br><span>cerdas & terukur.</span>","broker.desc":"Gunakan informasi terverifikasi dan lakukan pemeriksaan mandiri sebelum membuka akun.","broker.valetaxIntro":"Valetax menawarkan beberapa jenis akaun trading, termasuk Cent, Standard, ECN, Booster, Bonus dan PRO. Semak entiti undang-undang yang terpakai kepada akaun anda sebelum deposit.",
    "broker.phyntexIntro":"Phyntex Markets merupakan multi-asset broker. Laman resminya menampilkan akun Standard dan Cent serta platform MetaTrader 5. Periksa entitas legal dan ketentuan yang berlaku sebelum deposit.","broker.phyntexRegulation":"Regulasi / Lisensi","broker.phyntexAccounts":"Akun","broker.phyntexPlatform":"Platform","broker.phyntexSpread":"Spread","broker.phyntexDeposit":"Deposit minimum","broker.phyntexFoot":"*Informasi akun, spread, leverage, entitas dan persyaratan dapat berbeda menurut jenis akun atau wilayah. Periksa laman resmi Phyntex Markets sebelum mendaftar atau melakukan deposit.","broker.regulation":"Regulasi / Lisensi","broker.accounts":"Akaun","broker.platform":"Platform","broker.spread":"Spread","broker.deposit":"Deposit minimum","broker.visit":"Website Valetax ↗","broker.legal":"Dokumen Legal","broker.foot":"*Kondisi akaun, entiti, spread, leverage dan persyaratan dapat berbeda menurut wilayah dan jenis akaun. Semak laman rasmi Valetax sebelum mendaftar.","broker.placeholder":"Akan diperbarui","broker.checkTitle":"Checklist sebelum deposit","broker.c1":"Periksa nama legal dan regulator.","broker.c2":"Pahami spread, komisi, swap dan biaya lainnya.","broker.c3":"Uji akun demo sebelum menggunakan dana nyata.","broker.c4":"Jangan pernah memberikan OTP atau password akun.",
    "register.label":"PENDAFTARAN","register.title":"Siap mulai<br><span>belajar trading?</span>","register.desc":"Isi form singkat. Data pendaftaran akan disiapkan untuk dikirim melalui WhatsApp.",
    "form.name":"Nama lengkap","form.phone":"WhatsApp / Telepon","form.course":"Pilihan kelas","form.experience":"Pengalaman trading","form.note":"Pesan / tujuan belajar","form.submit":"Kirim Pendaftaran ↗","form.note2":"Setelah dikirim, WhatsApp akan dibuka untuk melanjutkan komunikasi.",
    "community.title":"Belajar bersama.<br>Berproses bersama.","community.desc":"Ikuti channel dan sosial media resmi untuk mendapatkan informasi kelas terbaru.",
    "location.label":"OFFLINE CLASS","location.title":"Temui kami<br><span>di lokasi kelas.</span>","location.desc":"Gunakan Google Maps untuk mendapatkan rute menuju lokasi kelas.","location.maps":"Buka Google Maps ↗","location.gps":"Gunakan GPS Saya","location.step1":"Datang ke kelas","location.step1d":"Pastikan jadwal dan lokasi telah dikonfirmasi oleh admin.","location.step2":"Bawa journal","location.step2d":"Siapkan catatan trading dan pertanyaan Anda.","location.step3":"Belajar dengan disiplin","location.step3d":"Fokus pada proses, manajemen risiko dan konsistensi.",
    "footer.disclaimer":"Konten website ini bersifat edukasi, bukan nasihat keuangan dan bukan jaminan keuntungan. Trading memiliki risiko kerugian."
  },
  ms: {
    "nav.classes":"Kelas","nav.broker":"Broker","nav.location":"Lokasi","nav.community":"Komuniti","nav.join":"Daftar Kelas",
    "hero.title":"Bina <em>ilmu trading.</em><br>Bina disiplin.","hero.text":"Pelajari asas pasaran, analisis, pengurusan risiko dan cara menyusun trading plan dengan pendekatan yang tersusun.","hero.start":"Mula Belajar <span>↗</span>","hero.program":"Lihat Program",
    "stats.education":"Fokus Pendidikan","stats.community":"Komuniti","stats.risk":"Risk First",
    "classes.label":"PROGRAM PEMBELAJARAN","classes.title":"Naikkan tahap<br><span>kemahiran trading anda.</span>","classes.desc":"Materi direka secara bertahap supaya anda memahami proses, bukan sekadar mengejar hasil.",
    "classes.basic":"Trading Asas","classes.basicDesc":"Market structure, candlestick, trend, support & resistance, leverage dan asas pengurusan risiko.","classes.strategy":"Analisis & Strategy","classes.strategyDesc":"Trading plan, backtesting, journal, setup entry/exit dan pengurusan posisi secara sistematik.","classes.mentoring":"Coaching Intensif","classes.mentoringDesc":"Bimbingan berkumpulan, review journal dan pengukuhan disiplin proses bersama mentor.","classes.cta":"Daftar minat →",
    "broker.title":"Pilih broker dengan<br><span>bijak & terukur.</span>","broker.desc":"Gunakan maklumat yang disahkan dan buat semakan sendiri sebelum membuka akaun.","broker.valetaxIntro":"Valetax menawarkan beberapa jenis akaun trading termasuk Cent, Standard, ECN, Booster, Bonus dan PRO. Semak entiti undang-undang yang terpakai kepada akaun anda sebelum deposit.",
    "broker.phyntexIntro":"Phyntex Markets ialah broker multi-aset. Laman rasmi memaparkan akaun Standard dan Cent serta platform MetaTrader 5. Semak entiti undang-undang dan syarat yang terpakai sebelum deposit.","broker.phyntexRegulation":"Regulasi / Lesen","broker.phyntexAccounts":"Akaun","broker.phyntexPlatform":"Platform","broker.phyntexSpread":"Spread","broker.phyntexDeposit":"Deposit minimum","broker.phyntexFoot":"*Maklumat akaun, spread, leverage, entiti dan syarat boleh berbeza mengikut jenis akaun atau wilayah. Semak laman rasmi Phyntex Markets sebelum mendaftar atau membuat deposit.","broker.regulation":"Regulasi / Lesen","broker.accounts":"Akaun","broker.platform":"Platform","broker.spread":"Spread","broker.deposit":"Deposit minimum","broker.visit":"Laman Valetax ↗","broker.legal":"Dokumen Legal","broker.foot":"*Keadaan akaun, entiti, spread, leverage dan syarat boleh berbeza mengikut wilayah dan jenis akaun. Semak laman rasmi Valetax sebelum mendaftar.","broker.placeholder":"Akan dikemas kini","broker.checkTitle":"Checklist sebelum deposit","broker.c1":"Semak nama undang-undang dan regulator.","broker.c2":"Fahami spread, komisen, swap dan kos lain.","broker.c3":"Uji akaun demo sebelum menggunakan dana sebenar.","broker.c4":"Jangan berikan OTP atau kata laluan akaun.",
    "register.label":"PENDAFTARAN","register.title":"Sedia untuk mula<br><span>belajar trading?</span>","register.desc":"Isi borang ringkas. Data pendaftaran akan disediakan untuk dihantar melalui WhatsApp.",
    "form.name":"Nama penuh","form.phone":"WhatsApp / Telefon","form.course":"Pilihan kelas","form.experience":"Pengalaman trading","form.note":"Mesej / tujuan belajar","form.submit":"Hantar Pendaftaran ↗","form.note2":"Selepas dihantar, WhatsApp akan dibuka untuk meneruskan komunikasi.",
    "community.title":"Belajar bersama.<br>Berproses bersama.","community.desc":"Ikuti channel dan media sosial rasmi untuk mendapatkan maklumat kelas terkini.",
    "location.label":"KELAS FIZIKAL","location.title":"Temui kami<br><span>di lokasi kelas.</span>","location.desc":"Gunakan Google Maps untuk mendapatkan arah ke lokasi kelas.","location.maps":"Buka Google Maps ↗","location.gps":"Gunakan GPS Saya","location.step1":"Datang ke kelas","location.step1d":"Pastikan jadual dan lokasi telah disahkan oleh admin.","location.step2":"Bawa journal","location.step2d":"Sediakan catatan trading dan soalan anda.","location.step3":"Belajar dengan disiplin","location.step3d":"Fokus pada proses, pengurusan risiko dan konsistensi.",
    "footer.disclaimer":"Kandungan website ini adalah untuk pendidikan, bukan nasihat kewangan dan bukan jaminan keuntungan. Trading mempunyai risiko kerugian."
  },
  en: {
    "nav.classes":"Classes","nav.broker":"Broker","nav.location":"Location","nav.community":"Community","nav.join":"Join Class",
    "hero.title":"Build <em>trading knowledge.</em><br>Build discipline.","hero.text":"Learn market basics, analysis, risk management and how to build a structured trading plan.","hero.start":"Start Learning <span>↗</span>","hero.program":"View Programs",
    "stats.education":"Education Focus","stats.community":"Community","stats.risk":"Risk First",
    "classes.label":"LEARNING PROGRAMS","classes.title":"Level up your<br><span>trading skills.</span>","classes.desc":"Structured lessons designed to help you understand the process, not simply chase results.",
    "classes.basic":"Trading Basics","classes.basicDesc":"Market structure, candlesticks, trends, support & resistance, leverage and risk management basics.","classes.strategy":"Analysis & Strategy","classes.strategyDesc":"Trading plans, backtesting, journaling, entry/exit setups and systematic position management.","classes.mentoring":"Intensive Coaching","classes.mentoringDesc":"Group guidance, journal reviews and process discipline with a mentor.","classes.cta":"Register interest →",
    "broker.title":"Choose a broker<br><span>smartly & carefully.</span>","broker.desc":"Use verified information and conduct your own checks before opening an account.","broker.valetaxIntro":"Valetax offers several trading account types, including Cent, Standard, ECN, Booster, Bonus and PRO. Check the legal entity applicable to your account before depositing.",
    "broker.phyntexIntro":"Phyntex Markets is a multi-asset broker. Its official website lists Standard and Cent accounts and the MetaTrader 5 platform. Check the applicable legal entity and terms before depositing.","broker.phyntexRegulation":"Regulation / Licence","broker.phyntexAccounts":"Accounts","broker.phyntexPlatform":"Platforms","broker.phyntexSpread":"Spread","broker.phyntexDeposit":"Minimum deposit","broker.phyntexFoot":"*Account information, spreads, leverage, entity and requirements may vary by account type or region. Check the official Phyntex Markets website before registering or depositing.","broker.regulation":"Regulation / Licence","broker.accounts":"Accounts","broker.platform":"Platforms","broker.spread":"Spread","broker.deposit":"Minimum deposit","broker.visit":"Valetax Website ↗","broker.legal":"Legal Documents","broker.foot":"*Account conditions, entity, spreads, leverage and requirements may vary by region and account type. Check the official Valetax website before registering.","broker.placeholder":"To be updated","broker.checkTitle":"Before-deposit checklist","broker.c1":"Check the legal entity and regulator.","broker.c2":"Understand spreads, commissions, swaps and other fees.","broker.c3":"Test a demo account before using real funds.","broker.c4":"Never share your OTP or account password.",
    "register.label":"REGISTRATION","register.title":"Ready to start<br><span>learning trading?</span>","register.desc":"Fill in the short form. Your registration data will be sent through WhatsApp.",
    "form.name":"Full name","form.phone":"WhatsApp / Phone","form.course":"Class choice","form.experience":"Trading experience","form.note":"Message / learning goal","form.submit":"Submit Registration ↗","form.note2":"After submission, WhatsApp will open to continue communication.",
    "community.title":"Learn together.<br>Grow together.","community.desc":"Follow our official channels and social media for the latest class information.",
    "location.label":"OFFLINE CLASS","location.title":"Meet us<br><span>at the class location.</span>","location.desc":"Use Google Maps to navigate to the class location.","location.maps":"Open Google Maps ↗","location.gps":"Use My GPS","location.step1":"Attend the class","location.step1d":"Confirm the schedule and location with the admin.","location.step2":"Bring your journal","location.step2d":"Prepare your trading notes and questions.","location.step3":"Learn with discipline","location.step3d":"Focus on process, risk management and consistency.",
    "footer.disclaimer":"This website is for educational purposes only, not financial advice and not a guarantee of profit. Trading involves risk of loss."
  }
};

const $ = s => document.querySelector(s);

// Safe helper: only updates elements that exist in the HTML.
const setHref = (selector, url) => {
  const el = $(selector);
  if (el) el.href = url;
};
const setText = (selector, value) => {
  const el = $(selector);
  if (el) el.textContent = value;
};

// Social links are optional because not every page includes them.
setHref("#telegramLink", CONFIG.telegramUrl);
setHref("#tiktokLink", CONFIG.tiktokUrl);
setHref("#instagramLink", CONFIG.instagramUrl);
setText("#locationName", CONFIG.classLocationName);
setText("#coords", `${CONFIG.latitude.toFixed(5)}, ${CONFIG.longitude.toFixed(5)}`);
setHref("#mapsLink", `https://www.google.com/maps/dir/?api=1&destination=${CONFIG.latitude},${CONFIG.longitude}`);
setText("#year", new Date().getFullYear());

window.addEventListener("load", () => {
  setTimeout(() => $("#intro").classList.add("hide"), 1900);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const applyLanguage = (lang) => {
  const selected = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (selected[key]) el.innerHTML = selected[key];
  });
  document.documentElement.lang = lang;
  if (language) language.value = lang;
};

const language = $("#language");
applyLanguage("en");
if (language) language.addEventListener("change", e => applyLanguage(e.target.value));

const menuBtn = $("#menuBtn");
if (menuBtn) menuBtn.addEventListener("click", () => $("#mobileMenu")?.classList.toggle("open"));
document.querySelectorAll("#mobileMenu a").forEach(a => a.addEventListener("click", () => $("#mobileMenu").classList.remove("open")));

function toast(msg){
  $("#toast").textContent = msg;
  $("#toast").style.display = "block";
  setTimeout(() => $("#toast").style.display = "none", 3200);
}

// Broker button opens WhatsApp with a professional English message and the broker IB link.
document.querySelectorAll(".broker-wa-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const broker = btn.dataset.broker || "broker";
    const ibUrl = btn.dataset.ibUrl || "";
    const number = String(CONFIG.whatsappNumber || "").replace(/\D/g, "");
    const text = `Hello SR Empire Admin,\n\nI am interested in registering with ${broker}. Please assist me with the registration process and help ensure that I am connected through the correct IB.\n\nIB Link for ${broker}: ${ibUrl}\n\nThank you.`;
    if (!number) { toast("Admin WhatsApp number is not configured."); return; }
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank");
  });
});

setHref("#adminWhatsappLink", `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello SR Empire Admin, I would like to get more information.")}`);

const registerForm = $("#registerForm");
if (registerForm) registerForm.addEventListener("submit", e => {
  e.preventDefault();

  const fields = {
    name: $("#name").value.trim(),
    phone: $("#phone").value.trim(),
    email: $("#email").value.trim(),
    course: $("#course")?.value.trim() || "Face to Face (Advance) 2K26",
    message: $("#message")?.value.trim() || ""
  };

  if (!fields.name || !fields.phone) {
    toast("Please complete your name and WhatsApp / phone number.");
    return;
  }

  const text =
`SR EMPIRE CLASS REGISTRATION

Name: ${fields.name}
WhatsApp / Phone: ${fields.phone}
Email: ${fields.email || "-"}
Coaching: ${fields.course}
Goal / Notes: ${fields.message || "-"}

Fee: RM950.00
Deposit: RM800
Balance: RM150`;

  // WhatsApp tujuan: format internasional tanpa +, spasi atau tanda -
  const whatsappNumber = String(CONFIG.whatsappNumber || "").replace(/\D/g, "");

  if (!whatsappNumber) {
    toast("WhatsApp number is not configured.");
    return;
  }

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  const popup = window.open(whatsappUrl, "_blank");

  if (!popup) {
    toast("WhatsApp popup was blocked. Please allow popups and try again.");
    return;
  }

  toast("Registration ready. WhatsApp will open.");
});

const gpsBtn = $("#gpsBtn");
if (gpsBtn) gpsBtn.addEventListener("click", () => {
  if(!navigator.geolocation){ toast("GPS is not supported by this browser."); return; }
  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude.toFixed(6);
    const lng = pos.coords.longitude.toFixed(6);
    window.open(`https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${CONFIG.latitude},${CONFIG.longitude}`, "_blank");
  }, () => toast("GPS permission was denied or the location is unavailable."));
});


// Start Learning / CTA button scrolls to the registration form.
document.querySelectorAll('a[href="#daftar"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.getElementById("daftar");
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#daftar");
  });
});
