import CartCheckout from '@/components/cart/CartCheckout'
import { CartProducts } from '@/components/cart/CartProducts'

const page = () => {
  return (
    <div className="container min-h-[55%]">
      <h2 className="mt-6 mb-4 text-4xl">Košík</h2>
      <div className="flex gap-4">
        <CartProducts />
        <CartCheckout />
      </div>
    </div>
  )
}

export default page