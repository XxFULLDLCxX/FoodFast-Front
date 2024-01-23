import styled from 'styled-components';
import utils from '../../../assets/styles/Utils';
import { defaultCategories } from '../../../utils/defauts';
import { CategoryParams } from '../../../utils/protocols';
import { useOrdersContext } from '../../../utils/context';
import { getProductsByCategory } from '../../../services/ordersApi';

export default function Category({ data }: { data: CategoryParams }) {
  const { setProducts } = useOrdersContext();

  return (
    <CategoryContainer onClick={() => getProductsByCategory(data.id).then(setProducts)}>
      <img src={!data.image ? data.image : defaultCategories[data.name]} alt="" />
      <h3>{data.name.replace(/^\w/, (c) => c.toUpperCase())}</h3>
    </CategoryContainer>
  );
}

const CategoryContainer = styled.li`
  ${utils.center}
  flex-direction: column;
  flex-shrink: 0;
  gap: 7px;
  min-width: 221px;
  min-height: 145px;
  max-width: 310px;
  max-height: 205px;
  height: min-content;
  border-radius: 5px;
  box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.09);
  h3 {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.04em;
    margin-bottom: 28px;
  }
  img {
    width: 50%;
    height: 72px;
    object-position: center;
    object-fit: contain;
  }
`;
