import { createContext, useContext, useState } from 'react';
import { OrderParams, OrdersParams, PaymentParams, ProductParams } from './protocols';
import { defaultOrder, defaultPayment } from './defauts';

interface ProviderProps {
  children: React.ReactNode;
}

type OrdersContextType = {
  order: OrderParams;
  orders: OrdersParams[];
  payment: PaymentParams;
  products: ProductParams[];
  setProducts: React.Dispatch<React.SetStateAction<ProductParams[]>>;
  setOrder: React.Dispatch<React.SetStateAction<OrderParams>>;
  setOrders: React.Dispatch<React.SetStateAction<OrdersParams[]>>;
  setPayment: React.Dispatch<React.SetStateAction<PaymentParams>>;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export function OrdersProvider({ children }: ProviderProps) {
  // const [user, setUser] = useState({ name: '' });
  const [products, setProducts] = useState<ProductParams[]>([]);
  const [orders, setOrders] = useState<OrdersParams[]>([]);
  const [order, setOrder] = useState<OrderParams>(defaultOrder);
  const [payment, setPayment] = useState<PaymentParams>(defaultPayment());
  const values = { order, orders, products, payment };
  const setters = { setProducts, setOrder, setOrders, setPayment };

  return <OrdersContext.Provider value={{ ...values, ...setters }}>{children}</OrdersContext.Provider>;
}

export function useOrdersContext() {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw Error('useOrdersContext must be used within an OrdersProvider');
  }
  return context;
}
