import classes from "./PageNotFound.module.css";
import React from "react";
import clsx from "clsx";

const PageNotFound = () =>{
    return(
        <>
            <div className={classes.center}>
                <div className="error">
                    <div className={classes.number}>4</div>
                    <div className={classes.illustration}>
                        <div className={classes.circle}></div>
                        <div className={classes.clip}>
                            <div className={classes.paper}>
                                <div className={classes.face}>
                                    <div className={classes.eyes}>
                                        <div className={clsx(classes.eye, classes.eye_left)}></div>
                                        <div className={clsx(classes.eye, classes.eye_right)}></div>
                                    </div>
                                    <div className={clsx(classes.rosyCheeks, classes.rosyCheeks_left)}></div>
                                    <div className={clsx(classes.rosyCheeks, classes.rosyCheeks_right)}></div>
                                    <div className={classes.mouth}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.numberText}>죄송합니다</div>
                </div>

                <div className={classes.text}>잘못된 주소로 접근하셨습니다.</div>
                <a className={classes.button} href="/main">메인으로</a>
            </div>
            </>
    )
}

export default PageNotFound;