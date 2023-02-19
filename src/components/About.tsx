import { FunctionComponent } from "react";
import "../css/about.css"


interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    return (<>
        <div className="container">
            <div className="row">
                <img src="/Workspace2.jpeg" alt="" className="col-md-6" />
                <div className="col-md-6">
                    <h3 className="display-3">Who Are We?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aperiam nesciunt minima in consectetur, reiciendis, similique exercitationem natus consequuntur quam, soluta voluptate excepturi provident culpa dolore ad porro! Dignissimos, ducimus.
                        Quibusdam totam ipsa magnam vero necessitatibus, magni molestiae ut distinctio rem a minima cumque, ducimus dolores eos sit. Ipsum quam magni veniam aut impedit ex quibusdam distinctio quasi ipsa omnis!
                        Eligendi quas sapiente vero, inventore exercitationem voluptatum asperiores est et sint, consectetur, enim hic labore nulla atque ipsa illo tempore maiores quo earum sed voluptatibus dolorem eveniet minima animi. Et?
                        Suscipit saepe eius, quibusdam quas inventore similique excepturi officia asperiores culpa nostrum vitae velit sunt accusamus quae aperiam porro ullam, ad quos incidunt quis, totam nisi? Soluta iusto delectus officiis!
                        Perferendis sequi doloribus, eius enim repellendus similique aperiam rem animi quos fugiat impedit deserunt provident nam recusandae, vero reprehenderit debitis alias distinctio? Tempora consequatur adipisci a nihil odio dolore nobis.
                    </p>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="img_avatar.png" alt="Avatar" />
                            </div>
                            <div className="flip-card-back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default About;