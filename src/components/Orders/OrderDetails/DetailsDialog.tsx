import styled from 'styled-components';
import Dialog from '../../DialogBox/Container';
import { Exit } from '../../DialogBox/Utils';
import { Product } from './Product';
import { ProductParams } from '../../../utils/protocols';
import { Additionals } from './Additionals';
import { Notes } from './Notes';
import { Order } from './Order';
import { Confirm } from './Confirm';
import { useOrdersContext } from '../../../utils/context';

type DetailsDialogProps = {
  product: ProductParams;
  bg: string;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DetailsDialog({ product, bg, setIsSelected }: DetailsDialogProps) {
  const { setOrder } = useOrdersContext();
  const press = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSelected(false);
    setOrder((prev) => ({ ...prev, additionals: [] }));
  };
  return (
    <Dialog>
      <Header>
        <Exit onClick={press} />
        <h2>Revise seu pedido!</h2>
      </Header>
      <Product data={product} bg={bg} />
      <Additionals productId={product.id} />
      <Notes />
      <Order />
      <Confirm setIsSelected={setIsSelected} />
    </Dialog>
  );
}

const Header = styled.div`
  h2 {
    font-weight: 700;
    font-size: 32px;
  }
`;
