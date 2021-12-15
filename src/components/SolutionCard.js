import styled from "styled-components";

const Card = styled.li`
  background-color: var(--main-gray-color);
  width: 49%;
  min-width: 340px;
  height: 140px;
  max-height: 140px;
  border-radius: 10px;
  padding: 10px 15px;
  @media (max-width: 760px) {
    min-width: 95%;
  }
`;

const SolutionCard = ({ data }) => {
  return <Card>{data.title}</Card>;
};

export default SolutionCard;
