import React from "react";
import abdulhakim from "../../../assets/logo/abdulhakim.jpeg";

const Portfolio = () => {
  return (
    <div className="container mx-auto">
      <div class="card w-full bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={abdulhakim} alt="Shoes" class="rounded-xl" />
        </figure>
        <div className="flex  justify-start items-center">
          <div class=" my-20 p-20 w-6/12 mx-auto">
            <h1 className=" text-4xl my-4 text-primary">Abdul Hakim Mia</h1>
            <br />
            <p className="my-4">
              <span className="text-3xl my-4 text-primary">Contact: </span>
            </p>
            <div>
              <span><span className="text-xl text-blue-600">Email:</span> abdulhakim201103@gmail.com</span>
              <br />
              <span ><span className="text-xl text-blue-600">Phone:</span> 01703454892</span>
              <br />
              <span ><span className="text-xl text-blue-600">Facebook:</span> www.facebook.com/ahmleon551</span>
            </div>

            <br />
            <p className="text-3xl my-4 text-primary">Address:</p>
            <div>
              <span><span className="text-xl text-blue-600">Vll:</span> Bhawal,</span>
              <br />
              <span><span className="text-xl text-blue-600" >Post:</span> Saltha(7801),</span>
              <br />
              <span><span className="text-xl text-blue-600">P.S:</span> Satlth,</span>
              <br />
              <span><span className="text-xl text-blue-600">Dist:</span> Faridpur</span>
            </div>
            <br />
            <p className="text-3xl my-4 text-primary">Education:</p>
            <div>
              <span><span className="text-xl text-blue-600">Lavel:</span> Bachelor/Honors,</span>
              <br /> 
              <span><span className="text-xl text-blue-600">Degree Title:</span> Bachelor of Business Administration (BBA),</span>
              <br /> 
              <span><span className="text-xl text-blue-600">Institution Name:</span> GOVT.RAJENDRA COLLAGE,FARIDPUR,</span>
              <br /> 
              <span><span className="text-xl text-blue-600">Year:</span> 4th</span>
              <br /> 
              <span><span className="text-xl text-blue-600">Session:</span> 2017-2018,</span>
            </div>
            <br />
            <p className="text-3xl my-4 text-primary">Skills:</p>
            <div>
              <span className="text-xl text-blue-600">HTML,</span>
              <br /> 
              <span className="text-xl text-blue-600">CSS,</span>
              <br /> 
              <span className="text-xl text-blue-600">JavaScript,</span>
              <br /> 
              <span className="text-xl text-blue-600">Bootstrap,</span>
              <br /> 
              <span className="text-xl text-blue-600">Tailwind CSS,</span>
              <br /> 
              <span className="text-xl text-blue-600">React JS,</span>
              <br /> 
              <span className="text-xl text-blue-600">Node JS,,</span>
              <br /> 
              <span className="text-xl text-blue-600">MongoDB,</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
