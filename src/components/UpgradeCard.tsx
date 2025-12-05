// components/UpgradeCard.tsx
"use client";

import React from "react";
import { Zap } from "lucide-react";

interface UpgradeCardProps {
  title: string;
  description: string;
  tasks: string[];
  buttonText: string;
  onButtonClick: () => void;
}

export function UpgradeCard({ 
  title, 
  description, 
  tasks, 
  buttonText, 
  onButtonClick 
}: UpgradeCardProps) {
  return (
    <div className="relative w-[344px] min-w-[280px] max-w-[360px] h-[360px] bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 border border-cyan-50 shadow-lg rounded-lg p-6 flex flex-col justify-between">
      {/* Main Content Container */}
      <div className="flex flex-col gap-7 mx-auto w-[296px] h-[212px]">
        {/* Card Header */}
        <div className="flex flex-col gap-2 w-[296px] h-[96px]">
          <h3 className="w-[296px] h-16 text-2xl font-semibold leading-8 tracking-tight text-zinc-50">
            {title}
          </h3>
          <div className="flex flex-row items-start gap-3 w-[296px] h-7">
            <p className="w-[227px] h-7 text-base leading-7 text-zinc-50">
              {description}
            </p>
          </div>
        </div>

        {/* Tasks List */}
        <div className="flex flex-col gap-2 w-[299px] h-[88px]">
          {tasks.map((task, index) => (
            <div key={index} className="flex flex-row items-center gap-1 w-[299px] h-6">
              <Zap className="w-6 h-6 text-zinc-50" />
              <span className="text-sm font-semibold leading-5 text-zinc-50">
                {task}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Button Container */}
      <div className="flex flex-col justify-center items-start gap-2 mx-auto w-[296px] h-9">
        <button
          onClick={onButtonClick}
          className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 w-[296px] h-9 bg-zinc-100 border border-zinc-50 rounded-md hover:bg-zinc-200 transition-colors"
        >
          <span className="text-sm font-semibold leading-5 text-cyan-900">
            {buttonText}
          </span>
        </button>
      </div>
    </div>
  );
}

export default UpgradeCard;
