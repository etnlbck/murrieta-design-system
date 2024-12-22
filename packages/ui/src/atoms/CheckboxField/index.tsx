const CheckboxField = ({label, description}:{label:string, description:string}) => (
  <div className="w-60 h-[38px] flex-col justify-start items-start inline-flex">
    <div className="self-stretch justify-start items-center gap-3 inline-flex">
      <div className="w-4 h-4 bg-[#2c2c2c] rounded justify-center items-center gap-2.5 flex overflow-hidden">
        <div className="w-4 h-4 relative  overflow-hidden" />
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

export default CheckboxField;