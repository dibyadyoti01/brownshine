import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // A basic client-side handler; for real deployment, integrate with a backend or form provider.
  function handleSubmit(e) {
    e.preventDefault();
    // Basic validation:
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionStatus("Please fill in all fields.");
      return;
    }
    // Here you would generally send data to a backend or email service
    setSubmissionStatus("Thank you for reaching out! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <label className="block">
          Name:
          <input
            type="text"
            className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </label>
        <label className="block">
          Email:
          <input
            type="email"
            className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </label>
        <label className="block">
          Message:
          <textarea
            className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-indigo-700 dark:hover:bg-indigo-500"
        >
          Send
        </button>
      </form>
      {submissionStatus && (
        <p className="mt-4 text-sm text-indigo-600 dark:text-indigo-400">{submissionStatus}</p>
      )}
    </section>
  );
}
