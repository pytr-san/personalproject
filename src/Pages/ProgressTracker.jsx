export default function ProgressTracker() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Your Progress
      </h3>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
        {/* Progress bar remains the same */}
      </div>
    </div>
  );
}