import PropTypes from "prop-types";

const ApartmentCard = ({apartment}) => {
    const { apartment_image, floor_no, block_name, apartment_no, rent } =
      apartment
    return (
      <div className="card bg-slate-200 shadow-2xl rounded-t-2xl ">
        <img
          className="w-full h-56 rounded-t-2xl"
          src={apartment_image}
          alt=""
        />
        <div className="p-5 space-y-3">
          <div className="flex justify-between">
            <h1>Floor No: {floor_no}</h1>
            <p>Block Name: {block_name}</p>
          </div>
          <div className="flex justify-between">
            <p>Apartment No: {apartment_no}</p>
            <p>Price: {rent}</p>
          </div>
          <div className="text-end">
            <button className="btn bg-[#344B8F] text-white font-bold">
              Agreement
            </button>
          </div>
        </div>
      </div>
    );
};

ApartmentCard.propTypes = {
    apartment: PropTypes.object
}

export default ApartmentCard;