(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const byId = (id) => document.getElementById(id);

  // ÇEVİRİLER
  const translations = {
    en: {
      'nav-about': 'About',
      'nav-fields': 'My Fields',
      'nav-resume': 'Resume',
      'nav-contact': 'Contact Me',

      'hero-title': 'Hello, I am Enes',
      'btn-fields': 'View My Fields',
      'btn-cv-top': 'Download CV',

      'about-title': 'Who am I?',
      'about-role': 'Mechatronics Engineer',
      'about-text':
        "I'm Enes, a senior Mechatronics Engineering student with a passion for robotics, automation, and software development. I'll be graduating in 2026. My interests include software-focused projects. From robotic arm simulations to embedded systems, I enjoy creating practical and innovative solutions and constantly learning about new technologies shaping the future of automation.",

      'fields-title': 'My Fields',
      'field-python': 'Python Programming',
      'field-mobile': 'Mobile Programming',
      'field-plc': 'PLC Programming',
      'field-cad': 'CAD/CAM',
      'field-robotics': 'Robotics',
      'field-embedded': 'Embedded Systems',

      'field-python-content': 'I develop algorithms, simulation tools, and automation scripts using libraries such as NumPy, SciPy, and Open3D for robotics, data analysis, and system modeling. I also develop database operations and desktop applications using PyQt and PySide.',
      'field-mobile-content': 'Designing and developing cross-platform mobile applications with Flutter. Focused on creating efficient, modern, and user-friendly interfaces for engineering and productivity tools.',
      'field-plc-content': 'Programming industrial automation systems with Siemens PLCs using TIA Portal. Experienced in ladder logic (LAD) and structured control for process control and factory automation.',
      'field-cad-content': 'Creating 3D mechanical designs, assemblies, and manufacturing simulations using SolidWorks, CATIA, and Mastercam. Combining design precision with manufacturability.',
      'field-robotics-content': 'Designing and simulating robotic systems with a focus on kinematics, control, and automation. Experienced in building URDF models, forward/inverse kinematics, and motion visualization.',
      'field-embedded-content': 'Designing and programming embedded systems using Arduino microcontrollers. Focused on sensor integration, real-time control, and communication between hardware and software layers for automation and robotics applications.',

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
      'nav-resume': 'Özgeçmiş',
      'nav-contact': 'İletişime Geç',

      'hero-title': 'Merhaba, ben Enes',
      'btn-fields': 'Alanlarımı Gör',
      'btn-cv-top': 'CV İndir',

      'about-title': 'Ben kimim?',
      'about-role': 'Mekatronik Mühendisi',
      'about-text':
        'Ben Enes, robotik, otomasyon ve yazılım geliştirme alanlarına ilgi duyan son sınıf Mekatronik Mühendisliği öğrencisiyim. 2026 yılında mezun olacağım. İlgi alanlarım ağırlıklı olarak yazılım odaklı projeler. Robot kol simülasyonlarından gömülü sistemlere kadar pratik ve yenilikçi çözümler üretmeyi seviyor, otomasyonun geleceğini şekillendiren yeni teknolojileri öğrenmeye devam ediyorum.',

      'fields-title': 'Alanlarım',
      'field-python': 'Python Programlama',
      'field-mobile': 'Mobil Programlama',
      'field-plc': 'PLC Programlama',
      'field-cad': 'CAD/CAM',
      'field-robotics': 'Robotik',
      'field-embedded': 'Gömülü Sistemler',

      'field-python-content': 'NumPy, SciPy ve Open3D gibi kütüphaneleri kullanarak robotik, veri analizi ve sistem modelleme için algoritmalar, simülasyon araçları ve otomasyon komut dosyaları geliştiriyorum. Ayrıca PyQt ve PySide kullanarak veritabanı işlemleri ve masaüstü uygulamaları geliştiriyorum.',
      'field-mobile-content': 'Flutter ile çapraz platform mobil uygulamalar tasarlamak ve geliştirmek. Mühendislik ve üretkenlik araçları için verimli, modern ve kullanıcı dostu arayüzler oluşturmaya odaklanmak.',
      'field-plc-content': 'TIA Portal kullanarak Siemens PLC\'lerle endüstriyel otomasyon sistemleri programlıyorum. Proses kontrolü ve fabrika otomasyonu için ladder mantığı (LAD) ve yapılandırılmış kontrol konusunda deneyimliyim.',
      'field-cad-content': 'SolidWorks, CATIA ve Mastercam kullanarak 3D mekanik tasarımlar, montajlar ve üretim simülasyonları oluşturmak. Tasarım hassasiyetini üretilebilirlikle birleştirmek.',
      'field-robotics-content': 'Kinematik, kontrol ve otomasyona odaklanarak robotik sistemlerin tasarımı ve simülasyonu. URDF modelleri, ileri/ters kinematik ve hareket görselleştirme konusunda deneyimli.',
      'field-embedded-content': 'Arduino mikrodenetleyicileri kullanarak gömülü sistemlerin tasarımı ve programlanması. Sensör entegrasyonu, otomasyon ve robotik uygulamaları için gerçek zamanlı kontrol ve donanım ile yazılım katmanları arasındaki iletişime odaklanılmıştır.',

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
