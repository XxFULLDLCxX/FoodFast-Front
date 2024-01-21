import styled from 'styled-components';
import Dialog from '../../DialogBox/Container';
import { Exit } from '../../DialogBox/Utils';
import { Product } from './Product';
import { ProductParams } from '../../../utils/protocols';
import { Additionals } from './Additionals';
import { Notes } from './Notes';
import { Order } from './Order';
import { Confirm } from './Confirm';

type DetailsDialogProps = {
  product: ProductParams;
  bg: string;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DetailsDialog({ product, bg, setIsSelected }: DetailsDialogProps) {
  const press = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSelected(false);
  };
  return (
    <Container>
      <Exit onClick={press} />
      <Product data={product} bg={bg} />
      <Additionals productId={product.id} />
      <Notes />
      <Order />
      <Confirm />
    </Container>
  );
}

const Container = styled(Dialog)``;
