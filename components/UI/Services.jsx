import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Entrepreuneur" icon="ri-apps-line" />

                <ServicesItem title="Accompagnateur" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Formateur"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="Ce que je fais" />
            <h3 className="mb-0 mt-4">Formations et entrepreunariat</h3>
            <h3 className="mb-4">Meilleure experience</h3>
            <p>
                 Des textes pour modifier ici!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
