"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/CardContainer";

export function ThreeDCardDemo({ image, name, position, insta, linkedin, email }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card border border-gray-200/[0.8] w-11/12 h-auto rounded-xl p-4">
        <CardItem
          translateZ="50"
          className="text-lg font-bold text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {position}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-2">
          <img
            src={image}
            height="250"
            width="250"
            className="h-60 w-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex items-center justify-end mt-3">
          <span className="text-white text-base font-bold">Connect - </span>
          <span className="inline-flex sm:mt-0 mt-4 justify-center sm:justify">
            <a href={insta} target="_blank" className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a href={linkedin} target="_blank" className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>

            <a href={`mailto:${email}`} className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={16} x={2} y={4} rx={2} ry={2} />
                <path d="M22 6L12 13 2 6" />
              </svg>
            </a>
          </span>
        </div>
      </CardBody>
    </CardContainer>
  );
}
