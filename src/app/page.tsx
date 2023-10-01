/** @format */
"use client";

import { Tab } from "@/components/Tab";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <main className="p-8 flex items-center justify-center min-h-screen">
      {/*  */}
      <div className="p-4  rounded-lg  max-w-[400px]">
        <div className="flex">
          <Tab
            onClick={() => setActiveTab(1)}
            isTabActive={activeTab === 1}
            tabLabel="Tab 1"
          />
          <Tab
            onClick={() => setActiveTab(2)}
            isTabActive={activeTab === 2}
            tabLabel="Tab 2"
          />
          <Tab
            onClick={() => setActiveTab(3)}
            isTabActive={activeTab === 3}
            tabLabel="Tab 3"
          />
        </div>

        <div className=" p-6 rounded-lg border border-white  min-h-[200px] rounded-t-none   bg-gray-700 text-white">
          {activeTab === 1 && <Data1 />}
          {activeTab === 2 && <Data2 />}
          {activeTab === 3 && <Data3 />}
          {/* <Data2 /> */}
          {/* <Data3 /> */}
        </div>
      </div>
    </main>
  );
}

function Data1() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 ">Data 1</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
        doloremque!
      </p>
    </>
  );
}
function Data2() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 ">Data 2</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet et
        distinctio voluptatum blanditiis eius? Pariatur delectus id quis
        dignissimos.
      </p>
    </>
  );
}
function Data3() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 ">Data 3</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
        dolores autem tempora ducimus ut consequuntur, at reprehenderit
      </p>
    </>
  );
}
