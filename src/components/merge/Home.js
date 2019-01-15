import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Body from '../content/Body';
import axios from 'axios';
import parser from 'fast-xml-parser';
import shortid from 'shortid';
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

            // const value = event.target.value;
            // this.setState(prevState => {
            //     return { value: prevState.value + value }
            // });

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
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=fcaa15e03606df98b2bdf920ab24801c&language=en&page=1';
        const myData = await axios.get(url);
        
        console.log(myData.data.results[2]);

        let jsondata;
        let drinksurl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
        let bookurl3 = 'http://cors-anywhere.herokuapp.com/https://www.goodreads.com/author/show/18541?format=xml&key=YD7ebrtO1W9wgyWqEWRqQ';

        let bookurl = 'http://cors-anywhere.herokuapp.com/https://www.goodreads.com/group/search.xml?key=YD7ebrtO1W9wgyWqEWRqQ&q=adventure';
        let zillow = 'http://cors-anywhere.herokuapp.com/http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz1gtv23mlm2z_3if65&state=wa&city=seattle&childtype=neighborhood';

         let drinks = await axios.get(drinksurl);

         this.setState({
             drinksData: drinks.data
         });

         let myDrinks = this.state.drinksData;

        console.log(myDrinks.drinks);
    }


    render() {
        //console.log(this.state.renderDrinks);
        let someddrinks;
        let mapDrink;
        let strIngredient = "strIngredient";
        let testst = strIngredient + "1";
        console.log(testst);
        try {
            //jsondata = parser.parse(this.state.drinksData.data);
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