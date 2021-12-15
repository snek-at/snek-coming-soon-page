import React from 'react';
import ReactDOM from 'react-dom';
import {Box, Center, ChakraProvider, Flex, Heading, Image, keyframes, Link} from "@chakra-ui/react";

import brand from './christmas_brand.svg';
/*import snowflake from './snowflake.png';*/
import snowflake from './snowflake.svg';
import Particles from "react-tsparticles";

//! BUG: Font doesnt get imported/loaded atm (Temp. solution: import via google fonts - prob a webpack-related issue)
import '@fontsource/montserrat';
import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";

const App = () => {
    return (
        <>
            <MouseParallaxContainer resetOnLeave>
                <Particles
                    style={{position: 'absolute'}}
                    options={
                        {
                            "particles": {
                                "number": {
                                    "value": 160,
                                    "density": {
                                        "enable": true,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": "#ffffff"
                                },
                                "shape": {
                                    "type": "image",
                                    "stroke": {
                                        "width": 0,
                                        "color": "#fff"
                                    },
                                    "polygon": {
                                        "nb_sides": 5
                                    },
                                    "image": {
                                        "src": snowflake,
                                        "width": 500,
                                        "height": 500
                                    }
                                },
                                "opacity": {
                                    "value": 1,
                                    "random": true,
                                    "anim": {
                                        "enable": true,
                                        "speed": 1,
                                        "opacity_min": 0,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 6,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 4,
                                        "size_min": 0.3,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": false,
                                    "distance": 150,
                                    "color": "#ffffff",
                                    "opacity": 0.4,
                                    "width": 1
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 1,
                                    "direction": "none",
                                    "random": true,
                                    "straight": false,
                                    "out_mode": "out",
                                    "bounce": false,
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 600
                                    }
                                }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                    "onhover": {
                                        "enable": false,
                                        "mode": "grab"
                                    },
                                    "onclick": {
                                        "enable": true,
                                        "mode": "push"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 400,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                    },
                                    "bubble": {
                                        "distance": 250,
                                        "size": 0,
                                        "duration": 2,
                                        "opacity": 0
                                    },
                                    "repulse": {
                                        "distance": 400,
                                        "duration": 0.4
                                    },
                                    "push": {
                                        "particles_nb": 4
                                    },
                                    "remove": {
                                        "particles_nb": 2
                                    }
                                }
                            },
                            "retina_detect": true
                        }
                    }
                />
                <MouseParallaxChild factorX={0.03} factorY={0.02} inverted>
                    <Flex w='100vw' h='100vh'>
                        <Center w='full'>
                            <Box>
                                <Image
                                    position='relative'
                                    src={brand}
                                    boxSize='150px'
                                    marginLeft='50%'
                                    transform='translateX(-50%)'
                                    alt='Offical Snek Logo'
                                    _hover={{
                                        animation:keyframes`
                                            0% {transform: rotate(0deg) translateX(-50%);}
                                            25% {transform: rotate(-5deg) translateX(-50%);}
                                            50% {transform: rotate(10deg) translateX(-50%);}
                                            75% {transform: rotate(-2.5deg) translateX(-50%);}
                                            100% {transform: rotate(0deg) translateX(-50%);}`
                                            + ' 0.5s linear'
                                    }}
                                    filter='drop-shadow( 0px 0px 10px rgba(255, 255, 255, .2));'
                                />
                                <Heading
                                    as='h3'
                                    style={{fontFamily: 'montserrat'}}
                                    mt='15px'
                                    color='#fff'
                                >
                                    Coming soon
                                </Heading>
                            </Box>
                        </Center>
                    </Flex>
                    <Link
                        href='#'
                        position='absolute'
                        bottom='25px'
                        left='50%'
                        transform='translateX(-50%)'
                        transition='all .3s ease'
                        opacity='0.3'
                        fontFamily='Alata'
                        _hover={{
                            opacity: 1,
                            transform: 'translateX(-50%) scale(1.05)'
                        }}
                        color='#fff'
                        css={`
                            &::after {
                                content: '';
                                position: absolute;
                                top: 100%;
                                left: 50%;
                                width: 0;
                                height: 2px;
                                background: white;
                                border-radius: 2px;
                                transition: all 0.3s ease;
                            }
                            
                            &:hover::after {
                              width: 80%;
                              left: 10%;
                            }
                        `}
                        isExternal
                    >
                        Imprint
                    </Link>

                </MouseParallaxChild>

            </MouseParallaxContainer>
        </>
    )
}

ReactDOM.render(<ChakraProvider><App /></ChakraProvider>, document.getElementById('root'));