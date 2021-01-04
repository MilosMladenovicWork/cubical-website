import React from 'react'

import styles from './blog-entry.module.scss'
import blogImg from '../../img/blog.jpg'
import Section from '../../components/Section'
import MarginContainer from '../../components/MarginContainer'
import RoofSVG from '../../components/RoofSVG'
import AppearOnViewContainer from '../../components/AppearOnViewContainer'

const BlogEntryPage = () => {
    return(
        <React.Fragment>
            <MarginContainer/>
            <Section>
                <AppearOnViewContainer>
                    <div className={styles.miscInfo}>
                        <h5>
                             Real Estate
                        </h5>
                        <p>
                            <small>12/10/2020</small>
                        </p>
                    </div>
                </AppearOnViewContainer>
                <AppearOnViewContainer>
                    <h1>Blog Title</h1>
                </AppearOnViewContainer>
                <AppearOnViewContainer>
                    <img className={styles.image} src={blogImg} alt=''/>
                </AppearOnViewContainer>
                <AppearOnViewContainer>
                    <div className={styles.content}>
                        <p>
                            Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here.Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here.Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here.Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here.Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here.
                        </p>
                        <p>
                            <a href='/'>Some blog post about real estate text here.</a> Some blog post about real estate text here. Some blog post about real estate text here.Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here.Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here.Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here.Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here.Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here.
                        </p>
                        <ul>
                            <li>Some blog post</li>
                            <li>about real</li>
                            <li>estate</li>
                            <li>text here</li>
                        </ul>
                    </div>
                </AppearOnViewContainer>
            </Section>
        </React.Fragment>
    )
}

export default BlogEntryPage