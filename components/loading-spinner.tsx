export default function LoadingSpinner() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-900/50 backdrop-blur-sm">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent animate-spin"></div>
        <div className="absolute inset-3 rounded-full border-4 border-t-transparent border-r-blue-500 border-b-transparent border-l-purple-500 animate-spin animation-delay-150"></div>
        <div className="absolute inset-6 rounded-full border-2 border-t-purple-500 border-r-transparent border-b-blue-500 border-l-transparent animate-spin animation-delay-300"></div>
      </div>
    </div>
  )
}
