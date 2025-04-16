const locales = {
    'zh-TW': {
        nav: {
            about: '關於我',
            skills: '技能專長',
            experience: '工作經驗',
            portfolio: '作品集',
            contact: '聯絡方式'
        },
        hero: {
            name: '王小明',
            title: '全端工程師 | UI/UX設計師',
            contact: '與我聯繫'
        },
        about: {
            title: '關於我',
            content: '我是一名充滿熱情的全端工程師，擁有5年的網站開發經驗。專注於創造優秀的使用者體驗和高效能的網站應用。熟悉現代化的前後端技術棧，並且持續學習新技術。'
        },
        skills: {
            title: '技能專長',
            frontend: {
                title: '前端開發',
                items: ['HTML5 / CSS3', 'JavaScript / TypeScript', 'React / Vue.js', 'Responsive Design']
            },
            backend: {
                title: '後端開發',
                items: ['Node.js / Express', 'Python / Django', 'RESTful API', 'Database Design']
            },
            other: {
                title: '其他技能',
                items: ['Git Version Control', 'Docker', 'CI/CD', 'AWS Services']
            }
        },
        experience: {
            title: '工作經驗',
            jobs: [
                {
                    title: '資深全端工程師',
                    company: '創新科技有限公司',
                    period: '2021 - 現在',
                    responsibilities: [
                        '負責公司核心產品的前後端開發',
                        '優化網站性能，提升載入速度50%',
                        '帶領5人開發團隊，實施敏捷開發流程'
                    ]
                },
                {
                    title: '前端工程師',
                    company: '數位方案公司',
                    period: '2019 - 2021',
                    responsibilities: [
                        '開發響應式網站和Web應用',
                        '實作使用者介面和互動功能',
                        '與設計師協作優化使用者體驗'
                    ]
                }
            ]
        },
        portfolio: {
            title: '作品集',
            projects: [
                {
                    title: '電商平台開發',
                    description: '使用React和Node.js開發的全端電商平台'
                },
                {
                    title: '社群媒體儀表板',
                    description: 'Vue.js開發的數據視覺化儀表板'
                },
                {
                    title: '企業管理系統',
                    description: 'Python/Django開發的內部管理系統'
                }
            ]
        },
        contact: {
            title: '聯絡方式',
            email: 'Email',
            phone: '電話',
            form: {
                name: '姓名',
                email: 'Email',
                message: '訊息',
                submit: '發送訊息'
            }
        },
        footer: {
            copyright: '© 2024 個人履歷網站. All rights reserved.'
        }
    },
    'en-US': {
        nav: {
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            portfolio: 'Portfolio',
            contact: 'Contact'
        },
        hero: {
            name: 'John Wang',
            title: 'Full Stack Developer | UI/UX Designer',
            contact: 'Contact Me'
        },
        about: {
            title: 'About Me',
            content: 'I am a passionate full-stack developer with 5 years of web development experience. I focus on creating excellent user experiences and high-performance web applications. Proficient in modern front-end and back-end technology stacks, and continuously learning new technologies.'
        },
        skills: {
            title: 'Professional Skills',
            frontend: {
                title: 'Frontend Development',
                items: ['HTML5 / CSS3', 'JavaScript / TypeScript', 'React / Vue.js', 'Responsive Design']
            },
            backend: {
                title: 'Backend Development',
                items: ['Node.js / Express', 'Python / Django', 'RESTful API', 'Database Design']
            },
            other: {
                title: 'Other Skills',
                items: ['Git Version Control', 'Docker', 'CI/CD', 'AWS Services']
            }
        },
        experience: {
            title: 'Work Experience',
            jobs: [
                {
                    title: 'Senior Full Stack Developer',
                    company: 'Innovation Tech Co., Ltd.',
                    period: '2021 - Present',
                    responsibilities: [
                        'Responsible for full-stack development of core products',
                        'Optimized website performance, improving load speed by 50%',
                        'Led a team of 5 developers, implementing agile development processes'
                    ]
                },
                {
                    title: 'Frontend Developer',
                    company: 'Digital Solutions Corp.',
                    period: '2019 - 2021',
                    responsibilities: [
                        'Developed responsive websites and web applications',
                        'Implemented user interfaces and interactive features',
                        'Collaborated with designers to optimize user experience'
                    ]
                }
            ]
        },
        portfolio: {
            title: 'Portfolio',
            projects: [
                {
                    title: 'E-commerce Platform',
                    description: 'Full-stack e-commerce platform built with React and Node.js'
                },
                {
                    title: 'Social Media Dashboard',
                    description: 'Data visualization dashboard developed with Vue.js'
                },
                {
                    title: 'Enterprise Management System',
                    description: 'Internal management system developed with Python/Django'
                }
            ]
        },
        contact: {
            title: 'Contact',
            email: 'Email',
            phone: 'Phone',
            form: {
                name: 'Name',
                email: 'Email',
                message: 'Message',
                submit: 'Send Message'
            }
        },
        footer: {
            copyright: '© 2024 Personal Portfolio. All rights reserved.'
        }
    }
};

export default locales;