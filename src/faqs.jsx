// import { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";

// export const FAQ = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAnswer = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <div
//         onClick={toggleAnswer}
//         className="flex flex-row items-center justify-between cursor-pointer"
//       >
//         <h2 className="cursor-pointer  text-xl ">{question}</h2>
//         <div>
//           <RiArrowDropDownLine className="cursor-pointer w-[24px] h-[24px] active:rotate-180 transition-all " />
//         </div>
//       </div>
//       {isOpen && <p>{answer}</p>}
//     </div>
//   );
// };
