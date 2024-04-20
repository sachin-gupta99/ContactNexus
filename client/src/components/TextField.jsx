import React, { forwardRef } from "react";
import { Label } from "flowbite-react";
import { TextInput } from "flowbite-react";

const TextField = forwardRef(
  ({ name, label, type, placeholder, icon, className }, ref) => {
    return (
      <div className={`mb-4 ${className}`}>
        <div className="mb-2 block">
          <Label htmlFor={name} value={label} className="font-bold" />
        </div>
        <TextInput
          id={name}
          placeholder={placeholder}
          ref={ref}
          type={type}
          icon={icon}
          required
        />
      </div>
    );
  }
);

export default TextField;
