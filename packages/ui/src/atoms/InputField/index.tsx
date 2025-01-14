import * as Form from "@radix-ui/react-form";
import type React from 'react';

export interface InputFieldProps {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label }) => (
  <div className="h-[70px] flex-col justify-start items-start gap-2 inline-flex">
    <Form.Label className="self-stretch text-[#1e1e1e] text-base font-normal font-['Rockwell Std']">
      {label}
    </Form.Label>
    <Form.Control asChild>
    <input
      placeholder=" "
      className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex overflow-hidden"
    />
    </Form.Control>
  </div>
);

export default InputField;
