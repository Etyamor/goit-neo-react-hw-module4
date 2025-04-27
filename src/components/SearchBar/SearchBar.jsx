import toast, { Toaster } from "react-hot-toast";

function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = form.elements.query.value.trim();

    if (inputValue === "") {
      toast("Please enter a search term");
      return;
    }

    onSubmit(inputValue);
  };

  return (
    <header className="w-full flex justify-center items-center p-4 bg-gray-200">
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          className="border-2 border-gray-300 rounded-lg p-2"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button
          className="border-2 border-gray-300 rounded-lg p-2 hover:cursor-pointer"
          type="submit"
        >
          Search
        </button>
      </form>
      <Toaster
        position="bottom-right"
        toastOptions={{ style: { background: "var(--color-red-200)" } }}
      />
    </header>
  );
}

export default SearchBar;
