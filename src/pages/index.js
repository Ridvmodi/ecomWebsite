import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import Coursecart from "../components/Cart/Coursecart";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="I Write Code"
      subtitle="LearnCodeOnline"
      heroclass="hero-background"
    />
    <InfoBlock heading="About Us" />
    <Coursecart courses={data.courses} />
    <DualInfoBlock heading="Our Team" url="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
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
   }
}`

export default IndexPage
