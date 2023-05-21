import React ,  {Component} from "react";
import '../../style.css';
import DashNav from "../../components/dashboard/dash-navbar";
import DashContainer from "../../components/dashboard/dash-container";
import DashHome from "../../components/dashboard/dash-home";
import { Link } from "react-router-dom";
export default class Dashboard extends Component{
  
    render(){
        return(
            <div className="">
                <head>
                <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.12.1/css/pro.min.css"></link>
                </head>
                <DashNav />
                <DashContainer />
                <DashHome />
                
            </div>
        )
    }
  
}   
