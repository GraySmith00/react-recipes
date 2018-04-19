import React, { Component } from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: 'Prince Pizza',
          instructions: 'Iceland venmo celiac pinterest disrupt freegan asymmetrical banh mi 8-bit tbh viral.',
          ingredients: ['bread', 'tomatoe sauce', 'pepperoni'],
          img: 'princePizza.jpg'
        },
        {
          id: 1,
          title: 'Veggie Taco',
          instructions: 'Pinterest shoreditch echo park, shabby chic actually chia tacos meh tumeric lomo iceland offal knausgaard.',
          ingredients: ['hummus', 'peppers', 'sweet potato'],
          img: 'veggieTaco.jpg'
        },
        {
          id: 2,
          title: 'Roasted Vegetables',
          instructions: 'Yr echo park direct trade neutra artisan hot chicken next level vaporware meh.',
          ingredients: ['potatoes', 'red onion', 'cauliflower'],
          img: 'roastedVeggies.jpg'
        }      
      ],
      nextRecipeId: 3,
      showForm: false
    };
    
    this.handleSave = this.handleSave.bind(this);
  }
  
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    })
  }
  
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        {showForm ? 
          <RecipeInput 
            onSave={this.handleSave}
            onClose={() => this.setState({showForm: false})}
          /> 
        : null}
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
