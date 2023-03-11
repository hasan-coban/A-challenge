'use strict';
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n');
  console.log(lines.entries());
  for (let [i, line] of lines.entries()) {
    const [firstWord, secondWord] = line.toLowerCase().trim().split('_');
    // console.log(firstWord, secondWord);
    const output = `${firstWord}${secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(25)} ${'🦅'.repeat(i + 1)}`);
  }
});
