import React, { Component } from 'react';
import Header from '../Components/Header';
import Products from '../Components/Products';
import Results from '../Components/Results';
import Filter from './Filter';
import * as actions from '../Actions';
import {connect} from 'react-redux';
import './App.css';

class CompareApp extends Component {

  // componentWillMount(){
  //   this.props.getProducts;
  // }

  openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
  }

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  getVisibleProducts=(products=this.props.products,filter=this.props.filter)=>{
  
  switch(filter.name){
    case 'SHOW_CHEAP':
      return products.filter(p=>p.priceCategory=="C")
    case 'SHOW_AFFORDABLE':
      return products.filter(p=>p.priceCategory=="A")
    case 'SHOW_EXPENSIVE':
      return products.filter(p=>p.priceCategory=="E")
    case 'SEARCH_PRODUCT':
      console.log("SEARCH_PRODUCT: ", products.filter(product=>product.name.includes(filter.text)))
      return products.filter(p=>p.name.trim().includes(filter.text))
    case 'SHOW_ALL':
      return products
    default:
      console.log("default list: "+products);
      return products
  }
}

  render() {
    console.log("render called");
    return (
      <React.Fragment>
        <Header openNav={this.openNav} badgeNumber={this.props.compareProducts.length} onReset={this.props.reset} onSearch={this.props.search}/>
        <Filter />
        <Products items={this.getVisibleProducts()} onCompare={this.props.compare}/>
        <Results closeNav={this.closeNav} products={this.props.compareProducts} />
      </React.Fragment>
    );
  }
}

const mapStateToProps= state => {

  return {
    products: state.productsList.products,
    filter: state.visibilityFilter.filter,
    compareProducts: state.productsList.products.filter(product=>product.compare)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: dispatch(actions.getProducts()),
    compare: product=>dispatch(actions.compare(product)),
    reset: ()=>dispatch(actions.resetCompare()),
    search: filter =>{
      filter.text=document.getElementById('search').value.trim();
      console.log("Search: "+filter.text)
      dispatch(actions.setFilter(filter))
    }
  }
}

const App=connect(mapStateToProps,mapDispatchToProps)(CompareApp);

export default App;