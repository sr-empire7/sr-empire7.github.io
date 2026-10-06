const CONFIG = {
  telegramUrl: "https://t.me/completepuzzle",
  tiktokUrl: "https://www.tiktok.com/@srshaempire7",
  instagramUrl: "https://www.instagram.com/srshah_4111",
  valetaxIbUrl: "https://ma.valetaxid.com/p/4345089",
  whatsappNumber: "60103732776",
  classLocationName: "Kajang",
  latitude: 3.1390,
  longitude: 101.6869
};

const T = {
  en: {
    navClasses:"Coaching",navBroker:"Broker",navLocation:"Location",navCommunity:"Community",navRegister:"Register Classes",
    heroEyebrow:"SR EMPIRE TRADING ACADEMY",heroTitle:"Build <em>trading knowledge.</em><br>Build discipline.",
    heroText:"Learn market basics, analysis, risk management and how to build a structured trading plan.",heroEyebrow:"SR EMPIRE TRADING ACADEMY",startLearning:"Start Learning",
    startLearning:"Start Learning",viewPrograms:"View Coaching",educationFocus:"Education Focus",riskFirst:"Risk First",
    liveEducation:"LIVE EDUCATION",discipline:"DISCIPLINE",strategy:"STRATEGY",risk:"RISK",
    brokerLabel:"BROKER",brokerTitle:"Broker information<br><span>for your registration.</span>",
    brokerIntro:"Review the information below and complete your own checks before opening or funding a trading account.",
    primaryBroker:"★ PRIMARY BROKER INFORMATION",infoOnly:"INFORMATION ONLY",primaryTradingBroker:"TRADING BROKER • PRIMARY",
    valetaxSource:"Information based on the Valetax official website",valetaxInfo:"SR EMPIRE • VALETAX INFORMATION",contactIb:"Contact IB Broker ↗",
    availabilityNotice:"VALETAX AVAILABILITY NOTICE",unableValetax:"Unable to use Valetax?",
    fallbackP1:"If Valetax is unavailable in your country, region, or personal circumstances, please contact the SR Empire admin before registering with another broker.",
    fallbackP2:"The admin can explain the available registration options and provide the latest guidance for your situation.",
    fallback1:"Do not register through an unverified link.",fallback2:"Confirm the applicable broker and legal entity first.",
    fallback3:"Ask the admin for the current registration instructions.",contactAdmin:"Contact Admin on WhatsApp ↗",
    fallbackNote:"Broker availability and account conditions can vary by country and region. Contact the admin for current information.",
    riskControl:"RISK CONTROL",beforeDeposit:"Before-deposit checklist",checkSub:"Use this checklist as a basic step before making a decision.",
    legal:"Legal",legalDesc:"Check the legal entity name and regulator.",cost:"Cost",costDesc:"Understand spreads, commissions, swaps and other fees.",
    demo:"Demo",demoDesc:"Test a demo account before using real funds.",security:"Security",securityDesc:"Never share your OTP or account password.",
    riskNote:"Trading involves risk. Understand the product, costs and broker terms before using real funds.",
    socialLabel:"OFFICIAL SOCIAL MEDIA",socialTitle:"Follow <span>SR Empire.</span>",
    socialIntro:"Stay connected with SR Empire for public updates, trading education, broker information and official announcements.",
    officialTelegram:"OFFICIAL PUBLIC TELEGRAM",telegramTitle:"SR Empire Public Channel",
    telegramDesc:"Follow the official SR Empire Telegram channel for trading education, market updates, community announcements, broker information and important public notices.",
    officialTiktok:"OFFICIAL TIKTOK • LIVE TRADE",tiktokTitle:"SR Empire Live Trade",
    tiktokDesc:"Watch SR Empire live trade content, market observations, trading education, setup discussions and real-time learning moments designed to make the trading process easier to understand.",
    officialInstagram:"OFFICIAL INSTAGRAM",instagramTitle:"SR Empire Community",
    instagramDesc:"Official class information, SR Empire activities, educational content and community updates.",
    officialWhatsapp:"OFFICIAL WHATSAPP ADMIN",whatsappTitle:"SR Empire Direct Contact",
    whatsappDesc:"Contact the official admin for broker registration, Direct Coaching and SR Empire enquiries.",
    tradingEducation:"TRADING EDUCATION",marketUpdates:"MARKET UPDATES",community:"COMMUNITY",liveTrade:"LIVE TRADE",marketInsights:"MARKET INSIGHTS",education:"EDUCATION",
        ibPartnerBadge:"VALETAX × SR EMPIRE",ibPartnerKicker:"BUSINESS OPPORTUNITY",
    ibPartnerTitle:"Opportunity to Become a <span>Valetax IB.</span>",
    ibPartnerLead:"Open to members who are already registered under Sifu Shah and are interested in building their own team as a Valetax × SR Empire IB.",
    ibBenefit1:"VVIP Group Support",ibBenefit1Desc:"Dedicated community support.",
    ibBenefit2:"Trading Signals",ibBenefit2Desc:"Access to trading signal support.",
    ibBenefit3:"Classes & Guidance",ibBenefit3Desc:"Structured learning and guidance.",
    ibBenefit4:"Live Trade — Sifu Shah",ibBenefit4Desc:"Live trading learning sessions.",
    ibBenefit5:"Live Trade — Admin Wan",ibBenefit5Desc:"Additional live trade support.",
    ibBenefit6:"Dedicated Support",ibBenefit6Desc:"Ongoing support for your network.",
    ibPartnerNote:"We provide the support, signals, classes and live trade. Your focus is to find clients and build your network.",
    ibPartnerCta:"Join / Get WhatsApp Group Access ↗",ibPartnerFootnote:"Contact the admin for the latest group access and IB registration instructions.",
    ibKicker:"IB BROKER GUIDE",ibTitle:"Before you contact the IB",
    ibLead:"Follow these simple steps to make sure your registration is connected through the correct IB.",
    ibStep1:"Confirm your broker",ibStep1Desc:"Check that the broker shown below matches the one you want to register with.",
    ibStep2:"Continue to WhatsApp",ibStep2Desc:"Tap the button below. WhatsApp will open with a professional message prepared for the admin.",
    ibStep3:"Complete registration with the admin",ibStep3Desc:"The IB link will be included in the message so the admin can guide you through the correct registration flow.",
    ibNote:"Please review the broker's official terms, entity and account conditions before registering or depositing.",
    cancel:"Cancel",continueWhatsapp:"Continue to WhatsApp ↗",
    personalReg:"DIRECT COACHING REGISTRATION",personalTitle:"Direct Coaching<br><span>Face to Face (Advance) 2K26</span>",
    personalIntro:"Complete the registration form to join a face-to-face Direct Coaching session in Kota Bharu, Kelantan.",
    personalClass:"DIRECT COACHING",fullName:"Full name",phone:"WhatsApp / Phone",email:"Email",coachingProgram:"Coaching type",
    coachingGoals:"Coaching goals / notes",fee:"Fee",deposit:"Deposit",balance:"Balance",
    paymentConsent:"I understand the RM950.00 fee and the payment terms: RM800 deposit + RM150 balance.",
    submitRegistration:"Submit Registration ↗",afterSubmit:"After submission, WhatsApp will open so you can continue communicating with the admin.",
    faceAdvance:"FACE TO FACE (ADVANCE) 2K26",personalClassTitle:"Direct Coaching Class",location:"LOCATION",date:"DATE",saturday:"Saturday",
    period:"PERIOD",oneDay:"One Day",monitoring:"MONITORING",limitedGroup:"Limited Group – 6 Month",payment:"PAYMENT",
    depositInfo:"After the deposit, the admin will provide the class location and class time.",balanceInfo:"Pay during the class.",
    accountNo:"ACCOUNT NUMBER",gpsLocation:"GPS / COACHING LOCATION",locationClasses:"Location Classes SR Empire",
    openMaps:"Open Google Maps ↗",useGps:"Use My GPS",gpsNote:"Use My GPS to get directions from your current location to the coaching venue.",
    whatsapp:"WHATSAPP",tagline:"LEARN <span>•</span> PRACTICE <span>•</span> PROGRESS",
    footerTagline:"Trading Education • Community • Discipline",footerRegister:"Register",footerGps:"GPS / Location",
    footerDisclaimer:"This website is for educational purposes only, not financial advice and not a guarantee of profit. Trading involves risk of loss.",
    fullNamePlaceholder:"Your name",phonePlaceholder:"6010...",emailPlaceholder:"you@email.com",coachingPlaceholder:"Tell us what you would like to improve or be coached on..."
  },
  ms: {
    navClasses:"Coaching",navBroker:"Broker",navLocation:"Lokasi",navCommunity:"Komuniti",navRegister:"Daftar Kelas",
    heroEyebrow:"AKADEMI TRADING SR EMPIRE",heroTitle:"Bina <em>ilmu trading.</em><br>Bina disiplin.",
    heroText:"Pelajari asas pasaran, analisis, pengurusan risiko dan cara membina pelan trading yang tersusun.",heroEyebrow:"AKADEMI TRADING SR EMPIRE",startLearning:"Mula Belajar",
    startLearning:"Mula Belajar",viewPrograms:"Lihat Coaching",educationFocus:"Fokus Pendidikan",riskFirst:"Utamakan Risiko",
    liveEducation:"PENDIDIKAN LANGSUNG",discipline:"DISIPLIN",strategy:"STRATEGI",risk:"RISIKO",
    brokerLabel:"BROKER",brokerTitle:"Maklumat broker<br><span>untuk pendaftaran anda.</span>",
    brokerIntro:"Semak maklumat di bawah dan lakukan semakan anda sendiri sebelum membuka atau membiayai akaun trading.",
    primaryBroker:"★ MAKLUMAT BROKER UTAMA",infoOnly:"MAKLUMAT SAHAJA",primaryTradingBroker:"BROKER TRADING • UTAMA",
    valetaxSource:"Maklumat berdasarkan laman rasmi Valetax",valetaxInfo:"SR EMPIRE • MAKLUMAT VALETAX",contactIb:"Hubungi IB Broker ↗",
    availabilityNotice:"NOTIS KETERSEDIAAN VALETAX",unableValetax:"Tidak dapat menggunakan Valetax?",
    fallbackP1:"Jika Valetax tidak tersedia di negara, wilayah atau keadaan anda, sila hubungi admin SR Empire sebelum mendaftar dengan broker lain.",
    fallbackP2:"Admin boleh menerangkan pilihan pendaftaran yang tersedia dan memberikan panduan terkini untuk situasi anda.",
    fallback1:"Jangan mendaftar melalui pautan yang tidak disahkan.",fallback2:"Sahkan broker dan entiti undang-undang yang berkaitan terlebih dahulu.",
    fallback3:"Tanya admin untuk arahan pendaftaran terkini.",contactAdmin:"Hubungi Admin di WhatsApp ↗",
    fallbackNote:"Ketersediaan broker dan syarat akaun boleh berbeza mengikut negara dan wilayah. Hubungi admin untuk maklumat terkini.",
    riskControl:"KAWALAN RISIKO",beforeDeposit:"Senarai semak sebelum deposit",checkSub:"Gunakan senarai ini sebagai langkah asas sebelum membuat keputusan.",
    legal:"Undang-undang",legalDesc:"Semak nama entiti undang-undang dan pengawal selia.",cost:"Kos",costDesc:"Fahami spread, komisen, swap dan yuran lain.",
    demo:"Demo",demoDesc:"Uji akaun demo sebelum menggunakan dana sebenar.",security:"Keselamatan",securityDesc:"Jangan sesekali berkongsi OTP atau kata laluan akaun.",
    riskNote:"Trading melibatkan risiko. Fahami produk, kos dan terma broker sebelum menggunakan dana sebenar.",
    socialLabel:"MEDIA SOSIAL RASMI",socialTitle:"Ikuti <span>SR Empire.</span>",
    socialIntro:"Kekal berhubung dengan SR Empire untuk kemas kini awam, pendidikan trading, maklumat broker dan pengumuman rasmi.",
    officialTelegram:"TELEGRAM AWAM RASMI",telegramTitle:"Saluran Awam SR Empire",
    telegramDesc:"Ikuti saluran Telegram rasmi SR Empire untuk pendidikan trading, kemas kini pasaran, pengumuman komuniti, maklumat broker dan notis penting.",
    officialTiktok:"TIKTOK RASMI • LIVE TRADE",tiktokTitle:"SR Empire Live Trade",
    tiktokDesc:"Tonton kandungan live trade SR Empire, pemerhatian pasaran, pendidikan trading, perbincangan setup dan pembelajaran masa nyata.",
    officialInstagram:"INSTAGRAM RASMI",instagramTitle:"Komuniti SR Empire",
    instagramDesc:"Maklumat kelas rasmi, aktiviti SR Empire, kandungan pendidikan dan kemas kini komuniti.",
    officialWhatsapp:"WHATSAPP ADMIN RASMI",whatsappTitle:"Hubungan Terus SR Empire",
    whatsappDesc:"Hubungi admin rasmi untuk pendaftaran broker, coaching peribadi dan pertanyaan SR Empire.",
    tradingEducation:"PENDIDIKAN TRADING",marketUpdates:"KEMAS KINI PASARAN",community:"KOMUNITI",liveTrade:"LIVE TRADE",marketInsights:"PANDANGAN PASARAN",education:"PENDIDIKAN",
        ibPartnerBadge:"VALETAX × SR EMPIRE",ibPartnerKicker:"PELUANG PERNIAGAAN",
    ibPartnerTitle:"Peluang Menjadi <span>IB Valetax.</span>",
    ibPartnerLead:"Terbuka kepada ahli yang telah berdaftar di bawah Sifu Shah dan berminat untuk membina team sendiri sebagai IB Valetax × SR Empire.",
    ibBenefit1:"Group Support VVIP",ibBenefit1Desc:"Sokongan komuniti khusus.",
    ibBenefit2:"Signal Trading",ibBenefit2Desc:"Akses kepada sokongan signal trading.",
    ibBenefit3:"Kelas & Bimbingan",ibBenefit3Desc:"Pembelajaran dan bimbingan tersusun.",
    ibBenefit4:"Live Trade — Sifu Shah",ibBenefit4Desc:"Sesi pembelajaran live trading.",
    ibBenefit5:"Live Trade — Admin Wan",ibBenefit5Desc:"Sokongan live trade tambahan.",
    ibBenefit6:"Support Dedicated",ibBenefit6Desc:"Sokongan berterusan untuk network anda.",
    ibPartnerNote:"Kami sediakan support, signal, kelas dan live trade. Anda fokus cari client dan bina network.",
    ibPartnerCta:"Join / Dapatkan Akses Group WhatsApp ↗",ibPartnerFootnote:"Hubungi admin untuk akses group terkini dan arahan pendaftaran IB.",

        ibPartnerBadge:"VALETAX × SR EMPIRE",ibPartnerKicker:"PELUANG BISNIS",
    ibPartnerTitle:"Peluang Menjadi <span>IB Valetax.</span>",
    ibPartnerLead:"Terbuka bagi anggota yang telah terdaftar di bawah Sifu Shah dan berminat membangun tim sendiri sebagai IB Valetax × SR Empire.",
    ibBenefit1:"Group Support VVIP",ibBenefit1Desc:"Dukungan komunitas khusus.",
    ibBenefit2:"Sinyal Trading",ibBenefit2Desc:"Akses dukungan sinyal trading.",
    ibBenefit3:"Kelas & Bimbingan",ibBenefit3Desc:"Pembelajaran dan bimbingan terstruktur.",
    ibBenefit4:"Live Trade — Sifu Shah",ibBenefit4Desc:"Sesi pembelajaran live trading.",
    ibBenefit5:"Live Trade — Admin Wan",ibBenefit5Desc:"Dukungan live trade tambahan.",
    ibBenefit6:"Support Dedicated",ibBenefit6Desc:"Dukungan berkelanjutan untuk network Anda.",
    ibPartnerNote:"Kami menyediakan support, sinyal, kelas dan live trade. Anda fokus mencari client dan membangun network.",
    ibPartnerCta:"Join / Dapatkan Akses Group WhatsApp ↗",ibPartnerFootnote:"Hubungi admin untuk akses group terbaru dan instruksi pendaftaran IB.",
    ibKicker:"PANDUAN BROKER IB",ibTitle:"Sebelum menghubungi IB",
    ibLead:"Ikuti langkah mudah ini untuk memastikan pendaftaran anda disambungkan melalui IB yang betul.",
    ibStep1:"Sahkan broker anda",ibStep1Desc:"Pastikan broker yang dipaparkan di bawah sepadan dengan broker yang ingin anda daftar.",
    ibStep2:"Teruskan ke WhatsApp",ibStep2Desc:"Tekan butang di bawah. WhatsApp akan dibuka dengan mesej profesional untuk admin.",
    ibStep3:"Lengkapkan pendaftaran bersama admin",ibStep3Desc:"Pautan IB akan dimasukkan dalam mesej supaya admin boleh membimbing proses pendaftaran yang betul.",
    ibNote:"Sila semak terma rasmi broker, entiti dan syarat akaun sebelum mendaftar atau membuat deposit.",
    cancel:"Batal",continueWhatsapp:"Teruskan ke WhatsApp ↗",
    personalReg:"PENDAFTARAN DIRECT COACHING",personalTitle:"Direct Coaching<br><span>Face to Face (Advance) 2K26</span>",
    personalIntro:"Lengkapkan borang pendaftaran untuk menyertai sesi coaching bersemuka di Kota Bharu, Kelantan.",
    personalClass:"DIRECT COACHING",fullName:"Nama penuh",phone:"WhatsApp / Telefon",email:"E-mel",coachingProgram:"Jenis coaching",
    coachingGoals:"Matlamat / nota coaching",fee:"Yuran",deposit:"Deposit",balance:"Baki",
    paymentConsent:"Saya faham yuran RM950.00 dan terma bayaran: deposit RM800 + baki RM150.",
    submitRegistration:"Hantar Pendaftaran ↗",afterSubmit:"Selepas dihantar, WhatsApp akan dibuka untuk anda terus berhubung dengan admin.",
    faceAdvance:"FACE TO FACE (ADVANCE) 2K26",personalClassTitle:"Kelas Coaching Peribadi",location:"LOKASI",date:"TARIKH",saturday:"Hari Sabtu",
    period:"TEMPOH",oneDay:"Satu Hari",monitoring:"PEMANTAUAN",limitedGroup:"Kumpulan Terhad – 6 Bulan",payment:"PEMBAYARAN",
    depositInfo:"Selepas deposit, admin akan memberikan lokasi dan masa kelas.",balanceInfo:"Bayar semasa kelas.",
    accountNo:"NO. AKAUN",gpsLocation:"GPS / LOKASI COACHING",locationClasses:"Lokasi Kelas SR Empire",
    openMaps:"Buka Google Maps ↗",useGps:"Gunakan GPS Saya",gpsNote:"Gunakan GPS Saya untuk mendapatkan arah dari lokasi semasa ke tempat coaching.",
    whatsapp:"WHATSAPP",tagline:"BELAJAR <span>•</span> BERLATIH <span>•</span> MAJU",
    footerTagline:"Pendidikan Trading • Komuniti • Disiplin",footerRegister:"Daftar",footerGps:"GPS / Lokasi",
    footerDisclaimer:"Laman web ini untuk tujuan pendidikan sahaja, bukan nasihat kewangan dan bukan jaminan keuntungan. Trading melibatkan risiko kerugian.",
    fullNamePlaceholder:"Nama anda",phonePlaceholder:"6010...",emailPlaceholder:"anda@email.com",coachingPlaceholder:"Beritahu perkara yang ingin anda perbaiki atau pelajari..."
  },
  id: {
    navClasses:"Coaching",navBroker:"Broker",navLocation:"Lokasi",navCommunity:"Komunitas",navRegister:"Daftar Kelas",
    heroEyebrow:"AKADEMI TRADING SR EMPIRE",heroTitle:"Bangun <em>pengetahuan trading.</em><br>Bangun disiplin.",
    heroText:"Pelajari dasar pasar, analisis, manajemen risiko, dan cara membangun rencana trading yang terstruktur.",heroEyebrow:"AKADEMI TRADING SR EMPIRE",startLearning:"Mulai Belajar",
    startLearning:"Mulai Belajar",viewPrograms:"Lihat Coaching",educationFocus:"Fokus Pendidikan",riskFirst:"Utamakan Risiko",
    liveEducation:"EDUKASI LANGSUNG",discipline:"DISIPLIN",strategy:"STRATEGI",risk:"RISIKO",
    brokerLabel:"BROKER",brokerTitle:"Informasi broker<br><span>untuk pendaftaran Anda.</span>",
    brokerIntro:"Tinjau informasi di bawah dan lakukan pemeriksaan Anda sendiri sebelum membuka atau mengisi dana akun trading.",
    primaryBroker:"★ INFORMASI BROKER UTAMA",infoOnly:"INFORMASI SAJA",primaryTradingBroker:"BROKER TRADING • UTAMA",
    valetaxSource:"Informasi berdasarkan situs resmi Valetax",valetaxInfo:"SR EMPIRE • INFORMASI VALETAX",contactIb:"Hubungi IB Broker ↗",
    availabilityNotice:"PEMBERITAHUAN KETERSEDIAAN VALETAX",unableValetax:"Tidak bisa menggunakan Valetax?",
    fallbackP1:"Jika Valetax tidak tersedia di negara, wilayah, atau kondisi Anda, hubungi admin SR Empire sebelum mendaftar pada broker lain.",
    fallbackP2:"Admin dapat menjelaskan opsi pendaftaran yang tersedia dan memberikan panduan terbaru untuk situasi Anda.",
    fallback1:"Jangan mendaftar melalui tautan yang belum terverifikasi.",fallback2:"Konfirmasikan broker dan entitas legal yang berlaku terlebih dahulu.",
    fallback3:"Tanyakan kepada admin mengenai instruksi pendaftaran terbaru.",contactAdmin:"Hubungi Admin via WhatsApp ↗",
    fallbackNote:"Ketersediaan broker dan ketentuan akun dapat berbeda menurut negara dan wilayah. Hubungi admin untuk informasi terbaru.",
    riskControl:"KONTROL RISIKO",beforeDeposit:"Checklist sebelum deposit",checkSub:"Gunakan checklist ini sebagai langkah dasar sebelum mengambil keputusan.",
    legal:"Legalitas",legalDesc:"Periksa nama entitas legal dan regulator.",cost:"Biaya",costDesc:"Pahami spread, komisi, swap, dan biaya lainnya.",
    demo:"Demo",demoDesc:"Uji akun demo sebelum menggunakan dana nyata.",security:"Keamanan",securityDesc:"Jangan pernah membagikan OTP atau kata sandi akun.",
    riskNote:"Trading memiliki risiko. Pahami produk, biaya, dan ketentuan broker sebelum menggunakan dana nyata.",
    socialLabel:"MEDIA SOSIAL RESMI",socialTitle:"Ikuti <span>SR Empire.</span>",
    socialIntro:"Tetap terhubung dengan SR Empire untuk update publik, edukasi trading, informasi broker, dan pengumuman resmi.",
    officialTelegram:"TELEGRAM PUBLIK RESMI",telegramTitle:"Channel Publik SR Empire",
    telegramDesc:"Ikuti channel Telegram resmi SR Empire untuk edukasi trading, update pasar, pengumuman komunitas, informasi broker, dan pemberitahuan penting.",
    officialTiktok:"TIKTOK RESMI • LIVE TRADE",tiktokTitle:"SR Empire Live Trade",
    tiktokDesc:"Saksikan konten live trade SR Empire, observasi pasar, edukasi trading, pembahasan setup, dan pembelajaran real-time.",
    officialInstagram:"INSTAGRAM RESMI",instagramTitle:"Komunitas SR Empire",
    instagramDesc:"Informasi kelas resmi, aktivitas SR Empire, konten edukasi, dan update komunitas.",
    officialWhatsapp:"WHATSAPP ADMIN RESMI",whatsappTitle:"Kontak Langsung SR Empire",
    whatsappDesc:"Hubungi admin resmi untuk pendaftaran broker, coaching pribadi, dan pertanyaan seputar SR Empire.",
    tradingEducation:"EDUKASI TRADING",marketUpdates:"UPDATE PASAR",community:"KOMUNITAS",liveTrade:"LIVE TRADE",marketInsights:"WAWASAN PASAR",education:"EDUKASI",
    ibKicker:"PANDUAN BROKER IB",ibTitle:"Sebelum menghubungi IB",
    ibLead:"Ikuti langkah sederhana ini agar pendaftaran Anda terhubung melalui IB yang benar.",
    ibStep1:"Konfirmasi broker Anda",ibStep1Desc:"Pastikan broker yang ditampilkan di bawah sesuai dengan broker yang ingin Anda daftarkan.",
    ibStep2:"Lanjut ke WhatsApp",ibStep2Desc:"Tekan tombol di bawah. WhatsApp akan terbuka dengan pesan profesional untuk admin.",
    ibStep3:"Selesaikan pendaftaran bersama admin",ibStep3Desc:"Link IB akan disertakan dalam pesan agar admin dapat memandu proses pendaftaran yang benar.",
    ibNote:"Periksa ketentuan resmi broker, entitas, dan kondisi akun sebelum mendaftar atau melakukan deposit.",
    cancel:"Batal",continueWhatsapp:"Lanjut ke WhatsApp ↗",
    personalReg:"PENDAFTARAN DIRECT COACHING",personalTitle:"Direct Coaching<br><span>Face to Face (Advance) 2K26</span>",
    personalIntro:"Lengkapi formulir pendaftaran untuk mengikuti sesi coaching tatap muka di Kota Bharu, Kelantan.",
    personalClass:"DIRECT COACHING",fullName:"Nama lengkap",phone:"WhatsApp / Telepon",email:"Email",coachingProgram:"Jenis coaching",
    coachingGoals:"Target / catatan coaching",fee:"Biaya",deposit:"Deposit",balance:"Sisa",
    paymentConsent:"Saya memahami biaya RM950.00 dan ketentuan pembayaran: deposit RM800 + sisa RM150.",
    submitRegistration:"Kirim Pendaftaran ↗",afterSubmit:"Setelah dikirim, WhatsApp akan terbuka agar Anda dapat melanjutkan komunikasi dengan admin.",
    faceAdvance:"FACE TO FACE (ADVANCE) 2K26",personalClassTitle:"Kelas Coaching Pribadi",location:"LOKASI",date:"TANGGAL",saturday:"Hari Sabtu",
    period:"PERIODE",oneDay:"Satu Hari",monitoring:"PEMANTAUAN",limitedGroup:"Grup Terbatas – 6 Bulan",payment:"PEMBAYARAN",
    depositInfo:"Setelah deposit, admin akan memberikan lokasi dan waktu kelas.",balanceInfo:"Bayar saat kelas.",
    accountNo:"NO. REKENING",gpsLocation:"GPS / LOKASI COACHING",locationClasses:"Lokasi Kelas SR Empire",
    openMaps:"Buka Google Maps ↗",useGps:"Gunakan GPS Saya",gpsNote:"Gunakan GPS Saya untuk mendapatkan petunjuk dari lokasi Anda ke tempat coaching.",
    whatsapp:"WHATSAPP",tagline:"BELAJAR <span>•</span> LATIHAN <span>•</span> BERKEMBANG",
    footerTagline:"Edukasi Trading • Komunitas • Disiplin",footerRegister:"Daftar",footerGps:"GPS / Lokasi",
    footerDisclaimer:"Website ini hanya untuk tujuan edukasi, bukan nasihat keuangan dan bukan jaminan keuntungan. Trading memiliki risiko kerugian.",
    fullNamePlaceholder:"Nama Anda",phonePlaceholder:"6010...",emailPlaceholder:"anda@email.com",coachingPlaceholder:"Ceritakan apa yang ingin Anda tingkatkan atau pelajari..."
  }
};

