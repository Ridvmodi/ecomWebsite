import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import TeamSection from "../components/About/TeamSection"
import Heading from '../components/Reuseable/Heading'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="I Write Code"
      subtitle=""
      heroclass="about-background"
    />
    <InfoBlock heading="About Us" />
    <Heading title="Meet Our Team" />
    <TeamSection />
    <DualInfoBlock heading="A messagge from CEO" url="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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
  }
}`

export default AboutPage
