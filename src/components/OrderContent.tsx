import { MenuItem, OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderContentProps = {
  order: OrderItem[],
  removeItem: (id: MenuItem['id']) => void

}

export default function OrderContent({ order, removeItem }: OrderContentProps) {
  return (
    <div>
      <h2 className="text-4xl font-extrabold">Consumo</h2>

      <div className=" space-y-3 mt-10">
        {order.map(item => (
          <div key={item.id} className=" flex justify-between items-center border-t py-5 border-gray-300 last-of-type:border-b">
            <div>
              <p className=" text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-extrabold">
                Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}
              </p>
            </div>

            <button
              className=" h-8 w-8 bg-red-600 rounded-full text-white font-extrabold"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
