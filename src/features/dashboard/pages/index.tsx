import { Sidebar } from "../components/Sidebar";
import { SearchBar } from "../components/SearchBar";
import { QuizGrid } from "../components/QuizGrid";
import { useDashboard } from "../hooks/useDashboard";

const Dashboard = () => {
  const {
    searchQuery,
    setSearchQuery,
    filteredQuizzes,
    handleLogout,
    handleStartQuiz,
  } = useDashboard();

  return (
    <div className="flex h-screen bg-[#0a0a0a]">
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-[#0a0a0a]">
        <div className="p-8">
          {/* Quiz Library Section */}
          <div className="mb-8">
            {/* Header with Search */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                Quiz Library
              </h2>
              
              <SearchBar 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>

            {/* Quiz Cards Grid */}
            <QuizGrid 
              quizzes={filteredQuizzes}
              onStartQuiz={handleStartQuiz}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
