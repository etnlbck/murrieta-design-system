import * as Checkbox from "@radix-ui/react-checkbox";


const CheckboxField = ({label, name, value, checked=true}:{label:string, name:string, value?:string, checked?: boolean}) => (
		<div className="flex items-center">
			<Checkbox.Root
				className="flex size-[25px] appearance-none items-center justify-center rounded bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px_black]"
				defaultChecked
        checked={checked}
				id={`checkbox-${name}`}
        name={name}
        value={value}
			>
				<Checkbox.Indicator className="text-violet11">
					x
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label
				className="grow shrink basis-0 text-[#757575] text-base font-normal font-['Rockwell Std']"
				htmlFor={`checkbox-${name}`}
			>
				{label}
			</label>
		</div>
)


export default CheckboxField;