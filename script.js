// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动功能
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // 添加活跃导航项高亮
    function highlightNavOnScroll() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // 监听滚动事件
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // 添加导航栏活跃样式
    const style = document.createElement('style');
    style.textContent = `
        nav a.active {
            color: var(--primary-color);
        }
        nav a.active::after {
            transform: scaleX(1);
        }
    `;
    document.head.appendChild(style);
    
    // 初始化页面时检查一次
    highlightNavOnScroll();
    
    // 添加卡片悬停效果增强
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
        });
    });
    
    // 为奖项添加随机颜色效果
    const awardIcons = document.querySelectorAll('.award-icon');
    const colors = [
        'rgba(74, 111, 165, 0.1)',
        'rgba(78, 205, 196, 0.1)',
        'rgba(255, 107, 107, 0.1)',
        'rgba(255, 230, 109, 0.1)',
        'rgba(149, 175, 192, 0.1)'
    ];
    
    awardIcons.forEach(icon => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        icon.style.backgroundColor = randomColor;
    });
    
    // 添加页面加载动画
    document.body.classList.add('loaded');
    
    // 添加页面加载样式
    const loadStyle = document.createElement('style');
    loadStyle.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(loadStyle);
});
