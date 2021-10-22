import React, { useState, useMemo } from "react";

import { Field, Form, Formik } from "formik";

import { rangeFormSchema } from "../../Validations/Homepage/rangeInputSchema";
import { getOfficesInRange } from "../../Api/Homepage/getOfficesInRange";

import "./Homepage.css";
import Card from "../Card/Card";
import { OfficesInRange } from "../../Interfaces/Homepage";
import Pagnitation from "../Pagination/Pagination";
import { Paginate } from "../../Utils/Paginate";

const Homepage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [partners, setPartners] = useState<OfficesInRange[]>();

  const [paginatedPartners, setPaginatedPartners] =
    useState<OfficesInRange[]>();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [isCardsSectionActive, setIsCardsSectionActive] = useState(false);

  useMemo(() => {
    const data = Paginate(partners, currentPage, 9);

    setPaginatedPartners(data);
  }, [partners, currentPage]);

  const handlePagination = (
    event: any,
    value: React.SetStateAction<number>
  ) => {
    setCurrentPage(value);
  };

  const toggleCardsSectionVisibility = (value: boolean) => {
    setIsCardsSectionActive(value);
  };

  return (
    <>
      <div className="container">
        <div className="inputSection">
          <h3 className="title">Distance Calculator App</h3>
          <hr className="inputSectionHr" />
          <p className="description">
            Distance Calculator App finds the great circle distance between two
            points in kilometers. Assuming that your current location is
            (51.5144636,-0.142571), please enter the range to search for
            partners.
          </p>
          <Formik
            initialValues={{
              range: 0,
            }}
            validationSchema={rangeFormSchema}
            onSubmit={async (values, { setErrors }) => {
              try {
                toggleCardsSectionVisibility(true);

                const { range } = values;

                setLoading(true);

                const response = await getOfficesInRange(range);

                setLoading(false);

                if (response) {
                  setPartners(response.partners);
                }
              } catch (error) {
                setLoading(false);
                console.error(error);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                {/* range */}
                <div className="form-group">
                  <label htmlFor="rangeInput">Range</label>
                  <Field
                    name="range"
                    className="form-control"
                    id="rangeInput"
                    placeholder="enter range here"
                  />
                  {touched.range && (
                    <div className="validationErrors">{errors.range}</div>
                  )}
                </div>

                {/* submit button */}
                <button type="submit" className="submitButton">
                  <span>{"Submit"}</span>
                </button>

                <div className="result">
                  {loading && (
                    <div className="wrapper">
                      <div className="loader"></div>
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div
          className={`cardsSection ${
            isCardsSectionActive ? null : "mobileVisibilityHidden"
          }`}
        >
          <div className="cardsContainer">
            {paginatedPartners?.map((partner) => (
              <div className="card" key={partner.office.coordinates}>
                <Card
                  distance={partner.distance}
                  partner={partner.partner}
                  office={partner.office}
                  key={partner.partner.id}
                ></Card>
              </div>
            ))}
            <div className="pagination">
              <Pagnitation
                totalCount={partners?.length ?? 0}
                pageSize={9}
                currentPage={currentPage}
                onPaginate={handlePagination}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
