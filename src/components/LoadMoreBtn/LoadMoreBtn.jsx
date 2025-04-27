function LoadMoreBtn({ onClick }) {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 cursor-pointer"
      >
        Load More
      </button>
    </div>
  );
}

export default LoadMoreBtn;
