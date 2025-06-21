import React from "react";

const MenuCard = ({ menuData , addToCart}) => {
 
  return (
    <>
      <div className="container">
        <div className="row">
          {menuData.map((curElem, index) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-12 g-4" key={index}>
                  <div className="card-container">
                    <div className="card">
                      <div className="card-body">
                        <span className="card-number card-circle subtle">
                          {curElem.id}
                        </span>
                        <span className="card-author subtle">
                          {curElem.name}
                        </span>
                        <h2 className="card-title">{curElem.name}</h2>
                        <div className="card-description subtle">
                          {curElem.description}
                        </div>
                        <div className="card-read">Read</div>
                      </div>
                      <img
                        src={curElem.image}
                        alt="images"
                        className="card-media mb-4"
                      />
                      <button className="btn btn-outline-light" onClick={()=> alert("order succesful")}>
                        Order Now
                      </button>
                      <button
                        className="btn btn-outline-light mt-2 "
                        onClick={() =>
                          addToCart({
                            id:curElem.id,
                            name: curElem.name,
                            price: curElem.price,
                            category:curElem.category,
                            image:curElem.image
                          })
                        }
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuCard;
