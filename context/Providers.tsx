"use client";

import { Provider } from "react-redux";
import { store } from "@/services/store";
import { ConfigProvider, theme } from "antd";
import AntdProvider from "./AntdProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AntdProvider>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
      </AntdProvider>
    </Provider>
  );
}
