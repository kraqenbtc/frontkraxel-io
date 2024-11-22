const Loading = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce" />
      <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce [animation-delay:-.3s]" />
      <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce [animation-delay:-.5s]" />
    </div>
  );
};

export default Loading; 