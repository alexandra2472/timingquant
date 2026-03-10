const { execSync } = require('child_process');
try {
  // 先移除旧的remote（如果有）
  try { execSync('git remote remove origin', { cwd: 'c:/Users/liwr8/WorkBuddy/20260310173530' }); } catch(e) {}
  // 添加新的remote
  execSync('git remote add origin https://github.com/alexandra2472/timingquant.git', { cwd: 'c:/Users/liwr8/WorkBuddy/20260310173530' });
  console.log('Remote已添加');
  // 推送
  execSync('git push -u origin master', { cwd: 'c:/Users/liwr8/WorkBuddy/20260310173530', stdio: 'inherit' });
  console.log('推送成功！');
} catch (e) {
  console.log('错误:', e.message);
}
