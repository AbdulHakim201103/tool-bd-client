import React from "react";

const Blogs = () => {
  return (
    <div className=" container mx-auto my-10 ">
      <h1 className="text-center text-primary text-5xl my-10">Blog</h1>
      <div>
        <div className=" bg-zinc-300  rounded p-3">
          <h3 className="text-center text-2xl text-blue-500 my-5">
            01. What is a unit test? Why should write unit tests?
          </h3>
          <div className=" p-5">
            <p>
              Unit Test হল এক ধরনের সফটওয়্যার টেস্টিং যেখানে একটি সফটওয়্যারের পৃথক ইউনিট বা
              উপাদান পরীক্ষা করা হয়। উদ্দেশ্য হল সফ্টওয়্যার কোডের প্রতিটি ইউনিট প্রত্যাশিত হিসাবে
              কাজ করে তা যাচাই করা। ডেভেলপারদের দ্বারা একটি অ্যাপ্লিকেশনের ডেভেল এর (কোডিং পর্ব) সময়
              ইউনিট পরীক্ষা করা হয়।ইউনিট পরীক্ষাগুলি ডেভেলপারদের চক্রের প্রথম দিকে বাগগুলি ঠিক করতে  সাহায্য করে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
