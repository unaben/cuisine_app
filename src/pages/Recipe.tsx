import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useFetchRecipes } from "../hooks/useFetchRecipes";

const Recipe = () => {
  const params = useParams();
  const {recipeDetails} = useFetchRecipes(params.name as string)
  const [activeTab, setActiveTab] = useState<string>("instructions");

  return (
    <DetailWrapper>
      <div>
        <h2>{recipeDetails?.title}</h2>
        <img src={recipeDetails?.image} alt={recipeDetails?.title} />
      </div>
      <Info>
        <ButtonWrapper>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </ButtonWrapper>
        {activeTab === "instructions" && (
          <div>
            <h3
              dangerouslySetInnerHTML={{
                __html: recipeDetails?.summary!,
              }}
            ></h3>
            <h3
              dangerouslySetInnerHTML={{
                __html: recipeDetails?.instructions!,
              }}
            ></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {recipeDetails?.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-heigh: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 3rem;
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
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
  @media (max-width: 900px) {
    margin-left: 0rem;
    margin-top: 2rem;
  }
`;
const ButtonWrapper = styled.div`
  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
  }
`;
export default Recipe;