const $ = s => document.querySelector(s);
const setHref = (selector, url) => { const el=$(selector); if(el) el.href=url; };
const setText = (selector, value) => { const el=$(selector); if(el) el.textContent=value; };

setHref("#telegramLink", CONFIG.telegramUrl);
setHref("#tiktokLink", CONFIG.tiktokUrl);
setHref("#instagramLink", CONFIG.instagramUrl);
setText("#locationName", CONFIG.classLocationName);
setText("#coords", `${CONFIG.latitude.toFixed(5)}, ${CONFIG.longitude.toFixed(5)}`);
setHref("#mapsLink", `https://www.google.com/maps/dir/?api=1&destination=${CONFIG.latitude},${CONFIG.longitude}`);
setText("#year", new Date().getFullYear());

function applyLanguage(lang="en"){
  const language = T[lang] ? lang : "en";
  const t = T[language];
  document.documentElement.lang = language === "id" ? "id" : language === "ms" ? "ms" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(t[key] != null){
      if(String(t[key]).includes("<")) el.innerHTML=t[key];
      else el.textContent=t[key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key=el.dataset.i18nPlaceholder;
    if(t[key] != null) el.placeholder=t[key];
  });
  const select=$("#languageSelect");
  if(select) select.value=language;
  localStorage.setItem("srEmpireLanguage", language);
}

