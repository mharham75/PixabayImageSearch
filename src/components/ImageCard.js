import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  const handleDownload = async () => {
    const url = image.largeImageURL || image.webformatURL;
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `pixabay-${image.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        loading="lazy"
        decoding="async"
        src={image.webformatURL}
        alt=""
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <button
          onClick={handleDownload}
          className="mb-2 inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-1 px-3 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586V3a1 1 0 011-1zM4 15a1 1 0 100 2h12a1 1 0 100-2H4z"
              clipRule="evenodd"
            />
          </svg>
          Download
        </button>
        <ul>
          <li>
            <strong>Views :</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads :</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes :</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={`${image.id}-${index}`}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
