export interface shopState {
    shopList: Product[],
    amount: number,
    isLoading: boolean,
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
    isLoading: boolean;
    error?: string;
}