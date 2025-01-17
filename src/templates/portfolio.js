import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import PortfolioGrid from '../components/PortfolioGrid'
import GelServices from '../components/GelServices'

const StyledPortfolioPage = styled.article`
  > .container {
    margin-top: 150px;
  }
  .gel-portfolio-intro {
    font-size: 2rem;
  }
  .gel-portfolio-grid-section {
    margin-bottom: 5rem;
  }
`

export const PortfolioPageTemplate = ({
  title,
  portfolioIntro,
  helmet,
}) => {
  return (
      <StyledPortfolioPage className="section">
        { helmet || '' }
        <div className="container">
          <section className="columns is-centered">
            <div className="column content has-text-centered is-10 is-offset-1">
              <h1>{title}</h1>
              <p className="gel-portfolio-intro">{portfolioIntro}</p>
            </div>
          </section>
          <section className="gel-portfolio-grid-section">
            <PortfolioGrid />
          </section>
          <GelServices />
        </div>
      </StyledPortfolioPage>
  )
}

PortfolioPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  portfolioIntro: PropTypes.string,
}

const PortfolioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <PortfolioPageTemplate
        title={frontmatter.title}
        portfolioIntro={frontmatter.portfolio_intro}
        helmet={
          <Helmet
            titleTemplate="%s | Gel Marketing"
          >
            <title>{`${frontmatter.title}`}</title>
            <meta name="description" content={`${frontmatter.portfolio_intro}`} />
          </Helmet>
        }
      />
    </Layout>
  )
}

PortfolioPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PortfolioPage

export const portfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        portfolio_intro
      }
    }
  }
`;