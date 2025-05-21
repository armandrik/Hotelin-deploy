import hotelCardImage from "../../assets/hotel-image.png";

function HomeCardHotel() {
  return (
    <div className="flex justify-between items-center mb-2.5">
      <div className="flex items-center justify-start gap-3.5">
        <img src={hotelCardImage} />
        <div>
          <h3 className="text-h-light text-lg font-medium mb-1 dark:text-h-dark">
            Sulawesi
          </h3>
          <p className="text-p-light text-sm mb-1 dark:text-p-dark">
            Indonesia
          </p>
          <p className="text-secondary text-sm dark:text-accesnt">56.3 km</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary font-bold text-lg dark:text-accesnt">
          $79
        </p>
        <span className="text-xs text-p-light -mt-1 dark:text-p-dark">
          per day
        </span>
      </div>
    </div>
  );
}

export default HomeCardHotel;
