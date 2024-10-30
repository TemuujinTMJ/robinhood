"use client";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { Login } from "@/services/modules/auth/login.service";
import { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.LoginReducer);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(user);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login or sign-up logic here
    console.log("Form submitted:", formData);
    if (isLogin) {
      dispatch(
        Login({ userName: formData.email, password: formData.password })
      );
    }
  };

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
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
          {isLogin ? "Нэвтрэх" : "Бүртгүүлэх"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <>
              <div className="flex flex-nowrap gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Нэр
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 bg-glass border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Овог
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 bg-glass border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300"
                >
                  Утасны дугаар
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-glass border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </>
          )}

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

          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-300"
              >
                Нууц үг баталгаажуулах
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-glass border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            {isLogin ? "Нэвтрэх" : "Бүртгүүлэх"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-300">
            {isLogin ? "Бүртгэлгүй юу?" : "Хэрэглэгчтэй юу?"}{" "}
            <button
              type="button"
              disabled={loading}
              onClick={toggleForm}
              className="text-green-400 hover:underline focus:outline-none"
            >
              {isLogin ? "Бүртгүүлэх" : "Нэвтрэх"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
