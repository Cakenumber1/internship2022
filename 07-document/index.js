export default function search (doc, tag) {
  return Array.from(doc.querySelectorAll(tag))
}
