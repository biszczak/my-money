import React from 'react';

import { Grid, Image } from './Homepage.css';
import mainIlustration from './images/main-ilustration.png';

function Homepage() {
    return (
        <Grid>
            <section>
                <Image src={mainIlustration} alt="save-money" />
            </section>
            <section>
                <h1>Control your money with us!</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt at obcaecati maxime ipsam aspernatur deserunt, facere delectus, dolorum asperiores provident vel, id tenetur maiores facilis reiciendis. Perspiciatis atque corrupti odit.</p>
            </section>
        </Grid>
    )
}


export default Homepage;