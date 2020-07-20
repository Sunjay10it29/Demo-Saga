import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: "inline-block",
        marginTop: 5,
        marginBottom: 0,
    },
    
}));
const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
    const classes = useStyles();
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (     
        <Container fluid="md">
        <nav className={classes.root}>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        </Container>  

    );
};

export default Pagination;