import "./MarkdownContainer.css";
import Markdown from "markdown-to-jsx";

export default function MarkdownContainer({ children }) {
  return <Markdown className="markdown">{children}</Markdown>;
}
