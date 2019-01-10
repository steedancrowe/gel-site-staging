import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const PortfolioPageTemplate = ({
  title,
  headerImage,
  projectImages1,
  main,
  projectImages2,
}) => {
  return (
    <section className="section">
      <h1>{title}</h1>

    </section>
  )
}

PortfolioPageTemplate.propTypes = {}

const PortfolioPage = ({ data }) => {
  const { markdownRemark: portfolioEntry } = data
  return (
    <Layout>
      <PortfolioPageTemplate
        title={portfolioEntry.title}
        headerImage={portfolioEntry.header_image}
        projectImages1={portfolioEntry.project_images_1}
        main={portfolioEntry.main}
        projectImages2={portfolioEntry.project_images_2}
      />
    </Layout>
  )
}

PortfolioPage.PropTypes = {}

export default PortfolioPage

export const portfolioQuery = graphql`
  query PortfolioEntryByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
    id
    frontmatter {
      title
      header_image {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project_intro
      project_images_1 {
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      main {
        detail_text
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      project_images_2 {
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  }
`;