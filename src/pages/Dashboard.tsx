import React from "react";
import FiChevronDown from "../assets/icons/FiChevronDown";
import Graph from "../assets/icons/Graph";
import People from "../assets/icons/People";
import Bag from "../assets/icons/Bag";
import Pie from "../assets/icons/Pie";
import Folder from "../assets/icons/Folder";
import Cart from "../assets/icons/Cart";
import Plus from "../assets/icons/Plus";
import {orderProps} from "../assets/interfaces/Interfaces";
import Rectangle4 from "../assets/images/Rectangle 4.jpg";
import Rectangle5 from "../assets/images/Rectangle 5.jpg";
import OrderCard from "../components/OrderCard";

const orders: orderProps[] = [
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 0,
		date: "12 Sept 2022",
		image: Rectangle4,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 1,
		date: "12 Sept 2022",
		image: Rectangle5,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 0,
		date: "12 Sept 2022",
		image: Rectangle4,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 1,
		date: "12 Sept 2022",
		image: Rectangle5,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 0,
		date: "12 Sept 2022",
		image: Rectangle4,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 1,
		date: "12 Sept 2022",
		image: Rectangle5,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 0,
		date: "12 Sept 2022",
		image: Rectangle4,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 1,
		date: "12 Sept 2022",
		image: Rectangle5,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 0,
		date: "12 Sept 2022",
		image: Rectangle4,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 1,
		date: "12 Sept 2022",
		image: Rectangle5,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 0,
		date: "12 Sept 2022",
		image: Rectangle4,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 1,
		date: "12 Sept 2022",
		image: Rectangle5,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 0,
		date: "12 Sept 2022",
		image: Rectangle4,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 1,
		date: "12 Sept 2022",
		image: Rectangle5,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 0,
		date: "12 Sept 2022",
		image: Rectangle4,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 1,
		date: "12 Sept 2022",
		image: Rectangle5,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 0,
		date: "12 Sept 2022",
		image: Rectangle4,
	},
	{
		name: "iPhone 13",
		price: "730,000",
		quantity: 1,
		status: 1,
		date: "12 Sept 2022",
		image: Rectangle5,
	},
];

