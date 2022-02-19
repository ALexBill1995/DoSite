import React from 'react';

export const Description = () => {
  return (
    <div className="cards-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="above-heading">description.above-heading</div>
            <h2 className="h2-heading">description.h2-heading</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-image">
                <img
                  className="img-fluid"
                  src="/images/description-1.png"
                  alt="alternative"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title card-title_1">
                  description.card-title_1
                </h4>
                <p className="p-card p-card_1">description.p-card_1</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img
                  className="img-fluid"
                  src="/images/description-2.png"
                  alt="alternative"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title card-title_2">
                  description.card-title_2
                </h4>
                <p className="p-card p-card_2">description.p-card_2</p>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img
                  className="img-fluid"
                  src="images/description-3.png"
                  alt="alternative"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title card-title_3">
                  description.card-title_3
                </h4>
                <p className="p-card p-card_3">description.p-card_3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
