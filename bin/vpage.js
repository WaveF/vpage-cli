#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// 获取命令行参数
const args = process.argv.slice(2);
const projectName = args[0] || 'my-vpage';

// 检查项目是否已存在
if (fs.existsSync(projectName)) {
  console.error(`Error: Directory "${projectName}" already exists.`);
  process.exit(1);
}

console.log(`Creating a new project: ${projectName}...`);

// 拉取模板（示例使用 degit 从 GitHub 拉取）
// execSync(`npx degit user/vpage-template ${projectName}`, { stdio: 'inherit' });
execSync(`npx degit https://gitee.com/wavef/vpage.git ${projectName}`, { stdio: 'inherit' });

console.log(`Project "${projectName}" created successfully!`);
console.log(`\nNext steps:\n`);
console.log(`cd ${projectName}`);
console.log(`npm install`);
console.log(`npm run dev`);


