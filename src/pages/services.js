import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import Heading from '../components/Reuseable/Heading'
import Coursecart from '../components/Cart/Coursecart'
import Bundlecart from '../components/Cart/Bundlecart'
const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Services" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="I Write Code"
      subtitle=""
      heroclass="about-background"
    />
    <InfoBlock heading="Our Services" />
    <Coursecart courses={data.courses} />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="Let's learn more by spending less"
      subtitle=""
      heroclass="about-background"
    />
    <Bundlecart bundles={data.bundles} />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  courses: allContentfulCourses{
    edges {
     node{
       id,
       title,
       category,
       price,
       description {
         description
       }
       image {
         fixed(width:200, height:120) {
          ...GatsbyContentfulFixed_tracedSVG
         }
       }
     }
   }
   },
   bundles: allContentfulBundes {
    edges {
      node {
        id,
        title,
        price,
        image{
          fixed(width:200, height:120) {
            ...GatsbyContentfulFixed_tracedSVG
         }
        }
      }
    }
  }
}`

export default AboutPage
