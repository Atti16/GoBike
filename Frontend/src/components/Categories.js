import React from "react";

const categories = [
  { title: "Hegyi", image: "frontend/assets/images/Marin Bolinas Ridge 1 Photo.jpg", link: "/categories/mountain" },
  { title: "Terep", image: "assets/images/Marin Gestalt Photo.jpg", link: "/categories/gravel" },
  { title: "Út", image: "assets/images/Polygon Strattos S5 - Shimano 105 Photo.jpg", link: "/categories/road" },
  { title: "Városi", image: "assets/images/Marin Kentfield CS2 ST Photo.jpg", link: "/categories/city" },
  { title: "Elektromos", image: "assets/images/Polygon Mt Bromo N7 Photo.jpg", link: "/categories/electric" }
];

const Categories = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center" style={{ width: "95%", margin: "auto" }}>
        {categories.map((category, index) => (
          <div key={index} className="col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
            <a className="cat-home" href={category.link}>
              <div className="card mx-auto text-center">
                <img src={category.image} alt={category.title} className="card-img-top" />
                <div className="card-body pb-0">
                  <h4 className="card-title">{category.title}</h4>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
