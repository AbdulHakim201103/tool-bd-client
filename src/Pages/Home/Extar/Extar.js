import React from "react";
import innovation from '../../../assets/extar/innovation.png'
import shipping from '../../../assets/extar/shipping.png'
import support from '../../../assets/extar/support.png'

const Extar = () => {
  return (
    <div className="container mx-auto bg-stone-100 p-20 my-10">
      <div className="flex mx-auto justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-20">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
            <div class="avatar mx-auto my-4">
                <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={support} alt="" />
                </div>
              </div>
              <h2 className="text-2xl text-center text-primary uppercase">24X7 SUPPORT</h2>
              <p className="text-center">We have invested heavily to ensure that our products, process and customer service are second to none</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
            <div class="avatar mx-auto my-4">
                <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={innovation} alt="" />
                </div>
              </div>
              <h2 className="text-2xl text-center text-primary uppercase">Innovation</h2>
              <p className="text-center"> Innovation Since 2002  been supplying the highest quality tools to a variety of specialist markets.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
            <div class="avatar mx-auto my-4">
                <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={shipping} alt="" />
                </div>
              </div>
              <h2 className="text-2xl text-center text-primary uppercase">FAST SHIPPING</h2>
              <p className="text-center">Check out our fast shipping selection for the very best in unique or custom, handmade pieces from our shops.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extar;
