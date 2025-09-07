export default function Contact() {
  return (
    <section className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p>
        Feel free to reach out via email or social media. I'd love to hear from you!
      </p>
      <ul className="space-y-2">
        <li>Email: <a href="mailto:zara@example.com" className="text-indigo-600 hover:underline">zara@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/zara" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">linkedin.com/in/zara</a></li>
        <li>GitHub: <a href="https://github.com/zara" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">github.com/zara</a></li>
      </ul>
    </section>
  )
}