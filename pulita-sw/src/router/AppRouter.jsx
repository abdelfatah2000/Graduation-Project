import { Component } from "react";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import Detection from "./Detection";


export default class AppRouter extends Component {

    

    render() {
        
        return (
            <div>
                <BrowserRouter>
                   
                    <Route
                        component={() => {
                            return (
                                <Home />
                            );
                        }}
                        path="/"
                        exact
                    />
                    <Route
                        component={() => {
                            return (
                                <Home />
                            );
                        }}
                        path="/Prediction"
                    />
                     <Route
                        component={() => {
                            return (
                                <Detection />
                            );
                        }}
                        path="/Detection"
                    />
                    
                </BrowserRouter>


            </div>
        )}
       
    
}