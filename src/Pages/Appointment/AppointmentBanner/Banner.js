import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { Day, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Banner = ({date, setDate}) => {
    return (
        <div class="hero min-h-screen md:px-10" style={{
            background: `url(${bg})`
        }}>
            <div class="hero-content flex-col lg:flex-row-reverse gap-16">
                <div>
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl"/>
                </div>
                <div className=''>
                    <DayPicker className='bg-white'
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                            //   footer={footer}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;