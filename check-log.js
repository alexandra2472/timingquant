const { execSync } = require('child_process');
try {
  const status = execSync('git status', { cwd: 'c:/Users/liwr8/WorkBuddy/20260310173530', encoding: 'utf8' });
  console.log('状态:', status);
} catch (e) {
  console.log('错误:', e.message);
}
