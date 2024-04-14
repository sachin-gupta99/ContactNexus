import React from "react";
import { Label } from "flowbite-react";
import { TextInput } from "flowbite-react";

const TextField = ({ name, label, placeholder, icon, className }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <div className="mb-2 block">
        <Label htmlFor={name} value={label} className="font-bold" />
      </div>
      <TextInput id={name} placeholder={placeholder} icon={icon} required />
    </div>
  );
};

export default TextField;
