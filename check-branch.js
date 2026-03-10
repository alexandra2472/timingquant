const { execSync } = require('child_process');
try {
  const branches = execSync('git branch -a', { cwd: 'c:/Users/liwr8/WorkBuddy/20260310173530', encoding: 'utf8' });
  console.log('分支列表:', branches);
} catch (e) {
  console.log('错误:', e.message);
}
