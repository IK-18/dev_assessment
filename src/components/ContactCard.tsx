import {useState} from "react";
import {contactProps} from "../assets/interfaces/Interfaces";

const ContactsCard = (props: contactProps) => {
	return (
		<div
			className={`inline-flex flex-col items-center w-full gap-[10px] px-[24px] py-[12px] justify-center relative ${
				props.unread || props.newContact
					? "[border-bottom-style:solid]"
					: ""
			} ${
				props.active === props.activeID
					? "border-r-[#5570f1]"
					: "border-stroke"
			} ${
				props.active === props.activeID
					? "[border-right-style:solid]"
					: ""
			} ${props.active === props.activeID ? "border-r-4" : ""} ${
				props.unread || props.newContact ? "border-b" : ""
			} ${props.active === props.activeID ? "bg-[#f6f7fb]" : ""}`}
			data-activeid={props.activeID}
			onClick={props.activate}
		>
			<div className='w-[85%] flex items-start gap-[14px] flex-[0_0_auto] relative'>
				<div className='w-[51px] h-[48px] relative'>
					<div className='h-[48px] relative'>
						<img
							className='w-[48px] left-0 top-0 object-cover h-[48px] absolute'
							alt='Rectangle'
							src={props.image}
						/>
						<div
							className={`w-[12px] left-[39px] top-[2px] h-[12px] rounded-[6px] absolute ${
								props.active === props.activeID
									? "bg-[#f7f7fc]"
									: "bg-white"
							}`}
						>
							<div className='w-[8px] left-[2px] top-[2px] h-[8px] rounded-[4px] bg-primary-100 relative' />
						</div>
					</div>
				</div>
				<div className='flex self-stretch flex-col items-start grow flex-1 justify-between relative'>
					<div className='w-full flex self-stretch items-center flex-[0_0_auto] justify-between relative'>
						<div
							className={`font-paragraph-1-medium w-fit tracking-[var(--paragraph-1-medium-letter-spacing)] [font-style:var(--paragraph-1-medium-font-style)] text-[length:var(--paragraph-1-medium-font-size)] text-black-60 relative font-[number:var(--paragraph-1-medium-font-weight)] whitespace-nowrap leading-[var(--paragraph-1-medium-line-height)] ${
								props.active === props.activeID || props.unread
									? "mt-[-1.00px]"
									: ""
							}`}
						>
							{props.name}
						</div>
						<div className='inline-flex items-start opacity-0 gap-[9px] flex-[0_0_auto] relative'>
							<div className='font-label-1-regular w-fit mt-[-1.00px] tracking-[var(--label-1-regular-letter-spacing)] text-[length:var(--label-1-regular-font-size)] [font-style:var(--label-1-regular-font-style)] text-black-20 relative font-[number:var(--label-1-regular-font-weight)] leading-[var(--label-1-regular-line-height)]'>
								12 Sept 2022
							</div>
						</div>
						<div className='inline-flex items-center gap-[12px] flex-[0_0_auto] relative'>
							{props.newContact && (
								<div
									className={`inline-flex items-start gap-[10px] px-[7px] py-[2px] relative flex-[0_0_auto] bg-secondary-20 rounded-[8px]`}
								>
									<div className='relative w-fit mt-[-1.00px] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-black-100 text-[length:var(--label-1-regular-font-size)] text-right tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
										New
									</div>
								</div>
							)}
							{props.unread && (
								<div className='relative w-[24px] h-[24px] bg-secondary-100 rounded-[500px] overflow-hidden'>
									<div className='absolute top-[3px] left-[8px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-100 text-[length:var(--paragraph-2-regular-font-size)] text-center tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
										{props.newMessages > 0
											? props.newMessages
											: ""}
									</div>
								</div>
							)}
						</div>
					</div>
					<div className='w-full flex self-stretch items-end flex-[0_0_auto] justify-between relative'>
						<p className='font-paragraph-2-regular w-fit mt-[-1.00px] tracking-[var(--paragraph-2-regular-letter-spacing)] text-[length:var(--paragraph-2-regular-font-size)] [font-style:var(--paragraph-2-regular-font-style)] text-black-30 relative font-[number:var(--paragraph-2-regular-font-weight)] leading-[var(--paragraph-2-regular-line-height)]'>
							{props.placeholder}
						</p>
						<div className='inline-flex items-start gap-[53px] flex-[0_0_auto] relative'>
							<div className='font-label-1-regular w-fit mt-[-1.00px] tracking-[var(--label-1-regular-letter-spacing)] text-[length:var(--label-1-regular-font-size)] [font-style:var(--label-1-regular-font-style)] text-black-30 relative font-[number:var(--label-1-regular-font-weight)] text-right leading-[var(--label-1-regular-line-height)]'>
								{props.time}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactsCard;
