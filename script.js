import locales from './locales.js';

let currentLang = 'zh-TW';

// 初始化語言設置
document.addEventListener('DOMContentLoaded', () => {
    // 設置初始語言
    updateContent(currentLang);

    // 綁定語言切換按鈕事件
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            currentLang = lang;
            updateContent(lang);
            updateActiveLanguageButton(lang);
        });
    });

    // 設置初始按鈕狀態
    updateActiveLanguageButton(currentLang);
});

// 更新內容函數
function updateContent(lang) {
    const content = locales[lang];
    if (!content) return;

    // 更新所有帶有data-i18n屬性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = content;
        
        // 遍歷鍵值獲取對應的翻譯
        for (const key of keys) {
            if (value[key]) {
                value = value[key];
            } else {
                console.warn(`Translation not found for key: ${keys.join('.')}`);
                return;
            }
        }

        // 更新元素內容
        if (typeof value === 'string') {
            element.textContent = value;
        }
    });

    // 更新特定區塊的內容
    updateHeroSection(content.hero);
    updateAboutSection(content.about);
    updateSkillsSection(content.skills);
    updateExperienceSection(content.experience);
    updatePortfolioSection(content.portfolio);
    updateContactSection(content.contact);
    updateFooter(content.footer);
}

// 更新語言切換按鈕狀態
function updateActiveLanguageButton(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// 更新各個區塊的函數
function updateHeroSection(content) {
    document.querySelector('#hero h1').textContent = content.name;
    document.querySelector('#hero p').textContent = content.title;
    document.querySelector('#hero .cta-button').textContent = content.contact;
}

function updateAboutSection(content) {
    document.querySelector('#about .about-content p').textContent = content.content;
}

function updateSkillsSection(content) {
    const skillCards = document.querySelectorAll('.skill-card');
    const skillTypes = ['frontend', 'backend', 'other'];

    skillCards.forEach((card, index) => {
        const type = skillTypes[index];
        const skillContent = content[type];
        
        card.querySelector('h3').textContent = skillContent.title;
        const list = card.querySelector('ul');
        list.innerHTML = skillContent.items
            .map(item => `<li>${item}</li>`)
            .join('');
    });
}

function updateExperienceSection(content) {
    const experienceItems = document.querySelectorAll('.experience-item');
    
    content.jobs.forEach((job, index) => {
        const item = experienceItems[index];
        if (!item) return;

        item.querySelector('h3').textContent = job.title;
        item.querySelector('.company').textContent = job.company;
        item.querySelector('.period').textContent = job.period;

        const list = item.querySelector('ul');
        list.innerHTML = job.responsibilities
            .map(resp => `<li>${resp}</li>`)
            .join('');
    });
}

function updatePortfolioSection(content) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    content.projects.forEach((project, index) => {
        const item = portfolioItems[index];
        if (!item) return;

        item.querySelector('h3').textContent = project.title;
        item.querySelector('p').textContent = project.description;
    });
}

function updateContactSection(content) {
    const form = document.querySelector('#contact-form');
    form.querySelector('label[for="name"]').textContent = content.form.name;
    form.querySelector('label[for="email"]').textContent = content.form.email;
    form.querySelector('label[for="message"]').textContent = content.form.message;
    form.querySelector('button[type="submit"]').textContent = content.form.submit;
}

function updateFooter(content) {
    document.querySelector('.footer-content p').textContent = content.copyright;
}