const languageSelect=$("#languageSelect");
const savedLanguage=localStorage.getItem("srEmpireLanguage") || "en";
applyLanguage(savedLanguage);
if(languageSelect) languageSelect.addEventListener("change", e=>applyLanguage(e.target.value));

function hideIntro(){
  const intro = $("#intro");
  if (!intro || intro.classList.contains("hide")) return;
  intro.classList.add("hide");
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => setTimeout(hideIntro, 1700), {once:true});
} else {
  setTimeout(hideIntro, 1700);
}
// Safety fallback: the intro must never block the page because of a slow external asset.
setTimeout(hideIntro, 4500);

if ("IntersectionObserver" in window) {
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));
}

const menuBtn=$("#menuBtn");
if(menuBtn)menuBtn.addEventListener("click",()=>$("#mobileMenu")?.classList.toggle("open"));
document.querySelectorAll("#mobileMenu a").forEach(a=>a.addEventListener("click",()=>$("#mobileMenu")?.classList.remove("open")));

function toast(msg){
  const el=$("#toast"); if(!el)return;
  el.textContent=msg;el.style.display="block";setTimeout(()=>el.style.display="none",3200);
}

let pendingIb=null;
const ibModal=$("#ibModal"),ibContinue=$("#ibContinue");
const changeIbModal=$("#changeIbModal");
const changeIbMessage=$("#changeIbMessage");

