import { useEffect, useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import ProductCard from "../comman/ProductCard";
import axios from "axios";

function Products() {

    const [product, setProduct] = useState([]);

    useEffect(() => {

        axios.get("https://a2zithub.org/dairy/abi/product_det").then((res) => {

            console.log("Server Response", res.data);
            setProduct(res.data);

        });

    }, []);

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100">

                {/* Header */}

                <div className="bg-black text-white py-16">

                    <h1 className="text-center text-5xl font-bold">
                        Our Shoes Collection
                    </h1>

                    <p className="text-center text-gray-300 mt-4 text-lg">
                        Find your perfect pair from our premium collection.
                    </p>

                </div>

                {/* Products */}

                <div className="max-w-7xl mx-auto px-5 py-14">

                    {
                        product.length === 0 ?

                            <div className="text-center text-2xl font-semibold text-gray-500">
                                No Products Available
                            </div>

                            :

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                                {
                                    product.map((val, index) => (

                                        <ProductCard
                                            key={index}
                                            data={val}
                                        />

                                    ))
                                }

                            </div>

                    }

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Products;