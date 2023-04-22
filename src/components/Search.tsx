import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/search/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type={input}
          placeholder="Search cuisine by types"
        />
      </div>
    </FormStyle>
  );
};
const FormStyle = styled.form`
  margin: 0rem 10rem;
  div {
    position: relative;
    width: 100%;
    color: white;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.3rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 0.2rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }

  @media (max-width: 900px) {
    margin: 0rem;
  }
`;
export default Search;
