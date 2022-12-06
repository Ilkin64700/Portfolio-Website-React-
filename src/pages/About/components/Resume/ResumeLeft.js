import { resumecontentleft } from "../AboutListData";
import { motion } from 'framer-motion'
import { BsFillBriefcaseFill } from 'react-icons/bs'

const ResumeLeft = () => {

  // const[color,setColor]=useState("bg-white");
  // const[theme,setTheme]=useState("light")

  // const toggleColor=()=>{

  //   if (theme==="light") {
  //     setColor("bg-dark")
  //   } else {
  //     setColor("bg-white")
  //   }
  // }

  // useEffect(()=>{
  //  document.body.querySelectorAll(".place");
  // },[color])

  
  return (
    <div>
      {resumecontentleft.map((item, index) => (
        <motion.li
          whileInView={{ opacity: [0, 1] }}
          transition={{ delay: 0.2 * index }}
        >
          <li key={index}>
            <div className="icon">
              <BsFillBriefcaseFill className="education-about-icon" />
              <span className="time open-sans-font text-uppercase">
                {item.year}
              </span>
              <h5 className="poppins-font text-uppercase">
                {item.profession}
                <span  className="place open-sans-font">{item.workplace}</span>
              </h5>
              <p className="open-sans-font">{item.description}</p>
            </div>
          </li>
        </motion.li>
      ))}
    </div>
  );
};

export default ResumeLeft;
