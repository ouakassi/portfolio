import { motion } from "framer-motion";
import "./IntoCodeSvg.css";

export default function HeroSvg() {
  const firstWord = "Ideas";
  const secondWord = "Into ";
  const thirdWord = "Coding";

  const sentenceAnimation = {
    hidden: {
      // opacity: 0,
    },
    visible: {
      // opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger each letter animation
        when: "beforeChildren",
      },
    },
  };

  const letterAnimation = {
    hidden: {
      WebkitTextStroke: "1px var(--main-color)",
      opacity: 0,
      filter: "blur(10px)",
      color: "#000",
      y: -100, // Start above
    },
    visible: {
      opacity: 1,
      WebkitTextStroke: ["1px var(--main-color)", "2px var(--second-color)"],
      filter: "blur(0px)",
      color: "#fff",

      y: 0, // Drop to original position
      transition: {
        type: "spring",
        damping: 12, // Control the bounciness
        stiffness: 200,
        // delay: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="hero__svg"
      variants={sentenceAnimation}
      initial="hidden"
      whileInView="visible"
    >
      <div>
        {firstWord.split("").map((char, i) => {
          return (
            <motion.span key={i} variants={letterAnimation}>
              {char}
            </motion.span>
          );
        })}
      </div>
      <div>
        {secondWord.split("").map((char, i) => {
          return (
            <motion.span key={i} variants={letterAnimation}>
              {char}
            </motion.span>
          );
        })}
        <div className="words__third">
          <svg
            className="line line__one"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 400"
          >
            <motion.path
              d="M456.0538024902344,47.533634185791016C443.8863883972168,55.49775936762492,258.0254001363119,159.70253639856975,258.744384765625,176.68161010742188C259.4633693949381,193.660683816274,456.6517274983724,315.9013546244303,467.7130126953125,322.8699645996094C478.7742978922526,329.8385745747884,439.94169067382813,291.73243474324545,438.1165771484375,289.68609619140625"
              fill="none"
              strokeWidth="20"
              stroke='url("#SvgjsLinearGradient1007")'
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                delay: 1,
                duration: 1,
                ease: "easeInOut",
              }}
            ></motion.path>
            <defs>
              <linearGradient id="SvgjsLinearGradient1007">
                <stop stopColor="hsl(162, 100%, 58%)" offset="0"></stop>
                <stop stopColor="hsl(270, 73%, 53%)" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="line line__two"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 400"
          >
            <motion.path
              d="M502.6905822753906,40.35874557495117C491.43946075439453,56.33184022903443,338.34079940795897,271.81615186691283,329.5964050292969,286.0986633300781C320.8520106506348,300.3811747932434,365.65471084594725,261.7802743530273,368.16143798828125,260.0896911621094"
              fill="none"
              strokeWidth="20"
              stroke='url("#SvgjsLinearGradient1008")'
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                delay: 1.2,
                duration: 1,
                ease: "easeInOut",
              }}
            ></motion.path>
            <defs>
              <linearGradient id="SvgjsLinearGradient1008">
                <stop stopColor="hsl(270, 73%, 53%)" offset="0"></stop>
                <stop stopColor="hsl(270, 73%, 53%)" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>

          {thirdWord.split("").map((char, i) => {
            return (
              <motion.span
                // style={{}}
                style={{
                  // display: "inline-block",
                  // backgroundClip: "unset",
                  // background: "unset",
                  WebkitTextFillColor: "var(--second-color)",
                  // WebkitTextStroke: "none",
                }}
                key={i}
                variants={letterAnimation}
              >
                {char}
              </motion.span>
            );
          })}
          <svg
            className="line"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 400"
          >
            <motion.path
              d="M353.8116455078125,50.22421646118164C391.1808573404948,77.13004620869954,579.9701131184896,167.41405296325684,578.0269165039062,211.65919494628906C576.0837198893229,255.9043369293213,364.4245147705078,302.24215443929035,342.1524658203125,315.695068359375C319.8804168701172,329.14798227945965,427.35426330566406,296.26307678222656,444.3946228027344,292.3766784667969"
              fill="none"
              strokeWidth="20"
              stroke='url("#SvgjsLinearGradient1009")'
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                delay: 1.6,
                duration: 1,
                ease: "easeInOut",
              }}
            ></motion.path>
            <defs>
              <linearGradient id="SvgjsLinearGradient1009">
                <stop stopColor="hsl(162, 100%, 58%)" offset="0"></stop>
                <stop stopColor="hsl(270, 73%, 53%)" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <motion.svg
        className="words__arrow"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 640 800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.g
          strokeWidth="12"
          stroke="hsl(270, 73%, 43%)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="matrix(0.6946583704589974,0.7193398003386511,-0.7193398003386511,0.6946583704589974,354.4452415885813,-117.05208429196728)"
        >
          <motion.path
            d="M62.5 183.64694213867188Q317.5 -120.35305786132812 577.5 698.6469421386719"
            markerEnd="url(#SvgjsMarker4270)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: 1,
              duration: 1.6,
              ease: "easeInOut",
            }}
          />
        </motion.g>
        <motion.defs>
          <motion.marker
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            viewBox="0 0 6 6"
            orient="auto"
            id="SvgjsMarker4270"
          >
            <polyline
              points="0,3 3,1.5 0,0"
              fill="none"
              strokeWidth="1"
              stroke="hsl(270, 73%, 43%)"
              strokeLinecap="round"
              transform="matrix(1,0,0,1,1,1.5)"
              strokeLinejoin="round"
            ></polyline>
          </motion.marker>
        </motion.defs>
      </motion.svg>
      <motion.svg
        className="words__square"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="SvgjsLinearGradient1006">
            <stop stopColor="hsl(172, 100%, 58%)" offset="0" />
            <stop stopColor="hsl(270, 73%, 43%)" offset="1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M94.61883483339398 49.327360247282456C95.00149535585491 57.028406593311104 92.80118967144736 330.43946789295296 108.96860442567913 338.1165982233566C125.1360191799109 345.7937285537603 685.0882178696895 345.11212429554087 700.8968881170854 337.2197476374191C716.7055583644812 329.32737097929737 717.9850698797807 49.90135273487198 701.7937387030229 42.152473543791245C685.6024075262651 34.40359435271051 93.76980264752159 46.684610562630766 93.72196898866741 46.63677797189183C93.67413532981324 46.5889453811529 684.9805447332964 40.6218306147141 699.9999764959916 40.358751391081285C715.0194082586869 40.09567216744847 658.1464738918249 36.005985735563705 656.9506600897416 36.77130708566136C655.7548462876583 37.53662843575902 653.9850595038041 68.22123170724339 655.1569589178666 69.0583020197434C656.3288583319292 69.8953723322434 699.7010743150021 68.87893256377009 700.8968881170854 68.16144380441136C702.0927019191687 67.44395504505263 701.1479598944292 42.272055046069895 699.9999764959916 42.152473543791245C698.8519930975541 42.032892041512596 658.9954924465125 63.988049283333886 657.8475106756791 63.677137468962144C656.6995289048458 63.3662256545904 655.8026766913041 30.469364184050036 656.9506600897416 30.493280504850816C658.0986434881792 30.517196825651595 699.7249887030229 63.665180325814354 700.8968881170854 64.57399949899144 "
          fill="none"
          strokeWidth="4"
          stroke="url(#SvgjsLinearGradient1006)"
          strokeLinecap="round"
          strokeDasharray="125 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </motion.div>
  );
}
