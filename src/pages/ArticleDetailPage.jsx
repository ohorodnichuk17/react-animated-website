import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { articles } from '../json/articles';
import { imageAnimation } from "../utils/animations.js";

function ArticleDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const article = articles[parseInt(id, 10)];
    const articleRef = useRef(null);
    const h1Ref = useRef(null);
    const pRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(articleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });

        const imgTimeline = gsap.timeline();
        imgTimeline.add(imageAnimation(imgRef.current, 1));

        gsap.fromTo(h1Ref.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });

        gsap.fromTo(pRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.8 });
    }, []);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="article-detail" ref={articleRef}>
            <button className="back-button" onClick={() => navigate('/')}>Back</button>
            <div className="article-image" ref={imgRef}>
                <img src={article.image} alt={article.title} />
            </div>
            <div className="article-content">
                <h1 ref={h1Ref}>{article.title}</h1>
                <p ref={pRef}>{article.category}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>
            </div>
        </div>
    );
}

export default ArticleDetailPage;
