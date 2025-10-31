import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/shared/components/ui/input";
import {
  FaBookOpen,
  FaCog,
  FaSearch,
  FaClock,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Sample quiz data for users to practice
  const quizzes = [
    {
      id: 1,
      title: "React Fundamentals",
      description: "Test your knowledge of React basics",
      icon: "📝",
      color: "bg-blue-500",
      questions: 15,
      duration: "20 min",
      completions: 234,
    },
    {
      id: 2,
      title: "JavaScript ES6+",
      description: "Modern JavaScript features and concepts",
      icon: "💻",
      color: "bg-yellow-500",
      questions: 20,
      duration: "25 min",
      completions: 189,
    },
    {
      id: 3,
      title: "CSS Flexbox & Grid",
      description: "Master modern CSS layouts",
      icon: "🎨",
      color: "bg-purple-500",
      questions: 12,
      duration: "15 min",
      completions: 156,
    },
    {
      id: 4,
      title: "TypeScript Basics",
      description: "Introduction to TypeScript",
      icon: "📘",
      color: "bg-blue-600",
      questions: 18,
      duration: "30 min",
      completions: 203,
    },
    {
      id: 5,
      title: "Node.js Essentials",
      description: "Backend development with Node.js",
      icon: "🟢",
      color: "bg-green-500",
      questions: 16,
      duration: "22 min",
      completions: 145,
    },
    {
      id: 6,
      title: "Database Design",
      description: "SQL and database fundamentals",
      icon: "🗄️",
      color: "bg-orange-500",
      questions: 14,
      duration: "18 min",
      completions: 98,
    },
  ];

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#0a0a0a]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a1a1a] border-r border-gray-800">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-purple-500">Quizzy</h1>
        </div>

        <nav className="mt-6">
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 bg-purple-600 text-white"
          >
            <FaBookOpen className="text-xl" />
            <span className="font-medium">Quizzes</span>
          </a>
        </nav>

        <div className="absolute bottom-0 w-64 border-t border-gray-800">
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-4 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <FaCog className="text-xl" />
            <span className="font-medium">Settings</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-[#0a0a0a]">
        {/* Content Area */}
        <div className="p-8">
          {/* Quiz Library Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                Quiz Library
              </h2>
              
              {/* Search */}
              <div className="relative w-96">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search quizzes..."
                  className="pl-10 bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Quiz Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="bg-[#1a1a1a] rounded-lg border border-gray-800 p-6 hover:border-purple-600 transition-all cursor-pointer"
                  onClick={() => navigate(`/quiz/${quiz.id}`)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${quiz.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
                      {quiz.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {quiz.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {quiz.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <FaGraduationCap />
                      <span>{quiz.questions} questions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span>{quiz.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <FaCheckCircle className="text-green-500" />
                      <span>{quiz.completions} completions</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/quiz/${quiz.id}`);
                      }}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
                    >
                      Start Quiz
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredQuizzes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No quizzes found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
