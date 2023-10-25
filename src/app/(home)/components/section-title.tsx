import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
    return (<p className="font-bold uppercase pl-5 mb-2">{children}</p>  );
}
 
export default SectionTitle;