
    function Card(props) {
      const cardContainerStyle = {
        width: "20%",
        height: "100%",
        backgroundColor: "#280034",

      };
      const containerDetailsStyle = {
        width: "100%",
        height: "50%",
       backgroundColor:"black",
       
      };
      const paragraphStyle = {
       color:"white",
       fontSize:"16px",
       textTransform: "capitalize",
       textAlign:"start",
       fontWeight:"900",
       marginTop:"20px",
       padding:"10px"
      };
      return (
        <div style={cardContainerStyle}>
            <div style={containerDetailsStyle}>
            </div>
            <p style={paragraphStyle}>{props.text}</p>
        </div>
      );
    }

    function MyApp() {



        const mainContainerStyle = {
            backgroundColor:"beige",
             width:"100%",
            height:"100vh",
             justifyContent:"center",
            alignItems:"center",
              display: "flex",
            padding: "40px"
          };
        const wrapperStyle = {
            backgroundColor:"#9A0046",
             width:"100%",
            height:"50%",
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            gap: "18px" ,
            padding: "15px"
          };
      return (
        <div style = {mainContainerStyle}>
            <div style = {wrapperStyle}>
            <Card background="yellow" color="black" text = "the many media mutation of  teenage mutant ninga turties " />
          <Card background="purple" color="white" text = "a day in the life of TMNT's foot clan "/>
            <Card background="yellow" color="black" text = "saw x filmmaker on  going old school with an untold chapter for jigsaw "/>
          <Card background="blue" color="white" text = "honest game trailers|final fantasy xvi "/>
          <Card background="purple" color="white" text = "captain america sings! how disney made rogers:the musical a reality "/>

            </div>
        
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<MyApp />);