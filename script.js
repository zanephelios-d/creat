// 椤甸潰鍔犺浇瀹屾垚鍚庢墽琛?document.addEventListener('DOMContentLoaded', function() {
    console.log('馃惐 鑳栫尗鐨勫垱鎰忕┖闂村凡鍔犺浇锛?);
    
    // 鍒濆鍖栫偣鍑昏鏁板櫒
    if (!localStorage.getItem('catClickCount')) {
        localStorage.setItem('catClickCount', '0');
    }
    updateClickCount();
    
    // 娣诲姞涓€浜涘垵濮嬪姩鐢?    animateElements();
});

// 鏀瑰彉涓婚棰滆壊
function changeTheme(color) {
    document.documentElement.style.setProperty('--primary-color', color);
    
    // 娣诲姞鐐瑰嚮鍙嶉
    const buttons = document.querySelectorAll('.color-option');
    buttons.forEach(btn => {
        if (btn.style.backgroundColor === color) {
            btn.style.transform = 'scale(1.3)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 300);
        }
    });
    
    // 鏄剧ず閫氱煡
    showNotification(`涓婚棰滆壊宸叉洿鏀逛负: ${color}`);
}

// 澧炲姞鐐瑰嚮璁℃暟
function incrementCount() {
    let count = parseInt(localStorage.getItem('catClickCount')) || 0;
    count++;
    localStorage.setItem('catClickCount', count.toString());
    updateClickCount();
    
    // 娣诲姞鍔ㄧ敾鏁堟灉
    const catBtn = document.querySelector('.cat-btn');
    catBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        catBtn.style.transform = 'scale(1)';
    }, 150);
    
    // 闅忔満鏄剧ず鐚挭娑堟伅
    const messages = [
        '鍠祣 濂界棐锛?,
        '鍐嶇偣涓€娆★紒',
        '鐚挭鍠滄琚偣鍑伙紒',
        '鍗氬＋浼氫负鎴戦獎鍌茬殑锛?,
        '浠ｇ爜鍐欑疮浜嗭紵鐐规垜鏀炬澗涓€涓嬶紒'
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    showNotification(randomMsg);
}

// 鏇存柊鐐瑰嚮璁℃暟鏄剧ず
function updateClickCount() {
    const count = localStorage.getItem('catClickCount') || '0';
    document.getElementById('click-count').textContent = count;
    
    // 鏍规嵁璁℃暟鏀瑰彉鏍峰紡
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

// 鏄剧ず婕旂ず妯℃€佹
function showDemo(type) {
    const modal = document.getElementById('demo-modal');
    const title = document.getElementById('demo-title');
    const description = document.getElementById('demo-description');
    const animation = document.getElementById('demo-animation');
    
    // 鏍规嵁绫诲瀷璁剧疆鍐呭
    switch(type) {
        case 'weather':
            title.textContent = '馃惐 鐚挭澶╂皵搴旂敤';
            description.textContent = '涓€涓彲鐖辩殑澶╂皵搴旂敤锛岀敤鐚挭琛ㄦ儏鏄剧ず澶╂皵鐘跺喌銆傛櫞澶╂樉绀烘檼澶槼鐨勭尗锛岄洦澶╂樉绀烘墦浼炵殑鐚紝闆ぉ鏄剧ず鐜╅洩鐨勭尗锛?;
            createWeatherAnimation(animation);
            break;
        case 'snippets':
            title.textContent = '馃捇 浠ｇ爜鐗囨绠＄悊鍣?;
            description.textContent = '甯姪鍗氬＋绠＄悊甯哥敤浠ｇ爜鐗囨鐨勫伐鍏枫€傛敮鎸佸垎绫汇€佹悳绱㈠拰涓€閿鍒跺姛鑳斤紝璁╃紪鐮佹洿楂樻晥锛?;
            createCodeAnimation(animation);
            break;
        case 'kanban':
            title.textContent = '馃搵 浠诲姟杩借釜鐪嬫澘';
            description.textContent = '鍙鍖栫殑浠诲姟绠＄悊鐪嬫澘锛屾敮鎸佹嫋鎷芥搷浣溿€傚緟澶勭悊銆佽繘琛屼腑銆佸凡瀹屾垚涓夊垪娓呮櫚灞曠ず浠诲姟鐘舵€併€?;
            createKanbanAnimation(animation);
            break;
    }
    
    modal.style.display = 'block';
}

// 鍏抽棴妯℃€佹
function closeModal() {
    document.getElementById('demo-modal').style.display = 'none';
}

// 鍒涘缓澶╂皵鍔ㄧ敾
function createWeatherAnimation(container) {
    container.innerHTML = '';
    
    const weatherIcons = ['鈽€锔?, '馃導锔?, '鉀?, '馃尋锔?];
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
        
        // 闄愬埗鍥炬爣鏁伴噺
        if (container.children.length > 8) {
            container.removeChild(container.firstChild);
        }
    }, 500);
    
    // 瀛樺偍interval浠ヤ究娓呯悊
    container.dataset.interval = interval;
}

