// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐱 胖猫的创意空间已加载！');
    
    // 初始化点击计数器
    if (!localStorage.getItem('catClickCount')) {
        localStorage.setItem('catClickCount', '0');
    }
    updateClickCount();
    
    // 添加一些初始动画
    animateElements();
});

// 改变主题颜色
function changeTheme(color) {
    document.documentElement.style.setProperty('--primary-color', color);
    
    // 添加点击反馈
    const buttons = document.querySelectorAll('.color-option');
    buttons.forEach(btn => {
        if (btn.style.backgroundColor === color) {
            btn.style.transform = 'scale(1.3)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 300);
        }
    });
    
    // 显示通知
    showNotification(`主题颜色已更改为: ${color}`);
}

// 增加点击计数
function incrementCount() {
    let count = parseInt(localStorage.getItem('catClickCount')) || 0;
    count++;
    localStorage.setItem('catClickCount', count.toString());
    updateClickCount();
    
    // 添加动画效果
    const catBtn = document.querySelector('.cat-btn');
    catBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        catBtn.style.transform = 'scale(1)';
    }, 150);
    
    // 随机显示猫咪消息
    const messages = [
        '喵~ 好痒！',
        '再点一次！',
        '猫咪喜欢被点击！',
        '博士会为我骄傲的！',
        '代码写累了？点我放松一下！'
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    showNotification(randomMsg);
}

// 更新点击计数显示
function updateClickCount() {
    const count = localStorage.getItem('catClickCount') || '0';
    document.getElementById('click-count').textContent = count;
    
    // 根据计数改变样式
    const countElement = document.getElementById('click-count');
    if (count > 10) {
        countElement.style.color = '#ff6b6b';
        countElement.style.fontSize = '1.6rem';
    }
    if (count > 20) {
        countElement.style.color = '#4ecdc4';
        countElement.style.fontSize = '1.8rem';
    }
    if (count > 50) {
        countElement.style.color = '#ffd166';
        countElement.style.fontSize = '2rem';
    }
}

// 显示演示模态框
function showDemo(type) {
    const modal = document.getElementById('demo-modal');
    const title = document.getElementById('demo-title');
    const description = document.getElementById('demo-description');
    const animation = document.getElementById('demo-animation');
    
    // 根据类型设置内容
    switch(type) {
        case 'weather':
            title.textContent = '🐱 猫咪天气应用';
            description.textContent = '一个可爱的天气应用，用猫咪表情显示天气状况。晴天显示晒太阳的猫，雨天显示打伞的猫，雪天显示玩雪的猫！';
            createWeatherAnimation(animation);
            break;
        case 'snippets':
            title.textContent = '💻 代码片段管理器';
            description.textContent = '帮助博士管理常用代码片段的工具。支持分类、搜索和一键复制功能，让编码更高效！';
            createCodeAnimation(animation);
            break;
        case 'kanban':
            title.textContent = '📋 任务追踪看板';
            description.textContent = '可视化的任务管理看板，支持拖拽操作。待处理、进行中、已完成三列清晰展示任务状态。';
            createKanbanAnimation(animation);
            break;
    }
    
    modal.style.display = 'block';
}

// 关闭模态框
function closeModal() {
    document.getElementById('demo-modal').style.display = 'none';
}

// 创建天气动画
function createWeatherAnimation(container) {
    container.innerHTML = '';
    
    const weatherIcons = ['☀️', '🌧️', '⛄', '🌤️'];
    const interval = setInterval(() => {
        const icon = document.createElement('div');
        icon.style.fontSize = '4rem';
        icon.style.position = 'absolute';
        icon.style.left = Math.random() * 80 + '%';
        icon.style.top = Math.random() * 80 + '%';
        icon.style.opacity = '0.7';
        icon.style.animation = 'float 3s ease-in-out infinite';
        icon.textContent = weatherIcons[Math.floor(Math.random() * weatherIcons.length)];
        
        container.appendChild(icon);
        
        // 限制图标数量
        if (container.children.length > 8) {
            container.removeChild(container.firstChild);
        }
    }, 500);
    
    // 存储interval以便清理
    container.dataset.interval = interval;
}

