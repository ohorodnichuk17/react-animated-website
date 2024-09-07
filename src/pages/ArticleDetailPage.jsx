import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { articles } from '../json/articles';
import ArticleImage from '../assets/singapore.jpg';

function ArticleDetailPage() {
    const { id } = useParams();
    const article = articles[parseInt(id, 10)];
    const articleRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(articleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    }, []);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="article-detail" ref={articleRef}>
            <div className="article-image">
                <img src={ArticleImage} alt={article.title} />
            </div>
            <div className="article-content">
                <h1>{article.title}</h1>
                <p>{article.category}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>
            </div>
        </div>
    );
}

export default ArticleDetailPage;
