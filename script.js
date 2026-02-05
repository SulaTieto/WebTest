// 平滑滚动
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 导航链接点击处理
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// 滚动时添加导航栏阴影效果
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('header');
    
    if (currentScroll > 50) {
        header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// 页面加载时的动画
window.addEventListener('load', () => {
    // 添加淡入动画到各个部分
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    document.querySelectorAll('.about-card, .project-card, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// 项目卡片点击效果
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        // 这里可以添加点击后的行为，比如打开项目详情页
        console.log('项目卡片被点击');
    });
});

// 添加鼠标跟随效果（可选）
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 10;
        const x = mouseX * speed;
        const y = mouseY * speed;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// 控制台彩蛋
console.log('%c欢迎来到我的网站！', 
    'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%c如果你看到这个消息，说明你也是一个开发者！🎉', 
    'color: #8b5cf6; font-size: 16px;');

// 动态更新年份
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('footer p');
if (footerText) {
    footerText.textContent = `© ${currentYear} 我的网站. 保留所有权利.`;
}
