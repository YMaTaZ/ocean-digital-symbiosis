// app.js

// 1. 获取 DOM 元素
const viewToggleBtn = document.getElementById('viewToggleBtn');
const publicView = document.getElementById('publicView');
const institutionalView = document.getElementById('institutionalView');

// 2. 设定初始状态标记：系统默认向公众展示
let isPublicView = true;

// 3. 监听切换按钮的点击事件 
viewToggleBtn.addEventListener('click', () => {
    // 反转当前状态
    isPublicView = !isPublicView;

    if (isPublicView) {
        // 切换回【公众简易版】：显示容器 A，隐藏容器 B 
        publicView.style.display = 'block';
        institutionalView.style.display = 'none';
        
        // 更改页面背景色为温暖明亮色调，并更新按钮文字
        document.body.classList.remove('bg-gray-100');
        document.body.classList.add('bg-blue-50');
        viewToggleBtn.innerText = '🏢 切换至机构专业版';
        viewToggleBtn.classList.replace('bg-green-600', 'bg-blue-600');
        viewToggleBtn.classList.replace('hover:bg-green-700', 'hover:bg-blue-700');
        
    } else {
        // 切换至【机构专业版】：隐藏容器 A，显示容器 B 
        publicView.style.display = 'none';
        institutionalView.style.display = 'block';
        
        // 更改页面背景色为冷峻的专业色调，并更新按钮文字
        document.body.classList.remove('bg-blue-50');
        document.body.classList.add('bg-gray-100');
        viewToggleBtn.innerText = '🌐 切换至公众简易版';
        viewToggleBtn.classList.replace('bg-blue-600', 'bg-green-600');
        viewToggleBtn.classList.replace('hover:bg-blue-700', 'hover:bg-green-700');
    }
});
