import { useEffect, useState } from "react";

import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import GetQuotes from "./components/GetQuotes";

import Axios from "axios";

function App() {
    const [quote, setQuote] = useState({});

    const fetchQuotes = async () => {
        const { data } = await Axios.get("https://api.quotable.io/random");
        console.log(data);

        const quote = data;
        setQuote(quote);
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    return (
        <Container fluid className=" p-4 bg-color App">
            <Row>
                <Col md={8} className=" offset-md-2 mt-4">
                    <GetQuotes quote={quote} />
                </Col>
            </Row>
            <h5 className=" d-flex flex-row-reverse mt-4 p-2 text-white">
                <a
                    href="https://abhinav0115.github.io/Random_Quote/"
                    className="text-success "
                >
                    <h4>Refresh</h4>
                </a>
                Generate new Quote:
            </h5>
        </Container>
    );
}

export default App;
