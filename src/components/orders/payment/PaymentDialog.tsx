import styled from 'styled-components';
import Dialog from '../../DialogBox/Container';
import { FaXmark } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

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

const Exit = styled(FaXmark)`
  position: absolute;
  left: 0px;
  right: 0px;
  margin: -30px 33px 0 auto;
  color: #9f9f9f;
  font-size: 28px;
`;

const Container = styled(Dialog)``;
