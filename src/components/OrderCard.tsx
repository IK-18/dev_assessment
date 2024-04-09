import {orderProps} from "../assets/interfaces/Interfaces";

const OrderCard = (props: orderProps) => {
	return (
		<div
			className={`flex flex-col w-full items-start gap-[10px] pt-0 pb-[12px] px-0 relative border-b [border-bottom-style:solid] border-stroke ${props.className}`}
		>
			<div className='flex items-start gap-[14px] relative self-stretch w-full flex-[0_0_auto]'>
				<img
					className='relative w-[49px] h-[49px] object-cover'
					alt='Rectangle'
					src={props.image}
				/>
				<div className='flex flex-col items-start gap-[10px] relative flex-1 grow'>
					<div className='flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]'>
						<div className='relative w-fit mt-[-1.00px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-60 text-[length:var(--paragraph-2-regular-font-size)] tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
							{props.name}
						</div>
						<div className='inline-flex items-start gap-[9px] relative flex-[0_0_auto]'>
							<div className='relative w-fit mt-[-1.00px] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-black-20 text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
								{props.date}
							</div>
						</div>
					</div>
					<div className='flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]'>
						<div className='inline-flex items-start gap-[9px] relative flex-[0_0_auto]'>
							<div className='relative w-fit mt-[-1.00px] font-paragraph-2-medium font-[number:var(--paragraph-2-medium-font-weight)] text-black-80 text-[length:var(--paragraph-2-medium-font-size)] tracking-[var(--paragraph-2-medium-letter-spacing)] leading-[var(--paragraph-2-medium-line-height)] [font-style:var(--paragraph-2-medium-font-style)]'>
								₦{props.price} x {props.quantity}
							</div>
						</div>
						<div
							className={`inline-flex items-start gap-[10px] px-[15px] py-[2px] relative flex-[0_0_auto] ${
								props.status
									? "!bg-[#31936e1f]"
									: "bg-[#f57e761f]"
							} rounded-[8px]`}
						>
							{props.status ? (
								<div
									className={`relative text-actiongreen w-fit mt-[-1.00px] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]`}
								>
									Completed
								</div>
							) : (
								<div className='relative text-actionred w-fit mt-[-1.00px] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
									Pending
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderCard;
