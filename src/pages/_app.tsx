import "@/styles/reset.scss";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { StoreProvider } from "easy-peasy";
import { store } from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
