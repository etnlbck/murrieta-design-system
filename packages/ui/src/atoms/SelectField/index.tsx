const SelectField = ({label="Label"}) => (
  <div className="h-[67px] flex-col justify-start items-start gap-2 inline-flex">
    <div className="self-stretch text-[#1e1e1e] text-base font-normal font-['Rockwell Std']">
      {label}
    </div>
    <div className="self-stretch h-10 pl-4 pr-3 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center gap-2 inline-flex">
      <div className="grow shrink basis-0 text-[#1e1e1e] text-base font-normal font-['Rockwell Std']">
        Value
      </div>
      <div className="w-4 h-4 relative  overflow-hidden" />
    </div>
  </div>
);

export default SelectField;