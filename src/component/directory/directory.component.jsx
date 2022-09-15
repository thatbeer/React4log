import RewardItem from "../reward/reward.component2";
import './directory.styles.css'
const Directory = ({categories}) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <RewardItem key={category.id} category={category}/>
            ))}
        </div>
    )
};

export default Directory;