import React from "react";

import { Card, CardBody, CardTitle, CardText } from "reactstrap";
// import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
// import { BsPersonFill } from "react-icons/bs";

const GetQuotes = ({ quote }) => {
    return (
       <div>
            <h1 className="text-center textColor">Famous Quote</h1>
            <Card>
                <CardBody className="">
                    <CardText className="text-end text-capitalize">{"" + quote?.tags}</CardText>
                    <CardTitle className="bg-secondary rounded p-2 text-white text-center">
                        <h4>{quote.content}</h4>
                    </CardTitle>
                    <CardText className="text-center">{"~ " + quote.author}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default GetQuotes;
