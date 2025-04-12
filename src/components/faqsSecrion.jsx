import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const FaqItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div
      className="mb-4 bg-white rounded-[18px] duration-200 transition-all "
      id="faq"
    >
      <div
        className="flex justify-between items-center cursor-pointer bg-white px-6 py-4 rounded-[18px] "
        onClick={onClick}
      >
        <h3 className="text-sm font-semibold text-black my-1 font-Montserrat ">
          {question}
        </h3>
        <svg
          className={`w-5 h-5 fill-black ${
            isActive ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.293 13.293a1 1 0 0 0 1.414 0l5-5a1 1 0 1 0-1.414-1.414L10 10.586l-4.293-4.293a1 1 0 1 0-1.414 1.414l5 5z"
          />
        </svg>
      </div>
      {isActive && (
        <motion.p
          className="py-2 px-4 font-Montserrat  text-black text-[15px] faq"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          transitionEnd={{ scale: 1 }}
        >
          {answer}
        </motion.p>
      )}
    </div>
  );
};

const Faq = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 faq">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isActive={activeIndex === index}
          onClick={() => toggleActive(index)}
        />
      ))}
    </div>
  );
};

export default Faq;
