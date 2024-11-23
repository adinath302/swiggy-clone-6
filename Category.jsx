import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Category = () => {
  const [categeries, setcategory] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch("https://localhost:5000/categories");
    const data = await response.json();
    setcategory(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between my-5">
        <div className="text-[25px] font-blod">What's on your mind?</div>
        <div className="flex">
          <div className=" flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer">
            <FaArrowLeftLong />
          </div>
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer ">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
