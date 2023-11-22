import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useParams } from "react-router-dom";

const EachDetail = () => {
  const { services } = useContext(AuthContext);
  const [detail, setDetail] = useState({});
//   const [isChecked, setIsChecked] = useState(false); 
  const { id } = useParams();

  useEffect(() => {
    const findDetail = services?.find((item) => item.id === id);
    setDetail(findDetail);
  }, [services, id]);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked); 
//   };

  return (
    <div>
      {detail && (
        <div className="card card-compact w-[1100px] mx-auto my-20 bg-base-100 shadow-xl">
          <figure>
            {detail.image && ( 
              <img
                className="w-[1100px] h-[500px]"
                src={detail.image} 
                alt={detail.name}
              />
            )}
          </figure>
          <div className="card-body">
            <h2 className="card-title">{detail.name}</h2>
            <p>{detail.details}</p>
            <div className="card-actions justify-end">
          
              <label>
                <input
                  type="checkbox"
                  name="bookNow"
                //   checked={isChecked}
                //   onChange={handleCheckboxChange}
                />
                Book Now
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EachDetail;
