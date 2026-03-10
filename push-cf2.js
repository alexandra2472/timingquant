const { execSync } = require('child_process');
try {
  execSync('git add cloudflare.json', { cwd: 'c:/Users/liwr8/WorkBuddy/20260310173530', stdio: 'inherit' });
  execSync('git commit -m "Fix Cloudflare build cache"', { cwd: 'c:/Users/liwr8/WorkBuddy/20260310173530', stdio: 'inherit' });
  execSync('git push origin master', { cwd: 'c:/Users/liwr8/WorkBuddy/20260310173530', stdio: 'inherit' });
  console.log('推送成功！');
} catch (e) {
  console.log('错误:', e.message);
}
