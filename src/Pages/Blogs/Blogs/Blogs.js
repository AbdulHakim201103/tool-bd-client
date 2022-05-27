import React from "react";

const Blogs = () => {
  return (
    <div className=" container mx-auto my-10 ">
      <h1 className="text-center text-primary text-5xl my-10">Blog</h1>
      <div>
        <div className=" bg-zinc-300  my-5 rounded p-3">
          <h3 className="text-center text-2xl text-blue-500 my-5">
            01.How will you improve the performance of a React Application? </h3>
          <div className=" p-5">
            <p>
              যেখানে প্রয়োজন সেখানে Component State Local  রাখা। Unnecessary Re-renders. প্রতিরোধ
              করার জন্য React Components Memoizing করা। গতিশীল আমদানি () ব্যবহার করে
              React Code-splitting React import করা বা তালিকা Dynamic করা।
              Lazy loading images in React.।
            </p>
          </div>
        </div>
        <div className=" bg-zinc-300 my-5  rounded p-3">
          <h3 className="text-center text-2xl text-blue-500 my-5">
            02.What are the different ways to manage a state in a React application?
          </h3>
          <div className=" p-5">
            <p>
              প্রতিটি React Component একটি Built-in অবস্থা আছে । এই অবস্থাটি একটি বস্তু যা একটি
              উপাদানের অন্তর্গত property মান stores করে। State different components থেকে ডেটা
              In-sync রাখতে সক্ষম কারণ প্রতিটি State আপডেট সমস্ত Relevant Components Re-renders করে৷
            </p>
          </div>
        </div>
        <div className=" bg-zinc-300 my-5  rounded p-3">
          <h3 className="text-center text-2xl text-blue-500 my-5">
            03.How does prototypical inheritance work?
          </h3>
          <div className=" p-5">
            <p>
              জাভাস্ক্রিপ্ট একটি প্রোটোটাইপ-ভিত্তিক, অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং ভাষা। ES6
              আপডেটের পরে, জাভাস্ক্রিপ্ট "Prototypical Inheritance " এর জন্য অনুমতি দিয়েছে, যার
              অর্থ বস্তু এবং পদ্ধতিগুলি ভাগ করা, প্রসারিত এবং অনুলিপি করা যেতে পারে।অবজেক্টের মধ্যে
              ভাগ করা কাঠামোর (ডেটা ক্ষেত্র), আচরণ (ফাংশন/পদ্ধতি), এবং অবস্থা (ডেটা মান) এর সহজ
              Inheritance তৈরি করে।
            </p>
          </div>
        </div>
        <div className=" bg-zinc-300  my-5 rounded p-3">
          <h3 className="text-center text-2xl text-blue-500 my-5">
            04. What is a unit test? Why should write unit tests?
          </h3>
          <div className=" p-5">
            <p>
              Unit Test হল এক ধরনের সফটওয়্যার টেস্টিং যেখানে একটি সফটওয়্যারের পৃথক ইউনিট বা উপাদান
              পরীক্ষা করা হয়। উদ্দেশ্য হল সফ্টওয়্যার কোডের প্রতিটি ইউনিট প্রত্যাশিত হিসাবে কাজ করে
              তা যাচাই করা। ডেভেলপারদের দ্বারা একটি অ্যাপ্লিকেশনের ডেভেল এর (কোডিং পর্ব) সময় ইউনিট
              পরীক্ষা করা হয়।ইউনিট পরীক্ষাগুলি ডেভেলপারদের চক্রের প্রথম দিকে বাগগুলি ঠিক করতে
              সাহায্য করে।
            </p>
          </div>
        </div>

        
       
        <div className=" bg-zinc-300 my-5  rounded p-3">
          <h3 className="text-center text-2xl text-blue-500 my-5">
            05. Why you do not set the state directly in React. For example, if you have const
            [products, setProducts] = useState([]). Why you do not set products = [...] instead, you
            use the setProducts
          </h3>
          <div className=" p-5">
            <p>
              One should never update the products directly because If you update it directly,
              calling the setProducts() afterward may just replace the update you made. When you
              directly update the state, it does not change this.state immediately. Instead, it
              creates a pending state transition, and accessing it after calling this method will
              only return the present value. You will lose control of the state across all
              components. Thats why we don't use setProducts directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
