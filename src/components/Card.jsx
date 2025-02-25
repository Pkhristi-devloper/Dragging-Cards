/* eslint-disable react/prop-types */
import { FaRegFileAlt } from "react-icons/fa";
import { RxDownload } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      dragElastic = {.2}
      dragTransition={{bounceStiffnes:100, bounceDamping: 10}}
      className="relative bg-zinc-800/90 rounded-[35px] w-60 h-70 text-zinc-200 px-5 py-10 overflow-hidden"
    >
      <FaRegFileAlt className=" cursor-pointer active:scale-110" />
      <p className="text-regular font-medium leading-tight mt-5">
        {data.description}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between px-5 py-3">
          <h4>{data.fileSize}</h4>
          <span className="w-8 h-8 rounded-full bg-zinc-500 font-bold flex items-center justify-center cursor-pointer active:scale-105">
            {data.close ? <IoClose /> : <RxDownload size=".9em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag font-semibold w-full py-2 ${
              data.tag.tagColor == "blue" ? "bg-blue-600" : "bg-green-600"
            } cursor-pointer active:scale-105 flex items-center justify-center text-xl`}
          >
            {data.tag.tagTitle}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
