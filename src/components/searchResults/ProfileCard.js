import styled from "styled-components";

const Card = styled.aside`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px;
  background-color: var(--main-gray-color);
  border-radius: 10px;
  margin-top: 55px;
  position: sticky;
  top: 50px;
  align-self: start;
  @media (max-width: 1080px) {
    position: static;
    margin-top: 40px;
  }
`;

const AvatarContainer = styled.div`
  width: 75px;
  position: relative;
`;

const Avatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 2px solid var(--main-gray-color);
  position: absolute;
  top: -50px;
`;

const Name = styled.h3`
  margin-top: 25px;
  text-align: center;
  font-size: 20px;
`;

const Email = styled.p`
  font-size: 14px;
  opacity: 70%;
`;

const CardTitle = styled.h4`
  align-self: flex-start;
  font-size: 16px;
  margin-top: 10px;
`;

const TextData = styled.p`
  align-self: flex-start;
  font-size: 14px;
  opacity: 80%;
`;

const ProfileCard = () => {
  return (
    <Card>
      <AvatarContainer>
        <Avatar
          src="https://avatars.githubusercontent.com/u/63759344?v=4"
          alt="personal Avatar"
        />
      </AvatarContainer>
      <Name>Mohammed Sobhi</Name>
      <Email>m.mohamed.sobhi.98@gmail.com</Email>
      <CardTitle>About:</CardTitle>
      <TextData>
        junior frontend developer interested in ui and ux design
      </TextData>
      <CardTitle>Contacts:</CardTitle>
      <TextData>+201115790092</TextData>
      <TextData>linkedin.com/sobhi</TextData>
      <TextData>linkedin.com/sobhi</TextData>
      <CardTitle>Solved:</CardTitle>
      <TextData>7 problems</TextData>
    </Card>
  );
};

export default ProfileCard;
