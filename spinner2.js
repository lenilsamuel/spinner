let spinnerOutput = ["|", "/", "-", "\\", "|"];
let timer = 100;
for (let i = 0; i < spinnerOutput.length; i++) {
  setTimeout(() => process.stdout.write(`\r ${spinnerOutput[i]}`), timer);
  timer += 200;
  if (i === spinnerOutput.length - 1) {
    setTimeout(() => process.stdout.write("\n"), timer);
  }
}
