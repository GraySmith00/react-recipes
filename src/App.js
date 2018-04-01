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
          id: 1,
          title: 'Prince Pizza',
          instructions: 'Iceland venmo celiac pinterest disrupt freegan asymmetrical banh mi 8-bit tbh viral.',
          ingredients: ['bread', 'tomatoe sauce', 'pepperoni'],
          img: 'princePizza.jpg'
        },
        {
          id: 2,
          title: 'Veggie Taco',
          instructions: 'Pinterest shoreditch echo park, shabby chic actually chia tacos meh tumeric lomo iceland offal knausgaard.',
          ingredients: ['hummus', 'peppers', 'sweet potato'],
          img: 'veggieTaco.jpg'
        },
        {
          id: 3,
          title: 'Roasted Vegetables',
          instructions: 'Yr echo park direct trade neutra artisan hot chicken next level vaporware meh.',
          ingredients: ['potatoes', 'red onion', 'cauliflower'],
          img: 'roastedVeggies.jpg'
        }      
      ],
      nextRecipeId: 4
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeInput />
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
