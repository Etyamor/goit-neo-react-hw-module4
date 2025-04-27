function ImageCard({ image, onClick }) {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
      <img
        className="w-full h-full object-cover cursor-pointer"
        src={image.urls.small}
        alt={image.description}
        onClick={() => onClick(image)}
      />
    </div>
  );
}

export default ImageCard;
