import { useEffect, useState } from "react";
import { searchImages } from "./unsplash-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import Loader from "./components/Loader/Loader.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleSearch = async (inputQuery) => {
    if (inputQuery === query) {
      return;
    }
    setImages([]);
    setPage(1);
    setTotalPages(0);
    setQuery(inputQuery);
  };

  const handleLoadMore = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await searchImages(query, page);
        setImages((prevImages) => [...prevImages, ...response.data.results]);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      getImages();
    }
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {!!images.length && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage errorMessage={error.message} />}
      {!loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          image={modalImage}
        />
      )}
    </>
  );
}

export default App;
