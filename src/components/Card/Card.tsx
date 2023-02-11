/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Feb 11 2023 21:37:02 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2023 and beyond
*/

export type CardProps = {
  title: string;
  description: string;
};

export const Card = ({ title, description }: CardProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg sm:max-w-xs lg:max-w-sm xl:max-w-md">
      <div className="px-6 py-4">
        <h2 className="mb-2 text-xl font-bold">{title}</h2>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
};
