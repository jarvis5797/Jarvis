import { JobMatchReport as JobMatchReportType } from "@/types/jobMatch";

type props = {
    report: JobMatchReportType;
};


function getStatusStyle(status: string) {
    switch (status) {
        case "STRONG":
            return "border-green-800 bg-green-950 text-green-400";

        case "PARTIAL":
            return "border-yellow-800 bg-yellow-950 text-yellow-400";

        case "INSUFFICIENT_EVIDENCE":
            return "border-red-800 bg-red-950 text-red-400";

        default:
            return "border-gray-700 bg-gray-900 text-gray-400";
    }
}

export default function JobMatchReport({ report }: props) {

    const strongMatches = report.matches.filter((match) => match.status === "STRONG").length;

    const partialMatches = report.matches.filter((match) => match.status === "PARTIAL").length;

    const gaps = report.gaps.length;

    return (
        <div className="mt-6 w-full space-y-6 text-left">

            <div>
                <h2 className="text-xl font-semibold text-white">
                    Job Match Analysis
                </h2>

                <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-gray-800 bg-gray-900 p-4 text-center">
                        <p className="text-2xl font-semibold text-green-400">
                            {strongMatches}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                            Strong Matches
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-800 bg-gray-900 p-4 text-center">
                        <p className="text-2xl font-semibold text-yellow-400">
                            {partialMatches}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                            Partial Matches
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-800 bg-gray-900 p-4 text-center">
                        <p className="text-2xl font-semibold text-red-400">
                            {gaps}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                            Evidence Gaps
                        </p>
                    </div>
                </div>

                <p className="mt-2 text-gray-400">
                    {report.summary}
                </p>
            </div>

            <div>
                <h3 className="mb-3 text-lg font-medium text-white">
                    Matched Requirements
                </h3>

                <div className="space-y-3">
                    {report.matches.map((match) => (
                        <div
                            key={match.requirement}
                            className="rounded-xl border border-gray-800 bg-gray-900 p-4"
                        >
                            <div className="flex items-center justify-between">
                                <h4 className="font-medium text-white">
                                    {match.requirement}
                                </h4>

                                <span
                                    className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusStyle(
                                        match.status
                                    )}`}
                                >
                                    {match.status}
                                </span>
                            </div>

                            <p className="mt-2 text-sm text-gray-400">
                                {match.evidence}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gaps */}
            <div>
                <h3 className="mb-3 text-lg font-medium text-white">
                    Evidence Gaps
                </h3>

                <div className="space-y-3">
                    {report.gaps.map((gap) => (
                        <div
                            key={gap.requirement}
                            className="rounded-xl border border-gray-800 bg-gray-900 p-4"
                        >
                            <div className="flex items-center justify-between">
                                <h4 className="font-medium text-white">
                                    {gap.requirement}
                                </h4>

                                <span
                                    className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusStyle(
                                        gap.status
                                    )}`}
                                >
                                    {gap.status}
                                </span>
                            </div>

                            <p className="mt-2 text-sm text-gray-400">
                                {gap.evidence}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}