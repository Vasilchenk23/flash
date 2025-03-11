"use client";
import { useState } from "react";
import { useModalStore } from "./store/modal";
import OrderModal from "./components/OrderModal";

const categories = {
  "Кепки": [
    { id: 1, name: "Кепка чорна", price: "500 грн", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Кепка біла", price: "550 грн", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Кепка червона", price: "600 грн", img: "https://via.placeholder.com/150" },
  ],
  "Футболки": [
    { id: 4, name: "Футболка чорна", price: "700 грн", img: "https://via.placeholder.com/150" },
    { id: 5, name: "Футболка біла", price: "750 грн", img: "https://via.placeholder.com/150" },
    { id: 6, name: "Футболка з принтом", price: "800 грн", img: "https://via.placeholder.com/150" },
  ],
  "Чашки": [
    { id: 7, name: "Чашка з логотипом", price: "250 грн", img: "https://via.placeholder.com/150" },
    { id: 8, name: "Чашка біла", price: "200 грн", img: "https://via.placeholder.com/150" },
    { id: 9, name: "Чашка чорна", price: "300 грн", img: "https://via.placeholder.com/150" },
  ],
  "Худі": [
    { id: 10, name: "Худі чорне", price: "1200 грн", img: "https://via.placeholder.com/150" },
    { id: 11, name: "Худі біле", price: "1250 грн", img: "https://via.placeholder.com/150" },
    { id: 12, name: "Худі з принтом", price: "1300 грн", img: "https://via.placeholder.com/150" },
  ],
  "Браслети з паракорду": [
    { id: 13, name: "Браслет чорний", price: "300 грн", img: "https://via.placeholder.com/150" },
    { id: 14, name: "Браслет зелений", price: "320 грн", img: "https://via.placeholder.com/150" },
    { id: 15, name: "Браслет камуфляж", price: "350 грн", img: "https://via.placeholder.com/150" },
  ],
  "Сувеніри-головоломки": [
    { id: 16, name: "Кубик-головоломка", price: "400 грн", img: "https://via.placeholder.com/150" },
    { id: 17, name: "Змійка-головоломка", price: "450 грн", img: "https://via.placeholder.com/150" },
    { id: 18, name: "Гексагон-головоломка", price: "500 грн", img: "https://via.placeholder.com/150" },
  ],
};


export default function Home() {
  const { openModal } = useModalStore();
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">FLASH POINT SHOP</h1>
      {Object.entries(categories).map(([category, products]) => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <img src={product?.img} alt={product?.name} className="w-full h-40 object-cover rounded my-2" />
                <p className="text-gray-600">{product.price}</p>
                <button
                  onClick={() => openModal(product)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Купить
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <OrderModal />
    </div>
    </>
  );
}
