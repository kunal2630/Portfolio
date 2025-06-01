import { Box, Button, Grid } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
function LandingPage() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container direction="row"
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: '100vh',
                        maxHeight: '100vh',

                    }}>
                    <Grid size={9}>
                        <p className="text-2xl my-5 tracking-wide ms-1" style={{ color: 'rgb(232 138 37)' }}>Hi, my name is</p>
                        <div className="text-4xl sm:text-5xl md:text-6xl my-4 font-bold">
                            <Typewriter
                                words={['Kishlay Kunal.']}
                                loop={30}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={120}
                                delaySpeed={1000}

                            />
                        </div>
                        <p className="text-3xl md:text-5xl my-6 font-bold">I build things for the web.</p>
                        <p className="text-md md:text-lg md:w-[75%] my-4 font-medium tracking-wide">With over a year of experience in building scalable and robust software solutions, I bring strong full-stack development skills and a problem-solving mindset to the table.Whether it's designing clean UIs or architecting efficient backend systems, I’m always exploring new technologies and refining my craft to build impactful products.</p>
                        <Link to="/portfolio/about">
                            <Button
                                variant="contained"
                                sx={{
                                    padding: '10px 15px',
                                    backgroundColor: 'rgb(232, 138, 37)',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    my: 2.5,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgb(200, 120, 30)',
                                        transform: 'scale(0.95)',
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                                    },
                                    '& .MuiButton-endIcon svg': {
                                        fontSize: '30px',
                                    },
                                }}
                                endIcon={<ChevronRightIcon />}
                            >
                                Know More
                            </Button>
                        </Link>
                    </Grid>

                </Grid>
            </Box >
        </>

    );
}

export default LandingPage;