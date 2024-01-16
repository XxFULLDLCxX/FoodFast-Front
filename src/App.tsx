import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Orders from './pages/Orders';
import Kitchen from './pages/Kitchen';
import Pickup from './pages/Pickup';
import { OrdersProvider } from './utils/context';

function App() {
  return (
    <OrdersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/orders" replace />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/pickup" element={<Pickup />} />
        </Routes>
      </BrowserRouter>
    </OrdersProvider>
  );
}
export default App;
