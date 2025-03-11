import { useState } from "react";
import { useModalStore } from "../store/modal";

export default function OrderModal() {
  const { isOpen, product, closeModal } = useModalStore();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!name || !phone) {
      setMessage("Введите имя и номер телефона!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, product }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Заказ оформлен!");
        setTimeout(closeModal, 2000);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("Ошибка отправки заказа!");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-2">Оформить заказ</h2>
        <p>Товар: {product?.name}</p>
        <img src={product?.img} alt={product?.name} className="w-full h-40 object-cover rounded my-2" />

        <input
          type="text"
          placeholder="Имя"
          className="border p-2 w-full mt-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Номер телефона"
          className="border p-2 w-full mt-2"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {message && <p className="text-red-500 mt-2">{message}</p>}

        <div className="flex justify-between mt-4">
          <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded">
            Отмена
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`bg-green-500 text-white px-4 py-2 rounded ${loading ? "opacity-50" : ""}`}
          >
            {loading ? "Отправка..." : "Заказать"}
          </button>
        </div>
      </div>
    </div>
  );
}
