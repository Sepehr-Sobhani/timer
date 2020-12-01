let times = process.argv.slice(2);

for (const time of times) {
  if (times && Number(time) >= 0 && typeof Number(time) === "number") {
    setTimeout(() => {
      process.stdout.write(`${time} seconds`);
      process.stdout.write("\x07");
      process.stdout.write("\n");
    }, Number(time * 1000));
  }
}
