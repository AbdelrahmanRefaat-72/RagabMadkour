/* ==========================================================================
   RAGAB MADKOUR ABD ELKADER - SENIOR GENERAL SITE SUPERVISOR PORTFOLIO
   Interactive Client-side JavaScript (Theme Toggle & i18n Translation)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------------------
       1. TRANSLATION DICTIONARY (EN / AR)
       ---------------------------------------------------------------------- */
    const translations = {
        en: {
            logo_title: "SITE SUPERVISOR",
            nav_home: "Home",
            nav_about: "About",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_experience: "Experience",
            nav_services: "Services",
            nav_contact: "Contact",
            nav_get_in_touch: "Get In Touch",
            hero_role: "Senior General Site Supervisor",
            hero_name_first: "Ragab Madkour",
            hero_name_last: "Abd Elkader",
            hero_subtitle: "Experienced construction professional with more than <strong>20 years of expertise</strong> in supervising large-scale commercial, residential, industrial, hospitality, and infrastructure developments. Specialized in site execution, quality assurance, contractor coordination, and successful project delivery.",
            btn_projects: "View Projects",
            btn_contact: "Contact Me",
            stat_exp: "Years Experience",
            stat_projects: "Major Projects",
            stat_companies: "Leading Companies",
            stat_quality: "Quality Commitment",
            status_title: "Available for Supervision & Consulting",
            status_loc: "Maadi, Cairo, Egypt",

            about_subtitle: "Background & Philosophy",
            about_title_1: "About",
            about_title_2: "Me",
            about_card1_title: "Professional Background",
            about_card1_body: "I am a highly experienced General Site Supervisor with a proven track record of managing complex construction projects from planning through completion. Throughout my career, I have contributed to landmark developments including refineries, airports, luxury hotels, hospitals, residential compounds, mixed-use developments, and commercial facilities.",
            about_card2_title: "Core Philosophy",
            about_card2_body: "My professional philosophy is built on quality, safety, efficiency, and teamwork. I focus on coordinating multidisciplinary teams, ensuring compliance with engineering standards, resolving site challenges, and maintaining project timelines while delivering exceptional construction quality. With more than two decades of field experience, I bring strong leadership, technical expertise, and practical problem-solving skills to every project.",
            chip_edu_title: "Education",
            chip_edu_desc: "Bachelor of Social Work, Cairo University (2001)",
            chip_lang_title: "Languages",
            chip_lang_desc: "Arabic (Native) | English (Professional Working)",
            chip_loc_title: "Location",
            chip_loc_desc: "Maadi, Cairo, Egypt",
            chip_spec_title: "Specialization",
            chip_spec_desc: "Civil & Structural Supervision, Mega Projects",

            skills_subtitle: "Technical Capabilities",
            skills_title_1: "Skills &",
            skills_title_2: "Expertise",
            skill_cat1_title: "Site Management",
            skill_1_1: "Site Supervision",
            skill_1_2: "Construction Management",
            skill_1_3: "Project Coordination",
            skill_1_4: "Contractor Management",
            skill_1_5: "Site Inspection",
            skill_cat2_title: "Engineering & Construction",
            skill_2_1: "Civil Construction",
            skill_2_2: "Structural Works",
            skill_2_3: "Finishing Works",
            skill_2_4: "Quality Assurance (QA)",
            skill_2_5: "Quality Control (QC)",
            skill_2_6: "Technical Drawings Interpretation",
            skill_cat3_title: "Project Operations",
            skill_3_1: "Workforce Management",
            skill_3_2: "Progress Monitoring",
            skill_3_3: "Safety Compliance (HSE)",
            skill_3_4: "Scheduling Coordination",
            skill_3_5: "Reporting & Documentation",
            skill_cat4_title: "Software & Tools",

            projects_subtitle: "Portfolio Highlights",
            projects_title_1: "Featured",
            projects_title_2: "Projects",
            tag_res: "Residential",
            tag_comm: "Commercial",
            tag_ind: "Industrial",
            tag_mix: "Mixed-Use",
            tag_infra: "Infrastructure",
            proj1_title: "1. CityGate Development",
            proj1_desc: "Large-scale residential development project for Qatari Diar involving construction supervision, contractor management, and quality assurance.",
            proj2_title: "2. AUC Mall Project",
            proj2_desc: "Managed site operations and execution activities for a major commercial development while maintaining quality and schedule objectives.",
            proj3_title: "3. Egypt Refinery Company (ERC)",
            proj3_desc: "Participated in one of Egypt’s largest refinery projects with responsibility for construction supervision and multidisciplinary coordination.",
            proj4_title: "4. Cairo Festival City",
            proj4_desc: "Contributed to the successful execution of one of Egypt’s leading mixed-use developments.",
            proj5_title: "5. Cairo Airport Terminal 3",
            proj5_desc: "Participated in site supervision activities for one of Egypt’s most important infrastructure projects.",
            role_supervisor: "General Site Supervisor",
            btn_details: "Details",
            add_proj_title: "Additional Major Projects",
            add_proj_sub: "Other landmark developments supervised across 20+ years of site leadership:",

            exp_subtitle: "Career Journey",
            exp_title_1: "Work",
            exp_title_2: "Experience",
            exp1_job: "General Site Supervisor",
            exp1_date: "Sep 2025 – Present",
            exp1_r1: "Supervising CityGate Development project.",
            exp1_r2: "Coordinating contractors and consultants.",
            exp1_r3: "Monitoring quality standards and progress.",
            exp2_job: "General Site Supervisor",
            exp2_r1: "Managed large residential development projects.",
            exp2_r2: "Supervised construction execution activities.",
            exp2_r3: "Ensured compliance with engineering specifications.",
            exp3_job: "General Site Supervisor",
            exp3_r1: "Oversaw site operations and project execution.",
            exp3_r2: "Coordinated consultants and contractors.",
            exp3_r3: "Maintained project quality objectives.",
            exp4_job: "General Site Supervisor",
            exp4_r1: "Led supervision activities for AUC Mall Project.",
            exp4_r2: "Coordinated subcontractors.",
            exp4_r3: "Ensured compliance with technical requirements.",

            services_subtitle: "What I Provide",
            services_title_1: "Professional",
            services_title_2: "Services",
            serv1_title: "Construction Site Supervision",
            serv1_desc: "Comprehensive field supervision of ongoing construction activities to ensure execution matches architectural and civil blueprints with highest safety standards.",
            serv2_title: "Finishing Works Management",
            serv2_desc: "Specialized management and inspection of high-end finishing works, interior fitting, architectural details, and final handover compliance.",
            serv3_title: "Quality Control & Inspection",
            serv3_desc: "Rigorous QA/QC inspections, material verification, testing oversight, and structural compliance checks to prevent costly re-work.",
            serv4_title: "Project Coordination",
            serv4_desc: "Seamless communication bridge between consultants, main contractors, subcontractors, and client representatives to maintain schedule alignment.",
            serv5_title: "Construction Consulting",
            serv5_desc: "Expert field consulting on site problem-solving, construction methodology optimization, safety protocol auditing, and workforce efficiency.",

            obj_tag: "Career Objective",
            obj_quote: "\"To contribute my extensive construction and site management experience to ambitious projects that demand excellence, quality, and operational efficiency while continuing to lead teams that deliver safe, sustainable, and high-performing developments.\"",
            author_name: "Ragab Madkour Abd Elkader",

            contact_subtitle: "Get In Touch",
            contact_title_1: "Contact",
            contact_title_2: "Information",
            contact_card_title: "Reach Out Directly",
            contact_card_sub: "Feel free to reach out for site supervision roles, construction consulting, or technical inquiries.",
            lbl_phone: "Phone Call / WhatsApp",
            lbl_email1: "Primary Email",
            lbl_email2: "Alternative Email",
            lbl_loc: "Location",
            val_loc: "Maadi, Cairo, Egypt",
            social_title: "Connect via Social Networks:",
            form_title: "Send a Message",
            form_lbl_name: "Your Full Name *",
            ph_name: "e.g. Eng. Ahmed Hassan",
            err_name: "Please enter your name.",
            form_lbl_email: "Email Address *",
            ph_email: "e.g. name@company.com",
            err_email: "Please enter a valid email address.",
            form_lbl_subject: "Project / Inquiry Subject *",
            ph_subject: "e.g. Site Supervision Consultation",
            err_subject: "Please specify a subject.",
            form_lbl_msg: "Message Details *",
            ph_msg: "Describe your project scope, location, or inquiry...",
            err_msg: "Please enter your message.",
            btn_send: "Send Message",
            footer_sub: "20+ Years of Construction Leadership & Site Execution Excellence.",
            footer_copy: "Copyright © 2026",
            footer_rights: "All Rights Reserved."
        },
        ar: {
            logo_title: "مشرف عام موقع أول",
            nav_home: "الرئيسية",
            nav_about: "نبذة عني",
            nav_skills: "المهارات",
            nav_projects: "المشاريع",
            nav_experience: "الخبرات",
            nav_services: "الخدمات",
            nav_contact: "اتصل بي",
            nav_get_in_touch: "تواصل معي",
            hero_role: "مشرف عام موقع أول",
            hero_name_first: "رجب مدكور",
            hero_name_last: "عبد القادر",
            hero_subtitle: "خبير ومقاول تنفيذي يمتلك أكثر من <strong>20 عاماً من الخبرة</strong> الميدانية في الإشراف على كبرى المشروعات التجارية والسكنية والصناعية والسياحية والبنية التحتية. متخصص في التنفيذ الميداني وضمان الجودة وتنسيق المقاولين وإدارة المشروعات الناجحة.",
            btn_projects: "عرض المشاريع",
            btn_contact: "تواصل معي",
            stat_exp: "سنة خبرة",
            stat_projects: "مشروع رئيسي",
            stat_companies: "شركة رائدة",
            stat_quality: "التزام بالجودة",
            status_title: "متاح للاستشارات والإشراف الميداني",
            status_loc: "المعادي، القاهرة، مصر",

            about_subtitle: "الخلفية والفلسفة المهنية",
            about_title_1: "نبذة",
            about_title_2: "عني",
            about_card1_title: "الخلفية المهنية",
            about_card1_body: "أنا مشرف عام موقع يمتلك سجلاً حافلاً بالنجاحات في إدارة وتنفيذ مشروعات البناء المعقدة بدءاً من مرحلة التخطيط وحتى التسليم النهائي. على مدار مسيرتي المهنية، شاركت في تنفيذ العديد من المشاريع القومية والعملاقة مثل مصافي النفط، والمطارات، الفنادق الفاخرة، المستشفيات، المجمعات السكنية، والمراكز التجارية.",
            about_card2_title: "الفلسفة المهنية",
            about_card2_body: "ترتكز فلسفتي المهنية على الجودة، السلامة، الكفاءة، والعمل الجماعي. أركز على إدارة وتنسيق فرق العمل متعددة التخصصات، وضمان الالتزام الدقيق بالمعايير الهندسية، وحل المشكلات الميدانية، والحفاظ على الجداول الزمنية مع تحقيق أعلى مستويات جودة التنفيذ.",
            chip_edu_title: "المؤهل الدراسي",
            chip_edu_desc: "بكالوريوس خدمة اجتماعية - جامعة القاهرة (2001)",
            chip_lang_title: "اللغات",
            chip_lang_desc: "العربية (اللغة الأم) | الإنجليزية (مستوى عملي ممتاز)",
            chip_loc_title: "الموقع",
            chip_loc_desc: "المعادي، القاهرة، مصر",
            chip_spec_title: "التخصص",
            chip_spec_desc: "إشراف تنفيذي وهيكلي للمشاريع العملاقة",

            skills_subtitle: "القدرات الفنية والإنشائية",
            skills_title_1: "المهارات و",
            skills_title_2: "الخبرات",
            skill_cat1_title: "إدارة الموقع",
            skill_1_1: "الإشراف على الموقع",
            skill_1_2: "إدارة الأعمال الإنشائية",
            skill_1_3: "التنسيق بين أطراف المشروع",
            skill_1_4: "إدارة المقاولين والاستشاريين",
            skill_1_5: "الفحص والمعاينة الميدانية",
            skill_cat2_title: "الهندسة والإنشاءات",
            skill_2_1: "الإنشاءات المدنية",
            skill_2_2: "الأعمال الهيكلية والخرسانات",
            skill_2_3: "أعمال التشطيبات الفاخرة",
            skill_2_4: "توكيد الجودة (QA)",
            skill_2_5: "ضبط الجودة (QC)",
            skill_2_6: "قراءة وقراءة المخططات الفنية",
            skill_cat3_title: "عمليات تشغيل المشروع",
            skill_3_1: "إدارة العمالة والفنيين",
            skill_3_2: "متابعة معدلات الإنجاز",
            skill_3_3: "الالتزام بمعايير السلامة والصحة المهنية",
            skill_3_4: "تنسيق الجداول الزمنية",
            skill_3_5: "إعداد التقارير والتوثيق الميداني",
            skill_cat4_title: "البرامج والأدوات",

            projects_subtitle: "معرض الأعمال والنجاحات",
            projects_title_1: "أبرز",
            projects_title_2: "المشاريع",
            tag_res: "سكني",
            tag_comm: "تجاري",
            tag_ind: "صناعي",
            tag_mix: "متعدد الاستخدامات",
            tag_infra: "بنية تحتية",
            proj1_title: "1. مشروع سيتي جيت (CityGate)",
            proj1_desc: "مشروع سكني فاخر وضخم لصالح شركة قطري ديار، يتضمن الإشراف التنفيذي الكامل، وإدارة المقاولين، وضمان الجودة.",
            proj2_title: "2. مشروع مول الجامعة الأمريكية (AUC Mall)",
            proj2_desc: "إدارة العمليات الميدانية والتنفيذية لمركز تجاري رئيسي مع الحفاظ على أعلى معايير الجودة والجداول الزمنية.",
            proj3_title: "3. الشركة المصرية للتكرير (ERC)",
            proj3_desc: "المشاركة في إشراف وتنفيذ واحد من أكبر مشاريع مصافي النفط في مصر مع التنسيق بين التخصصات المختلفة.",
            proj4_title: "4. مشروع كايرو فيستيفال سيتي (CFC)",
            proj4_desc: "المساهمة في تنفيذ واحد من أبرز وأهم المشاريع متعددة الاستخدامات والمراكز التجارية والسكينة بمصر.",
            proj5_title: "5. مبنى الركاب رقم 3 بمطار القاهرة",
            proj5_desc: "المشاركة في أعمال الإشراف الميداني لواحد من أهم مشاريع البنية التحتية والمطارات بمصر.",
            role_supervisor: "مشرف عام موقع",
            btn_details: "التفاصيل",
            add_proj_title: "سجل المشاريع الكبرى الإضافية",
            add_proj_sub: "مشاريع عملاقة أخرى تم الإشراف عليها خلال أكثر من 20 عاماً من القيادة الميدانية:",

            exp_subtitle: "المسيرة المهنية",
            exp_title_1: "الخبرة",
            exp_title_2: "العملية",
            exp1_job: "مشرف عام موقع",
            exp1_date: "سبتمبر 2025 – حتى الآن",
            exp1_r1: "الإشراف الميداني على مشروع سيتي جيت (CityGate).",
            exp1_r2: "التنسيق بين الاستشاريين والمقاولين في الموقع.",
            exp1_r3: "متابعة معايير الجودة ومعدلات التقدم الميداني.",
            exp2_job: "مشرف عام موقع",
            exp2_r1: "إدارة المشروعات السكنية الكبرى.",
            exp2_r2: "الإشراف على أنشطة التنفيذ والبناء في الموقع.",
            exp2_r3: "ضمان المطابقة الكاملة للمواصفات الهندسية.",
            exp3_job: "مشرف عام موقع",
            exp3_r1: "متابعة عمليات الموقع وتنفيذ الأعمال.",
            exp3_r2: "التنسيق بين المقاولين والاستشاريين.",
            exp3_r3: "الحفاظ على أهداف الجودة والخطة الزمنية للمشروع.",
            exp4_job: "مشرف عام موقع",
            exp4_r1: "قيادة أعمال الإشراف لمشروع مول الجامعة الأمريكية AUC Mall.",
            exp4_r2: "تنسيق وتوجيه مقاولي الباطن.",
            exp4_r3: "التأكد من الالتزام بكافة المتطلبات الفنية.",

            services_subtitle: "ما أقدمه لك",
            services_title_1: "الخدمات",
            services_title_2: "المهنية",
            serv1_title: "الإشراف على مواقع البناء",
            serv1_desc: "إشراف ميداني شامل ومتكامل على أعمال البناء للتأكد من مطابقتها للتصاميم المعمارية والإنشائية مع تطبيق أعلى معايير السلامة.",
            serv2_title: "إدارة أعمال التشطيبات",
            serv2_desc: "إدارة متخصصة وتدقيق دقيق لأعمال التشطيبات الفاخرة، الديكورات، التجهيزات الداخلية، والتسليم الابتدائي والنهائي.",
            serv3_title: "ضبط وضمان الجودة (QA/QC)",
            serv3_desc: "فحوصات دقيقة للجودة، وااختبار المواد الموردة، والإشراف على الاختبارات الهيكلية لمنع الأخطاء والتكاليف الإضافية.",
            serv4_title: "التنسيق وإدارة المشروعات",
            serv4_desc: "ربط وتنسيق سلس بين الاستشاريين، المقاولين الرئيسيين، مقاولي الباطن، وممثلي المالك لضمان سير العمل بانتظام.",
            serv5_title: "الاستشارات الهندسية الميدانية",
            serv5_desc: "تقديم استشارات ميدانية لحل المشكلات المعقدة، وتحسين أساليب التنفيذ، ومراجعة إجراءات السلامة، وزيادة كفاءة العمالة.",

            obj_tag: "الهدف المهني",
            obj_quote: "\"المساهمة بخبرتي الميدانية الطويلة في إدارة وإشراف كبرى مشاريع البناء التي تتطلب التميز والجودة والكفاءة التشغيلية، مع مواصلة قيادة الفرق الميدانية لتقديم مشاريع آمنة ومستدامة عالية الأداء.\"",
            author_name: "رجب مدكور عبد القادر",

            contact_subtitle: "تواصل معي",
            contact_title_1: "بيانات",
            contact_title_2: "الاتصال",
            contact_card_title: "تواصل مباشر",
            contact_card_sub: "يسعدني التواصل معك بشأن مهام الإشراف على الموقع، الاستشارات الهندسية، أو الاستفسارات الميدانية.",
            lbl_phone: "الهاتف / واتساب",
            lbl_email1: "البريد الإلكتروني الرئيسي",
            lbl_email2: "البريد الإلكتروني البديل",
            lbl_loc: "الموقع الجغرافي",
            val_loc: "المعادي، القاهرة، مصر",
            social_title: "تابعني على شبكات التواصل الاجتماعي:",
            form_title: "أرسل رسالة",
            form_lbl_name: "الاسم بالكامل *",
            ph_name: "مثال: م. أحمد حسن",
            err_name: "يرجى كتابة الاسم بالكامل.",
            form_lbl_email: "البريد الإلكتروني *",
            ph_email: "مثال: name@company.com",
            err_email: "يرجى كتابة بريد إلكتروني صحيح.",
            form_lbl_subject: "موضوع الاستفسار *",
            ph_subject: "مثال: استشارة إشراف على موقع",
            err_subject: "يرجى تحديد موضوع الرسالة.",
            form_lbl_msg: "تفاصيل الرسالة *",
            ph_msg: "اكتب تفاصيل المشروع، الموقع، أو نوع الاستفسار...",
            err_msg: "يرجى كتابة نص الرسالة.",
            btn_send: "إرسال الرسالة",
            footer_sub: "أكثر من 20 عاماً من القيادة والتنفيذ الميداني في كبرى مشروعات البناء.",
            footer_copy: "جميع الحقوق محفوظة © 2026",
            footer_rights: "المهندس رجب مدكور عبد القادر."
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';
    const langToggleBtn = document.getElementById('langToggle');
    const langTextSpan = document.getElementById('langText');

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        if (langTextSpan) {
            langTextSpan.textContent = lang === 'ar' ? 'English' : 'عربي';
        }

        // Update all text nodes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update input placeholders
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'en' ? 'ar' : 'en';
            applyLanguage(nextLang);
        });
    }

    // Apply language on load
    applyLanguage(currentLang);

    /* ----------------------------------------------------------------------
       2. LIGHT / DARK THEME TOGGLE
       ---------------------------------------------------------------------- */
    const themeToggleBtn = document.getElementById('themeToggle');
    let currentTheme = localStorage.getItem('theme') || 'dark';

    function applyTheme(theme) {
        currentTheme = theme;
        localStorage.setItem('theme', theme);

        if (theme === 'light') {
            document.body.classList.add('light-theme');
            if (themeToggleBtn) {
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
                themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
            }
        } else {
            document.body.classList.remove('light-theme');
            if (themeToggleBtn) {
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
                themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
            }
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

    // Apply saved theme on load
    applyTheme(currentTheme);

    /* ----------------------------------------------------------------------
       3. PRELOADER & INITIALIZATION
       ---------------------------------------------------------------------- */
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 600);
        });
        setTimeout(() => {
            if (!preloader.classList.contains('hidden')) {
                preloader.classList.add('hidden');
            }
        }, 2000);
    }

    /* ----------------------------------------------------------------------
       4. SCROLL PROGRESS BAR & NAVBAR SCROLLED STATE
       ---------------------------------------------------------------------- */
    const scrollProgress = document.getElementById('scrollProgress');
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        if (scrollHeight > 0 && scrollProgress) {
            const progress = (scrollTop / scrollHeight) * 100;
            scrollProgress.style.width = `${progress}%`;
        }

        if (navbar) {
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        if (backToTopBtn) {
            if (scrollTop > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ----------------------------------------------------------------------
       5. MOBILE HAMBURGER MENU TOGGLE
       ---------------------------------------------------------------------- */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    /* ----------------------------------------------------------------------
       6. ACTIVE MENU ITEM HIGHLIGHTING ON SCROLL
       ---------------------------------------------------------------------- */
    const sections = document.querySelectorAll('section[id]');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    /* ----------------------------------------------------------------------
       7. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
       ---------------------------------------------------------------------- */
    const fadeElements = document.querySelectorAll('.fade-up');

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        };

        const fadeObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => fadeObserver.observe(el));
    } else {
        fadeElements.forEach(el => el.classList.add('visible'));
    }

    /* ----------------------------------------------------------------------
       8. ANIMATED STATISTICS COUNTERS
       ---------------------------------------------------------------------- */
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    function animateCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            const duration = 2000;
            const stepTime = 30;
            const totalSteps = duration / stepTime;
            const increment = target / totalSteps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.ceil(current);
                }
            }, stepTime);
        });
    }

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection && 'IntersectionObserver' in window) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animateCounters();
                    animated = true;
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    } else {
        animateCounters();
    }

    /* ----------------------------------------------------------------------
       9. FEATURED PROJECTS MODAL DATA & LIGHTBOX
       ---------------------------------------------------------------------- */
    const projectsModalData = {
        en: {
            'citygate': {
                title: 'CityGate Development Project',
                client: 'Qatari Diar',
                role: 'General Site Supervisor (CCC Construction)',
                image: 'images/citygate.jpg',
                description: 'CityGate is a flagship luxury multi-billion residential compound development. As General Site Supervisor, Ragab Madkour manages extensive site execution activities, supervising contractor teams, inspecting structural and finishing works, and maintaining strict QA/QC standards.',
                highlights: [
                    'Supervision of high-end residential villas and infrastructure networks.',
                    'Direct coordination between design consultants, subcontractors, and client engineers.',
                    'Enforcement of international civil engineering quality control standards.',
                    'Managing site safety protocols and workforce allocation.'
                ]
            },
            'auc-mall': {
                title: 'AUC Mall Commercial Project',
                client: 'Alshorouk Construction Company',
                role: 'General Site Supervisor',
                image: 'images/auc_mall.jpg',
                description: 'A major commercial hub development near the American University in Cairo. Supervised full-scale site operations, steel and concrete structure installation, architectural finishes, and safety compliance under compressed construction timelines.',
                highlights: [
                    'Overseeing commercial retail units, exterior glass facade installation, and MEP coordination.',
                    'Ensuring adherence to technical engineering specs and shop drawings.',
                    'Conducting daily site inspections and progress reporting to executive leadership.',
                    'Subcontractor scheduling and material delivery inspection.'
                ]
            },
            'erc-refinery': {
                title: 'Egypt Refinery Company (ERC)',
                client: 'Egypt Refinery Company',
                role: 'Construction Supervision Lead',
                image: 'images/erc_refinery.jpg',
                description: 'One of North Africa’s largest industrial megaprojects. Participated in critical construction supervision for heavy industrial steel structures, foundations, pipe racks, and safety compliance in high-risk refinery operational environments.',
                highlights: [
                    'Industrial civil works supervision and heavy equipment foundation inspection.',
                    'Multidisciplinary team coordination across civil, mechanical, and electrical trades.',
                    'Rigorous adherence to strict HSE oil & gas safety standards.',
                    'Quality control audit for concrete pouring and structural steel torque testing.'
                ]
            },
            'cfc': {
                title: 'Cairo Festival City (CFC)',
                client: 'Al-Futtaim Group / Leading Contractors',
                role: 'Site Execution Supervisor',
                image: 'images/cairo_festival_city.jpg',
                description: 'Cairo Festival City is Egypt’s premier mixed-use development combining luxury shopping, corporate office towers, and residential districts. Contributed to site supervision during landmark building execution phases.',
                highlights: [
                    'Supervision of mixed-use commercial and residential zones.',
                    'Finishing works quality control and architectural snag list resolution.',
                    'Coordination with international project management consultants.',
                    'Optimizing site workflow to meet strict handover deadlines.'
                ]
            },
            'terminal3': {
                title: 'Cairo International Airport Terminal 3',
                client: 'Civil Aviation Authority',
                role: 'Infrastructure & Site Supervisor',
                image: 'images/terminal3.jpg',
                description: 'A landmark national infrastructure development expanding airport capacity to 11 million passengers annually. Supervised high-capacity structural concrete execution, concourse finishes, and ground infrastructure.',
                highlights: [
                    'Supervising terminal hall structural works, taxiway access zones, and concourse finishes.',
                    'Strict compliance with international aviation building standards.',
                    'Coordination between international engineering firms and local workforce.',
                    'Zero-incident safety record during intensive site construction.'
                ]
            }
        },
        ar: {
            'citygate': {
                title: 'مشروع سيتي جيت (CityGate)',
                client: 'قطري ديار (Qatari Diar)',
                role: 'مشرف عام موقع (شركة سيسيسى للمقاولات)',
                image: 'images/citygate.jpg',
                description: 'سيتي جيت هو مجمع سكني فاخر وضخم. بصفتي مشرف عام الموقع، أدرت أعمال التنفيذ الميداني المكثفة، وشرفنا على طواقم المقاولين، وفحص الأعمال الهيكلية والتشطيبات لضمان أعلى المعايير.',
                highlights: [
                    'الإشراف على الفيلات السكنية الفاخرة وشبكات البنية التحتية.',
                    'التنسيق المباشر بين استشاري التصميم والمقاولين والمهندسين.',
                    'تطبيق المعايير الدولية لضبط الجودة في الهندسة المدنية.',
                    'إدارة إجراءات السلامة وتوزيع العمالة بالموقع.'
                ]
            },
            'auc-mall': {
                title: 'مشروع مول الجامعة الأمريكية (AUC Mall)',
                client: 'شركة الشروق للمقاولات',
                role: 'مشرف عام موقع',
                image: 'images/auc_mall.jpg',
                description: 'مركز تجاري رئيسي بالقرب من الجامعة الأمريكية بالقاهرة. أشرفت على العمليات الميدانية الكاملة، والواجهات الزجاجية، والهياكل الخرسانية والحديدية والتشطيبات المعمارية.',
                highlights: [
                    'الإشراف على الوحدات التجارية والواجهات والأنظمة الكهروميكانيكية.',
                    'ضمان المطابقة الكاملة للمواصفات الفنية والمخططات التنفيذية.',
                    'إجراء الجولات التفتيشية اليومية ورفع تقارير الإنجاز.',
                    'تنسيق جداول المقاولين وفحص التوريدات الميدانية.'
                ]
            },
            'erc-refinery': {
                title: 'الشركة المصرية للتكرير (ERC)',
                client: 'الشركة المصرية للتكرير',
                role: 'قائد الإشراف التنفيذي',
                image: 'images/erc_refinery.jpg',
                description: 'أحد أكبر المشاريع الصناعية العملاقة في شمال أفريقيا. شاركت في الإشراف الإنشائي على المنشآت القواعد الخرسانية الثقيلة، وهياكل الصلب، وأنابيب النفط، وتطبيق معايير السلامة الصارمة.',
                highlights: [
                    'الإشراف على الأعمال المدنية الصناعية وفحص القواعد الثقيلة.',
                    'التنسيق بين الفرق المدنية والميكانيكية والكهربائية.',
                    'الالتزام الكامل بمعايير السلامة والصحة المهنية (HSE).',
                    'مراجعة ضبط الجودة لصب الخرسانات واختبارات الصلب.'
                ]
            },
            'cfc': {
                title: 'مشروع كايرو فيستيفال سيتي (CFC)',
                client: 'مجموعة الفطيم / كبرى شركات المقاولات',
                role: 'مشرف تنفيذ موقع',
                image: 'images/cairo_festival_city.jpg',
                description: 'أبرز المشاريع المتعددة الاستخدامات في مصر والذي يجمع بين المراكز التجارية، الأبراج الإدارية، والمناطق السكنية.',
                highlights: [
                    'الإشراف على المناطق السكنية والتجارية.',
                    'متابعة أعمال التشطيبات المعمارية وإنهاء الملاحظات.',
                    'التنسيق مع شركات إدارة المشاريع العالمية.',
                    'تحسين تدفق العمل لتلبية المواعيد النهائية.'
                ]
            },
            'terminal3': {
                title: 'مبنى الركاب رقم 3 بمطار القاهرة الدولي',
                client: 'هيئة الطيران المدني',
                role: 'مشرف بنية تحتية وموقع',
                image: 'images/terminal3.jpg',
                description: 'مشروع بنية تحتية قومي لتوسعة المطار. أشرفت على الأعمال الخرسانية عالية التحمل وتشطيبات صالات السفر.',
                highlights: [
                    'الإشراف على صالات المبنى والخرسانات وممرات الطائرات.',
                    'الالتزام بمواصفات مباني المطارات الدولية.',
                    'التنسيق بين مكاتب الاستشارة العالمية والعمالة الوطنية.',
                    'تحقيق سجل سلامة خالي من الحوادث.'
                ]
            }
        }
    };

    const projectModal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const modalCloseBtn = document.getElementById('modalClose');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            const data = (projectsModalData[currentLang] || projectsModalData['en'])[projectId];

            if (data && modalBody && projectModal) {
                modalBody.innerHTML = `
                    <img src="${data.image}" alt="${data.title}" class="modal-project-img">
                    <div class="modal-project-header">
                        <h2 class="modal-project-title">${data.title}</h2>
                        <div class="modal-project-meta">
                            <span><i class="fa-solid fa-building"></i> ${currentLang === 'ar' ? 'العميل' : 'Client'}: ${data.client}</span>
                            <span><i class="fa-solid fa-user-check"></i> ${currentLang === 'ar' ? 'الدور' : 'Role'}: ${data.role}</span>
                        </div>
                    </div>
                    <div class="modal-project-body">
                        <p>${data.description}</p>
                        <h4 class="modal-highlights-title"><i class="fa-solid fa-list-check"></i> ${currentLang === 'ar' ? 'نطاق الإشراف والإنجازات' : 'Key Supervision Scope & Deliverables'}:</h4>
                        <ul class="modal-highlights-list">
                            ${data.highlights.map(item => `<li><i class="fa-solid fa-check"></i> ${item}</li>`).join('')}
                        </ul>
                    </div>
                `;
                projectModal.classList.add('active');
                document.body.classList.add('no-scroll');
            }
        });
    });

    function closeModal() {
        if (projectModal) {
            projectModal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
            closeModal();
        }
    });

    /* ----------------------------------------------------------------------
       10. CONTACT FORM VALIDATION & TOAST NOTIFICATION
       ---------------------------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    const toastContainer = document.getElementById('toastContainer');

    function showToast(message, type = 'success') {
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}" style="color: ${type === 'success' ? '#22c55e' : '#ef4444'};"></i>
            <span>${message}</span>
        `;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');

            document.querySelectorAll('.form-group').forEach(group => group.classList.remove('error'));

            if (!nameInput.value.trim()) {
                nameInput.closest('.form-group').classList.add('error');
                isValid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
                emailInput.closest('.form-group').classList.add('error');
                isValid = false;
            }

            if (!subjectInput.value.trim()) {
                subjectInput.closest('.form-group').classList.add('error');
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                messageInput.closest('.form-group').classList.add('error');
                isValid = false;
            }

            if (isValid) {
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;

                submitBtn.disabled = true;
                submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...'}`;

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    contactForm.reset();
                    showToast(currentLang === 'ar' ? 'شكراً لك! تم إرسال رسالتك بنجاح. سيتواصل معك الباشمهندس رجب في أقرب وقت.' : 'Thank you! Your message has been sent successfully. Eng. Ragab will respond shortly.');
                }, 1200);
            } else {
                showToast(currentLang === 'ar' ? 'يرجى تصحيح الأخطاء الموضحة في النموذج.' : 'Please correct the highlighted errors in the form.', 'error');
            }
        });
    }

});
