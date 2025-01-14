import * as Form from "@radix-ui/react-form";

const TextAreaField = ({ label = "Label" }) => (
  <div className="h-[107px] flex-col justify-start items-start gap-2 inline-flex">
    <Form.Label className="self-stretch text-[#1e1e1e] text-base font-normal font-['Rockwell Std']">
      {label}
    </Form.Label>
    <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-start inline-flex overflow-hidden">
    <Form.Control asChild>
      <textarea
        placeholder=" "
        className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-start inline-flex overflow-hidden"
      />
      </ Form.Control>
    </div>
  </div>
);
export default TextAreaField;