import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: 'Prince Pizza',
        instructions: 'Iceland venmo celiac pinterest disrupt freegan asymmetrical banh mi 8-bit tbh viral.',
        ingredients: ['bread', 'tomatoe sauce', 'pepperoni'],
        img: 'princePizza.jpg'
      },
      {
        title: 'Veggie Taco',
        instructions: 'Pinterest shoreditch echo park, shabby chic actually chia tacos meh tumeric lomo iceland offal knausgaard.',
        ingredients: ['hummus', 'peppers', 'sweet potato'],
        img: 'veggieTaco.jpg'
      },
      {
        title: 'Roasted Vegetables',
        instructions: 'Yr echo park direct trade neutra artisan hot chicken next level vaporware meh.',
        ingredients: ['potatoes', 'red onion', 'cauliflower'],
        img: 'roastedVeggies.jpg'
      }      
    ]
  }
  
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  
  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ))
    
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )
  }
}

export default RecipeList;