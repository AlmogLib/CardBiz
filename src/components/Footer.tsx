import { FunctionComponent } from "react";
import "../css/footer.css"

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (<>
        <div className="clear"></div>
        <footer className="footer text-center text-white fixed-bottom">
            {/* <!-- Grid container --> */}
            <div className="container pt-2">
                {/* <!-- Section: Social media --> */}
                <section>
                    {/* <!-- Facebook --> */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-facebook-f"></i
                    ></a>

                    {/* <!-- Twitter --> */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-twitter"></i
                    ></a>

                    {/* <!-- Google --> */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-google"></i
                    ></a>

                    {/* <!-- Instagram --> */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-instagram"></i
                    ></a>

                    {/* <!-- Linkedin --> */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-linkedin"></i
                    ></a>
                    {/* <!-- Github --> */}
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>
                {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center text-dark mb-3">
                © 2020 Copyright:
                <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>

    </>);
}

export default Footer;