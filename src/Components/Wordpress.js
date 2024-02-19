import img1 from '../Assets/sevenseascj.com.jpg';
import img2 from '../Assets/rajmudratransport.jpg';
import img3 from '../Assets/kpproduction.in.jpg';
import img4 from '../Assets/jayakhanna.com.jpg';
import img5 from '../Assets/Emcee Manoj.com.jpg';
import img6 from '../Assets/mystiiquereading.com.jpg';

function Wordpress() {
    return ( 
        <>
        <h1 className="text-center">Wordpress Projects</h1>
        <br/><br/>
        <div class="container text-center">
        <div class="row">
            <div class="col">
            <a href="http://sevenseascj.com/" target='_blank'><img src={img1} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/>
            <a href="http://rajmudratransport.in/" target='_blank'><img src={img2} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a>
            </div>
            <div class="col">
            <a href="https://kpproduction.in/" target='_blank'><img src={img3} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/>
            <a href="https://jayakhanna.com/" target='_blank'><img src={img4} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a>
            </div>
            <div class="col">
            <a href="https://emceemanoj.com/" target='_blank'><img src={img5} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/>
            <a href="https://mystiiquereading.com/" target='_blank'><img src={img6} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a>
            </div>
        </div>
        </div>
</>
     );
}

export default Wordpress;