const InputField = ({ label = "Label" }) => (
  <div className="h-[70px] flex-col justify-start items-start gap-2 inline-flex">
    <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Rockwell Std']">
      {label}
    </div>
    <div className="self-stretch px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center inline-flex overflow-hidden">
      <div className="grow shrink basis-0 text-[#1e1e1e] text-base font-normal font-['Rockwell Std']">
        Value
      </div>
    </div>
  </div>
);

export default InputField;
