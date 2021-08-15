import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles ((theme)=>(
    {root:{
        display:"flex",
        marginLeft:"10%",
        marginRight:"auto",
        marginTop:"5%",
        
    },
    card:{
        backgroundColor:"transparent",
        width:"auto",
        border:"none",
        boxShadow:"none"
    },
    text:{
        fontFamily: 'Gill Sans',

    
    },
    mark: {
        display: "inline-block",
        lineHeight: "0em",
        paddingBottom: "0.5em",
      },
    yellowHighlight: {
        fontFamily: 'Gill Sans',
        textShadow: "-3px 0px 3px yellow 3px 0px 3px yellow 6px 0px 6px yellow -6px 0px 6px yellow"
      },
    img:{
        width:"90%",
        height:0,
        paddingTop:"80%"
    },
    ad:{
        
        position:"fixed",
        width:"85%",
        height:"70%",
        zIndex:3,
        marginLeft:"auto",
        transform:'translate(0%,2%)',
        overflow:"auto",
        background: "rgb(227,225,54)",
        background: "linear-gradient(90deg, rgba(227,225,54,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
        
    },
    closeButton:{
        position:"fixed",
        justifyContent:"flex-end",
        right:"3%"
        
    }, 
    gray:{
        position:"fixed",
        width:"100%",
        height:"100%",
        zIndex:2,
        filter:"opacity(0.8)",
        objectFit:"cover",
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
    },
    video:{
        width:"90%",
        height:"auto",    
        transform:"translate(0%,0%)"
    },
    icon:{
        position:"fixed",
        transform:"scale(0.15,0.15)",
        bottom:"10%",
        right:-110,  
        zIndex:"1",
        animation: `$shake 300ms `,
        animationIterationCount: "infinite",
    },
    "@keyframes shake":{
      "0%": { transform: "translate(1px, 1px) rotate(0deg) scale(0.15,0.15)" },
      "20%": { transform: "translate(-3px, 0px) rotate(1deg) scale(0.15,0.15)" },
      "40%": { transform: "translate(1px, -1px) rotate(1deg) scale(0.15,0.15)" },
      "60%": { transform: "translate(-3px, 1px) rotate(0deg) scale(0.15,0.15)" },
      "80%": { transform: "translate(-1px, -1px) rotate(1deg) scale(0.15,0.15)" },
      "100%": { transform: "translate(1px, -2px) rotate(-1deg) scale(0.15,0.15)"}
    },     
}
))
export default useStyles