type SkillBadgeProps = {
    name: string;
};

export default function SkillBadge({name}: SkillBadgeProps) {
    return (
        <span className="rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-400">
            {name}
        </span>
    );
}