import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import styles from "./immobilien-entry.module.scss";
import Section from "../../components/Section";
import MarginContainer from "../../components/MarginContainer";
import RoofSVG from "../../components/RoofSVG";
import Slider from "../../components/Slider";

import realEstate1 from "../../img/real-estate-1.png";
import realEstate2 from "../../img/real-estate-2.png";
import realEstate3 from "../../img/real-estate-3.png";
import SliderController from "../../components/SliderController";
import Map from "../../components/Map";
import SeeMoreContainer from "../../components/SeeMoreContainer";
import ItemAppearOverlay from "../../components/ItemAppearOverlay";
import AppearOnViewContainer from "../../components/AppearOnViewContainer";

const ImmobilienEntry = ({ data }) => {
  const [swiper, setSwiper] = useState();
  const [activeSlide, setActiveSlide] = useState();
  console.log(data);

  return (
    <React.Fragment>
      <MarginContainer />
      {data.prismicProperty.data && (
        <React.Fragment>
          <Section>
            <AppearOnViewContainer>
              <h1 className={styles.propertyTitle}>
                {data.prismicProperty.data.property_heading}
              </h1>
            </AppearOnViewContainer>
            <div className={styles.rowBorderLayout}>
              <AppearOnViewContainer>
                <div>
                  <h5> AUF EINEN BLICK</h5>
                  <div className={styles.infoList}>
                    <span>Preis:</span>
                    <span>CHF {data.prismicProperty.data.preis}</span>
                    <br />
                    <span>Kategorie:</span>
                    <span>{data.prismicProperty.data.category}</span>
                    <br />
                    <span>Anzahl Zimmer:</span>
                    <span>{data.prismicProperty.data.zimmer}</span>
                    <br />
                    <span>Wohnfläche:</span>
                    <span>
                      {data.prismicProperty.data.wohnflache}m<sup>2</sup>
                    </span>
                    <br />
                    {data.prismicProperty.data.important_information &&
                      data.prismicProperty.data.important_information.length >
                        0 &&
                      data.prismicProperty.data.important_information.map(
                        (info, index) => {
                          return (
                            <React.Fragment key={index}>
                              <span>{info.information_name}</span>
                              <span>{info.information_value}</span>
                              <br />
                            </React.Fragment>
                          );
                        }
                      )}
                  </div>
                </div>
              </AppearOnViewContainer>
              <AppearOnViewContainer>
                <div>
                  <h5> ANGABEN</h5>
                  <div className={styles.infoList}>
                    <span>PLZ/Ort:</span>
                    <span>{data.prismicProperty.data.ort}</span>
                    <br />
                    {data.prismicProperty.data.other_information &&
                      data.prismicProperty.data.other_information.length > 0 &&
                      data.prismicProperty.data.other_information.map(
                        (info, index) => {
                          return (
                            <React.Fragment key={index}>
                              <span>{info.information_name}</span>
                              <span>{info.information_value}</span>
                              <br />
                            </React.Fragment>
                          );
                        }
                      )}
                  </div>
                </div>
              </AppearOnViewContainer>
            </div>
            <AppearOnViewContainer>
              <Slider setSwiper={setSwiper} setActiveSlide={setActiveSlide}>
                {data.prismicProperty.data.images &&
                  data.prismicProperty.data.images.length > 0 &&
                  data.prismicProperty.data.images.map((image, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Image
                          fluid={
                            image.image &&
                            image.image.localFile &&
                            image.image.localFile.childImageSharp.fluid
                          }
                          alt={image.image && image.image.alt}
                        />
                      </SwiperSlide>
                    );
                  })}
              </Slider>
            </AppearOnViewContainer>
            <AppearOnViewContainer>
              {data.prismicProperty.data.images &&
                data.prismicProperty.data.images.length > 0 && (
                  <SliderController
                    swiper={swiper}
                    numberOfSlides={data.prismicProperty.data.images.length}
                    activeSlide={activeSlide}
                  />
                )}
            </AppearOnViewContainer>
            <AppearOnViewContainer>
              <SeeMoreContainer>
                <div className={styles.content}>
                  {data.prismicProperty.data.description &&
                    data.prismicProperty.data.description.html && (
                      <React.Fragment>
                        <h5> BESCHREIBUNG</h5>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.prismicProperty.data.description.html,
                          }}
                        ></div>
                      </React.Fragment>
                    )}
                </div>
              </SeeMoreContainer>
            </AppearOnViewContainer>
          </Section>
          <Section>
            <div className={styles.rowBorderLayout}>
              <AppearOnViewContainer>
                {data.prismicProperty.data.besichtigung_information &&
                  data.prismicProperty.data.besichtigung_information.html && (
                    <div>
                      <h5> BESICHTIGUNG</h5>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            data.prismicProperty.data.besichtigung_information
                              .html,
                        }}
                      ></div>
                    </div>
                  )}
              </AppearOnViewContainer>
              <div>
                {data.prismicProperty.data.property_document_card_text &&
                  data.prismicProperty.data.property_document &&
                  data.prismicProperty.data.property_document.url && (
                    <div className={styles.box}>
                      <ItemAppearOverlay
                        text={
                          data.prismicProperty.data.property_document_card_text
                        }
                        linkToSee={
                          data.prismicProperty.data.property_document.url
                        }
                        linkToDownload={
                          data.prismicProperty.data.property_document.url
                        }
                      />
                    </div>
                  )}
              </div>
            </div>
          </Section>
          {data.prismicProperty.data.property_geocode &&
            data.prismicProperty.data.property_geocode.latitude &&
            data.prismicProperty.data.property_geocode.longitude && (
              <Section>
                <h5> LAGE</h5>
                <AppearOnViewContainer>
                  <div className={styles.mapContainer}>
                    <Map
                      coords={[
                        data.prismicProperty.data.property_geocode.latitude,
                        data.prismicProperty.data.property_geocode.longitude,
                      ]}
                      zoom={17}
                    />
                  </div>
                </AppearOnViewContainer>
              </Section>
            )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export const ImmobilienQuery = graphql`
  query ImmobilienQuery($uid: String!) {
    prismicProperty(uid: { eq: $uid }) {
      data {
        besichtigung_information {
          html
        }
        category
        description {
          html
        }
        images {
          image {
            alt
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        important_information {
          information_name
          information_value
        }
        ort
        other_information {
          information_name
          information_value
        }
        preis
        property_document {
          url
        }
        property_document_card_text
        property_geocode {
          latitude
          longitude
        }
        property_heading
        type_of_property
        wohnflache
        zimmer
      }
    }
  }
`;

export default ImmobilienEntry;
