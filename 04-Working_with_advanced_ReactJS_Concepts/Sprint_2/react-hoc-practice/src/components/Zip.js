import FormWrapper from "./FormWrapper";


function Zip(props) {
    
    return(
        <div>
            <form onSubmit={props.superman.handleSubmit}>
                <label htmlFor="zip">zip</label>
                <input type='text' id="zip" name="zip" onBlur={props.superman.handleBlur} onChange={props.superman.handleChange} value={props.superman.values.zip}/>
                {props.superman.errors.zip && props.superman.touched.zip ?<div style={{color:'red'}}>{props.superman.errors.zip}</div> : null}
                <br />

                <br />
               
            </form>
        </div>
    )
}
export default FormWrapper(Zip,{
    initialValues:{
        zip:'',
        
    },
    onSubmit:(values)=>{
        console.log('Form data',values);
    },
    validate:(values)=>{
       
        let errors={};
        if(values.zip==''){
         errors.zip="Required";}
        else if (values.zip.length !== 6 || isNaN(values.zip)){
        errors.zip = "Enter 6 digit number only ";}
        return errors;
    }
}
);