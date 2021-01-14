import React from 'react';
import articles from './Article-content';
const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articles.find(article => article.name === name);
    return (
        <>
        <h1>{article.name}</h1>
        {article.content.map((paragraph, key) => (
            <p key ={key}>{paragraph}</p>
            ))}
        </>
    );
}
export default ArticlePage;