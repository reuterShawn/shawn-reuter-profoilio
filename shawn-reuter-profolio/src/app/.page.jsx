export async function getPosts() {
  const res = await fetch("https://api.example.com/...");
  return res.json();
}

/* note that we use async/await here,
which was not possible in previous versions of next.js */
export default async function Home() {
  const posts = await getPosts();

  return <div></div>;
}
