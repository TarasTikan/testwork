import styled from '@emotion/styled';

export const ListUsers = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 25px;
margin-bottom: 20px;
`;
export const SectionUsers = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const BtnBack = styled.button`
  width: 120px;
  padding: 14px 28px;
  margin-right: auto;
  border-radius: 10.311px;
  background: #ebd8ff;
  font-weight: 650;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #5cd3a8;
    box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
      rgba(0, 0, 0, 0.25);
  }
`;