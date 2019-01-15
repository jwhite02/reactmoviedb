import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Body from '../content/Body';
import axios from 'axios';
import FormSearch from '../forms/FormSearch';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookData: [],
            webBookData: [],
            drinksData: [],
            drinksData2: [],
            renderDrinks: [],
            drinkName: '',
            value: ''
        };
    }
  


    handleChange = (event) => {
        if (event.target.name === "drinkName") {
            console.log("in handChange " + event.target.value)
            
            this.setState({ value: event.target.value });

            console.log("My drinkname " + this.state.drinkName);
        }
    }

    /*  leave of 'const' when used in a class */
     getDrinks = async (evt) => {
         const drinkName = evt.target.drinkName.value;
         evt.preventDefault();
         //alert(drinkName);
         let drinksurl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;
         console.log(drinksurl);

         const myDrinkData = await axios.get(drinksurl);
         this.setState({
             drinksData2: myDrinkData.data
         });

         if (this.state.drinksData2.drinks === null || undefined) {
             this.setState({
                 drinksData2: ["No Match"]
             });
         }
         console.log(this.state.drinksData2);

    }

    componentDidMount = async () => {
        let drinksurl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
        
         let drinks = await axios.get(drinksurl);

         this.setState({
             drinksData: drinks.data
         });

         let myDrinks = this.state.drinksData;

        console.log(myDrinks.drinks);
    }

    render() {
        let someddrinks;
        let mapDrink;
        let strIngredient = "strIngredient";
        let testst = strIngredient + "1";
        console.log(testst);
        try {
            if (this.state.drinksData2 !== null || undefined) {
                if (this.state.drinksData2[0] === "No Match") {
                    someddrinks = [<div className="mx-auto" > <h1>No Match</h1> </div>];
                    console.log(someddrinks);
                }
                 mapDrink = this.state.drinksData2.drinks;
                 console.log(mapDrink);
                someddrinks = mapDrink.map((adrink) => {
                    return <div key={adrink.idDrink}>
                        <Card className="m-1 mb-4" style={{ width: 20 + 'rem' }}>
                            <CardImg top width="100%" src={adrink.strDrinkThumb} alt="Card image cap" />
                            <CardBody>
                                <CardTitle><h3>{adrink.strDrink}</h3></CardTitle>
                                <CardSubtitle>{adrink.strIngredient1}</CardSubtitle>
                                <CardText style={{ fontSize: 1.25 + 'rem' }} > Directions: {adrink.strInstructions}  </CardText>
                                <CardLink href="#">Card Link</CardLink>
                            </CardBody>
                        </Card>
                    </div>
                });
            }
        }
        catch {
            console.error('An error occurred fetching XML');
        }

        return (
            <div>
                <Header />
                <FormSearch value={this.state.value} handleChange={this.handleChange} getDrinks={this.getDrinks}  />
                <Body>
                    <div className="d-lg-flex flex-wrap cardHolder justify-content-center">
                        {someddrinks}
                    </div>
                </Body>
                <Footer />
            </div>
        );
    }
}

export default Home;