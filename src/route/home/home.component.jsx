

import Directory from "../../../component/directory/directory.component";
import { Outlet } from "react-router-dom";
const Home = () => {
  const categories = [
    {
      id : 1,
      title : "toy",
      imageUrl : "https://d2cva83hdk3bwc.cloudfront.net/be-rbrick-x-jpx-nong-toy-400----100--1.jpg",
    },
    {
      id : 2,
      title : "Voucher",
      imageUrl : "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id : 3,
      title : "Comodities",
      imageUrl : "https://ifccd.net/uploads/image/TradeCommodities.jpg",
    },
    {
      id : 4,
      title : "Serial",
      imageUrl : "https://ifccd.net/uploads/image/TradeCommodities.jpg",
    },
    {
      id : 5,
      title : "Citewwork",
      imageUrl : "https://ifccd.net/uploads/image/TradeCommodities.jpg",
    },
    {
      id : 6,
      title : "HouseHold",
      imageUrl : "https://ifccd.net/uploads/image/TradeCommodities.jpg",
    },
    {
      id : 7,
      title : "Funiture",
      imageUrl : "https://ifccd.net/uploads/image/TradeCommodities.jpg",
    },


    ];
  return (
    <div>
        <Outlet />
        <Directory categories={categories}/>
   
    </div>
  );
}

export default Home;
