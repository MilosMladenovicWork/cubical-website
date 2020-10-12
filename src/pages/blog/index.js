import React from 'react'

import styles from './blog.module.scss'
import PageIntro from '../../components/PageIntro'
import MarginContainer from '../../components/MarginContainer'
import OffsetItemContainer from '../../components/OffsetItemContainer'
import ImageInfoItem from '../../components/ImageInfoItem'
import blogImg from '../../img/blog.jpg'
import Section from '../../components/Section'

const BlogPage = () => {
    return(
        <React.Fragment>
            <MarginContainer/>
            <PageIntro title='Blog'>
                <p>This is some example sentence. This is some example sentence but a little longer one. This is some example sentence. This is some example sentence. This is some example sentence but a little longer one. This is some example sentence. This is some example sentence. This is some example sentence but a little longer one. This is some example sentence. </p>
            </PageIntro>
            <Section>
                <OffsetItemContainer>
                    <ImageInfoItem link='/blog-entry/' image={blogImg} title={'Blog Title'} heading={'Real Estate'}>
                        <small>12/10/2020</small>
                        <p>
                            Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here. 
                        </p>
                    </ImageInfoItem>
                    <ImageInfoItem link='/blog-entry/' image={blogImg} title={'Blog Title'} heading={'Real Estate'}>
                        <small>12/10/2020</small>
                        <p>
                            Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here. 
                        </p>
                    </ImageInfoItem>
                    <ImageInfoItem link='/blog-entry/' image={blogImg} title={'Blog Title'} heading={'Real Estate'}>
                        <small>12/10/2020</small>
                        <p>
                            Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here. 
                        </p>
                    </ImageInfoItem>
                    <ImageInfoItem link='/blog-entry/' image={blogImg} title={'Blog Title'} heading={'Real Estate'}>
                        <small>12/10/2020</small>
                        <p>
                            Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here. 
                        </p>
                    </ImageInfoItem>
                </OffsetItemContainer>
            </Section>
        </React.Fragment>
    )
}

export default BlogPage