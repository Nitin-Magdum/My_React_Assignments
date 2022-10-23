import FormWrapper from "./FormWrapper";


function Country(props) {
    
    return(
        <div>
            <form onSubmit={props.superman.handleSubmit}>
                <label htmlFor="Country">Country</label>
                <input type='text' id="Country" name="Country" onBlur={props.superman.handleBlur} onChange={props.superman.handleChange} value={props.superman.values.Country}/>
                {props.superman.errors.Country && props.superman.touched.Country ?<div style={{color:'red'}}>{props.superman.errors.Country}</div> : null}
                <br />

                <br />
               
            </form>
        </div>
    )
}
export default FormWrapper(Country,{
    initialValues:{
        Country:'',
        
    },
    onSubmit:(values)=>{
        console.log('Form data',values);
    },
    validate:(values)=>{
       
        let errors={};
        if(values.Country==''){
         errors.Country="Required";}
        else if (values.Country.length !== 6 || isNaN(values.Country)){
        errors.Country = "Enter 6 digit number only ";}
        return errors;
    }
}
);