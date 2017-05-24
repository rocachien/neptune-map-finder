/**
 * Created by long on 4/12/17.
 */
"use strict";

import React, {Component} from "react";
import Popup from '../wrapper/map-finder/map-finder-popup-component';
import TextComponent from '../common/text/text-component';

import SearchFilterComponent from '../wrapper/map-finder/map-finder-search-filter-component';
import MapFinderDropdownComponent from  '../wrapper/map-finder/map-finder-dropdown-component';
import SearchResultComponent  from '../wrapper/map-finder/map-finder-result-wrapper-component';
import MapFinder from '../wrapper/map-finder/map-finder-result-map-component';
import * as URLUtils from  '../../utils/url-utils';

export default class MapFinderPageComponent extends Component {
    constructor(props) {


        super(props);
        this.state = {
            resultData:null,
            searchStatus:'',
            isSearching:false,

        };
        this.searchStatus = '';
        this.onSearchStatus = this.onSearchStatus.bind(this);
        this.query = null
    }

    componentDidMount() {

    }

    componentWillUnmount(){

    }


    onClearFilter(){
          this.refs.searchFilter.clearSearch();
          this.refs.searchFilter.focusSearch();
    }

    onSearchAgain(){

        this.refs.searchFilter.focusSearch();
    }
    onSearchStatus(status){
        this.setState({searchStatus:status});
    }






    render() {

        const onClearFilter = () => this.onClearFilter();
        const onSearchAgain = () => this.onSearchAgain();


        return (

            <div className="mapFinderContainer">
                <div className="header">
                    <div className="headerTextWrapper">
                        <p className="textHeader">
                            <TextComponent
                                text    = {'CLUB FINDER'}
                                style   = {{fontSize:12, color:'white',fontFamily: 'Roboto',}}
                            />
                        </p>
                        <p className="textHeader">
                            <TextComponent
                                text    = {'WHERE CAN I PLAY ?'}
                                style   = {{fontSize:26, fontWeight:'600',color:'white',fontFamily: 'Roboto',}}
                            />
                        </p>
                    </div>
                </div>
                <SearchFilterComponent
                    onSearchClick   = {(data)=> this.setState({resultData:data}) }
                    onSearchStatus  = {(dataObject)=> this.onSearchStatus(dataObject)}
                    query={this.query}
                    ref             = "searchFilter"
                />
                <div className="clear">
                </div>
                <SearchResultComponent
                    resultData      = {this.state.resultData}
                    searchStatus    = {this.state.searchStatus}
                    onClearFilter   = {onClearFilter}
                    onSearchAgain   = {onSearchAgain}
                />

                <style>{css}</style>
            </div>


        );

    }




}

const css = `

  .map-wrapper {
         width:1000px;
         height:1000px;
      
    }
    
    .clear{
        display:block;
        clear:both;
     }
     
    .mapFinderContainer {
        width:100%;
        background-color: rgba(241,245,248,1);

    }
    .header {
        width:100%;
        height:131px;
        background-color: rgba(0,154,222,1);
    }
    .headerTextWrapper {
        padding: 15px 0px 0px 0px;
    }
    .textHeader {
        text-align:center;
    }
     @media all and (orientation:landscape) { 
  
       .clear{
        display:none;
     }
     }
     
     body{
     margin:0;
     }


`;