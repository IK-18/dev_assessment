import {createContext, useContext} from "react";

const ContactContext = createContext(-1);

export const useContactContext = () => {
	useContext(ContactContext);
};

export default ContactContext;
