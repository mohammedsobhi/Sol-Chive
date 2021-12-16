import styled from "styled-components";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";
const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-start;
  background-color: var(--main-gray-color);
  width: 49%;
  min-width: 340px;
  min-height: 140px;
  /* max-height: 140px; */
  border-radius: 10px;
  padding: 10px 15px;
  position: relative;
  @media (max-width: 760px) {
    min-width: 100%;
  }
`;

const CardHeader = styled.div``;

const CardTitle = styled.p`
  font-size: 18px;
  margin-right: 20px;
`;

const CardControls = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const YellowLinkExternal = styled(LinkExternal)`
  color: var(--main-yellow-color);
`;

const CardControl = styled.div`
  padding: 1px 3px 3px 3px;
  border-radius: 7px;
  width: 22px;
  cursor: pointer;
  background-color: var(--darker-gray-color);
  transition: ease-in 0.1s all;
  &:hover {
    width: 24px;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  opacity: 0.9;
`;
const Text = styled.p`
  font-size: 16px;
`;
const Tags = styled.ul`
  display: flex;
  gap: 5px;
`;
const Tag = styled.li`
  background-color: var(--lighter-gray-color);
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 10px;
`;

const Button = styled.button`
  margin-top: auto;
`;

const SolutionCard = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardControls>
          <CardControl>
            <YellowLinkExternal />
          </CardControl>
        </CardControls>
      </CardHeader>
      <CardBody>
        <Text>source: {data.source}</Text>
        <Tags>
          {data.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Text>solved {data.date}</Text>
      </CardBody>
      <Button className="btn">View</Button>
    </Card>
  );
};

export default SolutionCard;
