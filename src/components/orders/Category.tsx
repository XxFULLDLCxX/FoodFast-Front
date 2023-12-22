import styled from 'styled-components';
import utils from '../../assets/styles/Utils';

export interface CategoryProps {
  id: number;
  name: string;
  image: string;
};

export default function Category({id, name, image}: CategoryProps) {
  return (
    <CategoryContainer>
      <img src={image ? image : } alt="" />
      {name}
    </CategoryContainer>
  );
}

const CategoryContainer = styled.li`
    ${utils.center}
    flex-direction: column;
    gap: 7px;
    width: 223px;
    height: 148px;
    border-radius: 5px;
    box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.09);
    font-size: 14px;
    font-weight: 700;
    img {
      height: 55px;
      width: 85px;
    }
`;
