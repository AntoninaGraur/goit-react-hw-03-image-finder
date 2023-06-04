import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 45px;
  color: #df172b;
  background-color: #f3b23d;
  margin: 25px auto;
  border: transparent;
  border-radius: 25px;
  font-weight: 400;
  font-size: 18px;
  box-shadow: -1px 13px 25px -5px rgba(236, 126, 7, 0.77);
  transition: all 500ms ease-out;
  &:hover {
    transform: scale(1.08);
    text-shadow: 1px 1px 2px whitesmoke;
  }`