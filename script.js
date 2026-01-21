(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const byId = (id) => document.getElementById(id);

  // ÇEVİRİLER
  const translations = {
    en: {
      'nav-about': 'About',
      'nav-fields': 'My Fields',
      'footer-dev': 'Software Portfolio',
      'nav-resume': 'Resume',
      'nav-contact': 'Contact Me',

      'hero-title': 'Hello, I am Enes',
      'btn-fields': 'View My Fields',
      'btn-cv-top': 'Download CV',

      'about-title': 'Who am I?',
      'about-role': 'Mechatronics Engineer',
      'about-text':
        "I am a senior Mechatronics Engineering student focusing on developing myself in software, robotics, and automation. During my university education, I reinforced my theoretical knowledge with projects by working on Python, Flutter, C#, and PLC-based systems. Industrial robots, swarm robotics systems, and automation are among my primary interests. As someone who is open to learning, thinks analytically, and aims for continuous self-improvement, I strive to create value by taking part in projects focused on mechatronics, robotics, and software.",
      'chip-dev': 'Software Portfolio',

      'fields-title': 'My Fields',
      'field-python': 'Python Programming',
      'field-mobile': 'Mobile Programming',
      'field-plc': 'PLC Programming',
      'field-cad': 'CAD/CAM',
      'field-robotics': 'Robotics',
      'field-embedded': 'Embedded Systems',

      'field-python-content': 'I develop scalable software and simulation systems for robotics, data processing, and engineering applications using Python. I work on numerical analysis, 3D data processing, and algorithm development with libraries like NumPy, SciPy, and Open3D; and design professional database-supported desktop applications using PyQt and PySide.',
      'field-mobile-content': 'I develop cross-platform mobile applications for iOS and Android using Flutter. I create modern user interfaces by prioritizing performance, usability, and clean design in technical and engineering projects.',
      'field-plc-content': 'I develop industrial automation, process control, and machine software in TIA Portal environments using Siemens PLCs. I also create virtual factory and production line simulations using Factory I/O to test and validate automation scenarios before moving to real systems.',
      'field-cad-content': 'I can create 3D drawings, surface and solid models of mechanical parts and systems using SolidWorks, CATIA, and Mastercam. I prepare functional and readable designs by focusing on dimensioning, technical drawing standards, assembly relationships, and design details.',
      'field-robotics-content': 'I work on mechanical structure, kinematic modeling, and motion analysis in robotic systems. I analyze the workspace and movement capabilities of robots with forward and inverse kinematic calculations and visualize them in simulation environments.',
      'field-embedded-content': 'I develop solutions that handle hardware and software together in Arduino-based embedded systems. I work on real-time control, automation, and robotics applications with sensors, actuators, and communication protocols.',

      'resume-title': 'My Resume',
      'resume-text':
        'To learn more about my experience and qualifications, download my CV which includes detailed project history and technical skills.',
      'btn-cv-bottom': 'Download My CV',
      'btn-cv-preview': 'Preview CV',

      'contact-title': 'Contact',
      'contact-text': "Let’s get in touch!",

      'footer-copy': '© 2025 Created by Enes Ugur\nAll Rights Reserved',
      'footer-home': 'Home',
      'footer-about': 'About',
      'footer-fields': 'My Fields',
      'footer-resume': 'Resume'
    },

    tr: {
      'nav-about': 'Hakkımda',
      'nav-fields': 'Alanlarım',
      'footer-dev': 'Yazılım Portföyü',
      'nav-resume': 'Özgeçmiş',
      'nav-contact': 'İletişime Geç',

      'hero-title': 'Merhaba, ben Enes',
      'btn-fields': 'Alanlarımı Gör',
      'btn-cv-top': 'CV İndir',

      'about-title': 'Ben kimim?',
      'about-role': 'Mekatronik Mühendisi',
      'about-text':
        'Mekatronik Mühendisliği son sınıf öğrencisiyim. Yazılım, robotik ve otomasyon alanlarında kendimi geliştirmeye odaklanıyorum. Üniversite eğitimim süresince Python, Flutter, C# ve PLC tabanlı sistemler üzerine çalışarak teorik bilgimi projelerle pekiştirdim. Endüstriyel robotlar, sürü robotik sistemler ve otomasyon ilgi duyduğum başlıca alanlar arasında yer alıyor. Öğrenmeye açık, analitik düşünen ve sürekli kendini geliştirmeyi hedefleyen biri olarak; mekatronik, robotik ve yazılım odaklı projelerde yer alarak katma değer üretmeyi amaçlıyorum.',
      'chip-dev': 'Yazılım Portföyü',

      'fields-title': 'Alanlarım',
      'field-python': 'Python Programlama',
      'field-mobile': 'Mobil Programlama',
      'field-plc': 'PLC Programlama',
      'field-cad': 'CAD/CAM',
      'field-robotics': 'Robotik',
      'field-embedded': 'Gömülü Sistemler',

      'field-python-content': 'Python ile robotik, veri işleme ve mühendislik uygulamaları için ölçeklenebilir yazılımlar ve simülasyon sistemleri geliştiriyorum. NumPy, SciPy ve Open3D gibi kütüphanelerle sayısal analiz, 3D veri işleme ve algoritma geliştirme üzerine çalışıyor; PyQt ve PySide kullanarak veri tabanı destekli profesyonel masaüstü uygulamaları tasarlıyorum.',
      'field-mobile-content': 'Flutter kullanarak iOS ve Android platformları için tek kod tabanlı mobil uygulamalar geliştiriyorum. Teknik ve mühendislik projelerinde performans, kullanılabilirlik ve sade tasarımı ön planda tutarak modern kullanıcı arayüzleri oluşturuyorum.',
      'field-plc-content': 'Siemens PLC’ler ile TIA Portal ortamında endüstriyel otomasyon, proses kontrolü ve makine yazılımları geliştiriyorum. Aynı zamanda Factory I/O kullanarak sanal fabrika ve üretim hattı simülasyonları oluşturuyor; otomasyon senaryolarını gerçek sisteme geçmeden önce test ve doğrulama imkânı sağlıyorum.',
      'field-cad-content': 'SolidWorks, CATIA, Mastercam kullanarak mekanik parçaların ve sistemlerin 3D çizimlerini, yüzey ve katı modellerini oluşturabiliyorum. Ölçülendirme, teknik resim standartları, montaj ilişkileri ve tasarım detaylarına odaklanarak fonksiyonel ve okunabilir tasarımlar hazırlıyorum.',
      'field-robotics-content': 'Robotik sistemlerde mekanik yapı, kinematik modelleme ve hareket analizi üzerine çalışıyorum. İleri ve ters kinematik hesaplamalar ile robotların çalışma uzayını ve hareket kabiliyetlerini analiz ediyor simülasyon ortamında görselleştiriyorum. Gerçek sisteme geçmeden önce hareket doğrulama, çarpışma farkındalığı ve kontrol senaryolarının test edilmesine odaklanıyorum.',
      'field-embedded-content': 'Arduino tabanlı gömülü sistemlerde donanım ve yazılımı birlikte ele alan çözümler geliştiriyorum. Sensörler, aktüatörler ve haberleşme protokolleri ile gerçek zamanlı kontrol, otomasyon ve robotik uygulamalar üzerinde çalışıyorum.',

      'resume-title': 'Özgeçmişim',
      'resume-text':
        'Deneyimlerim ve yetkinliklerim hakkında daha fazla bilgi edinmek için; projelerimi ve teknik becerilerimi içeren CV\'mi indirebilirsiniz.',
      'btn-cv-bottom': 'CV\'mi İndir',
      'btn-cv-preview': 'Önizle',

      'contact-title': 'İletişim',
      'contact-text': 'Benimle iletişime geç!',

      'footer-copy': '© 2025 Enes Uğur\nTüm hakları saklıdır',
      'footer-home': 'Ana Sayfa',
      'footer-about': 'Hakkımda',
      'footer-fields': 'Alanlarım',
      'footer-resume': 'Özgeçmiş'
    }
  };

  const typewriterPhrases = {
    en: ['Mechatronics Engineer', 'Software Developer'],
    tr: ['Mekatronik Mühendisi', 'Yazılım Geliştirici']
  };

  let currentLang = localStorage.getItem('lang') || 'en';

  function applyTranslations(lang) {
    const map = translations[lang];
    if (!map) return;
    Object.entries(map).forEach(([id, text]) => {
      const el = byId(id);
      if (!el) return;
      if (id === 'footer-copy') {
        el.innerHTML = text.replace('\n', '<br>');
      } else {
        el.textContent = text;
      }
    });
    document.documentElement.lang = lang;
  }

  function setupLanguageSwitch() {
    const buttons = $$('.lang-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (!lang || lang === currentLang) return;
        currentLang = lang;
        buttons.forEach((b) => b.classList.toggle('lang-active', b === btn));
        applyTranslations(lang);
        localStorage.setItem('lang', lang);
      });
    });
    applyTranslations(currentLang);
    buttons.forEach((b) => b.classList.toggle('lang-active', b.getAttribute('data-lang') === currentLang));

  }

  // Yıl
  const yEl = byId('y');
  if (yEl) yEl.textContent = new Date().getFullYear();

  // Mobil menü
  const btn = byId('menuBtn');
  const menu = byId('menu');
  btn?.addEventListener('click', () => menu?.classList.toggle('open'));

  // Smooth scroll
  const supportsSmooth = 'scrollBehavior' in document.documentElement.style;
  const header = $('.header');
  const getOffset = () => (header ? header.offsetHeight : 0);
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - getOffset();
      supportsSmooth
        ? window.scrollTo({ top, behavior: 'smooth' })
        : window.scrollTo(0, top);
      menu?.classList.remove('open');
    });
  });

  // Typewriter
  const twEl = byId('typewriter');
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (twEl && !reduceMotion) {
    let p = 0, i = 0, typing = true;
    const typeDelay = 65;
    const eraseDelay = 35;
    const holdAfterType = 1200;
    const holdAfterErase = 400;

    const tick = () => {
      const phrases = typewriterPhrases[currentLang];
      const text = phrases[p % phrases.length];

      if (typing) {
        twEl.textContent = text.slice(0, ++i);
        if (i === text.length) {
          typing = false;
          return setTimeout(tick, holdAfterType);
        }
        return setTimeout(tick, typeDelay);
      } else {
        twEl.textContent = text.slice(0, --i);
        if (i === 0) {
          typing = true;
          p = (p + 1) % phrases.length;
          return setTimeout(tick, holdAfterErase);
        }
        return setTimeout(tick, eraseDelay);
      }
    };
    tick();
  }

  // CV Modal
  const modal = byId('cv-modal');
  const btnPreview = byId('btn-cv-preview');
  const span = $('.close-modal');

  if (btnPreview && modal && span) {
    btnPreview.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Disable scroll
    });

    span.addEventListener('click', () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scroll
    });

    window.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }

  setupLanguageSwitch();
})();
