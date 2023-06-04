import PropTypes from 'prop-types';

import {ImageGalleryItemStyled, ImageGalleryImageStyled} from './ImageGalleryItem.styled'

const ImageGalleryItem = ({ gallery, openModal }) => {
  return (
    <>
      {gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItemStyled
          key={id}
          onClick={() => {
            openModal({ src: largeImageURL, alt: tags });
          }}
        >
          <ImageGalleryImageStyled
            src={webformatURL}
            alt={tags}
            width="350"
          />
        </ImageGalleryItemStyled>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGalleryItem;