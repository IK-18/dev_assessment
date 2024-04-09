import React from "react";

export interface topNavProps {
	text: string;
	profile: string;
	open: boolean;
}

export interface menuProps {
	activeIcon?: React.FC<React.SVGAttributes<SVGElement>>;
	inactiveIcon?: React.FC<React.SVGAttributes<SVGElement>>;
	icon?: React.FC<
		React.SVGAttributes<SVGElement> & {fill: string; stroke: string}
	>;
	path: string;
	text: string;
	notifications?: number;
}

export interface supportProps {
	icon: React.FC<React.SVGAttributes<SVGElement>>;
	path: string;
	text: string;
	subtext?: string;
	bgcolor: string;
}

export interface contactProps extends React.HTMLProps<HTMLDivElement> {
	unread: boolean;
	newContact: boolean;
	newMessages: number;
	image: any;
	name: string;
	time: string;
	placeholder: string;
	activeID: number;
	activate: React.MouseEventHandler;
	active: number;
}

export interface orderProps extends React.HTMLProps<HTMLDivElement> {
	image: any;
	price: string;
	quantity: number;
	date: string;
	status: number;
	name: string;
}
