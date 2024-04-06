import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

const BlogDiv = ({ data, path }) => {
    const location = useLocation();
    const ref = useRef();
    const history = useNavigate();

    useEffect(() => {
        if (location.pathname.includes("Category")) {
            ref.current.classList.add("w-10/12");
            ref.current.classList.add("mx-auto");
            ref.current.classList.add("my-5");
            ref.current.classList.remove("w-2/12");
        }
    }, [location]);

    return (
        <div
            ref={ref}
            onClick={(e) => {
                history(`/single-blog/${data.iBlogId}`);
            }}
            className="items-center flex flex-col self-center w-11/12 my-2 rounded-md border-1 pb-3
       border-lightest-grey md:mx-2 px-2 cursor-pointer transition-all hover:scale-105 shrink-0 mobile:mx-auto"
        >
            <img
                src={`${path}${data.vImage}`}
                alt=""
                className="object-cover object-center h-60 rounded-md mt-2"
            />
            <div className="flex flex-col items-center">
                <h3 className="md:text-xl mobile:text-[28px]">{data?.vTitle}</h3>
                <p className="mobile:text-base md:text-sm text-center px-2">
                    {data?.vDescription.slice(0, 100) + "..."}
                </p>
            </div>
        </div>
    );
};

export default BlogDiv;