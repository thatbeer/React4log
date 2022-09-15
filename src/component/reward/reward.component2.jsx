
import './reward.styles.css'

const RewardItem = ({category}) => {
    const {id,title,imageUrl} = category;
    return (
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
    );
};

export default RewardItem
