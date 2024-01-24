import { createContext, useContext, useState } from 'react';
import { OrderParams, PaymentParams, ProductParams } from './protocols';
import { defaultOrder, defaultPayment } from './defauts';

interface ProviderProps {
  children: React.ReactNode;
}

type OrdersContextType = {
  order: OrderParams;
  payment: PaymentParams;
  products: ProductParams[];
  confirmOrder: { order: boolean; additionals: boolean };
  setProducts: React.Dispatch<React.SetStateAction<ProductParams[]>>;
  setOrder: React.Dispatch<React.SetStateAction<OrderParams>>;
  setConfirmOrder: React.Dispatch<React.SetStateAction<{ order: boolean; additionals: boolean }>>;
  setPayment: React.Dispatch<React.SetStateAction<PaymentParams>>;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export function OrdersProvider({ children }: ProviderProps) {
  // const [user, setUser] = useState({ name: '' });
  const [products, setProducts] = useState<ProductParams[]>([]);
  const [confirmOrder, setConfirmOrder] = useState({ order: false, additionals: false });
  const [order, setOrder] = useState<OrderParams>(defaultOrder);
  const [payment, setPayment] = useState<PaymentParams>(defaultPayment());
  const values = { order, confirmOrder, products, payment };
  const setters = { setProducts, setOrder, setConfirmOrder, setPayment };

  return <OrdersContext.Provider value={{ ...values, ...setters }}>{children}</OrdersContext.Provider>;
}

export function useOrdersContext() {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw Error('useOrdersContext must be used within an OrdersProvider');
  }
  return context;
}
