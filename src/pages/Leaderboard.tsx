import { Trophy, User } from 'lucide-react';

const mockUsers = [
    { id: 1, name: 'You', xp: 1450, rank: 1, isMe: true },
    { id: 2, name: 'Sister Johnson', xp: 1320, rank: 2, isMe: false },
    { id: 3, name: 'Elder Smith', xp: 1100, rank: 3, isMe: false },
    { id: 4, name: 'Bishop Brown', xp: 950, rank: 4, isMe: false },
    { id: 5, name: 'Primary Pres.', xp: 800, rank: 5, isMe: false },
];

export const Leaderboard = () => {
    return (
        <div className="flex flex-col items-center py-8">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-gray-700">Amethyst League</h1>
                <p className="text-gray-400">Top 10 advance to the next league</p>
            </div>

            <div className="max-w-lg w-full border-2 border-gray-200 rounded-2xl overflow-hidden bg-white">
                {mockUsers.map((user) => (
                    <div key={user.id} className={`flex items-center gap-4 p-4 border-b border-gray-100 last:border-0 ${user.isMe ? 'bg-sky-50' : ''}`}>
                        <span className={`font-bold w-6 text-center ${user.rank <= 3 ? 'text-yellow-500' : 'text-gray-400'}`}>
                            {user.rank}
                        </span>

                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                            {user.rank === 1 ? <Trophy size={20} className="text-yellow-500" /> : <User size={20} />}
                        </div>

                        <span className="flex-1 font-bold text-gray-700">
                            {user.name}
                        </span>

                        <span className="font-bold text-gray-400">
                            {user.xp} XP
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
