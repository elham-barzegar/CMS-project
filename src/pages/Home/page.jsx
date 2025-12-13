import React, {useState} from 'react';
import SectionTitle from "../../components/common/SectionTitle.jsx";
import {useNavigate} from "react-router";

const Home = () => {

    const [isRedirecting,setIsRedirecting] = useState(false);
    const navigate= useNavigate()
    const toggle = () =>{
        setIsRedirecting(!isRedirecting);
    }

    const CTAButton = () =>{
        const clickHandler =()=>{
            toggle()
            setTimeout(()=>{
                navigate("/products")

            }, 2009)
        };
        return (
            <button
            onClick={clickHandler}
            className="primary-bg px-4 py-2 text-white text-sm rounded-md cursor-pointer hover:opacity-90"
            >
                {
                    isRedirecting ? "در حال انتقال ..." : "ایجاد محصول"
                }
            </button>
        )
    }
    return (
        <>
            {/* eslint-disable-next-line react-hooks/static-components */}
          <SectionTitle title="داشبورد" Buttons={<CTAButton />} />
        {/*    <Summaries /> */}

            <div className="">
                {/*<DetailsCharts />*/}
                {/*<ProductsTable />*/}
                {/*<QuickOverview />*/}

            </div>
        </>
    )
}

export default Home;