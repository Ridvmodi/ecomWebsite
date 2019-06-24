import React, { Component } from 'react'
import Heading from "../Reuseable/Heading";
import Img from 'gatsby-image'

const getCaty = (items) => {
    let holdItems = items.map(item => {
        return item.node.category
    })
    let holdCategories = new Set(holdItems)
    let categories = Array.from(holdCategories)
    categories = ["all", ...categories]
    return categories
}

export default class Coursecart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            mycategories: getCaty(props.courses.edges)
        }
    }
    catyClicked = category => {
        let keepItSafe = [...this.state.courses]   

        if(category === "all") {
            this.setState({
                mycourses: keepItSafe
            })
        } else {
            let filteredCategories = keepItSafe.filter( ({node}) => node.category === category)
            this.setState({
                mycourses: filteredCategories
            })
        }
    }
    render() {
        return (
            <section className="py-5">
                <div className="container">
                    <Heading title="Courses" />
                    <div className="row mb-3">
                        <div className="col-10 mx-auto text-center">
                            {
                                this.state.mycategories.map( (category, index) => {
                                    return(
                                        <button 
                                        type="button" 
                                        className="btn btn-dark m-3 px-3" 
                                        key={index} 
                                        onClick={() => this.catyClicked(category)}>
                                            {category}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row">
                        { 
                            this.state.mycourses.map(({node}) => {
                                return(
                                    <div 
                                    key={node.id}
                                    className="col-11 col-md-6 d-flex mx-auto mb-3"
                                    >
                                        <Img fixed={node.image.fixed} className="rounded"/>
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0">{node.title}</h6>
                                                <h6 className="mb-0 text-success">$ {node.price}</h6>
                                            </div>
                                            <p className="text-muted"><small>{node.description.description}</small></p>
                                            <button
                                             className="btn btn-warning snipcart-add-item"
                                             data-item-id={node.id}
                                            data-item-name={node.title}
                                            data-item-price={node.price}
                                            data-item-url="https://ecomwebsite.netlify.com/"
                                            data-item-image={node.image.fixed.src}
                                             >Join Now</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
