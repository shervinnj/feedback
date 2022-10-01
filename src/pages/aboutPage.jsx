import Card from "../Components/shared/Card";
import {Link} from 'react-router-dom'


function AboutPage() {
    return ( 
       <Card>
        <h1>About Us</h1>
        <p>Please visit our website: <a href="http://www.shervinnj.com">here😎</a></p>
        <Link to="/">🏠Return back to home</Link><br />
        <a href="">📞Contact Us</a><br />
        <a href="yahoo.com">📨nj_shervin@yahoo.com</a>


       </Card>
     );
}

export default AboutPage;