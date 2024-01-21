import styled from 'styled-components';
import Dialog from '../../DialogBox/Container';
import { useNavigate } from 'react-router-dom';
import { Exit } from '../../DialogBox/Utils';

export function PaymentDialog() {
  const navigate = useNavigate();
  const press = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/kitchen');
  };
  return (
    <Container>
      <Exit onClick={press} />
    </Container>
  );
}

const Container = styled(Dialog)``;