// 鍒涘缓浠ｇ爜鍔ㄧ敾
function createCodeAnimation(container) {
    container.innerHTML = '';
    
    const code = `// 鑳栫尗鐨勪唬鐮佺ず渚?function helloCat() {
    console.log('馃惐 鍠祣 浣犲ソ锛?);
    return '鎴戞槸浼氬啓浠ｇ爜鐨勭尗鍜?;
}

// 寮傛鑾峰彇鏁版嵁
async function fetchCatData() {
    const response = await fetch('/api/cats');
    return response.json();
}

// React缁勪欢绀轰緥
const CatComponent = () => {
    return (
        <div className="cat-card">
            <h2>鑳栫尗</h2>
            <p>涓€鍙細鍐欎唬鐮佺殑鐚挭</p>
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
    
    // 娣诲姞鎵撳瓧鏈烘晥鏋?    let i = 0;
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

// 鍒涘缓鐪嬫澘鍔ㄧ敾
function createKanbanAnimation(container) {
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.gap = '10px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    
    const columns = ['寰呭鐞?, '杩涜涓?, '宸插畬鎴?];
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
        taskCount.textContent = `${Math.floor(Math.random() * 5) + 1} 涓换鍔;
        taskCount.style.fontSize = '0.9rem';
        taskCount.style.opacity = '0.9';
        
        column.appendChild(title);
        column.appendChild(taskCount);
        
        // 娣诲姞鎷栨嫿鏁堟灉
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

// 鏄剧ず褰撳墠鏃堕棿
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
    timeDisplay.textContent = `馃晵 褰撳墠鏃堕棿: ${timeString}`;
    timeDisplay.style.animation = 'fadeIn 0.5s ease';
    
    // 5绉掑悗娣″嚭
    setTimeout(() => {
        timeDisplay.style.opacity = '0';
        setTimeout(() => {
            timeDisplay.textContent = '';
            timeDisplay.style.opacity = '1';
        }, 500);
    }, 5000);
}

// 鏄剧ず閫氱煡
function showNotification(message) {
    // 鍒涘缓閫氱煡鍏冪礌
    const notification = document.createElement('div');
    notification.textContent = `馃惐 ${message}`;
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
    
    // 3绉掑悗绉婚櫎
    setTimeout(() => {
        notification.style.animation = 'fadeIn 0.3s ease reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 鍔ㄧ敾鍏冪礌
function animateElements() {
    const elements = document.querySelectorAll('.skill-card, .project-card');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.style.animation = 'fadeIn 0.6s ease forwards';
        element.style.opacity = '0';
    });
}

// 娣诲姞CSS鍔ㄧ敾
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

// 鐐瑰嚮妯℃€佹澶栭儴鍏抽棴
window.onclick = function(event) {
    const modal = document.getElementById('demo-modal');
    if (event.target === modal) {
        closeModal();
        
        // 娓呯悊鍔ㄧ敾interval
        const animation = document.getElementById('demo-animation');
        if (animation.dataset.interval) {
            clearInterval(parseInt(animation.dataset.interval));
        }
        animation.innerHTML = '';
    }
};

// 閿洏蹇嵎閿?document.addEventListener('keydown', function(event) {
    // ESC閿叧闂ā鎬佹
    if (event.key === 'Escape') {
        closeModal();
    }
    
    // 绌烘牸閿鍔犺鏁?    if (event.key === ' ' && event.target === document.body) {
        event.preventDefault();
        incrementCount();
    }
    
    // 鏁板瓧閿?-3鍒囨崲婕旂ず
    if (event.key >= '1' && event.key <= '3') {
        const demos = ['weather', 'snippets', 'kanban'];
        showDemo(demos[parseInt(event.key) - 1]);
    }
});

// 椤甸潰鍙鎬у彉鍖?document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        console.log('馃惐 娆㈣繋鍥炴潵锛佽儢鐚竴鐩村湪绛変綘~');
        showNotification('娆㈣繋鍥炴潵锛佽儢鐚竴鐩村湪绛変綘~');
    }
});