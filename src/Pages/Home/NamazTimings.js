function NamazTimings() {
  return (
    <section className="namaz-block">
      <div className="gap remove-gap">
        <div className="container-fluid">
          <div className="center-content">
            <div className="sec-tl text-center">
              <span className="theme-clr head">Associated Mosque</span>
              <h2 className="center-heading">Namaz Timings</h2>
              <img
                decoding="async"
                src="https://taqwa.nauthemes.net/wp-content/uploads/2020/06/prayer-head-shp.png"
                alt="heading-image"
              />
            </div>
            <div className="pr-tm-wrp light_mode">
              <ul className="pr-tm-lst">
                <li className="pr-tm-bx color">
                  <h6>Fajr</h6>
                  <span>
                    <i className="thm-clr">Begins:</i>4:50 AM
                  </span>
                  <span>
                    <i className="thm-clr">Iqamah:</i>5:30 AM
                  </span>
                </li>
                <li className="pr-tm-bx">
                  <h6>Zuhr</h6>
                  <span>
                    <i className="thm-clr">Begins: </i>01:01 PM
                  </span>
                  <span>
                    <i className="thm-clr">Iqamah:</i>1:30 PM
                  </span>
                </li>
                <li className="pr-tm-bx color">
                  <h6>Asr</h6>
                  <span>
                    <i className="thm-clr">Begins:</i>5:17 PM
                  </span>
                  <span>
                    <i className="thm-clr">Iqamah:</i>6:00 PM
                  </span>
                </li>
                <li className="pr-tm-bx">
                  <h6>Magrib</h6>
                  <span>
                    <i className="thm-clr">Begins:</i>7:21 PM
                  </span>
                  <span>
                    <i className="thm-clr">Iqamah:</i>7:21 PM
                  </span>
                </li>
                <li className="pr-tm-bx color">
                  <h6>Isha</h6>
                  <span>
                    <i className="thm-clr">Begins:</i>8:37 PM
                  </span>
                  <span>
                    <i className="thm-clr">Iqamah:</i>9:00 PM
                  </span>
                </li>
                <li className="pr-tm-bx note spc-pr-tm">
                  <h6>Jumuah</h6>
                  <span>
                    <i>Begins:</i>01:01 PM
                  </span>
                  <span>
                    <i>Iqamah:</i>1:30 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NamazTimings