export const Dashboard = (): JSX.Element => {
	return (
		<div className='bg-[#f4f5f9] relative flex-col bg-main-background flex h-full w-full'>
			<div className='w-full h-[20%] flex'>
				<div className='w-[60%] flex items-center justify-between'>
					<div
						className={`w-[47.5%] flex flex-col items-start gap-[10px] px-[15px] py-[11px] h-[90%] rounded-[12px] bg-white relative`}
					>
						<div className='w-full flex self-stretch flex-col items-start grow flex-1 justify-between relative'>
							<div className='w-full flex self-stretch items-center flex-[0_0_auto] justify-between relative'>
								<div className='relative w-[36px] h-[36px] bg-[#5570f11f] flex items-center justify-center rounded-[8px] overflow-hidden'>
									<Graph
										className={`!w-[20px] !h-[20px] !top-[8px] !left-[8px]`}
									/>
								</div>
								<div className='flex text-[#BEC0CA] items-center gap-[7px] flex-[0_0_auto] relative'>
									<div className='font-label-1-regular w-fit mt-[-0.50px] tracking-[var(--label-1-regular-letter-spacing)] text-[length:var(--label-1-regular-font-size)] [font-style:var(--label-1-regular-font-style)] text-black-10 relative font-[number:var(--label-1-regular-font-weight)] leading-[var(--label-1-regular-line-height)]'>
										This Week
									</div>
									<FiChevronDown
										className='!relative !w-[16px] !h-[16px]'
										color='#BEC0CA'
									/>
								</div>
							</div>
							<div
								className={`w-full flex self-stretch gap-[5%] items-start justify-between flex-[0_0_auto] relative`}
							>
								<div
									className={`relative flex items-start gap-[10%] flex-col flex-1`}
								>
									<div className='relative w-fit mt-[-1.00px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-30 text-[length:var(--paragraph-2-regular-font-size)] tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
										Sales
									</div>
									<div
										className={`inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]`}
									>
										<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-black-60 text-[length:var(--subheading-3-medium-font-size)] tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
											₦4,000,000.00
										</div>
										<div className='relative w-fit font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-actiongreen text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'></div>
									</div>
								</div>
								<div
									className={`relative gap-[10%] flex flex-col flex-1 items-start`}
								>
									<div
										className={`w-fit mt-[-1.00px] relative leading-[var(--paragraph-2-regular-line-height)] font-[number:var(--paragraph-2-regular-font-weight)] text-black-30 [font-style:var(--paragraph-2-regular-font-style)] text-[length:var(--paragraph-2-regular-font-size)] font-paragraph-2-regular tracking-[var(--paragraph-2-regular-letter-spacing)]`}
									>
										<>Volume</>
									</div>
									<div
										className={`relative justify-center leading-[var(--label-1-regular-line-height)] flex-[0_0_auto] items-center inline-flex`}
									>
										<>
											<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-black-60 text-[length:var(--subheading-3-medium-font-size)] tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
												450
											</div>
											<div className='relative w-fit text-[#519c66] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-actiongreen text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
												+20.00%
											</div>
										</>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className={`w-[47.5%] flex flex-col items-start gap-[10px] px-[15px] py-[11px] h-[90%] rounded-[12px] bg-white relative`}
					>
						<div className='w-full flex self-stretch flex-col items-start grow flex-1 justify-between relative'>
							<div className='w-full flex self-stretch items-center flex-[0_0_auto] justify-between relative'>
								<div className='relative w-[36px] h-[36px] bg-[#ffcc9129] flex items-center justify-center rounded-[8px] overflow-hidden'>
									<People
										fill='transparent'
										stroke='#1C1D22'
										className={`!w-[20px] !h-[20px] !top-[8px] !left-[8px]`}
									/>
								</div>
								<div className='flex text-[#BEC0CA] items-center gap-[7px] flex-[0_0_auto] relative'>
									<div className='font-label-1-regular w-fit mt-[-0.50px] tracking-[var(--label-1-regular-letter-spacing)] text-[length:var(--label-1-regular-font-size)] [font-style:var(--label-1-regular-font-style)] text-black-10 relative font-[number:var(--label-1-regular-font-weight)] leading-[var(--label-1-regular-line-height)]'>
										This Week
									</div>
									<FiChevronDown
										className='!relative !w-[16px] !h-[16px]'
										color='#BEC0CA'
									/>
								</div>
							</div>
							<div
								className={`w-full flex self-stretch items-start gap-[5%] flex-[0_0_auto] relative`}
							>
								<div
									className={`relative flex items-start gap-[10%] flex-col flex-1`}
								>
									<div className='relative w-fit mt-[-1.00px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-30 text-[length:var(--paragraph-2-regular-font-size)] tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
										Customers
									</div>
									<div
										className={`inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]`}
									>
										<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-black-60 text-[length:var(--subheading-3-medium-font-size)] tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
											1,250
										</div>
										<div className='relative w-fit text-[#519c66] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-actiongreen text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
											+15.80%
										</div>
									</div>
								</div>
								<div
									className={`relative gap-[10%] flex flex-col flex-1 items-start`}
								>
									<div
										className={`w-fit mt-[-1.00px] relative leading-[var(--paragraph-2-regular-line-height)] font-[number:var(--paragraph-2-regular-font-weight)] text-black-30 [font-style:var(--paragraph-2-regular-font-style)] text-[length:var(--paragraph-2-regular-font-size)] font-paragraph-2-regular tracking-[var(--paragraph-2-regular-letter-spacing)]`}
									>
										<>Active</>
									</div>
									<div
										className={`relative justify-center leading-[var(--label-1-regular-line-height)] flex-[0_0_auto] items-center inline-flex`}
									>
										<>
											<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-black-60 text-[length:var(--subheading-3-medium-font-size)] tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
												450
											</div>
											<div className='relative w-fit text-[#519c66] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-actiongreen text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
												+20.00%
											</div>
										</>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='w-[40%] items-center justify-center flex'>
					<div
						className={`w-[95%] flex flex-col items-center gap-[10px] px-[15px] py-[11px] h-[90%] rounded-[12px] bg-white relative`}
					>
						<div className='w-full flex self-stretch flex-col items-start grow flex-1 justify-between relative'>
							<div className='w-full flex self-stretch items-center flex-[0_0_auto] justify-between relative'>
								<div
									className={`w-[36px] bg-[#ffcc9129] h-[36px] overflow-hidden items-center justify-center rounded-[8px] relative`}
								>
									<Bag
										fill='transparent'
										stroke='#130F26'
										className='!w-[20px] !h-[20px]'
									/>
								</div>
								<div className='inline-flex items-center text-[#BEC0CA] gap-[7px] flex-[0_0_auto] relative'>
									<div className='font-label-1-regular w-fit mt-[-0.50px] tracking-[var(--label-1-regular-letter-spacing)] text-[length:var(--label-1-regular-font-size)] [font-style:var(--label-1-regular-font-style)] text-black-10 relative font-[number:var(--label-1-regular-font-weight)] leading-[var(--label-1-regular-line-height)]'>
										This Week
									</div>
									<FiChevronDown
										className='!relative !w-[16px] !h-[16px]'
										color='#BEC0CA'
									/>
								</div>
							</div>
							<div
								className={`w-full flex self-stretch items-center gap-[8%] justify-between flex-[0_0_auto] relative `}
							>
								<div className='flex flex-col items-start gap-[8px] relative flex-1 grow'>
									<div className='relative w-fit mt-[-1.00px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-30 text-[length:var(--paragraph-2-regular-font-size)] tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
										All Orders
									</div>
									<div className='inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]'>
										<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-black-60 text-[length:var(--subheading-3-medium-font-size)] tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
											450
										</div>
										<div
											className={`relative w-fit font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-actiongreen text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]`}
										></div>
									</div>
								</div>
								<div className='flex flex-col items-start gap-[8px] relative flex-1 grow'>
									<div className='relative w-fit mt-[-1.00px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-30 text-[length:var(--paragraph-2-regular-font-size)] tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
										Pending
									</div>
									<div className='inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]'>
										<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-black-60 text-[length:var(--subheading-3-medium-font-size)] tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
											5
										</div>
										<div
											className={`relative w-fit font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-actiongreen text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]`}
										></div>
									</div>
								</div>
								<div className='flex-col gap-[8px] flex-1 grow flex items-start relative'>
									<div className='relative w-fit mt-[-1.00px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-30 text-[length:var(--paragraph-2-regular-font-size)] tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
										Completed
									</div>
									<div className='inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]'>
										<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-black-60 text-[length:var(--subheading-3-medium-font-size)] tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
											445
										</div>
										<div
											className={`relative w-fit font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-actiongreen text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]`}
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex w-full h-[80%] items-start relative'>
				<div className='flex flex-col justify-between w-[60%] h-full relative'>
					<div className='justify-between relative self-stretch w-full h-[47.5%] flex-[0_0_auto] flex items-start'>
						<div
							className={`w-[47.5%] flex items-center px-[20px] py-[21px] h-full rounded-[12px] justify-center bg-white relative`}
						>
							<div className='flex flex-col items-center grow gap-[8%] flex-1 h-full relative'>
								<div className='w-full flex self-stretch flex-col items-start gap-[12px] flex-[0_0_auto] relative'>
									<div className='w-full flex self-stretch items-start flex-[0_0_auto] justify-between relative'>
										<div className='font-paragraph-1-medium w-fit mt-[-1.00px] tracking-[var(--paragraph-1-medium-letter-spacing)] text-[length:var(--paragraph-1-medium-font-size)] [font-style:var(--paragraph-1-medium-font-style)] text-black-60 font-[number:var(--paragraph-1-medium-font-weight)] leading-[var(--paragraph-1-medium-line-height)] whitespace-nowrap relative'>
											Marketting
										</div>
										<div className='inline-flex text-[#BEC0CA] items-center gap-[7px] flex-[0_0_auto] relative'>
											<div className='font-label-1-regular w-fit mt-[-0.50px] tracking-[var(--label-1-regular-letter-spacing)] text-[length:var(--label-1-regular-font-size)] [font-style:var(--label-1-regular-font-style)] text-black-10 font-[number:var(--label-1-regular-font-weight)] leading-[var(--label-1-regular-line-height)] relative'>
												This Week
											</div>
											<FiChevronDown
												className='!relative !w-[16px] !h-[16px]'
												color='#BEC0CA'
											/>
										</div>
									</div>
									<div className='w-full flex self-stretch items-start flex-[0_0_auto] justify-between relative'>
										<div className='inline-flex items-center gap-[8px] flex-[0_0_auto] justify-center relative'>
											<div className='w-[8px] h-[8px] rounded-[6px] bg-primary-100 relative' />
											<div className='font-label-2-regular w-fit mt-[-1.00px] tracking-[var(--label-2-regular-letter-spacing)] text-[length:var(--label-2-regular-font-size)] [font-style:var(--label-2-regular-font-style)] text-black-20 font-[number:var(--label-2-regular-font-weight)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap relative'>
												Acquisition
											</div>
										</div>
										<div className='inline-flex items-center gap-[8px] flex-[0_0_auto] justify-center relative'>
											<div className='w-[8px] h-[8px] rounded-[6px] bg-primary-50 relative' />
											<div className='font-label-2-regular w-fit mt-[-1.00px] tracking-[var(--label-2-regular-letter-spacing)] text-[length:var(--label-2-regular-font-size)] [font-style:var(--label-2-regular-font-style)] text-black-20 font-[number:var(--label-2-regular-font-weight)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap relative'>
												Purchase
											</div>
										</div>
										<div className='inline-flex items-center gap-[8px] flex-[0_0_auto] justify-center relative'>
											<div className='w-[8px] h-[8px] rounded-[6px] bg-secondary-100 relative' />
											<div className='font-label-2-regular w-fit mt-[-1.00px] tracking-[var(--label-2-regular-letter-spacing)] text-[length:var(--label-2-regular-font-size)] [font-style:var(--label-2-regular-font-style)] text-black-20 font-[number:var(--label-2-regular-font-weight)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap relative'>
												Retention
											</div>
										</div>
									</div>
								</div>
								<Pie />
							</div>
						</div>
						<div className='flex flex-col w-[47.5%] h-full justify-between relative'>
							<div
								className={`w-full flex flex-col items-start gap-[10px] px-[15px] py-[11px] h-[47.5%] rounded-[12px] bg-[#5570F1] relative`}
							>
								<div className='w-full flex self-stretch flex-col items-start grow flex-1 justify-between relative'>
									<div className='w-full flex self-stretch items-center flex-[0_0_auto] justify-between relative'>
										<div className='relative w-[36px] h-[36px] bg-[#ffffff29] flex items-center justify-center rounded-[8px] overflow-hidden'>
											<Folder
												fill='transparent'
												stroke='#FFFFFF'
												className={`!w-[20px] !h-[20px] !top-[8px] !left-[8px]`}
											/>
										</div>
										<div className='flex text-[#BEC0CA] items-center gap-[7px] flex-[0_0_auto] relative'>
											<div className='font-label-1-regular w-fit mt-[-0.50px] tracking-[var(--label-1-regular-letter-spacing)] text-[length:var(--label-1-regular-font-size)] [font-style:var(--label-1-regular-font-style)] text-black-10 relative font-[number:var(--label-1-regular-font-weight)] leading-[var(--label-1-regular-line-height)]'></div>
										</div>
									</div>
									<div
										className={`w-full flex self-stretch gap-[5%] items-start justify-between flex-[0_0_auto] relative`}
									>
										<div
											className={`relative flex items-start gap-[10%] flex-col flex-1`}
										>
											<div className='relative w-fit mt-[-1.00px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-white text-[length:var(--paragraph-2-regular-font-size)] tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
												Sales
											</div>
											<div
												className={`inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]`}
											>
												<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-white text-[length:var(--subheading-3-medium-font-size)] tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
													45
												</div>
												<div className='relative w-fit font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-actiongreen text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'></div>
											</div>
										</div>
										<div
											className={`relative gap-[10%] flex flex-col flex-1 items-start`}
										>
											<div
												className={`w-fit mt-[-1.00px] relative leading-[var(--paragraph-2-regular-line-height)] font-[number:var(--paragraph-2-regular-font-weight)] text-white [font-style:var(--paragraph-2-regular-font-style)] text-[length:var(--paragraph-2-regular-font-size)] font-paragraph-2-regular tracking-[var(--paragraph-2-regular-letter-spacing)]`}
											>
												<>Active</>
											</div>
											<div
												className={`relative justify-center gap-[7px] leading-[var(--label-1-regular-line-height)] flex-[0_0_auto] items-center inline-flex`}
											>
												<>
													<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-white text-[length:var(--subheading-3-medium-font-size)] tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
														32
													</div>
													<div className='relative w-fit text-[#dbdeee] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-actiongreen text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
														+24%
													</div>
												</>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className={`w-full flex flex-col items-start gap-[10px] px-[15px] py-[11px] h-[47.5%] rounded-[12px] bg-white relative`}
							>
								<div className='w-full flex self-stretch flex-col items-start grow flex-1 justify-between relative'>
									<div className='w-full flex self-stretch items-center flex-[0_0_auto] justify-between relative'>
										<div className='relative w-[36px] h-[36px] bg-[#ffcc9129] flex items-center justify-center rounded-[8px] overflow-hidden'>
											<Cart
												className={`!w-[20px] !h-[20px] !top-[8px] !left-[8px]`}
											/>
										</div>
										<div className='flex text-[#BEC0CA] items-center gap-[7px] flex-[0_0_auto] relative'>
											<div className='font-label-1-regular w-fit mt-[-0.50px] tracking-[var(--label-1-regular-letter-spacing)] text-[length:var(--label-1-regular-font-size)] [font-style:var(--label-1-regular-font-style)] text-black-10 relative font-[number:var(--label-1-regular-font-weight)] leading-[var(--label-1-regular-line-height)]'>
												This Week
											</div>
											<FiChevronDown
												className='!relative !w-[16px] !h-[16px]'
												color='#BEC0CA'
											/>
										</div>
									</div>
									<div
										className={`w-full flex self-stretch items-start gap-[5%] flex-[0_0_auto] relative`}
									>
										<div
											className={`relative flex items-start gap-[10%] flex-col flex-1`}
										>
											<div className='relative w-fit mt-[-1.00px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-[#CC5F5F] text-[length:var(--paragraph-2-regular-font-size)] tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
												Abandoned Cart
											</div>
											<div
												className={`inline-flex items-center justify-center gap-[7px] relative flex-[0_0_auto]`}
											>
												<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-black-60 text-[length:var(--subheading-3-medium-font-size)] tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
													20%
												</div>
												<div className='relative w-fit text-[#519c66] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-actiongreen text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
													+0.00%
												</div>
											</div>
										</div>
										<div
											className={`relative gap-[10%] flex flex-col flex-1 items-start`}
										>
											<div
												className={`w-fit mt-[-1.00px] relative leading-[var(--paragraph-2-regular-line-height)] font-[number:var(--paragraph-2-regular-font-weight)] text-black-30 [font-style:var(--paragraph-2-regular-font-style)] text-[length:var(--paragraph-2-regular-font-size)] font-paragraph-2-regular tracking-[var(--paragraph-2-regular-letter-spacing)]`}
											>
												<>Customers</>
											</div>
											<div
												className={`relative justify-center leading-[var(--label-1-regular-line-height)] flex-[0_0_auto] items-center inline-flex`}
											>
												<>
													<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-black-60 text-[length:var(--subheading-3-medium-font-size)] tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
														30
													</div>
													<div className='relative w-fit text-[#519c66] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-actiongreen text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
														+20.00%
													</div>
												</>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-start gap-[10px] px-[20px] py-[15px] relative self-stretch h-[47.5%] w-full flex-[0_0_auto] bg-[#ffffff] rounded-[12px]'>
						<div className='flex h-full flex-col items-start gap-[36px] relative self-stretch w-full flex-[0_0_auto]'>
							<div className='flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]'>
								<div className='inline-flex items-center gap-[21px] relative flex-[0_0_auto]'>
									<div className='relative w-fit font-paragraph-1-medium font-[number:var(--paragraph-1-medium-font-weight)] text-black-60 text-[length:var(--paragraph-1-medium-font-size)] tracking-[var(--paragraph-1-medium-letter-spacing)] leading-[var(--paragraph-1-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-medium-font-style)]'>
										Summary
									</div>
									<div className='w-[99px] h-[30px] bg-[#5570f114] overflow-hidden relative rounded-[8px]'>
										<div className='flex items-center gap-[20px] relative top-[5px] left-[12px]'>
											<div className='text-primary-100 text-[length:var(--paragraph-2-regular-font-size)] relative w-fit font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
												Sales
											</div>
											<FiChevronDown
												className='!relative !w-[20px] !h-[20px]'
												color='#5570F1'
											/>
										</div>
									</div>
								</div>
								<div className='inline-flex items-center gap-[7px] relative flex-[0_0_auto]'>
									<div className='relative w-fit mt-[-0.50px] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-black-100 text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
										Last 7 Days
									</div>
									<FiChevronDown
										className='!relative !w-[16px] !h-[16px]'
										color='#1C1D22'
									/>
								</div>
							</div>
							<div className='flex items-start h-[85%] justify-between relative self-stretch w-full flex-[0_0_auto]'>
								<div className='flex flex-col items-end h-full gap-[7.5%] relative flex-[0_0_auto]'>
									<div className='relative w-fit mt-[-1.00px] font-label-2-regular font-[number:var(--label-2-regular-font-weight)] text-black-20 text-[length:var(--label-2-regular-font-size)] tracking-[var(--label-2-regular-letter-spacing)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap [font-style:var(--label-2-regular-font-style)]'>
										100k
									</div>
									<div className='relative w-fit font-label-2-regular font-[number:var(--label-2-regular-font-weight)] text-black-20 text-[length:var(--label-2-regular-font-size)] text-right tracking-[var(--label-2-regular-letter-spacing)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap [font-style:var(--label-2-regular-font-style)]'>
										80k
									</div>
									<div className='relative w-fit font-label-2-regular font-[number:var(--label-2-regular-font-weight)] text-black-20 text-[length:var(--label-2-regular-font-size)] text-right tracking-[var(--label-2-regular-letter-spacing)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap [font-style:var(--label-2-regular-font-style)]'>
										60k
									</div>
									<div className='relative w-fit font-label-2-regular font-[number:var(--label-2-regular-font-weight)] text-black-20 text-[length:var(--label-2-regular-font-size)] text-right tracking-[var(--label-2-regular-letter-spacing)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap [font-style:var(--label-2-regular-font-style)]'>
										40k
									</div>
									<div className='relative w-fit font-label-2-regular font-[number:var(--label-2-regular-font-weight)] text-black-20 text-[length:var(--label-2-regular-font-size)] text-right tracking-[var(--label-2-regular-letter-spacing)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap [font-style:var(--label-2-regular-font-style)]'>
										20k
									</div>
								</div>
								<div className='flex flex-col items-center gap-[3%] h-full relative flex-[0_0_auto]'>
									<div className='relative w-[13px] h-[80%] bg-[#eef0f9] rounded-[50px]'>
										<div className='h-[90%] relative top-[10%] bg-primary-100 rounded-[50px]' />
									</div>
									<div className='relative w-fit  font-label-2-regular font-[number:var(--label-2-regular-font-weight)] text-black-20 text-[length:var(--label-2-regular-font-size)] tracking-[var(--label-2-regular-letter-spacing)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap [font-style:var(--label-2-regular-font-style)]'>
										Sept 10
									</div>
								</div>
								<div className='flex flex-col items-center gap-[3%] h-full relative flex-[0_0_auto]'>
									<div className='relative w-[13px] h-[80%] bg-[#eef0f9] rounded-[50px]'>
										<div className='h-[40%] relative top-[60%] bg-primary-100 rounded-[50px]' />
									</div>
									<div className='relative w-fit  font-label-2-regular font-[number:var(--label-2-regular-font-weight)] text-black-20 text-[length:var(--label-2-regular-font-size)] tracking-[var(--label-2-regular-letter-spacing)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap [font-style:var(--label-2-regular-font-style)]'>
										Sept 11
									</div>
								</div>
								<div className='flex flex-col items-center gap-[3%] h-full relative flex-[0_0_auto]'>
									<div className='relative w-[13px] h-[80%] bg-[#eef0f9] rounded-[50px]'>
										<div className='h-[60%] relative top-[40%] bg-primary-100 rounded-[50px]' />
									</div>
									<div className='relative w-fit  font-label-2-regular font-[number:var(--label-2-regular-font-weight)] text-black-20 text-[length:var(--label-2-regular-font-size)] tracking-[var(--label-2-regular-letter-spacing)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap [font-style:var(--label-2-regular-font-style)]'>
										Sept 12
									</div>
								</div>
								<div className='flex flex-col items-center gap-[3%] h-full relative flex-[0_0_auto]'>
									<div className='relative w-[13px] h-[80%] bg-[#eef0f9] rounded-[50px]'>
										<div className='h-[20%] relative top-[80%] bg-primary-100 rounded-[50px]' />
									</div>
									<div className='relative w-fit  font-label-2-regular font-[number:var(--label-2-regular-font-weight)] text-black-20 text-[length:var(--label-2-regular-font-size)] tracking-[var(--label-2-regular-letter-spacing)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap [font-style:var(--label-2-regular-font-style)]'>
										Sept 13
									</div>
								</div>
								<div className='flex flex-col items-center gap-[3%] h-full relative flex-[0_0_auto]'>
									<div className='relative w-[13px] h-[80%] bg-[#eef0f9] rounded-[50px]'>
										<div className='h-[80%] relative top-[20%] bg-primary-100 rounded-[50px]' />
									</div>
									<div className='relative w-fit  font-label-2-regular font-[number:var(--label-2-regular-font-weight)] text-black-20 text-[length:var(--label-2-regular-font-size)] tracking-[var(--label-2-regular-letter-spacing)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap [font-style:var(--label-2-regular-font-style)]'>
										Sept 14
									</div>
								</div>
								<div className='flex flex-col items-center gap-[3%] h-full relative flex-[0_0_auto]'>
									<div className='relative w-[13px] h-[80%] bg-[#eef0f9] rounded-[50px]'>
										<div className='h-[40%] relative top-[60%] bg-primary-100 rounded-[50px]' />
									</div>
									<div className='relative w-fit  font-label-2-regular font-[number:var(--label-2-regular-font-weight)] text-black-20 text-[length:var(--label-2-regular-font-size)] tracking-[var(--label-2-regular-letter-spacing)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap [font-style:var(--label-2-regular-font-style)]'>
										Sept 15
									</div>
								</div>
								<div className='flex flex-col items-center gap-[3%] h-full relative flex-[0_0_auto]'>
									<div className='relative w-[13px] h-[80%] bg-[#eef0f9] rounded-[50px]'>
										<div className='h-[80%] relative top-[20%] bg-primary-100 rounded-[50px]' />
									</div>
									<div className='relative w-fit  font-label-2-regular font-[number:var(--label-2-regular-font-weight)] text-black-20 text-[length:var(--label-2-regular-font-size)] tracking-[var(--label-2-regular-letter-spacing)] leading-[var(--label-2-regular-line-height)] whitespace-nowrap [font-style:var(--label-2-regular-font-style)]'>
										Sept 16
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='w-[40%] flex items-center justify-center h-full'>
					<div
						className={`w-[95%] flex items-start gap-[10px] p-[20px] rounded-lg bg-white relative h-full`}
					>
						<div
							className={`flex flex-col grow flex-1 relative ${
								orders.length === 0
									? "items-center"
									: "items-start"
							} ${
								orders.length === 0
									? "gap-[160px]"
									: "gap-[23px]"
							} ${orders.length === 0 ? "justify-center" : ""}`}
						>
							<div className='font-paragraph-1-medium self-stretch mt-[-1.00px] tracking-[var(--paragraph-1-medium-letter-spacing)] text-[length:var(--paragraph-1-medium-font-size)] [font-style:var(--paragraph-1-medium-font-style)] text-black-60 font-[number:var(--paragraph-1-medium-font-weight)] leading-[var(--paragraph-1-medium-line-height)] relative'>
								Recent Orders
							</div>
							<div
								className={`flex-col flex overflow-y-scroll h-full no-scrollbar relative ${
									orders.length > 0 ? "w-full" : ""
								} ${
									orders.length === 0 ? "inline-flex" : "flex"
								} ${orders.length > 0 ? "self-stretch" : ""} ${
									orders.length === 0
										? "items-center"
										: "items-start"
								} ${
									orders.length === 0
										? "gap-[40px]"
										: "gap-[12px]"
								}`}
							>
								{orders.length > 0 && (
									<>
										{orders.map((order) => {
											return (
												<OrderCard
													name={order.name}
													date={order.date}
													image={order.image}
													price={order.price}
													quantity={order.quantity}
													status={order.status}
												/>
											);
										})}
									</>
								)}

								{orders.length === 0 && (
									<>
										<div className='relative w-[5vw] h-[5vw] items-center justify-center flex bg-main-background rounded-full overflow-hidden border border-solid border-grey'>
											<Bag
												className='relative w-[60px] h-[60px]'
												stroke='#F1F3F9'
												fill='#A6A8B1'
											/>
										</div>
										<div className='inline-flex flex-col items-center gap-[24px] relative flex-[0_0_auto]'>
											<div className='inline-flex flex-col items-center gap-[12px] relative flex-[0_0_auto]'>
												<div className='relative w-fit mt-[-1.00px] font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-black text-[length:var(--subheading-3-medium-font-size)] text-center tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
													No Orders Yet?
												</div>
												<p className='relative w-[282px] font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-30 text-[length:var(--paragraph-2-regular-font-size)] text-center tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
													Add products to your store
													and start selling to see
													orders here.
												</p>
											</div>
											<div className='flex w-[180px] h-[44px] items-center justify-center gap-[10px] px-[16px] py-[17px] relative bg-primary rounded-[12px]'>
												<div className='inline-flex items-center justify-center gap-[20px] relative flex-[0_0_auto] mt-[-7.00px] mb-[-7.00px]'>
													<Plus className='!relative !w-[24px] !h-[24px]' />
													<div className='relative w-fit font-paragraph-1-regular font-[number:var(--paragraph-1-regular-font-weight)] text-white text-[length:var(--paragraph-1-regular-font-size)] text-center tracking-[var(--paragraph-1-regular-letter-spacing)] leading-[var(--paragraph-1-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-1-regular-font-style)]'>
														New Product
													</div>
												</div>
											</div>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
