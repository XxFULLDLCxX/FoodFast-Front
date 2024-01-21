import { createContext, useContext, useState } from 'react';
import { OrderParams, OrdersParams, ProductParams } from './protocols';
import { defaultOrder } from './defauts';

interface ProviderProps {
  children: React.ReactNode;
}

type OrdersContextType = {
  order: OrderParams;
  orders: OrdersParams[];
  products: ProductParams[];
  setProducts: React.Dispatch<React.SetStateAction<ProductParams[]>>;
  setOrder: React.Dispatch<React.SetStateAction<OrderParams>>;
  setOrders: React.Dispatch<React.SetStateAction<OrdersParams[]>>;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export function OrdersProvider({ children }: ProviderProps) {
  const [products, setProducts] = useState<ProductParams[]>([]);
  const [orders, setOrders] = useState<OrdersParams[]>([]);
  const [order, setOrder] = useState<OrderParams>(defaultOrder);
  return (
    <OrdersContext.Provider value={{ order, orders, products, setProducts, setOrder, setOrders }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrdersContext() {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw Error('useOrdersContext must be used within an OrdersProvider');
  }
  return context;
}
