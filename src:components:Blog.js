import React from "react";

export default function Blog() {
  // Starting with a sample static blog post array.
  const posts = [
    {
      id: 1,
      title: "Welcome to my blog",
      date: "July 2025",
      summary: "This is the launch of my digital workspace where thoughts, science, and society converge."
    },
    // Add more posts here as JSON objects
  ];

  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Blog</h1>
      {posts.length === 0 && <p>No blog posts yet — stay tuned!</p>}
      <ul className="space-y-6">
        {posts.map(({ id, title, date, summary }) => (
          <li key={id}>
            <h2 className="text-indigo-600 dark:text-indigo-400 text-xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
            <p>{summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
