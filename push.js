const { execSync } = require('child_process');
try {
  execSync('git push -u origin main', { cwd: 'c:/Users/liwr8/WorkBuddy/20260310173530', stdio: 'inherit' });
  console.log('推送成功！');
} catch (e) {
  console.log('推送失败:', e.message);
}
