import ReactMarkdown from "react-markdown";

type ChatMessageProps = {
  role: "user" | "kowalski";
  content: string;
};

export default function ChatMessage({
  role,
  content,
}: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-4 text-left ${
          isUser
            ? "bg-white text-black"
            : "border border-gray-800 bg-gray-950 text-gray-300"
        }`}
      >
        <p className="mb-1 text-xs font-medium uppercase tracking-wider opacity-50">
          {isUser ? "You" : "Jarvis"}
        </p>

        <div className="leading-7">
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="mb-3 last:mb-0">{children}</p>
              ),

              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong>
              ),

              ul: ({ children }) => (
                <ul className="mb-3 list-disc space-y-1 pl-5">
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className="mb-3 list-decimal space-y-1 pl-5">
                  {children}
                </ol>
              ),

              li: ({ children }) => (
                <li>{children}</li>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}