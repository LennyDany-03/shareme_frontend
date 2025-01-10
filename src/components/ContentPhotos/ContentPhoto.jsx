import React, { useEffect, useState } from 'react';
import sanityClient from '../../sanityClient';
import styles from './content.module.css';

const ContentPhoto = ({ category }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "photo" && category == $category]{
          title,
          "imageUrl": image.asset->url
        }`,
        { category }
      )
      .then((data) => setPhotos(data))
      .catch(console.error);
  }, [category]);

  return (
    <>
      <div className={styles.PhotoGrid}>
        {photos.map((photo) => (
          <div key={photo.imageUrl} className={styles.Card}>
            <img src={photo.imageUrl} alt={photo.title} className={styles.CardImg} />
            <h3>{photo.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContentPhoto;
