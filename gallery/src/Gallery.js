import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from './Card';

export default () => {
  const images = (new Array(100)).fill(null);
  const params = useParams();
  const { page } = params;
  const totalPages = () => images.length / 10;
  const giveMeTheDamnPrevPage = () => (+page === 1 ? page : +page - 1);
  const giveMeTheDamnNextPage = () => (+page === (totalPages()) ? page : +page + 1);
  return (
    <>
      <div className="row mb-5 justify-content-center">
        {
        images.slice((page - 1) * 10, page * 10).map(
          (image, i) => (
            <Card
              key={Math.random() * 1000}
              src={image ? image.src : null}
              alt={image ? image.alt : null}
              i={i + (page - 1) * 10} />
          ),
        )
      }
      </div>
      <div className="row mb-5">
        <div className="col-12 text-center">
          <Link to={`/${giveMeTheDamnPrevPage()}`}>
            <button type="submit" className="p-5">
              Prev
            </button>
          </Link>
          <span className="mx-5">
            {`${page} of ${totalPages()}`}
          </span>
          <Link to={`/${giveMeTheDamnNextPage()}`}>
            <button type="submit" className="p-5">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
