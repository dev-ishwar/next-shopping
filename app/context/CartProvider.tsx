'use client';
import { createContext, ReactElement, ReactNode, useEffect, useMemo, useReducer, useRef } from "react";
import { ProductType } from "../lib/types";
import { currencyFormatter } from "../lib/helper";

export type CartItemType = ProductType & { qty: number };
type CartStateType = { cart: CartItemType[] }

const initCartState: CartStateType = { cart: [] }

const REDUCER_ACTION_TYPE = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    QUANTITY: 'QUANTITY',
    SUBMIT: 'SUBMIT',
    HYDRATE: 'HYDRATE'
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
    type: string,
    payload?: CartItemType
}

const saveCartInStorage = (cart: CartItemType[]) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const getCartFromStorage = (): CartItemType[] => {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : [];
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) throw new Error('Missing payload in ADD action');

            const { id } = action.payload;
            const filteredItems: CartItemType[] = state.cart.filter(item => item.id !== id);

            const itemExists: CartItemType | undefined = state.cart.find(item => item.id === id);

            const qty = itemExists ? itemExists.qty + 1 : 1;
            const updatedCart = [...filteredItems, { ...action.payload, qty }];

            saveCartInStorage(state.cart)
            return { ...state, cart: updatedCart };
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) throw new Error('Missing payload in REMOVE action');

            const { id } = action.payload;
            const filteredItems: CartItemType[] = state.cart.filter(item => item.id !== id);

            saveCartInStorage(filteredItems)
            return { ...state, cart: [...filteredItems] }
        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) throw new Error('Missing payload in QUANTITY action');
            const { id, qty } = action.payload;

            const itemExists: CartItemType | undefined = state.cart.find(item => item.id === id);
            if (!itemExists) throw new Error('Item must exists in order to update the qty.');

            const updatedItem: CartItemType = { ...itemExists, qty }

            const filteredItems: CartItemType[] = state.cart.filter(item => item.id !== id);

            saveCartInStorage([...filteredItems, updatedItem]);
            return { ...state, cart: [...filteredItems, updatedItem] }
        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            saveCartInStorage([]);
            return { ...state, cart: [] }
        }
        case REDUCER_ACTION_TYPE.HYDRATE: {
            const stored = getCartFromStorage();
            const hydrated = state.cart.length ? state.cart : stored;
            return { ...state, cart: hydrated }
        }
        default: {
            throw new Error('Unindentified reducer action type.')
        }
    }
}

const useCartContext = () => {
    const [state, dispatch] = useReducer(reducer, initCartState);
    const _mounted = useRef<boolean>(false);

    useEffect(() => {
        _mounted.current = true;
        // Hydrate the cart state from local storage
        dispatch({ type: REDUCER_ACTIONS.HYDRATE });
        return () => { _mounted.current = false };
    }, [])

    const REDUCER_ACTIONS = useMemo(() => REDUCER_ACTION_TYPE, []);

    const totalItems = state.cart.reduce((prevValue, cartItem) => prevValue + cartItem.qty, 0);
    const priceTotal = state.cart.reduce((prevValue, cartItem) => prevValue + cartItem.qty * cartItem.price, 0);
    const totalPrice = currencyFormatter(priceTotal);

    if (_mounted.current) saveCartInStorage(state.cart);

    return { cart: state.cart, REDUCER_ACTIONS, totalItems, totalPrice, dispatch }
}

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
    cart: [],
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems: 0,
    totalPrice: '',
    dispatch: () => { }
}

const CartContext = createContext<UseCartContextType>(initCartContextState);
type ChildrenType = {
    children: ReactElement | ReactElement[] | ReactNode
}

export const CartContextProvider = ({ children }: ChildrenType): ReactElement => {
    return (
        <CartContext.Provider value={useCartContext()}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;