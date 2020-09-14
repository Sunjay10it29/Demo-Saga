import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getArticles,
  clearArticles
} from "../../store/actions/articleActions";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import styles from "../../../src/main.css";
import { Article } from "../article/article";
import Pagination from '../pagination/Pagination'
import Grid from "@material-ui/core/Grid";
import Form from "../form/form";

const MainPage = props => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(12);

  useEffect(() => {
    (async () => {
      try {
        await props.getArticles();
      } catch (e) {
        console.error(e);
      }
    })();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const topicHandler = event => {
    setQuery(event.target.value);
  };


  const clearSearch = () => {
    props.clearArticles();
    resetFields();
    props.getArticles();
  };

  const resetFields = () => {
    setQuery("");
  };


  const indexOfLastPost = currentPage * articlesPerPage;
  const indexOfFirstPost = indexOfLastPost - articlesPerPage;
  const currentPost = props.articles ? props.articles.slice(indexOfFirstPost, indexOfLastPost) : null

  const articles = props.articles ? currentPost.map((article) => {
      let author = null;
      let authorURL = null;
      if (article.tags[0]) {
        author = article.tags[0].webTitle;
        authorURL = article.tags[0].webUrl;
      }
      let keys = '';
  
      if (article.webTitle.toLowerCase().indexOf(query.toLowerCase()) === -1 &&
        article.sectionId.toLowerCase().indexOf(query.toLowerCase()) === -1 &&
        article.sectionName.toLowerCase().indexOf(query.toLowerCase()) === -1 &&
        article.fields.headline.toLowerCase().indexOf(query.toLowerCase()) === -1 &&
        article.fields.trailText.toLowerCase().indexOf(query.toLowerCase()) === -1)
        return console.log(article);
  
      if (article.webTitle.toLowerCase().indexOf(query.toLowerCase()) === -1) {
        var m = article.sectionName.toLowerCase().split(' ');
        for (var i in m)
          if (m[i].indexOf(query.toLowerCase()) !== -1)
            keys = m[i];
      } else {
        keys = article.webTitle.toLowerCase();
      }

   

    return (

      <Grid key={article.id + 1} item xs={12} sm={6} md={3}>
        <Article
          className={styles.Article}
          type={article.type}
          webTitle={article.webTitle}
          webUrl={article.webUrl}
          img={article.fields.thumbnail}
          headline={article.fields.headline}
          body={article.fields.trailText}
          author={author}
          authorURL={authorURL}
          date={new Date(article.webPublicationDate).toLocaleString()}
          section={article.sectionName}
        />
      </Grid>
    );
  }) : null

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const body = props.loading ? (
    <div styles={{ flexGrow: 0.8 }}>

    </div>
  ) : (
      <Grid container spacing={2}>
        {articles}
      </Grid>
    );
  return (
    <Container style={{ margin: "0", alignItems: "center" }} maxWidth="xl">
      <Divider variant="middle" />
      <Container
        maxWidth="lg"
        style={{
          border: "1px solid rgba(0, 0, 0, 0.23) ",
          paddingTop: "2em",
          paddingBottom: "2em",
          borderRadius: "4px",
          marginTop: "2em"
        }}
      >
        <Form
          query={query}
          topicHandler={event => topicHandler(event)}
        />
        <div
        >
          <Button variant="outlined" color="default" onClick={clearSearch}>
            Clear Search
          </Button>
        </div>
      </Container>
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={props.numberOfPages ? props.numberOfPages.pageSize : null}
        paginate={paginate}
      />
      {body}
      <div id="grid" />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    articles: state.articles,
    currentPage: state.currentPage,
    numberOfPages: state.numberOfPages
  };
};


const mapActionsToProps = dispatch => {
  return {
    getArticles: () => dispatch(getArticles()),
    clearArticles: () => dispatch(clearArticles())
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(MainPage);
