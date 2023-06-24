import styled from '@emotion/styled';

export const ContainerCard = styled.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Image = styled.img`
  margin-right: auto;
`;

export const ContainerImage = styled.div`
  margin-right: auto;
`;

export const LineUser = styled.div`
  margin-top: 18px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
  width: 380px;
  height: 8px;
`;
export const RoundUser = styled.div`
  background-image: url(${({image})=> `${image}`});
  border: 8px solid;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-color: #ebd8ff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  bottom: 45px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const WrapImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const InfoList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 62px;
  margin-bottom: 26px;
`;

export const TextInfo = styled.p`
  color: #ebd8ff;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const BtnFollow = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  border-radius: 10.311px;
  background: ${({ active }) => (active ? '#ebd8ff' : '#5cd3a8')};
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  width: 196px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  text-transform: uppercase;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #5cd3a8;
    box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
      rgba(0, 0, 0, 0.25);
  }
`;
