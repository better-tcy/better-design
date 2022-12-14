// 更多配置请参考 https://github.com/leoforfree/cz-customizable#steps
module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat: 组件库新功能（通常是能够让用户觉察到的变化）：大到新增组件小到文案或样式调整'
    },
    { value: 'fix', name: 'fix: 修复 BUG' },
    { value: 'docs', name: 'docs: 修改文档、注释' },
    {
      value: 'style',
      name: 'style: 代码格式调整（空格缩进 尾随逗号等）：对逻辑无影响，比如按照 eslint prettierrc 或团队风格修改代码格式（注意不是 UI 变更）'
    },
    {
      value: 'refactor',
      name: 'refactor: 重构（代码优化但不影响组件功能）：比如文件 变量重命名、优化代码设计、代码抽象为函数、消除魔法数字等'
    },
    { value: 'perf', name: 'perf: 改善性能 性能提升' },
    { value: 'test', name: 'test: 测试相关变更' },
    { value: 'build', name: 'build: 变更项目构建或外部依赖：例如 webpack、gulp、npm 等' },
    { value: 'ci', name: 'ci: 更改持续集成软件的配置文件和 package 中的 scripts 命令' },
    { value: 'chore', name: 'chore: 变更项目构建或外部依赖：例如 webpack、gulp、npm 等' },
    { value: 'revert', name: 'revert: 代码回退' },
    { value: 'update', name: 'update: 第三方库升级' }
  ],
  scopes: [{ name: '组件' }, { name: '文档' }, { name: '其它' }],
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    subject: '简要说明:\n',
    body: '详细说明:\n',
    footer: '关联关闭的issue,例如：#32 (可选):\n',
    confirmCommit: '确定提交?'
  }
}
