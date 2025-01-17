import React from "react";
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import NewsletterForm from '../../components/NewsletterForm'
import GelMap from '../../components/GelMap'

const StyledContactPage = styled.section`
  margin-top: 200px;
  
  address {
    font-style: normal;
    margin-top: 2rem;
  }
  .column {
    padding: 2rem;
  }

  .gel-map-row {
    position: relative;
    z-index: 0;
  }

  .gel-contact-details-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .gel-contact-details {
    font-size: 2rem;
    margin-bottom: 2rem;
    line-height: 1.3;
  }

  .gel-contact-details h2 {
    font-size: 2rem;
    margin-bottom: 0;
  }

  .gel-newsletter-form [type="email"] {
    border: unset;
    box-shadow: unset;
    border-bottom: 1px solid ${props => props.theme.typeGrey};
    border-radius: 0;
    margin-bottom: 10px;
    font-size: 2rem;
    padding-left: 0;
  }

  @media (max-width: 768px) {
    .gel-contact-image-row img {
      margin-top: 3rem;
    }
  }

  @media (min-width: 769px) {
    .columns.gel-map-row {
      margin-bottom: 10rem;
    }
  }
`

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  render() {
    const {data} = this.props

    return (
      <Layout>
        <StyledContactPage className="section">
          <div className="container">
            <div className="content">
              <div className="columns gel-map-row">
                <div className="column">
                  <GelMap />
                </div>
              </div>
              <div className="columns">
                <h1 className="visually-hidden">Contact Gel</h1>
                <div className="column gel-contact-image-row">
                  <a href="https://goo.gl/maps/ST3VQzgpiqP2" target="_blank" rel="noopener noreferrer">
                    <Img fluid={data.file.childImageSharp.fluid} />
                  </a>
                </div>
                <div className="column gel-contact-details-column">
                  <div className="gel-contact-details">
                    <h2>Become a client</h2>
                    <a href="mailto:info@gelcreative.ca" className="button is-large is-dark gel-button-1" style={{ marginTop: '1em' }}>Email Us</a>
                  </div>
                  <div className="gel-contact-details">
                    <h2>Contact us</h2>
                    <a href="tel:+17057277980">705.727.7980</a>
                    <address>
                      <a
                        href="https://www.google.com/maps/place/89+Collier+St,+Barrie,+ON+L4M+1H2/@44.3902458,-79.6868214,17z/data=!3m1!4b1!4m5!3m4!1s0x882aa32e300f8edf:0x696f3192d7cd8c25!8m2!3d44.3902458!4d-79.6846327"
                        target="_blank"
                        rel="noopener noreferrer"
                      >  
                        89 Collier Street, Suite 201 <br />
                        Barrie, ON L4M 1H2
                      </a>
                    </address>
                  </div>
                  <div className="gel-contact-details">
                    <h2>Get on the list</h2>
                    <p>Find out what we're working on, <br />get event invites, and other fun things.</p>
                  </div>
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </StyledContactPage>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    file(relativePath: {eq: "gel-boardroom.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`