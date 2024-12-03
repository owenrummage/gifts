import Image from "next/image";
import localFont from "next/font/local";
import { Gift } from "@prisma/client";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Card({
  gift,
  onReserve,
}: {
  gift: Gift;
  onReserve: (id: number) => void;
}) {
  return (
    <div className="w-full max-w-sm bg-zinc-100 dark:bg-zinc-900 dark:border dark:border-zinc-800 rounded-lg shadow">
      <a href={gift.purchaseURL} className="mb-auto">
        <img
          className="p-2 rounded-2xl"
          src={gift.imageURL}
          alt="product image"
        />
      </a>
      <div className="px-2 pb-5 mt-4">
        <a href={gift.purchaseURL}>
          <h5 className="text-xl font-semibold tracking-tight dark:text-white">
            {gift.name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-2">
          {/* <span
            className={`${gift.priority > 3 ? "bg-red-300" : gift.priority > 2 ? "bg-yellow-100" : "bg-green-100"} text-black text-xs font-semibold px-2.5 py-0.5 rounded`}
          >
            Priority {gift.priority}
          </span> */}
          <span className="flex flex-row">
            <StarIcon
              height={20}
              width={20}
              className={`${gift.priority >= 1 ? "text-yellow-300" : "text-gray-300"}`}
            />
            <StarIcon
              height={20}
              width={20}
              className={`${gift.priority >= 2 ? "text-yellow-300" : "text-gray-300"}`}
            />
            <StarIcon
              height={20}
              width={20}
              className={`${gift.priority >= 3 ? "text-yellow-300" : "text-gray-300"}`}
            />
            <StarIcon
              height={20}
              width={20}
              className={`${gift.priority >= 4 ? "text-yellow-300" : "text-gray-300"}`}
            />
            <StarIcon
              height={20}
              width={20}
              className={`${gift.priority >= 5 ? "text-yellow-300" : "text-gray-300"}`}
            />
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {gift.category}
          </span>
        </div>

        {gift.instructions != "" ? (
          <div className="mb-5">
            <h4 className="dark:text-white text-md font-bold">
              Buying Instructions
            </h4>
            <p className="text-gray-900 dark:text-gray-300">
              {gift.instructions}
            </p>
          </div>
        ) : (
          <div className="mb-5"></div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-zinc-900 dark:text-white">
            ${gift.price}
          </span>
          {gift.reservedBy == "" ? (
            <button
              onClick={(event) => onReserve(gift.id)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Reserve
            </button>
          ) : (
            <button className="text-white  bg-gray-600 cursor-default focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              This item has been reserved
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