function applyIbGuideLanguage(){ 
  // Legacy compatibility: the current page uses the dedicated Change IB tutorial below.
}

function openIbGuide(btn){
  pendingIb=btn;
  if(!ibModal) return openIbWhatsapp(btn);
  ibModal.classList.add("open");
  ibModal.setAttribute("aria-hidden","false");
  document.body.classList.add("ib-modal-open");
}

function closeIbGuide(){
  if(!ibModal)return;
  ibModal.classList.remove("open");
  ibModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("ib-modal-open");
  pendingIb=null;
}

function openIbWhatsapp(btn){
  const broker=btn?.dataset.broker||"the selected broker",ibUrl=btn?.dataset.ibUrl||"",number=String(CONFIG.whatsappNumber||"").replace(/\D/g,"");
  const text=`Hello SR Empire Admin,

I would like to register with ${broker} through the SR Empire IB. Please assist me with the correct registration procedure and confirm the applicable IB details.

IB Registration Link: ${ibUrl}

I understand that account conditions and requirements may vary by region and account type. Please share the relevant details before I proceed.

Thank you for your assistance.`;
  if(!number){toast("Admin WhatsApp number is not configured.");return;}
  const popup=window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`,"_blank","noopener,noreferrer");
  if(!popup)toast("WhatsApp could not be opened.");
}

document.querySelectorAll(".broker-wa-btn").forEach(btn=>btn.addEventListener("click",e=>{e.preventDefault();openIbGuide(btn);}));
document.querySelectorAll("[data-ib-close]").forEach(el=>el.addEventListener("click",closeIbGuide));
if(ibContinue)ibContinue.addEventListener("click",()=>{const btn=pendingIb;closeIbGuide();if(btn)openIbWhatsapp(btn);});

function openChangeIbTutorial(){
  if(!changeIbModal)return;
  changeIbModal.classList.add("open");
  changeIbModal.setAttribute("aria-hidden","false");
  document.body.classList.add("ib-modal-open");
}
function closeChangeIbTutorial(){
  if(!changeIbModal)return;
  changeIbModal.classList.remove("open");
  changeIbModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("ib-modal-open");
}
$("#changeIbTutorialBtn")?.addEventListener("click",openChangeIbTutorial);
document.querySelectorAll("[data-change-ib-close]").forEach(el=>el.addEventListener("click",closeChangeIbTutorial));

document.querySelector("[data-copy-ib]")?.addEventListener("click",async()=>{
  const value=changeIbMessage?.textContent?.trim()||"";
  try{
    await navigator.clipboard.writeText(value);
    const btn=document.querySelector("[data-copy-ib]");
    if(btn){const old=btn.textContent;btn.textContent="Copied ✓";setTimeout(()=>btn.textContent=old,1800);}
    toast("Change IB message copied.");
  }catch(e){
    toast("Copy is unavailable. Please select the message manually.");
  }
});

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){closeIbGuide();closeChangeIbTutorial();}
});


setHref("#adminWhatsappLink",`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello SR Empire Admin, I would like to get more information.")}`);
setHref("#brokerFallbackWhatsapp",`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello SR Empire Admin,\n\nI am unable to use Valetax and would like to know the current broker registration options available to me. Please advise me on the correct registration procedure and applicable broker details.\n\nThank you.")}`);
setHref("#ibValetaxWhatsapp",`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello SR Empire Admin,\n\nI am interested in the Valetax x SR Empire IB opportunity and would like to get the latest WhatsApp group access and IB registration instructions.\n\nThank you.")}`);

const registerForm=$("#registerForm");
if(registerForm)registerForm.addEventListener("submit",e=>{
  e.preventDefault();
  const fields={name:$("#name").value.trim(),phone:$("#phone").value.trim(),email:$("#email").value.trim(),
    course:$("#course")?.value.trim()||"Direct Coaching",message:$("#message")?.value.trim()||""};
  if(!fields.name||!fields.phone){toast("Please complete your name and WhatsApp / phone number.");return;}
  const text=`SR EMPIRE DIRECT COACHING REGISTRATION

Program: 4 Beradik Technique
Date: 13/10/2026 (Tuesday)
Location: Kajang
Fee: RM950

Name: ${fields.name}
WhatsApp / Phone: ${fields.phone}
Email: ${fields.email||"-"}
Trading Goals / Notes: ${fields.message||"-"}

Please confirm the latest venue details with the admin after registration.`;
  const number=String(CONFIG.whatsappNumber||"").replace(/\D/g,"");
  if(!number){toast("WhatsApp number is not configured.");return;}
  const popup=window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`,"_blank");
  if(!popup){toast("WhatsApp popup was blocked. Please allow popups and try again.");return;}
  toast("Registration ready. WhatsApp will open.");
});

const gpsBtn=$("#gpsBtn");
if(gpsBtn)gpsBtn.addEventListener("click",()=>{
  if(!navigator.geolocation){toast("GPS is not supported by this browser.");return;}
  navigator.geolocation.getCurrentPosition(pos=>{
    const lat=pos.coords.latitude.toFixed(6),lng=pos.coords.longitude.toFixed(6);
    window.open(`https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${CONFIG.latitude},${CONFIG.longitude}`,"_blank");
  },()=>toast("GPS permission was denied or the location is unavailable."));
});

document.querySelectorAll('a[href="#daftar"]').forEach(link=>link.addEventListener("click",e=>{
  const target=document.getElementById("daftar");if(!target)return;e.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"});history.replaceState(null,"","#daftar");
}));
