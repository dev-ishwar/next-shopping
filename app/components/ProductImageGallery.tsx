'use client';

import Image from "next/image";
import { useState } from "react";

type PropsType = {
    images: string[],
    thumbnail: string
}

const ProductImageGallery = ({ images, thumbnail }: PropsType) => {
    const [currentImage, setCurrentImage] = useState<string>(thumbnail);

    return (
        <div>
            <Image
                src={currentImage}
                width={300}
                height={300}
                alt="product"
            />
            {/* TODO: fix timeout error for product images.   */}
            {/* <div className="flex gap-2">
                {
                    images.map((img, i) => (
                        <Image
                            key={img + i}
                            src={img}
                            width={300}
                            height={300}
                            alt="product"
                            onMouseOver={() => setCurrentImage(img)}
                        />
                    ))
                }
            </div> */}
        </div>
    )
}

export default ProductImageGallery;