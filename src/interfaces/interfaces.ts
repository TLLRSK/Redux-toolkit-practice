export interface shopState {
    shopList: Product[],
    amount: number,
    isLoading: boolean,
    selectedProduct?: Product,
    showingProduct: boolean,
}

export interface Product {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number,
    }
    title: string,
    amount?: number,
}
export interface cartState {
    cartItems: Product[];
    amount: number;
    total: number;
    isShowing: boolean;
    error?: string;
}