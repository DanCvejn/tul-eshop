import { CheckoutForms } from "@/components/pokladna/CheckoutForms"
import { CheckoutOverview } from "@/components/pokladna/CheckoutOverview"

const page = () => {
  return (
    <div className="container min-h-[55%]">
      <h2 className="mt-6 mb-4 text-4xl">Pokladna</h2>
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <CheckoutForms />
        <CheckoutOverview />
      </div>
    </div>
  )
}

export default page