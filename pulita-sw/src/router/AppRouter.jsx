import { Component } from "react";
import Home from "./Home";
import Pie from "./Pie"
import { BrowserRouter, Route } from "react-router-dom";


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
                        path="/home"
                    />
                     <Route
                        component={() => {
                            return (
                                <Pie />
                            );
                        }}
                        path="/pie"
                    />
                    
                </BrowserRouter>


            </div>
        )}
       
    
}