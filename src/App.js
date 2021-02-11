import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './Components/header/header.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import Checkout from './pages/checkout/checkout.component'


import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import { connect } from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser} from './redux/user/user.selector'

class App extends React.Component{


  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
   if(userAuth){
    const userRef = await createUserProfileDocument(userAuth);
    userRef.onSnapshot(snapShot => {
      setCurrentUser({
        currentUser : {
          id: snapShot.id,
          ...snapShot.data()
        }
      }, ()=> console.log(this.state))
    });
   }
   else{
    setCurrentUser(userAuth);
   }
   
    })
    
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className='app'>
        <Header/>
        <Switch>
        <Route exact path ='/' component = {HomePage} />
         <Route path = '/shop' component = {ShopPage} />
         <Route exact path = '/signin' render = {()=> this.props.currentUser ?(<Redirect to = '/' /> ): (<SignInSignUp />)} />
         <Route exact path = '/checkout' component = {Checkout} />
        </Switch>
    
      </div>
    );
  }
 
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
