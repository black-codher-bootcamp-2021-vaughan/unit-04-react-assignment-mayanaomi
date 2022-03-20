const Product = [
    { trackName:"Thinkin Bout You", trackPrice:"1.29", borderColour:"Black" },
    { trackName:"Orange", trackPrice:"1.29", borderColour:"gold" },
    { trackName:"Forrest Gump", trackPrice:"1.29", borderColour:"gold" },
    { trackName:"Bad Religion", trackPrice:"1.29", borderColour:"gold" },
    { trackName:"R.E.M.", trackPrice:"1.29", borderColour:"gold" },
    { trackName:"Pilot Jones", trackPrice:"1.29", borderColour:"gold" },
    { trackName:"September 29, 2016 - Blood Orange", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"White (feat. John Mayer)", trackPrice:"1.29", borderColour:"gold" },
    { trackName:"Not Just Money", trackPrice:"1.29", borderColour:"gold" },
    { trackName:"End", trackPrice:"1.29", borderColour:"gold" },
    { trackName:"Start", trackPrice:"1.29", borderColour:"gold" },
    { trackName:"Orange Blossom Special", trackPrice:"1.29", borderColour:"gold" },
    { trackName:"Stranger Things Have Happened", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"Orange County", trackPrice:"12.99", borderColour:"gold" },
    { trackName:"Orange", trackPrice:"0.99", borderColour:"gold" },
    { trackName:"Southern Hospitality", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"The Honeymoon Is Over", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"Finale, Pt. 2: Are You In or Out?", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"Finale, Pt. I: Let Them Eat Cake", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"Reunion, Pt. 1", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"Who's Laughing Now", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"Reunion, Pt. 2", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"Rumble in the Jungle", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"The Burnt Orange Heresy", trackPrice:"12.99", borderColour:"gold" },
    { trackName:"Dirty Housewives", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"He Said What?", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"Will He or Won't He", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"What's New, Pussycat?", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"The Party's Over", trackPrice:"1.99", borderColour:"gold" },
    { trackName:"Bowling for Champs", trackPrice:"1.99", borderColour:"gold" },
  ];
  

const ProductList = (props) => {
    const{ products } = props;
    return products.map((product) => (
        <product
         trackName={product.trackName} 
         trackPrice={product.trackPrice} 
         borderColour="black"
         />
    ));
  };

  export default ProductList;