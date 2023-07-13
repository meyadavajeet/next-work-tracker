async function takeTime() {
  await new Promise(function (resolve, reject) {
    setTimeout(resolve, 3000);
  });
}

export default async function About() {
  await takeTime();
  throw new Error("Something went wrong");
  return <div>About</div>;
}
