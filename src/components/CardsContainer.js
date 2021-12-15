import styled from "styled-components";
import SolutionCard from "./SolutionCard";

const Container = styled.section`
  width: 100%;
`;

const ContainerHeader = styled.div`
  margin: 15px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1080px) {
    margin-top: 0;
    gap: 10px;
  }
`;
const CardsTitle = styled.h2`
  font-size: 22px;
  margin-right: 10px;
  @media (max-width: 450px) {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  margin-left: 15px;
  @media (max-width: 450px) {
    margin-left: 0;
  }
`;

const Select = styled.select`
  color: var(--text-color);
  background-color: var(--main-gray-color);
  border: 1px solid var(--main-yellow-color);
  border-radius: 8px;
  padding: 3px 8px 3px 3px;
  cursor: pointer;
  @media (max-width: 450px) {
    margin-right: 15px;
  }
`;

const CardsBody = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const solutions = [
  {
    id: 1,
    title: "Median of Two Sorted Arrays",
    source: "leetcode",
    tags: ["Algorithms", "DataBase", "Hash"],
    date: "2 days ago",
  },
  {
    id: 2,
    title: "Median of Two Sorted Arrays",
    source: "leetcode",
    tags: ["Algorithms", "DataBase", "Hash"],
    date: "2 days ago",
  },
  {
    id: 3,
    title: "Median of Two Sorted Arrays",
    source: "leetcode",
    tags: ["Algorithms", "DataBase", "Hash"],
    date: "2 days ago",
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    source: "leetcode",
    tags: ["Algorithms", "DataBase", "Hash"],
    date: "2 days ago",
  },
  {
    id: 5,
    title: "Median of Two Sorted Arrays",
    source: "leetcode",
    tags: ["Algorithms", "DataBase", "Hash"],
    date: "2 days ago",
  },
  {
    id: 6,
    title: "Median of Two Sorted Arrays",
    source: "leetcode",
    tags: ["Algorithms", "DataBase", "Hash"],
    date: "2 days ago",
  },
  {
    id: 7,
    title: "Median of Two Sorted Arrays",
    source: "leetcode",
    tags: ["Algorithms", "DataBase", "Hash"],
    date: "2 days ago",
  },
  {
    id: 8,
    title: "Median of Two Sorted Arrays",
    source: "leetcode",
    tags: ["Algorithms", "DataBase", "Hash"],
    date: "2 days ago",
  },
  {
    id: 9,
    title: "Median of Two Sorted Arrays",
    source: "leetcode",
    tags: ["Algorithms", "DataBase", "Hash"],
    date: "2 days ago",
  },
  {
    id: 10,
    title: "Median of Two Sorted Arrays",
    source: "leetcode",
    tags: ["Algorithms", "DataBase", "Hash"],
    date: "2 days ago",
  },
  {
    id: 11,
    title: "Median of Two Sorted Arrays",
    source: "leetcode",
    tags: ["Algorithms", "DataBase", "Hash"],
    date: "2 days ago",
  },
  {
    id: 12,
    title: "Median of Two Sorted Arrays",
    source: "leetcode",
    tags: ["Algorithms", "DataBase", "Hash"],
    date: "2 days ago",
  },
  {
    id: 13,
    title: "Median of Two Sorted Arrays",
    source: "leetcode",
    tags: ["Algorithms", "DataBase", "Hash"],
    date: "2 days ago",
  },
];

const CardsContainer = () => {
  return (
    <Container>
      <ContainerHeader>
        <CardsTitle>Solutions</CardsTitle>
        <form>
          <Label htmlFor="sort">sort by: </Label>
          <Select name="sort" id="sort">
            <option value="new">new</option>
            <option value="dsda">neasdw</option>
          </Select>
          <Label htmlFor="filter">filter by: </Label>
          <Select name="filter" id="filter">
            <option value="new">new</option>
            <option value="dsda">neasdw</option>
          </Select>
        </form>
      </ContainerHeader>
      <CardsBody>
        {solutions.map((solution) => (
          <SolutionCard key={solution.id} data={solution} />
        ))}
      </CardsBody>
    </Container>
  );
};

export default CardsContainer;
