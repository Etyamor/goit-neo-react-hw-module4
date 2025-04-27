import ImageCard from "../ImageCard/ImageCard.jsx";

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="container mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {images.map((image) => (
        <li
          className="flex justify-center items-center col-span-1 max-h-80"
          key={image.id}
        >
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
