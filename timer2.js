const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", (data) => {
  if (data === "b") {
    process.stdout.write("\x07");
  }
  if (data === "\u0003") {
    process.stdout.write(`"Thanks for using me, ciao!"`);
    process.stdout.write("\n");
    process.exit();
  }
  if (data >= 1 && data <= 9) {
    process.stdout.write(`setting timer for ${data} seconds...`);
    setTimeout(() => {
      process.stdout.write("\x07");
      process.stdout.write("\n");
    }, Number(data * 1000));
  }
});
