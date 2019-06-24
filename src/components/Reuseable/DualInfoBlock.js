import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function DualInfoBlock({heading, url}) {
    return (
        <section className="py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos est fugit accusamus, enim illo cumque aliquam dolor placeat incidunt. Modi vero magni laboriosam eos voluptatum porro odio ipsa quos, qui recusandae, quis dicta libero adipisci. Eos, in eligendi adipisci quisquam tenetur minus et molestias saepe harum, ratione voluptatibus, expedita aspernatur!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, amet tenetur non saepe praesentium dolor? Iusto accusamus cum non modi fuga obcaecati fugit molestias beatae, placeat praesentium corrupti minus voluptates autem amet sint dignissimos doloribus eum quia dolor veritatis voluptas. Placeat hic quam natus non atque odit, facilis fugiat blanditiis alias esse aspernatur. Maxime repellat excepturi aliquid velit iure ut id quidem magnam pariatur voluptas distinctio aspernatur omnis molestias deserunt at, labore praesentium voluptate aliquam, odit nemo eum optio consequuntur perspiciatis commodi. Necessitatibus, esse odit, ab corporis voluptatem tempora quisquam excepturi inventore dolorum quibusdam nesciunt veniam expedita, nobis harum ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas consequuntur sequi sint eius ipsum blanditiis quae ratione, nam eaque?
                        </p>    
                    </div>
                    <div className="col-4">
                        <div class="card bg-dark text-white">
                            <img  class="card-img-top" src={url} alt="image goes here"/>
                            <div class="card-body">
                                <h5 class="card-title">Just Click It</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, nihil blanditiis eveniet nostrum consequatur cum repellat asperiores tempore adipisci atque culpa facere sint fugit omnis exercitationem animi dolor! Aliquid, officiis!</p>
                                <Link className="btn btn-warning btn-block" to="#">{heading}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
