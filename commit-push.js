const { execSync } = require('child_process');
try {
  console.log('正在提交...');
  execSync('git commit -m "Initial commit"', { cwd: 'c:/Users/liwr8/WorkBuddy/20260310173530', stdio: 'inherit' });
  console.log('正在推送...');
  execSync('git push -u origin master', { cwd: 'c:/Users/liwr8/WorkBuddy/20260310173530', stdio: 'inherit' });
  console.log('推送成功！');
} catch (e) {
  console.log('错误:', e.message);
}
