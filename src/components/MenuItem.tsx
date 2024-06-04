import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button className=" border-cyan-500 border-2 rounded-md w-full flex justify-between p-2 hover:bg-cyan-100"
      onClick={() => addItem(item)}
    >
      <p> {item.name} </p>
      <p className=" font-black"> ${item.price} </p>
    </button>
  )
}
