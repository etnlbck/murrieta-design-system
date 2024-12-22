const SwitchField = ({label="Label", description="Description"}) => (
  <div className="w-[340px] h-[43px] flex-col justify-start items-start inline-flex">
    <div className="self-stretch justify-start items-center gap-3 inline-flex">
      <div className="grow shrink basis-0 text-[#1e1e1e] text-base font-normal font-['Rockwell Std']">
        {label}
      </div>
      <div className="w-10 h-6 relative bg-[#2c2c2c] rounded-full border border-[#2c2c2c]  overflow-hidden" />
    </div>
    <div className="self-stretch text-[#757575] text-base font-normal font-['Rockwell Std']">
      {description}
    </div>
  </div>
);

export default SwitchField;