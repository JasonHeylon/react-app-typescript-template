const micromatch = require('micromatch');

module.exports = {
  '*.ts?(x)': (files) => {
    const match = micromatch.not(files, '**/*.d.ts');
    if (match.length > 10) {
      return 'npm run lint';
    }
    return `eslint ${match.join(' ')}`;
  },
};
