import styled from 'styled-components';

export const Wrapper = styled.aside`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const Content = styled.div`
  background: #fff;
  position: absolute;
  margin: auto;
  width: 300px;
  height: 300px;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 7px;
  top: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: .3s ease-in-out;
  &:hover {
    color: ${({ theme }) => `${theme.colors.pink.normal}`};
  }
`;