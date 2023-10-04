import React, { useEffect, useState } from 'react';
import TopHeader from "./../../../Common/TopHeader";
import Header from "./../../../Common/Header";
import Footer from "./../../../Common/Footer";
import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';


function AboutSection() {
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                                <h2>{t('islamabadbankaccountdetails')}</h2>   
                            </div>
                            <div className="super-class">
                                <div className="main-account-names">
                                    <div className="donte-class">
                                        <span className="names-account">{t('actitle')}</span>
                                        <p className="account-detail">{t('alhudainternationalwelfarefoundationcollectionisbregion')}</p>
                                    </div>
                                    <div className="donte-class">
                                        <span className="names-account">{t('acno')}</span>
                                        <p className="account-detail">0316-0104783594</p>
                                    </div>
                                    <div className="donte-class">
                                        <span className="names-account">{t('actype')}</span>
                                        <p className="account-detail">PKR</p>
                                    </div>
                                    <div className="donte-class">
                                        <span className="names-account">{t('branchcode')}</span>
                                        <p className="account-detail">0316</p>
                                    </div>
                                    <div className="donte-class">
                                        <span className="names-account">{t('swiftcode')}</span>
                                        <p className="account-detail">MEZNPKKAGRD</p>
                                    </div>
                                    <div className="donte-class">
                                        <span className="names-account">IBAN #:</span>
                                        <p className="account-detail">PK13 MEZN 0003 1601 0478 3594</p>
                                    </div>
                                    <div className="donte-class">
                                        <span className="names-account">{t('banknameadd')}</span>
                                        <p className="account-detail">Meezan Bank Ltd, E-11 Branch, Islamabad</p>
                                    </div>
                                </div>
                            </div>
                            <div className="account-mail">
                                <h2 className="email-address">{t('emailaddress')}</h2>
                                <p className="account-mail-email">donations@alhudapk.com</p>
                            </div>
                            <div className="account-phone">
                                <h2 className="phone-no">{t('whatsapp')}</h2>
                                <p className="account-phone-no">+923364444639</p>
                            </div>
                            <div className="account-office">
                                <h2 className="office">{t('officeaddress')}</h2>
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
