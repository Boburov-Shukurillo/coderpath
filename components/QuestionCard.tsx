interface QuestionCardProps {
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    category: string;
  }
  
  const badgeColors: Record<string, string> = {
    Easy: 'bg-green-500',
    Medium: 'bg-yellow-500',
    Hard: 'bg-red-500',
  };
  
  export default function QuestionCard({ title, difficulty, category }: QuestionCardProps) {
    return (
      <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-xl hover:scale-[1.02] transition-all border border-white/10">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="flex justify-between text-sm text-slate-300">
          <span className="italic">{category}</span>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[difficulty]}`}
          >
            {difficulty}
          </span>
        </div>
      </div>
    );
  }
  