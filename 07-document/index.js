export default function search (doc, selector) {
  return Array.from(doc.querySelectorAll(selector))
}
