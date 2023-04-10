import type { MarkdownInstance } from "astro";

const latestPostFirst = (
  a: MarkdownInstance<Record<string, any>>,
  b: MarkdownInstance<Record<string, any>>,
) => {
  return Math.floor(new Date(b.frontmatter.date).getTime() / 1000) -
    Math.floor(new Date(a.frontmatter.date).getTime() / 1000);
};

export default latestPostFirst;
