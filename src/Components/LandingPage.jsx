import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function LandingPage() {
    return (
        <div className="min-h-screen  px-4 flex items-center justify-center ">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-10 shadow-lg max-w-4xl w-full text-white z-10">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-[#FEC260] mb-4 font-mono"
                >
                    Hi, my name is
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-bold mb-2"
                >
                    <Typewriter
                        words={['Kishlay Kunal']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={120}
                        delaySpeed={1000}
                    />
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl sm:text-3xl font-semibold text-gray-300 my-6"
                >
                    I build things for the web.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-md sm:text-lg text-gray-400 max-w-3xl leading-relaxed"
                >
                    With over a year of experience in building scalable and robust software solutions, I bring strong full-stack development skills and a problem-solving mindset to the table. Whether it's designing clean UIs or architecting efficient backend systems, I’m always exploring new technologies and refining my craft to build impactful products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    className="mt-8"
                >
                    <Link to="/about">
                        <button className="flex items-center gap-2 bg-[#FEC260] text-black font-semibold py-3 px-6 rounded-full hover:bg-[#e5aa4d] transition duration-300 shadow-md hover:scale-95 hover:cursor-pointer">
                            KNOW MORE <ChevronRightIcon />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default LandingPage;
