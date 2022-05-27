import React from "react";
import countrice from "../../../assets/icon/countrice.jpg"
import executives from "../../../assets/icon/executives.png"
import happy from "../../../assets/icon/happy.png"
import product from "../../../assets/icon/product.png"
import service from "../../../assets/icon/service.jpg"

const BusinessSummary = () => {
  return (
    <div className="container mx-auto my-20">
      <div>
        <h1 className="text-center text-primary text-5xl mt-20">Millions Business Trust Us</h1>
        <p className="text-center mt-4 mb-10">Try To Understand Users Expectation</p>
        <div className="flex justify-center items-center">
          <div className="stats stats-vertical lg:stats-horizontal shadow text-center">
            <div className="stat">
              <div className="stat-title">HAPPY CLIENTS</div>
              <div class="avatar mx-auto my-4">
                <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={happy} alt="" />
                </div>
              </div>
              <div className="stat-value text-primary">301K+ </div>
            </div>

            <div className="stat">
              <div className="stat-title">SERVICE CENTRE</div>
              <div class="avatar mx-auto my-4">
                <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={service} alt="" />
                </div>
              </div>
              <div className="stat-value text-primary">70</div>
            </div>

            <div className="stat">
              <div className="stat-title">PRODUCTS</div>
              <div class="avatar mx-auto my-4">
                <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={product} alt="" />
                </div>
              </div>
              <div className="stat-value text-primary">150</div>
            </div>

            <div className="stat">
              <div className="stat-title">COUNTRIES</div>
              <div class="avatar mx-auto my-4">
                <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={countrice} alt="" />
                </div>
              </div>
              <div className="stat-value text-primary">32</div>
            </div>

            <div className="stat">
              <div className="stat-title">EXECUTIVES</div>
              <div class="avatar mx-auto my-4">
                <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={executives} alt="" />
                </div>
              </div>
              <div className="stat-value text-primary">600</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
