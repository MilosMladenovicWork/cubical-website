import React, {useState, useEffect} from 'react'

import styles from './blog.module.scss'
import PageIntro from '../../components/PageIntro'
import MarginContainer from '../../components/MarginContainer'
import OffsetItemContainer from '../../components/OffsetItemContainer'
import ImageInfoItem from '../../components/ImageInfoItem'
import blogImg from '../../img/blog.jpg'
import Section from '../../components/Section'
import ButtonBordered from '../../components/ButtonBordered'

const BlogPage = () => {

    const [numOfLoadedItems, setNumOfLoadedItems] = useState(5)
    const [scrollFromTop, setScrollFromTop] = useState(0)

    const dummyArray = [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ]

    const setScrollPosition = () => {
        setScrollFromTop(window.pageYOffset)
    }

    useEffect(() => {   
        window.scrollTo(0, scrollFromTop)
    }, [numOfLoadedItems])

    return(
        <React.Fragment>
            <MarginContainer/>
            <PageIntro title='Blog'>
                <p>This is some example sentence. This is some example sentence but a little longer one. This is some example sentence. This is some example sentence. This is some example sentence but a little longer one. This is some example sentence. This is some example sentence. This is some example sentence but a little longer one. This is some example sentence. </p>
            </PageIntro>
            <Section>
                <OffsetItemContainer>
                    {dummyArray.map((item, index) => {
                        if(index < numOfLoadedItems){
                        return <ImageInfoItem link='/blog-entry/' image={blogImg} title={'Blog Title'} heading={'Real Estate'}>
                                    <small>12/10/2020</small>
                                    <p>
                                        Some blog post about real estate text here. Some blog post about real estate text here. Some blog post about real estate text here. 
                                    </p>
                                </ImageInfoItem>
                        }
                    })
                    }
                </OffsetItemContainer>
                <div className={styles.seeMoreButton}>
                    <ButtonBordered onClick={() => {setScrollPosition();setNumOfLoadedItems(prevState => prevState + 5)}}>
                        Mehr Anzeigen
                    </ButtonBordered>
                </div>
            </Section>
        </React.Fragment>
    )
}

export default BlogPage