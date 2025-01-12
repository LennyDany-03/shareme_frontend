import React, { useEffect, useState } from "react";
import sanityClient from "../../sanityClient";
import styles from "./content.module.css";

const ContentPhoto = ({ category }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "photo" && category == $category]{
          title,
          "imageUrl": image.asset->url
        }`,
        { category }
      )
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching photos:", err);
        setError("Failed to load images.");
        setLoading(false);
      });
  }, [category]);

  // Function to handle image download
  const handleDownload = async (imageUrl, title) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = title ? `${title}.jpg` : "downloaded-image.jpg"; // Use the title as filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <>
      {loading && <p>Loading images...</p>}
      {error && <p className={styles.Error}>{error}</p>}

      <div className={styles.PhotoGrid}>
        {photos.length === 0 && !loading && <p>No photos found.</p>}

        {photos.map((photo) => (
          <div key={photo.imageUrl} className={styles.Card}>
            <img
              src={photo.imageUrl}
              alt={photo.title || "Image"}
              className={styles.CardImg}
            />
            <div className={styles.Title}>
              <h3>{photo.title}</h3>
              <button onClick={() => handleDownload(photo.imageUrl, photo.title)} className= {styles.Button}>
                Download Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContentPhoto;
