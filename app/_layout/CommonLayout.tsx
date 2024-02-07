"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";

import GlobalStyles from "./GlobalStyles";
import * as Style from "./styled";

const queryClient = new QueryClient();

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />

        <Style.Main>{children}</Style.Main>
      </QueryClientProvider>
    </JotaiProvider>
  );
};

export default CommonLayout;
