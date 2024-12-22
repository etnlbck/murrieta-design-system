const SliderField = ({label="Label", description="Description"}) => (
  <div className="w-60 h-[71px] flex-col justify-start items-start gap-3 inline-flex">
    <div className="self-stretch justify-between items-start inline-flex">
      <div className="grow shrink basis-0 text-[#1e1e1e] text-base font-normal font-['Rockwell Std']">
        {label}
      </div>
      <div className="justify-start items-center flex">
        <div className="text-right text-[#1e1e1e] text-sm font-normal font-['Inter'] leading-tight">
          $
        </div>
        <div className="text-right text-[#1e1e1e] text-sm font-normal font-['Inter'] leading-tight">
          0-100
        </div>
      </div>
    </div>
    <div className="self-stretch justify-start items-center inline-flex">
      <div className="grow shrink basis-0 h-2 bg-[#e6e6e6] rounded-full justify-start items-center flex">
        <div className="w-4 h-4 relative bg-[#2c2c2c] rounded-full" />
        <div className="grow shrink basis-0 h-1.5" />
        <div className="w-4 h-4 relative bg-[#2c2c2c] rounded-full" />
      </div>
    </div>
    <div className="self-stretch text-[#757575] text-base font-normal font-['Rockwell Std']">
      {description}
    </div>
  </div>
);
export default SliderField;