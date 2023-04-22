import React from 'react'
import PopularCuisine from "../components/PopularCuisine";
import Veggies from '../components/Veggies'
import {motion} from 'framer-motion'
const Home =() => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggies />
      <PopularCuisine />
    </motion.div>
  );
}

export default Home