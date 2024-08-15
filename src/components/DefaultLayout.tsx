import Head from "next/head";
import type { ReactNode } from "react";

type DefaultLayoutProps = { children: ReactNode; title?: string };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>Modify Template</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>

      <main className="h-screen">{children}</main>
    </>
  );
};
