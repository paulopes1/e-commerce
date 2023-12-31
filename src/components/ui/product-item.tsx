import {ProductWithTotalPrice} from "@/helpers/product"
import { ArrowDownIcon } from "lucide-react";
import { Badge } from "./badge"
import Image from "next/image";

interface ProductItemProps{
    product: ProductWithTotalPrice;
}

const ProductItem = ({product}: ProductItemProps) => {
    return <div className="flex max-w-[170px] flex-col gap-4">
        <div className=" relative bg-accent rounded-lg h-[170px] w-[170px] flex items-center justify-center ">
            <Image
                src={product.imageUrls[0]}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto max-w-[80%] w-auto max-h-[70%]" 
                style={{
                    objectFit: "contain"
                }}
                alt={product.name}
            />

            {product.discountPercentage > 0 &&(
            <Badge className="absolute left-3 top-3 px-2 py-[2px]">
                <ArrowDownIcon  size={14}/> {product.discountPercentage}%
            </Badge>
            )}
        </div>

        

        <div className="flex flex-col gap-1"> 
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                {product.name}
            </p>

            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                {product.discountPercentage > 0 ?(
                    <>
                        <p className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">R$ {product.totalPrice.toFixed(2)}</p>

                        <p className="opacity-75 line-through text-xs overflow-hidden text-ellipsis whitespace-nowrap">
                            R$ {Number(product.basePrice).toFixed(2)}</p>
                    </>
                ) : (
                    <p className="font-semibold text-sm">R$ {product.totalPrice.toFixed(2)}</p>
                )}


            </div>
        </div>
    </div>
};
 
export default ProductItem;