import React from "react";

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
              <div className="stat-value text-primary">301K+ </div>
            </div>

            <div className="stat">
              <div className="stat-title">SERVICE CENTRE</div>
              <div className="stat-value text-primary">70</div>
            </div>

            <div className="stat">
              <div className="stat-title">PRODUCTS</div>
              <div className="stat-value text-primary">150</div>
            </div>

            <div className="stat">
              <div className="stat-title">COUNTRIES</div>
              <div className="stat-value text-primary">32</div>
            </div>

            <div className="stat">
              <div className="stat-title">EXECUTIVES</div>
              <div className="stat-value text-primary">600</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
