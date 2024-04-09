import React, {useState} from "react";
import SearchIcon from "../assets/icons/SearchIcon";
import ContactsCard from "../components/ContactCard";
import Rectangle from "../assets/images/Rectangle.jpg";
import Rectangle2 from "../assets/images/Rectangle 2.jpg";
import Rectangle3 from "../assets/images/Rectangle 3.jpg";
import Rectangle4 from "../assets/images/Rectangle 4.jpg";
import ContactContext from "../providers/ContactContext";
import Bag from "../assets/icons/Bag";
import Plus from "../assets/icons/Plus";
import Smiley from "../assets/icons/Smiley";
import Check from "../assets/icons/Check";
import Send from "../assets/icons/Send";

const contacts = [
	{
		name: "Jane Doe",
		image: Rectangle3,
		newContact: true,
		newMessages: 2,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Janet Adebayo",
		image: Rectangle,
		newContact: true,
		newMessages: 2,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Kunle Adekunle",
		image: Rectangle2,
		newContact: true,
		newMessages: 2,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Jane Doe",
		image: Rectangle3,
		newContact: true,
		newMessages: 2,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Janet Adebayo",
		image: Rectangle,
		newContact: true,
		newMessages: 2,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Kunle Adekunle",
		image: Rectangle2,
		newContact: true,
		newMessages: 1,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Jane Doe",
		image: Rectangle3,
		newContact: true,
		newMessages: 1,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Janet Adebayo",
		image: Rectangle,
		newContact: true,
		newMessages: 3,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Kunle Adekunle",
		image: Rectangle2,
		newContact: true,
		newMessages: 3,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Jane Doe",
		image: Rectangle3,
		newContact: true,
		newMessages: 3,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Janet Adebayo",
		image: Rectangle,
		newContact: true,
		newMessages: 0,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Kunle Adekunle",
		image: Rectangle2,
		newContact: true,
		newMessages: 0,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Jane Doe",
		image: Rectangle3,
		newContact: true,
		newMessages: 0,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Janet Adebayo",
		image: Rectangle,
		newContact: true,
		newMessages: 0,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
	{
		name: "Kunle Adekunle",
		image: Rectangle2,
		newContact: true,
		newMessages: 0,
		placeholder: "Lorem ipsum dolor",
		time: "12:55am",
		unread: true,
	},
];

const Conversations = () => {
	let [active, setActive] = useState(-1);
	const activeState = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.currentTarget as HTMLDivElement;
		if (active === Number(target.dataset.activeid)) {
			setActive(-1);
		} else {
			setActive(Number(target.dataset.activeid));
		}
	};
	return (
		<div className='w-full h-full relative flex flex-col items-end gap-[2%]'>
			<div className='flex w-full items-center justify-between relative flex-[0_0_auto]'>
				<div className='relative w-fit font-paragraph-1-bold font-[number:var(--paragraph-1-medium-font-weight)] text-black-60 text-[length:var(--paragraph-1-medium-font-size)] tracking-[var(--paragraph-1-medium-letter-spacing)] leading-[var(--paragraph-1-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-medium-font-style)]'>
					Conversations with Customers
				</div>
				<div className='inline-flex items-start gap-[24px] relative flex-[0_0_auto]'>
					<div className='flex w-[161px] bg-primary h-[36px] items-center justify-center gap-[10px] px-[16px] py-[17px] relative rounded-[12px]'>
						<div className='flex w-[130px] items-center justify-around gap-[20px] relative mt-[-7.50px] mb-[-7.50px] ml-[-0.50px] mr-[-0.50px]'>
							<div className="text-[#ffffff] text-[14px] text-center relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
								New Message
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='items-start h-[90%] gap-[20px] self-stretch w-full flex relative grow'>
				<div className='flex flex-col items-start gap-[10px] flex-[1] py-[0.5%] h-full rounded-lg relative bg-[#ffffff] overflow-hidden'>
					<header className='inline-flex px-[1.5%] h-[10%] flex-col w-full items-start gap-[15px] relative flex-[0_0_auto] bg-transparent'>
						<div className='inline-flex items-center justify-between w-full relative flex-[0_0_auto]'>
							<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-black-90 text-[length:var(--subheading-3-medium-font-size)] tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
								Contacts
							</div>
							<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-black-20 text-[length:var(--subheading-3-medium-font-size)] text-right tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
								{contacts.length}
							</div>
						</div>
						<div
							className={`border border-solid w-full focus:border-black-4 border-black-1 flex flex-col items-start gap-[10px] px-[16px] py-[8px] h-[45px] rounded-[8px] relative`}
						>
							<div className='w-full flex self-stretch items-center grow gap-[16px] flex-1 relative'>
								<SearchIcon className='!relative !w-[20px] !h-[20px]' />
								<div className='flex self-stretch flex-col items-start grow gap-[8px] flex-1 justify-around relative'>
									<div
										className={`font-input-placeholder focus:text-transparent text-black-2 self-stretch tracking-[var(--input-placeholder-letter-spacing)] [font-style:var(--input-placeholder-font-style)] text-[length:var(--input-placeholder-font-size)] font-[number:var(--input-placeholder-font-weight)] leading-[var(--input-placeholder-line-height)] relative`}
									>
										Search
									</div>
								</div>
							</div>
						</div>
					</header>
					<div className='inline-flex flex-col no-scrollbar h-[90%] overflow-y-scroll items-center w-full relative flex-[0_0_auto]'>
						<ContactContext.Provider value={active}>
							{contacts.map((contact, index) => {
								return (
									<ContactsCard
										active={active}
										activeID={index}
										activate={activeState}
										image={contact.image}
										name={contact.name}
										newContact={contact.newContact}
										newMessages={contact.newMessages}
										placeholder={contact.placeholder}
										time={contact.time}
										unread={contact.unread}
									/>
								);
							})}
						</ContactContext.Provider>
					</div>
				</div>
				<div className='relative px-[1.5%] py-[0.5%] flex-[2] gap-[2%] flex flex-col items-center h-full w-[50%] bg-[#ffffff] rounded-lg overflow-hidden'>
					<div className='w-full h-[10%] top-0 left-[2px] border-b [border-bottom-style:solid] border-stroke'>
						<div className='flex w-full items-center justify-between relative'>
							<img
								className='relative w-[60px] h-[60px] object-cover'
								alt='Rectangle'
								src={Rectangle3}
							/>
							<div className='flex-col items-center justify-center gap-[12px] self-stretch flex relative flex-1 grow'>
								<div className='items-center justify-between self-stretch w-full flex-[0_0_auto] flex relative'>
									<div className='mt-[-1.00px] relative w-fit font-paragraph-1-medium font-[number:var(--paragraph-1-medium-font-weight)] text-black-60 text-[length:var(--paragraph-1-medium-font-size)] tracking-[var(--paragraph-1-medium-letter-spacing)] leading-[var(--paragraph-1-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-medium-font-style)]'>
										Jane Doe
									</div>
									<div className='inline-flex items-start gap-[9px] relative flex-[0_0_auto] opacity-0'>
										<div className='mt-[-1.00px] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-black-20 text-[length:var(--label-1-regular-font-size)] relative w-fit tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
											12 Sept 2022
										</div>
									</div>
									<div className='inline-flex items-center justify-center gap-[12px] relative flex-[0_0_auto]'>
										<div className='inline-flex items-center gap-[12px] relative flex-[0_0_auto]'>
											<div className='inline-flex items-start gap-[10px] px-[7px] py-[2px] relative flex-[0_0_auto] bg-secondary-20 rounded-[8px]'>
												<div className='text-black-100 text-[length:var(--label-1-regular-font-size)] text-right relative w-fit mt-[-1.00px] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
													New Customer
												</div>
											</div>
										</div>
										<div className='relative w-fit font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-primary-100 text-[length:var(--paragraph-2-regular-font-size)] text-right tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
											View Profile
										</div>
									</div>
								</div>
								<div className='flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]'>
									<div className='inline-flex items-start gap-[8px] relative flex-[0_0_auto]'>
										<div className='inline-flex items-center justify-center gap-[4px] relative flex-[0_0_auto]'>
											<div className='relative w-[12px] h-[12px] bg-[#f7f7fc] rounded-[6px]'>
												<div className='relative w-[8px] h-[8px] top-[2px] left-[2px] bg-primary-100 rounded-[4px]' />
											</div>
											<div className='relative w-fit mt-[-1.00px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-primary-30 text-[length:var(--paragraph-2-regular-font-size)] tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
												Online
											</div>
										</div>
										<div className='inline-flex items-start gap-[53px] relative flex-[0_0_auto]'>
											<div className='mt-[-1.00px] text-[length:var(--paragraph-2-regular-font-size)] text-right relative w-fit font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-30 tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
												12:55 am
											</div>
										</div>
									</div>
									<div className='inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]'>
										<Bag
											fill='#FFFFFF'
											stroke='#53545C'
											className='!relative !w-[20px] !h-[20px]'
										/>
										<div className='font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-20 text-[length:var(--paragraph-2-regular-font-size)] relative w-fit tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
											0 Orders
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='inline-flex h-[80%] flex-col items-center w-full'>
						<div className='inline-flex items-start px-[12px] py-[8px] relative flex-[0_0_auto] bg-main-background rounded-[8px]'>
							<div className='mt-[-1.00px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-100 text-[length:var(--paragraph-2-regular-font-size)] text-right relative w-fit tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
								12 August 2022
							</div>
						</div>
						<div className='inline-flex w-full flex-col items-center justify-center gap-[20px] relative flex-[0_0_auto]'>
							<div className='flex flex-col w-full items-start gap-[8px] relative flex-[0_0_auto]'>
								<div className='flex flex-col w-[40%] items-start gap-[10px] pt-0 pb-[12px] px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke'>
									<div className='flex items-start gap-[14px] relative self-stretch w-full flex-[0_0_auto]'>
										<img
											className='relative w-[49px] h-[49px] object-cover'
											alt='Rectangle'
											src={Rectangle4}
										/>
										<div className='flex-col items-start gap-[10px] flex relative flex-1 grow'>
											<div className='items-start justify-between self-stretch w-full flex-[0_0_auto] flex relative'>
												<div className='relative w-fit mt-[-1.00px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-60 text-[length:var(--paragraph-2-regular-font-size)] tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
													iPhone 13
												</div>
												<div className='inline-flex items-start gap-[9px] relative flex-[0_0_auto] opacity-0'>
													<div className='mt-[-1.00px] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-black-20 text-[length:var(--label-1-regular-font-size)] relative w-fit tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
														12 Sept 2022
													</div>
												</div>
											</div>
											<div className='flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]'>
												<div className='inline-flex items-start gap-[9px] relative flex-[0_0_auto]'>
													<div className='relative w-fit mt-[-1.00px] font-paragraph-2-medium font-[number:var(--paragraph-2-medium-font-weight)] text-black-80 text-[length:var(--paragraph-2-medium-font-size)] tracking-[var(--paragraph-2-medium-letter-spacing)] leading-[var(--paragraph-2-medium-line-height)] [font-style:var(--paragraph-2-medium-font-style)]'>
														₦730,000.00
													</div>
												</div>
												<div className='inline-flex items-start gap-[9px] relative flex-[0_0_auto]'>
													<p className='mt-[-1.00px] font-label-1-medium font-[number:var(--label-1-medium-font-weight)] text-transparent text-[length:var(--label-1-medium-font-size)] relative w-fit tracking-[var(--label-1-medium-letter-spacing)] leading-[var(--label-1-medium-line-height)] [font-style:var(--label-1-medium-font-style)]'>
														<span className='text-[#5570f1] font-label-1-medium [font-style:var(--label-1-medium-font-style)] font-[number:var(--label-1-medium-font-weight)] tracking-[var(--label-1-medium-letter-spacing)] leading-[var(--label-1-medium-line-height)] text-[length:var(--label-1-medium-font-size)]'>
															12{" "}
														</span>
														<span className='text-[#a5a7b1] font-label-1-medium [font-style:var(--label-1-medium-font-style)] font-[number:var(--label-1-medium-font-weight)] tracking-[var(--label-1-medium-letter-spacing)] leading-[var(--label-1-medium-line-height)] text-[length:var(--label-1-medium-font-size)]'>
															In Stock
														</span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='inline-flex items-start w-fit max-w-[37.5%] gap-[10px] p-[16px] relative flex-[0_0_auto] bg-primary-100 rounded-[16px_16px_16px_0px]'>
									<p className="relative w-full mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[24px]">
										Hello, I want to make enquiries about
										your product
									</p>
								</div>
								<div className='text-[length:var(--paragraph-1-regular-font-size)] whitespace-nowrap relative w-fit font-paragraph-1-regular font-[number:var(--paragraph-1-regular-font-weight)] text-black-30 tracking-[var(--paragraph-1-regular-letter-spacing)] leading-[var(--paragraph-1-regular-line-height)] [font-style:var(--paragraph-1-regular-font-style)]'>
									12:55 am
								</div>
							</div>
							<div className='flex flex-col w-full items-end gap-[8px] relative flex-[0_0_auto]'>
								<div className='inline-flex w-fit max-w-[37.5%] items-start gap-[10px] p-[16px] relative flex-[0_0_auto] bg-secondary-50 rounded-[16px_16px_0px_16px]'>
									<p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-black-100 text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
										Hello Janet, thank you for reaching out
									</p>
								</div>
								<div className='inline-flex items-start justify-end gap-[7px] relative flex-[0_0_auto]'>
									<div className='relative w-fit mt-[-1.00px] font-paragraph-1-regular font-[number:var(--paragraph-1-regular-font-weight)] text-black-30 text-[length:var(--paragraph-1-regular-font-size)] tracking-[var(--paragraph-1-regular-letter-spacing)] leading-[var(--paragraph-1-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-regular-font-style)]'>
										12:57 am
									</div>
									<div className='relative w-[20px] h-[20px] bg-secondary-50 rounded-[100px] overflow-hidden'>
										<Check className='!absolute !w-[12px] !h-[12px] !top-[4px] !left-[4px]' />
									</div>
								</div>
							</div>
							<div className='flex flex-col w-full items-end gap-[8px] relative flex-[0_0_auto]'>
								<div className='inline-flex w-fit max-w-[37.5%] items-start gap-[10px] p-[16px] relative flex-[0_0_auto] bg-secondary-50 rounded-[16px_16px_0px_16px]'>
									<p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-black-100 text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
										What do you need to know?
									</p>
								</div>
								<div className='inline-flex items-start justify-end gap-[7px] relative flex-[0_0_auto]'>
									<div className='relative w-fit mt-[-1.00px] font-paragraph-1-regular font-[number:var(--paragraph-1-regular-font-weight)] text-black-30 text-[length:var(--paragraph-1-regular-font-size)] tracking-[var(--paragraph-1-regular-letter-spacing)] leading-[var(--paragraph-1-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-regular-font-style)]'>
										12:57 am
									</div>
									<div className='relative w-[20px] h-[20px] bg-secondary-50 rounded-[100px] overflow-hidden'>
										<Check className='!absolute !w-[12px] !h-[12px] !top-[4px] !left-[4px]' />
									</div>
								</div>
							</div>
							<div className='inline-flex items-start gap-[10px] px-[12px] py-[8px] relative flex-[0_0_auto] bg-main-background rounded-[8px]'>
								<div className='relative w-fit mt-[-1.00px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-100 text-[length:var(--paragraph-2-regular-font-size)] text-right tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
									Today
								</div>
							</div>
							<div className='flex flex-col w-full items-start gap-[8px] relative flex-[0_0_auto]'>
								<div className='inline-flex w-fit max-w-[37.5%] items-start gap-[10px] p-[16px] relative flex-[0_0_auto] bg-primary-100 rounded-[16px_16px_16px_0px]'>
									<p className="relative w-full mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[24px]">
										I want to know if the price is
										negotiable, i need about 2 Units
									</p>
								</div>
								<div className='text-[length:var(--paragraph-1-regular-font-size)] whitespace-nowrap relative w-fit font-paragraph-1-regular font-[number:var(--paragraph-1-regular-font-weight)] text-black-30 tracking-[var(--paragraph-1-regular-letter-spacing)] leading-[var(--paragraph-1-regular-line-height)] [font-style:var(--paragraph-1-regular-font-style)]'>
									12:55 am
								</div>
							</div>
						</div>
					</div>
					<div className='w-full h-[6%] px-[1.5%] items-center justify-between flex rounded-[8px] overflow-hidden border border-solid border-grey'>
						<div className='w-[2%] h-[full] flex items-center justify-center bg-secondary-30 rounded-[8px] overflow-hidden'>
							<Plus className='!w-[24px] !h-[24px] !top-[4px] !left-[4px]' />
						</div>
						<input
							placeholder='Your message'
							className='h-full w-[75%] font-paragraph-1-regular font-[number:var(--paragraph-1-regular-font-weight)] text-black-40 text-[length:var(--paragraph-1-regular-font-size)] tracking-[var(--paragraph-1-regular-letter-spacing)] leading-[var(--paragraph-1-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-regular-font-style)]'
						/>
						<div className='flex items-center w-[15%] gap-[5%]'>
							<Smiley className='!!w-[24px] !h-[24px] !top-[14px] !left-[685px]' />
							<div className='inline-flex flex-col items-start gap-[10px] px-[16px] py-[8px] top-[8px] left-[728px] bg-secondary-30 rounded-[6px]'>
								<div className='inline-flex items-center gap-[8px] relative flex-[0_0_auto]'>
									<div className='relative w-fit mt-[-0.50px] font-paragraph-1-regular font-[number:var(--paragraph-1-regular-font-weight)] text-black-100 text-[length:var(--paragraph-1-regular-font-size)] tracking-[var(--paragraph-1-regular-letter-spacing)] leading-[var(--paragraph-1-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-regular-font-style)]'>
										Send
									</div>
									<Send className='relative w-[20px] h-[20px]' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Conversations;
