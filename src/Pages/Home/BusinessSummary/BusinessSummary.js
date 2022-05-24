import React from "react";

const BusinessSummary = () => {
  return (
    <div className="container mx-auto my-20">
      <div>
        <h1 className="text-center text-primary text-5xl mt-20">Millions Business Trust Us</h1>
        <p className="text-center mt-4 mb-10">Try To Understand Users Expectation</p>
        <div className="flex justify-center items-center">
          <div class="stats stats-vertical lg:stats-horizontal shadow text-center">
            <div class="stat">
              <div class="stat-title">HAPPY CLIENTS</div>
              <div class="stat-value text-primary">301K+ </div>
            </div>

            <div class="stat">
              <div class="stat-title">SERVICE CENTRE</div>
              <div class="stat-value text-primary">70</div>
            </div>

            <div class="stat">
              <div class="stat-title">PRODUCTS</div>
              <div class="stat-value text-primary">150</div>
            </div>

            <div class="stat">
              <div class="stat-title">COUNTRIES</div>
              <div class="stat-value text-primary">32</div>
            </div>

            <div class="stat">
              <div class="stat-title">EXECUTIVES</div>
              <div class="stat-value text-primary">600</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
