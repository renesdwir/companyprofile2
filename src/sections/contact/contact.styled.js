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

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0 20px;
    gap: 30px;
  }
`;
export const Desc = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  p {
    font-size: 22px;
  }
`;
export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
  }
`;
export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const StyledInput = styled.input`
  padding: 12px;
  color: rgb(100 116 139);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid rgb(226 232 240);
  border-radius: 8px;
  &:focus {
    outline: 0.5px solid #4c1d95;
  }
`;
export const StyledTextArea = styled.textarea`
  padding: 12px;
  color: rgb(100 116 139);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid rgb(226 232 240);
  border-radius: 8px;
  font-family: inherit;
  &:focus {
    outline: 0.5px solid #4c1d95;
  }
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
