import { createContext, useContext, useState } from 'react';
import { ProductParams } from './protocols';

interface ProviderProps {
  children: React.ReactNode;
}

type OrdersContextType = {
  products: ProductParams[];
  setProducts: React.Dispatch<React.SetStateAction<ProductParams[]>>;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export function OrdersProvider({ children }: ProviderProps) {
  const [products, setProducts] = useState<ProductParams[]>([]);
  return (
    <OrdersContext.Provider value={{ products, setProducts }}>
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
