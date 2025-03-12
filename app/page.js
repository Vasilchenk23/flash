"use client";
import { useState } from "react";
import { useModalStore } from "./store/modal";
import OrderModal from "./components/OrderModal";

const categories = {
  "Блокнот": [
    { id: 1, name: "Блокнот чорний", price: "500 грн", img: "./img/8.png" },
    { id: 2, name: "Блокнот білий", price: "550 грн", img: "./img/7.png" },
    { id: 3, name: "Блокнот білий", price: "550 грн", img: "./img/7.png" },
  ],
  "Футболки": [
    { id: 5, name: "Худi", price: "750 грн", img: "/img/hudi.jpg" },
    { id: 6, name: "Футболка чорна", price: "800 грн", img: "/img/6.png" },
  ],
  "Чашки": [
    { id: 7, name: "Чашка з логотипом", price: "250 грн", img: "./img/17.jpg" },
    { id: 8, name: "Чашка біла", price: "200 грн", img: "./img/1.png" },
    { id: 9, name: "Чашка чорна", price: "300 грн", img: "./img/2.png" },
  ],
  "Шопери": [
    { id: 10, name: "Шопер білий", price: "1200 грн", img: "./img/3.png" },
    { id: 11, name: "Шопер чорний", price: "1250 грн", img: "./img/4.png" },
    { id: 12, name: "Шопер чорний", price: "1250 грн", img: "./img/4.png" },
  ],
  "Сувеніри-головоломки": [
    { id: 15, name: "Кубик-головоломка", price: "400 грн", img: "./img/15.jpg" },
    { id: 16, name: "Змійка-головоломка", price: "450 грн", img: "./img/14.jpg" },
    { id: 17, name: "Гексагон-головоломка", price: "500 грн", img: "./img/19.jpg" },
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
                <img src={product?.img} alt={product?.name} className="w-full h-130 object-cover rounded my-2" />
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
