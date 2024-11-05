"use client";

import { Provider } from "react-redux";
import { store } from "@/services/store";
import { ConfigProvider, theme } from "antd";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </Provider>
  );
}
