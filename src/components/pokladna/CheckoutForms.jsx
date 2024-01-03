"use client";

import { CartContext } from "@/providers/CartProvider";
import { useContext, useState } from "react";
import { Input } from "./Input";
import { pbFetch } from "@/helpers/pbFetch";
import { useRouter } from "next/navigation";

const customerInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  zip: "",
  country: "",
  note: "",
}

const shippingOptions = [
  {
    name: "Česká pošta",
    price: 100,
  },
  {
    name: "Osobní odběr",
    price: 0,
  }
]

const paymentOptions = [
  {
    name: "Kartou",
    price: 0,
  },
  {
    name: "Hotově",
    price: 50,
  }
]

export const CheckoutForms = () => {
  const [customer, setCustomer] = useState(customerInitialValues);
  const [shipping, setShipping] = useState(null);
  const [payment, setPayment] = useState(null);
  const { cart, aditionals, setAditionals, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const overallPrice = cart.reduce((a, b) => a + b.price * b.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const orderData = {
      fullName: `${customer.firstName} ${customer.lastName}`,
      email: customer.email,
      phone: customer.phone,
      address: {
        street: customer.street,
        city: customer.city,
        zip: customer.zip,
        country: customer.country,
      },
      note: customer.note,
      overallPrice: cart.reduce((a, b) => a + b.price * b.quantity, 0) + aditionals.shipping + aditionals.payment,
      shipping: shipping,
      paymentMethod: payment,
    }
    const order = await pbFetch("orders", "create", null, null, orderData);
    if (!order) return alert("Něco se pokazilo, zkuste to prosím znovu.");
    const orderItems = cart.map(item => ({
      product: item.id,
      order: order.id,
      amount: item.quantity,
      size: item.size,
    }))
    for await (const item of orderItems) {
      console.log(item);
      const response = await pbFetch("orderedProducts", "create", null, null, item);
      if (!response) return alert("Něco se pokazilo, zkuste to prosím znovu.");
    }
    setLoading(false);
    setCustomer(customerInitialValues);
    setShipping("");
    setPayment("");
    setAditionals({ shipping: 0, payment: 0 });
    clearCart();
    return router.push("/potvrzeni")
  }

  return (
    <div className="w-full md:w-2/3 checkout-forms">
      <form onSubmit={handleSubmit} className={"flex flex-col gap-4 mt-4" + (loading ? " loading" : "")}>
        <div className="form">
          <h3 className="text-3xl md:text-2xl">Osobní údaje</h3>
          <div className="group">
            <Input
              value={customer.firstName}
              onChange={(value) => setCustomer({ ...customer, firstName: value })}
              name="firstName"
              label="Jméno"
              placeholder="Jan"
            />
            <Input
              value={customer.lastName}
              onChange={(value) => setCustomer({ ...customer, lastName: value })}
              name="lastName"
              label="Příjmení"
              placeholder="Novák"
            />
          </div>
          <div className="group">
            <Input
              value={customer.email}
              onChange={(value) => setCustomer({ ...customer, email: value })}
              name="email"
              label="Email"
              placeholder="jan.novak@gmail.com"
            />
            <Input
              value={customer.phone}
              onChange={(value) => setCustomer({ ...customer, phone: value })}
              name="phone"
              label="Telefon"
              placeholder="+420 123 456 789"
            />
          </div>
          <div className="group">
            <Input
              value={customer.note}
              onChange={(value) => setCustomer({ ...customer, note: value })}
              name="note"
              label="Poznámka"
              placeholder="Poznámka"
              required={false}
            />
          </div>
          <h3 className="text-3xl md:text-2xl mt-4">Adresa</h3>
          <div className="group">
            <Input
              value={customer.street}
              onChange={(value) => setCustomer({ ...customer, street: value })}
              name="street"
              label="Ulice a č.p."
              placeholder="Ulice 123"
            />
            <Input
              value={customer.city}
              onChange={(value) => setCustomer({ ...customer, city: value })}
              name="city"
              label="Město"
              placeholder="Praha"
            />
          </div>
          <div className="group">
            <Input
              value={customer.zip}
              onChange={(value) => setCustomer({ ...customer, zip: value })}
              name="zip"
              label="PSČ"
              placeholder="123 45"
            />
            <Input
              value={customer.country}
              onChange={(value) => setCustomer({ ...customer, country: value })}
              name="country"
              label="Stát"
              placeholder="Česká republika"
            />
          </div>
        </div>
        <div className="form">
          <h3 className="text-3xl md:text-2xl">Doručení</h3>
          <div className="group flex-col">
            {shippingOptions.map((option) => (
              <div key={option.name} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="shipping"
                  id={option.name}
                  value={option.name}
                  onChange={() => {
                    setShipping(option.name)
                    setAditionals({ ...aditionals, shipping: option.price })
                  }}
                  required
                />
                <label htmlFor={option.name}>{option.name} ({option.price} Kč)</label>
              </div>
            ))}
          </div>
        </div>
        <div className="form">
          <h3 className="text-3xl md:text-2xl">Platba</h3>
          <div className="group flex-col">
            {paymentOptions.map((option) => (
              <div key={option.name} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  id={option.name}
                  value={option.name}
                  onChange={() => {
                    setPayment(option.name)
                    setAditionals({ ...aditionals, payment: option.price })
                  }}
                  required
                />
                <label htmlFor={option.name}>{option.name} ({option.price} Kč)</label>
              </div>
            ))}
          </div>
        </div>
        <div className="h-fit flex flex-col bg-white rounded-lg px-4 py-3 product-cart mb-4 md:hidden">
          <h3 className="text-2xl mb-3">Souhrn</h3>
          <p className="flex justify-between">
            <span>Cena bez daně:</span>
            <span>{overallPrice * 0.79} Kč</span>
          </p>
          <p className="flex justify-between">
            <span>Daň:</span>
            <span>{overallPrice * 0.21} Kč</span>
          </p>
          <p className="flex justify-between">
            <span>Doprava:</span>
            <span>{aditionals.shipping} Kč</span>
          </p>
          <p className="flex justify-between">
            <span>Platba:</span>
            <span>{aditionals.payment} Kč</span>
          </p>
          <p className="mt-3 pt-2 border-top-black flex justify-between">
            <b>Celková cena:</b>
            <b>{overallPrice + aditionals.payment + aditionals.shipping} Kč</b>
          </p>
        </div>
        <button
          type="submit"
          className="primary text-xl md:text-lg gap-2"
          disabled={loading}
        >
          Objednat
        </button>
      </form>
    </div>
  )
}
