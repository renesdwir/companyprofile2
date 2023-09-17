import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 100px auto 0 auto;
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 60px;
  font-size: 30px;
  text-transform: uppercase;
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
    gap: 40px;
  }
`;
export const Card = styled.div`
  flex: 1;
  border: 1px solid #bbb;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.08);

  h3 {
    padding: 25px 0;
    text-align: center;
    font-size: 20px;
  }
`;

export const ListWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
  }
`;
export const Correct = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid ${(props) => (props.iscorrect ? "#00b090" : "red")};
  color: ${(props) => (props.iscorrect ? "#00b090" : "red")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Price = styled.p`
  text-align: center;
  margin: 20px 0 0 0;
  span {
    font-weight: bold;
    font-size: 40px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 0;
`;
export const Button = styled.button`
  padding: 10px 30px;
  border: 1px solid #166bfc;
  color: #166bfc;
  border-radius: 8px;
  transition: all 300ms ease;
  cursor: pointer;
  background-color: white;
  &:hover {
    background-color: #166bfc;
    color: white;
  }
`;
