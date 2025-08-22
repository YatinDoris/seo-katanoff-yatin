import { motion, AnimatePresence } from "framer-motion";
import {
  BadgeInfo,
  CircleAlert,
  CircleCheck,
  TriangleAlert,
} from "lucide-react";
import { SlClose } from "react-icons/sl";

const severityStyles = {
  success: "bg-[#28a785]",
  error: "bg-[#dc3545]",
  warning: "bg-[#ffc107]",
  info: "bg-[#17a2b8] ",
};

const iconMap = {
  success: <CircleCheck className="w-6 h-6" />,
  error: <CircleAlert className="w-6 h-6" />,
  warning: <TriangleAlert className="w-6 h-6" />,
  info: <BadgeInfo className="w-6 h-6" />,
};

const Alert = ({ type = "info", message, removeMessage }) => {
  if (!message) return null;
  const normalizedType = type.toLowerCase();
  
  return (
    <AnimatePresence>
      <motion.div
        className="w-full"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
      >
        <div
          className={`z-10 w-[100%] mx-auto flex items-center justify-between p-2.5 md:p-4 rounded-xl text-white ${severityStyles[normalizedType]}`}
        >
          <div className="flex items-center">
            <div className="mr-3 text-white">{iconMap[normalizedType]}</div>
            <p>{message}</p>
          </div>
          {removeMessage ? (
            <div
              className="p-1.5 xxs:p-2 hover:bg-white/10 cursor-pointer text-white transition-colors rounded-full"
              onClick={removeMessage}
            >
              <SlClose color="#fffff" className="w-5 h-5" />
            </div>
          ) : (
            ""
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
