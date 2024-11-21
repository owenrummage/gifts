import Image from "next/image";
import localFont from "next/font/local";
import Card from "@/components/card";
import { Metadata, NextPageContext } from "next";
import { Gift } from "@prisma/client";
import { client } from "@/util/prisma";
import Modal from "@/components/modal";
import { useState } from "react";
import Head from "next/head";

export async function getServerSideProps(ctx: NextPageContext) {
  let gifts = await client.gift.findMany();
  return { props: { gifts } };
}

export const metadata: Metadata = {
  title: "Owens Christmas Wishlist",
  description:
    "A list of gifts curated by Owen for christmas gifts. Garunteed to be the best!",
};

export default function Home({ gifts }: { gifts: Gift[] }) {
  let [open, setOpen] = useState(false);
  let [selected, setSelected] = useState(0);

  let SelectItem = (id: number) => {
    setSelected(id);
    setOpen(!open);
  };

  return (
    <>
      <Head>
        <title>Owens Wishlist</title>
      </Head>
      <div className="flex flex-col p-12 w-screen h-screen">
        <div id="header">
          <h1 className="text-6xl font-bold">Wishlist</h1>
          <h2 className="text-2xl mt-2">
            Please see below for a list of gifts you can get me. All of the
            gifts on this list are thoughtful things that I need for school,
            work, or my hobbies and would appreciate and use for years to come
          </h2>
        </div>

        <div id="about" className="mt-8">
          <h1 className="text-4xl font-bold mb-2">How to use</h1>
          <ul className="text-xl">
            <li>
              <h1 className="text-2xl font-semibold">1. Select a gift</h1>
              <p>Select a gift from the list that fits your price range</p>
            </li>
            <li>
              <h1 className="text-2xl font-semibold">2. Reserve the gift</h1>
              <p>Hit the reserve button and fill out the information</p>
            </li>
            <li>
              <h1 className="text-2xl font-semibold">3. Buy the gift!</h1>
              <p>Buy it and give it to Owen at Christmas!</p>
            </li>
          </ul>

          <p className="text-xl mt-12">
            Star rating is used to show how much I want an item. The more stars,
            the higher priority the item is.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-12">
          {gifts
            .filter((a: Gift) => a.active)
            .sort((a: Gift, b: Gift) => a.price - b.price)
            .map((item) => (
              <Card gift={item} onReserve={SelectItem} />
            ))}
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} selected={selected} />
    </>
  );
}
