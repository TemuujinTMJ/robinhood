"use client";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { Login } from "@/services/modules/auth/login.service";
import { useState } from "react";
import Link from "next/link";
import { message, Spin } from "antd";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.LoginReducer);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(Login({ email: formData.email, password: formData.password })).then((e) => {
      if(e.payload.success) {
        message.success('Амжилттай Нэвтэрлээ!')
        window.location.replace('/')
      } else {
        message.error(e.payload.error)
      }
    })
  };

  return (
    <div className="flex justify-center items-center gap-10 md:mt-16 mt-4 flex-wrap md:flex-nowrap">
      <div className="grid md:text-right text-center max-w-[500px] gap-4">
        <h1 className="text-5xl font-bold text-green-400">Robinhood traders</h1>
        <h1 className="text-5xl font-bold">Тавтай морил!</h1>
        <div>
          Арилжааны аргачлалаа тодорхойлж монголын мянга мянган арилжаачдын
          нэгдсэн нийгэмлэгт орж ашигтай арилжаачин болоорой. Зах зээлд бид
          өрсөлдөгч биш, хамтрагчид юм
        </div>
      </div>
      <div className="bg-glass backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Нэвтрэх
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Имэйл
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-glass border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Нууц үг
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-glass border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            {loading && <Spin />} Нэвтрэх
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-300">
            Бүртгэлгүй юу?{" "}
            <Link href="/signup" className="text-green-400 hover:underline">
              Бүртгүүлэх
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
