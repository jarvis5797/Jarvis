type AIInputProps = {
    question: string;
    setQuestion: (value: string) => void;
    onAsk: () => void;
    isLoading: boolean;
};

export default function AIInput({
    question,
    setQuestion,
    onAsk,
    isLoading,}: AIInputProps) {

    return (
        <div className="w-full max-w-2xl mt-8">
            <div className="flex rounded-2xl border border-gray-800 bg-gray-950 p-2">

                <input
                    type="text"
                    placeholder="Ask anything about Ashutosh..."
                    value={question}
                    onChange={(event) => setQuestion(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" && question.trim()) {
                            onAsk();
                        }
                    }}
                    className="flex-1 bg-transparent px-4 py-4 text-white outline-none placeholder:text-gray-600"
                />

                <button
                    onClick={onAsk}
                    disabled={isLoading}
                    className="rounded-xl bg-white px-6 py-3 font-medium text-black"
                >
                    {isLoading ? "Thinking..." : "Ask"}
                </button>

            </div>
        </div>
    )
}