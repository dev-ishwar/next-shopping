import { ChangeEvent, ReactElement } from "react";
import { CartItemType, ReducerAction, ReducerActionType } from "../context/CartProvider";
import Image from "next/image";
import { currencyFormatter } from "../lib/helper";

type PropsType = {
    item: CartItemType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType
}

const CartItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
    const itemTotal = item.qty * item.price;
    const highestQty = 10 > item.qty ? 10 : item.qty;
    const optionValues: number[] = [...Array(highestQty).keys()].map(i => i + 1);
    const options: ReactElement[] = optionValues.map(val => (
        <option key={`opt${val}`} value={val} className="bg-transparent text-[--dark-color]">{val}</option>
    ))

    const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY,
            payload: { ...item, qty: Number(e.target.value) }
        })
    }

    const onRemoveItem = () => dispatch({
        type: REDUCER_ACTIONS.REMOVE,
        payload: item
    })

    const content = (
        <article
            className="flex flex-col md:flex-row gap-5 border-b-2 pb-4 last:border-b-0 last:pb-0"
        >
            <Image src={item.thumbnail} width={200} height={200} alt={item.title} className="rounded-sm" />
            <div className="flex flex-col gap-1">
                <h2 className="text-xl">{item.title}</h2>
                <h2 className="text-md line-clamp-3" title={item.description}>{item.description}</h2>
                <p className={`${item.availabilityStatus === 'In Stock' ? 'text-green-950' : 'text-red-950'} text-sm`}>{item.availabilityStatus}</p>
                <p><span className="font-medium  text-sm">Rating:</span> {item.rating}</p>
                <p>
                    <label htmlFor="itemQty" className="font-medium text-sm">Qty: </label>
                    <select
                        name="itemQty"
                        id="itemQty"
                        value={item.qty}
                        aria-label="Item Quantity"
                        onChange={onChangeQty}
                        className="bg-transparent border rounded-sm"
                    >
                        {options}
                    </select>
                </p>
                <p>
                    <span className="font-medium  text-sm">Price: </span>
                    {currencyFormatter(item.price)}
                </p>
                <p>
                    <span className="font-medium  text-sm">Item Total: </span>
                    {currencyFormatter(itemTotal)}
                </p>
                <button
                    onClick={onRemoveItem}
                    className="self-start border rounded-sm"
                >
                    ❌
                </button>
            </div>
        </article>
    )
    return content;
}

export default CartItem;