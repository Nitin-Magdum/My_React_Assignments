import FormWrapper from "./FormWrapper";


function FormsDemo4(props) {
    
    return(
        <div>
            <form onSubmit={props.superman.handleSubmit}>
                <label htmlFor="city">city</label>
                <input type='text' id="city" name="city" onBlur={props.superman.handleBlur} onChange={props.superman.handleChange} value={props.superman.values.city}/>
                {props.superman.errors.city && props.superman.touched.city ?<div style={{color:'red'}}>{props.superman.errors.city}</div> : null}
                <br />

                <br />
               
            </form>
        </div>
    )
}
export default FormWrapper(FormsDemo4,{
    initialValues:{
        city:'',
        
    },
    onSubmit:(values)=>{
        console.log('Form data',values);
    },
    validate:(values)=>{
       
        let errors={};
        if(values.city==''){
         errors.city="Required";}
        else if (values.city.length < 32){
         errors.city = "Minimum length is 32 characters";}
        
        return errors;
    }
}
);