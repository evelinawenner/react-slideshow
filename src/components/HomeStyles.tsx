import styled from "styled-components";

export const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .slider {
    position: relative;
    z-index: 1;
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  .image {
    height: 400px;
  }

  .prev-arrow {
    position: absolute;
    z-index: 2;
    top: 45%;
    left: 2rem;
    font-size: 4rem;
    color: #b8d8be;
    cursor: pointer;
  }

  .next-arrow {
    position: absolute;
    z-index: 2;
    top: 45%;
    right: 2rem;
    font-size: 4rem;
    color: #b8d8be;
    cursor: pointer;
  }

  .active-slide {
    transition: ease 1000ms;
  }

  .slide {
    transition: ease 1000ms;
  }
`;
