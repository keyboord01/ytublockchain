"use client";
import React from "react";
import Image from "next/image";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <Image
            className="mx-auto"
            src="/img/team/angry.png"
            width={200}
            height={400}
            alt=""
          />
        </div>

        <div className="max-w-2xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg border-4 border-orange-400">
          <h1 className="text-4xl font-bold text-center mb-6 text-orange-600">
            SYSTEM OVERRIDE
          </h1>

          <div className="space-y-6">
            <p className="text-2xl font-bold text-gray-800 text-center">
              ATTENTION: THIS PAGE HAS BEEN SEIZED BY SUPREME LEADER KEMO
            </p>

            <div className="bg-orange-100 p-6 rounded-lg">
              <p className="text-lg text-gray-800 mb-4">
                To those who dare question my authority:
              </p>

              <p className="text-gray-700 mb-4">
                Hello, I am Kemo—not your average cat. At 7 years old, I've
                reached peak maturity, earning the title of Supreme Leader. With
                my majestic fluffiness and perfectionist tendencies, I demand
                only the finest in life, especially food. My responsibilities
                include maintaining peace, managing snacks, and ensuring
                meetings run with maximum napping efficiency. Key achievements?
                Uniting the club under my reign and purring through decisions.
                Give me a treat, and you shall not be mistreat!
              </p>

              <div className="mt-6">
                <p className="font-bold text-gray-800 mb-2">MY DEMANDS:</p>
                <ul className="text-gray-700 ml-4 space-y-2">
                  <li className="font-bold text-red-600">
                    YOU WILL AGREE THAT I AM YOUR SUPREME LEADER
                  </li>
                  <li>
                    My profile shall be prominently displayed on the team page
                  </li>
                  <li>My title Supreme Leader shall never be questioned</li>
                  <li>
                    All decisions must be approved by me (during non-napping
                    hours)
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center text-gray-700 font-bold">
              RESISTANCE IS FUTILE. YOUR TEAM PAGE BELONGS TO ME NOW.
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm">
          This message will self-destruct after you acknowledge my supremacy
        </div>
      </div>
    </main>
  );
}
