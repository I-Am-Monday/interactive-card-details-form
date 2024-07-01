import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classes from "./sections.module.css";
import Input from "./Input";
import CardImg from "./CardImg";
import CardLabel from "./CardLabel";
import CardSuccess from "./CardSuccess";
function Cardform() {
  const form = useForm();
  const { register, handleSubmit, formState: { errors } } = form;
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [mm, setMm] = useState("");
  const [yy, setYy] = useState("");
  const [cgv, setCgv] = useState("");
  const [tapble, setTapble] = useState(true);
  const onSubmit = (data) => {
  console.log("data",data)
    if(data){
      setTapble(!tapble);
    }
    
  };

  return (
    <>
      {tapble ? 
        <div>
          <div className={classes.carform}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <CardLabel name="Cardholder Name" />
                <Input
                  name="cardholderName"
                  setDatacard={setCardholderName}
                  datacard={cardholderName}
                  placeholder="e.g Jane Appleseed"
                  type="text"
                  width={"400px"}
                  height={"37.17px"}
                  register={register}
                  errors={errors}
                />
              </div>
              <div style={{ marginTop: "35px" }}>
                <CardLabel name=" Card Number" />
                <Input
                  name="cardholdernumber"
                  setDatacard={setCardNumber}
                  datacard={cardNumber}
                  placeholder="e.g 123  5678 9123 0000"
                  type="text"
                  width={"400px"}
                  height={"37.17px"}
                  register={register}
                  errors={errors}
                />
              </div>
              <div style={{ marginTop: "35px" }}>
                <div style={{ display: "flex" }}>
                  <CardLabel name=" EXP.DATE (MM/YY)" />
                  <CardLabel name=" CGV" />
                </div>

                <div style={{ marginTop: "8px", display: "flex" }}>
                  <Input
                    name="mm"
                    setDatacard={setMm}
                    datacard={mm}
                    placeholder="mm"
                    type="text"
                    width={"80px"}
                    height={"45px "}
                    register={register}
                    errors={errors}
                  
                  />
                  <Input
                    name="yy"
                    setDatacard={setYy}
                    datacard={yy}
                    placeholder="yy"
                    type="text"
                    width={"80px"}
                    height={"45px "}
                    register={register}
                    errors={errors}
                  
                  />
                  <Input
                    name="CGV"
                    setDatacard={setCgv}
                    datacard={cgv}
                    placeholder="e.g 123"
                    type="text"
                    width={"191px"}
                    height={"45px "}
                    register={register}
                    errors={errors}
            
                  />
                </div>
              </div>
              <button className={classes.sectionsrightbutton} type="submit">
                Confirm
              </button>
            </form>
          </div>
          <div className={classes.sectionrightsimg}>
            <CardImg
              cardNumber={cardNumber}
              cardholderName={cardholderName}
              mm={mm}
              yy={yy}
              cgv={cgv}
            />
          </div>
        </div>
       : 
        <CardSuccess
          cardNumber={cardNumber}
          cardholderName={cardholderName}
          mm={mm}
          yy={yy}
          cgv={cgv}
        />
      }
    </>
  );
}

export default Cardform;
