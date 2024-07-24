import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { Footer, Header, TopHeader } from "../../components";
import { useLocation } from "react-router-dom";

const Answers = ({ onSearch }) => {
  const location = useLocation();
  const data = location.state?.data; 
  return (
    <>
      <TopHeader />
      <Header />
      <section>
        <div className="Answer-heading">
          <h1 className="an-headi">Answer Tile</h1>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="sub-contt">
            <div className="que-cont">
              <div className="questio-major">
                <h2 className="question-heading">Question</h2>
                <a>
                  <FontAwesomeIcon icon={faShareNodes} />
                </a>
              </div>
              <div className="Question-para">
                {
                 data &&  data[0]?.question ? data[0]?.question :<p className="que-para">
                  I have completed my Masters Degree in Human Resource
                  Management (HRM) / Personnel Management, which is a
                  specialised branch of MBA. However, now that Allah has guided
                  me to practice Islam I find this qualification a waste,
                  because <br></br>
                  1. The jobs that are available based on this qualification
                  invariably entail writing down riba (i.e. helping employees
                  get provident fund, insurance, bank loans etc, keeping records
                  of the riba involved etc) <br></br>
                  2. Almost all Human Resource jobs also entail recruiting
                  people – both men and women, and for this it means being alone
                  with a non mahram woman during the interview and even
                  afterwards, for performance appraisals etc, asking about their
                  personal and professional lives. <br></br>
                  3. In any case all workplaces with HR departments (without a
                  single exception in my land) are mixed where women make wanton
                  display of their beauty.<br></br>
                  Should I take up any of such job, hoping to conduct myself in
                  a good Islamic manner and thereby attract my colleagues to
                  Islam, or should I shun such jobs and study some other skills,
                  the resultant occupation, though lesser in terms of salary or
                  status, may not lead to such evils. If so, kindly suggest some
                  occupations where such evils can be minimized. Also, please
                  give examples of how the Sahabah and the salaf earned their
                  livelihood. Also, some people say Prophet Mohammed, may Allah
                  bless him and grant him peace, preferred business over a job.
                  Is there any basis in this saying? Please give me a speedy
                  answer because I have now completed my studies and am on the
                  lookout for a job. May Allah reward you for your efforts to
                  find solutions based on the Quran and Sunnah.
                </p>
                }
                
                <div className="customs-tags">
                  {
                   data && data[0]?.tags?.map((item,index)=>(
                      <div key={index} className="custom-tag">
                      <p className="tags">item</p>
                    </div>
                    ))
                  }
                 
                  
                </div>
              </div>
            </div>
            <div className="ans-main">
              <div className="ans-heading">
                <h2 className="answer-major">Answer</h2>
              </div>
              <div className="answer-para">
                {
                  data && data[0]?.answer ? data[0]?.answer : <p className="ans-para">
                  1- Some jobs are haram in and of themselves such as working in
                  riba-based banks and places where alcohol is sold. 2- Some
                  jobs may be haram because of things in the work-place that are
                  contrary to Shari`ah such as mixing between men and women, or
                  because it is stipulated that one should wear haram clothing
                  or do other things that are contrary to Shari`ah such as
                  shaving the beard. It is not permissible for the Muslim to do
                  either type of job. However, there are guidelines to be
                  followed and some exceptions in cases of need and when certain
                  evils are unavoidable.
                </p>
                }
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Answers;
