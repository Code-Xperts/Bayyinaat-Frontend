import React from "react";
import TopHeader from "./../../../Common/TopHeader";
import Header from "./../../../Common/Header";
import Footer from "./../../../Common/Footer";

function AboutSection() {
    return (
        <>
            <TopHeader />
            <Header />
            <section
                className="about-section"
                style={{
                    backgroundImage:
                        "url(https://taqwa.nauthemes.net/wp-content/uploads/2020/04/bg-vector-2-1.png)",
                }}
            >
                <div className="donate-container">
                    <div className="donate-main">
                        <div className="donate-child">
                            <div className="texttt-new">
                                <h2>Islamabad Bank Account Details:</h2>
                            </div>
                            <div className="super-class">
                                <div className="main-account-names">
                                    <div className="donte-class">
                                        <span className="names-account">A/C Title:</span>
                                        <p className="account-detail">Al-Huda International Welfare Foundation (Collection ISB Region)</p>
                                    </div>
                                    <div className="donte-class">
                                        <span className="names-account">A/C No:</span>
                                        <p className="account-detail">0316-0104783594</p>
                                    </div>
                                    <div className="donte-class">
                                        <span className="names-account">A/c Type:</span>
                                        <p className="account-detail">PKR</p>
                                    </div>
                                    <div className="donte-class">
                                        <span className="names-account">Branch Code:</span>
                                        <p className="account-detail">0316</p>
                                    </div>
                                    <div className="donte-class">
                                        <span className="names-account">Swift Code:</span>
                                        <p className="account-detail">MEZNPKKAGRD</p>
                                    </div>
                                    <div className="donte-class">
                                        <span className="names-account">IBAN #:</span>
                                        <p className="account-detail">PK13 MEZN 0003 1601 0478 3594</p>
                                    </div>
                                    <div className="donte-class">
                                        <span className="names-account">Bank Name & Add:</span>
                                        <p className="account-detail">Meezan Bank Ltd, E-11 Branch, Islamabad</p>
                                    </div>
                                </div>
                            </div>
                            <div className="account-mail">
                                <h2 className="email-address">Email Address:</h2>
                                <p className="account-mail-email">donations@alhudapk.com</p>
                            </div>
                            <div className="account-phone">
                                <h2 className="phone-no">WhatsApp:</h2>
                                <p className="account-phone-no">+923364444639</p>
                            </div>
                            <div className="account-office">
                                <h2 className="office">Office Address:</h2>
                                <p className="account-office-address">7- A.K, Brohi Road, H-11/4, Islamabad, Pakistan. <p className="account-phone-no">Tel: +92(51)4866125-9</p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
export default AboutSection;
