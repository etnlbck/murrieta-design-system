const RadioField = ({ label="Label", description="Description"}) => (
  <div className="w-[340px] h-[38px] flex-col justify-start items-start inline-flex">
    <div className="self-stretch justify-start items-center gap-3 inline-flex">
      <div className="w-4 h-4 relative bg-[#e6e6e6] rounded-full border border-[#2c2c2c]  overflow-hidden">
        <div className="w-2.5 h-2.5 left-[3px] top-[3px] absolute bg-[#1e1e1e] rounded-full" />
      </div>
      <div className="grow shrink basis-0 text-[#1e1e1e] text-base font-normal font-['Rockwell Std']">
        {label}
      </div>
    </div>
    <div className="self-stretch justify-start items-center gap-3 inline-flex">
      <div className="w-4 h-4 relative" />
      <div className="grow shrink basis-0 text-[#757575] text-base font-normal font-['Rockwell Std']">
        {description}
      </div>
    </div>
  </div>
);

export default RadioField;