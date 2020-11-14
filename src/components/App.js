import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import Alert from "./Alert";
import styles from "./App.module.css";
import loadingSelectors from "../redux/loading/loadingSelectors";
import "./animation.css";

function Phonebook(props) {
    return (
        <>
            {props.loading && <p>loading...</p>}
            <CSSTransition
                in={true}
                appear={true}
                unmountOnExit
                timeout={250}
                classNames="container"
            >
                <section className={styles.container}>
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={725}
                        unmountOnExit={true}
                        classNames="title"
                    >
                        <h1 className={styles.title}>Phonebook</h1>
                    </CSSTransition>
                    <ContactForm />
                    <h2 className={styles.contacts}>Contacts</h2>
                    <Filter />
                    <ContactList />
                </section>
            </CSSTransition>
            <Alert />
        </>
    );
}
const mapStateToProps = (state) => ({
    loading: loadingSelectors.isLoading(state),
});
export default connect(mapStateToProps)(Phonebook);
