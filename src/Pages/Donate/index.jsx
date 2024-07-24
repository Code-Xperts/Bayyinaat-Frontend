import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Footer, Header, TopHeader } from "../../components";
import { Banks, Donations } from "../../constants/apiEndPoints";
import httpRequest from "../../axios/index.js";
import { useSelector } from "react-redux";

function Donate() {
  const { t } = useTranslation();
  const [donationHtml, setDonationHtml] = useState('');
  const currentLanguage = useSelector(
    (state) => state.languageSlice.currentlanguage
  );

  useEffect(() => {
    const FetchDonationsPage = async () => {
      try {
        const resp = await httpRequest.get(`${Donations}/${currentLanguage?.code}`);
        if (resp.status === 200 || resp.status === 201) {
          setDonationHtml(resp.data?.data?.description)
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    FetchDonationsPage();
  }, []);

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
          <div className="donate-main" dangerouslySetInnerHTML={{ __html: donationHtml }}/>
            {/* {BanksDetails.length > 0 */}
              {/* // ? BanksDetails.map((detail) => { */}
                  {/* // return ( */}
                    {/* // <div key={detail._id} className="donate-child"> */}
                      {/* <div className="texttt-new">
                        <h2>{t("islamabadbankaccountdetails")}</h2>
                      </div> */}
                      {/* <div className="super-class">
                        <div className="main-account-names">
                          <div className="donte-class">
                            <span className="names-account">
                              {t("actitle")}
                            </span>
                            <p className="account-detail">
                               {t(
                                "alhudainternationalwelfarefoundationcollectionisbregion"
                              )} 
                              {detail.accountTitle}
                            </p>
                          </div>
                          <div className="donte-class">
                            <span className="names-account">{t("acno")}</span>
                            <p className="account-detail">
                              {detail.accountNumber}
                            </p>
                          </div>
                          <div className="donte-class">
                            <span className="names-account">{t("actype")}</span>
                            <p className="account-detail">
                              {detail.accountType}
                            </p>
                          </div>
                          <div className="donte-class">
                            <span className="names-account">
                              {t("branchcode")}
                            </span>
                            <p className="account-detail">
                              {detail.branchCode}
                            </p>
                          </div>
                          <div className="donte-class">
                            <span className="names-account">
                              {t("swiftcode")}
                            </span>
                            <p className="account-detail">{detail.swiftCode}</p>
                          </div>
                          <div className="donte-class">
                            <span className="names-account">IBAN #:</span>
                            <p className="account-detail">{detail.IBAN}</p>
                          </div>
                          <div className="donte-class">
                            <span className="names-account">
                              {t("banknameadd")}
                            </span>
                            <p className="account-detail">
                              {detail.bankAddress}
                            </p>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="account-mail">
                        <h2 className="email-address">{t("emailaddress")}</h2>
                        <p className="account-mail-email">
                          {detail.emailAddress}
                        </p>
                      </div> */}
                      {/* <div className="account-phone">
                        <h2 className="phone-no">{t("whatsapp")}</h2>
                        <p className="account-phone-no">
                          {detail.whatsappNumber}
                        </p>
                      </div> */}
                      {/* <div className="account-office">
                        <h2 className="office">{t("officeaddress")}</h2>
                        <p className="account-office-address">
                          {detail.officeAddress}
                          <p className="account-phone-no">
                            Tel: {detail.telephone}
                          </p>
                        </p>
                      </div> */}
                    {/* </div> */}
                  {/* ); */}
                {/* }) */}
              {/* :  */}
              {/* "No Details Found"} */}

              
          {/* </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Donate;
