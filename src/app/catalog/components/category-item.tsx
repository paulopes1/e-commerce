import { Category } from "@prisma/client";
import Image from "next/image"

interface CategoryItemProps{
    category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
    return ( <div className="flex flex-col">
        <div className=" to-[rgba(80, 51, 195, 0.2)] w-full h-[150px] rounded-tl-lg rounded-tr-lg flex items-center justify-center bg-gradient-to-r from-[#5033C3]"> 
            {/* IMAGEM */ }
            <Image
                src={category.imageUrl}
                alt={category.name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-auto max-w-[80%]"
                style={{
                    objectFit: "contain",
                }}
            />
        </div>

        <div className="bg-accent py- rounded-br-lg rounded-bl-lg py-3">
            <p className="text-center text-sm font-semibold">{category.name}</p>
        </div>
    </div> );
}
 
export default CategoryItem;