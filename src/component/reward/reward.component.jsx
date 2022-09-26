
import SignIn from '../../route/signIn/signIn.component';
import './reward.styles.css'

const Reward = ({ category}) => {
    const { imageUrl, title} = category;
    return (
        <div className='category-container'>
          <div
            className='background-image'
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
          <SignIn />
        </div>
      );
    };

export default Reward;