import '../../style.css';
import mockup from "../../asset/image/card/mockup.png";
import pers from "../../asset/image/background/Perspective.jpg";
import js from '../../asset/image/card/js.png';
import react from '../../asset/image/card/React-icon2.png';
import html from '../../asset/image/card/html.png';
import { Router } from "react-router-dom";
function projects(){
    return(
        <div>
            <div className='   m-auto pt-32'>
            <img src={pers} className="object- rounded-xl w-4/5 m-auto"></img>
            
            </div>
            <div className='w-4/5 m-auto mt-10 flex flex-col gap-5'>
                <h1 className='text-6xl text-littletittle '>Hairned Studio</h1>
                <p className='text-littletext'> stylish salon dedicated to providing top-notch haircuts and grooming services for men. Our experienced barbers specialize in classic and contemporary cuts, and we use only the finest products to ensure that you leave our shop looking and feeling your best.

We offer a wide range of services, including haircuts, shaves, beard trims, and color services. Our barbers are skilled in all types of hair, and can create a look that's tailored to your individual style. We also offer a variety of grooming products, including pomades, shaving creams, and colognes, so you can maintain your new look at home.</p>
            </div>
            <div className='text-center relative flex flex-col mt-40 gap-10'>
              
            <h1 className='text-4xl   '>Technology</h1>
            <ul className='flex justify-center flex-wrap gap-10 '>

                <li className="js-card flex items-center justify-center">
                    <div>
                    <img src={js} className="w-14" alt=""></img>
                     <p className='text-littletext text-sm opacity-70'>React Js</p>
                    </div>
                     </li>
                     <li className="js-card flex items-center justify-center">
                    <div>
                    <img src={react} className="w-14" alt=""></img>
                     <p className='text-littletext text-sm opacity-70'>React Js</p>
                    </div>
                     </li>
                     <li className="js-card flex items-center justify-center">
                    <div>
                    <img src={html} className="w-14" alt=""></img>
                     <p className='text-littletext text-sm opacity-70'>React Js</p>
                    </div>
                     </li>
                     <li className="js-card flex items-center justify-center">
                    <div>
                    <img src={js} className="w-14" alt=""></img>
                     <p className='text-littletext text-sm opacity-70'>React Js</p>
                    </div>
                     </li>
            </ul>
            </div>
            
<div className=' mt-24'>
    <h1 className='text-littletittle w-4/5 m-auto text-5xl font-bold'>Preview</h1>
    <img src={pers} className="mt-5"></img>
</div>
            
            
        </div>
    )

}
export default projects;