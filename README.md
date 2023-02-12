1) created react app using ---> npx create-react-app
2) App.js 
    
      a) it returns a Button and the brand logo ---> (present in navbar) 
      b) on Button Click a function gets called which returns the API result in JSON format.
      c) useState() : 
            The returned data from API is stored into variable named as data using useState. 
      d) data is then rendered on website in the GRID FORMAT.
         
         Styled-Components : 
         <Container> = main wrapper;
         <Grid>      = grid view of rendered data is handled by this styled-component; 
         <Header>    = conatins all navbar elements;
         <Button>    
              
         
3) Loading.js
      a) Loading component renders the spinner on Page while we are fetching the data from API, (so it makes it more user friendly).
      b) I have installed spinner-react which provides a inbuilt component <SpinnerCircular>


4)UserCard.js
     each card displays a avatar/image of person,name and email-id;  

5) I have made use of styled-components, CSS, and different kind of dependencies, which are there in package.json.
