import "../Styles/Company.css";
import '../Styles/material-icons.css';
import { COMPANYCARD } from "./CompanyCardsDB";


import React from "react";

const Company = () => {
  return (
    <div className="background-company">
      <h2 id="company" className="title-company">
        Company
      </h2>
      <div className="company-paragraph">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          facilis animi quisquam? Ab possimus, tempore ducimus repellat omnis
          odio dolorum, sunt molestias non corporis cumque, iure eos ut tenetur
          veniam. Deserunt animi magnam, dolore necessitatibus voluptates
          incidunt! Eos natus facilis minima culpa nesciunt aliquid, ducimus
          eligendi voluptate velit perferendis cupiditate praesentium temporibus
          cum facere id soluta, amet est iste reprehenderit. Magnam aliquam
          illum, sapiente tenetur aspernatur libero unde dolor exercitationem
          corporis fugiat distinctio fuga reprehenderit mollitia impedit dolorum
          veritatis obcaecati consectetur? Officiis nam perferendis veritatis
          odio maxime, cupiditate reiciendis numquam! Quidem soluta, officiis
          explicabo, amet eos nam cumque nemo consequuntur velit voluptas
          maiores?
        </p>
      </div>
      <div className="company">
          {COMPANYCARD.map((company) => (
            <div className="company-cards" key={company.Id}>
              <p className="material-icons">{company.Img}</p>
              <h3 className="company-headline">{company.Headline}</h3>
              <p className="company-description">{company.Description}</p>
            </div>
          ))}
        </div> 
    </div>
  );
};

export default Company;