// 创建代码动画
function createCodeAnimation(container) {
    container.innerHTML = '';
    
    const code = `// 胖猫的代码示例
function helloCat() {
    console.log('🐱 喵~ 你好！');
    return '我是会写代码的猫咪';
}

// 异步获取数据
async function fetchCatData() {
    const response = await fetch('/api/cats');
    return response.json();
}

// React组件示例
const CatComponent = () => {
    return (
        <div className="cat-card">
            <h2>胖猫</h2>
            <p>一只会写代码的猫咪</p>
        </div>
    );
};`;
    
    const pre = document.createElement('pre');
    pre.style.backgroundColor = '#282c34';
    pre.style.color = '#abb2bf';
    pre.style.padding = '20px';
    pre.style.borderRadius = '10px';
    pre.style.overflow = 'auto';
    pre.style.height = '100%';
    pre.style.textAlign = 'left';
    pre.style.fontFamily = 'monospace';
    pre.textContent = code;
    
    container.appendChild(pre);
    
    // 添加打字机效果
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < code.length) {
            pre.textContent = code.substring(0, i + 1);
            i++;
            container.scrollTop = container.scrollHeight;
        } else {
            clearInterval(typingInterval);
        }
    }, 30);
    
    container.dataset.interval = typingInterval;
}

// 创建看板动画
function createKanbanAnimation(container) {
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.gap = '10px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    
    const columns = ['待处理', '进行中', '已完成'];
    const colors = ['#ff6b6b', '#4ecdc4', '#96ceb4'];
    
    columns.forEach((col, index) => {
        const column = document.createElement('div');
        column.style.backgroundColor = colors[index];
        column.style.color = 'white';
        column.style.padding = '15px';
        column.style.borderRadius = '10px';
        column.style.width = '30%';
        column.style.height = '150px';
        column.style.display = 'flex';
        column.style.flexDirection = 'column';
        column.style.alignItems = 'center';
        column.style.justifyContent = 'space-between';
        
        const title = document.createElement('h4');
        title.textContent = col;
        title.style.margin = '0 0 10px 0';
        
        const taskCount = document.createElement('div');
        taskCount.textContent = `${Math.floor(Math.random() * 5) + 1} 个任务`;
        taskCount.style.fontSize = '0.9rem';
        taskCount.style.opacity = '0.9';
        
        column.appendChild(title);
        column.appendChild(taskCount);
        
        // 添加拖拽效果
        column.style.cursor = 'grab';
        column.addEventListener('mousedown', () => {
            column.style.transform = 'scale(0.95)';
        });
        column.addEventListener('mouseup', () => {
            column.style.transform = 'scale(1)';
        });
        
        container.appendChild(column);
    });
}

// 显示当前时间
function showTime() {
    const now = new Date();
    const timeString = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    const timeDisplay = document.getElementById('time-display');
    timeDisplay.textContent = `🕒 当前时间: ${timeString}`;
    timeDisplay.style.animation = 'fadeIn 0.5s ease';
    
    // 5秒后淡出
    setTimeout(() => {
        timeDisplay.style.opacity = '0';
        setTimeout(() => {
            timeDisplay.textContent = '';
            timeDisplay.style.opacity = '1';
        }, 500);
    }, 5000);
}

// 显示通知
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.textContent = `🐱 ${message}`;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary-color)';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '10px';
    notification.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1001';
    notification.style.animation = 'fadeIn 0.3s ease';
    
    document.body.appendChild(notification);
    
    // 3秒后移除
    setTimeout(() => {
        notification.style.animation = 'fadeIn 0.3s ease reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 动画元素
function animateElements() {
    const elements = document.querySelectorAll('.skill-card, .project-card');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.style.animation = 'fadeIn 0.6s ease forwards';
        element.style.opacity = '0';
    });
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('demo-modal');
    if (event.target === modal) {
        closeModal();
        
        // 清理动画interval
        const animation = document.getElementById('demo-animation');
        if (animation.dataset.interval) {
            clearInterval(parseInt(animation.dataset.interval));
        }
        animation.innerHTML = '';
    }
};

// 键盘快捷键
document.addEventListener('keydown', function(event) {
    // ESC键关闭模态框
    if (event.key === 'Escape') {
        closeModal();
    }
    
    // 空格键增加计数
    if (event.key === ' ' && event.target === document.body) {
        event.preventDefault();
        incrementCount();
    }
    
    // 数字键1-3切换演示
    if (event.key >= '1' && event.key <= '3') {
        const demos = ['weather', 'snippets', 'kanban'];
        showDemo(demos[parseInt(event.key) - 1]);
    }
});

// 页面可见性变化
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        console.log('🐱 欢迎回来！胖猫一直在等你~');
        showNotification('欢迎回来！胖猫一直在等你~');
    }
});