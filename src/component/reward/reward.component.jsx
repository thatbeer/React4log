
import './reward.styles.css'

const Reward = () => {
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
    ];
    return (
        <div className='categories-container'>
            {categories.map(({title, id , imageUrl}) => (
                <div key={id} className='category-container'>
                    <div 
                        className='background-image' 
                        style={{
                            backgroundImage: `url(${imageUrl})`,
                        }}
                    />
                    <div className='category-body-container'>
                        <h2>{title}</h2>
                        <p>Click for More Detail</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reward;