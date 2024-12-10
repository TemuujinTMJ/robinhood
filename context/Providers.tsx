"use client";

import { Provider } from "react-redux";
import { store } from "@/services/store";
import { ConfigProvider, message, theme } from "antd";
import AntdProvider from "./AntdProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      <Provider store={store}>
        {contextHolder}
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
    </>
  );
}
