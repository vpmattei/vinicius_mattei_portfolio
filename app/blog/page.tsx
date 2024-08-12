import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="prose">
      <h1>Games</h1>
      <BlogPosts />
    </section>
  );
}
