// src/components/Dock.js
import React from "react";

export function Dock({ children }) {
  return (
    <div className="flex space-x-6 bg-black/30 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg">
      {children}
    </div>
  );
}

export function DockItem({ children }) {
  return (
    <div className="flex flex-col items-center group">{children}</div>
  );
}

export function DockIcon({ children }) {
  return (
    <div className="transform transition-transform duration-200 group-hover:scale-125">
      {children}
    </div>
  );
}
