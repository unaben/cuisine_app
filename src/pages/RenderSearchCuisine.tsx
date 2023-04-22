import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSearchCuisine } from "../hooks/useSearchCuisine";

const RenderSearchCuisine = () => {
  let params = useParams();
  const { searchResult } = useSearchCuisine(params);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {searchResult.map((result) => {
        return (
          <Card key={result.id}>
            <Link to={`/recipe/${result.id}`}>
              <img src={result.image} alt={result.title} />
              <h4>{result.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default RenderSearchCuisine;
